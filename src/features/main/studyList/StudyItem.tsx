import Container from '@components/container';
import Tag from '@components/tag';
import { Paragraph } from '@components/text';
import { useStudyItemStyles } from '@features/main/studyList/StudyList.styles';
import Avatar from '@components/avatar';
import { CSSObject, useTheme } from '@emotion/react';
import UserIcon from '@assets/icons/user.svg?react';
import { Study } from '@/types/study';

interface StudyItemProps {
  study: Study;
}

function StudyItem(
  {
    study,
  }: StudyItemProps,
) {
  const { containerStyle } = useStudyItemStyles();
  const theme = useTheme();

  const singleEllipsis: CSSObject = {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  };

  const doubleEllipsis: CSSObject = {
    ...singleEllipsis,
    whiteSpace: 'normal',
    wordBreak: 'break-all',
    lineHeight: '16px',
  };

  return (
    <Container direction="column" height="100%" align="flex-start" padding="20px 20px 20px 26px" cssOverride={containerStyle}>
      <Container justify="space-between" align="flex-start">
        <Container
          padding="8px 0"
          align="flex-start"
          width="150px"
          direction="column"
          gap="8px"
          cssOverride={singleEllipsis}
        >
          <Paragraph variant="large" weight="bold" css={{ ...singleEllipsis, width: '100%' }}>{study.name}</Paragraph>
          <Paragraph variant="small" color={theme.colors.text.subtle}>
            #
            {study.topic}
          </Paragraph>
        </Container>
        <Tag variant={study.is_open ? 'primary' : 'default'}>
          <Paragraph variant="small">
            {study.is_open ? '모집중' : '마감'}
          </Paragraph>
        </Tag>
      </Container>
      <Container justify="flex-start" align="flex-start" height="56px" padding="8px 0 0 0" cssOverride={doubleEllipsis}>
        <Paragraph variant="small" css={doubleEllipsis}>{study.description}</Paragraph>
      </Container>
      <Container padding="12px 0 0 0">
        <Container justify="flex-start" gap="13px" cssOverride={{ flexGrow: 1 }}>
          <Avatar size="small" />
          <Paragraph variant="small">스터디장</Paragraph>
        </Container>
        <Container
          justify="flex-start"
          padding="0 6px 0 0"
          gap="4px"
          cssOverride={{ flexGrow: 0, color: theme.colors.primary.darken }}
          width="auto"
        >
          <UserIcon stroke={theme.colors.primary.darken} />
          4
        </Container>
      </Container>
    </Container>
  );
}

export default StudyItem;
