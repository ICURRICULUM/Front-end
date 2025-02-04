import React, { useEffect } from 'react';

import XButton from '@assets/checkRequirement/xButton.svg';

type CourseItem = {
  courseId: number;
  name: string;
  credit: number;
  code: string;
  category: string;
};

interface CourseListModalProps {
  isVisible: boolean;
  closeModal: () => void;
  courseList: CourseItem[];
  handleCourseData: (item: CourseItem) => void;
}

const CourseListModal: React.FC<CourseListModalProps> = ({
  isVisible,
  closeModal,
  courseList,
  handleCourseData,
}) => {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isVisible]);

  return (
    isVisible && (
      <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-modalBack">
        <div className="flex h-[600px] w-[1000px] flex-col items-center space-y-10 border border-black bg-white p-4">
          <div className="flex w-full justify-end">
            <img src={XButton} onClick={closeModal} className="flex cursor-pointer" />
          </div>

          <p className="text-center text-2xl font-semibold">검색 결과</p>

          <div className="flex max-h-[500px] w-[900px] flex-col items-center space-y-6 overflow-y-auto">
            {courseList.map((item) => (
              <div
                key={item.courseId}
                className="flex flex-row items-center justify-between space-x-8"
              >
                <div className="flex flex-row">
                  <div className="w-[180px] text-center">{item.code}</div>
                  <div className="w-[240px] text-center">{item.name}</div>
                  <div className="w-[160px] text-center">{item.category}</div>
                  <div className="w-[120px] text-center">{item.credit}.0</div>
                </div>

                <button
                  onClick={() => handleCourseData(item)}
                  className="rounded-five bg-[#005BAC] px-2 py-1 text-center font-semibold text-white"
                >
                  이 과목 선택하기
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default CourseListModal;
