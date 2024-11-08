export interface Study {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  isOpen: boolean;
  topic: string;
  profileImage: file;
}

export type StudyFilter = 'all' | 'open' | 'closed';

// TODO: 추후에 profileImage input 구현 후 타입 변경
// export type StudyCreationRequestBody =
//  Pick<Study, 'name' | 'description' | 'isOpen' | 'topic' | 'profileImage'>;
export type StudyCreationRequestBody = Pick<Study, 'name' | 'description' | 'isOpen' | 'topic' | 'profileImage'>;
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
  studyList: Study[];
  hasNextPage: boolean;
  currentPage: number;
  maxPage: number;
  totalItemCount: number;
}
