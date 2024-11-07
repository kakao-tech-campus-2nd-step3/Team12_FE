import { DefaultPaddedContainer } from '@components/container/variants';
import { useState } from 'react';
import Grid from '@components/grid';
import Container from '@components/container';
import MemberItem from '@features/modal/studyMain/MemberItem';
import { InviteBtn } from '@features/modal/studyMain/InviteBtn';
import { mockMemberList } from '@/mock/member';
import { Member } from '@/types/member';

function MemberListSection() {
  const [members] = useState<Member[]>(mockMemberList);

  return (
    <DefaultPaddedContainer>
      <Container padding="25px 0 0 0">
        <Grid
          columns={{
            initial: 1,
            xs: 2,
            md: 4,
            lg: 5,
          }}
          gap={19}
        >
          {
                        members.map((member) => (
                          <MemberItem member={member} key={`study-item-${member.nickname}`} />
                        ))
                    }
          <InviteBtn />
        </Grid>
      </Container>
    </DefaultPaddedContainer>
  );
}

export default MemberListSection;
