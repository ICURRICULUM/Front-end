import { useMutation, UseMutationResult } from '@tanstack/react-query';

import { useSignUpStore } from '@zustand/user/store';

import { sendMail, verifyMail } from '@server/mail/api';
import { SendMailRequest, VerifyMailRequest } from '@server/mail/request';
import { SendMailResponse, VerifyMailResponse } from '@server/mail/response';

// 메일 인증
export const useVerifyMail = (
  handleVerified: (isVerified: boolean) => void,
  handleError: (isError: boolean) => void,
): UseMutationResult<VerifyMailResponse, unknown, VerifyMailRequest> => {
  const { setSignUpState } = useSignUpStore();

  return useMutation({
    mutationFn: (data: VerifyMailRequest) => verifyMail(data),
    onSuccess: (data: VerifyMailResponse) => {
      console.log(data);
      handleVerified(data.result.check);
      handleError(!data.result.check);
      setSignUpState({ email: data.result.email });
    },
    onError: () => {
      alert('잘못된 요청입니다!');
    },
  });
};

// 메일 전송
export const useSendMail = (
  handleSended: (isSended: boolean) => void,
): UseMutationResult<SendMailResponse, unknown, SendMailRequest> => {
  return useMutation({
    mutationFn: (data: SendMailRequest) => sendMail(data),
    onSuccess: () => handleSended(true),
    onError: () => {
      alert('잘못된 요청입니다!');
    },
  });
};
