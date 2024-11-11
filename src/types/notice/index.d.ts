export interface Notice {
  id: number;
  title: string;
  nickName: string;
  content: string;
  createdAt: string;
}

export interface NoticesList {
  notices: Notice[];
  hasNextPage: boolean;
  currentPage: number;
  maxPage: number;
  totalItemCount: number;
}

export type NoticeDetail = Notice;
export type NoticesResponse = NoticesList;
