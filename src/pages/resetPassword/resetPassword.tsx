import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { validatePassword } from '@utils/passwordTest';
import { useChangePassword } from '@hooks/member/hook';

import { useUserProfileStore } from '@zustand/user/store';

import EyeIcon from '@assets/signUp/eye.svg';
import BackButton from '@assets/backButton.svg';
import BlueCheck from '@assets/signUp/blueCheck.svg';
import GrayCheck from '@assets/signUp/grayCheck.svg';
import CrossedEyeIcon from '@assets/signUp/crossedEye.svg';

const ResetPasswordPage = () => {
  const navigate = useNavigate();

  const { userProfile } = useUserProfileStore();

  const [oldPassword, setOldPassword] = useState<string>('');
  const [isOldPasswordVisible, setIsOldPasswordVisible] = useState<boolean>(false);

  const [newPassword, setNewPassword] = useState<string>('');
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState<boolean>(false);
  const [isNewPasswordValid, setIsNewPasswordValid] = useState<boolean>(false);

  const [passwordValidation, setPasswordValidation] = useState({
    isMinLengthMet: false,
    isCombinationMet: false,
    isNoSequentialMet: false,
    isNotSimilarToId: false,
  });

  useEffect(() => {
    const validationResults = validatePassword(newPassword, userProfile.email);
    setPasswordValidation(validationResults);

    const allValid = Object.values(validationResults).every((value) => value === true);
    setIsNewPasswordValid(allValid);
  }, [newPassword, userProfile.email, isNewPasswordValid]);

  // 기존 비밀번호 잘못 입력시 입력값 제거
  const clearPasswords = () => {
    setOldPassword('');
    setNewPassword('');
  };

  const { mutateAsync: changePassword } = useChangePassword(clearPasswords);

  return (
    <main className="mx-auto w-[600px]">
      <section className="flex flex-col space-y-20 pt-20">
        <header className="mt-20 flex flex-row justify-between text-center">
          <button onClick={() => navigate('/mypage')} className="">
            <img src={BackButton} />
          </button>

          <p className="text-3xl font-bold">비밀번호 재설정</p>

          <div className="w-6" />
        </header>

        <div className="flex flex-col space-y-5">
          {/* 기존 비밀번호 입력 div */}
          <div className="flex flex-col space-y-1">
            <p className="flex flex-row text-sm font-semibold">
              기존 비밀번호 입력<span className="ml-0.5 text-[#d32f2f]">*</span>
            </p>
            <div className="flex flex-col space-y-4">
              <div className="relative flex flex-row space-x-2">
                <input
                  className="w-full rounded-[5px] border border-[#757575] p-4 pr-12"
                  type={isOldPasswordVisible ? 'text' : 'password'}
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  placeholder="기존 비밀번호를 입력해주세요."
                />
                <button
                  type="button"
                  onClick={() => setIsOldPasswordVisible(!isOldPasswordVisible)}
                  className="absolute inset-y-0 right-4 flex items-center"
                >
                  <img
                    src={isOldPasswordVisible ? CrossedEyeIcon : EyeIcon}
                    alt="Toggle Password Visibility"
                    className="h-6 w-6"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* 새로운 비밀번호 입력 div */}
          <div className="flex flex-col space-y-1">
            <p className="flex flex-row text-sm font-semibold">
              새로운 비밀번호 입력<span className="ml-0.5 text-[#d32f2f]">*</span>
            </p>
            <div className="flex flex-col space-y-4">
              <div className="relative flex flex-row space-x-2">
                <input
                  className="w-full rounded-[5px] border border-[#757575] p-4 pr-12"
                  type={isNewPasswordVisible ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="새로운 비밀번호를 입력해주세요."
                />
                <button
                  type="button"
                  onClick={() => setIsNewPasswordVisible(!isNewPasswordVisible)}
                  className="absolute inset-y-0 right-4 flex items-center"
                >
                  <img
                    src={isNewPasswordVisible ? CrossedEyeIcon : EyeIcon}
                    alt="Toggle Password Visibility"
                    className="h-6 w-6"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* 새로운 비밀번호 검증 div */}
          <div>
            <div className="flex flex-row space-x-2">
              <img src={passwordValidation.isMinLengthMet ? BlueCheck : GrayCheck} />
              <p
                className={`${
                  passwordValidation.isMinLengthMet ? 'text-[#4285F4]' : 'text-[#757575]'
                }`}
              >
                최소 8자
              </p>
            </div>
            <div className="flex flex-row space-x-2">
              <img src={passwordValidation.isCombinationMet ? BlueCheck : GrayCheck} />
              <p
                className={`${
                  passwordValidation.isCombinationMet ? 'text-[#4285F4]' : 'text-[#757575]'
                }`}
              >
                영문, 숫자, 특수문자 3가지 조합
              </p>
            </div>
            <div className="flex flex-row space-x-2">
              <img src={passwordValidation.isNoSequentialMet ? BlueCheck : GrayCheck} />
              <p
                className={`${
                  passwordValidation.isNoSequentialMet ? 'text-[#4285F4]' : 'text-[#757575]'
                }`}
              >
                연속 문자, 숫자 금지
              </p>
            </div>
            <div className="flex flex-row space-x-2">
              <img src={passwordValidation.isNotSimilarToId ? BlueCheck : GrayCheck} />
              <p
                className={`${
                  passwordValidation.isNotSimilarToId ? 'text-[#4285F4]' : 'text-[#757575]'
                }`}
              >
                아이디와 3자 이상 동일한 문자 금지
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => changePassword({ oldPassword, newPassword })}
          disabled={!isNewPasswordValid}
          className={`flex flex-row self-end rounded-five px-4 py-2 font-semibold text-white ${
            isNewPasswordValid ? 'bg-[#005BAC]' : 'bg-[#757575]'
          }`}
        >
          비밀번호 변경
        </button>
      </section>
    </main>
  );
};

export default ResetPasswordPage;
