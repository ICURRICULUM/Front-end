export interface SignUpRequest {
  email: string;
  password: string;
  name: string;
  departmentId: number;
  joinYear: number;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface ChangePasswordRequest {
  oldPassword: string;
  newPassword: string;
}
