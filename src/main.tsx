import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Heading, Paragraph } from '@components/Text.tsx';
import { Container } from '@components/Container.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Heading.H1>Heading.h1</Heading.H1>
    <Heading.H2>Heading.h2</Heading.H2>
    <Heading.H3>Heading.h3</Heading.H3>
    <Heading.H4>Heading.h4</Heading.H4>
    <Heading.H5>Heading.h5</Heading.H5>
    <Paragraph.Large>Paragraph.large</Paragraph.Large>
    <Paragraph.Medium>Paragraph.medium</Paragraph.Medium>
    <Paragraph.Small>Paragraph.small</Paragraph.Small>

    <Container>
      <Heading.H1>Title Heading</Heading.H1>
      <Paragraph.Large weight="medium">This is a large paragraph.</Paragraph.Large>
      <Paragraph.Small weight="regular">This is a small paragraph.</Paragraph.Small>
    </Container>
  </StrictMode>,
);
