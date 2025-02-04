import { useMutation, UseMutationResult } from '@tanstack/react-query';

import { searchCourse, searchCourseList, searchCourseByLists } from '@server/course/api';
import { SearchCourseResponse, SearchCourseListResponse } from '@server/course/response';

export const useSearchCourse = (): UseMutationResult<SearchCourseResponse, unknown, string> => {
  return useMutation({
    mutationFn: (code: string) => searchCourse(code),
    onError: (error: any) => alert(error.response.data.message),
  });
};

export const useSearchCourseList = (): UseMutationResult<
  SearchCourseListResponse,
  unknown,
  string
> => {
  return useMutation({
    mutationFn: (code: string) => searchCourseList(code),
    onError: (error: any) => alert(error.response.data.message),
  });
};

export const useSearchCourseByLists = (): UseMutationResult<
  SearchCourseListResponse,
  unknown,
  string[]
> => {
  return useMutation({
    mutationFn: (codes: string[]) => searchCourseByLists({ codes }),
  });
};
