import React, { useState } from "react";
import StepBox from "../../components/signUp/StepBox";
import SignForm from "../../components/signUp/SignForm";

const signUpPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hi = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="w-full h-[295px] bg-[#F5F5F5] flex justify-center  items-center">
        <StepBox />
      </div>
      <div className="flex justify-center">
        <SignForm />
      </div>
    </>
  );
};

export default signUpPage;
