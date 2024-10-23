export interface PersonalInfo {
  nickname: string;
  email: string;
  phone: string;
  introduction: string;
  agreeToTerms: boolean;
  }

export type PersonalInfoRequestBody = Pick<PersonalInfo, 'nickname' | 'email' | 'phone' | 'introduction' | 'agreeToTerms'>;
export type PersonalInfoInputs = PersonalInfoRequestBody;
