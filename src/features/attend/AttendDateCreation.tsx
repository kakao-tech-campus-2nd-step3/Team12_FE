import { useState, useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import Button from '@/components/button';
import Container from '@/components/container';
import Input from '@/components/input';
import Select from '@/components/select';
import { Heading } from '@/components/text';
import theme from '@/styles/theme';
import Grid from '@/components/grid';
import { DefaultPaddedContainer } from '@/components/container/variants';

export default function AttendDateCreation() {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-CA');
    const formattedTime = today.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    });
    setCurrentDate(formattedDate);
    setCurrentTime(formattedTime);
  }, []);

  return (
    <DefaultPaddedContainer>
      <Container direction="row" align="flex-start" gap="50px">
        <Toaster position="bottom-center" reverseOrder={false} />
        <Heading.H1 css={{ marginTop: '20px', whiteSpace: 'nowrap', fontWeight: 'bold' }}>출석일자 생성</Heading.H1>
        <Grid
          columns={
        {
          initial: 1, xs: 1, sm: 2, md: 4, lg: 4,
        }
      }
          css={{
            alignItems: 'center',
            justifyItems: 'center',
          }}
          gap={10}
        >
          <Container direction="column" align="flex-start" width="auto">
            <Input type="date" label="시작일" defaultValue={currentDate} css={{ width: '140px', fontSize: '13px'}} />
          </Container>
          <Container direction="column" align="flex-start" width="auto">
            <Input type="time" label="시작시간" defaultValue={currentTime} css={{ width: '140px', fontSize: '13px'}} />
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
            onClick={() => toast.success('출석일자가 생성되었습니다!')}
          >
            생성
          </Button>
        </Grid>
      </Container>
    </DefaultPaddedContainer>
  );
}
