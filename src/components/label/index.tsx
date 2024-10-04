import useLabelStyle from '@components/label/useLabelStyle';
import { LabelHTMLAttributes, ReactNode } from 'react';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children?: ReactNode;
}

function Label({ children, ...rest }: LabelProps) {
  const { labelStyle } = useLabelStyle();

  return (
    // eslint-disable-next-line
    <label css={labelStyle} {...rest}>
      {children}
    </label>
  );
}

export default Label;
