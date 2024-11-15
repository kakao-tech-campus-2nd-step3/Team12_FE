import { useContext } from 'react';
import toast from 'react-hot-toast';
import Container from '@/components/container';
import Modal from '@/components/modal';
import { AttendanceInfoContext } from '@/providers/AttendanceInfoProvider';
import Text, { Heading, Paragraph } from '@/components/text';
import Input from '@/components/input';
import Button from '@/components/button';
import Spacing from '@/components/spacing';
import colorTheme from '@/styles/colors';
import failIcon from '@/assets/icons/failure.png';

interface EnterCodeModalProps {
  open: boolean;
  onClose: () => void;
  role: string;
}

export default function EnterCodeModal({ open, onClose, role }: EnterCodeModalProps) {
  const { code, checkAttend } = useContext(AttendanceInfoContext);
  console.log(code);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      checkAttend();
      toast.success('출석이 완료되었습니다🍀');
      onClose();
    } catch (error: any) {
      const errorMessage = error.response?.data || '출석에 실패했습니다';
      toast.error(errorMessage);
    }
  };

  return (
    <Modal open={open} onClose={onClose} width="387px" height="478px">
      <Container padding="30px" direction="column" align="flex-start" gap="20px">
        <Spacing height={30} />
        <Heading.H1 weight="bold">출석 체크</Heading.H1>
        { role === '스터디장' ? (
          <Container direction="column" gap="5px" align="flex-start">
            <Text fontSize="15px">출석 코드를 입력해주세요.</Text>
            <Text fontSize="15px">출석 코드는 스터디원에게 알려주세요.</Text>
            <Spacing height={30} />
            <Container gap="10px">
              { code ? (
              <Text weight='bold' fontSize='50px' color={colorTheme.primary.darken}>{code}</Text> ) :
              <>
                <img src={failIcon} width={20} height={20}/>
                <Paragraph variant="medium" color={colorTheme.text.moderate}>출석 코드가 없습니다.</Paragraph>
              </>
              }
            </Container>
          </Container>
        ) : (
          <>
            <Container direction="column" gap="5px" align="flex-start">
              <Text fontSize="15px">출석 코드를 입력해주세요.</Text>
              <Text fontSize="15px">출석 코드는 스터디장에게 받을 수 있어요.</Text>
            </Container>
            <form onSubmit={handleSubmit}>
              <Container gap="20px">
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
              </Container>
            </form>
          </>
        )}
      </Container>
    </Modal>
  );
}
