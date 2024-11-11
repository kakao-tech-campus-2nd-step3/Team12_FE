import { useState } from 'react';
import Container from '@components/container';
import { css, useTheme } from '@emotion/react';
import { Paragraph } from '@components/text';
import RankingItem from '@features/main/ranking/RankingItem';
import { mockRanking } from '@/mock/ranking';

function RankingGrid() {
  const theme = useTheme();
  const [rankingInfo] = useState(mockRanking);
  const headerStyle = css`
    height: 60px;
    width: 100%;
    border-top: ${theme.colors.border.prominent} 1px solid;
    border-bottom: ${theme.colors.border.prominent} 1px solid;
    display: grid;
    grid-template-columns: 0.3fr 0.2fr 2fr 1fr 1fr;
  `;
  return (
    <Container direction="column" css={{ userSelect: 'none' }}>
      <div css={headerStyle}>
        <Container />
        <Container>
          <Paragraph weight="bold" variant="medium">순위</Paragraph>
        </Container>
        <Container>
          <Paragraph weight="bold" variant="medium">스터디 이름</Paragraph>
        </Container>
        <Container>
          <Paragraph weight="bold" variant="medium">과제 완료율</Paragraph>
        </Container>
        <Container>
          <Paragraph weight="bold" variant="medium">출석률</Paragraph>
        </Container>
      </div>
      {
        rankingInfo.map((rankedStudyInfo) => {
          const key = `study-ranking-${rankedStudyInfo.rank}-${rankedStudyInfo.name}`;
          return (
            <RankingItem rankedStudyInfo={rankedStudyInfo} key={key} />
          );
        })
      }
    </Container>
  );
}

export default RankingGrid;
