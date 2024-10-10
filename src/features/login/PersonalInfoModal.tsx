import { DefaultPaddedContainer } from "@/components/container/variants";
import Modal from "@/components/modal";

interface PersonalInfoModalProps {
  open: boolean;
  onClose: () => void;
}

export function personalInfoModal({ open, onClose }: PersonalInfoModalProps) {
  return (
    <DefaultPaddedContainer>
      <Modal open={open} onClose={onClose} width="447px" height="697px">
        <h1>PersonalInfoModal</h1>
      </Modal>
    </DefaultPaddedContainer>
  );
}