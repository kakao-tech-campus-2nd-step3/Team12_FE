import { ReactNode } from 'react';
import { CSSObject, useTheme } from '@emotion/react';

interface SpanProps {
  children?: ReactNode;
  css?: CSSObject;
}

export function PrimarySpan({ children, css }: SpanProps) {
  const theme = useTheme();
  return <span css={[{ color: theme.colors.primary.main }, css]}>{children}</span>;
}
