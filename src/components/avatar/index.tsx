import { ImgHTMLAttributes } from 'react';
import useAvatarStyle from '@components/avatar/useAvatarStyle';
import { CSSObject } from '@emotion/react';
import defaultAvatar from '@assets/icons/default-avatar.svg';

export type AvatarSize = 'small' | 'medium' | 'large';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
  css?: CSSObject;
  size?: AvatarSize;
  bordered?: boolean;
}

function Avatar({
  src, alt, css, size, bordered = false, ...rest
}: AvatarProps) {
  const { avatarStyle } = useAvatarStyle({ size, bordered });
  return (
    <img src={src || defaultAvatar} css={[avatarStyle, css]} alt={alt || 'avatar'} {...rest} />
  );
}

export default Avatar;
