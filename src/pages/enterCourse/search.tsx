import React, { useState } from 'react';
import { CreateCourseItem } from '@type/types';
import { useSearchCourseList } from '@hooks/course/hook';
import { useGetTakeLists, useCreateTakeLists } from '@hooks/take/hook';

import SearchBox from '@components/enterCourse/searchBox';
import SearchCourse from '@components/enterCourse/searchCourse';
import SelectedCourse from '@components/enterCourse/selectedCourse';
import CourseListModal from '@components/enterCourse/courseListModal';

import { useTakeListCodeStore } from '@zustand/take/store';

type CourseItem = {
  courseId: number;
  name: string;
  credit: number;
  code: string;
  category: string;
};

const SearchCoursePage = () => {
  const { codes } = useTakeListCodeStore();

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

  const { refetch } = useGetTakeLists(0, 15);
  // Course List 생성 mutation
  const { mutateAsync: createCourse } = useCreateTakeLists(refetch);

  // Course List 생성 메서드
  const handleCreate = async () => {
    if (courseList.every((item) => item.grade !== undefined)) {
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
        grade: undefined,
      });
      setCourseList([]);
    }
  };

  return (
    <section>
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

      {courseList.length !== 0 && (
        <SelectedCourse
          value={courseList}
          setGrade={handleGrade}
          removeCourse={removeCourse}
          createCourse={handleCreate}
        />
      )}

      <CourseListModal
        isVisible={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        courseList={searchedCourseList}
        handleCourseData={handleCourseData}
      />
    </section>
  );
};

export default SearchCoursePage;
