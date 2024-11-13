import { css } from '@emotion/react';
import React, { useState } from 'react';
import { DefaultPaddedContainer } from '@/components/container/variants';
import AttendDateCreation from '@/features/attend/AttendDateCreation';
import AttendDateListElement from './AttendDateListElement';
import Grid from '@/components/grid';
import Text from '@/components/text';
import { mockAttendanceDate, mockMemberAttendance } from '@/mock/attendance';
import Spacing from '@/components/spacing';
import theme from '@/styles/theme';
import Container from '@/components/container';

export default function AttendDateList() {
  const [attendanceDates] = useState<string[]>(mockAttendanceDate);
  const [memberAttendance] = useState(mockMemberAttendance);
  return (
    <DefaultPaddedContainer>
      <Container padding="40px" direction="column" align="flex-start" css={{ minHeight: 'calc(100vh - 210px)' }}>
        <Container padding="50px" direction="column" css={{ backgroundColor: `${theme.colors.absolute.white}`, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', minWidth: 'fit-content' }}>
          <AttendDateCreation studyId={11} />
          <Spacing height={20} />
          <hr css={HorizontalLine} />
          <Grid columns={6} css={{ alignItems: 'center', gridTemplateColumns: '1fr 1fr 1fr 1fr 0.5fr 0.5fr', padding: '10px 0px' }}>
            <Text css={commonTitleTextStyles}>시작일</Text>
            <Text css={commonTitleTextStyles}>시작시간</Text>
            <Text css={commonTitleTextStyles}>허용시간</Text>
            <Text css={commonTitleTextStyles}>출석인원</Text>
            <Text css={commonTitleTextStyles}>수정</Text>
            <Text css={commonTitleTextStyles}>삭제</Text>
          </Grid>
          <hr css={HorizontalSoftLine} />
          <Container
            css={{
              overflowY: 'scroll',
              height: '350px',
              overflowX: 'hidden',
              '::-webkit-scrollbar': {
                display: 'none',
              },
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
            direction="column"
            justify="flex-start"
          >
            {attendanceDates.map((date) => (
              <React.Fragment key={date}>
                <AttendDateListElement
                  startDateTime={date}
                  allowTime="5"
                  memberAttendance={memberAttendance}
                />
                <hr css={HorizontalSoftLine} />
              </React.Fragment>
            ))}
          </Container>
        </Container>
      </Container>
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
