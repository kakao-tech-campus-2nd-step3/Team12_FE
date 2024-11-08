import Modal from '@/components/modal';
import MemberInfoSection from '@/features/modal/memberInfo/MemberInfoSection';
import { MemberInfo } from '@/mock/member';

interface AssignmentInfoModalProps {
  open: boolean;
  onClose: () => void;
  memberInfos: MemberInfo[];

}

export default function AssignmentInfoModal(
  { open, onClose, memberInfos }: AssignmentInfoModalProps,
) {
  return (
    <Modal open={open} onClose={onClose} width="387px" height="478px">
      <MemberInfoSection memberInfo={memberInfos[0]} />
      <div>AssignmentInfoModal</div>
    </Modal>
  );
}
