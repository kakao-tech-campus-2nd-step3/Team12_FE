export interface RankedStudyInfo {
  rank: number;
  name: string;
  totalAssignments: number;
  completedAssignments: number;
  totalAttendanceDates: number;
  attendedDates: number;
  profileImage?: string;
}
export type StudyRankingResponse = RankedStudyInfo[];
