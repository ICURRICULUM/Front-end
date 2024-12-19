import { useSuspenseQuery, UseSuspenseQueryResult } from '@tanstack/react-query';

import { checkGraduation } from '@server/graduation/api';
import { CheckGraduationResponse } from '@server/graduation/response';

// 졸업 요건 확인
export const useCheckGraduation = (): UseSuspenseQueryResult<CheckGraduationResponse['result']> => {
  return useSuspenseQuery({
    queryKey: [`/check-graduation`],
    queryFn: () => checkGraduation(),
  });
};
