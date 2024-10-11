import Container from '@/components/container';
import { DefaultPaddedContainer } from '@/components/container/variants';
import Modal from '@/components/modal';
import LeftSection from '@/features/modal/studyCreation/LeftSection';
import RightSection from '@/features/modal/studyCreation/RightSection';

interface StudyCreationProps {
  open: boolean;
  onClose: () => void;
}

export default function StudyCreationModal({ open, onClose }: StudyCreationProps) {
  return (
    <DefaultPaddedContainer>
      <Modal open={open} onClose={onClose} width="850px" height="450px">
        <Container padding="30px" gap="30px" align="flex-start">
          <LeftSection />
          <RightSection />
        </Container>
      </Modal>
    </DefaultPaddedContainer>
  );
}
