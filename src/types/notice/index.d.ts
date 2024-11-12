export interface Notice {
  id: number;
  title: string;
  nickname: string;
  content: string;
  created_at: string;
}

export interface NoticesList {
  notices: Notice[];
  has_next_page: boolean;
  current_page: number;
  max_page: number;
  total_item_count: number;
}

export type NoticeDetail = Notice;
export type NoticesResponse = NoticesList;
