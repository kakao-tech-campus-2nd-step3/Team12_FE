import { useState, useEffect } from 'react';
import Button from '@/components/button';
import Container from '@/components/container';
import Input from '@/components/input';
import Select from '@/components/select';
import { Heading } from '@/components/text';
import theme from '@/styles/theme';
import Grid from '@/components/grid';
import { toast, Toaster } from 'react-hot-toast';

export default function AttendDateInput() {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    setCurrentDate(`${year}-${month}-${day}`);
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    setCurrentTime(`${hours}:${minutes}`);
  }, []);

  return (
    <Container direction="column" align="flex-start" css={{ maxWidth: '850px'}}>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Grid columns={5} gap={40} >
      <Heading.H1 css={{marginTop: '20px', whiteSpace: 'nowrap'}}>출석일자 생성</Heading.H1>
        <Container direction='column' align='flex-start' width='auto'>
        <Input type="date" label="시작일" defaultValue={currentDate}/>
        </Container>
        <Container direction='column' align='flex-start' width='auto'>
        <Input type="time" label="시작시간" defaultValue={currentTime}/>
        </Container>
        <Select
          label="허용시간"
          css={{
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #DFE1E3',
            height: '45px',
            boxSizing: 'border-box',
            fontSize: '15px',
            width: '100px',
          }}
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
            width: '73px',
            height: '45px',
            marginTop: '15px',
          }}
          onClick={() => toast.success('출석일자가 생성되었습니다!')}
        >
          생성
        </Button>
      </Grid>
    </Container>
  );
}
