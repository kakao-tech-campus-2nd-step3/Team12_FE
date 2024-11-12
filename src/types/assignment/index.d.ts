export interface Assignment {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  deadline: string;
}

export interface AssignList {
  assignments: Assignment[];
  hasNextPage: boolean;
  currentPage: number;
  maxPage: number;
  totalItemCount: number;
}

export type AssignDetail = Notice;
export type AssignsResponse = AssignList;
