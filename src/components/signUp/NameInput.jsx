import React from "react";

const NameInput = ({ onSelect }) => {
  return (
    <div className="flex flex-col">
      <label>
        <span className="text-[14px] font-semibold">
          이름
          <span className="text-[#D32F2F]"> *</span>
        </span>
      </label>
      <input
        className="w-[320px] h-[48px] border-solid border rounded-[5px] border-[#757575] py-[15px] px-[17px] text-[14px] text-[#757575] font-[400]"
        placeholder="이름을 입력하세요."
        onChange={(e) => onSelect(e.target.value)}
      />
    </div>
  );
};

export default NameInput;
