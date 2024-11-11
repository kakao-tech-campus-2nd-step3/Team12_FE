import endpoints from '@constants/endpoints';
import { NoticeDetail, NoticesResponse } from '@/types/notice';
import axiosInstance from '@/utils/network';

interface GetNoticeListParams {
  sort?: string;
  page?: number;
  size?: number;
  studyId?: number;
}

interface CreateNoticeParams {
  studyId: number;
  title: string;
  content: string;
}

interface EditNoticeParams {
  noticeId: string;
  title: string;
  content: string;
}

export async function getNoticeList({
  sort = 'createdAt',
  page = 0,
  size = 10,
  studyId = 5,
}: GetNoticeListParams = {}): Promise<NoticesResponse> {
  const response = await axiosInstance.get<NoticesResponse>(endpoints.notices, {
    params: {
      sort,
      page,
      size,
      studyId,
    },
  });
  return response.data;
}

export async function getNoticeDetail(noticeId: string): Promise<NoticeDetail> {
  const response = await axiosInstance.get<NoticeDetail>(`${endpoints.notices}/${noticeId}`);
  return response.data;
}

export async function createNotice({
  studyId,
  title,
  content,
}: CreateNoticeParams): Promise<void> {
  const response = await axiosInstance.post<void>(`${endpoints.notices}?studyId=${studyId}`, {
    title,
    content,
  });
  return response.data;
}

export async function editNotice({
  noticeId,
  title,
  content,
}: EditNoticeParams): Promise<void> {
  await axiosInstance.put<void>(`${endpoints.notices}/${noticeId}`, {
    title,
    content,
  });
}

export async function deleteNotice(noticeId: string): Promise<void> {
  await axiosInstance.delete<void>(`${endpoints.notices}/${noticeId}`);
}
