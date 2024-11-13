import React, { useState } from 'react';

import UpArrow from '@assets/signUp/upArrow.svg';
import DownArrow from '@assets/signUp/downArrow.svg';

interface NameInputProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const NameInput: React.FC<NameInputProps> = ({ value, setValue }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleValue = (item: Item) => {
    setValue(item.value);
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
          {value !== '' ? value : '주전공 학과를 선택하세요.'}
          <span>{isOpen ? <img src={UpArrow} /> : <img src={DownArrow} />}</span>
        </div>
      </div>
    </div>
  );
};

export default NameInput;
