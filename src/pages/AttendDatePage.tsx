import { useParams } from 'react-router-dom';
import Page from '@/components/template/Page';
import AttendDateList from '@/features/attend/AttendDateList';
import StudyInfoContextProvider from '@/providers/StudyInfoProvider';

export default function AttendDatePage() {
  const { studyId } = useParams<{ studyId: string }>();
  return (
    <Page>
      <StudyInfoContextProvider studyId={Number(studyId)}>
        <AttendDateList />
      </StudyInfoContextProvider>
    </Page>
  );
}
