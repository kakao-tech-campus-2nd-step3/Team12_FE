import { css, useTheme } from '@emotion/react';

function useCheckboxStyle() {
  const theme = useTheme();

  const checkboxStyle = (
    css`
      width: 18px;
      height: 18px;
      accent-color: ${theme.colors.primary.main};
      border: 2px solid ${theme.colors.border.prominent};
    `
  );

  return {
    checkboxStyle,
  };
}

export default useCheckboxStyle;
