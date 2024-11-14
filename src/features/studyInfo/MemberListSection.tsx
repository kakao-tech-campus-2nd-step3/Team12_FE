import { DefaultPaddedContainer } from '@components/container/variants';
import { useContext } from 'react';
import Grid from '@components/grid';
import Container from '@components/container';
import MemberItem from '@features/studyInfo/MemberItem';
import { InviteBtn } from '@features/studyInfo/InviteBtn';
import Spacing from '@components/spacing';
import { StudyInfoContext } from '@providers/StudyInfoProvider';
import { Heading } from '@components/text';

function MemberListSection() {
  const { study } = useContext(StudyInfoContext);

  return (
    <DefaultPaddedContainer>
      <Container padding="25px 0 0 0" direction="column" align="flex-start" gap="19px">
        <Heading.H2 weight="bold">멤버 목록</Heading.H2>
        <Grid
          columns={{
            initial: 1,
            xs: 2,
            md: 4,
          }}
          gap={19}
        >
          {
            study.members.map((studyMember) => (
              <MemberItem studyMember={studyMember} key={`study-member-item-${studyMember.member.nickname}-${studyMember.member.id}`} />
            ))
          }
          <InviteBtn />
        </Grid>
      </Container>
      <Spacing height={20} />
    </DefaultPaddedContainer>
  );
}

export default MemberListSection;
