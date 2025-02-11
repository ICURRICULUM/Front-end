import { GetDepartmentListResponse } from './response';

import { GuestGetAxiosInstance } from '@axios/guest.axios.method';

export const getDepartmentList = async (): Promise<GetDepartmentListResponse> => {
  const response = await GuestGetAxiosInstance<GetDepartmentListResponse>(`/department/avail-list`);

  return response.data;
};
