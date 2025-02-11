import { useSuspenseQuery } from '@tanstack/react-query';

import { getDepartmentList } from '@server/department/department';

export const useGetDepartmentList = () => {
  return useSuspenseQuery({
    queryKey: [`/department/avail-list`],
    queryFn: () => getDepartmentList(),
  });
};
