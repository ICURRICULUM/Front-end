import { Link } from "react-router-dom";

import Logo from "@assets/logo.svg";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 z-10 flex flex-row items-center justify-between w-full px-10 bg-white shadow-header">
      <Link to="/">
        <img src={Logo} />
      </Link>

      <div className="flex">
        <Link to="/" className="px-6 text-xl py-7">
          남은 강의 찾기
        </Link>
        <Link to="/" className="px-6 text-xl py-7">
          수강 이력 입력
        </Link>
        <Link to="/" className="px-6 text-xl py-7">
          마이페이지
        </Link>
      </div>
    </div>
  );
};

export default Header;
