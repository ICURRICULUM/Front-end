import { Link } from "react-router-dom";

import Logo from "@assets/logo.svg";

const Header = () => {
  return (
    <div className="fixed left-0 top-0 z-10 flex w-full flex-row items-center justify-between bg-white px-10 shadow-header">
      <Link to="/">
        <img src={Logo} />
      </Link>

      <div className="flex">
        <Link to="/" className="px-6 py-7 text-xl">
          남은 강의 찾기
        </Link>
        <Link to="/entercourse" className="px-6 py-7 text-xl">
          수강 이력 입력
        </Link>
        <Link to="/" className="px-6 py-7 text-xl">
          마이페이지
        </Link>
      </div>
    </div>
  );
};

export default Header;
