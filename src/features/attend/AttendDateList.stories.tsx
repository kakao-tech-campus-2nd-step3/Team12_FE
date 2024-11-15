import type { Meta, StoryObj } from '@storybook/react';
import AttendDateList from '@/features/attend/AttendDateList';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<typeof AttendDateList> = {
  title: 'Features/Attend/AttendDateList',
  component: AttendDateList,
  argTypes: {
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof AttendDateList>;

export const Default: Story = {
  render: () => <AttendDateList />,
  args: {
  },
};
