import Grid from '@components/grid';
import { ReactNode } from 'react';

interface StudyGridProps {
  children?: ReactNode;
}

function StudyGrid({ children }: StudyGridProps) {
  return (
    <Grid
      columns={{
        initial: 1,
        xs: 2,
        md: 3,
        lg: 4,
      }}
      gap={19}
    >
      {children}
    </Grid>
  );
}

export default StudyGrid;
