import axios, { AxiosInstance } from 'axios';

const guestAxiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  // withCredentials: true,
});

export default guestAxiosInstance;
