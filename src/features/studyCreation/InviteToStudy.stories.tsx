import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import InviteToStudyModal from '@/features/studyCreation/InviteToStudyModal';
import { useState } from 'react';

const meta: Meta<typeof InviteToStudyModal> = {
  title: 'Features/studyCreation/InviteToStudyModal',
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
    return (
      open ? <InviteToStudyModal open={open} onClose={() => setOpen(false)} />
      : <button onClick={() => setOpen(true)}>Open</button>
    );
  },
  args: {
    open: true,
  },
};