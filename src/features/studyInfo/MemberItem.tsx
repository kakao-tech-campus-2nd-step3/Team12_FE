import Container from '@components/container';
import { Paragraph } from '@components/text';
import Avatar from '@components/avatar';
import { css } from '@emotion/react';
import { useStudyItemStyles } from '@features/main/studyList/StudyList.styles';
import { StudyMember } from '@/types/study';

interface MemberItemProps {
  studyMember: StudyMember;
}

function MemberItem(
  {
    studyMember,
  }: MemberItemProps,
) {
  const { containerStyle } = useStudyItemStyles();
  const memberInfo = studyMember.member;

  return (
    <Container direction="column" height="100%" align="flex-start" gap="20px" padding="20px 20px 20px 26px" cssOverride={containerStyle}>
      <Container justify="flex-start">
        <Avatar bordered={true} src={memberInfo.profile_image} css={css`width: 40px; height: 40px;`} />
        <Paragraph variant="large" css={{ marginLeft: '10px' }}>{memberInfo.nickname}</Paragraph>
      </Container>
      <Container justify="flex-start">
        <Paragraph variant="medium" weight="regular" css={{ lineHeight: '20px' }}>{memberInfo.description}</Paragraph>
      </Container>
      <Container justify="flex-end" gap="10px">
        <Paragraph variant="small" color="#C8C8C8" css={css`text-decoration: underline;`}>출석 조회</Paragraph>
        <Paragraph variant="small" color="#C8C8C8" css={css`text-decoration: underline;`}>내보내기</Paragraph>
      </Container>
    </Container>
  );
}

export default MemberItem;
