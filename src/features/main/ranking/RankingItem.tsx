import Container from '@components/container';
import { css, useTheme } from '@emotion/react';
import { Paragraph } from '@components/text';
import Avatar from '@components/avatar';
import type { RankedStudyInfo } from '@/types/ranking';

interface RankingItemProps {
  rankedStudyInfo: RankedStudyInfo;
}

function RankingItem({ rankedStudyInfo: info }: RankingItemProps) {
  const theme = useTheme();
  const rowStyle = css`
    display: grid;
    width: 100%;
    height: ${info.rank === 1 ? '72px' : '50px'};
    border-bottom: ${theme.colors.border.prominent} 1px solid;
    background: ${info.rank === 1
    ? 'linear-gradient(to right, #fffeac 0%, rgba(72, 207, 203, 0.23) 100%)'
    : theme.colors.background.main};
    grid-template-columns: 0.3fr 0.2fr 2fr 1fr 1fr;
  `;
  return (
    <div css={rowStyle}>
      <Container>
        <Avatar size="small" />
      </Container>
      <Container>
        <Paragraph>{info.rank}</Paragraph>
      </Container>
      <Container>
        <Paragraph>{info.study_rank_info.name}</Paragraph>
      </Container>
      <Container>
        <Paragraph>{getAssignmentInfo(info)}</Paragraph>
      </Container>
      <Container>
        <Paragraph>{getAttendanceInfo(info)}</Paragraph>
      </Container>
    </div>
  );
}

function getAssignmentInfo(info: RankedStudyInfo) {
  // eslint-disable-next-line max-len
  const percent = ((info.study_rank_info.completed_assignment_count / info.study_rank_info.total_assignment_count) * 100).toFixed(2);
  if (info.study_rank_info.total_assignment_count === 0) {
    return '과제 정보 없음';
  }
  return `${info.study_rank_info.total_assignment_count} 중 ${info.study_rank_info.completed_assignment_count}개 완료 (${percent}%)`;
}

function getAttendanceInfo(info: RankedStudyInfo) {
  // eslint-disable-next-line max-len
  const percent = ((info.study_rank_info.attended_date_count / info.study_rank_info.total_attendance_date_count) * 100).toFixed(2);
  if (info.study_rank_info.total_attendance_date_count === 0) {
    return '출석 정보 없음';
  }
  return `${info.study_rank_info.total_attendance_date_count}/${info.study_rank_info.attended_date_count} (${percent}%)`;
}

export default RankingItem;
