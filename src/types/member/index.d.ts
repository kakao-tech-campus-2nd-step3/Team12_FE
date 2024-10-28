export interface Member {
  nickname: string;
  email: string;
  phone: string;
  introduction: string;
  agreeToTerms: boolean;
}

export type MemberRequestBody = Pick<Member, 'nickname' | 'email' | 'phone' | 'introduction' | 'agreeToTerms'>;
export type MemberInputs = MemberRequestBody;
