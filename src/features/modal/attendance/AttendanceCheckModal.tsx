import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import Modal from '@/components/modal';
import Text, { Heading } from '@/components/text';
import Grid from '@/components/grid';
import AttendanceInfo from '@/features/modal/attendance/AttendanceInfo';
import Container from '@/components/container';
import Spacing from '@/components/spacing';
import Button from '@/components/button';
import theme from '@/styles/theme';
import { getStudyMember } from '@/api/study';
import { MemberAttendance, MemberAttendanceResponse } from '@/types/attendance';
import { getAttendanceList, updateAttendance } from '@/api/attendance';
import { StudyMember } from '@/types/study';

interface AcceptInvitationProps {
  open: boolean;
  onClose: () => void;
  editComplete: () => void;
  studyId: number;
  date: string;
}

const HorizontalLine = styled.hr`
  width: 100%;
  border: 1px solid #C8C8C8;
`;

export default function AttendanceCheckModal({
  open, onClose, editComplete, studyId, date,
}: AcceptInvitationProps) {
  const [memberAttendanceList, setMemberAttendance] = useState<{
    [key: string]: MemberAttendance
  }>({});
  const [memberList, setMemberList] = useState<StudyMember[]>([]);
  const [attendanceStatus, setAttendanceStatus] = useState<{ [memberId: string]: boolean }>({});
  const [isPastDate, setIsPastDate] = useState(false);

  useEffect(() => {
    const currentDate = new Date();
    const selectedDate = new Date(date);
    setIsPastDate(selectedDate < currentDate);
  }, [date]);

  useEffect(() => {
    async function fetchStudyMember(): Promise<void> {
      const response = await getStudyMember(studyId);
      setMemberList(response);
    }

    async function fetchMemberAttendance(): Promise<void> {
      const response: MemberAttendanceResponse = await getAttendanceList(studyId);
      setMemberAttendance(response.member_attendance);
    }

    fetchStudyMember();
    fetchMemberAttendance();
  }, [studyId]);

  const handleStatusChange = (memberId: string, updatedStatus: boolean) => {
    setAttendanceStatus((prevStatus) => ({
      ...prevStatus,
      [memberId]: updatedStatus,
    }));
  };

  const handleEditComplete = () => {
    try {
      Object.entries(attendanceStatus).forEach(([memberId, isAttended]) => {
        updateAttendance({
          studyId,
          memberId: Number(memberId),
          requestData: {
            datetime: date,
            is_attended: isAttended,
          },
        });
      });
      editComplete();
    } catch (error) {
      console.error('Failed to update attendance:', error);
    }
  };

  return (
    <Modal open={open} onClose={onClose} width="447px" height="628px">
      <Container padding="40px" direction="column" align="flex-start">
        <Spacing height={20} />
        <Heading.H1 weight="bold">출석조회</Heading.H1>
        <Spacing height={12} />
        <Text fontSize="15px">누가누가 잘하나 (a.k.a. 온사람)</Text>
        <Spacing height={23} />
        <Container gap="23px" justify="flex-start">
          <Grid columns={3} style={{ alignItems: 'center', justifyItems: 'center', textAlign: 'center' }}>
            <Text fontSize="15px">이름</Text>
            <Text fontSize="15px">출석 시간</Text>
            <Text fontSize="15px">출석 현황</Text>
          </Grid>
        </Container>
        <HorizontalLine />
        <Container
          css={{
            overflowY: 'scroll',
            height: '350px',
            overflowX: 'hidden',
            '::-webkit-scrollbar': { display: 'none' },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
          direction="column"
          justify="flex-start"
        >
          {memberList.map((member) => {
            const memberId = member.member.id.toString();
            const attendanceDates = memberAttendanceList[memberId]?.member_attendance_list ?? [];
            let time = '';

            const isAttended = attendanceDates.some((attendanceDate: string) => {
              if (attendanceDate.slice(0, 10) === date.slice(0, 10)) {
                time = attendanceDate.slice(11, 16);
                return true;
              }
              return false;
            });

            return (
              <AttendanceInfo
                key={memberId}
                memberId={memberId}
                name={member.member.nickname}
                time={time}
                status={isAttended}
                imageUrl={member.member.profile_image}
                onStatusChange={(
                  updatedStatus: boolean,
                ) => handleStatusChange(memberId, updatedStatus)}
              />
            );
          })}
        </Container>
        <Button
          variant="primary"
          css={{
            width: '366px',
            borderRadius: theme.corners.medium,
            position: 'absolute',
            bottom: '40px',
          }}
          onClick={handleEditComplete}
          disabled={!isPastDate}
        >
          수정완료
        </Button>
      </Container>
    </Modal>
  );
}
