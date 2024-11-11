import Container from '@components/container';
import Grid from '@components/grid';
import StudyItem from '@features/main/studyList/StudyItem';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { queryKeys } from '@constants/queryKeys';
import { useEffect } from 'react';
import type { Study, StudyFilter, StudySearchRequestQuery } from '@/types/study';
import { searchStudies } from '@/api/study';

interface StudyItemWrapperProps {
  studyFilter: StudyFilter;
  searchKeyword: string;
}

function StudyGridWrapper({ studyFilter, searchKeyword }: StudyItemWrapperProps) {
  const fetchPage = async ({ pageParam = 0 }) => {
    const params: StudySearchRequestQuery = {
      size: 15,
      page: pageParam,
      sort: 'name,asc',
    };
    if (searchKeyword) {
      params.name = searchKeyword;
    }
    if (studyFilter !== 'all') params.isOpen = studyFilter === 'open';
    return searchStudies(params);
  };
  const {
    data: studyResponse,
    // fetchNextPage, TODO: infinite scroll
    refetch,
  } = useSuspenseInfiniteQuery({
    initialData: undefined,
    initialPageParam: 0,
    queryKey: [queryKeys.MAIN_SEARCH_STUDIES, searchKeyword, studyFilter],
    queryFn: fetchPage,
    getNextPageParam: (lastPage) => (lastPage.hasNextPage ? lastPage.currentPage + 1 : undefined),
  });

  useEffect(() => {
    refetch();
  }, [refetch, studyFilter, searchKeyword]);

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
          studyResponse.pages.map((page) => (
            <StudyItemContainer
              studyList={page.studies}
              key={`study-search-${page.currentPage}`}
            />
          ))
        }
      </Grid>
    </Container>
  );
}

interface StudyItemContainerProps {
  studyList: Study[];
}

function StudyItemContainer({ studyList }: StudyItemContainerProps) {
  return studyList.map((study) => <StudyItem study={study} key={`study-item-${study.name}-${study.id}`} />);
}

export default StudyGridWrapper;
