export interface Study {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  isOpen: boolean;
  topic: string;
  // profileImage?: string;
}

export type StudyFilter = 'all' | 'open' | 'closed';

// TODO: 추후에 profileImage input 구현 후 타입 변경
// export type StudyCreationRequestBody =
//  Pick<Study, 'name' | 'description' | 'isOpen' | 'topic' | 'profileImage'>;
export type StudyCreationRequestBody = Pick<Study, 'name' | 'description' | 'isOpen' | 'topic'>;
export type StudyCreationInputs = StudyCreationRequestBody;
