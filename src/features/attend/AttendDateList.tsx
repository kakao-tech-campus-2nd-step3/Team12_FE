import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { DefaultPaddedContainer } from '@/components/container/variants';
import AttendDateCreation from '@/features/attend/AttendDateCreation';
import AttendDateListElement from './AttendDateListElement';
import Grid from '@/components/grid';
import Text from '@/components/text';
import { mockMemberAttendance } from '@/mock/attendance';
import Spacing from '@/components/spacing';
import theme from '@/styles/theme';
import Container from '@/components/container';
import { getDateList } from '@/api/attendance';
import { AttendanceResponse } from '@/types/attendance';

export default function AttendDateList() {
  const [attendanceDates, setAttendanceDates] = useState<AttendanceResponse[]>([]);

  const fetchAttendanceDates = async () => {
    try {
      const dates = await getDateList(11);
      setAttendanceDates(dates.attendance_date_list);
    } catch (error) {
      console.error('Failed to fetch attendance dates:', error);
    }
  };

  useEffect(() => {
    fetchAttendanceDates();
  });

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
            {attendanceDates.map((data) => {
              const startDate = new Date(data.start_time.replace(' ', 'T'));
              const deadlineDate = new Date(data.deadline.replace(' ', 'T'));
              const allowTime = (deadlineDate.getTime() - startDate.getTime()) / (1000 * 60);

              return (
                <React.Fragment key={data.id}>
                  <AttendDateListElement
                    startDateTime={data.start_time}
                    allowTime={allowTime}
                    memberAttendance={memberAttendance}
                  />
                  <hr css={HorizontalSoftLine} />
                </React.Fragment>
              );
            })}

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
