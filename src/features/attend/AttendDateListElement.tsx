import { css } from '@emotion/react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Grid from '@/components/grid';
import Text from '@/components/text';
import Button from '@/components/button';
import theme from '@/styles/theme';
import AttendanceCheckModal from '@/features/modal/attendance/AttendanceCheckModal';
import { deleteDate, updateDate } from '@/api/attendance';
import Input from '@/components/input';
import Select from '@/components/select';

interface AttendDateListElementProps {
  studyId: number;
  startDateTime: string;
  allowTime: number;
  isPastDate: boolean;
  dateId: number;
}

export default function AttendDateListElement(
  {
    studyId, startDateTime, allowTime, isPastDate, dateId,
  }: AttendDateListElementProps,
) {
  const [startDate, setStartDate] = useState(startDateTime.split(' ')[0]);
  const [startTime, setStartTime] = useState(startDateTime.split(' ')[1]);
  const [allowTimeVal, setAllowTimeVal] = useState(allowTime);
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const editComplete = async () => {
    try {
      const response = await updateDate({
        study_id: studyId,
        requestData: {
          start_time: `${startDate} ${startTime}`,
          time_interval: allowTimeVal,
          date_id: dateId,
        },
      });

      if (response.status === 204) {
        toast.success('수정이 완료되었습니다🍀');
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toast.error('잘못된 입력입니다🥲');
      } else {
        toast.error('오류가 발생했습니다🚨');
      }
      setStartDate(startDateTime.split(' ')[0]);
      setStartTime(startDateTime.split(' ')[1]);
      setAllowTimeVal(allowTime);
    } finally {
      setEditOpen(false);
    }
  };

  const onClose = () => {
    setOpen(false);
  };

  const deleteAttendDate = async () => {
    const response = deleteDate({
      study_id: studyId,
      requestData: {
        start_time: startDateTime,
      },
    });
    if ((await response).status === 204) {
      toast.success('출석일자가 삭제되었습니다🍀');
    } else {
      toast.error('삭제에 실패했습니다🥲');
    }
  };

  return (
    <Grid columns={6} css={{ alignItems: 'center', justifyItems: 'center', gridTemplateColumns: '1fr 1fr 1fr 1fr 0.5fr 0.5fr' }}>
      { editOpen ? (
        <Input
          type="date"
          value={startDate}
          css={{ width: '140px', fontSize: '13px', textAlign: 'center' }}
          onChange={(e) => { setStartDate(e.target.value); }}
        />
      ) : <Text css={commonTextStyles}>{startDate}</Text> }
      { editOpen ? (
        <Input
          type="time"
          value={startTime}
          css={{ width: '140px', fontSize: '13px', textAlign: 'center' }}
          onChange={(e) => { setStartTime(e.target.value); }}
        />
      )
        : <Text css={commonTextStyles}>{startTime}</Text>}
      { editOpen ? (
        <Select
          value={allowTimeVal}
          onChange={(e) => { setAllowTimeVal(Number(e.target.value)); }}
          css={{
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #DFE1E3',
            height: '45px',
            boxSizing: 'border-box',
            fontSize: '13px',
            width: '140px',
            textAlign: 'center',
          }}
        >
          <option value="5">5분</option>
          <option value="10">10분</option>
          <option value="15">15분</option>
          <option value="20">20분</option>
          <option value="30">30분</option>
          <option value="60">1시간</option>
        </Select>
      ) : (
        <Text css={commonTextStyles}>
          {allowTimeVal}
          분
        </Text>
      )}
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
        date={startDateTime}
        dateId={dateId}
      />
      )}
      { editOpen ? (
        <Button
          css={commonButtonStyles}
          onClick={editComplete}
        >
          완료
        </Button>
      ) : (
        <Button
          variant="primary"
          css={commonButtonStyles}
          disabled={isPastDate}
          onClick={() => {
            setEditOpen(true);
          }}
        >
          수정
        </Button>
      )}
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
