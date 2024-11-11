import endpoints from '@/constants/endpoints';
import { InviteToStudyResponse } from '@/types/invite';
import axiosInstance from '@/utils/network';

export async function inviteToStudy(studyId: number): Promise<InviteToStudyResponse> {
  const response = await axiosInstance.get<InviteToStudyResponse>(endpoints.inviteToStudy(studyId));
  return response.data;
}
