import Button from '@/components/button';
import Container from '@/components/container';
import Switch from '@/components/switch';
import Textarea from '@/components/textarea';

export default function RightSection() {
  return (
    <Container direction="column">
      <Textarea label="스터디 설명" />
      <Switch type="checkbox" />
      <Button>스터디 생성하기</Button>

    </Container>
  );
}
