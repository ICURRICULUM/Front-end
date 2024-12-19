import { CourseItem } from 'type/types';
import React, { useState, useEffect } from 'react';

interface SearchCourseProps {
  value: CourseItem;
  setArea: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  setStatus: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  setList: (item: CourseItem) => void;
}

const SearchCourse: React.FC<SearchCourseProps> = ({ value, setArea, setStatus, setList }) => {
  const areaOptions: string[] = ['교양필수', '전공필수'];
  const statusOptions: string[] = ['주전공'];

  const [isComplete, setIsComplete] = useState<boolean>(false);

  const handleAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setArea(e);
    setStatus({ target: { value: '' } } as React.ChangeEvent<HTMLSelectElement>);
  };

  useEffect(() => {
    if (
      value.courseId !== '' &&
      value.courseName !== '' &&
      value.credit !== 0 &&
      ((value.area === '교양필수' && value.status === '') ||
        (value.area === '전공필수' && value.status !== ''))
    ) {
      setIsComplete(true);
    } else {
      setIsComplete(false);
    }
  }, [value]);

  return (
    <div className="flex flex-col items-center space-y-10">
      <table className="w-[1000px] rounded-five border border-black">
        <thead>
          <tr className="bg-[#F5F5F5] font-semibold text-[#757575]">
            <th className="w-[180px] border border-black px-4 py-2">학수번호</th>
            <th className="w-[240px] border border-black px-4 py-2">과목명</th>
            <th className="w-[160px] border border-black px-4 py-2">영역 구분</th>
            <th className="w-[180px] border border-black px-4 py-2">전공 상태</th>
            <th className="w-[120px] border border-black px-4 py-2">학점</th>
            <th className="w-[120px] border border-black px-4 py-2">성적</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center font-normal text-[#757575]">
            <td className="w-[180px] border border-black px-4 py-2">
              {value.courseId || '학수번호'}
            </td>
            <td className="w-[240px] border border-black px-4 py-2">
              {value.courseName || '과목명'}
            </td>

            <td className="w-[160px] border border-black px-4 py-2">
              <select className="rounded px-2 py-1" value={value.area} onChange={handleAreaChange}>
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
              {value.area === '교양필수' ? (
                <p>-</p>
              ) : (
                <select className="rounded px-2 py-1" value={value.status} onChange={setStatus}>
                  <option value="" className="text-center text-[#005BAC]">
                    선택하기
                  </option>
                  {statusOptions.map((status) => (
                    <option key={status} value={status} className="text-center text-[#005BAC]">
                      {status}
                    </option>
                  ))}
                </select>
              )}
            </td>

            <td className="w-[120px] border border-black px-4 py-2">{value.credit || '학점'}</td>

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

export default SearchCourse;
