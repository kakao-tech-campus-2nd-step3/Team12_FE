import Container from '@components/container';
import { css } from '@emotion/react';
import theme from '@styles/theme';

export function InviteBtn() {
  return (
    <Container
      direction="column"
      height="100%"
      padding="20px 20px 20px 26px"
      cssOverride={css`
        border-radius: ${theme.corners.big};
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        max-height: 290px;
        background-color: #E1E1E1;
      `}
    >
      <div css={css`
        font-size: 70px;
        font-weight: lighter;
        color: #ACACAC;`}
      >
        +
      </div>
      <div css={css`
        color: #B1B1B1;`}
      >
        스터디원 초대하기
      </div>
    </Container>
  );
}
