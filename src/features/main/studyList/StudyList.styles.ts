import { css, useTheme } from '@emotion/react';

// eslint-disable-next-line import/prefer-default-export
export function useStudyItemStyles() {
  const theme = useTheme();
  const containerStyle = css`
    border-radius: ${theme.corners.big};
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    max-height: 290px;
  `;
  const dividerStyle = css`
    width: 100%;
    border: 1px ${theme.colors.border.prominent} solid;
    margin: 0;
  `;
  return { containerStyle, dividerStyle };
}
