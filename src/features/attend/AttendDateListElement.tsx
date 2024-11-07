import { css } from '@emotion/react';
import Grid from '@/components/grid';
import Text from '@/components/text';
import Button from '@/components/button';
import theme from '@/styles/theme';

interface AttendDateListElementProps {
  startDateTime: string;
  allowTime: string;
  memberAttendance: [
    name: string,
    time: string,
    status: boolean,
    imageUrl: string,
  ];
}

export default function AttendDateListElement(
  { startDateTime, allowTime, memberAttendance }: AttendDateListElementProps,
) {
  const [startDate, startTime] = startDateTime.split(' ');

  return (
    <Grid columns={6} css={{ alignItems: 'center', justifyItems: 'center', gridTemplateColumns: '1fr 2fr 2fr 2fr 1fr 1fr' }}>
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
      >
        출석인원 확인
      </Button>
      <Button variant="primary" css={commonButtonStyles}>
        수정
      </Button>
      <Button variant="primary" css={commonButtonStyles}>
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
  align-self: center;
`;
