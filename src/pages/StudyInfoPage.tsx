import Page from '@components/template/Page';
import MemberListSection from '@features/studyInfo/MemberListSection';
import StudyInfoSection from '@features/studyInfo/StudyInfoSection';
import StudyInfoProvider from '@providers/StudyInfoProvider';
import { useNavigate, useParams } from 'react-router-dom';
import routePaths from '@constants/routePaths';
import SuspenseErrorBoundary from '@components/boundary/SuspenseErrorBoundary';
import Container from '@components/container';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
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
      <SuspenseErrorBoundary errorFallback={<StudyInfoErrorFallback />}>
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

function StudyInfoErrorFallback() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(-1);
    toast.error('스터디 정보 조회 권한이 없어요. 가입 신청 중이라면 조금만 기다려주세요!');
  }, [navigate]);
  return <>요청 처리 중 오류가 발생했습니다.</>;
}

export default StudyInfoPage;
