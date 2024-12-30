import { TakeItem } from '@type/types';
import React, { useState } from 'react';
import { translateGrade } from '@utils/translateGrade';
import { useLocation, useNavigate } from 'react-router-dom';

import ControlModal from '@components/updateMyCourse/controlModal';

import SettingIcon from '@assets/setting.svg';
import FolderIcon from '@assets/enterCourse/folder.svg';
import LeftArrow from '@assets/enterCourse/leftArrow.svg';
import RightArrow from '@assets/enterCourse/rightArrow.svg';

interface MyCourseComponentProps {
  courseData: TakeItem[];
  page: number;
  totalPage: number;
  size: number;
  setSize: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handlePageClick: (page: number) => void;
}

const MyCourseComponent: React.FC<MyCourseComponentProps> = ({
  courseData,
  page,
  totalPage,
  size,
  setSize,
  handlePageClick,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const filterValueList: number[] = [10, 15, 20];

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedCourse, setSelectedCourse] = useState<TakeItem | null>(null);

  return (
    <>
      <section className="flex flex-col space-y-5">
        <div className="flex flex-row space-x-4">
          <img src={FolderIcon} />
          <p className="text-xl font-semibold">내 수강 이력</p>
        </div>

        {courseData.length !== 0 ? (
          <>
            <div className="border border-black">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#F5F5F5] font-semibold text-[#757575]">
                    <th className="w-[180px] border border-l-0 border-t-0 border-black px-4 py-2">
                      학수번호
                    </th>
                    <th className="w-[240px] border border-t-0 border-black px-4 py-2">과목명</th>
                    <th className="w-[160px] border border-t-0 border-black px-4 py-2">
                      영역 구분
                    </th>
                    <th className="w-[180px] border border-t-0 border-black px-4 py-2">
                      전공 상태
                    </th>
                    <th className="w-[120px] border border-t-0 border-black px-4 py-2">학점</th>
                    <th className="w-[120px] border border-r-0 border-t-0 border-black px-4 py-2">
                      성적
                    </th>
                  </tr>
                </thead>
                {courseData.map((course) => (
                  <tbody key={course.takeId} className="relative">
                    <tr key={course.takeId} className="text-center font-normal text-[#757575]">
                      <td className="w-[180px] border border-[#EEEEEE] px-4 py-2">{course.code}</td>
                      <td className="w-[240px] border border-[#EEEEEE] px-4 py-2">{course.name}</td>
                      <td className="w-[160px] border border-[#EEEEEE] px-4 py-2">
                        {course.category}
                      </td>
                      <td className="w-[180px] border border-[#EEEEEE] px-4 py-2">
                        {course.majorType === null ? '-' : course.majorType}
                      </td>
                      <td className="w-[120px] border border-[#EEEEEE] px-4 py-2">
                        {course.credit}.0
                      </td>
                      <td className="w-[120px] border border-[#EEEEEE] px-4 py-2">
                        {translateGrade(course.grade)}
                      </td>
                    </tr>

                    {location.pathname === `/update` && (
                      <tr>
                        <td>
                          <img
                            src={SettingIcon}
                            onClick={() => {
                              setSelectedCourse(course);
                              setIsModalVisible(true);
                            }}
                            className="absolute -right-10 top-1/2 -translate-y-1/2 cursor-pointer"
                          />
                        </td>
                      </tr>
                    )}
                  </tbody>
                ))}
              </table>
            </div>
            <section className="flex justify-end">
              <select
                className="flex rounded border border-[#757575] px-4 py-2.5 text-[#757575]"
                value={size}
                onChange={setSize}
              >
                {filterValueList.map((num) => (
                  <option key={num} value={num} className="text-center">
                    {num}줄 보기
                  </option>
                ))}
              </select>
            </section>
            <nav aria-label="Pagination" className="mt-5 flex justify-center space-x-3">
              <img
                src={LeftArrow}
                className={`cursor-pointer ${page === 0 ? 'opacity-50' : ''}`}
                onClick={() => page > 0 && handlePageClick(page - 1)}
                alt="Previous Page"
              />
              {Array.from({ length: totalPage }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageClick(index)}
                  className={`text-[#757575] ${page === index ? 'font-semibold' : 'font-normal'}`}
                >
                  {index + 1}
                </button>
              ))}
              <img
                src={RightArrow}
                className={`cursor-pointer ${page === totalPage - 1 ? 'opacity-50' : ''}`}
                onClick={() => page < totalPage - 1 && handlePageClick(page + 1)}
                alt="Next Page"
              />
            </nav>

            {location.pathname !== `/update` && (
              <div className="flex flex-col items-center">
                <button
                  onClick={() => navigate(`/update`)}
                  className="mt-10 flex justify-center rounded-five bg-[#005BAC] px-6 py-4 font-semibold text-white"
                >
                  수강이력 수정
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="flex h-[400px] items-center justify-center rounded-five border border-black">
            등록된 수강 이력이 없습니다!
          </div>
        )}
      </section>

      <ControlModal
        isVisible={isModalVisible}
        value={selectedCourse}
        closeModal={() => setIsModalVisible(false)}
      />
    </>
  );
};

export default MyCourseComponent;
