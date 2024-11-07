import axios, { HttpStatusCode, isAxiosError } from 'axios';
import { tokenStorage } from '@/utils/storage';
import { reIssueAccessToken } from '@/api/auth';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const nextConfig = config;
  const token = tokenStorage.get();
  if (!token) {
    return Promise.reject(new Error('토큰이 존재하지 않습니다.'));
  }
  nextConfig.headers.Authorization = `Bearer ${token}`;
  return nextConfig;
});

axiosInstance.interceptors.response.use((config) => config, async (error) => {
  if (!isAxiosError(error)) return error;

  const { config, response } = error;
  if (!response || !config || response.status !== HttpStatusCode.Unauthorized
  ) return Promise.reject(error);
  try {
    const accessToken = await reIssueAccessToken();
    tokenStorage.set(accessToken);
  } catch (e) {
    tokenStorage.remove();
  }
  return axiosInstance(config);
});

export default axiosInstance;
