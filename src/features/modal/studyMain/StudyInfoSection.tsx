import Container from '@components/container';
import { DefaultPaddedContainer } from '@components/container/variants';
import { css } from '@emotion/react';
import LeftSection from '@features/modal/studyMain/LeftSection';
import RightSection from '@features/modal/studyMain/RightSection';
import CalendarSection from '@features/modal/studyMain/CalendarSection';

export default function StudyInfoSection() {
  return (
    <DefaultPaddedContainer>
      <Container
        height="350px"
        justify="space-between"
        cssOverride={css`
            margin: 15px;
            border-radius: 8px;
            border: 1px solid rgba(0, 0, 0, 0.3);
            overflow: hidden;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
        `}
      >
        <LeftSection />
        <RightSection />
        <CalendarSection />
      </Container>
    </DefaultPaddedContainer>
  );
}
