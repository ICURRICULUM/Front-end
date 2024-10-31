import React from "react";
import StepBox from "../../components/signUp/StepBox";
import SignForm from "../../components/signUp/SignForm";

const signUpPage = () => {
  return (
    <>
      <div className="w-full mt-[84px] h-[295px] bg-[#F5F5F5] flex justify-center items-center">
        <StepBox />
      </div>
      <div className="flex justify-center">
        <SignForm />
      </div>
    </>
  );
};

export default signUpPage;
