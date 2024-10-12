import { css, useTheme } from '@emotion/react';
import {
  type StudyCreationSectionProps,
} from '@features/modal/studyCreation/StudyCreationModal';
import { FormErrorMessage } from '@components/text/variants';
import Button from '@/components/button';
import Container from '@/components/container';
import Switch from '@/components/switch';
import { Paragraph } from '@/components/text';
import Textarea from '@/components/textarea';
import colorTheme from '@/styles/colors';

export default function RightSection({
  register,
  formState: { errors, isValid },
}: StudyCreationSectionProps) {
  const theme = useTheme();
  return (
    <Container direction="column" align="flex-start">
      <Textarea
        label="스터디 설명"
        rows={14}
        resize="none"
        {...register('description', { ...validations.description })}
      />
      <FormErrorMessage errors={errors} name="description" />
      <Container cssOverride={css`color: ${colorTheme.text.subtle}`} gap="5px" justify="flex-start" padding="10px">
        <Paragraph.Small>비공개</Paragraph.Small>
        <Switch type="checkbox" {...register('isOpen')} defaultChecked />
        <Paragraph.Small>공개</Paragraph.Small>
      </Container>
      <Button
        variant="primary"
        type="submit"
        disabled={!isValid}
        css={{
          width: '100%',
          borderRadius: theme.corners.medium,
        }}
      >
        스터디 생성하기
      </Button>
    </Container>
  );
}

const validations = {
  description: { required: { value: true, message: '스터디 설명을 입력하세요.' } },
};
