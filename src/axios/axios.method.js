import axiosInstance from "@axios/content/axios.Instance";

export const PostAxiosInstance = async (url, data, config) => {
  const response = await axiosInstance.post(url, data, config);
  return response;
};

export const GetAxiosInstance = async (url, config) => {
  const res = await axiosInstance.get(url, config);
  return res;
};

export const PatchAxiosInstance = async (url, data, config) => {
  const res = await axiosInstance.patch(url, data, config);
  return res;
};

export const DeleteAxiosInstance = async (url, config) => {
  const res = await axiosInstance.delete(url, config);
  return res;
};
