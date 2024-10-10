import { DefaultPaddedContainer } from "@/components/container/variants";
import Modal from "@/components/modal";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

function LoginModal({open, onClose}: LoginModalProps) {
	return (
		<Modal open={open} onClose={onClose}>
			<DefaultPaddedContainer>
				<h1>로그인</h1>
				<p>로그인 내용...</p>
			</DefaultPaddedContainer>
		</Modal>
	);
}

export default LoginModal;