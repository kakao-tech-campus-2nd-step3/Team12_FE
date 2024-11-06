import { DefaultPaddedContainer } from '@components/container/variants';
import { useState } from 'react';
import StudyFilterSection from '@features/main/studyList/StudyFilterSection';
import StudyGridWrapper from '@features/main/studyList/StudyGridWrapper';
import type { StudyFilter } from '@/types/study';

function StudyListSection() {
  const [studyFilter, setStudyFilter] = useState<StudyFilter>('all');
  const [searchKeyword, setSearchKeyword] = useState<string>();
  // TODO: 추후에 백엔드와 논의하여 filter type 정의

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
