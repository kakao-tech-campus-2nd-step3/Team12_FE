export interface Member {
  id: number;
  name: string;
  nickname: string;
  email: string;
  phone: string;
  introduction: string;
  agreeToTerms: boolean;
}

export type PersonalInfoInputs = Pick<Member, 'nickname' | 'email' | 'contact' | 'description'> & { agreeToTerms: boolean };

export type MyInfoResponse = Member;
