import { css, useTheme } from '@emotion/react';

function useLabelStyle() {
  const theme = useTheme();
  const labelStyle = (
    css`
      font-size: 13px;
      color: ${theme.colors.text.moderate};
      display: block;
      padding-bottom: 5px;
      padding-top: 0;
    `
  );

  return { labelStyle };
}

export default useLabelStyle;
