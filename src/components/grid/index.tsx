import styled from '@emotion/styled';
import { breakPoints } from '@constants/breakpoints';

type ResponseGridStyle = {
  // eslint-disable-next-line
  [key in keyof typeof breakPoints]?: number;
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

    const breakpointKeys = Object.keys(columns) as (keyof typeof breakPoints)[];
    return breakpointKeys
      .map((breakpoint) => `@media screen and (min-width: ${breakPoints[breakpoint]}) { grid-template-columns: repeat(${columns[breakpoint]}, 1fr); }`)
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
