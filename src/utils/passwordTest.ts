interface PasswordValidation {
  isMinLengthMet: boolean;
  isCombinationMet: boolean;
  isNoSequentialMet: boolean;
  isNotSimilarToId: boolean;
}

// 비밀번호 확인
export const validatePassword = (password: string, email: string): PasswordValidation => {
  // 최소 8자
  const minLength = password.length >= 8;

  // 영문, 숫자, 특수문자 조합
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasRequiredCombination = hasLetter && hasNumber && hasSpecialChar;

  // 연속 문자, 숫자 금지
  const noSequential = !/(.)\1{2,}/.test(password);

  // 아이디와 3자 이상 동일한 문자 금지
  const noSimilarToId = !email || !new RegExp(`${email.substring(0, 3)}`, 'i').test(password);

  return {
    isMinLengthMet: minLength,
    isCombinationMet: hasRequiredCombination,
    isNoSequentialMet: noSequential,
    isNotSimilarToId: noSimilarToId,
  };
};
