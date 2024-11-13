import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '@assets/logo.svg';
import Background from '@assets/startPage/background.svg';

const StartPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isError, setIsError] = useState(false);

  return (
    <div
      className="flex h-screen w-screen flex-row items-center justify-end bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="mt-20 flex h-4/5 w-1/3 min-w-[480px] flex-col rounded-l-five bg-white p-20">
        <img className="mb-8 w-fit" src={Logo} alt="Inha Logo" />
        <div className="mb-4 text-xl font-semibold text-[#424242]">
          학교 이메일로 로그인해주세요
        </div>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="학교 이메일 주소(@inha.edu)"
          className={`mb-4 rounded-[5px] border p-4 ${
            isError ? 'border-[#D32F2F]' : 'border-[#757575]'
          }`}
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="비밀번호"
          className={`mb-2 rounded-[5px] border p-4 ${
            isError ? 'border-[#D32F2F]' : 'border-[#757575]'
          }`}
        />
        <p className={`text-sm font-normal ${isError ? 'text-[#D32F2F]' : 'text-[#757575]'}`}>
          {isError
            ? '이메일 또는 비밀번호가 올바르지 않습니다.'
            : '인하대학교 구글 계정을 입력해주세요.'}
        </p>
        <button className="my-4 rounded-[5px] bg-[#005BAC] p-4 text-white">로그인</button>

        <div className="flex flex-row justify-evenly">
          <button onClick={() => navigate('/signup')} className="text-[#757575] underline">
            회원가입
          </button>
          <button onClick={() => navigate('/infoinput')} className="text-[#757575] underline">
            이메일 찾기
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
