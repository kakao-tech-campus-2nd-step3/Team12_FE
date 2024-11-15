import Page from '@components/template/Page';
import { useNavigate, useParams } from 'react-router-dom';
import routePaths from '@constants/routePaths';
import { useEffect } from 'react';
import AssignList from '@features/assignment/AssignList';
import { isIntegerString } from '@/utils';

function AssignPage() {
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
      <AssignList studyId={parseInt(studyId, 10)} />
    </Page>
  );
}

export default AssignPage;
