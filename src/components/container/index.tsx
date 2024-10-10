import { ReactNode } from 'react';
import { css } from '@emotion/react';

export interface ContainerProps {
  children?: ReactNode;
  direction?: 'row' | 'column';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'stretch' | 'flex-start' | 'center' | 'flex-end';
  width?: string;
  height?: string;
  gap?: string;
}

function StyledContainer({
  children, direction, justify, align, width, height, gap,
}: ContainerProps) {
  const style = css`
    display: flex;
    flex-direction: ${direction || 'row'};
    justify-content: ${justify || 'center'};
    align-items: ${align || 'center'};
    width: ${width || '100%'};
    height: ${height || 'auto'};
    gap: ${gap || '0'};
  `;

  return (
    <div css={style}>
      {children}
    </div>
  );
}

function Container({
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

export default Container;
