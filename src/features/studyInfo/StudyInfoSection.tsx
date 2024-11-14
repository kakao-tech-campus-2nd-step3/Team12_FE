import Container from '@components/container';
import { DefaultPaddedContainer } from '@components/container/variants';
import { css, useTheme } from '@emotion/react';
import LeftSection from '@features/studyInfo/LeftSection';
import RightSection from '@features/studyInfo/RightSection';
import CalendarSection from '@features/studyInfo/CalendarSection';
import Spacing from '@components/spacing';

export default function StudyInfoSection() {
  const theme = useTheme();
  return (
    <DefaultPaddedContainer>
      <Spacing height={20} />
      <Container
        height="350px"
        justify="space-between"
        cssOverride={css`
          margin: 15px;
          border-radius: ${theme.corners.small};
          overflow: hidden;
          background-color: ${theme.colors.background.main};
          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
        `}
      >
        <LeftSection />
        <RightSection />
        <CalendarSection />
      </Container>
      <Spacing height={35} />
    </DefaultPaddedContainer>
  );
}
