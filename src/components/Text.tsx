import { ElementType, ReactNode } from 'react';
import styled from '@emotion/styled';

export type FontWeight = 'regular' | 'medium' | 'bold' | 'lighter' | 'bolder';

export interface TextProps {
  children?: ReactNode;
  weight?: FontWeight;
  as?: ElementType;
  fontSize?: string;
}

const StyledText = styled.p<TextProps>`
    font-weight: ${({ weight }) => weight || 'regular'};
    margin: 0;
    ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
`;

export const Paragraph = {
  large: ({ children, weight }: TextProps) => (
    <StyledText as="p" fontSize="18px" weight={weight}>
      {children}
    </StyledText>
  ),
  medium: ({ children, weight }: TextProps) => (
    <StyledText as="p" fontSize="16px" weight={weight}>
      {children}
    </StyledText>
  ),
  small: ({ children, weight }: TextProps) => (
    <StyledText as="p" fontSize="14px" weight={weight}>
      {children}
    </StyledText>
  ),
};

export const Heading = {
  h1: ({ children, weight }: TextProps) => (
    <StyledText as="h1" fontSize="32px" weight={weight}>
      {children}
    </StyledText>
  ),
  h2: ({ children, weight }: TextProps) => (
    <StyledText as="h2" fontSize="28px" weight={weight}>
      {children}
    </StyledText>
  ),
  h3: ({ children, weight }: TextProps) => (
    <StyledText as="h3" fontSize="24px" weight={weight}>
      {children}
    </StyledText>
  ),
  h4: ({ children, weight }: TextProps) => (
    <StyledText as="h4" fontSize="20px" weight={weight}>
      {children}
    </StyledText>
  ),
  h5: ({ children, weight }: TextProps) => (
    <StyledText as="h5" fontSize="18px" weight={weight}>
      {children}
    </StyledText>
  ),
  h6: ({ children, weight }: TextProps) => (
    <StyledText as="h6" fontSize="16px" weight={weight}>
      {children}
    </StyledText>
  ),
};
