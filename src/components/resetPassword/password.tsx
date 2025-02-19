import React, { useState, useEffect } from 'react';
import { validatePassword } from '@utils/passwordTest';

import { useUserProfileStore } from '@zustand/user/store';

import EyeIcon from '@assets/signUp/eye.svg';
import LockIcon from '@assets/signUp/lock.svg';
import BlueCheck from '@assets/signUp/blueCheck.svg';
import GrayCheck from '@assets/signUp/grayCheck.svg';
import CrossedEyeIcon from '@assets/signUp/crossedEye.svg';

const Password: React.FC = () => {
  const { userProfile } = useUserProfileStore();

  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const [passwordValidation, setPasswordValidation] = useState({
    isMinLengthMet: false,
    isCombinationMet: false,
    isNoSequentialMet: false,
    isNotSimilarToId: false,
  });

  useEffect(() => {
    const validationResults = validatePassword(newPassword, userProfile.email);
    setPasswordValidation(validationResults);

    // const allValid = Object.values(validationResults).every((value) => value === true);
    // setValid(allValid);
  }, [newPassword, userProfile.email]);

  return (
    <div className="flex flex-col space-y-9">
      <div className="flex flex-row space-x-4">
        <img src={LockIcon} />
        <p className="text-xl font-semibold">비밀번호 재설정</p>
      </div>
      <div className="flex flex-col space-y-3">
        <div className="flex flex-col space-y-1">
          <p className="flex flex-row text-sm font-semibold">
            이전 비밀번호 입력<span className="ml-0.5 text-[#d32f2f]">*</span>
          </p>
          <div className="flex flex-col space-y-4">
            <div className="relative flex flex-row space-x-2">
              <input
                className="w-full rounded-[5px] border border-[#757575] p-4 pr-12"
                type={isPasswordVisible ? 'text' : 'password'}
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="기존 비밀번호를 입력해주세요."
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-4 flex items-center"
              >
                <img
                  src={isPasswordVisible ? CrossedEyeIcon : EyeIcon}
                  alt="Toggle Password Visibility"
                  className="h-6 w-6"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="flex flex-col space-y-1">
            <p className="flex flex-row text-sm font-semibold">
              이전 비밀번호 입력<span className="ml-0.5 text-[#d32f2f]">*</span>
            </p>
            <div className="flex flex-col space-y-4">
              <div className="relative flex flex-row space-x-2">
                <input
                  className="w-full rounded-[5px] border border-[#757575] p-4 pr-12"
                  type={isPasswordVisible ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="새로운 비밀번호를 입력해주세요."
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-4 flex items-center"
                >
                  <img
                    src={isPasswordVisible ? CrossedEyeIcon : EyeIcon}
                    alt="Toggle Password Visibility"
                    className="h-6 w-6"
                  />
                </button>
              </div>
            </div>
          </div>
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
      </div>
    </div>
  );
};

export default Password;
