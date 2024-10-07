import { css, useTheme } from '@emotion/react';
import { ReactNode } from 'react';

interface UseInputStyleProps {
  enableToggleShow?: boolean;
  icon?: string | ReactNode;
}

function useInputStyle({ enableToggleShow, icon }: UseInputStyleProps) {
  const theme = useTheme();

  const inputStyle = (
    css`
      padding: 10px ${enableToggleShow ? '34px' : '10px'} 10px ${icon ? '34px' : '10px'};
      border-radius: ${theme.corners.small};
      border: 1px solid ${theme.colors.border.subtle};
      width: 100%;
      box-sizing: border-box;
      font-size: 15px;
      
      &:focus {
        outline: none;
        border: 1px solid ${theme.colors.border.prominent}
      }
    `
  );

  function inputIconStyle(isToggleShowIcon?: boolean) {
    return (
      css`
        position: absolute;
        left: ${isToggleShowIcon ? 'auto' : '10px'};
        right: ${isToggleShowIcon ? '10px' : 'auto'};
        top: 10px;
        width: 16px;
        height: 16px;
        cursor: ${isToggleShowIcon ? 'pointer' : 'default'};
      `
    );
  }

  const inputContainerStyle = css`
    position: relative;
  `;

  return {
    inputStyle,
    inputContainerStyle,
    inputIconStyle,
  };
}

export default useInputStyle;
