import { Paragraph } from '@components/text';
import { css, CSSObject, useTheme } from '@emotion/react';
import Container from '@components/container';
import Tag from '@components/tag';
import { Link } from 'react-router-dom';
import routePaths from '@constants/routePaths';
import { Study } from '@/types/study';

interface MyStudyListItemProps {
  study: Study;
}

export default function MyStudyListItem({ study }: MyStudyListItemProps) {
  const theme = useTheme();
  const containerStyle = css`
    border-radius: ${theme.corners.big};
    border: ${theme.colors.border.prominent} 1px solid;
    max-height: 290px;
    background-color: ${theme.colors.background.main};
    transition-duration: 0.2s;
    cursor: pointer;
    &:hover {
      transform: translateY(-5px);
    }
  `;

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
    <Link to={routePaths.STUDY_INFO(study.id)} css={{ textDecoration: 'none', color: 'black' }}>
      <Container
        direction="column"
        width="100%"
        align="flex-start"
        cssOverride={css`
        ${containerStyle};
        position: relative;
        box-sizing: border-box;
      `}
      >
        <Container
          height="180px"
          width="100%"
          css={{
            backgroundImage: study.profile_image && `url(${study.profile_image})`,
            backgroundSize: 'cover',
            borderRadius: `${theme.corners.big} ${theme.corners.big} 0 0`,
          }}
        />

        <Container
          justify="space-between"
          align="flex-start"
          cssOverride={{ marginTop: '0 50px' }}
          padding="20px 20px 10px 20px"
        >
          <Container
            padding="8px 0"
            align="flex-start"
            width="120px"
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
          padding="0 20px 20px 20px"
          cssOverride={doubleEllipsis}
        >
          <Paragraph variant="small" css={doubleEllipsis}>{study.description}</Paragraph>
        </Container>
      </Container>
    </Link>
  );
}
