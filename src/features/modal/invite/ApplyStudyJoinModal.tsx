import Modal from '@components/modal';
import StudyThumbnail from '@features/modal/invite/StudyThumbnail';
import { Heading, Paragraph } from '@components/text';
import colorTheme from '@styles/colors';
import Container from '@components/container';
import Button from '@components/button';
import theme from '@styles/theme';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@constants/queryKeys';
import { css } from '@emotion/react';
import TextArea from '@components/textarea';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FormErrorMessage } from '@components/text/variants';
import { applyStudyJoin, getStudyInfo } from '@/api/study';
import { ApplyJoinStudyInputs } from '@/types/study';

interface ApplyStudyJoinModalProps {
  onClose: () => void;
  open: boolean;
  studyId: number;
}

function ApplyStudyJoinModal({ onClose, open, studyId }: ApplyStudyJoinModalProps) {
  const { data: study } = useQuery({
    queryKey: [queryKeys.STUDY_INFO_MINIFIED, studyId],
    queryFn: () => getStudyInfo(studyId),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplyJoinStudyInputs>();
  const onSubmit = async (data: ApplyJoinStudyInputs) => {
    try {
      console.log(
        await applyStudyJoin(study?.id as number, data.message),
      );
      toast.success('스터디 가입 신청이 완료되었습니다!');
      onClose();
    } catch (e) {
      toast.error('가입 신청 중 에러가 발생했습니다.');
    }
  };
  return (
    <Modal onClose={onClose} open={open}>
      <form
        css={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px', padding: '50px',
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <StudyThumbnail src={study?.profile_image} />
        <Container direction="column" gap="10px">
          <Heading.H3 color={colorTheme.primary.main} weight="bolder">{study?.name}</Heading.H3>
          <Paragraph variant="small" color={colorTheme.absolute.black}>
            {study?.description}
          </Paragraph>
        </Container>
        <Container direction="column" cssOverride={css`color: ${colorTheme.text.moderate}`} gap="10px">
          <Paragraph variant="small" color={colorTheme.absolute.black}>
            {study?.name}
            에 가입 신청하기
          </Paragraph>
          <TextArea
            placeholder="가입 신청 메시지"
            css={{ width: '265px', height: '100px' }}
            resize="none"
            {...register('message', { required: true })}
          />
          <FormErrorMessage errors={errors} name="message" />
        </Container>

        <Container direction="column">
          <Button
            variant="primary"
            css={{
              width: '265px',
              borderRadius: theme.corners.medium,
            }}
            type="submit"
          >
            신청하기
          </Button>
        </Container>
      </form>
    </Modal>
  );
}

export default ApplyStudyJoinModal;
