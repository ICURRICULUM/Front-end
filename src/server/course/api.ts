import { SearchCourseByListsRequest } from './request';
import {
  SearchCourseResponse,
  SearchCourseListResponse,
  SearchCourseByListsResponse,
} from './response';

import { GetAxiosInstance, PostAxiosInstance } from '@axios/axios.method';

export const searchCourse = async (code: string): Promise<SearchCourseResponse> => {
  const response = await GetAxiosInstance<SearchCourseResponse>(`/course`, {
    params: { code: code },
  });

  return response.data;
};

export const searchCourseList = async (code: string): Promise<SearchCourseListResponse> => {
  const response = await GetAxiosInstance<SearchCourseListResponse>(`/course/all`, {
    params: { code: code },
  });

  return response.data;
};

export const searchCourseByLists = async (
  data: SearchCourseByListsRequest,
): Promise<SearchCourseByListsResponse> => {
  const response = await PostAxiosInstance<SearchCourseByListsResponse>(`/course/report`, data);

  return response.data;
};
