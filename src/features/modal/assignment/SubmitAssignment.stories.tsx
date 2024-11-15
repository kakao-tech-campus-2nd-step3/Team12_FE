import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import SubmitAssignmentModal from '@features/modal/assignment/SubmitAssignment'
import { useState } from 'react';

const meta: Meta<typeof SubmitAssignmentModal> = {
  title: 'Features/Modal/Assignment/SubmitAssignmentModal',
  component: SubmitAssignmentModal,
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

type Story = StoryObj<typeof SubmitAssignmentModal>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(args.open);
    return (
      open ? <SubmitAssignmentModal open={open} onClose={() => setOpen(false)} assignId='1' assignName='애자일한 개발 완성' assignDesc='과제 설명입니다. 애자일하게 완성합시다 애자일 애자일'/>
      : <button onClick={() => setOpen(true)}>Open</button>
    );
  },
  args: {
    open: true,
  },
};
