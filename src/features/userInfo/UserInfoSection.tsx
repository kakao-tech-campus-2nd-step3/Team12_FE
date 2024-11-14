import { DefaultPaddedContainer } from '@components/container/variants';
import Container from '@components/container';
import { Heading, Paragraph } from '@components/text';
import { MemberInfoContext } from '@providers/MemberInfoProvider.tsx';
import Avatar from '@components/avatar';
import { useContext } from 'react';
import Button from '@components/button';

export default function UserInfoSection() {
  const {
    isLoggedIn, memberInfo,
  } = useContext(MemberInfoContext);

  return (
    <DefaultPaddedContainer css={{ boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)' }}>
      <Container direction="column" padding="0 10px 50px 10px">
        <Container justify="flex-start" padding="15px">
          <Heading.H2 css={{ margin: '20px 20px' }}>회원 정보</Heading.H2>
        </Container>
        {isLoggedIn ? (
          <Container direction="column">
            <Container direction="column" gap="8px">
              <Avatar size="large" src={memberInfo?.profile_image} css={{ marginBottom: '10px' }} />
              <Paragraph weight="bold">이름</Paragraph>
              <Paragraph css={{ marginBottom: '10px' }}>{memberInfo?.name}</Paragraph>
              <Paragraph weight="bold">닉네임</Paragraph>
              <Paragraph css={{ marginBottom: '10px' }}>{memberInfo?.nickname}</Paragraph>
              <Paragraph weight="bold">이메일</Paragraph>
              <Paragraph css={{ marginBottom: '10px' }}>{memberInfo?.email}</Paragraph>
              <Paragraph weight="bold">연락처</Paragraph>
              <Paragraph css={{ marginBottom: '10px' }}>{memberInfo?.contact}</Paragraph>
              <Paragraph weight="bold">자기소개</Paragraph>
              <Paragraph>{memberInfo?.description}</Paragraph>
            </Container>
            <Container justify="flex-end">
              <Button>수정하기</Button>
            </Container>

          </Container>
        ) : (
          <Container direction="column" padding="20px">
            <Paragraph>로그인 상태가 아닙니다. 로그인 해주세요.</Paragraph>
          </Container>
        )}

      </Container>

    </DefaultPaddedContainer>

  );
}
