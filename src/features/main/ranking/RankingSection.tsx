import { DefaultPaddedContainer } from '@components/container/variants';
import { Heading, Paragraph } from '@components/text';
import { PrimarySpan } from '@components/span';
import Container from '@components/container';
import { useTheme } from '@emotion/react';
import Spacing from '@components/spacing';
import RankingGrid from '@features/main/ranking/RankingGrid';
import { dateToString } from '@/utils';

function RankingSection() {
  const theme = useTheme();
  return (
    <Container css={{ backgroundColor: theme.colors.background.main }}>

      <DefaultPaddedContainer css={{ paddingTop: '40px', paddingBottom: '40px', alignItems: 'flex-start' }}>
        <Container width="fit-content" align="flex-end" gap="24px">
          <Heading.H1 weight="bold">
            스터디
            {' '}
            <PrimarySpan>랭킹</PrimarySpan>
          </Heading.H1>
          <Paragraph variant="small">
            최근 새로고침:
            {' '}
            {dateToString(new Date())}
          </Paragraph>
        </Container>
        <Spacing height={40} />
        <RankingGrid />
      </DefaultPaddedContainer>
    </Container>
  );
}
export default RankingSection;
