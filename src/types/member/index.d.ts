export interface Member {
  id: number;
  name: string;
  nickname: string;
  email: string;
  contact: string;
  description: string;
  profile_image?: string;
}

export type PersonalInfoInputs = Pick<Member, 'nickname' | 'email' | 'contact' | 'description' | 'name'> & { agree_to_terms?: boolean };

export type MyInfoResponse = Member;

export type EditMemberRequestBody = Omit<Partial<Member>, 'id' | 'email'>;
