import type { AttendanceInfo, RequireAttendanceDate } from '@/types/attendance';
import type { Member } from '@/types/member';
import type { Notice } from '@/types/notice';
import { Assignment } from '@/types/assignment';

export interface Study {
  id: number;
  name: string;
  description: string;
  created_at: Date;
  is_open: boolean;
  topic: string;
  profile_image: file;
}

export type StudyFilter = 'all' | 'open' | 'closed';
export type StudyRole = '스터디장' | '스터디원' | '미가입';

export interface StudyRoleResponse { role: StudyRole }

export interface ApplyJoinStudyInputs {
  message: string;
}

// TODO: 추후에 profileImage input 구현 후 타입 변경
// export type StudyCreationRequestBody =
//  Pick<Study, 'name' | 'description' | 'isOpen' | 'topic' | 'profileImage'>;
export type StudyCreationRequestBody = Pick<Study, 'name' | 'description' | 'is_open' | 'topic' | 'profile_image'>;
export type StudyCreationInputs = StudyCreationRequestBody;

export interface StudySearchRequestQuery {
  sort?: string;
  page?: number;
  size?: number;
  topic?: string;
  name?: string;
  isOpen?: boolean;
}

export type DetailedStudyInfo = Study & {
  study_leader_info: {
    nickname: string;
    profile_image: string;
    number_of_people: number;
  };
};

export interface StudySearchResponse {
  study_list: DetailedStudyInfo[];
  has_next_page: boolean;
  current_page: number;
  max_page: number;
  total_item_count: number;
}

export type StudyInfoResponse = Study;

export type StudyMember = {
  member: Pick<Member, 'id' | 'nickname' | 'description' | 'profile_image'>;
  role: StudyRole;
  joined_at: string;
};

export type StudyMembersResponse = StudyMember[];

export type ExtendedStudyInfo = Study &
{ members: StudyMember[] } &
{ study_attendance_info: AttendanceInfo } &
{ attendance_date_info: RequireAttendanceDate[] } &
{ notice?: Notice } &
{ assignment?: Assignment } &
{ my_role: string };
