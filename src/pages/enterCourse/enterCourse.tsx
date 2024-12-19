import { useState, useEffect } from 'react';
import { Course, CourseItem } from '@type/types';
import { useSearchParams } from 'react-router-dom';

import NavBar from '@components/enterCourse/navBar';
import SearchBox from '@components/enterCourse/searchBox';
import SearchCourse from '@components/enterCourse/searchCourse';
import DirectCourse from '@components/enterCourse/directCourse';
import MyCourseComponent from '@components/enterCourse/myCourse';
import SelectedCourse from '@components/enterCourse/selectedCourse';

import { getTakeLists } from '@server/take/api';

const EnterCoursePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [type, setType] = useState<string>(searchParams.get('type') || 'search');
  const [searchInput, setSearchInput] = useState<string>('');

  const [myCourseData, setMyCourseData] = useState<Course[]>([]);

  const getMyCourse = async () => {
    const response = await getTakeLists();

    setMyCourseData(response.result.takeList);
  };

  const [courseData, setCourseData] = useState<CourseItem>({
    courseId: '',
    courseName: '',
    area: '',
    status: '',
    credit: 0,
    grade: '',
  });
  const [courseList, setCourseList] = useState<CourseItem[]>([]);

  const [filterValue, setFilterValue] = useState<number>(15);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(4);

  const handlePageClick = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPage) {
      setPage(pageNumber);
    }
  };

  const handleSearchInput = (searchInput: string) => {
    setSearchInput(searchInput);
  };

  const handleSelectedList = (item: CourseItem) => {
    setCourseList((prev) => [...prev, item]);
    setCourseData({ courseId: '', courseName: '', area: '', status: '', credit: 0, grade: '' });
  };

  const handleArea = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCourseData((prev) => ({ ...prev, area: e.target.value }));
  };

  const handleStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCourseData((prev) => ({ ...prev, status: e.target.value }));
  };

  const handleGrade = (courseId: string, grade: string) => {
    setCourseList((prevList) =>
      prevList.map((item) => (item.courseId === courseId ? { ...item, grade } : item)),
    );
  };

  const removeCourse = (courseId: string) => {
    setCourseList((prevList) => prevList.filter((item) => item.courseId !== courseId));
  };

  const search = (searchInput: string) => {
    setSearchInput('');
    setCourseData({
      courseId: searchInput,
      courseName: '컴퓨터공학입문',
      area: '',
      status: '',
      credit: 2.0,
      grade: '',
    });
  };

  const handleFilterValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterValue(Number(e.target.value));
  };

  useEffect(() => {
    setSearchParams({ type });

    setSearchInput('');
    setCourseData({
      courseId: '',
      courseName: '',
      area: '',
      status: '',
      credit: 0,
      grade: '',
    });
    setCourseList([]);
    setPage(1);
  }, [type, setSearchParams]);

  useEffect(() => {
    getMyCourse();
  }, []);

  return (
    <main className="pb-20">
      <header className="mb-10 mt-40 text-center">
        <p className="text-2xl font-semibold">수강 이력 입력</p>
      </header>

      <NavBar type={type} setType={setType} />

      <section className="mx-auto mt-20 flex w-[1000px] flex-col space-y-20">
        {type === 'search' && (
          <>
            <SearchBox
              searchInput={searchInput}
              setSearchInput={handleSearchInput}
              search={search}
            />

            <SearchCourse
              value={courseData}
              setArea={handleArea}
              setStatus={handleStatus}
              setList={handleSelectedList}
            />
          </>
        )}

        {type === 'direct' && (
          <DirectCourse
            value={courseData}
            setArea={handleArea}
            setStatus={handleStatus}
            setList={handleSelectedList}
          />
        )}

        {courseList.length !== 0 && (
          <SelectedCourse value={courseList} setGrade={handleGrade} removeCourse={removeCourse} />
        )}

        <MyCourseComponent
          courseData={myCourseData}
          page={page}
          totalPage={totalPage}
          filterValue={filterValue}
          setFilterValue={handleFilterValue}
          handlePageClick={handlePageClick}
        />
      </section>
    </main>
  );
};

export default EnterCoursePage;
