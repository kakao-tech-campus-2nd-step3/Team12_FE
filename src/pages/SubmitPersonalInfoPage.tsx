import { useContext, useEffect } from 'react';
import PersonalInfoModal from '@features/modal/login/PersonalInfoModal';
import { MemberInfoContext } from '@providers/MemberInfoProvider';
import routePaths from '@constants/routePaths';
import { useLocation, useNavigate } from 'react-router-dom';
import { tokenStorage } from '@/utils/storage';

function SubmitPersonalInfoPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useContext(MemberInfoContext);
  const params = new URLSearchParams(location.search);
  const accessToken = params.get('accessToken') || tokenStorage.get();
  useEffect(() => {
    if (!accessToken) {
      navigate(routePaths.MAIN);
      return;
    }
    login(accessToken);
  }, [accessToken, login, navigate]);
  return (
    <PersonalInfoModal open onClose={() => {}} />
  );
}

export default SubmitPersonalInfoPage;
