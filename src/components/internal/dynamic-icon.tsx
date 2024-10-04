import { ReactNode } from 'react';
import { CSSObject } from '@emotion/react';

interface IconProps {
  icon?: string | ReactNode;
  css?: CSSObject;
}

function DynamicIcon({ icon, css }: IconProps) {
  if (!icon) {
    return null;
  }

  if (typeof icon === 'string') {
    return <img src={icon} alt="button icon" css={css} />;
  }

  return icon;
}

export default DynamicIcon;
