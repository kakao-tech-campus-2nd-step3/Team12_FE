import axios, { HttpStatusCode } from 'axios';
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

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (!axios.isAxiosError(error)) return Promise.reject(error);

    const originalRequest = error.config;
    const { response } = error;

    if (!response || !originalRequest || response.status !== HttpStatusCode.Unauthorized) {
      return Promise.reject(error);
    }

    try {
      if (originalRequest._retry) {
        tokenStorage.remove();
        window.alert('인증 유효기간이 만료되었습니다. 다시 로그인해주세요.');
        window.location.reload();
        return await Promise.reject(new Error('토큰 재발급 에러'));
      }

      originalRequest._retry = true;

      const reissueResponse = await reIssueAccessToken();
      const auth = reissueResponse.headers.Authorization;

      if (!auth || !auth.startsWith('Bearer ')) {
        tokenStorage.remove();
        window.alert('인증 유효기간이 만료되었습니다. 다시 로그인해주세요.');
        window.location.reload();
        return await Promise.reject(new Error('토큰 재발급 에러'));
      }

      const accessToken: string = auth.split(' ')[1];
      tokenStorage.set(accessToken);

      originalRequest.headers.Authorization = `Bearer ${accessToken}`;
      return await axiosInstance(originalRequest);
    } catch (e) {
      tokenStorage.remove();
      return Promise.reject(e);
    }
  },
);

export default axiosInstance;
