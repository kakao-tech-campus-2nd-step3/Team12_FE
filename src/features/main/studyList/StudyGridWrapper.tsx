import StudyItem from '@features/main/studyList/StudyItem';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { queryKeys } from '@constants/queryKeys';
import { useEffect } from 'react';
import StudyGrid from '@features/main/studyList/StudyGrid';
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
    <StudyGrid>
      {
        studyResponse.pages.map((page) => (
          <StudyItemContainer
            studyList={page.studies}
            key={`study-search-${page.currentPage}`}
          />
        ))
      }
    </StudyGrid>
  );
}

interface StudyItemContainerProps {
  studyList: Study[];
}

function StudyItemContainer({ studyList }: StudyItemContainerProps) {
  return studyList.map((study) => <StudyItem study={study} key={`study-item-${study.name}-${study.id}`} />);
}

export default StudyGridWrapper;
