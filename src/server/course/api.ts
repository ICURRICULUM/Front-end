import { SearchCourseResponse } from './response';

import { GetAxiosInstance } from '@axios/axios.method';

export const searchCourse = async (code: string): Promise<SearchCourseResponse> => {
  const response = await GetAxiosInstance<SearchCourseResponse>(`/course`, {
    params: { code: code },
  });

  return response.data;
};
