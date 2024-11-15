import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { useState } from 'react';
import EnterCodeModal from '@/features/modal/attendance/EnterCodeModal';
import { Toaster } from 'react-hot-toast';
import { AttendanceInfoContextProvider } from '@/providers/AttendanceInfoProvider';

const meta: Meta<typeof EnterCodeModal> = {
  title: 'Features/Modal/Attendance/EnterCodeModal',
  component: EnterCodeModal,
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

type Story = StoryObj<typeof EnterCodeModal>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(args.open);


    const onClose = () => {
      setOpen(false);
    }

    return (
      <>
      <AttendanceInfoContextProvider studyId={206} dateId={38}>

        <Toaster position="bottom-center" reverseOrder={false} />
        {open ? ( 
          <EnterCodeModal open={open} onClose={onClose} role='스터디원' />
        ) : (
          <button onClick={() => setOpen(true)}>Open</button>
        )}
        </AttendanceInfoContextProvider>
      </>
    );
  },
  args: {
    open: true,
  },
};
