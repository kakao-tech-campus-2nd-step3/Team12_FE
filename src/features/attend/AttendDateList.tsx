import { css } from '@emotion/react';
import { DefaultPaddedContainer } from '@/components/container/variants';
import AttendDateCreation from '@/features/attend/AttendDateCreation';
import AttendDateListElement from './AttendDateListElement';
import Grid from '@/components/grid';
import Text from '@/components/text';
import { mockAttendanceDate } from '@/mock/attendance';
import { useState } from 'react';

export default function AttendDateList() {
  const [ attendanceDates ] = useState<string[]>(mockAttendanceDate);
  return (
    <DefaultPaddedContainer>
      <AttendDateCreation />
      <hr css={HorizontalLine} />
      <Grid columns={6} css={{ alignItems: 'center', gridTemplateColumns: '1fr 2fr 2fr 2fr 1fr 1fr', padding: '10px 0px' }}>
        <Text css={commonTitleTextStyles}>시작일</Text>
        <Text css={commonTitleTextStyles}>시작시간</Text>
        <Text css={commonTitleTextStyles}>허용시간</Text>
        <Text css={commonTitleTextStyles}>출석인원</Text>
        <Text css={commonTitleTextStyles}>수정</Text>
        <Text css={commonTitleTextStyles}>삭제</Text>
      </Grid>
      <hr css={HorizontalSoftLine} />
      {attendanceDates.map((date) => (
        <>
          <AttendDateListElement
            startDateTime={date}
            allowTime="5"
            memberAttendance={
            ['John', '', false, 'https://picsum.photos/200']
          }
          />
          <hr css={HorizontalSoftLine} />
        </>
      ))}
    </DefaultPaddedContainer>
  );
}

const commonTitleTextStyles = css`
  font-size: 15px;
  text-align: center;
`;

const HorizontalLine = css`
  width: 100%;
  border: 1px solid #B5ACAC;
`;

const HorizontalSoftLine = css`
  width: 100%;
  border: 1px solid #ECEDEE;
`;
