export interface Member {
  id: number;
  name: string;
  nickname: string;
  email: string;
  contact: string;
  description: string;
  profileImage?: string;
}

export type PersonalInfoInputs = Pick<Member, 'nickname' | 'email' | 'contact' | 'description'> & { agreeToTerms: boolean };

export type MyInfoResponse = Member;

export type EditMemberRequestBody = Omit<Partial<Member>, 'id' | 'email'>;
