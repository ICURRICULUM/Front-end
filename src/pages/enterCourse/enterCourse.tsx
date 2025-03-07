import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetTakeLists } from '@hooks/take/hook';

import CustomPage from './custom';
import SearchCoursePage from './search';
import FileUploadPage from './fileUpload';

import NotFoundPage from '@pages/notFound/notFound';

import NavBar from '@components/enterCourse/navBar';
import MyCourseComponent from '@components/enterCourse/myCourse';

const EnterCoursePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [type, setType] = useState<string>(searchParams.get('type') || 'search');

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

  useEffect(() => {
    setSearchParams({ type });
  }, [type, setSearchParams]);

  if (type !== 'search' && type !== 'custom' && type !== 'file') {
    return <NotFoundPage />;
  }

  return (
    <main className="pb-20">
      <header className="mb-10 mt-40 text-center">
        <p className="text-2xl font-semibold">수강 이력 입력</p>
      </header>

      <NavBar type={type} setType={setType} />

      {type === 'search' && <SearchCoursePage />}
      {type === 'file' && <FileUploadPage />}
      {type === 'custom' && <CustomPage />}

      <section className="mx-auto mt-20 flex w-[1000px] flex-col space-y-20">
        <MyCourseComponent
          courseData={myCourseData.result.takeList}
          page={page}
          totalPage={totalPage}
          size={size}
          setSize={handleSize}
          handlePageClick={handlePageClick}
        />
      </section>
    </main>
  );
};

export default EnterCoursePage;
