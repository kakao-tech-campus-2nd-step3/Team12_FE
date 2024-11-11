import endpoints from '@constants/endpoints';
import { StudySearchRequestQuery, StudySearchResponse } from '@/types/study';
import axiosInstance from '@/utils/network';

export async function searchStudies(requestQuery: StudySearchRequestQuery) {
  const response = await axiosInstance.get<StudySearchResponse>(endpoints.searchStudy, {
    params: requestQuery,
  });
  return response.data;
}

export async function createStudy(data: FormData) {
  try {
    const response = await axiosInstance.post(endpoints.createStudy, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getStudy(studyId: number) {
  try {
    const response = await axiosInstance.get(endpoints.getStudy(studyId));
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function respondToInvitation(studyId: number, token: string) {
  try {
    const response = await axiosInstance.post(endpoints.inviteToStudy(studyId), {
      token: token,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
