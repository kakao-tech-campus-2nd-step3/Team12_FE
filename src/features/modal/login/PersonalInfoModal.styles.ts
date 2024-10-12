import { css } from '@emotion/react';
import colorTheme from '@/styles/colors';
import corners from '@/styles/corners';

export default function usePersonInfoModaStyles() {
  const selectPhotoButtonStyle = css`
    border: none;
    color: ${colorTheme.primary.main};
    &:hover {
      color: ${colorTheme.primary.darken};
      background-color: transparent;
    }
  `;

  const linkTextStyle = css`
    color: ${colorTheme.primary.main};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  `;

  const textStyle = css`
    color: ${colorTheme.text.subtle};
  `;

  return {
    selectPhotoButtonStyle, linkTextStyle, textStyle,
  };
}
