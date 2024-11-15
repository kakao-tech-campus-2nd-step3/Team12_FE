export interface StudyRankInfo {
  name: string;
  total_assignment_count: number;
  completed_assignment_count: number;
  total_attendance_date_count: number;
  attended_date_count: number;
}

export interface RankedStudyInfo {
  rank: number;
  study_rank_info: StudyRankInfo;
}

export interface RankedStudyList {
  study_rank_list: RankedStudyInfo[];
  has_next_page: boolean;
  current_page: number;
  max_page: number;
  total_item_count: number;
}
export type StudyRankingResponse = RankedStudyList;
