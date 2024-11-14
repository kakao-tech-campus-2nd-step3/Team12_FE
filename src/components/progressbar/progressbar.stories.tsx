import type { Meta, StoryObj } from '@storybook/react';
import ProgressBar from '@/components/progressbar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/Progressbar',
  component: ProgressBar,
  argTypes: {
    progress: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const ProgressBarDefault: Story = {
  args: {
    progress: 50,
    description: '완료율',
  },
};
