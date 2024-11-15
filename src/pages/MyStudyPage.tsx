import Page from '@components/template/Page';
import MyStudyList from '@features/myStudy/MyStudyList';
import Spacing from '@components/spacing';

function MyStudyPage() {
  return (
    <Page>
      <Spacing height={40} />
      <MyStudyList />
      <Spacing height={40} />
    </Page>
  );
}

export default MyStudyPage;
