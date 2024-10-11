import { MouseEventHandler, ReactNode } from 'react';
import DynamicIcon from '@components/internal/dynamic-icon';
import { CSSObject, useTheme } from '@emotion/react';
import CloseButton from '@assets/icons/x.svg?react';
import useTagStyle from '@components/tag/useTagStyle';
import { TagVariants } from '@/styles';

interface TagProps {
  icon?: ReactNode | string;
  children?: ReactNode;
  css?: CSSObject;
  variant?: TagVariants;
  enableClose?: boolean;
  onClose?: MouseEventHandler<HTMLImageElement>;
}

function Tag({
  icon, css, children, variant = 'default', enableClose, onClose,
}: TagProps) {
  const {
    tagContainerStyle,
    tagIconStyle,
    tagStyle,
    closeIconContainerStyle,
  } = useTagStyle({
    enableClose, variant,
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
            <CloseButton stroke={variant === 'default' ? theme.colors.text.moderate : theme.colors.primary.main} />
          </div>
        )
      }
    </div>
  );
}

export default Tag;
