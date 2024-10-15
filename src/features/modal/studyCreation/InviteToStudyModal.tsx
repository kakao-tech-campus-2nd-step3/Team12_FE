import { css, useTheme } from '@emotion/react';
import Avatar from '@/components/avatar';
import Button from '@/components/button';
import Container from '@/components/container';
import Modal from '@/components/modal';
import { Heading, Paragraph } from '@/components/text';
import useStudyCreationStyle from './StudyCreation.styles';
import colorTheme from '@/styles/colors';
import Input from '@/components/input';
import Grid from '@/components/grid';
import Spacing from '@/components/spacing';

interface StudyCreationProps {
  open: boolean;
  onClose: () => void;
}

export default function InviteToStudyModal({ open, onClose }: StudyCreationProps) {
  const { selectPhotoButtonStyle } = useStudyCreationStyle();
  const theme = useTheme();
  return (
    <Modal open={open} onClose={onClose} width="447px">
      <Container padding="30px" direction="column" align="flex-start">
        <Heading.H3 weight="bold">다른 사람을 스터디에 초대해보세요.</Heading.H3>

        <Container direction="column" gap="6px" cssOverride={css`font-weight: bold`} padding="30px">
          <Avatar size="large" bordered />
          <Button css={selectPhotoButtonStyle}>Ditto Study</Button>
          <Container direction="column" cssOverride={css`color: ${colorTheme.text.moderate}`}>
            <Paragraph.Small>OOO님이 Ditto Study에 초대했어요!</Paragraph.Small>
            <Paragraph.Small>아래 링크를 통해 가입해주세요.</Paragraph.Small>
          </Container>
        </Container>

        <Grid columns={1}>
          <Input
            type="text"
            value="https://discord.gg/RHphspSM"
            readOnly
            label="초대 링크"
          />
          <Spacing height={18} />
          <Button
            variant="primary"
            css={{
              width: '100%',
              borderRadius: theme.corners.medium,
            }}
          >
            링크 공유하기
          </Button>
        </Grid>
      </Container>
    </Modal>
  );
}
