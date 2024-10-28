import { css, useTheme } from '@emotion/react';
import Button from '@/components/button';
import Container from '@/components/container';
import Modal from '@/components/modal';
import { Heading, Paragraph } from '@/components/text';
import colorTheme from '@/styles/colors';
import Spacing from '@/components/spacing';
import Textarea from '@/components/textarea';

interface SubmitAssignmentProps {
  open: boolean;
  onClose: () => void;
  assignName?: string;
  assignDesc?: string;
}

export default function SubmitAssignmentModal({ open, onClose, assignName= '', assignDesc = ''}: SubmitAssignmentProps) {
  const theme = useTheme();
  return (
    <Modal open={open} onClose={onClose} width="447px">
      <Container direction="column" gap="30px" padding="50px" align='flex-start'>
        <Heading.H2 weight='bold'>{assignName}</Heading.H2>
        <Paragraph variant="small" color={colorTheme.absolute.black}>{assignDesc}</Paragraph>
        <Textarea
          rows={10}
          resize='none'
          placeholder='링크를 첨부해주세요.'
        />

        <Container direction="column">
          <Button
            variant="primary"
            css={{
              width: '100%',
              borderRadius: theme.corners.medium,
            }}
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
          >
            포기하기
          </Button>
        </Container>
      </Container>
    </Modal>
  );
}
