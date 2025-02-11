export interface GetDepartmentListResponse {
  result: {
    departmentInfoDTOList: {
      name: string;
      departmentId: number;
    }[];
  };
}
