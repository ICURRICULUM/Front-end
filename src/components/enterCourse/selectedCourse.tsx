import React from 'react';
import { CourseItem } from 'type/types';

import DeleteIcon from '@assets/enterCourse/delete.svg';

interface CourseComponetProps {
  value: CourseItem[];
  setGrade: (courseId: string, grade: string) => void;
  removeCourse: (courseId: string) => void;
}

const SelectedCourse: React.FC<CourseComponetProps> = ({ value, setGrade, removeCourse }) => {
  const gradeOptions: string[] = ['A+', 'A0', 'B+', 'B0', 'C+', 'C0', 'D+', 'D0', 'F', 'P', 'NP'];

  return (
    <div className="flex flex-col items-center space-y-10">
      {value.map((item) => (
        <div className="flex flex-row">
          <table className="w-[1000px] border-collapse rounded-five border border-black">
            <tbody className="">
              <tr key={item.courseId} className="text-center font-normal text-[#757575]">
                <td className="w-[180px] border border-black px-4 py-2">{item.courseId}</td>
                <td className="w-[240px] border border-black px-4 py-2">{item.courseName}</td>
                <td className="w-[160px] border border-black px-4 py-2">{item.area}</td>
                <td className="w-[180px] border border-black px-4 py-2">{item.status || '-'}</td>
                <td className="w-[120px] border border-black px-4 py-2">{item.credit}</td>
                <td className="w-[120px] border border-black px-4 py-2">
                  <select
                    className="rounded px-2 py-1"
                    value={item.grade}
                    onChange={(e) => setGrade(item.courseId, e.target.value)}
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

          <img
            src={DeleteIcon}
            onClick={() => removeCourse(item.courseId)}
            className="absolute cursor-pointer"
          />
        </div>
      ))}

      <button className="rounded-five border border-[#005bac] bg-white p-4 font-semibold text-[#005bac]">
        선택한 과목 담기
      </button>
    </div>
  );
};

export default SelectedCourse;
