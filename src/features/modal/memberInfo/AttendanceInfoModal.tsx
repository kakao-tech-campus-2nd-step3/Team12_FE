import React, { useContext } from 'react';
import { css } from '@emotion/react';
import Grid from '@/components/grid';
import Modal from '@/components/modal';
import MemberInfoSection from '@/features/modal/memberInfo/MemberInfoSection';
import Text, { Heading } from '@/components/text';
import colorTheme from '@/styles/colors';
import Container from '@/components/container';
import { StudyMember } from '@/types/study';
import { StudyInfoContext } from '@/providers/StudyInfoProvider';

interface AttendanceInfoModalProps {
  open: boolean;
  onClose: () => void;
  memberInfo: StudyMember;
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
    open, onClose, memberInfo,
  }
  : AttendanceInfoModalProps,
) {
  const { study } = useContext(StudyInfoContext);
  const memberAttendance = study
    .study_attendance_info
    ?.member_attendance[memberInfo.member.id.toString()];
  return (
    <Modal open={open} onClose={onClose} width="387px">
      <Container gap="30px" direction="column" padding="60px 30px" align="flex-start">
        <Heading.H1 weight="bold">출석 정보</Heading.H1>
        <MemberInfoSection
          memberInfo={memberInfo}
          rate={memberAttendance.attendance_rate
            ? (parseFloat(memberAttendance.attendance_rate) * 100).toFixed(0)
            : 0}
        />
        <Container direction="column" height="300px" css={{ overflowY: 'scroll', overflowX: 'hidden' }} justify="flex-start">
          <Grid columns={2} css={{ justifyItems: 'center' }} gap={10}>
            <Text css={defaultFontStyle}>날짜</Text>
            <Text css={defaultFontStyle}>출석 현황</Text>
          </Grid>
          <hr css={HorizontalLine} />
          {study.study_attendance_info.required_attendance?.map((attendanceDate : string) => {
            const isAttended = memberAttendance.member_attendance_list.some(
              (memberAttend: string) => attendanceDate.slice(0, 10) === memberAttend.slice(0, 10),
            );
            return (
              <React.Fragment key={attendanceDate}>
                <Grid columns={2} css={{ justifyItems: 'center' }} gap={10}>
                  <Text css={defaultFontStyle}>{attendanceDate.slice(0, 10)}</Text>
                  <Text
                    style={{
                      color: isAttended
                        ? colorTheme.other.success : colorTheme.other.error,
                    }}
                    css={defaultFontStyle}
                  >
                    {isAttended ? '출석' : '결석'}
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
