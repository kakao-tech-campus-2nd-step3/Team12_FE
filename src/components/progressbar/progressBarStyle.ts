import { css } from '@emotion/react';

function progressBarStyle() {
  const progressBarContainerStyle = css`
    align-items: center;
    gap: 10px;
  `;

  const progressWrapperStyle = (width: string) => css`
    width: ${width};
    flex: 1;
    height: 12px;
    background-color: transparent;
    border: 1px solid #e6e6e6;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    padding: 3px;
  `;

  const progressStyle = (progress: number) => css`
    display: flex;
    height: 50%;
    justify-content: center;
    align-items: center;
    width: calc(${progress}% - 6px);
    background-color: #48cfcf;
    border-radius: 4px;
    position: absolute;
    top: 25%;
  `;

  const textWrapperStyle = (width: string) => css`
    width: ${width};
    display: flex;
    justify-content: space-between;
    padding: 4px;
    color: #71787F;
    font-size: 11px;
  `;
  return {
    progressBarContainerStyle, progressWrapperStyle, progressStyle, textWrapperStyle,
  };
}

export default progressBarStyle;
