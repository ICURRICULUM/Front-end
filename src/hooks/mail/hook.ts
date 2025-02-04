import { useNavigate } from 'react-router-dom';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

import { useSignUpStore } from '@zustand/user/store';

import { SendMailRequest, VerifyMailRequest } from '@server/mail/request';
import { SendMailResponse, VerifyMailResponse } from '@server/mail/response';
import { sendMail, verifyMail, sendTemporaryPassword } from '@server/mail/api';

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
    onSuccess: () => {
      alert('메일이 전송되었습니다!');
      handleSended(true);
    },
    onError: () => {
      alert('잘못된 요청입니다!');
    },
  });
};

// 메일 인증
export const useVerifyMailNResetPassword = (
  handleError: (isError: boolean) => void,
): UseMutationResult<VerifyMailResponse, unknown, VerifyMailRequest> => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: VerifyMailRequest) => verifyMail(data),
    onSuccess: (data: VerifyMailResponse) => {
      console.log(data);
      handleError(!data.result.check);
      sendTemporaryPassword({ email: data.result.email });
      alert('임시 비밀번호가 전송되었어요!');
      navigate('/');
    },
    onError: () => {
      alert('잘못된 요청입니다!');
    },
  });
};
