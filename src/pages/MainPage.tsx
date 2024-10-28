import Page from '@components/template/Page';
import Banner from '@features/main/banner';
import StudyListSection from '@features/main/studyList/StudyListSection';
import Spacing from '@components/spacing';

function MainPage() {
  return (
    <Page>
      <Banner />
      <StudyListSection />
      <Spacing height={50} />
    </Page>
  );
}

export default MainPage;
