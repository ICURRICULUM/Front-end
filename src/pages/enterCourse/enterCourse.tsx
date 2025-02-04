import pdfToText from 'react-pdftotext';
import { CreateCourseItem } from '@type/types';
import { GlobalWorkerOptions } from 'pdfjs-dist';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min?url';
import { useGetTakeLists, useCreateTakeLists } from '@hooks/take/hook';
import { useSearchCourseList, useSearchCourseByLists } from '@hooks/course/hook';

import NotFoundPage from '@pages/notFound/notFound';

import NavBar from '@components/enterCourse/navBar';
import SearchBox from '@components/enterCourse/searchBox';
import LoadingComponent from '@components/common/loading';
import SearchCourse from '@components/enterCourse/searchCourse';
import MyCourseComponent from '@components/enterCourse/myCourse';
import SelectedCourse from '@components/enterCourse/selectedCourse';
import CourseListModal from '@components/enterCourse/courseListModal';
import FileCourseListComponent from '@components/enterCourse/fileCourseList';

import { useTakeListCodeStore } from '@zustand/take/store';

import { SearchCourseByListsResponse } from '@server/course/response';

import RightArrow from '@assets/enterCourse/rightArrow.svg';

GlobalWorkerOptions.workerSrc = pdfWorker;

type CourseItem = {
  courseId: number;
  name: string;
  credit: number;
  code: string;
  category: string;
};

const EnterCoursePage = () => {
  const { codes } = useTakeListCodeStore();

  const stepItem = [
    { index: 1, title: `인하대학교 포털시스템` },
    { index: 2, title: '학사행정' },
    { index: 3, title: '성적' },
    { index: 4, title: '취득학점 현황조회' },
    { index: 5, title: '전체성적표 Excel / PDF 저장' },
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const [type, setType] = useState<string>(searchParams.get('type') || 'search');
  const [searchInput, setSearchInput] = useState<string>('');

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [courseData, setCourseData] = useState<CreateCourseItem>({
    code: '',
    name: '',
    category: '',
    majorType: '',
    credit: 0,
    grade: undefined,
  });

  const [courseList, setCourseList] = useState<CreateCourseItem[]>([]);

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
    if (codes.includes(item.code)) {
      alert('이미 추가된 강의입니다!');
      setCourseData({
        code: '',
        name: '',
        category: '',
        majorType: '',
        credit: 0,
        grade: 0,
      });
    } else {
      setCourseList((prev) => [...prev, item]);
      setCourseData({
        code: '',
        name: '',
        category: '',
        majorType: '',
        credit: 0,
        grade: 0,
      });
    }
  };

  // 핵심교양의 영역을 저장하기 위한 값
  const [originalCategory, setOriginalCategory] = useState<string>('');

  // 영역 선택 이벤트
  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;

    if (selectedCategory === '핵심교양') {
      // 기존 저장된 핵심교양 값으로 복원
      setCourseData((prev) => ({ ...prev, category: originalCategory }));
    } else {
      // 새 값을 업데이트하고, 핵심교양이라면 저장
      setCourseData((prev) => ({ ...prev, category: selectedCategory }));
      if (selectedCategory.includes('핵심교양')) {
        setOriginalCategory(selectedCategory);
      }
    }
  };

  // 전공 상태 선택 이벤트
  const handleMajorType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCourseData((prev) => ({ ...prev, majorType: e.target.value }));
  };

  // 성적 선택 이벤트
  const handleGrade = (index: number, grade: number | undefined) => {
    setCourseList((prevList) =>
      prevList.map((item, idx) => (idx === index ? { ...item, grade } : item)),
    );
  };

  // Course List의 아이템 중 하나 삭제
  const removeCourse = (index: number) => {
    setCourseList((prevList) => prevList.filter((_, idx) => idx !== index));
  };

  const { mutateAsync: search } = useSearchCourseList();

  const [searchedCourseList, setSearchedCourseList] = useState<CourseItem[]>([]);

  // 검색 메서드
  const handleSearch = async (searchInput: string) => {
    const upperCaseInput = searchInput.toUpperCase();
    setSearchInput('');
    const response = await search(upperCaseInput);

    setSearchedCourseList(response.result.detailInfoList);
    setIsModalOpen(true);
  };

  const handleCourseData = (item: CourseItem) => {
    setCourseData({
      ...item,
      majorType: '주전공',
      grade: undefined,
    });
    setIsModalOpen(false);
  };

  // Course List 생성 mutation
  const { mutateAsync: createCourse } = useCreateTakeLists(refetchTakeLists);

  // Course List 생성 메서드
  const handleCreate = async () => {
    if (courseList.every((item) => item.grade !== undefined)) {
      await createCourse({
        //@ts-ignore
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
        grade: undefined,
      });
      setCourseList([]);
    }
  };

  const { mutateAsync: fileUpload, isPending } = useSearchCourseByLists();

  const [isFileUploadComplete, setISFileUploadComplete] = useState<boolean>(false);

  const [courses, setCourses] = useState<
    Omit<SearchCourseByListsResponse['result']['detailInfoList'][0], 'courseId'> &
      { grade: undefined }[]
    //@ts-ignore
  >([]);

  const removeFileUploadCourse = (index: number) => {
    //@ts-ignore
    setCourses((prevCourses) => {
      if (index < 0 || index >= prevCourses.length) return prevCourses; // 유효성 검사
      return [...prevCourses.slice(0, index), ...prevCourses.slice(index + 1)];
    });
  };

  const handleFileUploadCreate = async () => {
    if (courses.every((item) => item.grade !== undefined)) {
      await createCourse({
        //@ts-ignore
        takeCreateDTOList: courses.map((course) => ({
          ...course,
          majorType: '주전공',
        })),
      });
      //@ts-ignore
      setCourses([]);
      setISFileUploadComplete(false);
    }
  };

  function extractText(event: any) {
    const file = event.target.files[0];
    pdfToText(file)
      .then((text) => {
        const regex = /\b[A-Z]{3}\d{4}\b/g;
        const matches = text.match(regex) || [];

        const { codes } = useTakeListCodeStore.getState();

        const filteredMatches = matches.filter((code) => !codes.includes(code));

        fileUpload(filteredMatches).then((response: SearchCourseByListsResponse) => {
          //@ts-ignore
          const updatedCourses = response.result.detailInfoList.map(({ courseId, ...course }) => ({
            ...course,
            grade: undefined,
          }));
          //@ts-ignore
          setCourses(updatedCourses);
        });
        setISFileUploadComplete(true);
      })
      .catch((error) => console.error(error, 'Failed to extract text from pdf'));
  }

  useEffect(() => {
    setSearchParams({ type });

    setSearchInput('');
    setCourseData({
      code: '',
      name: '',
      category: '',
      majorType: '',
      credit: 0,
      grade: undefined,
    });
    setCourseList([]);
    setPage(0);
  }, [type, setSearchParams]);

  if (type !== 'search' && type !== 'direct' && type !== 'file') {
    return <NotFoundPage />;
  }

  return (
    <main className="pb-20">
      {isPending && <LoadingComponent />}
      <header className="mb-10 mt-40 text-center">
        <p className="text-2xl font-semibold">수강 이력 입력</p>
      </header>

      <NavBar type={type} setType={setType} />

      {type === 'search' && (
        <section className="mx-auto mt-20 flex w-[1000px] flex-col space-y-20">
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
        </section>
      )}

      {type === 'file' && (
        <section className="space-y-20">
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

            <label
              htmlFor="upload"
              className="cursor-pointer rounded-five bg-[#005BAC] p-4 font-semibold text-white"
            >
              파일 업로드하기
            </label>
            <input
              id="upload"
              name="upload"
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={extractText}
            />
          </section>

          {isFileUploadComplete && (
            <FileCourseListComponent
              //@ts-ignore
              courseList={courses}
              //@ts-ignore
              setCourses={setCourses}
              removeCourse={removeFileUploadCourse}
              createCourse={handleFileUploadCreate}
            />
          )}
        </section>
      )}

      {courseList.length !== 0 && (
        <SelectedCourse
          value={courseList}
          setGrade={handleGrade}
          removeCourse={removeCourse}
          createCourse={handleCreate}
        />
      )}

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

      <CourseListModal
        isVisible={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        courseList={searchedCourseList}
        handleCourseData={handleCourseData}
      />
    </main>
  );
};

export default EnterCoursePage;
