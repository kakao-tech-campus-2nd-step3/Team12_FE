import Container from '@components/container';
import bannerImage from '@assets/banner-image.svg';
import bannerBackground from '@assets/banner-background.webp';
import logo from '@assets/logo-inset.svg';
import { useTheme } from '@emotion/react';
import { Paragraph } from '@components/text';
import { PrimarySpan } from '@components/span';
import Button from '@components/button';
import { rootWidth } from '@styles/length';
import { useContext, useState } from 'react';
import { MemberInfoContext } from '@providers/MemberInfoProvider';
import LoginModal from '@features/modal/login/LoginModal';
import StudyCreationModal
  from '@features/modal/studyCreation/StudyCreationModal';

function Banner() {
  return (
    <Container
      height="480px"
      cssOverride={{
        backgroundImage: `url("${bannerBackground}")`,
        backgroundSize: 'cover',
        position: 'relative',
        backgroundPosition: 'center right',
        backgroundAttachment: 'fixed',
      }}
    >
      <Container cssOverride={{
        position: 'absolute',
        background: 'rgba(0,0,0,0.6)',
        zIndex: 3,
        height: '480px',
      }}
      >
        <Container
          justify="flex-start"
          height="400px"
          cssOverride={{
            maxWidth: rootWidth,
            position: 'absolute',
          }}
        >
          <LeftSection />
          <img src={bannerImage} alt="banner-image" css={{ width: '300px', paddingRight: '150px' }} />
        </Container>
      </Container>
    </Container>
  );
}

function LeftSection() {
  const theme = useTheme();
  const { isLoggedIn } = useContext(MemberInfoContext);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isCreationModalOpen, setIsCreationModalOpen] = useState(false);
  function handleBannerButtonClick() {
    if (isLoggedIn) {
      setIsCreationModalOpen(true);
      return;
    }
    setIsLoginModalOpen(true);
  }
  return (
    <>
      <Container padding="0 0 0 200px" align="flex-start" direction="column">
        <h1 css={{ fontSize: '30px', fontWeight: 'bold', color: theme.colors.absolute.white }}>
          함께하는
          {' '}
          <PrimarySpan>경쟁</PrimarySpan>
        </h1>
        <img css={{ width: '180px', marginBottom: '8px' }} src={logo} alt="banner-logo" />
        <Paragraph variant="medium" color={theme.colors.absolute.white}>
          매번 파토나는 비효율적인 스터디, 질리셨나요?
        </Paragraph>
        <Paragraph variant="medium" color={theme.colors.absolute.white}>
          <PrimarySpan>함께 경쟁하며 성장하는 Ditto</PrimarySpan>
          로 시작해보세요
        </Paragraph>
        <Button css={{ marginTop: '16px' }} variant="primary" onClick={handleBannerButtonClick}>5초만에 시작하기</Button>
      </Container>
      {isLoginModalOpen && <LoginModal onClose={() => setIsLoginModalOpen(false)} open={isLoginModalOpen} />}
      {isCreationModalOpen && <StudyCreationModal onClose={() => setIsCreationModalOpen(false)} open={isCreationModalOpen} />}
    </>
  );
}

export default Banner;
