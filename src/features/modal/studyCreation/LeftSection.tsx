import Avatar from '@/components/avatar';
import Button from '@/components/button';
import Container from '@/components/container';
import Input from '@/components/input';
import { Heading, Paragraph } from '@/components/text';
import useStudyCreationStyle from './StudyCreation.styles';
import Spacing from '@/components/spacing';
import Grid from '@/components/grid';

export default function LeftSection() {
  const { avatarStyle, selectPhotoButtonStyle, textStyle } = useStudyCreationStyle();
  return (
    <Container direction="column" gap="30px">
      <Container direction="column" align="flex-start">
        <Heading.H3 weight="bold">스터디 정보를 입력해주세요.</Heading.H3>
      </Container>

      <Container direction="column" gap="6px">
        <Avatar size="large" css={avatarStyle} />
        <Button css={selectPhotoButtonStyle}>스터디 사진 등록</Button>
      </Container>

      <Container direction="column" align="flex-start">
        <Grid columns={1}>
          <Input label="스터디명" placeholder="최대 15자까지 입력 가능해요." type="text" />
          <Spacing height={10} />
          <Input label="스터디 주제" placeholder="ex)코딩 스터디" type="text" />
          <Spacing height={10} />
          <div css={textStyle}>
            <Paragraph.Small>부적절한 내용의 스터디 생성 시 이용이 제한될 수 있어요.</Paragraph.Small>
          </div>
        </Grid>
      </Container>

    </Container>
  );
}
