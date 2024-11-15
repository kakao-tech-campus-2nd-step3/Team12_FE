import endpoints from '@constants/endpoints';
import type {
  Study,
  StudyInfoResponse,
  StudyMembersResponse,
  StudyRoleResponse,
  StudySearchRequestQuery,
  StudySearchResponse,
} from '@/types/study';
import axiosInstance from '@/utils/network';
import { StudyRankingResponse } from '@/types/ranking';

interface GetRankingListParams {
  sort?: string;
  page?: number;
  size?: number;
}

export async function searchStudies(requestQuery: StudySearchRequestQuery) {
  const response = await axiosInstance.get<StudySearchResponse>(endpoints.searchStudy, {
    params: requestQuery,
  });
  return response.data;
}

export async function createStudy(data: FormData) {
  const response = await axiosInstance.post(endpoints.createStudy, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
}

export async function respondToInvitation(studyId: number, token: string) {
  const response = await axiosInstance.post(endpoints.inviteToStudy(studyId), {
    token,
  });
  return response.data;
}

export async function getStudyInfo(studyId: number) {
  const response = await axiosInstance.get<StudyInfoResponse>(endpoints.studyInfo(studyId));
  return response.data;
}

export async function editStudyInfo(studyId: number, data: {
  name: string;
  description: string;
  is_open: boolean;
  topic: string;
}) {
  const response = await axiosInstance.put<StudyInfoResponse>(endpoints.studyInfo(studyId), data);
  return response.data;
}

export async function editStudyProfile(studyId: number, profile_image: FormData) {
  await axiosInstance.put<void>(
    endpoints.editStudyProfile(studyId),
    profile_image,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
}

export async function applyStudyJoin(studyId: number, message: string) {
  await axiosInstance.post(endpoints.applyStudyJoin(studyId), {
    message,
  });
}

export async function getStudyMembers(studyId: number) {
  const response = await axiosInstance.get<StudyMembersResponse>(endpoints.studyMembers(studyId));
  return response.data;
}

export async function getMyStudies() {
  const response = await axiosInstance.get<Study[]>(`${endpoints.myInfo}/studies`);
  return response.data;
}

export async function getMyRole(studyId: number) {
  const response = await axiosInstance.get<StudyRoleResponse>(endpoints.studyRole(studyId));
  return response.data.role;
}

export async function getRankingList({
  sort = 'createdAt',
  page = 0,
  size = 8,
}: GetRankingListParams = {}): Promise<StudyRankingResponse> {
  const response = await axiosInstance.get<StudyRankingResponse>(endpoints.rankings, {
    params: {
      sort,
      page,
      size,
    },
  });
  return response.data;
}
