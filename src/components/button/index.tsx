import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { CSSObject } from '@emotion/react';
import DynamicIcon from '@components/internal/dynamic-icon';
import useButtonStyle from '@components/button/useButtonStyle';
import { ButtonVariants } from '@/styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  css?: CSSObject;
  variant?: ButtonVariants;
  icon?: ReactNode | string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children, variant = 'default', css, icon, ...rest
}: ButtonProps, ref) => {
  const { buttonStyle, buttonIconStyle } = useButtonStyle({ variant });

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
