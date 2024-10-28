import { DefaultPaddedContainer } from '@components/container/variants';
import { useState } from 'react';
import StudyFilterSection from '@features/main/studyList/StudyFilterSection';
import Grid from '@components/grid';
import StudyItem from '@features/main/studyList/StudyItem';
import Container from '@components/container';
import type { Study, StudyFilter } from '@/types/study';
import { mockStudyList } from '@/mock/study';

function StudyListSection() {
  const [studyFilter, setStudyFilter] = useState<StudyFilter>('all');
  const [searchKeyword, setSearchKeyword] = useState('');
  // TODO: 추후에 백엔드와 논의하여 filter type 정의
  const [studies] = useState<Study[]>(mockStudyList);

  return (
    <DefaultPaddedContainer>
      <StudyFilterSection
        studyFilter={studyFilter}
        setStudyFilter={setStudyFilter}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
      <Container padding="25px 0 0 0">
        <Grid
          columns={{
            initial: 1,
            xs: 2,
            md: 3,
            lg: 4,
          }}
          gap={19}
        >
          {
            studies.map((study) => (
              <StudyItem study={study} key={`study-item-${study.id}`} />
            ))
          }
        </Grid>
      </Container>
    </DefaultPaddedContainer>
  );
}

export default StudyListSection;
