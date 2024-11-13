import { useState } from 'react';

import { dummyData } from './dummyData';

import NavBar from '@components/enterCourse/navBar';
import MyCourseComponent from '@components/enterCourse/myCourse';
import CourseComponent from '@components/enterCourse/courseComponent';

import LeftArrow from '@assets/enterCourse/leftArrow.svg';
import RightArrow from '@assets/enterCourse/rightArrow.svg';

const EnterCoursePage = () => {
  const stepItem = [
    { index: 1, title: `인하대학교 포털시스템` },
    { index: 2, title: '학사행정' },
    { index: 3, title: '성적' },
    { index: 4, title: '취득학점 현황조회' },
    { index: 5, title: '전체성적표 Excel / PDF 저장' },
  ];

  const [type, setType] = useState<string>('search');
  const [searchInput, setSearchInput] = useState<string>('');
  const [courseData, setCourseData] = useState({
    courseId: 0,
    courseName: '',
    status: '',
    credit: 0,
  });

  const [filterValue, setFilterValue] = useState<number>(15);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(4);

  const handlePageClick = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPage) {
      setPage(pageNumber);
    }
  };

  return (
    <main className="pb-20">
      <header className="mb-10 mt-40 text-center">
        <p className="text-2xl font-semibold">수강 이력 입력</p>
      </header>

      <section className="flex flex-col items-center space-y-10 bg-[#F5F5F5] py-10">
        <h2 className="text-xl font-semibold">성적표 불러오기</h2>

        <ol className="flex flex-row space-x-5" aria-label="성적표 불러오기 단계">
          {stepItem.map((step) => (
            <li key={step.index} className="flex flex-row items-center">
              <div className="flex flex-col items-center">
                <strong>Step {step.index}</strong>
                <p>{step.title}</p>
              </div>

              {step.index < stepItem.length && (
                <img src={RightArrow} alt="Arrow Icon" className="px-5" />
              )}
            </li>
          ))}
        </ol>

        <label htmlFor="upload" className="cursor-pointer rounded-five bg-[#005BAC] p-4 text-white">
          파일 업로드하기
        </label>
        <input type="file" id="upload" className="hidden" />
      </section>

      <NavBar type={type} setType={setType} />

      <section className="mx-auto w-4/5">
        <form className="mt-20 flex flex-row justify-center space-x-4">
          <label htmlFor="course-search" className="sr-only">
            과목 검색
          </label>
          <input
            id="course-search"
            className="w-80 rounded-five border border-black p-4 text-sm"
            type="text"
            placeholder="학수번호를 검색하세요. (ex. GEB2024-001)"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="submit" className="rounded-five bg-[#005BAC] px-6 py-4 text-white">
            과목 검색
          </button>
        </form>

        <div className="flex flex-col items-center">
          <CourseComponent mode="search" value={courseData} />
        </div>

        <section className="flex flex-col">
          <h2 className="mb-5 text-xl font-semibold">내 수강 이력</h2>

          <MyCourseComponent courseData={dummyData} />

          <nav aria-label="Pagination" className="mt-5 flex justify-center space-x-3">
            <img
              src={LeftArrow}
              className="cursor-pointer"
              onClick={() => page > 1 && handlePageClick(page - 1)}
              alt="Previous Page"
            />
            {Array.from({ length: totalPage }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageClick(index + 1)}
                className={`text-[#757575] ${page === index + 1 ? 'font-semibold' : 'font-normal'}`}
              >
                {index + 1}
              </button>
            ))}
            <img
              src={RightArrow}
              className="cursor-pointer"
              onClick={() => page < totalPage && handlePageClick(page + 1)}
              alt="Next Page"
            />
          </nav>
        </section>
      </section>
    </main>
  );
};

export default EnterCoursePage;
