import Modal from '@/components/modal';

interface EnterCodeModalProps {
  open: boolean;
  onClose: () => void;
}

export default function EnterCodeModal({ open, onClose }: EnterCodeModalProps) {
  return (
    <Modal open={open} onClose={onClose} width="387px" height="478px">
      <div>EnterCodeModal</div>
    </Modal>
  );
}
