import { css } from '@emotion/react';
import useTheme from '@hooks/useTheme';

function useTextAreaStyle() {
  const theme = useTheme();
  const textAreaStyle = css`
    padding: 10px;
    border-radius: ${theme.corners.small};
    border: 1px solid ${theme.colors.border.subtle};
    width: 100%;
    box-sizing: border-box;
    font-size: 15px;
    
    &:focus {
      outline: none;
      border: 1px solid ${theme.colors.border.prominent}
    }
  `;

  return {
    textAreaStyle,
  };
}

export default useTextAreaStyle;
