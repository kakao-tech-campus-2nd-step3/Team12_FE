import { css } from '@emotion/react';
import {
  Control, FormState, useForm, UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import defaultBackground from '@assets/banner-background.webp';
import Modal from '@/components/modal';
import LeftSection from '@/features/modal/studyCreation/LeftSection';
import RightSection from '@/features/modal/studyCreation/RightSection';
import { type StudyCreationInputs } from '@/types/study';
import { createStudy } from '@/api/study';

interface StudyCreationProps {
  open: boolean;
  onClose: () => void;
}

export default function StudyCreationModal({ open, onClose }: StudyCreationProps) {
  const {
    register,
    handleSubmit,
    formState,
    control,
    setValue,
  } = useForm<StudyCreationInputs>({
    defaultValues: {
      is_open: true,
      name: '',
      topic: '',
      description: '',
    },
    mode: 'onChange',
  });

  // TODO: 실제 request 로직으로 변경 및 UI 로직과 분리
  async function onSubmit(data: StudyCreationInputs) {
    const formData = new FormData();

    const requestData = {
      name: data.name,
      description: data.description,
      topic: data.topic,
      is_open: data.is_open,
    };
    formData.append('request', new Blob([JSON.stringify(requestData)], { type: 'application/json' }));
    if (data.profile_image) {
      formData.append('profileImage', data.profile_image);
    } else {
      const defaultImageResponse = await fetch(defaultBackground);
      const blob = await defaultImageResponse.blob();
      const defaultBackgroundFile = new File([blob], 'defaultImage.webp');
      formData.append('profileImage', defaultBackgroundFile);
    }
    // console.log(formData.get('request'));
    // console.log(formData.get('profileImage'));
    createStudy(formData);
  }

  return (
    <Modal open={open} onClose={onClose} width="850px">
      <form css={formStyle} onSubmit={handleSubmit(onSubmit)}>
        <LeftSection
          formState={formState}
          register={register}
          control={control}
          setValue={setValue}
        />
        <RightSection
          formState={formState}
          register={register}
          control={control}
        />
      </form>
    </Modal>
  );
}

const formStyle = css`
  display: flex;
  gap: 30px;
  padding: 30px;
`;

export interface StudyCreationSectionProps {
  register: UseFormRegister<StudyCreationInputs>;
  formState: FormState<StudyCreationInputs>;
  control: Control<StudyCreationInputs>;
  setValue?: UseFormSetValue<StudyCreationInputs>;
}
