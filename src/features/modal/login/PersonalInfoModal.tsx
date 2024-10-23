import { useTheme } from '@emotion/react';
import { FormState, useForm, UseFormRegister } from 'react-hook-form';
import Avatar from '@/components/avatar';
import Button from '@/components/button';
import Checkbox from '@/components/checkbox';
import Container from '@/components/container';
import Grid from '@/components/grid';
import Input from '@/components/input';
import Modal from '@/components/modal';
import Spacing from '@/components/spacing';
import { Heading, Paragraph } from '@/components/text';
import TextArea from '@/components/textarea';
import usePersonInfoModalStyles from './PersonalInfoModal.styles';
import { FormErrorMessage } from '@/components/text/variants';

interface PersonalInfo {
  nickname: string;
  email: string;
  phone: string;
  introduction: string;
  agreeToTerms: boolean;
}

type PersonalInfoRequestBody = Pick<PersonalInfo, 'nickname' | 'email' | 'phone' | 'introduction' | 'agreeToTerms'>;
type PersonalInfoInputs = PersonalInfoRequestBody;

interface PersonalInfoModalProps {
  open: boolean;
  onClose: () => void;
}

export interface PersonalInfoSectionProps {
  register: UseFormRegister<PersonalInfoInputs>;
  formState: FormState<PersonalInfoInputs>;
}

export default function PersonalInfoModal({ open, onClose }: PersonalInfoModalProps) {
  const {
    selectPhotoButtonStyle, linkTextStyle, textStyle,
  } = usePersonInfoModalStyles();
  const { register, handleSubmit, formState: {errors, isValid}, watch} = useForm<PersonalInfoInputs>({
    defaultValues: {
      nickname: '',
      email: '',
      phone: '',
      introduction: '',
      agreeToTerms: false,
    },
    mode: 'onChange',
  });
  const theme = useTheme();

  const onSubmit = (data: PersonalInfoInputs) => console.log(data);
  return (
    <Modal open={open} onClose={onClose} width="447px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container padding="30px" direction="column" align="flex-start">
          <Heading.H3 weight="bold">개인 정보를 입력해주세요.</Heading.H3>
        </Container>

        <Container direction="column" gap="6px">
          <Avatar size="large" bordered />
          <Button css={selectPhotoButtonStyle}>프로필 사진 등록</Button>
        </Container>

        <Container padding="12px 30px">
          <Grid columns={1}>
            <Input label="닉네임" placeholder="디토에서 사용할 닉네임이에요." type="text" {...register('nickname', { ...validations.nickname })} />
            <FormErrorMessage errors={errors} name="nickname" />
            <Spacing height={10} />
            <Input label="이메일" placeholder="이메일 주소를 입력해주세요." type="email" {...register('email', { ...validations.email })} />
            <FormErrorMessage errors={errors} name="email" />
            <Spacing height={10} />
            <Input label="연락처" placeholder="연락 가능한 번호를 입력해주세요." type="tel" {...register('phone', { ...validations.phone })} />
            <FormErrorMessage errors={errors} name="phone" />
            <Spacing height={10} />
            <TextArea rows={1} label="자기소개" resize="vertical" {...register('introduction', { ...validations.introduction })} />
            <FormErrorMessage errors={errors} name="introduction" />
          </Grid>
        </Container>

        <Container gap="5px">
        <Checkbox {...register('agreeToTerms', { ...validations.agreeToTerms })} />
          <div css={textStyle}>
            <Paragraph.Small>
              <a href="https://github.com/kakao-tech-campus-2nd-step3/Team12_FE" css={linkTextStyle}>개인정보 처리방침</a>
              {' '}
              및
              {' '}
              <a href="https://github.com/kakao-tech-campus-2nd-step3/Team12_FE" css={linkTextStyle}>이용약관</a>
              에 동의해요.
            </Paragraph.Small>
            <FormErrorMessage errors={errors} name="agreeToTerms" />
          </div>
        </Container>

        <Container padding="12px 30px">
          <Button 
            variant="primary"
            type="submit"
            disabled={!isValid}
            data-testid={personalInfoModalTestId}
            css={{ borderRadius: theme.corners.small, width: '100%' }}>가입하기</Button>
        </Container>

        <Spacing height={20} />
      </form>
    </Modal>
  );
}

const validations = {
  nickname: { required: { value: true, message: '닉네임을 입력하세요.' } },
  email: { required: { value: true, message: '이메일을 입력하세요.' } },
  phone: { required: { value: true, message: '연락처를 입력하세요.' } },
  introduction: { required: { value: true, message: '자기소개를 입력하세요.' } },
  agreeToTerms : { required: { value: true, message: '약관에 동의해주세요.' } },
};

export const personalInfoModalTestId = 'signUp-button';