import { css } from '@emotion/react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Grid from '@/components/grid';
import Text from '@/components/text';
import Button from '@/components/button';
import theme from '@/styles/theme';
import AttendanceCheckModal from '@/features/modal/attendance/AttendanceCheckModal';
import { deleteDate } from '@/api/attendance';

interface AttendDateListElementProps {
  studyId: number;
  startDateTime: string;
  allowTime: number;
  onDeleteComplete: () => void;
  isPastDate: boolean;
}

export default function AttendDateListElement(
  {
    studyId, startDateTime, allowTime, onDeleteComplete, isPastDate,
  }: AttendDateListElementProps,
) {
  const [startDate, startTime] = startDateTime.split(' ');
  const [open, setOpen] = useState(false);

  const editComplete = () => {
    toast.success('수정이 완료되었습니다!');
    setOpen(false);
  };

  const onClose = () => {
    setOpen(false);
  };

  const deleteAttendDate = async () => {
    const response = deleteDate({
      studyId,
      requestData: {
        start_time: startDateTime,
      },
    });
    if ((await response).status === 204) {
      toast.success('출석일자가 삭제되었습니다.');
      onDeleteComplete();
    }
  };

  return (
    <Grid columns={6} css={{ alignItems: 'center', justifyItems: 'center', gridTemplateColumns: '1fr 1fr 1fr 1fr 0.5fr 0.5fr' }}>
      <Text css={commonTextStyles}>{startDate}</Text>
      <Text css={commonTextStyles}>{startTime}</Text>
      <Text css={commonTextStyles}>
        {allowTime}
        분
      </Text>
      <Button
        variant="transparent"
        css={{
          color: '#7B7B7B',
          fontSize: '13px',
          textDecoration: 'underline',
          textAlign: 'center',
        }}
        onClick={() => setOpen(true)}
      >
        출석인원 확인
      </Button>
      {open && (
      <AttendanceCheckModal
        open={open}
        onClose={onClose}
        editComplete={editComplete}
        studyId={studyId}
        date={startDateTime}
      />
      )}
      <Toaster position="bottom-center" reverseOrder={false} />
      <Button
        variant="primary"
        css={commonButtonStyles}
        disabled={isPastDate}
      >
        수정
      </Button>
      <Button
        variant="primary"
        css={commonButtonStyles}
        onClick={() => {
          deleteAttendDate();
        }}
        disabled={isPastDate}
      >
        삭제
      </Button>
    </Grid>
  );
}

const commonTextStyles = css`
  font-size: 13px;
  text-align: center;
`;

const commonButtonStyles = css`
  background-color: #48CFCB;
  font-size: 13px;
  color: ${theme.colors.absolute.white};
  border-radius: ${theme.corners.medium};
  width: 60px;
  min-width: 60px;
  box-sizing: border-box;
  padding: 10px 10px;
  margin: 5px;
`;
