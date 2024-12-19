import { CheckGraduationResponse } from './response';

import { PostAxiosInstance } from '@axios/axios.method';

export const checkGraduation = async (): Promise<CheckGraduationResponse> => {
  const response = await PostAxiosInstance<CheckGraduationResponse>(`/check-graduation`, null);

  return response.data;
};
