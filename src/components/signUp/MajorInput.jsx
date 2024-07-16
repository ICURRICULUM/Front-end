import React from "react";

const MajorInput = ({ title, data, msg }) => {
  return (
    <div className="flex flex-col">
      <label>
        <span className="text-[14px] font-semibold">
          {title}
          <span className="text-[#D32F2F]"> *</span>
        </span>
      </label>
      <select
        className="w-[320px] h-[48px] border-solid border rounded-[5px] border-[#757575] 
      py-[15px] px-[17px] text-[14px] text-[#757575] font-[400]"
      >
        <option disabled hidden selected>
          {msg}
        </option>
        {data?.map((item) => (
          <option key={item.id}>{item.value}</option>
        ))}
      </select>
    </div>
  );
};

export default MajorInput;
