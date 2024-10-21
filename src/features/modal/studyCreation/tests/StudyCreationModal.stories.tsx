import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import StudyCreationModal from '@features/modal/studyCreation/StudyCreationModal';
import { useState } from 'react';

const meta: Meta<typeof StudyCreationModal> = {
  title: 'Features/Modal/StudyCreation/StudyCreationModal',
  component: StudyCreationModal,
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

type Story = StoryObj<typeof StudyCreationModal>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(args.open);
    return (
      open ? <StudyCreationModal open={open} onClose={() => setOpen(false)} />
      : <button onClick={() => setOpen(true)}>Open</button>
    );
  },
  args: {
    open: true,
  },
};
