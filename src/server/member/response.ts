export interface SignUpResponse {
  result: {
    email: string;
    join_date: string;
  };
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}
