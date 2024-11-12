import type { Member } from '@/types/member';

export interface Study {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  isOpen: boolean;
  topic: string;
  profileImage?: string;
}

export type StudyFilter = 'all' | 'open' | 'closed';
export type StudyRole = '스터디장' | '스터디원';

// TODO: 추후에 profileImage input 구현 후 타입 변경
// export type StudyCreationRequestBody =
//  Pick<Study, 'name' | 'description' | 'isOpen' | 'topic' | 'profileImage'>;
export type StudyCreationRequestBody = Pick<Study, 'name' | 'description' | 'isOpen' | 'topic'>;
export type StudyCreationInputs = StudyCreationRequestBody;

export interface StudySearchRequestQuery {
  sort?: string;
  page?: number;
  size?: number;
  topic?: string;
  name?: string;
  isOpen?: boolean;
}

export interface StudySearchResponse {
  studies: Study[];
  hasNextPage: boolean;
  currentPage: number;
  maxPage: number;
  totalItemCount: number;
}

export type StudyInfoResponse = Study;

export type StudyMember = {
  member: Pick<Member, 'id' | 'nickname' | 'description' | 'profileImage'>;
  role: StudyRole;
  joined_at: Date;
};

export type StudyMembersResponse = StudyMember[];

export type StudyInfoWithMembers = Study & { members: StudyMember[] };
