import { LoginRequest, SignUpRequest, ChangePasswordRequest } from './request';
import {
  LoginResponse,
  SignUpResponse,
  GetMemberInfoResponse,
  ChangePasswordResponse,
} from './response';

import { GuestPostAxiosInstance } from '@axios/guest.axios.method';
import { GetAxiosInstance, PostAxiosInstance } from '@axios/axios.method';

// 회원 정보 조회
export const getMemberInfo = async (): Promise<GetMemberInfoResponse> => {
  const response = await GetAxiosInstance<GetMemberInfoResponse>(`/members/info`);

  return response.data;
};

// 회원가입
export const signUp = async (data: SignUpRequest): Promise<SignUpResponse> => {
  const response = await GuestPostAxiosInstance<SignUpResponse>(`/members/join`, data);

  return response.data;
};

// 회원 비밀번호 변경
export const changePassword = async (
  data: ChangePasswordRequest,
): Promise<ChangePasswordResponse> => {
  const response = await PostAxiosInstance<ChangePasswordResponse>(
    `/members/change-password`,
    data,
  );

  return response.data;
};

// 로그인
export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await GuestPostAxiosInstance<LoginResponse>(`/login`, data);

  return response.data;
};

// 로그아웃
export const logout = async () => {
  const response = await PostAxiosInstance(`/logout`);
  console.log(response);

  return response.data;
};
