import useTheme from '@hooks/useTheme';
import { css } from '@emotion/react';
import { ButtonTheme } from '@/types';

interface UseButtonStyleProps {
  buttonTheme?: ButtonTheme;
}

function useButtonStyle({ buttonTheme = 'default' }: UseButtonStyleProps) {
  const globalTheme = useTheme();

  const buttonStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    padding: 10px 18px;
    border-radius: 100px;
    color: ${buttonTheme === 'dark' ? globalTheme.colors.primary.main : globalTheme.colors.text.prominent};
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
    if (buttonTheme === 'light-outlined') {
      return 'transparent';
    }

    if (buttonTheme === 'dark') {
      return globalTheme.colors.text.prominent;
    }

    return globalTheme.colors.background.main;
  }

  function getBorderStyle() {
    if (buttonTheme === 'light-outlined') {
      return `2px solid ${globalTheme.colors.absolute.black}`;
    }

    const baseStyle = '1px solid ';

    return baseStyle + (buttonTheme === 'dark' ? 'transparent' : globalTheme.colors.text.subtle);
  }

  function getHoverBackgroundColor() {
    if (buttonTheme === 'light-outlined') {
      return globalTheme.colors.text.prominent;
    }

    if (buttonTheme === 'dark') {
      return globalTheme.colors.primary.main;
    }

    return globalTheme.colors.background.darken;
  }

  function getHoverColor() {
    if (buttonTheme === 'light-outlined') {
      return globalTheme.colors.background.main;
    }

    return globalTheme.colors.text.prominent;
  }

  function getHoverBorderColor() {
    if (buttonTheme === 'light-outlined') {
      return globalTheme.colors.absolute.black;
    }

    return buttonTheme === 'dark' ? globalTheme.colors.primary.main : globalTheme.colors.border.prominent;
  }

  return {
    buttonStyle,
    buttonIconStyle,
  };
}

export default useButtonStyle;
