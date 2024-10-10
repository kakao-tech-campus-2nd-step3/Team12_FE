import Container from '@components/container';
import Button from '@components/button';
import Avatar from '@components/avatar';
import { css } from '@emotion/react';
import logo from '@assets/logo.svg';

function Header() {
  return (
    <Container
      justify="space-between"
      padding="0 15px"
      cssOverride={css`box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
      box-sizing: border-box`}
    >
      <img
        src={logo}
        alt="logo"
        css={css`
               width: 80px;
           `}
      />
      <Container width="auto">
        <Button>
          스터디 생성하기
        </Button>
        <Avatar />
      </Container>
    </Container>
  );
}

export default Header;
