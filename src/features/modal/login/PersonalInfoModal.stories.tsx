import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import PersonalInfoModal from '@/features/modal/login/PersonalInfoModal';
import { useState } from 'react';

const meta: Meta<typeof PersonalInfoModal> = {
  title: 'Features/Modal/Login/PersonalInfoModal',
  component: PersonalInfoModal,
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

type Story = StoryObj<typeof PersonalInfoModal>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(args.open);
    return (
      open ? <PersonalInfoModal open={open} onClose={() => setOpen(false)} />
      : <button onClick={() => setOpen(true)}>Open</button>
    );
  },
  args: {
    open: true,
  },
};