import Container from '@components/container';
import Tag from '@components/tag';
import tagIcon from '@assets/icons/tag.svg';
import { Heading, Paragraph } from '@components/text';
import { useStudyItemStyles } from '@features/main/studyList/StudyList.styles';
import Avatar from '@components/avatar';
import { css } from '@emotion/react';
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
  const { containerStyle, dividerStyle } = useStudyItemStyles();

  return (
    <Container direction="column" height="100%" padding="11px 10px" cssOverride={containerStyle}>
      <Container justify="flex-end">
        <Tag icon={tagIcon} variant={study.isOpen ? 'primary' : 'default'}>
          {study.isOpen ? '모집중' : '모집마감'}
        </Tag>
      </Container>
      <Container direction="column" align="flex-start" padding="15px">
        <Heading.H4 weight="bold">{study.name}</Heading.H4>
        <Container padding="8px 0 25px 0" justify="flex-start">
          <Paragraph.Small>{study.description}</Paragraph.Small>
        </Container>
        <hr css={dividerStyle} />
        <Container padding="12px 0 0 0">
          <Container justify="flex-start" gap="13px" cssOverride={css`flex-grow: 1`}>
            <Avatar size="small" />
            <Paragraph.Small>스터디장</Paragraph.Small>
          </Container>
          <Container justify="flex-start" gap="4px" cssOverride={css`flex-grow: 0`} width="auto">
            <UserIcon />
            4
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

export default StudyItem;
