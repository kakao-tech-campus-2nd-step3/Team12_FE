import endpoints from '@constants/endpoints';
import { StudySearchRequestQuery, StudySearchResponse } from '@/types/study';
import axiosInstance from '@/utils/network';

export async function searchStudies(requestQuery: StudySearchRequestQuery) {
  const response = await axiosInstance.get<StudySearchResponse>(endpoints.searchStudy, {
    params: requestQuery,
  });
  return response.data;
}
