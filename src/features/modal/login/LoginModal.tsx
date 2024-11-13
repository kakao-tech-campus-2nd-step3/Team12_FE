import Logo from '@assets/logo.svg';
import Container from '@/components/container/index';
import Modal from '@/components/modal';
import { Paragraph } from '@/components/text';
import Button from '@/components/button';
import Grid from '@/components/grid';
import BubbleIcon from '@/assets/icons/bubble.svg';
import useLoginModalStyles from './LoginModal.styles';
import GithubIcon from '@/assets/github.svg';
import InstagramIcon from '@/assets/instagram.svg';
import BlogIcon from '@/assets/blog.svg';
import Spacing from '@/components/spacing';

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

function LoginModal({ open, onClose }: LoginModalProps) {
  const { kakaoLoginButtonStyle, iconButtonBaseStyle } = useLoginModalStyles();
  const handleLoginClick = () => {
    window.location.href = `${import.meta.env.VITE_BASE_URL}/api/oauth2/authorization/kakao`;
  };
  return (
    <Modal open={open} onClose={onClose} width="387px" height="478px">
      <Container padding="82px 30px" direction="column">
        <img src={Logo} alt="Logo" />
        <Spacing height={12} />
        <Paragraph variant="medium">함께하면 더 강해진다!</Paragraph>
        <Paragraph variant="medium">Ditto와 함께 시작하세요.</Paragraph>
      </Container>

      <Container padding="16px 30px" direction="column">
        <Paragraph variant="small" weight="lighter">sns로 5초만에 시작하기</Paragraph>
        <Spacing height={12} />
        <Button
          icon={BubbleIcon}
          css={kakaoLoginButtonStyle}
          onClick={handleLoginClick}
        >
          카카오 계정으로 로그인
        </Button>
      </Container>

      <Container padding="0 80px" direction="column">
        <Grid columns={3} gap={24} style={{ placeItems: 'center' }}>
          <Button css={iconButtonBaseStyle} style={{ backgroundImage: `url(${GithubIcon})` }} />
          <Button css={iconButtonBaseStyle} style={{ backgroundImage: `url(${InstagramIcon})` }} />
          <Button css={iconButtonBaseStyle} style={{ backgroundImage: `url(${BlogIcon})` }} />
        </Grid>
      </Container>
    </Modal>
  );
}

export default LoginModal;
