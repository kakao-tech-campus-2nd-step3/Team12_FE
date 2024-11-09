import styled from '@emotion/styled';
import Avatar from '@/components/avatar';
import Grid from '@/components/grid';
import Text from '@/components/text';
import Radio from '@/components/radio';
import Container from '@/components/container';
import theme from '@/styles/theme';

interface AttendanceInfoProps {
  name: string;
  time: string;
  status: boolean;
  imageUrl: string;
}

const HorizontalLine = styled.hr`
  width: 100%;
  border: 1px solid #ECEDEE;
`;

export default function AttendanceInfo({
  name, time, status, imageUrl,
}: AttendanceInfoProps) {
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
        {status ? (
          <Text fontSize="12px">{time}</Text>
        ) : (
          <Text fontSize="12px" color={theme.colors.other.warn}>
            결석
          </Text>
        )}
        <Container direction="row" gap="3px">
          <Radio name={`attendance-${name}`} defaultChecked={status} />
          <Text fontSize="10px">출석</Text>
          <Radio name={`attendance-${name}`} defaultChecked={!status} />
          <Text fontSize="10px">결석</Text>
        </Container>
      </Grid>
      <HorizontalLine />
    </>
  );
}
