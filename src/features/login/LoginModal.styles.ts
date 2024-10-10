import { css } from '@emotion/react';

export function useLoginModalStyles() {
  const iconButtonBaseStyle = css`
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 0px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  `;

  const kakaoLoginButtonStyle = css`
    width: 100%;
    height: 42px;
    border-radius: 7px;
    background-color: #FFEB00;
    color: #000000;
    border: none;

    &:hover {
      background-color: #FFEB00;
      color: #000000;
    }
  `;

  return { kakaoLoginButtonStyle, iconButtonBaseStyle };
}
