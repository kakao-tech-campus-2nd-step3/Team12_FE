import { css } from '@emotion/react';
import {
  Control, FormState, useForm, UseFormRegister,
} from 'react-hook-form';
import Modal from '@/components/modal';
import LeftSection from '@/features/modal/studyCreation/LeftSection';
import RightSection from '@/features/modal/studyCreation/RightSection';
import { type StudyCreationInputs } from '@/types/study';

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
  } = useForm<StudyCreationInputs>({
    defaultValues: {
      isOpen: true,
      name: '',
      topic: '',
      description: '',
    },
    mode: 'onChange',
  });

  // TODO: 실제 request 로직으로 변경 및 UI 로직과 분리
  const onSubmit = (data: StudyCreationInputs) => console.log(data);

  return (
    <Modal open={open} onClose={onClose} width="850px">
      <form css={formStyle} onSubmit={handleSubmit(onSubmit)}>
        <LeftSection formState={formState} register={register} control={control} />
        <RightSection formState={formState} register={register} control={control} />
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
}
