import Ranking from '@components/ranking';
import IceBreaking from '@components/iceBreaking';
import { DefaultPaddedContainer } from '@components/container/variants';
import Container from '@components/container';
import { css } from '@emotion/react';

function Banner() {
  return (
    <DefaultPaddedContainer>
      <Container
        padding="50px 0"
        cssOverride={css`
        gap: 30px;`}
      >
        <Ranking />
        <IceBreaking />
      </Container>
    </DefaultPaddedContainer>
  );
}
export default Banner;
