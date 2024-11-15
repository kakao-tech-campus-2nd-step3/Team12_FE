import { useTheme } from '@emotion/react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Button from '@/components/button';
import Container from '@/components/container';
import Modal from '@/components/modal';
import { Heading, Paragraph } from '@/components/text';
import colorTheme from '@/styles/colors';
import Spacing from '@/components/spacing';
import { submitAssign } from '@/api/assignment';

interface SubmitAssignmentProps {
  open: boolean;
  onClose: () => void;
  assignId: string;
  assignName?: string;
  assignDesc?: string;
}

export default function SubmitAssignmentModal({
  open, onClose, assignId, assignName = '', assignDesc = '',
}: SubmitAssignmentProps) {
  const theme = useTheme();
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0] || null);
  };

  const handleSubmit = async () => {
    if (!file) {
      toast.error('파일을 선택해주세요.');
      return;
    }

    try {
      await submitAssign({ assignId, file });
      toast.success('파일이 성공적으로 제출되었습니다.');
      onClose();
    } catch (error) {
      toast.error('파일 제출에 실패했습니다.');
    }
  };

  return (
    <Modal open={open} onClose={onClose} width="447px">
      <Container direction="column" gap="30px" padding="50px" align="flex-start">
        <Heading.H2 weight="bold">{assignName}</Heading.H2>
        <Paragraph variant="small" color={colorTheme.absolute.black}>{assignDesc}</Paragraph>
        <input
          type="file"
          onChange={handleFileChange}
          style={{ margin: '10px 0' }}
        />

        <Container direction="column">
          <Button
            variant="primary"
            css={{
              width: '100%',
              borderRadius: theme.corners.medium,
            }}
            onClick={handleSubmit}
          >
            제출하기
          </Button>
          <Spacing height={10} />
          <Button
            variant="primary"
            css={{
              width: '100%',
              backgroundColor: colorTheme.text.subtle,
              borderRadius: theme.corners.medium,
            }}
            onClick={onClose}
          >
            포기하기
          </Button>
        </Container>
      </Container>
    </Modal>
  );
}
