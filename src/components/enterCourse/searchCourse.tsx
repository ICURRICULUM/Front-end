import { CreateCourseItem } from '@type/types';
import React, { useState, useEffect } from 'react';

interface SearchCourseProps {
  value: CreateCourseItem;
  setCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  setMajorType: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  setList: (item: CreateCourseItem) => void;
}

const SearchCourse: React.FC<SearchCourseProps> = ({
  value,
  setCategory,
  setMajorType,
  setList,
}) => {
  const areaOptions: string[] = [
    '전공필수',
    '전공선택',
    '교양필수',
    '교양선택',
    'SW_AI',
    '창의',
    '핵심교양',
  ];
  const statusOptions: string[] = ['주전공'];

  const [isComplete, setIsComplete] = useState<boolean>(false);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e);
    if (e.target.value !== '전공필수' && e.target.value !== '전공선택') {
      setMajorType({ target: { value: '' } } as React.ChangeEvent<HTMLSelectElement>);
    }
  };

  useEffect(() => {
    if (value.code !== '' && value.name !== '' && value.credit !== 0 && value.category !== '') {
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
            <td className="w-[180px] border border-black px-4 py-2">{value.code || '학수번호'}</td>
            <td className="w-[240px] border border-black px-4 py-2">{value.name || '과목명'}</td>

            <td className="w-[160px] border border-black px-4 py-2 font-semibold text-[#005BAC]">
              <select
                disabled={!value.code}
                className="rounded px-2 py-1"
                value={value.category.startsWith('핵심교양') ? '핵심교양' : value.category}
                onChange={handleCategoryChange}
              >
                <option value="" className="text-center">
                  선택하기
                </option>
                {areaOptions.map((area) => (
                  <option key={area} value={area} className="text-center">
                    {area}
                  </option>
                ))}
              </select>
            </td>

            <td className="w-[180px] border border-black px-4 py-2 font-semibold text-[#005BAC]">
              {value.category !== '전공필수' && value.category !== '전공선택' ? (
                <p>-</p>
              ) : (
                <select
                  disabled={!value.category}
                  className="rounded px-2 py-1"
                  value={value.majorType}
                  onChange={setMajorType}
                >
                  <option value="" className="text-center">
                    선택하기
                  </option>
                  {statusOptions.map((status) => (
                    <option key={status} value={status} className="text-center">
                      {status}
                    </option>
                  ))}
                </select>
              )}
            </td>

            <td className="w-[120px] border border-black px-4 py-2">
              {`${value.credit}.0` || '학점'}
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

export default SearchCourse;
