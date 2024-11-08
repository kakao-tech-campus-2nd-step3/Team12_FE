import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { useState } from 'react';
import AssignmentInfoModal from '@/features/modal/memberInfo/AssignmentInfoModal';
import { members } from '@/mock/member';

const meta: Meta<typeof AssignmentInfoModal> = {
  title: 'Features/Modal/MemberInfo/AssignmentInfoModal',
  component: AssignmentInfoModal,
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

type Story = StoryObj<typeof AssignmentInfoModal>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(args.open);
    return (
      open ? <AssignmentInfoModal open={open} onClose={() => setOpen(false)} memberInfos={members}/>
      : <button onClick={() => setOpen(true)}>Open</button>
    );
  },
  args: {
    open: true,
  },
};