export interface Assignment {
  id: number;
  title: string;
  content: string;
  created_at: string;
  deadline: string;
}

export interface AssignList {
  assignments: Assignment[];
  has_next_page: boolean;
  current_page: number;
  max_page: number;
  total_item_count: number;
}

export type AssignDetail = Notice;
export type AssignsResponse = AssignList;
