import { SendMailRequest, VerifyMailRequest, SendTemporaryPasswordRequest } from './request';
import { SendMailResponse, VerifyMailResponse, SendTemporaryPasswordResponse } from './response';

import { GuestPostAxiosInstance } from '@axios/guest.axios.method';

export const verifyMail = async (data: VerifyMailRequest): Promise<VerifyMailResponse> => {
  const response = await GuestPostAxiosInstance<VerifyMailResponse>(`/mail/verify`, data);

  return response.data;
};

export const sendMail = async (data: SendMailRequest): Promise<SendMailResponse> => {
  const response = await GuestPostAxiosInstance<SendMailResponse>(`/mail/send`, data);

  return response.data;
};

export const sendTemporaryPassword = async (
  data: SendTemporaryPasswordRequest,
): Promise<SendTemporaryPasswordResponse> => {
  const response = await GuestPostAxiosInstance<SendTemporaryPasswordResponse>(
    `/mail/send/temporary-password`,
    data,
  );

  return response.data;
};
