export interface GetMemberInfoResponse {
  result: {
    name: string;
    email: string;
    joinYear: number;
    majorList: {
      majorType: string;
      departmentName: string;
    }[];
  };
}

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
