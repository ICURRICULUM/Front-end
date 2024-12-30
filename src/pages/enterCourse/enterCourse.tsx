import { useState, useEffect } from 'react';
import { CreateCourseItem } from '@type/types';
import { useSearchParams } from 'react-router-dom';
import { useSearchCourse } from '@hooks/course/hook';
import { useGetTakeLists, useCreateTakeLists } from '@hooks/take/hook';

import NotFoundPage from '@pages/notFound/notFound';

import NavBar from '@components/enterCourse/navBar';
import SearchBox from '@components/enterCourse/searchBox';
import SearchCourse from '@components/enterCourse/searchCourse';
// import DirectCourse from '@components/enterCourse/directCourse';
import MyCourseComponent from '@components/enterCourse/myCourse';
import SelectedCourse from '@components/enterCourse/selectedCourse';

const EnterCoursePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [type, setType] = useState<string>(searchParams.get('type') || 'search');
  const [searchInput, setSearchInput] = useState<string>('');

  const [courseData, setCourseData] = useState<CreateCourseItem>({
    code: '',
    name: '',
    category: '',
    majorType: '',
    credit: 0,
    grade: 0,
  });

  const [courseList, setCourseList] = useState<CreateCourseItem[]>([]);

  // const [customCourseData, setCustomCourseData] = useState<CustomCourseItem>({
  //   name: '',
  //   category: '',
  //   majorType: '',
  //   credit: 0,
  //   grade: 0,
  // });

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

  // 검색 입력 이벤트
  const handleSearchInput = (searchInput: string) => {
    setSearchInput(searchInput);
  };

  // 검색을 통해 얻은 Course item 추가
  const handleSelectedList = (item: CreateCourseItem) => {
    setCourseList((prev) => [...prev, item]);
    setCourseData({
      code: '',
      name: '',
      category: '',
      majorType: '',
      credit: 0,
      grade: 0,
    });
  };

  // 영역 선택 이벤트
  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCourseData((prev) => ({ ...prev, category: e.target.value }));
  };

  // 전공 상태 선택 이벤트
  const handleMajorType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCourseData((prev) => ({ ...prev, majorType: e.target.value }));
  };

  // 성적 선택 이벤트
  const handleGrade = (index: number, grade: number) => {
    setCourseList((prevList) =>
      prevList.map((item, idx) => (idx === index ? { ...item, grade } : item)),
    );
  };

  // Course List의 아이템 중 하나 삭제
  const removeCourse = (index: number) => {
    setCourseList((prevList) => prevList.filter((_, idx) => idx !== index));
  };

  // 검색 mutation
  const { mutateAsync: search } = useSearchCourse();

  // 검색 메서드
  const handleSearch = async (searchInput: string) => {
    setSearchInput('');

    const response = await search(searchInput);

    setCourseData({
      code: response.result.code,
      name: response.result.name,
      category: '',
      majorType: '',
      credit: response.result.credit,
      grade: 0,
    });
  };

  // Course List 생성 mutation
  const { mutateAsync: createCourse } = useCreateTakeLists(refetchTakeLists);

  // Course List 생성 메서드
  const handleCreate = async () => {
    await createCourse({
      takeCreateDTOList: courseList.map((course) => ({
        ...course,
        majorType: '주전공',
      })),
    });
    setCourseData({
      code: '',
      name: '',
      category: '',
      majorType: '',
      credit: 0,
      grade: 0,
    });
    setCourseList([]);
  };

  // const handleCustomCreate = async () => {
  //   await createCourse({
  //     takeCreateDTOList: [
  //       {
  //         code: 'CUSTOM',
  //         name: customCourseData.name,
  //         category: customCourseData.category,
  //         majorType: customCourseData.majorType,
  //         credit: customCourseData.credit,
  //         grade: customCourseData.grade,
  //       },
  //     ],
  //   });

  //   // 상태 초기화
  //   setCustomCourseData({
  //     name: '',
  //     category: '',
  //     majorType: '',
  //     credit: 0,
  //     grade: 0,
  //   });
  // };

  useEffect(() => {
    setSearchParams({ type });

    setSearchInput('');
    setCourseData({
      code: '',
      name: '',
      category: '',
      majorType: '',
      credit: 0,
      grade: 0,
    });
    setCourseList([]);
    setPage(0);
  }, [type, setSearchParams]);

  if (type !== 'search' && type !== 'direct') {
    return <NotFoundPage />;
  }

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
              search={handleSearch}
            />

            <SearchCourse
              value={courseData}
              setCategory={handleCategory}
              setMajorType={handleMajorType}
              setList={handleSelectedList}
            />
          </>
        )}

        {/* {type === 'direct' && (
          <DirectCourse
            value={customCourseData}
            setValue={setCustomCourseData}
            createCourse={handleCustomCreate}
          />
        )} */}

        {courseList.length !== 0 && (
          <SelectedCourse
            value={courseList}
            setGrade={handleGrade}
            removeCourse={removeCourse}
            createCourse={handleCreate}
          />
        )}

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
