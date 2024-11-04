import React from "react";

interface NavBarProps {
  type: string;
  setType: (type: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ type, setType }) => {
  return (
    <div className="border-b border-b-[#757575] flex flex-row justify-center space-x-5">
      <button
        onClick={() => setType("search")}
        className={`py-5 ${
          type === "search"
            ? "text-[#005BAC] border-b-4 border-b-[#005BAC]"
            : "text-[#757575] boredr-b-0"
        }`}
      >
        과목 검색하기
      </button>

      <button
        onClick={() => setType("direct")}
        className={`py-5 ${
          type === "direct"
            ? "text-[#005BAC] border-b-4 border-b-[#005BAC]"
            : "text-[#757575] boredr-b-0"
        }`}
      >
        직접 입력하기
      </button>
    </div>
  );
};

export default NavBar;
