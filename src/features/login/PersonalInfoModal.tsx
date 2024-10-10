import Avatar from "@/components/avatar";
import Button from "@/components/button";
import Checkbox from "@/components/checkbox";
import Container from "@/components/container";
import { DefaultPaddedContainer } from "@/components/container/variants";
import Grid from "@/components/grid";
import Input from "@/components/input";
import Modal from "@/components/modal";
import Spacing from "@/components/spacing";
import { Heading, Paragraph } from "@/components/text";
import TextArea from "@/components/textarea";

interface PersonalInfoModalProps {
  open: boolean;
  onClose: () => void;
}

export function PersonalInfoModal({ open, onClose }: PersonalInfoModalProps) {
  return (
    <DefaultPaddedContainer>
      <Modal open={open} onClose={onClose} width="447px" height="697px">
        <Container padding="30px" direction="column" align="flex-start">
          <Heading.H3 weight="bold">개인 정보를 입력해주세요.</Heading.H3>
        </Container>

        <Container direction="column">
          <Avatar size="large" />
          <Button>프로필 사진 등록</Button>
        </Container>

        <Container>
          <Grid columns={1}>
            <Input label="닉네임" placeholder="디토에서 사용할 닉네임이에요." type={"text"} />
            <Input label="이메일" placeholder="이메일 주소를 입력해주세요." type={"email"} />
            <Input label="연락처" placeholder="연락 가능한 번호를 입력해주세요." type={"tel"} />
            <TextArea label="자기소개" />
          </Grid>
        </Container>

        <Container>
          <Checkbox />
          <Paragraph.Small>개인정보 처리방침 및 이용약관에 동의해요.</Paragraph.Small>
        </Container>
        <Button>가입하기</Button>
      </Modal>
    </DefaultPaddedContainer>
  );
}