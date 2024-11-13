import React from 'react';

interface MyCourseComponentProps {
  courseData: {
    courseId: string;
    courseName: string;
    area: string;
    status: string | null;
    credit: string;
    grade: string;
  }[];
}

const MyCourseComponent: React.FC<MyCourseComponentProps> = ({ courseData }) => {
  return (
    <table className="w-full rounded-five border border-black">
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
        {courseData.map((course, index) => (
          <tr key={index} className="text-center font-normal text-[#757575]">
            <td className="px-4 py-2">{course.courseId}</td>
            <td className="px-4 py-2">{course.courseName}</td>
            <td className="px-4 py-2">{course.area}</td>
            <td className="px-4 py-2">{course.status === null ? '-' : course.status}</td>
            <td className="px-4 py-2">{course.credit}</td>
            <td className="px-4 py-2">{course.grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyCourseComponent;
