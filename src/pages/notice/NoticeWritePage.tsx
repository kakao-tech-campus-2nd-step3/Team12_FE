import routePaths from '@constants/routePaths';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NoticeCreation from '@features/notice/NoticeCreation';
import Page from '@components/template/Page';
import Spacing from '@components/spacing';
import { isIntegerString } from '@/utils';

function NoticeWritePage() {
  const { studyId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!studyId || !isIntegerString(studyId)) {
      navigate(routePaths.MAIN);
    }
  }, [navigate, studyId]);
  if (!studyId) return null;
  return (
    <Page>
      <Spacing height={40} />
      <NoticeCreation studyId={parseInt(studyId, 10)} />
      <Spacing height={40} />
    </Page>
  );
}

export default NoticeWritePage;
