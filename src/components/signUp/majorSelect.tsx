import React, { useState } from 'react';
import { useGetDepartmentList } from '@hooks/department/department';

import UpArrow from '@assets/signUp/upArrow.svg';
import DownArrow from '@assets/signUp/downArrow.svg';

interface Item {
  departmentId: number;
  name: string;
}

interface MajorSelectProps {
  setValue: (value: number) => void;
}

const MajorSelect: React.FC<MajorSelectProps> = ({ setValue }) => {
  const { data } = useGetDepartmentList();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [displayMajor, setDisplayMajor] = useState<string>('');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleValue = (item: Item) => {
    setValue(item.departmentId);
    setDisplayMajor(item.name);
    setIsOpen(false);
  };

  return (
    <div className="w-80">
      <p className="mb-1 text-sm font-semibold">학과</p>
      <div className="relative">
        <div
          className={`flex cursor-pointer flex-row items-center justify-between rounded-five border border-[#757575] p-4 ${
            isOpen ? 'bg-[#EEEEEE]' : 'bg-white'
          }`}
          onClick={toggleDropdown}
        >
          <p className="text-[#757575]">
            {displayMajor !== '' ? displayMajor : '주전공 학과를 선택하세요.'}
          </p>
          <span>{isOpen ? <img src={UpArrow} /> : <img src={DownArrow} />}</span>
        </div>
        {isOpen && (
          <div className="absolute w-full rounded-five border border-[#757575] bg-white">
            {data.result.departmentInfoDTOList.map((item) => (
              <div
                key={item.departmentId}
                onClick={() => handleValue(item)}
                className="z-50 cursor-pointer border border-[#EEEEEE] p-4 text-[#757575] hover:bg-[#00AFEC] hover:text-white"
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MajorSelect;
