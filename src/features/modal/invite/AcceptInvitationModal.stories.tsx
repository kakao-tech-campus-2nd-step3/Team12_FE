import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import AcceptInvitationModal from '@/features/modal/invite/AcceptInvitationModal'
import { useState } from 'react';
import { Study } from '@/types/study';

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
    const study: Study = {
      id: 1,
      name: '스터디 이름',
      profile_image: 'https://via.placeholder.com/150',
      description: '스터디 설명',
      created_at: new Date(),
      is_open: true,
      topic: '스터디 주제',
    };

    function acceptInvitation() {
      console.log('acceptInvitation');
    }

    return (
      open ? <AcceptInvitationModal open={open} onClose={() => setOpen(false)} study={study} acceptInvitation={acceptInvitation}/>
      : <button onClick={() => setOpen(true)}>Open</button>
    );
  },
  args: {
    open: true,
  },
};
