import { SendMailRequest, VerifyMailRequest } from './request';
import { SendMailResponse, VerifyMailResponse } from './response';

import { GuestPostAxiosInstance } from '@axios/guest.axios.method';

export const verifyMail = async (data: VerifyMailRequest): Promise<VerifyMailResponse> => {
  const response = await GuestPostAxiosInstance<VerifyMailResponse>(`/mail/verify`, data);

  return response.data;
};

export const sendMail = async (data: SendMailRequest): Promise<SendMailResponse> => {
  const response = await GuestPostAxiosInstance<SendMailResponse>(`/mail/send`, data);

  return response.data;
};
