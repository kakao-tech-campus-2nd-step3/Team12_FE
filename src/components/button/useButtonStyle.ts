import useTheme from '@hooks/useTheme';
import { css } from '@emotion/react';
import { ButtonVariants } from '@/types';

interface UseButtonStyleProps {
  variant?: ButtonVariants;
}

function useButtonStyle({ variant = 'default' }: UseButtonStyleProps) {
  const globalTheme = useTheme();

  const buttonStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    padding: 10px 18px;
    border-radius: 100px;
    color: ${variant === 'dark' ? globalTheme.colors.primary.main : globalTheme.colors.text.prominent};
    border: ${getBorderStyle()};
    background-color: ${getBackgroundColor()};
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    cursor: pointer;
    gap: 5px;
    &:hover {
      background-color: ${getHoverBackgroundColor()};
      color: ${getHoverColor()};
      border-color: ${getHoverBorderColor()};
    }
  `;

  const buttonIconStyle = css`
    width: 16px;
    height: 16px;
  `;

  function getBackgroundColor() {
    if (variant === 'light-outlined') {
      return 'transparent';
    }

    if (variant === 'dark') {
      return globalTheme.colors.text.prominent;
    }

    return globalTheme.colors.background.main;
  }

  function getBorderStyle() {
    if (variant === 'light-outlined') {
      return `2px solid ${globalTheme.colors.absolute.black}`;
    }

    const baseStyle = '1px solid ';

    return baseStyle + (variant === 'dark' ? 'transparent' : globalTheme.colors.text.subtle);
  }

  function getHoverBackgroundColor() {
    if (variant === 'light-outlined') {
      return globalTheme.colors.text.prominent;
    }

    if (variant === 'dark') {
      return globalTheme.colors.primary.main;
    }

    return globalTheme.colors.background.darken;
  }

  function getHoverColor() {
    if (variant === 'light-outlined') {
      return globalTheme.colors.background.main;
    }

    return globalTheme.colors.text.prominent;
  }

  function getHoverBorderColor() {
    if (variant === 'light-outlined') {
      return globalTheme.colors.absolute.black;
    }

    return variant === 'dark' ? globalTheme.colors.primary.main : globalTheme.colors.border.prominent;
  }

  return {
    buttonStyle,
    buttonIconStyle,
  };
}

export default useButtonStyle;
