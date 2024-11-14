import {
  type StudyCreationSectionProps,
} from '@features/modal/studyCreation/StudyCreationModal';
import { FormErrorMessage } from '@components/text/variants';
import { ChangeEvent, useRef, useState } from 'react';
import Avatar from '@/components/avatar';
import Container from '@/components/container';
import Input from '@/components/input';
import { Heading, Paragraph } from '@/components/text';
import useStudyCreationStyle from './StudyCreation.styles';
import Spacing from '@/components/spacing';
import Grid from '@/components/grid';
import Button from '@/components/button';

export default function LeftSection({
  register,
  formState: { errors },
  setValue,
}: StudyCreationSectionProps) {
  const { textStyle } = useStudyCreationStyle();
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const validations = {
    name: { required: { value: true, message: '스터디 이름을 입력하세요.' } },
    topic: { required: { value: true, message: '스터디 주제를 입력하세요.' } },
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!setValue || !file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && typeof e.target.result === 'string') {
        setAvatarPreview(e.target.result);
      }
    };
    reader.readAsDataURL(file);
    setValue('profile_image', file);
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Container direction="column" gap="30px">
      <Container direction="column" align="flex-start">
        <Heading.H3 weight="bold">스터디 정보를 입력해주세요.</Heading.H3>
      </Container>

      <Container direction="column" gap="6px">
        <Avatar
          size="large"
          bordered
          src={avatarPreview || ''}
        />
        <Button variant="transparent" onClick={handleButtonClick}>스터디 사진 등록</Button>
        <Input
          type="file"
          ref={fileInputRef}
          css={{ display: 'none' }}
          accept="image/*"
          onChange={handleImageChange}
        />
      </Container>

      <Container direction="column" align="flex-start">
        <Grid columns={1}>
          <Input
            label="스터디명"
            placeholder="최대 15자까지 입력 가능해요."
            type="text"
            maxLength={15}
            {...register('name', validations.name)}
          />
          <FormErrorMessage errors={errors} name="name" />
          <Spacing height={10} />
          <Input
            label="스터디 주제"
            placeholder="ex)코딩 스터디"
            type="text"
            {...register('topic', validations.topic)}
          />
          <Spacing height={2} />
          <FormErrorMessage errors={errors} name="topic" />
          <Spacing height={10} />
          <div css={textStyle}>
            <Paragraph variant="small">부적절한 내용의 스터디 생성 시 이용이 제한될 수 있어요.</Paragraph>
          </div>
        </Grid>
      </Container>

    </Container>
  );
}
