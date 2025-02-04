import React, { useState } from 'react';
import { useSendMail, useVerifyMail } from 'hooks/mail/hook';

import EmailIcon from '@assets/signUp/email.svg';

interface EmailProps {
  email: string;
  setEmail: (email: string) => void;
  code: string;
  setCode: (code: string) => void;
  isVerified: boolean;
  setIsVerified: (state: boolean) => void;
}

const Email: React.FC<EmailProps> = ({
  email,
  setEmail,
  code,
  setCode,
  isVerified,
  setIsVerified,
}) => {
  const [isSended, setIsSended] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleSended = (isSended: boolean) => {
    setIsSended(isSended);
  };

  const handleError = (isError: boolean) => {
    setIsError(isError);
  };

  const { mutateAsync: sendMail } = useSendMail(handleSended);
  const { mutateAsync: verifyMail } = useVerifyMail(setIsVerified, handleError);

  const handleSend = () => {
    sendMail({ email: email + '@inha.edu' });
  };

  const handleVerify = () => {
    verifyMail({ email: email + '@inha.edu', code: code });
  };

  return (
    <div className="flex flex-col space-y-9">
      <div className="flex flex-row space-x-4">
        <img src={EmailIcon} />
        <p className="text-xl font-semibold">메일 인증</p>
      </div>
      <div className="flex flex-col space-y-1">
        <p className="flex flex-row text-sm font-semibold">
          이메일 주소<span className="ml-0.5 text-[#d32f2f]">*</span>
        </p>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row space-x-2">
            <div className="flex min-w-[432px] flex-row space-x-2 rounded-five border border-[#757575] p-4">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="학교 메일(@inha.edu)을 입력하세요."
                disabled={isVerified}
                className="flex-1"
              />
              <div className="font-semibold">@inha.edu</div>
            </div>
            <button
              onClick={handleSend}
              className={`min-w-40 rounded-[5px] border border-[#005BAC] p-4 text-base font-semibold  ${
                isVerified ? 'cursor-default bg-white text-[#005BAC]' : 'bg-[#005BAC] text-white'
              }`}
              disabled={isVerified}
            >
              {isVerified ? '메일 인증 완료' : isSended ? '인증메일 재전송' : '인증메일 받기'}
            </button>
          </div>

          {!isVerified && (
            <div className="flex flex-col space-y-1">
              <div className="flex flex-row space-x-2">
                <input
                  className={`rounded-[5px] border p-4 ${
                    isError ? 'border-[#d32f2f]' : 'border-[#757575]'
                  }`}
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="인증번호 6자리"
                  disabled={isVerified}
                />
                <button
                  onClick={handleVerify}
                  className="min-w-40 rounded-[5px] border border-[#005BAC] bg-white p-4 text-base font-semibold text-[#005BAC]"
                >
                  인증번호 입력
                </button>
              </div>
              {isError && (
                <p className="ml-1 text-sm font-medium text-[#d32f2f]">잘못된 인증번호입니다!</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Email;
