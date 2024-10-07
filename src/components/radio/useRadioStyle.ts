import { css, useTheme } from '@emotion/react';

function useRadioStyle() {
  const theme = useTheme();

  const radioStyle = (
    css`
      width: 18px;
      height: 18px;
      border: 2px solid ${theme.colors.border.prominent};
      border-radius: ${theme.corners.round};
      position: relative;
      appearance: none;
      outline: none;
      
      &::after {
        content: '';
        width: 12px;
        height: 12px;
        background-color: ${theme.colors.primary.main};
        position: absolute;
        border-radius: ${theme.corners.round};
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
      }
      
      &:checked {
        border: 2px solid ${theme.colors.primary.main};
      }
      
      &:checked::after {
        opacity: 1;
      }
    `
  );

  return {
    radioStyle,
  };
}

export default useRadioStyle;
