import { css, useTheme } from '@emotion/react';
import { ButtonVariants } from '@/styles';

interface UseButtonStyleProps {
  variant?: ButtonVariants;
}

function useButtonStyle({ variant = 'default' }: UseButtonStyleProps) {
  const globalTheme = useTheme();

  const variantStyles = {
    default: {
      backgroundColor: globalTheme.colors.background.main,
      color: globalTheme.colors.text.prominent,
      border: `1px solid ${globalTheme.colors.text.subtle}`,
      hoverBackgroundColor: globalTheme.colors.background.darken,
      hoverColor: globalTheme.colors.text.prominent,
      hoverBorderColor: globalTheme.colors.border.prominent,
      disabledBackgroundColor: globalTheme.colors.background.darken,
      disabledColor: globalTheme.colors.text.subtle,
    },
    dark: {
      backgroundColor: globalTheme.colors.text.prominent,
      color: globalTheme.colors.primary.main,
      border: '1px solid transparent',
      hoverBackgroundColor: globalTheme.colors.primary.main,
      hoverColor: globalTheme.colors.text.prominent,
      hoverBorderColor: 'transparent',
      disabledBackgroundColor: globalTheme.colors.border.subtle,
      disabledColor: globalTheme.colors.text.subtle,
    },
    primary: {
      backgroundColor: globalTheme.colors.primary.darken,
      color: globalTheme.colors.absolute.white,
      border: '1px solid transparent',
      hoverBackgroundColor: globalTheme.colors.absolute.black,
      hoverColor: globalTheme.colors.primary.main,
      hoverBorderColor: 'transparent',
      disabledBackgroundColor: globalTheme.colors.primary.passive,
      disabledColor: globalTheme.colors.text.subtle,
    },
  };

  const styles = variantStyles[variant];

  const buttonStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    padding: 10px 18px;
    border-radius: 100px;
    color: ${styles.color};
    border: ${styles.border};
    background-color: ${styles.backgroundColor};
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    cursor: pointer;
    gap: 5px;
    
    &:hover {
      background-color: ${styles.hoverBackgroundColor};
      color: ${styles.hoverColor};
      border: 1px solid ${styles.hoverBorderColor};
    }

    &:disabled, &:disabled:hover {
      background-color: ${styles.disabledBackgroundColor};
      color: ${styles.disabledColor};
      border: 1px solid transparent;
    }
  `;

  const buttonIconStyle = css`
    width: 16px;
    height: 16px;
  `;

  return {
    buttonStyle,
    buttonIconStyle,
  };
}

export default useButtonStyle;
