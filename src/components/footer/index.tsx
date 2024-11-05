import Container from '@components/container';
import { css } from '@emotion/react';
import logo from '@assets/logo-inset.svg';
import { rootWidth } from '@styles/length';

function Footer() {
  const dividerStyle = css`
    color: #d3d3d3;
    font-size: 15px;
  `;
  return (
    <Container
      height="150px"
      cssOverride={css`background-color: #2c2c2c;`}
    >
      <Container
        width={rootWidth}
        justify="flex-end"
        padding="20px"
        gap="15px"
      >
        <Container width="auto" direction="column" gap="8px" align="flex-end">
          <div css={dividerStyle}>
            &copy; 2024, Kakao Tech campus
          </div>
          <div css={dividerStyle}>
            Team 12
          </div>
        </Container>
        <img src={logo} alt="logo" css={css`width: 80px;`} />
      </Container>
    </Container>
  );
}

export default Footer;
