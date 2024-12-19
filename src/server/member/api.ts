import { LoginRequest, SignUpRequest } from './request';
import { LoginResponse, SignUpResponse } from './response';

import { GuestPostAxiosInstance } from '@axios/guest.axios.method';

export const signUp = async (data: SignUpRequest): Promise<SignUpResponse> => {
  const response = await GuestPostAxiosInstance<SignUpResponse>(`/members/join`, data);

  return response.data;
};

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await GuestPostAxiosInstance<LoginResponse>(`/login`, data);

  return response.data;
};
