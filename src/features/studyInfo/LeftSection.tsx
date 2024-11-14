import Container from '@components/container';
import { css } from '@emotion/react';
import { useContext } from 'react';
import { StudyInfoContext } from '@providers/StudyInfoProvider';

export default function LeftSection() {
  const { study } = useContext(StudyInfoContext);
  return (
    <Container
      height="100%"
      width="25%"
      direction="column"
      align="flex-start"
      cssOverride={css`
        background-image: url(${study.profile_image});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
      `}
    >
      <div css={backgroundFilterStyle} />
      <Container
        direction="column"
        padding="0 30px"
        align="flex-end"
        css={{
          zIndex: 1,
        }}
      >
        <div css={studyNameStyle}>{study.name}</div>
        <hr css={hrStyle} />
        <div css={studyDescriptionStyle}>
          #
          {study.topic}
        </div>
        <div css={studyDescriptionStyle}>
          {study.description}
        </div>
        <div css={studyDescriptionStyle}>
          {study.is_open ? '모집 중' : '모집 마감'}
        </div>
      </Container>
    </Container>
  );
}

const backgroundFilterStyle = css`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
`;

const studyNameStyle = css`
  color: #A2FFFC;
  font-size: 28px;
  font-weight: bold;
`;

const hrStyle = css`
  background-color: white;
  width: 30%;
  margin-right: 0;
  margin-bottom: 18px;
`;

const studyDescriptionStyle = css`
  font-size: 15px;
  line-height: 18px;
  color: white;
  font-weight: lighter;
`;
