import { useLocation, useNavigate } from 'react-router-dom';
import routePaths from '@constants/routePaths';
import { useContext, useEffect } from 'react';
import { MemberInfoContext } from '@providers/MemberInfoProvider';
import Container from '@components/container';
import Spinner from '@components/fallback/Spinner';

function LoginSuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useContext(MemberInfoContext);
  const params = new URLSearchParams(location.search);
  const accessToken = params.get('accessToken');
  useEffect(() => {
    if (!accessToken) {
      navigate(routePaths.MAIN);
      return;
    }
    login(accessToken);
    window.location.href = routePaths.MAIN;
  }, [accessToken, navigate, login]);
  return (
    <Container height="500px" direction="column">
      <Spinner />
    </Container>
  );
}

export default LoginSuccessPage;
