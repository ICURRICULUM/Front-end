import { CreateCourseItem } from 'type/types';
import React, { useState, useEffect } from 'react';

interface DirectCourseProps {
  value: CreateCourseItem;
  setValue: React.Dispatch<React.SetStateAction<CreateCourseItem>>;
  createCourse: () => void;
}

const CustomCourse: React.FC<DirectCourseProps> = ({ value, setValue, createCourse }) => {
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

  const [isComplete, setIsComplete] = useState<boolean>(false);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({ ...prev, name: e.target.value }));
  };

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue((prev) => ({ ...prev, category: e.target.value }));

    if (e.target.value !== '전공선택' && e.target.value !== '전공필수') {
      setValue((prev) => ({ ...prev, majorType: '주전공' }));
    }
  };

  const handleMajorType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue((prev) => ({ ...prev, majorType: e.target.value }));
  };

  const handleCredit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({ ...prev, credit: Number(e.target.value) }));
  };

  const handleGrade = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value === '' ? undefined : Number(e.target.value);
    setValue((prev) => ({ ...prev, grade: selectedValue }));
  };

  useEffect(() => {
    if (
      value.name !== '' &&
      value.category !== '' &&
      value.majorType !== '' &&
      value.credit !== 0 &&
      value.grade !== undefined
    ) {
      setIsComplete(true);
    }
  }, [value]);

  return (
    <div className="flex flex-col items-center space-y-10">
      <div className="text-center text-xl font-semibold">
        학부연구생, IPP, 편입생의 인정학점과 같이 특수한 경우에 인정받은 학점에 대해서 작성해주세요!
      </div>

      <table className="w-full rounded-five border border-black">
        <thead>
          <tr className="bg-[#F5F5F5] font-semibold text-[#757575]">
            <th className="w-[420px] border border-black px-4 py-2">인정 내용</th>
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
                className="w-full text-center font-semibold text-[#005BAC] placeholder:text-center focus:text-left"
                onChange={handleName}
                value={value.name}
              />
            </td>

            <td className="w-[160px] border border-black px-4 py-2 font-semibold text-[#005BAC]">
              <select
                className="rounded px-2 py-1"
                value={value.category}
                onChange={handleCategory}
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
              {value.category === '교양필수' ? (
                <p>-</p>
              ) : (
                <select
                  disabled={!value.category}
                  className="rounded px-2 py-1"
                  value={value.majorType}
                  onChange={handleMajorType}
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
              <input
                type="text"
                placeholder="학점 입력"
                className="w-full text-center font-semibold text-[#005BAC]"
                onChange={handleCredit}
                value={value.credit === 0 ? '' : value.credit}
              />
            </td>

            <td className={`w-[120px] border border-black px-4 py-2`}>
              <select
                className="rounded px-2 py-1 text-center font-semibold text-[#005BAC]"
                value={value.grade ?? ''}
                onChange={handleGrade}
              >
                <option value={''}>성적 선택</option>
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

      <button
        onClick={() => {
          createCourse();
          setIsComplete(false);
        }}
        disabled={!isComplete}
        className={`rounded-five border border-[#005bac] p-4 font-semibold  ${
          isComplete ? 'bg-[#005bac] text-white' : 'bg-white  text-[#005bac]'
        }`}
      >
        선택한 과목 저장하기
      </button>
    </div>
  );
};

export default CustomCourse;
