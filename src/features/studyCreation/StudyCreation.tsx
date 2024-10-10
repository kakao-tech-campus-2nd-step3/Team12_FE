import Container from '@/components/container';
import { DefaultPaddedContainer } from '@/components/container/variants';
import Modal from '@/components/modal';
import LeftSection from '@/features/studyCreation/LeftSection';
import RightSection from '@/features/studyCreation/RightSection';

interface StudyCreationProps {
  open: boolean;
  onClose: () => void;
}

export default function StudyCreation({ open, onClose }: StudyCreationProps) {
  return (
    <DefaultPaddedContainer>
      <Modal open={open} onClose={onClose} width="850px" height="450px">
        <Container>
          <LeftSection />
          <RightSection />
        </Container>
      </Modal>
    </DefaultPaddedContainer>
  );
}
