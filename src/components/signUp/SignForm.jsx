import React from "react";
import NameInput from "./NameInput";
import MajorInput from "./MajorInput";
import Pen from "../../assets/signUp/pen.svg";
import DropDown from "./DropDown";

const SignForm = () => {
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

  return (
    <form className="mt-[56px] mb-[83px]">
      <div className="flex mb-[36px]">
        <img src={Pen} />
        <div className="text-[20px] ml-[16px] font-semibold">필수정보 입력</div>
      </div>
      <div>
        <div className="mb-[20px]">
          <NameInput />
        </div>
        <div className="mb-[20px]">
          <DropDown title={"학번"} data={SIDItems} msg={"학번을 선택하세요."} />
        </div>
        <div className="mb-[20px]">
          <DropDown
            title={"전공"}
            data={majorItems}
            msg={"주전공 학과를 선택하세요."}
          />
        </div>
        <div className="mb-[38px]">
          <MajorInput title={"다중전공"} />
        </div>
      </div>
      <div>
        <div className="flex mb-[13px]">
          <input className="ml-[1px]" type="checkbox" />
          <div className="text-[12px] font-[400] ml-[1px]">
            이용약관 개인정보 수집 및 정보이용에 동의합니다.
          </div>
        </div>
        <button className="h-[51px] w-[320px] bg-[#005BAC] text-white text-[16px] font-[600] py-[15px] px-[17px] rounded-[5px]">
          가입하기
        </button>
      </div>
    </form>
  );
};

export default SignForm;
