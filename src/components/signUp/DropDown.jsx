import React, { useState } from "react";
import OpenArr from "../../assets/signUp/openArr.svg";
import CloseArr from "../../assets/signUp/closeArr.svg";

const DropDown = ({ title, data, msg }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelect, setIsSelect] = useState(msg);

  const showMenu = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const selectItem = (item) => {
    setIsOpen(!isOpen);
    setIsSelect(item);
  };

  return (
    <div className="flex flex-col">
      <label>
        <span className="text-[14px] font-semibold">
          {title}
          <span className="text-[#D32F2F]"> *</span>
        </span>
      </label>
      <div>
        <div
          className="w-[320px] h-[48px] border-solid border rounded-[5px] border-[#757575] 
      py-[12px] pl-[17px] pr-[12px] text-[14px] text-[#757575] font-[400] flex justify-between items-center"
        >
          <span>{isSelect}</span>
          <button onClick={showMenu}>
            <img src={isOpen ? CloseArr : OpenArr} />
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-[320px] rounded-[5px] bg-[#F5F5F5] border border-[#757575]`}
        >
          {data?.map((item, index) => (
            <div
              key={item.id}
              onClick={() => selectItem(item.value)}
              className={`h-[48px] text-[14px] text-[#757575] py-[15px] px-[17px] font-[400] hover:bg-white ${
                index != data.length - 1
                  ? "border-b-[1px] border-[#757575]"
                  : ""
              }`}
            >
              {item.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
