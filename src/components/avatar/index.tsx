import { ImgHTMLAttributes } from 'react';
import useAvatarStyle from '@components/avatar/useAvatarStyle';
import { CSSObject } from '@emotion/react';
import defaultAvatar from '@assets/icons/default-avatar.svg';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
  css?: CSSObject;
}

function Avatar({
  src, alt, css, ...rest
}: AvatarProps) {
  const { avatarStyle } = useAvatarStyle();
  return (
    <img src={src || defaultAvatar} css={[avatarStyle, css]} alt={alt || 'avatar'} {...rest} />
  );
}

export default Avatar;
