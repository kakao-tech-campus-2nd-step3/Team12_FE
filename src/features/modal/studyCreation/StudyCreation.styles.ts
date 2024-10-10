import { css } from '@emotion/react';
import colorTheme from '@/styles/colors';
import corners from '@/styles/corners';

export default function useStudyCreationStyle() {
  const avatarStyle = css`
    border: 2px solid ${colorTheme.absolute.black};
  `;

  const selectPhotoButtonStyle = css`
    border: none;
    color: ${colorTheme.primary.main};
    &:hover {
      color: ${colorTheme.primary.darken};
      background-color: transparent;
    }
  `;
  const creationButtonStyle = css`
  width: 100%;
  background-color: ${colorTheme.primary.darken};
  color: ${colorTheme.absolute.white};
  border: none;
  border-radius: ${corners.medium};
  &:hover {
    background-color: ${colorTheme.absolute.black};
    color: ${colorTheme.primary.main};
  }
`;

  const textStyle = css`
  color: ${colorTheme.text.subtle};
  `;
  return {
    avatarStyle, selectPhotoButtonStyle, creationButtonStyle, textStyle,
  };
}
