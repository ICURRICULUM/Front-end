import React from "react";

const StepItem = ({ img, text, state }) => {
  const imgVariant = {
    pre: "h-[64px] w-[64px] rounded-full border border-[#005BAC] flex justify-center items-center bg-[#FFFFFF] mb-[8px]",
    cur: "h-[64px] w-[64px] rounded-full border border-[#005BAC] flex justify-center items-center bg-[#FFFFFF] mb-[8px] drop-shadow-[0_0_8px_#005BAC]",
    next: "h-[64px] w-[64px] rounded-full border border-[#757575] flex justify-center items-center bg-[#FFFFFF] mb-[8px]",
  };

  const textVariant = {
    pre: "text-[12px] text-[#005BAC] font-[400]",
    cur: "text-[12px] text-[#005BAC] font-[600]",
    next: "text-[12px] text-[#757575] font-[400]",
  };
  return (
    <div className="flex flex-col items-center">
      <div className={`${imgVariant[state]}`}>
        <img src={img} />
      </div>
      <div className={`${textVariant[state]}`}>{text}</div>
    </div>
  );
};

export default StepItem;
