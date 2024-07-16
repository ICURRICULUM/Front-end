import React from "react";
import StepItem from "./StepItem";
import EmailImg from "../../assets/signUp/email.svg";
import InfoImg from "../../assets/signUp/info.svg";
import HappyImg from "../../assets/signUp/happy.svg";
import rightArrImg from "../../assets/signUp/rightArr.svg";

const StepBox = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-[24px] font-[600] mb-[20px]">회원가입</div>
      <div className="flex">
        <StepItem img={EmailImg} text={"구글 로그인"} state={"pre"} />
        <div className="h-[64px] w-[20px] flex mx-[14px]">
          <img src={rightArrImg} />
        </div>
        <StepItem img={InfoImg} text={"필수정보 입력"} state={"cur"} />
        <div className="h-[64px] w-[20px] flex mx-[14px]">
          <img src={rightArrImg} />
        </div>
        <StepItem img={HappyImg} text={"회원가입 완료"} state={"next"} />
      </div>
    </div>
  );
};

export default StepBox;
