import Avatar from '@/components/avatar';
import Button from '@/components/button';
import Container from '@/components/container';
import Input from '@/components/input';
import { Heading, Paragraph } from '@/components/text';

export default function LeftSection() {
  return (
    <Container direction="column">
      <Container padding="30px" direction="column" align="flex-start">
        <Heading.H3 weight="bold">스터디 정보를 입력해주세요.</Heading.H3>
      </Container>

      <Container direction="column" gap="6px">
        <Avatar size="large" />
        <Button>프로필 사진 등록</Button>
      </Container>
      <Input label="스터디명" placeholder="디토에서 사용할 닉네임이에요." type="text" />
      <Input label="스터디 주제" placeholder="이메일 주소를 입력해주세요." type="email" />
      <Paragraph.Small>부적절한 내용의 스터디 생성 시 이용이 제한될 수 있어요.</Paragraph.Small>

    </Container>
  );
}
