import { MemberInfo } from '@/mock/member';

export interface MemberInfoSectionProps {
  memberInfo: MemberInfo;
}

export default function MemberInfoSection({memberInfo}: MemberInfoSectionProps) {
  return (
    <div>
      <div>{memberInfo.member.nickname}</div>
      <div>{memberInfo.member.profileImage}</div>
      <div>{memberInfo.joined_at}</div>
    </div>
  );
}