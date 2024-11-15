import Container from '@components/container';
import { css } from '@emotion/react';
import Button from '@components/button';
import colorTheme from '@styles/colors';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import routePaths from '@/constants/routePaths';
import { StudyInfoContext } from '@/providers/StudyInfoProvider';
import EnterCodeModal from '../modal/attendance/EnterCodeModal';
import { AttendanceInfoContextProvider } from '@/providers/AttendanceInfoProvider';

export default function RightSection() {
  const navigate = useNavigate();
  const { study } = useContext(StudyInfoContext);
  const [currentDate] = useState(new Date());
  const [isAttendDate, setIsAttendDate] = useState(false);
  const [isAttendTime, setIsAttendTime] = useState(false);
  const [open, setOpen] = useState(false);
  const [dateId, setDateId] = useState<number | undefined>(undefined);
  const [deadline, setDeadline] = useState<string | undefined>(undefined);

  const onClose = () => {
    setOpen(false);
  };

  const moveStudyPage = () => {
    navigate(routePaths.STUDY_ATTENDANCE(study.id));
  };

  const moveAssignPage = () => {
    navigate(routePaths.STUDY_ASSIGNMENT(study.id));
  };

  useEffect(() => {
    study.attendance_date_info.forEach((date) => {
      if (date.start_time.split(' ')[0] === currentDate.toLocaleDateString('en-CA')) {
        setIsAttendDate(true);
      }
      if (currentDate <= new Date(date.deadline) && currentDate >= new Date(date.start_time)) {
        setDateId(date.id);
        setIsAttendTime(true);
        setDeadline(date.deadline);
      }
    });
  }, [currentDate, study.attendance_date_info]);

  return (
    <AttendanceInfoContextProvider studyId={study.id} dateId={dateId}>
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
          {study.notice?.title ?? '공지사항이 없습니다.'}
        </div>
        <Container padding="7px 0" justify="flex-end">
          <Link
            to={routePaths.STUDY_NOTICE(study.id)}
            css={css` 
              font-size: 13px;
              color: #B5B5B5;
              text-decoration: underline;
              margin-right: 0;
              margin-top: -10px;
            `}
          >
            전체 공지사항
          </Link>
        </Container>
        <hr css={hrStyle} />
        <div css={mainDescription}>{currentDate.toLocaleDateString('en-CA')}</div>
        { isAttendDate ? <div css={subDescription}>오늘은 스터디 출석일이에요!</div>
          : <div css={subDescription}>오늘은 스터디 출석일이 아니에요!</div>}
        <div css={buttonDivStyle}>
          <Button
            variant="primary"
            disabled={!isAttendTime}
            onClick={() => {
              setOpen(true);
            }}
          >

            출석하기
          </Button>
          { open
          && (
          <EnterCodeModal
            open={open}
            onClose={onClose}
            role={study.my_role}
            deadline={deadline}
          />
          )}
          <Button
            onClick={moveStudyPage}
          >
            출석 현황 확인하기
          </Button>
        </div>
        <hr css={hrStyle} />
        <div css={mainDescription}>해야하는 과제</div>
        <div css={subDescription}>{study.assignment?.title ?? '과제가 없습니다.'}</div>
        <div css={buttonDivStyle}>
          <Button variant="primary" disabled={!study.assignment?.title}>과제 완료하기</Button>
          <Button
            onClick={moveAssignPage}
          >
            전체 과제 확인하기
          </Button>
        </div>
      </Container>
    </AttendanceInfoContextProvider>
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
