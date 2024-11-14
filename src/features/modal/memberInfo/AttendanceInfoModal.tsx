import React from 'react';
import { css } from '@emotion/react';
import Grid from '@/components/grid';
import Modal from '@/components/modal';
import MemberInfoSection from '@/features/modal/memberInfo/MemberInfoSection';
import { MemberAttendanceInfo } from '@/mock/attendance';
import { MemberInfo } from '@/mock/member';
import Text, { Heading } from '@/components/text';
import colorTheme from '@/styles/colors';
import Container from '@/components/container';

interface AttendanceInfoModalProps {
  open: boolean;
  onClose: () => void;
  memberInfo: MemberInfo;
  memberAttendanceInfo: MemberAttendanceInfo;
  attendanceDateList: string[];
}

const HorizontalLine = css`
  width: 100%;
  border: 1px solid #C8C8C8;
`;

const HorizontalSoftLine = css`
  width: 100%;
  border: 1px solid #ECEDEE;
`;

const defaultFontStyle = {
  fontSize: '15px',
};

export default function AttendanceInfoModal(
  {
    open, onClose, memberInfo, memberAttendanceInfo, attendanceDateList,
  }
  : AttendanceInfoModalProps,
) {
  return (
    <Modal open={open} onClose={onClose} width="387px">
      <Container gap="30px" direction="column" padding="60px 30px" align="flex-start">
        <Heading.H1 weight="bold">출석 정보</Heading.H1>
        <MemberInfoSection
          memberInfo={memberInfo}
          rate={Number(memberAttendanceInfo.attendanceRate) * 100}
        />
        <Container direction="column" height="300px" css={{ overflowY: 'scroll', overflowX: 'hidden' }} justify="flex-start">
          <Grid columns={2} css={{ justifyItems: 'center' }} gap={10}>
            <Text css={defaultFontStyle}>날짜</Text>
            <Text css={defaultFontStyle}>출석 현황</Text>
          </Grid>
          <hr css={HorizontalLine} />
          {attendanceDateList.map((date) => {
            const isAttendance = memberAttendanceInfo.memberAttendanceDateStringList.includes(date);
            return (
              <React.Fragment key={date}>
                <Grid columns={2} css={{ justifyItems: 'center' }} gap={10}>
                  <Text css={defaultFontStyle}>{date}</Text>
                  <Text
                    style={{
                      color: isAttendance
                        ? colorTheme.other.success : colorTheme.other.error,
                    }}
                    css={defaultFontStyle}
                  >
                    {isAttendance ? '출석' : '결석'}
                  </Text>
                </Grid>
                <hr css={HorizontalSoftLine} />
              </React.Fragment>
            );
          })}
        </Container>
      </Container>
    </Modal>
  );
}
