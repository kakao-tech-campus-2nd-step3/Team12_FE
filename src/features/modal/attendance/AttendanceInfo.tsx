import styled from '@emotion/styled';
import { useState } from 'react';
import Avatar from '@/components/avatar';
import Grid from '@/components/grid';
import Text from '@/components/text';
import Radio from '@/components/radio';
import Container from '@/components/container';
import theme from '@/styles/theme';

interface AttendanceInfoProps {
  memberId: string;
  name: string;
  time: string;
  status: boolean;
  imageUrl?: string;
  onStatusChange: (isAttended: boolean) => void;
}

const HorizontalLine = styled.hr`
  width: 100%;
  border: 1px solid #ECEDEE;
`;

export default function AttendanceInfo({
  memberId,
  name,
  time,
  status,
  imageUrl,
  onStatusChange,
}: AttendanceInfoProps) {
  const [isAttended, setIsAttended] = useState(status);

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStatus = e.target.value === 'present';
    setIsAttended(newStatus);
    onStatusChange(newStatus);
  };

  return (
    <>
      <Grid
        columns={3}
        style={{
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Container direction="row" gap="10px" justify="flex-start">
          <Avatar src={imageUrl} alt={name} size="small" />
          <Text fontSize="15px" css={{ textAlign: 'center' }}>{name}</Text>
        </Container>
        {isAttended ? (
          <Text fontSize="12px">{time}</Text>
        ) : (
          <Text fontSize="12px" color={theme.colors.other.warn}>
            결석
          </Text>
        )}
        <Container direction="row" gap="3px">
          <Radio
            name={`attendance-${memberId}`}
            value="present"
            checked={isAttended}
            onChange={handleStatusChange}
          />
          <Text fontSize="10px">출석</Text>
          <Radio
            name={`attendance-${memberId}`}
            value="absent"
            checked={!isAttended}
            onChange={handleStatusChange}
          />
          <Text fontSize="10px">결석</Text>
        </Container>
      </Grid>
      <HorizontalLine />
    </>
  );
}
