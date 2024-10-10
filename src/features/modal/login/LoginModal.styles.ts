import { css } from '@emotion/react';

export default function useLoginModalStyles() {
  const iconButtonBaseStyle = css`
    width: 30px;
    height: 35px;
    border: none;
    border-radius: 0px;
    background-color: transparent;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  `;

  const kakaoLoginButtonStyle = css`
    width: 220px;
    height: 42px;
    border-radius: 7px;
    background-color: #FFEB00;
    color: #000000;
    font-size: 14px;
    border: none;

    &:hover {
      background-color: #FFEB00;
      color: #000000;
    }
  `;

  return { kakaoLoginButtonStyle, iconButtonBaseStyle };
}
