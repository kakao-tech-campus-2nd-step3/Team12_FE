import endpoints from '@constants/endpoints';
import axiosInstance from '@/utils/network';
import { AssignDetail, AssignsResponse, SubmittedAssignResponse } from '@/types/assignment';

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

interface SubmitAssignParams {
  assignId: string;
  file: File;
}

interface GetSubmittedAssignListParams {
  sort?: string;
  page?: number;
  size?: number;
  assignId?: number;
}

export async function getAssignList({
  sort = 'createdAt',
  page = 0,
  size = 10,
  studyId,
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

export async function submitAssign({ assignId, file }: SubmitAssignParams): Promise<void> {
  const formData = new FormData();
  formData.append('file', file);

  await axiosInstance.post<void>(`${endpoints.assignments}/files/${assignId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export async function getSubmittedAssignList({
  sort = 'createdAt',
  page = 0,
  size = 10,
  assignId,
}: GetSubmittedAssignListParams = {}): Promise<SubmittedAssignResponse> {
  const response = await axiosInstance.get<SubmittedAssignResponse>(`${endpoints.assignments}/files/${assignId}`, {
    params: {
      sort,
      page,
      size,
    },
  });
  return response.data;
}

export async function downloadAssign(fileId: number): Promise<void> {
  const response = await axiosInstance.get(`${endpoints.assignments}/files/download/${fileId}`, {
    responseType: 'blob',
  });

  const contentDisposition = response.headers['content-disposition'];

  let fileName = 'downloaded_file';
  if (contentDisposition) {
    const matches = contentDisposition.match(/filename="([^"]+)"/);
    if (matches?.[1]) {
      fileName = decodeURIComponent(matches[1]);
    }
  }

  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  link.remove();
}
