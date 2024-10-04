import styled from '@emotion/styled';

const vars = {
  initial: '0',
  xs: '520px',
  sm: '768px',
  md: '1024px',
  lg: '1280px',
};

type ResponseGridStyle = {
  // eslint-disable-next-line
  [key in keyof typeof vars]?: number;
};

type Props = {
  columns: number | ResponseGridStyle;
  gap?: number;
} & React.HTMLAttributes<HTMLDivElement>;

const Wrapper = styled.div<Pick<Props, 'columns' | 'gap'>>(
  {
    width: '100%',
    display: 'grid',
  },
  ({ gap }: { gap?: number }) => ({
    gap: gap ? `${gap}px` : '0',
  }),
  ({ columns }: { columns: number | ResponseGridStyle }) => {
    if (typeof columns === 'number') {
      return {
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      };
    }

    const breakpoints = Object.keys(columns) as (keyof typeof vars)[];
    return breakpoints
      .map((breakpoint) => `@media screen and (min-width: ${vars[breakpoint]}) { grid-template-columns: repeat(${columns[breakpoint]}, 1fr); }`)
      .join(' ');
  },
);

export default function Grid({ children, columns, ...props }: Props): JSX.Element {
  return (
    <Wrapper columns={columns} {...props}>
      {children}
    </Wrapper>
  );
}
