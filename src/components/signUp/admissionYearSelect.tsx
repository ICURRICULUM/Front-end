import React, { useState } from 'react';

import UpArrow from '@assets/signUp/upArrow.svg';
import DownArrow from '@assets/signUp/downArrow.svg';

interface Item {
  id: number;
  name: string;
  value: number;
}

interface AdmissionYearSelectProps {
  setValue: (value: number) => void;
  itemList: Item[];
}

const AdmissionYearSelect: React.FC<AdmissionYearSelectProps> = ({ setValue, itemList }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [displayValue, setDisplayValue] = useState<string>('');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleValue = (item: Item) => {
    setValue(item.value);
    setDisplayValue(item.name);
    setIsOpen(false);
  };

  return (
    <div className="w-80">
      <p className="mb-1">학번</p>
      <div className="relative">
        <div
          className={`flex cursor-pointer flex-row items-center justify-between rounded-five border border-[#757575] p-4 ${
            isOpen ? 'bg-[#EEEEEE]' : 'bg-white'
          }`}
          onClick={toggleDropdown}
        >
          <p className="text-[#757575]">
            {displayValue !== '' ? displayValue : '학번을 선택하세요.'}
          </p>
          <span>{isOpen ? <img src={UpArrow} /> : <img src={DownArrow} />}</span>
        </div>

        {isOpen && (
          <div className="absolute z-30 w-full rounded-five border border-[#757575] bg-white">
            {itemList.map((item, index) => (
              <div
                key={index}
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

export default AdmissionYearSelect;
