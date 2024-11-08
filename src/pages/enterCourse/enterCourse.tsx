import { useState } from "react";

import { dummyData } from "./dummyData";

import NavBar from "@components/enterCourse/navBar";
import MyCourseComponent from "@components/enterCourse/myCourse";

import LeftArrow from "@assets/enterCourse/leftArrow.svg";
import RightArrow from "@assets/enterCourse/rightArrow.svg";


const EnterCoursePage = () => {
  const stepItem = [
    { index: 1, title: "인하대학교\n포털시스템" },
    { index: 2, title: "학사행정" },
    { index: 3, title: "성적" },
    { index: 4, title: "취득학점\n현황조회" },
    { index: 5, title: "전체성적표\nExcel / PDF 저장" },
  ];

  const [type, setType] = useState<string>("search");
  const [searchInput, setSearchInput] = useState<string>("");

  const [filterValue, setFilterValue] = useState<number>(15);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(4);

  const handlePageClick = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPage) {
      setPage(pageNumber);
    }
  };

  return (
    <div className="mb-10 pt-40">
      <p className="mb-10 text-center text-2xl">수강 이력 입력</p>
      <div className="flex flex-col items-center space-y-10 bg-[#F5F5F5] py-10">
        <p className="">성적표 불러오기</p>
        <div className="flex flex-row">
          {stepItem.map((step) => (
            <div key={step.index} className="flex flex-col items-center">
              <p>Step {step.index}</p>
              <p>{step.title}</p>
            </div>
          ))}
        </div>

        <label
          htmlFor="upload"
          className="cursor-pointer rounded-[5px] bg-[#005BAC] p-4 text-white"
        >
          파일 업로드하기
        </label>
        <input type="file" id="upload" className="hidden" />
      </div>

      <NavBar type={type} setType={setType} />

      <div className="mt-20 flex flex-row justify-center space-x-4">
        <input
          className="w-80 rounded-[5px] border border-black p-4 text-sm"
          type="text"
          placeholder="학수번호를 검색하세요. (ex. GEB2024-001)"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="rounded-[5px] bg-[#005BAC] px-6 py-4 text-white">
          과목 검색
        </button>
      </div>

      <div className="flex flex-col items-center">
        <p className="mb-5 text-xl font-semibold">내 수강 이력</p>
        <MyCourseComponent courseData={dummyData} />

        <div className="mt-5 flex space-x-3">
          <img
            src={LeftArrow}
            className="cursor-pointer"
            onClick={() => page > 1 && handlePageClick(page - 1)}
          />
          {Array.from({ length: totalPage }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageClick(index + 1)}
              className={`text-[#757575] ${
                page === index + 1 ? "font-semibold" : "font-normal"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <img
            src={RightArrow}
            className="cursor-pointer"
            onClick={() => page < totalPage && handlePageClick(page + 1)}
          />
        </div>
      </div>
    </div>
  );
};

export default EnterCoursePage;
