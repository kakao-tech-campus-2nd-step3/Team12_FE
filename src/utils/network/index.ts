import axios from 'axios';
import { isAuthRequired } from '@constants/endpoints';
import { tokenStorage } from '@/utils/storage';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const { url } = config;
  if (!isAuthRequired(url)) return config;
  const nextConfig = config;
  const token = tokenStorage.get();
  if (!token) {
    return Promise.reject(new Error('토큰이 존재하지 않습니다.'));
  }
  nextConfig.headers.Authorization = `Bearer ${token}`;
  return nextConfig;
});

export default axiosInstance;
