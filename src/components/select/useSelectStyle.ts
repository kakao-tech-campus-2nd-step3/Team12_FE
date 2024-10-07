import { css, useTheme } from '@emotion/react';

function useSelectStyle() {
  const theme = useTheme();

  const selectContainerStyle = (
    css`
      position: relative;
    `
  );

  const selectStyle = (
    css`
      outline: none;
      border: 1px solid ${theme.colors.border.subtle};
      border-radius: ${theme.corners.small};
      height: 30px;
      padding: 5px;
      &::after {
        color: ${theme.colors.text.subtle};
      }
    `
  );

  const selectIconStyle = (
    css`
      position: absolute;
    `
  );

  return { selectIconStyle, selectContainerStyle, selectStyle };
}

export default useSelectStyle;
