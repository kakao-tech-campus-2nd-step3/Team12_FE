import type { Meta, StoryObj } from '@storybook/react';
import AttendDateList from '@/features/attend/AttendDateList';

const meta: Meta<typeof AttendDateList> = {
  title: 'Features/Attend/AttendDateList',
  component: AttendDateList,
  argTypes: {
  },
};

export default meta;

type Story = StoryObj<typeof AttendDateList>;

export const Default: Story = {
};
