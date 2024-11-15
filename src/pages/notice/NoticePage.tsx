import Page from '@components/template/Page';
import NoticeList from '@features/notice/NoticeList';
import { useNavigate, useParams } from 'react-router-dom';
import routePaths from '@constants/routePaths';
import { useEffect } from 'react';
import { isIntegerString } from '@/utils';

function NoticePage() {
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
      <NoticeList studyId={parseInt(studyId, 10)} />
    </Page>
  );
}

export default NoticePage;
