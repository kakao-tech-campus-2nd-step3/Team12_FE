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
    console.error('Failed to create study:', error);
    throw error;
  }
}
