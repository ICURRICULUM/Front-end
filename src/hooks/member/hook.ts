import { useNavigate } from 'react-router-dom';
import {
  useMutation,
  useSuspenseQuery,
  UseMutationResult,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';

import { useLoggedInStore, useUserProfileStore } from '@zustand/user/store';

import { login, signUp, logout, getMemberInfo, changePassword } from '@server/member/api';
import { LoginRequest, SignUpRequest, ChangePasswordRequest } from '@server/member/request';
import { LoginResponse, SignUpResponse, GetMemberInfoResponse } from '@server/member/response';

// 회원 정보 조회
export const useGetMemberInfo = (): UseSuspenseQueryResult<GetMemberInfoResponse> => {
  return useSuspenseQuery({
    queryKey: [`/members/info`],
    queryFn: () => getMemberInfo(),
  });
};

// 회원가입
export const useSignUp = (): UseMutationResult<SignUpResponse, unknown, SignUpRequest> => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: SignUpRequest) => signUp(data),
    onSuccess: () => {
      navigate(`/join/end`);
    },
    onError: () => {},
  });
};

// 로그인
export const useLogin = (
  handleError: (isError: boolean) => void,
  resetStates: () => void,
): UseMutationResult<LoginResponse, unknown, LoginRequest> => {
  const navigate = useNavigate();

  const { setIsLoggedIn } = useLoggedInStore();
  const { setUserProfile } = useUserProfileStore();

  return useMutation({
    mutationFn: (data: LoginRequest) => login(data),
    onSuccess: async (response: LoginResponse) => {
      localStorage.setItem('accessToken', response.accessToken);

      const userResponse = await getMemberInfo();
      setUserProfile(userResponse.result);

      resetStates();
      setIsLoggedIn(true);

      navigate('/requirement');
    },
    onError: () => handleError(true),
  });
};

// 로그아웃
export const useLogout = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useLoggedInStore();

  return useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      navigate('/');
      setIsLoggedIn(false);
      localStorage.clear();
    },
  });
};

// 비밀번호 변경
export const useChangePassword = (handlePasswords: () => void) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: ChangePasswordRequest) => changePassword(data),
    onSuccess: () => {
      alert('비밀번호가 변경되었습니다!');
      navigate('/mypage');
    },
    onError: (error: any) => {
      alert(error.response.data.message);
      handlePasswords();
    },
  });
};
