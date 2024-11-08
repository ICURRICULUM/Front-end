import React, { useState } from 'react';
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
    <main className="mx-auto w-4/5">
      <header className="mt-40 text-center">
        <h1>마이페이지</h1>
      </header>

      <section className="flex w-full flex-col">
        <article className="flex flex-col space-y-20">
          <section className="flex flex-row space-x-10">
            <MyInfo myInfoData={myInfoData} />
            <aside className="flex flex-col items-center space-y-2.5">
              <CheckList checkListData={checkListData} />
              <button
                onClick={checkRequirement}
                className="rounded-[5px] border border-[#005BAC] text-xl font-semibold text-[#005bac]"
              >
                내 졸업요건 확인하기
              </button>
            </aside>
          </section>

          <section className="flex flex-col space-y-5">
            <header className="flex flex-row items-center space-x-4">
              <img src={FolderIcon} alt="Folder Icon" />
              <h2 className="text-xl font-semibold">내 수강 이력</h2>
            </header>
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
                  className={`text-[#757575] ${
                    page === index + 1 ? 'font-semibold' : 'font-normal'
                  }`}
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
        </article>
      </section>
    </main>
  );
};

export default MyPage;
