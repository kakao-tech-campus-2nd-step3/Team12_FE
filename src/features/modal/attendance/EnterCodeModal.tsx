import { useContext } from 'react';
import Container from '@/components/container';
import Modal from '@/components/modal';
import { AttendanceInfoContext } from '@/providers/AttendanceInfoProvider';
import Text, { Heading } from '@/components/text';
import Input from '@/components/input';
import Button from '@/components/button';

interface EnterCodeModalProps {
  open: boolean;
  onClose: () => void;
}

export default function EnterCodeModal({ open, onClose }: EnterCodeModalProps) {
  const { code, checkAttend } = useContext(AttendanceInfoContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    checkAttend();
  };

  return (
    <Modal open={open} onClose={onClose} width="387px" height="478px">
      <Container padding="30px" direction="column" align="flex-start" gap="20px">
        <Heading.H1 weight="bold">출석 체크</Heading.H1>
        <Container direction="column" gap="5px" align="flex-start">
          <Text fontSize="15px">출석 코드를 입력해주세요.</Text>
          <Text fontSize="15px">출석 코드는 스터디장에게 받을 수 있어요.</Text>
        </Container>
        <Container gap="20px">
          <form onSubmit={handleSubmit}>
            <Input placeholder="출석 코드" type="text" />
            <Button
              variant="primary"
              css={{
                borderRadius: '4px',
              }}
              type="submit"
            >
              확인
            </Button>
          </form>
        </Container>
        <Text>{code}</Text>
        <Container>EnterCodeModal</Container>
      </Container>
    </Modal>
  );
}
