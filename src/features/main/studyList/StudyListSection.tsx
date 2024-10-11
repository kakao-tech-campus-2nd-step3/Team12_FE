import { DefaultPaddedContainer } from '@components/container/variants';
import { useState } from 'react';
import StudyFilterSection from '@features/main/studyList/StudyFilterSection';
import Grid from '@components/grid';
import StudyItem from '@features/main/studyList/StudyItem';
import Container from '@components/container';
import { Study } from '@/types/study';
import { mockFilters, mockStudyList } from '@/mock/study';

function StudyListSection() {
  const [studyFilters, setStudyFilters] = useState<string[]>(mockFilters);
  // TODO: 추후에 백엔드와 논의하여 filter type 정의
  const [studies] = useState<Study[]>(mockStudyList);

  return (
    <DefaultPaddedContainer>
      <StudyFilterSection filters={studyFilters} setFilters={setStudyFilters} />
      <Container padding="25px 0 0 0">
        <Grid
          columns={{
            initial: 1,
            xs: 2,
            md: 3,
            lg: 5,
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
