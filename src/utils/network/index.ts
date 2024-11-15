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
    return nextConfig;
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
    const reissueResponse = await reIssueAccessToken();
    const auth = reissueResponse.headers.Authorization;
    if (!auth || !auth.startsWith('Bearer ')) return await Promise.reject(error);
    const accessToken: string = auth.split(' ')[1];
    tokenStorage.set(accessToken);
  } catch (e) {
    tokenStorage.remove();
  }
  return axiosInstance(config);
});

export default axiosInstance;
