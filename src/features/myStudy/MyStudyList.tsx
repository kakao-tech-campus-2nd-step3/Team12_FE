import { DefaultPaddedContainer } from '@components/container/variants';
import { useState, useEffect } from 'react';
import { Heading } from '@components/text';
import Container from '@components/container';
import Grid from '@components/grid';
import MyStudyListItem from '@features/myStudy/MyStudyListItem';
import { Study } from '@/types/study';
import { getMyStudies } from '@/api/study';

export default function MyStudyList() {
  const [studies, setStudies] = useState<Study[]>([]);

  useEffect(() => {
    const fetchStudies = async () => {
      try {
        const myStudiesInfo: Study[] = await getMyStudies();
        setStudies(myStudiesInfo);
      } catch (e) {
        console.error('과제를 불러오는 데 실패했습니다:', e);
      }
    };

    fetchStudies();
  });

  return (
    <DefaultPaddedContainer css={{ boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)' }}>
      <Container direction="column" padding="0 10px 50px 10px">
        <Container justify="flex-start" padding="15px">
          <Heading.H2 css={{ margin: '20px 0', fontWeight: 'bold' }}>내 스터디</Heading.H2>
        </Container>
        <Grid
          columns={{
            initial: 1,
            xs: 3,
            md: 4,
            lg: 5,
          }}
          gap={19}
        >
          {studies.map((study) => (
            <MyStudyListItem
              key={`submitted-item-${study.id}`}
              study={study}
            />
          ))}
        </Grid>
      </Container>
    </DefaultPaddedContainer>
  );
}
