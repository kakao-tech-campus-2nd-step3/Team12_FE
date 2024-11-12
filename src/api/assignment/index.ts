import endpoints from '@constants/endpoints';
import axiosInstance from '@/utils/network';
import { AssignDetail, AssignsResponse } from '@/types/assignment';

interface GetAssignListParams {
  sort?: string;
  page?: number;
  size?: number;
  studyId?: number;
}

interface CreateAssignParams {
  studyId: number;
  title: string;
  content: string;
  deadline: string;
}

interface EditAssignParams {
  assignId: string;
  title: string;
  content: string;
  deadline: string;
}

export async function getAssignList({
  sort = 'createdAt',
  page = 0,
  size = 10,
  studyId = 11,
}: GetAssignListParams = {}): Promise<AssignsResponse> {
  const response = await axiosInstance.get<AssignsResponse>(endpoints.assignments, {
    params: {
      sort,
      page,
      size,
      studyId,
    },
  });
  return response.data;
}

export async function getAssignDetail(assignId: string): Promise<AssignDetail> {
  const response = await axiosInstance.get<AssignDetail>(`${endpoints.assignments}/${assignId}`);
  return response.data;
}

export async function createAssign({
  studyId,
  title,
  content,
  deadline,
}: CreateAssignParams): Promise<void> {
  const response = await axiosInstance.post<void>(`${endpoints.assignments}?studyId=${studyId}`, {
    title,
    content,
    deadline,
  });
  return response.data;
}

export async function editAssign({
  assignId,
  title,
  content,
  deadline,
}: EditAssignParams): Promise<void> {
  await axiosInstance.put<void>(`${endpoints.assignments}/${assignId}`, {
    title,
    content,
    deadline,
  });
}

export async function deleteAssign(assignId: string): Promise<void> {
  await axiosInstance.delete<void>(`${endpoints.assignments}/${assignId}`);
}
