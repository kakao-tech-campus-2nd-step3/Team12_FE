import { css } from '@emotion/react';
import colorTheme from '@/styles/colors';

export default function useStudyCreationStyle() {
  const textStyle = css`
    color: ${colorTheme.text.subtle};
  `;
  return {
    textStyle,
  };
}
