import endpoints from '@constants/endpoints';
import {
  EditMemberRequestBody,
  MyInfoResponse,
  PersonalInfoInputs,
} from '@/types/member';
import axiosInstance from '@/utils/network';

export async function getMyInfo(): Promise<MyInfoResponse> {
  const response = await axiosInstance.get<MyInfoResponse>(endpoints.myInfo);
  return response.data;
}

export async function submitPersonalInfo(input: PersonalInfoInputs) {
  await axiosInstance.post(endpoints.submitPersonalInfo, input);
}

export async function editMyInfo(data: EditMemberRequestBody): Promise<MyInfoResponse> {
  const response = await axiosInstance.put<MyInfoResponse>(endpoints.myInfo, data);
  return response.data;
}
