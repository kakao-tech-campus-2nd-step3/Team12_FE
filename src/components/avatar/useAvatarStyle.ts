import { css, useTheme } from '@emotion/react';
import { type AvatarSize } from '@components/avatar/index';

interface UseAvatarStyleProps {
  size?: AvatarSize;
  bordered?: boolean;
}

function useAvatarStyle({ size, bordered }: UseAvatarStyleProps) {
  const theme = useTheme();

  const avatarStyle = css`
    border-radius: ${theme.corners.round};
    width: ${getAvatarLength(size)};
    height: ${getAvatarLength(size)};
    border: ${bordered ? `2px solid ${theme.colors.absolute.black};` : 'none'};
  `;

  return { avatarStyle };
}

function getAvatarLength(size?: AvatarSize) {
  if (!size || size === 'medium') {
    return '60px';
  }
  if (size === 'large') {
    return '80px';
  }
  return '30px';
}

export default useAvatarStyle;
