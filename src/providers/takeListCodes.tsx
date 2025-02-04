import { useEffect } from 'react';
import { useGetTakeListCodes } from '@hooks/take/hook';

import { useTakeListCodeStore } from '@zustand/take/store';

const TakeListCodesProvider = () => {
  const { data } = useGetTakeListCodes();
  const setCodes = useTakeListCodeStore((state) => state.setCodes);

  useEffect(() => {
    if (data?.result?.takeList) {
      const extractedCodes = data.result.takeList.map((item) => item.code);
      setCodes(extractedCodes);
    }
  }, [data, setCodes]);

  return null; // 렌더링 필요 없음 (전역 상태 관리만 수행)
};

export default TakeListCodesProvider;
