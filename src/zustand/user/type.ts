export interface SignUpState {
  email: string;
  password: string;
}

export interface UserProfile {
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
}
