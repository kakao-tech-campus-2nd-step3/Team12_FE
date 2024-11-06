import { useEffect, useState } from 'react';
import { DefaultPaddedContainer } from '@/components/container/variants';
import Input from '@/components/input';
import Select from '@/components/select';
import { Heading } from '@/components/text';

export default function AttendDateCreation() {
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
    <DefaultPaddedContainer>
      <Heading.H1>출석일자 생성</Heading.H1>
      <Input type="date" label="시작일" value={currentDate} />
      <Input type="time" label="시작시간" value={currentTime} />
      <Select label="허용시간">
        <option value="5">5분</option>
        <option value="10">10분</option>
        <option value="15">15분</option>
        <option value="20">20분</option>
        <option value="30">30분</option>
        <option value="60">1시간</option>
      </Select>
    </DefaultPaddedContainer>
  );
}
