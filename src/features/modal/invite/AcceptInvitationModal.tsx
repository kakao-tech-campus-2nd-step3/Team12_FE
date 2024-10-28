import { css, useTheme } from '@emotion/react';
import Button from '@/components/button';
import Container from '@/components/container';
import Modal from '@/components/modal';
import { Heading, Paragraph } from '@/components/text';
import colorTheme from '@/styles/colors';
import Spacing from '@/components/spacing';
import StudyThumbnail from './StudyThumbnail';

interface AcceptInvitationProps {
  open: boolean;
  onClose: () => void;
  studyName: string;
}

export default function AcceptInvitationModal({ open, onClose, studyName = '' }: AcceptInvitationProps) {
  const theme = useTheme();
  return (
    <Modal open={open} onClose={onClose} width="447px">
      <Container direction="column" gap="30px" padding="50px">
        <StudyThumbnail src="https://picsum.photos/200" />
        <Heading.H3 color={colorTheme.primary.main} weight="bolder">{studyName}</Heading.H3>
        <Container direction="column" cssOverride={css`color: ${colorTheme.text.moderate}`} gap="5px">
          <Paragraph variant="small" color={colorTheme.absolute.black}>
            {studyName}
            에 초대합니다.
          </Paragraph>
          <Paragraph variant="small" color={colorTheme.absolute.black}>수락을 눌러 스터디에 가입해보세요!</Paragraph>
        </Container>

        <Container direction="column">
          <Button
            variant="primary"
            css={{
              width: '265px',
              borderRadius: theme.corners.medium,
            }}
          >
            수락하기
          </Button>
          <Spacing height={10} />
          <Button
            variant="primary"
            css={{
              width: '265px',
              backgroundColor: colorTheme.text.subtle,
              borderRadius: theme.corners.medium,
            }}
          >
            거절하기
          </Button>
        </Container>
      </Container>
    </Modal>
  );
}
