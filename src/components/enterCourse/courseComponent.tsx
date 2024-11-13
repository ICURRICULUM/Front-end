import React, { useState } from 'react';

interface CourseComponetProps {
  mode: 'search' | 'direct';
  value: {
    courseId: number;
    courseName: string;
    status: string;
    credit: number;
  };
}

const CourseComponent: React.FC<CourseComponetProps> = ({ mode, value }) => {
  const [selectedArea, setSelectedArea] = useState<string>('');
  const [selectedGrade, setSelectedGrade] = useState<string>('');

  const areaOptions: string[] = ['교양필수', '전공필수', '선택'];
  const gradeOptions: string[] = ['A+', 'A0', 'B+', 'B0', 'C+', 'C0', 'D+', 'D0', 'F', 'P', 'NP'];

  return (
    <table>
      <thead>
        <tr className="bg-[#F5F5F5] font-semibold text-[#757575]">
          <th className="px-4 py-2">학수번호</th>
          <th className="px-4 py-2">과목명</th>
          <th className="px-4 py-2">영역 구분</th>
          <th className="px-4 py-2">전공 상태</th>
          <th className="px-4 py-2">학점</th>
          <th className="px-4 py-2">성적</th>
        </tr>
      </thead>
      <tbody>
        {/* Single row showing the course information */}
        <tr className="text-center font-normal text-[#757575]">
          <td className="px-4 py-2">{value.courseId || '-'}</td>
          <td className="px-4 py-2">{value.courseName || '-'}</td>

          {/* Select for 'area' */}
          <td className="px-4 py-2">
            <select
              className="rounded border px-2 py-1"
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
            >
              <option value="">영역 선택</option>
              {areaOptions.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </td>

          {/* Display status */}
          <td className="px-4 py-2">{value.status || '-'}</td>

          {/* Display credit */}
          <td className="px-4 py-2">{value.credit || '-'}</td>

          {/* Select for 'grade' */}
          <td className="px-4 py-2">
            <select
              className="rounded border px-2 py-1"
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
            >
              <option value="">성적 선택</option>
              {gradeOptions.map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CourseComponent;
