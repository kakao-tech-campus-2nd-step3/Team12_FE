import { DefaultPaddedContainer } from '@components/container/variants';
import { useState } from 'react';
import { Heading, Paragraph } from '@components/text';
import Container from '@components/container';
import Grid from '@components/grid';
import MemberInfoItem from '@features/memberInfo/MemberInfoItem';
import Avatar from '@components/avatar';
import { Member } from '@/types/member';
import { mockMemberList } from '@/mock/member';

export default function MemberInfoSection() {
  const [members] = useState<Member[]>(mockMemberList);
  return (
    <DefaultPaddedContainer css={{ boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)' }}>
      <Container direction="column" padding="0 10px 50px 10px">
        <Container justify="flex-start" padding="15px">
          <Heading.H2 css={{ margin: '20px 20px' }}>스터디원 정보</Heading.H2>
        </Container>
        <Container direction="column" padding="10px 20px">
          <Container justify="space-between" padding="4px" cssOverride={{ borderBottom: '2px solid #EDEDED' }}>
            <Avatar size="small" css={{ visibility: 'hidden' }} />
            <Paragraph css={{ flex: 0.5, textAlign: 'center' }}>이름</Paragraph>
            <Paragraph css={{ flex: 1, textAlign: 'center' }}>연락처</Paragraph>
            <Paragraph css={{ flex: 3, textAlign: 'center' }}>자기소개</Paragraph>
            <Paragraph css={{ flex: 0.5, textAlign: 'center' }}>출석</Paragraph>
            <Paragraph css={{ flex: 0.5, textAlign: 'center' }}>과제</Paragraph>
            <Paragraph css={{ flex: 1.5, textAlign: 'center' }}>관리</Paragraph>
          </Container>
          <Grid
            columns={{
              initial: 1,
              xs: 1,
              md: 1,
              lg: 1,
            }}
          >
            {
                    members.map((member) => (
                      <MemberInfoItem
                        member={member}
                        key={`study-item-${member.nickname}`}
                      />
                    ))
                }
          </Grid>
        </Container>
      </Container>

    </DefaultPaddedContainer>
  );
}
