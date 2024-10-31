import React, { useState } from "react";
import NameInput from "./NameInput";
import MajorInput from "./MajorInput";
import Pen from "../../assets/signUp/pen.svg";
import DropDown from "./DropDown";

const SignForm = () => {
  const [name, setName] = useState("");
  const [SID, setSID] = useState("학번을 선택하세요.");
  const [major, setMajor] = useState("주전공 학과를 선택하세요.");
  const [minor, setMinor] = useState("");
  // 예시 데이터, API로 불러올 데이터들
  const majorItems = [
    { id: 1, value: "컴퓨터공학과" },
    { id: 2, value: "정보통신공학과" },
    { id: 3, value: "경제학과" },
  ];

  const SIDItems = [
    { id: 1, value: "19학번" },
    { id: 2, value: "20학번" },
    { id: 3, value: "21학번" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDate = {
      name,
      SID,
      major,
    };

    console.log(formDate);
  };

  return (
    //로그인 폼
    <form className="mt-[56px] mb-[83px]" onSubmit={handleSubmit}>
      {/* 필수정보 입력 div */}
      <div className="flex mb-[36px]">
        <img src={Pen} />
        <div className="text-[20px] ml-[16px] font-semibold">필수정보 입력</div>
      </div>
      {/* 데이터들 입력 */}
      <div>
        {/* 이름 */}
        <div className="mb-[20px]">
          <NameInput onSelect={setName} />
        </div>
        {/* 학번 */}
        <div className="mb-[20px]">
          <DropDown
            title={"학번"}
            data={SIDItems}
            selectValue={SID}
            onSelect={setSID}
          />
        </div>
        {/* 전공 */}
        <div className="mb-[20px]">
          <DropDown
            title={"전공"}
            data={majorItems}
            selectValue={major}
            onSelect={setMajor}
          />
        </div>
        {/* 다중전공 */}
        <div className="mb-[38px]">
          <MajorInput title={"다중전공"} />
        </div>
      </div>
      {/* 개인정보 및 버튼 부분 */}
      <div>
        <div className="flex mb-[13px]">
          <input className="ml-[1px]" type="checkbox" />
          <div className="text-[12px] font-[400] ml-[1px]">
            이용약관 개인정보 수집 및 정보이용에 동의합니다.
          </div>
        </div>
        <button
          type="submit"
          className="h-[51px] w-[320px] bg-[#005BAC] text-white text-[16px] font-[600] py-[15px] px-[17px] rounded-[5px]"
        >
          가입하기
        </button>
      </div>
    </form>
  );
};

export default SignForm;
