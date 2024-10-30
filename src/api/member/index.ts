import endpoints from '@constants/endpoints';
import { MyInfoResponse } from '@/types/member';
import axiosInstance from '@/utils/network';

export async function getMyInfo(): Promise<MyInfoResponse> {
  const response = await axiosInstance.get<MyInfoResponse>(endpoints.myInfo);
  return response.data;
}
