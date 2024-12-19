import { AxiosResponse, AxiosRequestConfig } from 'axios';

import guestAxiosInstance from '@axios/guest.axios.Instance';

// @ts-ignore
export const GuestPostAxiosInstance = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse> => {
  const response = await guestAxiosInstance.post(url, data, config);
  return response;
};

// @ts-ignore
export const GuestGetAxiosInstance = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse> => {
  const res = await guestAxiosInstance.get(url, config);
  return res;
};

// @ts-ignore
export const GuestPatchAxiosInstance = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse> => {
  const res = await guestAxiosInstance.patch(url, data, config);
  return res;
};

// @ts-ignore
export const GuestDeleteAxiosInstance = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse> => {
  const res = await guestAxiosInstance.delete(url, config);
  return res;
};
