import React from 'react';
import { CreateCourseItem } from '@type/types';

import DeleteIcon from '@assets/enterCourse/delete.svg';

interface CourseComponetProps {
  value: CreateCourseItem[];
  setGrade: (index: number, grade: number) => void;
  removeCourse: (index: number) => void;
  createCourse: () => void;
}

const SelectedCourse: React.FC<CourseComponetProps> = ({
  value,
  setGrade,
  removeCourse,
  createCourse,
}) => {
  const gradeOptions = [
    { label: 'A+', value: 4.5 },
    { label: 'A0', value: 4.0 },
    { label: 'B+', value: 3.5 },
    { label: 'B0', value: 3.0 },
    { label: 'C+', value: 2.5 },
    { label: 'C0', value: 2.0 },
    { label: 'D+', value: 1.5 },
    { label: 'D0', value: 1.0 },
    { label: 'F', value: 0.0 },
    { label: 'P', value: -1.0 },
  ];

  const areAllGradesSelected = value.every((item) => item.grade !== undefined);

  return (
    <div className="flex flex-col items-center space-y-10">
      <div className="flex flex-row">
        <table className="relative w-[1000px] table-fixed border-collapse rounded-five">
          {value.map((item, index) => (
            <tbody key={index} className="relative">
              <tr key={index} className="text-center font-normal text-[#757575]">
                <td
                  className={`w-[180px] border border-black px-4 py-2 ${
                    index !== 0 && 'border-t-0'
                  }`}
                >
                  {item.code}
                </td>
                <td
                  className={`w-[240px] border border-black px-4 py-2 ${
                    index !== 0 && 'border-t-0'
                  }`}
                >
                  {item.name}
                </td>
                <td
                  className={`w-[160px] border border-black px-4 py-2 ${
                    index !== 0 && 'border-t-0'
                  }`}
                >
                  {item.category}
                </td>
                <td
                  className={`w-[180px] border border-black px-4 py-2 ${
                    index !== 0 && 'border-t-0'
                  }`}
                >
                  {item.majorType || '-'}
                </td>
                <td
                  className={`w-[120px] border border-black px-4 py-2 ${
                    index !== 0 && 'border-t-0'
                  }`}
                >
                  {item.credit}
                </td>
                <td
                  className={`w-[120px] border border-black px-4 py-2 ${
                    index !== 0 && 'border-t-0'
                  }`}
                >
                  <select
                    className="rounded px-2 py-1 text-center font-semibold text-[#005BAC]"
                    value={item.grade}
                    onChange={(e) => setGrade(index, Number(e.target.value))}
                  >
                    <option value={undefined}>성적 선택</option>
                    {gradeOptions.map((grade, index) => (
                      <option key={index} value={grade.value}>
                        {grade.label}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>

              <tr>
                <td>
                  <img
                    src={DeleteIcon}
                    onClick={() => removeCourse(index)}
                    className="absolute right-[-30px] top-1/2 -translate-y-1/2 cursor-pointer"
                  />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>

      <button
        onClick={createCourse}
        disabled={!areAllGradesSelected}
        className={`rounded-five border border-[#005bac] p-4 font-semibold  ${
          areAllGradesSelected ? 'bg-[#005bac] text-white' : 'bg-white  text-[#005bac]'
        }`}
      >
        선택한 과목 저장하기
      </button>
    </div>
  );
};

export default SelectedCourse;
