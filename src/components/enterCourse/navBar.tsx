import React from 'react';

interface NavBarProps {
  type: string;
  setType: (type: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ type, setType }) => {
  return (
    <div className="flex flex-row justify-center space-x-5 border-b border-b-[#757575]">
      <button
        onClick={() => setType('search')}
        className={`px-2 py-5 ${
          type === 'search'
            ? 'border-b-4 border-b-[#005BAC] font-semibold text-[#005BAC]'
            : 'border-b-0 text-[#757575]'
        }`}
      >
        과목 검색하기
      </button>

      {/* <button
        onClick={() => setType('direct')}
        className={`px-2 py-5 ${
          type === 'direct'
            ? 'border-b-4 border-b-[#005BAC] font-semibold text-[#005BAC]'
            : 'border-b-0 text-[#757575]'
        }`}
      >
        직접 입력하기
      </button> */}
    </div>
  );
};

export default NavBar;
