export interface GetMemberInfoResponse {
  result: {
    name: string;
    email: string;
    joinYear: number;
    majorList: {
      majorType: string;
      departmentInfoDTO: {
        name: string;
        departmentId: number;
      };
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

export interface ChangePasswordResponse {
  result: {
    email: string;
    join_date: string;
  };
}
