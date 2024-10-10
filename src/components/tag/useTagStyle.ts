import { css, useTheme } from '@emotion/react';
import { TagVariants } from '@/styles';

interface UseTagStyleProps {
  enableClose?: boolean;
  variant?: TagVariants;
}

function useTagStyle({ enableClose, variant }: UseTagStyleProps) {
  const theme = useTheme();
  const tagStyle = (
    css`
      padding: 0 16px;  
      box-sizing: border-box;
      display: flex;
      width: fit-content;
      height: 30px;
      align-items: center;
      gap: 8px;
      flex-grow: 0;
      border-radius: ${theme.corners.round} ${getRightCorner()} ${getRightCorner()} ${theme.corners.round};
      border: 1px solid ${getBorderStyle()};
      background-color: ${getBackgroundColor()};
      color: ${getTextColor()};
      font-size: 15px;
    `
  );

  const tagContainerStyle = css`
    display: flex;
    gap: 3px;
  `;

  const closeIconContainerStyle = (
    css`
      border-radius: ${theme.corners.small} ${theme.corners.round} ${theme.corners.round} ${theme.corners.small};
      border: 1px solid ${getBorderStyle()};
      display: flex;
      align-items: center;
      padding: 0 9px 0 7px;
      width: fit-content;
      height: 30px;
      cursor: pointer;
      user-select: none;
      background-color: ${getBackgroundColor()};
      box-sizing: border-box;
    `
  );

  const tagIconStyle = css`
    width: 16px;
    height: 16px;
  `;

  function getRightCorner() {
    return enableClose ? theme.corners.small : theme.corners.round;
  }

  function getBorderStyle() {
    return variant === 'primary' ? 'transparent' : theme.colors.border.prominent;
  }

  function getBackgroundColor() {
    return variant === 'primary' ? theme.colors.primary.passive : 'transparent';
  }

  function getTextColor() {
    return variant === 'primary' ? theme.colors.primary.main : theme.colors.text.prominent;
  }

  return {
    tagStyle,
    tagIconStyle,
    tagContainerStyle,
    closeIconContainerStyle,
  };
}

export default useTagStyle;
