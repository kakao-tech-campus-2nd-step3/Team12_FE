import Avatar from '@/components/avatar';
import Button from '@/components/button';
import Checkbox from '@/components/checkbox';
import Container from '@/components/container';
import { DefaultPaddedContainer } from '@/components/container/variants';
import Grid from '@/components/grid';
import Input from '@/components/input';
import Modal from '@/components/modal';
import Spacing from '@/components/spacing';
import { Heading, Paragraph } from '@/components/text';
import TextArea from '@/components/textarea';
import usePersonInfoModaStyles from './PersonalInfoModal.styles';

interface PersonalInfoModalProps {
  open: boolean;
  onClose: () => void;
}

export default function PersonalInfoModal({ open, onClose }: PersonalInfoModalProps) {
  const {
    selectPhotoButtonStyle, linkTextStyle, textStyle, signUpButtonStyle,
  } = usePersonInfoModaStyles();
  return (
    <DefaultPaddedContainer>
      <Modal open={open} onClose={onClose} width="447px">
        <Container padding="30px" direction="column" align="flex-start">
          <Heading.H3 weight="bold">개인 정보를 입력해주세요.</Heading.H3>
        </Container>

        <Container direction="column" gap="6px">
          <Avatar size="large" bordered />
          <Button css={selectPhotoButtonStyle}>프로필 사진 등록</Button>
        </Container>

        <Container padding="12px 30px">
          <Grid columns={1}>
            <Input label="닉네임" placeholder="디토에서 사용할 닉네임이에요." type="text" />
            <Spacing height={10} />
            <Input label="이메일" placeholder="이메일 주소를 입력해주세요." type="email" />
            <Spacing height={10} />
            <Input label="연락처" placeholder="연락 가능한 번호를 입력해주세요." type="tel" />
            <Spacing height={10} />
            <TextArea rows={1} label="자기소개" resize="vertical" />
          </Grid>
        </Container>

        <Container gap="5px">
          <Checkbox />
          <div css={textStyle}>
            <Paragraph.Small>
              <a href="https://github.com/kakao-tech-campus-2nd-step3/Team12_FE" css={linkTextStyle}>개인정보 처리방침</a>
              {' '}
              및
              {' '}
              <a href="https://github.com/kakao-tech-campus-2nd-step3/Team12_FE" css={linkTextStyle}>이용약관</a>
              에 동의해요.
            </Paragraph.Small>
          </div>
        </Container>

        <Container padding="12px 30px">
          <Button css={signUpButtonStyle}>가입하기</Button>
        </Container>

        <Spacing height={20} />

      </Modal>
    </DefaultPaddedContainer>
  );
}
