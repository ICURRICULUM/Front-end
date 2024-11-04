import React from "react";

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

const MyCourseComponent: React.FC<MyCourseComponentProps> = ({
  courseData,
}) => {
  return (
    <table className="border border-black rounded-[5px]">
      <thead>
        <tr className="bg-[#F5F5F5] text-[#757575] font-semibold">
          <th className="py-2 px-4">학수번호</th>
          <th className="py-2 px-4">과목명</th>
          <th className="py-2 px-4">영역 구분</th>
          <th className="py-2 px-4">전공 상태</th>
          <th className="py-2 px-4">학점</th>
          <th className="py-2 px-4">성적</th>
        </tr>
      </thead>
      <tbody>
        {courseData.map((course, index) => (
          <tr key={index} className="text-center text-[#757575] font-normal">
            <td className="py-2 px-4">{course.courseId}</td>
            <td className="py-2 px-4">{course.courseName}</td>
            <td className="py-2 px-4">{course.area}</td>
            <td className="py-2 px-4">
              {course.status === null ? "-" : course.status}
            </td>
            <td className="py-2 px-4">{course.credit}</td>
            <td className="py-2 px-4">{course.grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyCourseComponent;
