import { TakeItem } from '@type/types';
import React, { useState, useEffect } from 'react';
import { useGetTakeLists, useDeleteTakeList, useUpdateTakeList } from '@hooks/take/hook';

import XButton from '@assets/checkRequirement/xButton.svg';

interface ControlModalProps {
  isVisible: boolean;
  value: TakeItem | null;
  closeModal: () => void;
}

const ControlModal: React.FC<ControlModalProps> = ({ isVisible, value, closeModal }) => {
  const { refetch: refetchTakeItems } = useGetTakeLists(0, 15);

  const { mutateAsync: updateTakeItem } = useUpdateTakeList(refetchTakeItems);
  const { mutateAsync: deleteTakeItem } = useDeleteTakeList(refetchTakeItems);

  const [courseData, setCourseData] = useState<TakeItem | null>(value);

  useEffect(() => {
    setCourseData(value);
  }, [value]);

  const categoryOptions: string[] = [
    '전공필수',
    '전공선택',
    '교양필수',
    '교양선택',
    'SW_AI',
    '창의',
    '핵심교양',
  ];

  const majorTypeOptions: string[] = ['주전공'];

  const gradeOptions = [
    { label: 'A+', value: 4.5 },
    { label: 'A0', value: 4.0 },
    { label: 'B+', value: 3.5 },
    { label: 'B0', value: 3.0 },
    { label: 'C+', value: 2.5 },
    { label: 'C0', value: 2.0 },
    { label: 'D+', value: 1.5 },
    { label: 'D0', value: 1.0 },
    { label: 'F', value: 0 },
    { label: 'P', value: 0 },
    { label: 'NP', value: 0 },
  ];

  const handleDelete = async () => {
    if (courseData !== null) {
      await deleteTakeItem({ takeId: courseData.takeId });
      closeModal();
    }
  };

  const handleUpdate = async () => {
    if (courseData !== null) {
      await updateTakeItem({
        takeList: {
          takeId: courseData.takeId,
          code: courseData.code,
          name: courseData.name,
          category: courseData.category,
          majorType: courseData.majorType,
          grade: courseData.grade,
          credit: courseData.credit,
        },
      });
      closeModal();
    }
  };

  const handleReset = async () => {
    setCourseData(value);
    closeModal();
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCourseData((prevState) => (prevState ? { ...prevState, category: e.target.value } : null));
  };

  const handleMajorTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCourseData((prevState) => (prevState ? { ...prevState, majorType: e.target.value } : null));
  };

  const handleGradeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCourseData((prevState) =>
      prevState ? { ...prevState, grade: Number(e.target.value) } : null,
    );
  };

  return (
    isVisible &&
    courseData !== null && (
      <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-modalBack">
        <div className="relative flex h-[600px] w-[1200px] flex-col items-center space-y-20 border border-black bg-white px-20 py-10">
          <div className="absolute right-4 top-4">
            <img src={XButton} onClick={handleReset} className="flex cursor-pointer" />
          </div>

          <p className="text-2xl font-semibold">수강 이력 수정</p>

          <table className="border text-center">
            <thead>
              <tr className="bg-[#F5F5F5] font-semibold text-[#757575]">
                <th className="w-[180px] border border-l-0 border-t-0 border-black px-4 py-2">
                  학수번호
                </th>
                <th className="w-[240px] border border-t-0 border-black px-4 py-2">과목명</th>
                <th className="w-[160px] border border-t-0 border-black px-4 py-2">영역 구분</th>
                <th className="w-[180px] border border-t-0 border-black px-4 py-2">전공 상태</th>
                <th className="w-[120px] border border-t-0 border-black px-4 py-2">학점</th>
                <th className="w-[120px] border border-r-0 border-t-0 border-black px-4 py-2">
                  성적
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="text-[#757575]">
                <td className="w-[180px] border border-l-0 border-t-0 border-black px-4 py-2 font-semibold">
                  {value?.code}
                </td>
                <td className="w-[240px] border border-t-0 border-black px-4 py-2 font-semibold">
                  {value?.name}
                </td>
                <td className="w-[160px] border border-t-0 border-black px-4 py-2">
                  <select
                    className="rounded px-2 py-1 text-center font-semibold text-[#005BAC]"
                    value={courseData.category}
                    onChange={handleCategoryChange}
                  >
                    <option value="" className="text-center">
                      선택하기
                    </option>
                    {categoryOptions.map((category) => (
                      <option key={category} value={category} className="text-center">
                        {category}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="w-[180px] border border-t-0 border-black px-4 py-2">
                  {courseData.category === '교양필수' ? (
                    <p>-</p>
                  ) : (
                    <select
                      disabled={!courseData.category}
                      className="rounded px-2 py-1 text-center font-semibold text-[#005BAC]"
                      value={courseData.majorType}
                      onChange={handleMajorTypeChange}
                    >
                      <option value="" className="text-center">
                        선택하기
                      </option>
                      {majorTypeOptions.map((majorType) => (
                        <option key={majorType} value={majorType} className="text-center">
                          {majorType}
                        </option>
                      ))}
                    </select>
                  )}{' '}
                </td>

                <td className="w-[120px] border border-t-0 border-black px-4 py-2">
                  {`${courseData.credit}.0` || '학점'}
                </td>

                <td className="w-[120px] border border-r-0 border-t-0 border-black px-4 py-2">
                  <select
                    className="rounded px-2 py-1 text-center font-semibold text-[#005BAC]"
                    value={courseData.grade}
                    onChange={handleGradeChange}
                  >
                    <option value="">성적 선택</option>
                    {gradeOptions.map((grade, index) => (
                      <option key={index} value={grade.value}>
                        {grade.label}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="space-x-8">
            <button
              onClick={handleUpdate}
              className="rounded-five bg-[#005BAC] px-6 py-4 font-semibold text-white"
            >
              수정하기
            </button>
            <button
              onClick={handleDelete}
              className="rounded-five bg-[#D32F2F] px-6 py-4 font-semibold text-white"
            >
              삭제하기
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ControlModal;
