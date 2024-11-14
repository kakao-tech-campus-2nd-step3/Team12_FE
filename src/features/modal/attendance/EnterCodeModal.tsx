import { useContext } from 'react';
import Container from '@/components/container';
import Modal from '@/components/modal';
import { AttendanceInfoContext } from '@/providers/AttendanceInfoProvider';
import Text from '@/components/text';

interface EnterCodeModalProps {
  open: boolean;
  onClose: () => void;
}

export default function EnterCodeModal({ open, onClose }: EnterCodeModalProps) {
  const { code } = useContext(AttendanceInfoContext);
  return (
    <Modal open={open} onClose={onClose} width="387px" height="478px">
      <Text>{code}</Text>
      <Container>EnterCodeModal</Container>
    </Modal>
  );
}
