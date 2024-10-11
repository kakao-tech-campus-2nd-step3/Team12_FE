import { css, useTheme } from '@emotion/react';

function useSwitchStyle() {
  const theme = useTheme();
  const switchInputStyle = (
    css`
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      margin: 0;
      display: block;
    `
  );

  const switchWrapperStyle = (
    css`
      width: 42px;
      height: 24px;
      border: 1px solid ${theme.colors.border.subtle};
      background-color: transparent;
      border-radius: ${theme.corners.round};
      position: relative;
      transition: 0.2s;
      
      .switch-checked + & {
        background-color: ${theme.colors.primary.main};
        border: 1px solid transparent;
      } 
    `
  );

  const switchCircleStyle = (
    css`
      background-color: ${theme.colors.absolute.black};
      border-radius: 100%;
      width: 14px;
      height: 14px;
      position: absolute;
      top: 5px;
      left: 5px;
      transition: all 0.2s ease-in-out;
      
      .switch-checked + div > & {
        left: 23px;
        transition: all 0.2s ease-in-out;
      }
    `
  );

  return {
    switchInputStyle,
    switchWrapperStyle,
    switchCircleStyle,
  };
}

export default useSwitchStyle;
