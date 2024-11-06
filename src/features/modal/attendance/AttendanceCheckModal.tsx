import Modal from "@/components/modal";

interface AcceptInvitationProps {
	open: boolean;
	onClose: () => void;
}

export default function AttendanceCheckModal({open, onClose}: AcceptInvitationProps) {
	return (
		<Modal open={open} onClose={onClose} width="447px">
			<div>AttendanceCheckModal</div>
		</Modal>
	);
}