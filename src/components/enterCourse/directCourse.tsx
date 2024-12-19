import { CourseItem } from 'type/types';
import React, { useState, useEffect } from 'react';

interface DirectCourseProps {
  value: CourseItem;
  setArea: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  setStatus: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  setList: (item: CourseItem) => void;
}

const DirectCourse: React.FC<DirectCourseProps> = ({ value, setArea, setStatus, setList }) => {
  const areaOptions: string[] = ['교양필수', '전공필수'];
  const statusOptions: string[] = ['주전공'];
  const creditOptions: number[] = [1.0, 2.0, 3.0, 4.0];

  const [isComplete, setIsComplete] = useState<boolean>(false);

  useEffect(() => {
    if (
      value.courseId !== '' &&
      value.courseName !== '' &&
      value.area !== '' &&
      value.status !== '' &&
      value.credit !== 0
    ) {
      setIsComplete(true);
    }
  }, [value]);

  return (
    <div className="flex flex-col items-center space-y-10">
      <table className="w-full rounded-five border border-black">
        <thead>
          <tr className="bg-[#F5F5F5] font-semibold text-[#757575]">
            <th className="w-[420px] border border-black px-4 py-2">과목명</th>
            <th className="w-[160px] border border-black px-4 py-2">영역 구분</th>
            <th className="w-[180px] border border-black px-4 py-2">전공 상태</th>
            <th className="w-[120px] border border-black px-4 py-2">학점</th>
            <th className="w-[120px] border border-black px-4 py-2">성적</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center font-normal text-[#757575]">
            <td className="w-[420px] border border-black px-4 py-2">
              <input
                type="text"
                placeholder="과목명을 입력하세요."
                className="w-full text-center"
              />
            </td>

            <td className="w-[160px] border border-black px-4 py-2">
              <select
                className="rounded px-2 py-1 text-[#005BAC]"
                value={value.area}
                onChange={setArea}
              >
                <option value="" className="text-center text-[#005BAC]">
                  선택하기
                </option>
                {areaOptions.map((area) => (
                  <option key={area} value={area} className="text-center text-[#005BAC]">
                    {area}
                  </option>
                ))}
              </select>
            </td>

            <td className="w-[180px] border border-black px-4 py-2">
              <select
                className="rounded px-2 py-1 text-[#005BAC]"
                value={value.status}
                onChange={setStatus}
              >
                <option value="" className="text-center text-[#005BAC]">
                  선택하기
                </option>
                {statusOptions.map((status) => (
                  <option key={status} value={status} className="text-center text-[#005BAC]">
                    {status}
                  </option>
                ))}
              </select>
            </td>

            <td className="w-[120px] border border-black px-4 py-2">
              <select
                className="rounded px-2 py-1 text-[#005BAC]"
                value={value.status}
                onChange={setStatus}
              >
                <option value="" className="text-center text-[#005BAC]">
                  선택하기
                </option>
                {creditOptions.map((status) => (
                  <option key={status} value={status} className="text-center text-[#005BAC]">
                    {status}
                  </option>
                ))}
              </select>
            </td>

            <td className="w-[120px] border border-black px-4 py-2">성적</td>
          </tr>
        </tbody>
      </table>

      <button
        onClick={() => setList(value)}
        disabled={!isComplete}
        className={`rounded-five border border-[#005bac] p-4 font-semibold  ${
          isComplete ? 'bg-[#005bac] text-white' : 'bg-white  text-[#005bac]'
        }`}
      >
        이 과목 담기
      </button>
    </div>
  );
};

export default DirectCourse;
