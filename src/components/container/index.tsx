import { ReactNode } from 'react';
import { css, CSSObject } from '@emotion/react';

export interface ContainerProps {
  children?: ReactNode;
  direction?: 'row' | 'column';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'stretch' | 'flex-start' | 'center' | 'flex-end';
  width?: string;
  height?: string;
  gap?: string;
  padding?: string;
  cssOverride?: CSSObject;
}

function StyledContainer({
  children, direction, justify, align, width, height, gap, padding, cssOverride,
}: ContainerProps) {
  const style = css`
    display: flex;
    flex-direction: ${direction || 'column'};
    justify-content: ${justify || 'center'};
    align-items: ${align || 'center'};
    width: ${width || '100%'};
    height: ${height || 'auto'};
    gap: ${gap || '0'};
    padding: ${padding || '0'}
  `;

  return (
    <div css={[style, cssOverride]}>
      {children}
    </div>
  );
}

function Container({
  children, ...rest
}: ContainerProps) {
  return (
    <StyledContainer
      {...rest}
    >
      {children}
    </StyledContainer>
  );
}

export default Container;
