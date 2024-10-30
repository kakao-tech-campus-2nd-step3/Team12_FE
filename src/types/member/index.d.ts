export interface Member {
  id: number;
  name: string;
  nickname: string;
  email: string;
  contact: string;
  description: string;
  profileImage?: string;
}

export type MemberRequestBody = Pick<Member, 'nickname' | 'email' | 'contact' | 'description'> & { agreeToTerms: boolean };
export type MemberInputs = MemberRequestBody;
