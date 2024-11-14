import Page from '@components/template/Page';
import MemberListSection from '@features/studyInfo/MemberListSection';
import StudyInfoSection from '@features/studyInfo/StudyInfoSection';
import StudyInfoProvider from '@providers/StudyInfoProvider';
import { useNavigate, useParams } from 'react-router-dom';
import routePaths from '@constants/routePaths';
import SuspenseErrorBoundary from '@components/boundary/SuspenseErrorBoundary';
import Container from '@components/container';
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
      <SuspenseErrorBoundary>
        <StudyInfoProvider studyId={parseInt(studyId, 10)}>
          <StudyInfoSection />
          <Container css={{ backgroundColor: 'white' }} padding="20px 0">
            <MemberListSection />
          </Container>
        </StudyInfoProvider>
      </SuspenseErrorBoundary>
    </Page>
  );
}

export default StudyInfoPage;
