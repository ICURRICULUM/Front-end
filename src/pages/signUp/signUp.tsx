import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Email from '@components/signUp/signUp/email';
import StepItem from '@components/common/stepComponent';
import Password from '@components/signUp/signUp/password';
import Agreement from '@components/signUp/signUp/agreement';

import { useSignUpStore } from '@zustand/user/store';

const SignUpPage = () => {
  const navigate = useNavigate();

  const { setSignUpState } = useSignUpStore();

  const [canNext, setCanNext] = useState<boolean>(false);

  const [email, setEmail] = useState<string>('');
  const [verifyCode, setVerifyCode] = useState<string>('');
  const [isVerified, setIsVerified] = useState<boolean>(false);

  const [password, setPassword] = useState<string>('');
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);

  const [isAgree, setIsAgree] = useState<boolean>(false);

  const handleEmail = (email: string) => {
    setEmail(email);
  };

  const handleVerifyCode = (code: string) => {
    setVerifyCode(code);
  };

  const handlePassword = (password: string) => {
    setPassword(password);
  };

  const handlePasswordValid = (valid: boolean) => {
    setIsPasswordValid(valid);
  };

  const handleAgree = () => {
    setIsAgree(!isAgree);
  };

  const toNext = () => {
    setSignUpState({ password: password });
    navigate('/join/begin');
  };

  useEffect(() => {
    setCanNext(isVerified && isPasswordValid && isAgree);
  }, [isVerified, isPasswordValid, isAgree]);

  return (
    <main className="mb-10">
      <StepItem currentIndex={1} />

      <section className="mx-auto my-0 flex w-[600px] flex-col space-y-20">
        <Email
          email={email}
          setEmail={handleEmail}
          code={verifyCode}
          setCode={handleVerifyCode}
          isVerified={isVerified}
          setIsVerified={(state: boolean) => setIsVerified(state)}
        />

        <Password
          email={email}
          password={password}
          setPassword={handlePassword}
          setValid={handlePasswordValid}
        />

        <Agreement value={isAgree} setValue={handleAgree} />

        <button
          onClick={toNext}
          disabled={!canNext}
          className={`w-full rounded-[5px] p-4 text-base font-semibold text-white ${
            canNext ? 'bg-[#005BAC]' : 'bg-[#757575]'
          }`}
        >
          다음
        </button>
      </section>
    </main>
  );
};

export default SignUpPage;
