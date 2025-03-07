import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = sessionStorage.getItem('accessToken');

    if (!accessToken) {
      // 토큰이 없을 경우 로그아웃 처리
      throw new Error('토큰 없음');
    }

    config.headers['Authorization'] = `Bearer ${accessToken}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
