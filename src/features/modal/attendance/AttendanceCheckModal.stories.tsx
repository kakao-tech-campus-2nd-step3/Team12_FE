import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { useState } from 'react';
import AttendanceCheckModal from '@/features/modal/attendance/AttendanceCheckModal';
import { Toaster, toast } from 'react-hot-toast';

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


    const onClose = () => {
      setOpen(false);
    }

    const editComplete = () => {
      toast.success("수정이 완료되었습니다!");
      setOpen(false);
    }

    return (
      <>
        <Toaster position="bottom-center" reverseOrder={false} />
        {open ? (
          <AttendanceCheckModal open={open} onClose={onClose} editComplete={editComplete} date='2024-11-14'/>
        ) : (
          <button onClick={() => setOpen(true)}>Open</button>
        )}
      </>
    );
  },
  args: {
    open: true,
  },
};
