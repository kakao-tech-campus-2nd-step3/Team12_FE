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

export interface File {
  id: number;
  file_name: string;
  file_url: string;
}

export interface SubmittedAssign {
  file: File;
  member_id: number;
  nickname: string;
}

export interface SubmittedAssignList {
  assignment_files: SubmittedAssign[];
  has_next_page: boolean;
  current_page: number;
  max_page: number;
  total_item_count: number;
}

export type AssignDetail = Assignment;
export type AssignsResponse = AssignList;
export type SubmittedAssignResponse = SubmittedAssignList;
