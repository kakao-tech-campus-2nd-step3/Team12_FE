import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { useState } from 'react';
import AttendanceCheckModal from '@/features/modal/attendance/AttendanceCheckModal';

const meta: Meta<typeof AttendanceCheckModal> = {
  title: 'Features/Modal/Attendance/AttendanceCheckModal',
  component: AttendanceCheckModal,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    open: {
      control: 'boolean',
    },
    onClose: {
      action: 'onClose',
    },
  },
};

export default meta;

type Story = StoryObj<typeof AttendanceCheckModal>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(args.open);
    return (
      open ? <AttendanceCheckModal open={open} onClose={() => setOpen(false)} />
      : <button onClick={() => setOpen(true)}>Open</button>
    );
  },
  args: {
    open: true,
  },
};
