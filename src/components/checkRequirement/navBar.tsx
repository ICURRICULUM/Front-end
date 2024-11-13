import React from 'react';

interface NavBarProps {
  type: string;
  setType: (type: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ type, setType }) => {
  return (
    <div className="flex flex-row justify-center space-x-5 border-b border-b-[#757575]">
      <button
        onClick={() => setType('major')}
        className={`py-5 ${
          type === 'major'
            ? 'border-b-4 border-b-[#005BAC] text-[#005BAC]'
            : 'border-b-0 text-[#757575]'
        }`}
      >
        주전공
      </button>

      <button
        onClick={() => setType('doubleMajor')}
        className={`py-5 ${
          type === 'doubleMajor'
            ? 'border-b-4 border-b-[#005BAC] text-[#005BAC]'
            : 'border-b-0 text-[#757575]'
        }`}
      >
        다중전공
      </button>
    </div>
  );
};

export default NavBar;
