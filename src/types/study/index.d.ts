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
  is_open?: boolean;
}

export interface StudySearchResponse {
  study_list: Study[];
  has_next_page: boolean;
  current_page: number;
  max_page: number;
  total_item_count: number;
}
