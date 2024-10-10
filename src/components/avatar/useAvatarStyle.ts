import { css, useTheme } from '@emotion/react';

function useAvatarStyle() {
  const theme = useTheme();

  const avatarStyle = css`
    border-radius: ${theme.corners.round};
    width: 60px;
    height: 60px;
  `;

  return { avatarStyle };
}

export default useAvatarStyle;
