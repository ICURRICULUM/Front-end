import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useLoggedInStore } from '@zustand/user/store';

import Logo from '@assets/logo.svg';

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useLoggedInStore();

  const handleLogoClick = () => {
    if (window.location.pathname === '/') {
      window.location.reload();
    }
  };

  const handleLinkClick = (path: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isLoggedIn) {
      event.preventDefault();
      alert('로그인이 필요합니다');
    } else {
      navigate(path);
    }
  };

  return (
    <div className="fixed left-0 top-0 z-10 flex w-full flex-row items-center justify-between bg-white px-10 shadow-header">
      <Link to="/" onClick={handleLogoClick}>
        <img src={Logo} />
      </Link>

      <div className="flex">
        <Link
          to="/requirement"
          onClick={handleLinkClick('/requirement')}
          className="px-6 py-7 text-xl font-semibold hover:text-[#005BAC]"
        >
          내 졸업요건 확인하기
        </Link>
        <Link
          to="/entercourse"
          onClick={handleLinkClick('/entercourse')}
          className="px-6 py-7 text-xl font-semibold hover:text-[#005BAC]"
        >
          이수과목 관리
        </Link>
        <Link
          to="/mypage"
          onClick={handleLinkClick('/mypage')}
          className="px-6 py-7 text-xl font-semibold hover:text-[#005BAC]"
        >
          마이페이지
        </Link>
      </div>
    </div>
  );
};

export default Header;
