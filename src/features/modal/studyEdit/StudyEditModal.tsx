import Modal from '@components/modal';
import StudyEditSection from '@features/myStudy/StudyEditSection';

interface StudyEditModalProps {
  studyId: number;
  open: boolean;
  onClose: () => void;
}

function StudyEditModal({ studyId, open, onClose }: StudyEditModalProps) {
  return (
    <Modal onClose={onClose} open={open}>
      <StudyEditSection studyId={studyId} onClose={onClose} />
    </Modal>
  );
}

export default StudyEditModal;
