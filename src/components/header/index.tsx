import Container from '@components/container';
import Button from '@components/button';
import Avatar from '@components/avatar';
import { css } from '@emotion/react';

function Header() {
  return (
    <Container
      justify="space-between"
      overrideCss={css`box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.2);`}
    >
      <img
        src="src/assets/logo.svg"
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
