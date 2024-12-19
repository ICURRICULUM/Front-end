import { Link } from 'react-router-dom';

import Logo from '@assets/logo.svg';

const Header = () => {
  const handleLogoClick = () => {
    if (window.location.pathname === '/') {
      window.location.reload();
    }
  };

  return (
    <div className="fixed left-0 top-0 z-10 flex w-full flex-row items-center justify-between bg-white px-10 shadow-header">
      <Link to="/" onClick={handleLogoClick}>
        <img src={Logo} />
      </Link>

      <div className="flex">
        <Link to="/requirement" className="px-6 py-7 text-xl font-semibold hover:text-[#005BAC]">
          내 졸업요건 확인하기
        </Link>
        <Link to="/entercourse" className="px-6 py-7 text-xl font-semibold hover:text-[#005BAC]">
          이수과목 관리
        </Link>
        <Link to="/mypage" className="px-6 py-7 text-xl font-semibold hover:text-[#005BAC]">
          마이페이지
        </Link>
      </div>
    </div>
  );
};

export default Header;
