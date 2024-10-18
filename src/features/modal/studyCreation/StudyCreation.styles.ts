import { css } from '@emotion/react';
import colorTheme from '@/styles/colors';

export default function useStudyCreationStyle() {
  const selectPhotoButtonStyle = css`
    border: none;
    color: ${colorTheme.primary.main};
    &:hover {
      color: ${colorTheme.primary.darken};
      background-color: transparent;
    }
  `;

  const textStyle = css`
    color: ${colorTheme.text.subtle};
  `;
  return {
    selectPhotoButtonStyle, textStyle,
  };
}
