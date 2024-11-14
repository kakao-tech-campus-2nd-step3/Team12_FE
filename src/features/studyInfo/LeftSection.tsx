import Container from '@components/container';
import { css } from '@emotion/react';
import backgroundTest from '@assets/backgroundTest.svg';

export default function LeftSection() {
  return (
    <Container
      height="100%"
      width="25%"
      direction="column"
      padding="0 30px"
      align="flex-start"
      cssOverride={css`
          background-image: url(${backgroundTest});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
      `}
    >
      <div css={studyNameStyle}>프론트 스터디</div>
      <hr css={hrStyle} />
      <div css={studyDescriptionStyle}>
        스터디 주제: 프론트엔드
        React, Next.js 등 주요 프론트엔드 기술을 학습합니다.
        현재 모집 중
      </div>
    </Container>
  );
}

const studyNameStyle = css`
    color: #A2FFFC;
    font-size: 28px;
    font-weight: bold;
`;

const hrStyle = css`
    background-color: white;
    width: 30%;
    margin-left : 0;
`;

const studyDescriptionStyle = css`
    font-size: 15px;
    line-height: 18px;
    color: white;
    font-weight: lighter;
    margin-top: 20px;
`;
