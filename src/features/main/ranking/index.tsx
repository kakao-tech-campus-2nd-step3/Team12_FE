import Container from '@components/container';
import { css } from '@emotion/react';

function Ranking() {
  return (
    <Container
      width="60%"
      height="250px"
      cssOverride={css`
        background-color: bisque;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      `}
    >
      Ranking
    </Container>
  );
}
export default Ranking;
