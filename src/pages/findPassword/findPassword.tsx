import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSendMail, useVerifyMailNResetPassword } from '@hooks/mail/hook';

import LoadingComponent from '@components/common/loading';

import BackButton from '@assets/backButton.svg';

const FindPasswordPage = () => {
  const navigate = useNavigate();

  const [isSended, setIsSended] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleSended = (isSended: boolean) => {
    setIsSended(isSended);
  };

  const handleError = (isError: boolean) => {
    setIsError(isError);
  };

  const [email, setEmail] = useState<string>('');
  const [code, setCode] = useState<string>('');

  const { mutateAsync: sendMail, isPending: sendMailPending } = useSendMail(handleSended);
  const { mutateAsync: verifyMail } = useVerifyMailNResetPassword(handleError);

  const handleSend = () => {
    sendMail({ email: email + '@inha.edu' });
  };

  const handleVerify = () => {
    verifyMail({ email: email + '@inha.edu', code: code });
  };

  return (
    <main className="mx-auto w-[600px]">
      {sendMailPending && <LoadingComponent />}
      <section className="flex flex-col space-y-20 pt-20">
        <header className="mt-20 flex flex-row justify-between text-center">
          <button onClick={() => navigate('/')} className="">
            <img src={BackButton} />
          </button>

          <p className="text-3xl font-bold">비밀번호 재설정</p>

          <div className="w-6" />
        </header>

        <div className="flex flex-col space-y-5">
          {/* 이메일 입력 div */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row space-x-2">
              <div className="flex min-w-[432px] flex-row space-x-2 rounded-five border border-[#757575] p-4">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="학교 메일(@inha.edu)을 입력하세요."
                  className="flex-1"
                />
                <div className="font-semibold">@inha.edu</div>
              </div>
              <button
                onClick={handleSend}
                disabled={!email}
                className={`min-w-40 rounded-[5px] border border-[#005BAC] p-4 text-base font-semibold ${
                  !isSended && 'bg-[#005BAC] text-white'
                }`}
              >
                {isSended ? '인증메일 재전송' : '인증메일 받기'}
              </button>
            </div>

            {/* 인증번호 입력 div */}
            <div className="flex flex-col space-y-1">
              <div className="flex flex-row space-x-2">
                <input
                  className={`rounded-[5px] border p-4 ${
                    isError ? 'border-[#d32f2f]' : 'border-[#757575]'
                  }`}
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  disabled={!isSended}
                  placeholder="인증번호 6자리"
                />
                <button
                  onClick={handleVerify}
                  disabled={!isSended}
                  className="min-w-40 rounded-[5px] border border-[#005BAC] bg-white p-4 text-base font-semibold text-[#005BAC]"
                >
                  인증번호 입력
                </button>
              </div>
              {isError && (
                <p className="ml-1 text-sm font-medium text-[#d32f2f]">잘못된 인증번호입니다!</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FindPasswordPage;
