import styled from '@emotion/styled';

const vars = {
  initial: '0',
  xs: '520px',
  sm: '768px',
  md: '1024px',
  lg: '1280px',
};

type ResponseGridStyle = {
  [key in keyof typeof vars]?: number;
};

type Props = {
  height?: number | ResponseGridStyle;
  backgroundColor?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Wrapper = styled.div<Pick<Props, 'height' | 'backgroundColor'>>(
  {
    width: '100%',
  },
  ({ backgroundColor }: { backgroundColor: string }) => ({ backgroundColor }),
  ({ height = 16 }) => {
    if (typeof height === 'number') {
      return {
        height: `${height}px`,
      };
    }

    const breakpoints = Object.keys(height) as (keyof typeof vars)[];
    return breakpoints
      .map((breakpoint) => `@media screen and (min-width: ${vars[breakpoint]}) { height: ${height[breakpoint]}px; }`)
      .join(' ');
  },
);

export default function Spacing({ height, backgroundColor = 'inherit', ...props }: Props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Wrapper height={height} backgroundColor={backgroundColor} {...props} />;
}
