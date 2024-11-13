import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { dummyData } from '@pages/enterCourse/dummyData';

import MyInfo from '@components/myPage/myInfo';
import CheckList from '@components/myPage/checkList';
import MyCourseComponent from '@components/enterCourse/myCourse';

import FolderIcon from '@assets/enterCourse/folder.svg';
import LeftArrow from '@assets/enterCourse/leftArrow.svg';
import RightArrow from '@assets/enterCourse/rightArrow.svg';

const MyPage = () => {
  const navigate = useNavigate();

  const myInfoData = {
    name: '김인하',
    admissionYear: 20,
    major: '소비자학과',
    doubleMajor: ['경영학과(부전공)', '소비문화콘텐츠(연계전공)'],
    email: 'kiminha@inha.edu',
  };

  const checkListData = [
    {
      checkListId: 1,
      title: '영어졸업인증',
      isDone: false,
    },
    {
      checkListId: 2,
      title: '졸업 논문 제출',
      isDone: false,
    },
    {
      checkListId: 3,
      title: '평균 평점 3.3 이상',
      isDone: false,
    },
  ];

  const checkRequirement = () => {
    navigate('/requirement');
  };

  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(4);

  const handlePageClick = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPage) {
      setPage(pageNumber);
    }
  };

  return (
    <main className="mx-auto max-w-5xl py-20">
      <header className="mt-20 text-center">
        <p className="text-3xl font-bold">마이페이지</p>
      </header>

      <section className="mt-10 flex flex-col items-center">
        <article className="flex w-full flex-row justify-between">
          <MyInfo myInfoData={myInfoData} />
          <aside className="flex min-w-[440px] flex-col items-center space-y-4">
            <CheckList checkListData={checkListData} />
            <button
              onClick={checkRequirement}
              className="w-full rounded-md border border-[#005BAC] px-4 py-2 text-lg font-semibold text-[#005bac] hover:bg-[#005BAC] hover:text-white"
            >
              내 졸업요건 확인하기
            </button>
          </aside>
        </article>

        <section className="mt-16 w-full">
          <header className="mb-5 flex items-center space-x-4">
            <img src={FolderIcon} alt="Folder Icon" className="h-6 w-6" />
            <h2 className="text-xl font-semibold">내 수강 이력</h2>
          </header>

          <MyCourseComponent courseData={dummyData} />

          <nav aria-label="Pagination" className="mt-8 flex justify-center space-x-3">
            <img
              src={LeftArrow}
              className={`cursor-pointer ${page <= 1 ? 'cursor-default opacity-50' : ''}`}
              onClick={() => page > 1 && handlePageClick(page - 1)}
              alt="Previous Page"
            />
            {Array.from({ length: totalPage }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageClick(index + 1)}
                className={`text-lg ${
                  page === index + 1 ? 'font-bold text-black' : 'text-[#757575]'
                }`}
              >
                {index + 1}
              </button>
            ))}
            <img
              src={RightArrow}
              className={`cursor-pointer ${page >= totalPage ? 'cursor-default opacity-50' : ''}`}
              onClick={() => page < totalPage && handlePageClick(page + 1)}
              alt="Next Page"
            />
          </nav>
        </section>
      </section>
    </main>
  );
};

export default MyPage;
