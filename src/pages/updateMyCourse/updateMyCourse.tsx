import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetTakeLists } from '@hooks/take/hook';

import MyCourseComponent from '@components/enterCourse/myCourse';

import BackButton from '@assets/backButton.svg';

const UpdateMyCoursePage = () => {
  const navigate = useNavigate();

  // Pagination 관련
  const [page, setPage] = useState<number>(0);
  const [size, setSize] = useState<number>(15);

  const { data: myCourseData, refetch: refetchTakeLists } = useGetTakeLists(page, size);

  const [totalPage, setTotalPage] = useState<number>(myCourseData.result.totalPage);

  useEffect(() => {
    if (myCourseData.result.totalPage) {
      setTotalPage(myCourseData.result.totalPage);
    }
  }, [myCourseData.result]);

  const handlePageClick = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const handleSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(Number(e.target.value));
    setPage(0);

    refetchTakeLists();
  };

  return (
    <main className="mx-auto w-[1000px]">
      <section className="flex flex-col space-y-10 pt-10">
        <header className="mt-20 flex flex-row justify-between text-center">
          <button onClick={() => navigate('/entercourse?type=search')}>
            <img src={BackButton} />
          </button>

          <p className="text-3xl font-bold">수강이력 수정</p>

          <div className="w-6" />
        </header>

        <section>
          <MyCourseComponent
            courseData={myCourseData.result.takeList}
            page={page}
            totalPage={totalPage}
            size={size}
            setSize={handleSize}
            handlePageClick={handlePageClick}
          />
        </section>
      </section>
    </main>
  );
};

export default UpdateMyCoursePage;
