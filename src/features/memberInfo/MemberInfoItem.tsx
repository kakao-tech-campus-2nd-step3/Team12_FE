import Container from '@components/container';
import { Paragraph } from '@components/text';
import Avatar from '@components/avatar';
import { CSSObject } from '@emotion/react';
import Button from '@components/button';
import { Member } from '@/types/member';

interface MemberItemProps {
  member: Member;
}

function MemberInfoItem(
  {
    member,
  }: MemberItemProps,
) {
  const paragraphStyle: CSSObject = {
    flex: 0.5,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    textAlign: 'center',
    padding: '10px 0',
  };

  const btnStyle: CSSObject = {
    padding: '8px 10px',
    borderRadius: '7px',

  };

  const removeButtonStyle: CSSObject = {
    border: 'none',
    background: 'none',
    textDecoration: 'underline',
    color: '#FF5F5F',
  };

  return (
    <Container justify="space-between" padding="4px" cssOverride={{ borderBottom: '1px solid #EDEDED' }}>
      <Avatar size="small" />
      <Paragraph css={{ ...paragraphStyle, flex: 0.5 }}>{member.nickname}</Paragraph>
      <Paragraph css={{ ...paragraphStyle, flex: 1 }}>{member.contact}</Paragraph>
      <Paragraph css={{ ...paragraphStyle, flex: 3 }}>{member.description}</Paragraph>
      <Paragraph css={{ ...paragraphStyle, flex: 0.5 }}>출석</Paragraph>
      <Paragraph css={{ ...paragraphStyle, flex: 0.5 }}>과제</Paragraph>
      <Container gap="10px" css={{ flex: 1.5 }}>
        <Button variant="primary" css={btnStyle}>출석 정보</Button>
        <Button variant="primary" css={btnStyle}>과제 정보</Button>
        <button type="button" css={removeButtonStyle}>퇴출</button>
      </Container>
    </Container>
  );
}

export default MemberInfoItem;
