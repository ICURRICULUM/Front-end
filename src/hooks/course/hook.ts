import { useMutation, UseMutationResult } from '@tanstack/react-query';

import { searchCourse } from '@server/course/api';
import { SearchCourseResponse } from '@server/course/response';

export const useSearchCourse = (): UseMutationResult<SearchCourseResponse, unknown, string> => {
  return useMutation({
    mutationFn: (code: string) => searchCourse(code),
    onError: (error: any) => alert(error.response.data.message),
  });
};
