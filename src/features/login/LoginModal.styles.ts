import { css } from '@emotion/react';

export function useLoginModalStyles() {
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
  return { kakaoLoginButtonStyle };
}