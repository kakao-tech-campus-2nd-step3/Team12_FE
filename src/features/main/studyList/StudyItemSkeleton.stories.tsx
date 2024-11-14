import type { Meta, StoryObj } from '@storybook/react';
import StudyItemSkeleton from '@features/main/studyList/StudyItemSkeleton';
import Grid from '@components/grid';

const meta: Meta<typeof StudyItemSkeleton> = {
  title: 'Features/Main/StudyListSection/StudyItemSkeleton',
  component: StudyItemSkeleton,
  argTypes: {
  },
};

export default meta;

type Story = StoryObj<typeof StudyItemSkeleton>;

export const Default: Story = {
  render: () => (
    <Grid
      columns={{
        initial: 1,
        xs: 2,
        md: 3,
        lg: 4,
      }}
      gap={19}>
      <StudyItemSkeleton />
      <StudyItemSkeleton />
      <StudyItemSkeleton />
    </Grid>
  )
};
