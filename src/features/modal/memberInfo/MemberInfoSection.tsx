import Avatar from '@/components/avatar';
import Container from '@/components/container';
import { MemberInfo } from '@/mock/member';
import Text from '@/components/text';
import ProgressBar from '@/components/progressbar';
import colorTheme from '@/styles/colors';

export interface MemberInfoSectionProps {
  memberInfo: MemberInfo;
  rate: number;
}

export default function MemberInfoSection({ memberInfo, rate }: MemberInfoSectionProps) {
  return (
    <Container gap="20px" align="flex-end">
      <Avatar src={memberInfo.member.profileImage} size="large" bordered />
      <Container direction="column" width="250px" gap="5px" css={{ paddingRight: '5px'}}>
        <Container justify="space-between" align="flex-end" width="100%">
          <Text fontSize="24px" weight="bold">{memberInfo.member.nickname}</Text>
          <Text fontSize="13px" color={colorTheme.text.moderate}>
            가입일 : 
            {memberInfo.joined_at.split('T')[0]}
          </Text>
        </Container>
        <ProgressBar progress={rate} width="250px" description="출석률" />
      </Container>
    </Container>
  );
}
