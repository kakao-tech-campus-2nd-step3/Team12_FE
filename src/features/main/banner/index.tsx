import Ranking from 'features/main/ranking';
import IceBreaking from 'features/main/iceBreaking';
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
        <IceBreaking />
      </Container>
    </DefaultPaddedContainer>
  );
}
export default Banner;
