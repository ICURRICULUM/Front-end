import { AxiosResponse, AxiosRequestConfig } from 'axios';

import axiosInstance from '@axios/axios.Instance';

export const PostAxiosInstance = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  const response = await axiosInstance.post(url, data, config);
  return response;
};

export const GetAxiosInstance = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  const res = await axiosInstance.get(url, config);
  return res;
};

export const PatchAxiosInstance = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  const res = await axiosInstance.patch(url, data, config);
  return res;
};

export const DeleteAxiosInstance = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  const res = await axiosInstance.delete(url, config);
  return res;
};
