import { DefaultPaddedContainer } from "@/components/container/variants";
import Modal from "@/components/modal";
import Logo from "@/assets/Logo.svg"
import { Paragraph } from "@/components/text";
import Button from "@/components/button";
import Grid from "@/components/grid";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

function LoginModal({open, onClose}: LoginModalProps) {
	return (
		<Modal open={open} onClose={onClose}>
			<DefaultPaddedContainer>
				<img src={Logo} alt="Logo" />
				<Paragraph.Medium>함께하면 더 강해진다! <br /> Ditto와 함께 시작하세요.</Paragraph.Medium>
				<Paragraph.Small>sns로 5초만에 시작하기</Paragraph.Small>
				<Button variant="default">카카오 계정으로 로그인</Button>
				<Grid columns={3}>
					<Button variant="default">깃허브</Button>
					<Button variant="default">인스타</Button>
					<Button variant="default">블로그</Button>
				</Grid>
			</DefaultPaddedContainer>
		</Modal>
	);
}

export default LoginModal;