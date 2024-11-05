import Container from '@components/container';
import Grid from '@components/grid';
import StudyItem from '@features/main/studyList/StudyItem';
import { useState } from 'react';
import type { Study } from '@/types/study';
import { mockStudyList } from '@/mock/study';

interface StudyItemWrapperProps {
  studyFilter: string;
  searchKeyword: string | undefined;
}

// @ts-ignore
// eslint-disable-next-line
function StudyGridWrapper({ studyFilter, searchKeyword }: StudyItemWrapperProps) {
  const [studies] = useState<Study[]>(mockStudyList); // TODO: studyFilter, searchKeyword를 토대로 스터디 search, suspense wrap
  return (
    <Container padding="16px 0 0 0">
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
  );
}

export default StudyGridWrapper;
