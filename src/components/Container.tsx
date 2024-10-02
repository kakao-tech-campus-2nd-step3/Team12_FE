import { ReactNode } from 'react';
import styled from '@emotion/styled';

export interface ContainerProps {
  children?: ReactNode;
  direction?: 'row' | 'column';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'stretch' | 'flex-start' | 'center' | 'flex-end';
  width?: string;
  height?: string;
  gap?: string;
}

const StyledContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  justify-content: ${({ justify }) => justify || 'center'};
  align-items: ${({ align }) => align || 'center'};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  gap: ${({ gap }) => gap || '0'};
`;

export function Container({
  children, direction, justify, align, width, height, gap,
}: ContainerProps) {
  return (
    <StyledContainer
      direction={direction}
      justify={justify}
      align={align}
      width={width}
      height={height}
      gap={gap}
    >
      {children}
    </StyledContainer>
  );
}
