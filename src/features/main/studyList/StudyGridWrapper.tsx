import StudyItem from '@features/main/studyList/StudyItem';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { queryKeys } from '@constants/queryKeys';
import { useEffect } from 'react';
import StudyGrid from '@features/main/studyList/StudyGrid';
import { useInView } from 'react-intersection-observer';
import StudyItemSkeleton from '@features/main/studyList/StudyItemSkeleton';
import type {
  StudyFilter,
  DetailedStudyInfo,
  StudySearchRequestQuery,
} from '@/types/study';
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
      sort: 'createdAt,desc',
    };
    if (searchKeyword) {
      params.name = searchKeyword;
    }
    if (studyFilter !== 'all') params.isOpen = studyFilter === 'open';
    return searchStudies(params);
  };
  const { ref, inView } = useInView({ threshold: 1 });
  const {
    data: studyResponse,
    isFetchingNextPage,
    fetchNextPage,
    refetch,
  } = useSuspenseInfiniteQuery({
    initialData: undefined,
    initialPageParam: 0,
    queryKey: [queryKeys.MAIN_SEARCH_STUDIES, searchKeyword, studyFilter],
    queryFn: fetchPage,
    getNextPageParam: (lastPage) => (
      lastPage.has_next_page ? lastPage.current_page + 1 : undefined
    ),
  });

  useEffect(() => {
    refetch();
  }, [refetch, studyFilter, searchKeyword]);

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  return (
    <>
      <StudyGrid>
        {
          studyResponse.pages.map((page) => (
            <StudyItemContainer
              studyList={page.study_list}
              key={`study-search-${page.current_page}`}
            />
          ))
        }
        {
          isFetchingNextPage && [...Array(8).keys()].map((i) => {
            const key = `study-skeleton-nextpage-${i}`;
            return (
              <StudyItemSkeleton key={key} />
            );
          })
        }
      </StudyGrid>
      <div css={{ height: '30px' }} ref={ref} />
    </>
  );
}

interface StudyItemContainerProps {
  studyList: DetailedStudyInfo[];
}

function StudyItemContainer({ studyList }: StudyItemContainerProps) {
  return studyList.map((study) => <StudyItem study={study} key={`study-item-${study.name}-${study.id}`} />);
}

export default StudyGridWrapper;
