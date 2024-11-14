/** @jsxImportSource @emotion/react */
import { css, keyframes, useTheme } from '@emotion/react';
import Container from '@components/container';
import { Paragraph } from '@components/text';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

function Spinner() {
  const theme = useTheme();
  const spinnerStyle = css`
    width: 30px;
    height: 30px;
    border: 5px solid ${theme.colors.border.subtle};
    border-top: 5px solid ${theme.colors.primary.main};
    border-radius: 50%;
    margin-bottom: 15px;
    animation: ${spin} 1s cubic-bezier(0.42, 0, 0.58, 1) infinite;
`;
  return (
    <Container direction="column" padding="40px 0">
      <div css={spinnerStyle} />
      <Paragraph variant="small" color={theme.colors.text.moderate}>로드 중</Paragraph>
    </Container>
  );
}

export default Spinner;
