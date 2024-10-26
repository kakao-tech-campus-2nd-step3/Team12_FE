import { ElementType, HTMLAttributes, ReactNode } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

export type FontWeight = 'regular' | 'medium' | 'bold' | 'lighter' | 'bolder';

interface TextProps extends HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
  children: ReactNode;
  weight?: FontWeight;
  as?: ElementType;
  fontSize?: string;
  color?: string;
}

interface VariantTextProps extends TextProps {
  variant?: 'large' | 'medium' | 'small';
}

const Text = styled.p<TextProps>`
  font-weight: ${({ weight }) => weight || 'regular'};
  margin: 0;
  ${({ fontSize }) => fontSize && `font-size: ${fontSize};`};
  ${({ color }) => color && `color: ${color};`};
`;

export default Text;

export function ErrorText({ children, variant = 'medium', ...rest }: VariantTextProps) {
  const theme = useTheme();
  const textSizes = {
    large: '16px', medium: '14px', small: '12px',
  };
  return <Text as="p" fontSize={textSizes[variant]} color={theme.colors.other.error} {...rest}>{children}</Text>;
}

export function Paragraph({
  children, variant = 'medium', weight, color, ...rest
}: VariantTextProps) {
  const textSizes = {
    large: '18px', medium: '16px', small: '14px',
  };
  return <Text as="p" fontSize={textSizes[variant]} weight={weight} color={color} {...rest}>{children}</Text>;
}

export const Heading = {
  H1: ({ children, weight, ...rest }: TextProps) => (
    <Text as="h1" fontSize="32px" weight={weight} {...rest}>
      {children}
    </Text>
  ),
  H2: ({ children, weight, ...rest }: TextProps) => (
    <Text as="h2" fontSize="28px" weight={weight} {...rest}>
      {children}
    </Text>
  ),
  H3: ({ children, weight, ...rest }: TextProps) => (
    <Text as="h3" fontSize="24px" weight={weight} {...rest}>
      {children}
    </Text>
  ),
  H4: ({ children, weight, ...rest }: TextProps) => (
    <Text as="h4" fontSize="20px" weight={weight} {...rest}>
      {children}
    </Text>
  ),
  H5: ({ children, weight, ...rest }: TextProps) => (
    <Text as="h5" fontSize="18px" weight={weight} {...rest}>
      {children}
    </Text>
  ),
};
