import { DefaultPaddedContainer } from '@components/container/variants';
import { useState } from 'react';
import StudyFilterSection from '@features/main/studyList/StudyFilterSection';
import StudyGridWrapper from '@features/main/studyList/StudyGridWrapper';
import type { StudyFilter } from '@/types/study';

function StudyListSection() {
  const [studyFilter, setStudyFilter] = useState<StudyFilter>('all');
  const [searchKeyword, setSearchKeyword] = useState('');
  // searchKeyword가 ''인 경우 undefined로 보내야 함.

  return (
    <DefaultPaddedContainer cssOverride={{ paddingTop: '40px' }}>
      <StudyFilterSection
        studyFilter={studyFilter}
        setStudyFilter={setStudyFilter}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
      <StudyGridWrapper studyFilter={studyFilter} searchKeyword={searchKeyword} />
    </DefaultPaddedContainer>
  );
}

export default StudyListSection;
