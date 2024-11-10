import { useState } from 'react';
import PersonalInfoModal from '@features/modal/login/PersonalInfoModal';

function SubmitPersonalInfoPage() {
  const [isOpen] = useState(true);
  // TODO: 토큰 저장
  return (
    <PersonalInfoModal open={isOpen} onClose={() => {}} />
  );
}

export default SubmitPersonalInfoPage;
