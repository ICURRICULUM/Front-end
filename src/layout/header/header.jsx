import React from "react";
import InhaLogo from "../../assets/header/inha.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full px-10 shadow-header">
      <Link to="/">
        <img src={InhaLogo} />
      </Link>

      <div className="flex">
        <Link to="/" className="px-6 text-xl py-7">
          남은 강의 찾기
        </Link>
        <Link to="/" className="px-6 text-xl py-7">
          내 수강 이력
        </Link>
        <Link to="/" className="px-6 text-xl py-7">
          수강 이력 입력
        </Link>
        <Link to="/" className="px-6 text-xl py-7">
          내 정보
        </Link>
      </div>
    </div>
  );
};

export default Header;
