import { InputHTMLAttributes } from 'react';
import { CSSObject } from '@emotion/react';
import useCheckboxStyle from '@components/checkbox/useCheckboxStyle';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'checkbox';
  css?: CSSObject;
  defaultChecked?: boolean;
  checked?: boolean;
}

function Radio({ type = 'checkbox', ...rest }: RadioProps) {
  const { checkboxStyle } = useCheckboxStyle();

  return (
    <input type={type} css={checkboxStyle} {...rest} />
  );
}

export default Radio;
