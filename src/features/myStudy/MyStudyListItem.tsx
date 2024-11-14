import { Paragraph } from '@components/text';
import { css, CSSObject, useTheme } from '@emotion/react';
import Container from '@components/container';
import Tag from '@components/tag';
import { useStudyItemStyles } from '@features/main/studyList/StudyList.styles';
import { Study } from '@/types/study';

interface MyStudyListItemProps {
  study: Study;
}

export default function MyStudyListItem({ study }: MyStudyListItemProps) {
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
    <Container
      direction="column"
      height="100%"
      align="flex-start"
      padding="40% 20px 0 20px"
      cssOverride={css`
        ${containerStyle} 
        position: relative;
      `}
    >
      {study.profile_image
        ? (
          <img
            src={study.profile_image}
            alt="profile_image"
            css={css`
                    border-radius: ${theme.corners.big} ${theme.corners.big} 0 0;
                    width: 100%;
                    height: 40%;
                    object-fit: cover;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                `}
          />
        )
        : (
          <Container
            width="100%"
            height="40%"
            cssOverride={css`
                background-color: #ccc;
                border-radius: ${theme.corners.big} ${theme.corners.big} 0 0;
                object-fit: cover;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
            `}
          />
        )}

      <Container justify="space-between" align="flex-start" cssOverride={{ marginTop: '0 50px' }}>

        <Container
          padding="8px 0"
          align="flex-start"
          width="auto"
          direction="column"
          gap="12px"
          cssOverride={singleEllipsis}
        >
          <Paragraph
            variant="large"
            weight="bold"
            css={{ ...singleEllipsis, width: '100%' }}
          >
            {study.name}
          </Paragraph>
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
      <Container
        justify="flex-start"
        align="flex-start"
        height="56px"
        padding="8px 0 0 0"
        cssOverride={doubleEllipsis}
      >
        <Paragraph variant="small" css={doubleEllipsis}>{study.description}</Paragraph>
      </Container>
    </Container>
  );
}
