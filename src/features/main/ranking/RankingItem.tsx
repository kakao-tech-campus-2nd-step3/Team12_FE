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
        <Paragraph>{info.name}</Paragraph>
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
  const percent = ((info.completedAssignments / info.totalAssignments) * 100).toFixed(2);
  return `${info.totalAssignments} 중 ${info.completedAssignments}개 완료 (${percent}%)`;
}

function getAttendanceInfo(info: RankedStudyInfo) {
  const percent = ((info.attendedDates / info.totalAttendanceDates) * 100).toFixed(2);
  return `${info.attendedDates}/${info.totalAttendanceDates} (${percent}%)`;
}

export default RankingItem;
