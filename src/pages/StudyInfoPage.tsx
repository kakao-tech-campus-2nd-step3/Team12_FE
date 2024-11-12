import Page from '@components/template/Page';
import MemberListSection from '@features/studyInfo/MemberListSection';
import StudyInfoSection from '@features/studyInfo/StudyInfoSection';
import StudyInfoProvider from '@providers/StudyInfoProvider';
import { useNavigate, useParams } from 'react-router-dom';
import routePaths from '@constants/routePaths';
import SuspenseErrorBoundary from '@components/boundary/SuspenseErrorBoundary';
import Spacing from '@components/spacing';
import { isIntegerString } from '@/utils';

function StudyInfoPage() {
  const { studyId } = useParams();
  const navigate = useNavigate();
  if (!studyId || !isIntegerString(studyId)) {
    navigate(routePaths.MAIN);
    return null;
  }
  return (
    <Page>
      <Spacing height={20} />

      <SuspenseErrorBoundary>
        <StudyInfoProvider studyId={parseInt(studyId, 10)}>
          <StudyInfoSection />
          <MemberListSection />
        </StudyInfoProvider>
      </SuspenseErrorBoundary>

      <Spacing height={20} />
    </Page>
  );
}

export default StudyInfoPage;
