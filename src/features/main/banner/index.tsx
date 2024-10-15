import Ranking from '@components/ranking';
import IceBreaking from '@components/iceBreaking';
import { DefaultPaddedContainer } from '@components/container/variants';
import Container from '@components/container';

function Banner() {
  return (
    <DefaultPaddedContainer>
      <Container
        padding="50px 0"
        gap="30px"
      >
        <Ranking />
        s
        <IceBreaking />
      </Container>
    </DefaultPaddedContainer>
  );
}
export default Banner;
