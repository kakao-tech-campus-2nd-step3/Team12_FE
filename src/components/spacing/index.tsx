import styled from '@emotion/styled';
import { breakPoints } from '@constants/breakpoints';

type ResponseGridStyle = {
  // eslint-disable-next-line
  [key in keyof typeof breakPoints]?: number;
};

type Props = {
  height?: number | ResponseGridStyle;
  backgroundColor?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Wrapper = styled.div<Pick<Props, 'height' | 'backgroundColor'>>(
  {
    width: '100%',
  },
  ({ backgroundColor }: { backgroundColor?: string }) => ({ backgroundColor: backgroundColor ?? 'inherit' }),
  ({ height = 16 } : { height?: number | ResponseGridStyle }) => {
    if (typeof height === 'number') {
      return {
        height: `${height}px`,
      };
    }

    const breakpointKeys = Object.keys(height) as (keyof typeof breakPoints)[];
    return breakpointKeys
      .map((breakpoint) => `@media screen and (min-width: ${breakPoints[breakpoint]}) { height: ${height[breakpoint]}px; }`)
      .join(' ');
  },
);

export default function Spacing({ height, backgroundColor = 'inherit', ...props }: Props) {
  return <Wrapper height={height} backgroundColor={backgroundColor} {...props} />;
}
