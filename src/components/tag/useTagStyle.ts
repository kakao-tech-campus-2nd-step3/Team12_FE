import { css } from '@emotion/react';
import useTheme from '@hooks/useTheme';
import { TagTheme } from '@/types';

interface UseTagStyleProps {
  enableClose?: boolean;
  tagTheme?: TagTheme;
}

function useTagStyle({ enableClose, tagTheme }: UseTagStyleProps) {
  const theme = useTheme();
  const tagStyle = (
    css`
      padding: 6px 16px;
      box-sizing: border-box;
      display: flex;
      width: fit-content;
      height: fit-content;
      align-items: center;
      gap: 8px;
      flex-grow: 0;
      border-radius: ${theme.corners.round} ${getRightCorner()} ${getRightCorner()} ${theme.corners.round};
      border: 2px solid ${getBorderStyle()};
      background-color: ${getBackgroundColor()};
      color: ${getTextColor()};
      font-size: 15px;
    `
  );

  const tagContainerStyle = css`
    display: flex;
    gap: 3px;
    width: fit-content;
    height: fit-content;
  `;

  const closeIconContainerStyle = (
    css`
      border-radius: ${theme.corners.small} ${theme.corners.round} ${theme.corners.round} ${theme.corners.small};
      border: 2px solid ${getBorderStyle()};
      display: flex;
      align-items: center;
      padding: 7px 9px 7px 7px;
      width: fit-content;
      height: fit-content;
      cursor: pointer;
      user-select: none;
      background-color: ${getBackgroundColor()};
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
    return tagTheme === 'primary' ? 'transparent' : theme.colors.border.subtle;
  }

  function getBackgroundColor() {
    return tagTheme === 'primary' ? theme.colors.primary.passive : 'transparent';
  }

  function getTextColor() {
    return tagTheme === 'primary' ? theme.colors.primary.main : theme.colors.text.prominent;
  }

  return {
    tagStyle,
    tagIconStyle,
    tagContainerStyle,
    closeIconContainerStyle,
  };
}

export default useTagStyle;
