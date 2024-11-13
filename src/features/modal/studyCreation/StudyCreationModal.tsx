import { css } from '@emotion/react';
import {
  Control, FormState, useForm, UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
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
      profileImage: '',
    },
    mode: 'onChange',
  });

  // TODO: 실제 request 로직으로 변경 및 UI 로직과 분리
  function onSubmit(data: StudyCreationInputs) {
    const formData = new FormData();

    const requestData = {
      name: data.name,
      description: data.description,
      topic: data.topic,
      isOpen: data.is_open,
    };
    formData.append('request', JSON.stringify(requestData));
    formData.append('profileImage', data.profileImage);
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
