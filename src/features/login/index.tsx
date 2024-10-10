import Container from '@/components/container/index';
import Modal from '@/components/modal';
import Logo from '@/assets/Logo.svg';
import { Paragraph } from '@/components/text';
import Button from '@/components/button';
import Grid from '@/components/grid';
import BubbleIcon from '@/assets/icons/bubble.svg';
import useLoginModalStyles from './LoginModal.styles';
import GithubIcon from '@/assets/github.svg';
import InstagramIcon from '@/assets/instagram.svg';
import BlogIcon from '@/assets/blog.svg';
import Spacing from '@/components/spacing';
import { DefaultPaddedContainer } from '@/components/container/variants';

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

function LoginModal({ open, onClose }: LoginModalProps) {
  const { kakaoLoginButtonStyle, iconButtonBaseStyle } = useLoginModalStyles();
  return (
    <DefaultPaddedContainer>
      <Modal open={open} onClose={onClose} width="387px" height="478px">

        <Container padding="82px 30px" direction="column">
          <img src={Logo} alt="Logo" />
          <Spacing height={12} />
          <Paragraph.Medium>함께하면 더 강해진다!</Paragraph.Medium>
          <Paragraph.Medium>Ditto와 함께 시작하세요.</Paragraph.Medium>
        </Container>

        <Container padding="16px 30px" direction="column">
          <Paragraph.Small weight="lighter">sns로 5초만에 시작하기</Paragraph.Small>
          <Spacing height={12} />
          <Button icon={BubbleIcon} css={kakaoLoginButtonStyle}>카카오 계정으로 로그인</Button>
        </Container>

        <Container padding="0 80px" direction="column">
          <Grid columns={3} gap={24} style={{ placeItems: 'center' }}>
            <Button css={iconButtonBaseStyle} style={{ backgroundImage: `url(${GithubIcon})` }} />
            <Button css={iconButtonBaseStyle} style={{ backgroundImage: `url(${InstagramIcon})` }} />
            <Button css={iconButtonBaseStyle} style={{ backgroundImage: `url(${BlogIcon})` }} />
          </Grid>
        </Container>
      </Modal>
    </DefaultPaddedContainer>
  );
}

export default LoginModal;
