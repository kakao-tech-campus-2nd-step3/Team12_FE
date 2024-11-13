import { useState, useEffect, SetStateAction } from 'react';
import { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import Button from '@/components/button';
import Container from '@/components/container';
import Input from '@/components/input';
import Select from '@/components/select';
import { Heading } from '@/components/text';
import theme from '@/styles/theme';
import Grid from '@/components/grid';
import { DefaultPaddedContainer } from '@/components/container/variants';
import { AttendDateCreationInputs } from '@/types/attendance';
import { createDate } from '@/api/attendance';

export default function AttendDateCreation({ studyId }: { studyId: number }) {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isPastDate, setIsPastDate] = useState(false);
  const [timeInterval, setTimeInterval] = useState('5');

  const handleTimeIntervalChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setTimeInterval(event.target.value);
  };

  const { handleSubmit } = useForm<AttendDateCreationInputs>({
    mode: 'onChange',
  });

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-CA');
    const formattedTime = today.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    });
    setCurrentDate(formattedDate);
    setCurrentTime(formattedTime);
    setSelectedDate(formattedDate);
    setSelectedTime(formattedTime);
  }, []);

  useEffect(() => {
    if (selectedDate && selectedTime) {
      setIsPastDate(selectedTime < currentTime);
    }
  }, [selectedDate, selectedTime, currentTime]);

  const handleCreateClick = () => {
    const response = createDate({
      studyId,
      requestData: {
        start_time: `${selectedDate} ${selectedTime}`,
        time_interval: Number(timeInterval),
      },
    });
    console.log(response);
  };

  return (
    <DefaultPaddedContainer>
      <Container direction="row" align="flex-start" gap="50px">
        <Toaster position="bottom-center" reverseOrder={false} />
        <Heading.H1 css={{ marginTop: '20px', whiteSpace: 'nowrap', fontWeight: 'bold' }}>출석일자 생성</Heading.H1>
        <form onSubmit={handleSubmit(handleCreateClick)}>
          <Grid
            columns={{
              initial: 1, xs: 1, sm: 2, md: 4, lg: 4,
            }}
            css={{
              alignItems: 'center',
              justifyItems: 'center',
            }}
            gap={10}
          >
            <Container direction="column" align="flex-start" width="auto">
              <Input
                type="date"
                label="시작일"
                value={selectedDate}
                min={currentDate}
                css={{ width: '140px', fontSize: '13px' }}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </Container>
            <Container direction="column" align="flex-start" width="auto">
              <Input
                type="time"
                label="시작시간"
                value={selectedTime}
                css={{ width: '140px', fontSize: '13px' }}
                onChange={(e) => setSelectedTime(e.target.value)}
              />
            </Container>
            <Select
              label="허용시간"
              css={{
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #DFE1E3',
                height: '45px',
                boxSizing: 'border-box',
                fontSize: '13px',
                width: '140px',
              }}
              value={timeInterval}
              onChange={handleTimeIntervalChange}
            >
              <option value="5">5분</option>
              <option value="10">10분</option>
              <option value="15">15분</option>
              <option value="20">20분</option>
              <option value="30">30분</option>
              <option value="60">1시간</option>
            </Select>
            <Button
              variant="primary"
              css={{
                borderRadius: theme.corners.medium,
                minWidth: '73px',
                width: '140px',
                height: '45px',
                marginTop: '15px',
                fontSize: '13px',
              }}
              type="submit"
              disabled={isPastDate}
            >
              생성
            </Button>
          </Grid>
        </form>
      </Container>
    </DefaultPaddedContainer>
  );
}
