import React from 'react';
import { useLogout } from '@hooks/member/hook';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useLoggedInStore } from '@zustand/user/store';

import Logo from '@assets/logo.svg';

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useLoggedInStore();
  const location = useLocation();

  const handleLinkClick = (path: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isLoggedIn) {
      event.preventDefault();
      alert('로그인이 필요합니다');
    } else {
      navigate(path);
    }
  };

  const { mutateAsync: logout } = useLogout();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="fixed left-0 top-0 z-10 flex w-full flex-row items-center justify-between bg-white px-10 shadow-header">
      {isLoggedIn ? (
        <img src={Logo} />
      ) : (
        <button onClick={() => navigate('/')}>
          <img src={Logo} />
        </button>
      )}

      <div className="flex">
        <button
          className="px-6 py-7 text-xl font-semibold hover:text-[#005BAC]"
          onClick={() =>
            window.open(
              'https://docs.google.com/forms/d/e/1FAIpQLSfsVjVEV1jY-d19ndbGtJADQpjfbdDYRq-cqkkZvpXsODwJCg/viewform',
              '_blank',
            )
          }
        >
          피드백하기
        </button>

        <Link
          to="/requirement"
          onClick={handleLinkClick('/requirement')}
          className={`px-6 py-7 text-xl font-semibold hover:text-[#005BAC] ${
            location.pathname === '/requirement' && 'text-[#005BAC]'
          }`}
        >
          내 졸업요건 확인하기
        </Link>
        <Link
          to="/entercourse"
          onClick={handleLinkClick('/entercourse')}
          className={`px-6 py-7 text-xl font-semibold hover:text-[#005BAC] ${
            location.pathname === '/entercourse' && 'text-[#005BAC]'
          }`}
        >
          이수과목 관리
        </Link>
        <Link
          to="/mypage"
          onClick={handleLinkClick('/mypage')}
          className={`px-6 py-7 text-xl font-semibold hover:text-[#005BAC] ${
            location.pathname === '/mypage' && 'text-[#005BAC]'
          }`}
        >
          마이페이지
        </Link>

        {isLoggedIn && (
          <div className="flex flex-col justify-center">
            <button
              onClick={handleLogout}
              className="rounded-five bg-[#005BAC] px-2 py-1 font-semibold text-white"
            >
              로그아웃
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
