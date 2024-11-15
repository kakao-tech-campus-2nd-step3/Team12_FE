import Container from '@components/container';
import { Paragraph } from '@components/text';
import Avatar from '@components/avatar';
import { css, useTheme } from '@emotion/react';
import { useStudyItemStyles } from '@features/main/studyList/StudyList.styles';
import { useState } from 'react';
import { StudyMember } from '@/types/study';
import AttendanceInfoModal from '../modal/memberInfo/AttendanceInfoModal';

interface MemberItemProps {
  studyMember: StudyMember;
}

function MemberItem(
  {
    studyMember,
  }: MemberItemProps,
) {
  const { containerStyle } = useStudyItemStyles();
  const theme = useTheme();
  const containerStyleOverride = css`
    cursor: default;
  `;
  const textStyle = css`
    text-decoration: underline;
    cursor: pointer;
  `;
  const memberInfo = studyMember.member;
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Container direction="column" height="100%" align="flex-start" gap="20px" padding="20px 20px 20px 26px" css={css(containerStyle, containerStyleOverride)}>
      <Container justify="flex-start">
        <Avatar bordered={true} src={memberInfo.profile_image} css={css`width: 40px; height: 40px;`} />
        <Paragraph variant="large" css={{ marginLeft: '10px' }}>{memberInfo.nickname}</Paragraph>
        <Paragraph variant="small" css={{ marginLeft: '10px' }} color={theme.colors.primary.darken}>{studyMember.role}</Paragraph>
      </Container>
      <Container justify="flex-start">
        <Paragraph variant="medium" weight="regular" css={{ lineHeight: '20px' }}>{memberInfo.description}</Paragraph>
      </Container>
      <Container justify="flex-end" gap="10px">
        <Paragraph variant="small" color={theme.colors.text.moderate} css={textStyle} onClick={() => { setOpen(true); }}>출석 정보</Paragraph>
        {open && <AttendanceInfoModal open={open} onClose={onClose} memberInfo={studyMember} />}
      </Container>
    </Container>
  );
}

export default MemberItem;
