import { useLocation, useNavigate } from 'react-router-dom';
import routePaths from '@constants/routePaths';
import { useContext } from 'react';
import { MemberInfoContext } from '@providers/MemberInfoProvider';
import Container from '@components/container';
import Spinner from '@components/fallback/Spinner';
import { Heading } from '@components/text';

function LoginSuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useContext(MemberInfoContext);
  const params = new URLSearchParams(location.search);
  const accessToken = params.get('accessToken');
  if (!accessToken) {
    navigate(routePaths.MAIN);
    return null;
  }
  login(accessToken);
  return (
    <Container height="500px">
      <Spinner />
      <Heading.H1>로그인 처리 중</Heading.H1>
    </Container>
  );
}

export default LoginSuccessPage;
