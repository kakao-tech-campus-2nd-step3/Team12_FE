import { css, useTheme } from '@emotion/react';

export function useStudyItemStyles() {
  const theme = useTheme();
  const containerStyle = css`
    border-radius: ${theme.corners.big};
    border: ${theme.colors.border.prominent} 1px solid;
    max-height: 290px;
    background-color: ${theme.colors.background.main};
    transition-duration: 0.2s;
    cursor: pointer;
    &:hover {
      transform: translateY(-5px);
    }
  `;
  const dividerStyle = css`
    width: 100%;
    border: 1px ${theme.colors.border.prominent} solid;
    margin: 0;
  `;
  return { containerStyle, dividerStyle };
}
