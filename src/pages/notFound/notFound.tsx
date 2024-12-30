import { useNavigate } from 'react-router-dom';

import LogoImage from '@assets/image.svg';
import Background from '@assets/startPage/background.svg';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const toHome = () => {
    navigate('/');
  };

  return (
    <div
      className="flex h-screen w-screen flex-row items-center justify-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="flex h-[554px] w-[480px] flex-col items-center justify-between bg-white p-[100px]">
        <img src={LogoImage} />
        <p className="text-2xl font-semibold text-[#d32f2f]">잘못된 주소 접근입니다!</p>
        <button
          onClick={toHome}
          className="w-full rounded-[5px] bg-[#005BAC] py-4 font-semibold text-white"
        >
          홈으로
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
