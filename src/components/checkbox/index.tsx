import { forwardRef, InputHTMLAttributes } from 'react';
import { CSSObject } from '@emotion/react';
import useCheckboxStyle from '@components/checkbox/useCheckboxStyle';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'checkbox';
  css?: CSSObject;
  defaultChecked?: boolean;
  checked?: boolean;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(({ type = 'checkbox', ...rest }, ref) => {
  const { checkboxStyle } = useCheckboxStyle();

  return (
    <input type={type} css={checkboxStyle} ref={ref} {...rest} />
  );
});

export default Radio;
