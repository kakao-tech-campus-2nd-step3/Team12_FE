import StudyGrid from '@features/main/studyList/StudyGrid';
import StudyItemSkeleton from '@features/main/studyList/StudyItemSkeleton';

function StudySkeletonGrid() {
  return (
    <StudyGrid>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
        <StudyItemSkeleton key={`study-skeleton-${value}`} />
      ))}
    </StudyGrid>
  );
}

export default StudySkeletonGrid;
