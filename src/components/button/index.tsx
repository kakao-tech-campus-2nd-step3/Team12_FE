import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { CSSObject } from '@emotion/react';
import DynamicIcon from '@components/internal/dynamic-icon';
import useButtonStyle from '@components/button/useButtonStyle';
import { ButtonTheme } from '@/types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  css?: CSSObject;
  buttonTheme?: ButtonTheme;
  icon?: ReactNode | string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children, buttonTheme = 'default', css, icon, ...rest
}: ButtonProps, ref) => {
  const { buttonStyle, buttonIconStyle } = useButtonStyle({ buttonTheme });

  return (
    <button
      css={[buttonStyle, css]}
      type="button"
      ref={ref}
      {...rest}
    >
      <DynamicIcon icon={icon} css={buttonIconStyle} />
      {children}
    </button>
  );
});

export default Button;
