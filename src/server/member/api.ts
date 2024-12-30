import { LoginRequest, SignUpRequest } from './request';
import { LoginResponse, SignUpResponse, GetMemberInfoResponse } from './response';

import { GetAxiosInstance } from '@axios/axios.method';
import { GuestPostAxiosInstance } from '@axios/guest.axios.method';

export const getMemberInfo = async (): Promise<GetMemberInfoResponse> => {
  const response = await GetAxiosInstance<GetMemberInfoResponse>(`/members/info`);

  return response.data;
};

export const signUp = async (data: SignUpRequest): Promise<SignUpResponse> => {
  const response = await GuestPostAxiosInstance<SignUpResponse>(`/members/join`, data);

  return response.data;
};

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await GuestPostAxiosInstance<LoginResponse>(`/login`, data);

  return response.data;
};
