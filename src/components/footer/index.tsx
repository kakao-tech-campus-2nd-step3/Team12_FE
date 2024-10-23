import Container from '@components/container';
import { css } from '@emotion/react';
import logo from '@assets/logo.svg';

function Footer() {
  const dividerStyle = css`
    color: black;
    font-size: 15px;
  `;
  return (
    <Container
      justify="space-between"
      padding="30px 70px"
      height="150px"
      cssOverride={css`background-color: #f8f8f8;`}
    >
      <img src={logo} alt="logo" css={css`width: 50px;`} />
      <Container width="auto" gap="30px">
        <div css={dividerStyle}>
          kakaotechcampus
        </div>
        <div css={dividerStyle}>
          Team 12
        </div>
      </Container>
    </Container>
  );
}

export default Footer;
