import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import InviteToStudyModal from '@/features/modal/invite/InviteToStudyModal';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const meta: Meta<typeof InviteToStudyModal> = {
  title: 'Features/Modal/Invite/InviteToStudyModal',
  component: InviteToStudyModal,
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

type Story = StoryObj<typeof InviteToStudyModal>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(args.open);
    const copyComplete = () => {
      toast.success("복사가 완료되었습니다!");
    }

    return (
      <>
        <Toaster position="bottom-center" reverseOrder={false} />
        {open ? (
          <InviteToStudyModal
            open={open} 
            onClose={() => setOpen(false)} 
            studyId={11} 
            copyComplete={copyComplete} 
            studyName={'스터디'}
          />
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
