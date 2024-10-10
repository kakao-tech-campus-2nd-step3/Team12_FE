import { DefaultPaddedContainer } from "@/components/container/variants";
import Modal from "@/components/modal";
import Logo from "@/assets/Logo.svg"
import { Paragraph } from "@/components/text";
import Button from "@/components/button";
import Grid from "@/components/grid";
import BubbleIcon from "@/assets/icons/bubble.svg";
import { useLoginModalStyles } from "./LoginModal.styles";
import GithubIcon from '@/assets/github.svg';
import InstagramIcon from '@/assets/instagram.svg';
import BlogIcon from '@/assets/blog.svg';

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

function LoginModal({open, onClose}: LoginModalProps) {
	const { kakaoLoginButtonStyle, iconButtonBaseStyle} = useLoginModalStyles();
	return (
		<Modal open={open} onClose={onClose}>
			<DefaultPaddedContainer>
				<img src={Logo} alt="Logo" />
				<Paragraph.Medium>함께하면 더 강해진다! <br /> Ditto와 함께 시작하세요.</Paragraph.Medium>
				<Paragraph.Small>sns로 5초만에 시작하기</Paragraph.Small>
				<Button icon={BubbleIcon} css={kakaoLoginButtonStyle}>카카오 계정으로 로그인</Button>
				<Grid columns={3} style={{placeItems: 'center'}}>
					<Button css={iconButtonBaseStyle} style={{backgroundImage: `url(${GithubIcon})`}}></Button>
					<Button css={iconButtonBaseStyle} style={{backgroundImage: `url(${InstagramIcon})`}}></Button>
					<Button css={iconButtonBaseStyle} style={{backgroundImage: `url(${BlogIcon})`}}></Button>
				</Grid>
			</DefaultPaddedContainer>
		</Modal>
	);
}

export default LoginModal;