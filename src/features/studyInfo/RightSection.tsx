import Container from '@components/container';
import { css } from '@emotion/react';
import Button from '@components/button';
import colorTheme from '@styles/colors';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import routePaths from '@/constants/routePaths';
import { StudyInfoContext } from '@/providers/StudyInfoProvider';

export default function RightSection() {
  const navigate = useNavigate();
  const study = useContext(StudyInfoContext);
  return (
    <Container
      height="100%"
      width="40%"
      direction="column"
      align="flex-start"
      padding="40px 40px"
      gap="6px"
    >
      <div css={css`
      font-size: 20px;
      color: ${colorTheme.primary.darken};
          font-weight: bold;
      `}
      >
        공지사항
      </div>
      <div css={css`
      font-size: 14px;
      `}
      >
        오늘은 10월 27일입니다.
      </div>
      <div css={css`
        font-size: 10px;
        color: #B5B5B5;
        text-decoration: underline;
        text-align: right;
        width: 100%;
        margin-top: -10px;
      `}
      >
        전체 공지사항
      </div>
      <hr css={hrStyle} />
      <div css={mainDescription}>2024.10.27</div>
      <div css={subDescription}>오늘은 스터디 출석일이에요!</div>
      <div css={buttonDivStyle}>
        <Button variant="primary">
          출석하기
        </Button>
        <Button
          onClick={() => { navigate(routePaths.STUDY_ATTENDANCE(study.study.id)); }}
        >
          출석 현황 확인하기
        </Button>
      </div>
      <hr css={hrStyle} />
      <div css={mainDescription}>해야하는 과제</div>
      <div css={subDescription}>애자일한 개발 완성</div>
      <div css={buttonDivStyle}>
        <Button variant="primary">과제 완료하기</Button>
        <Button>전체 과제 확인하기</Button>
      </div>
    </Container>
  );
}

const hrStyle = css`
    background-color: black;
    width: 100%;
    opacity: 20%;
`;

const mainDescription = css`
    font-size: 16px;
    font-weight: bold;
`;

const subDescription = css`
    font-size: 13px;
    margin-bottom: 5px;
`;

const buttonDivStyle = css`
    display: flex;
    gap: 8px;
`;
