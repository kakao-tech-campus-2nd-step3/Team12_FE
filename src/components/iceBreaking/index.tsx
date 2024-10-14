import Container from '@components/container';
import { css } from '@emotion/react';

function IceBreaking() {
  return (
    <Container
      width="40%"
      height="250px"
      cssOverride={css`
          background-color: aqua;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      `}
    >
      IceBreaking
    </Container>
  );
}
export default IceBreaking;
