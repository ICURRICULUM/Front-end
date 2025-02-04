import React, { useState } from 'react';
import { useLogin } from '@hooks/member/hook';
import { useNavigate } from 'react-router-dom';

import LoadingComponent from '@components/common/loading';

import Logo from '@assets/logo.svg';
import Background from '@assets/startPage/background.svg';

const StartPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [isError, setIsError] = useState<boolean>(false);

  const handleError = (isError: boolean) => {
    setIsError(isError);
  };

  const resetStates = () => {
    setEmail('');
    setPassword('');
    setIsError(false);
  };

  const { mutateAsync: login, isPending } = useLogin(handleError, resetStates);

  const handleLogin = async () => {
    await login({ email: email + '@inha.edu', password: password });
  };

  const handleEnter = async (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      await login({ email: email + '@inha.edu', password: password });
    }
  };

  return (
    <div
      className="flex h-screen w-screen flex-row items-center justify-end bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      {isPending && <LoadingComponent />}

      <div className="flex h-full w-[480px] flex-col overflow-y-scroll bg-white px-20 pt-40">
        <img className="mb-8 w-fit" src={Logo} alt="Inha Logo" />
        <div className="mb-4 text-xl font-semibold text-[#424242]">
          학교 이메일로 로그인해주세요
        </div>
        <div
          className={`mb-4 flex flex-row items-center space-x-2 rounded-[5px] border p-4 ${
            isError ? 'border-[#D32F2F]' : 'border-[#757575]'
          }`}
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="학교 이메일 주소(@inha.edu)"
            className="flex-1"
          />
          <p className="font-semibold">@inha.edu</p>
        </div>

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleEnter}
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
        <button onClick={handleLogin} className="my-4 rounded-[5px] bg-[#005BAC] p-4 text-white">
          로그인
        </button>

        <div className="flex flex-row justify-evenly">
          <button onClick={() => navigate('/join/agree')} className="text-[#757575] underline">
            회원가입
          </button>
          <button onClick={() => navigate('/reset/password')} className="text-[#757575] underline">
            비밀번호 찾기
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
