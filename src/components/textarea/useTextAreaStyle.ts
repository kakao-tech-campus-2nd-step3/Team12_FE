import { css, useTheme } from '@emotion/react';
import { type TextareaProps } from '@components/textarea/index';

function useTextAreaStyle({ resize }: Pick<TextareaProps, 'resize'>) {
  const theme = useTheme();
  const textAreaStyle = css`
    padding: 10px;
    border-radius: ${theme.corners.small};
    border: 1px solid ${theme.colors.border.subtle};
    width: 100%;
    box-sizing: border-box;
    font-size: 15px;
    resize: ${resize};
    
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
