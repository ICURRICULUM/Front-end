import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation, UseQueryResult, UseMutationResult } from '@tanstack/react-query';

import { useLoggedInStore, useUserProfileStore } from '@zustand/user/store';

import { login, signUp, getMemberInfo } from '@server/member/api';
import { LoginRequest, SignUpRequest } from '@server/member/request';
import { LoginResponse, SignUpResponse, GetMemberInfoResponse } from '@server/member/response';

// 회원 정보 조회
export const useGetMemberInfo = (): UseQueryResult<GetMemberInfoResponse> => {
  return useQuery({
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
    },
    onError: () => handleError(true),
  });
};
