import { ElementType, ReactNode } from 'react';
import styled from '@emotion/styled';

export type FontWeight = 'regular' | 'medium' | 'bold' | 'lighter' | 'bolder';

interface TextProps {
  children: ReactNode;
  weight?: FontWeight;
  // eslint-disable-next-line react/no-unused-prop-types
  as?: ElementType;
  // eslint-disable-next-line react/no-unused-prop-types
  fontSize?: string;
}

const StyledText = styled.p<TextProps>`
    font-weight: ${({ weight }) => weight || 'regular'};
    margin: 0;
    ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
`;

export const Paragraph = {
  Large: ({ children, weight }: TextProps) => (
    <StyledText as="p" fontSize="18px" weight={weight}>
      {children}
    </StyledText>
  ),
  Medium: ({ children, weight }: TextProps) => (
    <StyledText as="p" fontSize="16px" weight={weight}>
      {children}
    </StyledText>
  ),
  Small: ({ children, weight }: TextProps) => (
    <StyledText as="p" fontSize="14px" weight={weight}>
      {children}
    </StyledText>
  ),
};

export const Heading = {
  H1: ({ children, weight }: TextProps) => (
    <StyledText as="h1" fontSize="32px" weight={weight}>
      {children}
    </StyledText>
  ),
  H2: ({ children, weight }: TextProps) => (
    <StyledText as="h2" fontSize="28px" weight={weight}>
      {children}
    </StyledText>
  ),
  H3: ({ children, weight }: TextProps) => (
    <StyledText as="h3" fontSize="24px" weight={weight}>
      {children}
    </StyledText>
  ),
  H4: ({ children, weight }: TextProps) => (
    <StyledText as="h4" fontSize="20px" weight={weight}>
      {children}
    </StyledText>
  ),
  H5: ({ children, weight }: TextProps) => (
    <StyledText as="h5" fontSize="18px" weight={weight}>
      {children}
    </StyledText>
  ),
};
