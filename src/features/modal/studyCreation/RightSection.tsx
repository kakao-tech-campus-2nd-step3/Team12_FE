import { css } from '@emotion/react';
import Button from '@/components/button';
import Container from '@/components/container';
import Switch from '@/components/switch';
import { Paragraph } from '@/components/text';
import Textarea from '@/components/textarea';
import colorTheme from '@/styles/colors';
import useStudyCreationStyle from './StudyCreation.styles';

export default function RightSection() {
  const { creationButtonStyle } = useStudyCreationStyle();
  return (
    <Container direction="column" gap="10px" align="flex-start">
      <Textarea label="스터디 설명" rows={14} resize="none" />
      <Container cssOverride={css`color: ${colorTheme.text.subtle}`} gap="5px" justify="flex-start" padding="10px">
        <Paragraph.Small>비공개</Paragraph.Small>
        <Switch type="checkbox" defaultChecked />
        <Paragraph.Small>공개</Paragraph.Small>
      </Container>
      <Button css={creationButtonStyle}>스터디 생성하기</Button>
    </Container>
  );
}
