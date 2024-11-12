import Page from '@components/template/Page';
import MemberListSection from '@features/studyInfo/MemberListSection';
import StudyInfoSection from '@features/studyInfo/StudyInfoSection';
import StudyInfoProvider from '@providers/StudyInfoProvider';
import { useNavigate, useParams } from 'react-router-dom';
import routePaths from '@constants/routePaths';
import { Suspense } from 'react';
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
      <Suspense>
        <StudyInfoProvider studyId={parseInt(studyId, 10)}>
          <StudyInfoSection />
          <MemberListSection />
        </StudyInfoProvider>
      </Suspense>
    </Page>
  );
}

export default StudyInfoPage;
