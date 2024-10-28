import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import AcceptInvitationModal from './AcceptInvitationModal';
import { useState } from 'react';

const meta: Meta<typeof AcceptInvitationModal> = {
  title: 'Features/Modal/Invite/AcceptInvitationModal',
  component: AcceptInvitationModal,
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

type Story = StoryObj<typeof AcceptInvitationModal>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(args.open);
    return (
      open ? <AcceptInvitationModal open={open} onClose={() => setOpen(false)} studyName='프론트엔드 스터디' />
      : <button onClick={() => setOpen(true)}>Open</button>
    );
  },
  args: {
    open: true,
  },
};
