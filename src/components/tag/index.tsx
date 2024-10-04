import { MouseEventHandler, ReactNode } from 'react';
import DynamicIcon from '@components/internal/dynamic-icon';
import { CSSObject } from '@emotion/react';
import CloseButton from '@assets/icons/x.svg?react';
import useTagStyle from '@components/tag/useTagStyle';
import useTheme from '@hooks/useTheme';
import { TagTheme } from '@/types';

interface TagProps {
  icon?: ReactNode | string;
  children?: ReactNode;
  css?: CSSObject;
  tagTheme?: TagTheme;
  enableClose?: boolean;
  onClose?: MouseEventHandler<HTMLImageElement>;
}

function Tag({
  icon, css, children, tagTheme = 'default', enableClose, onClose,
}: TagProps) {
  const {
    tagContainerStyle,
    tagIconStyle,
    tagStyle,
    closeIconContainerStyle,
  } = useTagStyle({
    enableClose, tagTheme,
  });
  const theme = useTheme();

  if (!enableClose && !!onClose) {
    throw new Error('Cannot add onClose listener while the value of value is falsy');
  }

  return (
    <div css={tagContainerStyle}>
      <div css={[tagStyle, css]}>
        <DynamicIcon icon={icon} css={tagIconStyle} />
        {children}
      </div>
      {
        enableClose
        && (
          <div css={[closeIconContainerStyle, css]} onClick={onClose} role="presentation">
            <CloseButton stroke={tagTheme === 'default' ? theme.colors.text.moderate : theme.colors.primary.main} />
          </div>
        )
      }
    </div>
  );
}

export default Tag;
