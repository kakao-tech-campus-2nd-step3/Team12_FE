import Modal from '@/components/modal';
import MemberInfoSection from '@/features/modal/memberInfo/MemberInfoSection';
import { MemberInfo } from '@/mock/member';

interface AssignmentInfoModalProps {
  open: boolean;
  onClose: () => void;
  memberInfo : MemberInfo;

}

export default function AssignmentInfoModal(
  { open, onClose, memberInfo }: AssignmentInfoModalProps,
) {
  return (
    <Modal open={open} onClose={onClose} width="387px" height="478px">
      <MemberInfoSection memberInfo={memberInfo} rate={20} />
      <div>AssignmentInfoModal</div>
    </Modal>
  );
}
