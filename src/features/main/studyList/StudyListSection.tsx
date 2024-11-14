import { DefaultPaddedContainer } from '@components/container/variants';
import { useState } from 'react';
import StudyFilterSection from '@features/main/studyList/StudyFilterSection';
import StudyGridWrapper from '@features/main/studyList/StudyGridWrapper';
import SuspenseErrorBoundary from '@components/boundary/SuspenseErrorBoundary';
import Container from '@components/container';
import StudySkeletonGrid from '@features/main/studyList/StudySkeletonGrid';
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
        setSearchKeyword={setSearchKeyword}
      />

      <Container padding="16px 0 0 0" direction="column" gap="19px">
        <SuspenseErrorBoundary suspenseFallback={<StudySkeletonGrid />}>
          <StudyGridWrapper studyFilter={studyFilter} searchKeyword={searchKeyword} />
        </SuspenseErrorBoundary>
      </Container>
    </DefaultPaddedContainer>
  );
}

export default StudyListSection;
