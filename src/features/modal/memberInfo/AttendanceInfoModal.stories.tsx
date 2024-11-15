import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import AttendanceInfoModal from '@/features/modal/memberInfo/AttendanceInfoModal';

const meta: Meta<typeof AttendanceInfoModal> = {
  title: 'Features/Modal/MemberInfo/AttendanceInfoModal',
  component: AttendanceInfoModal,
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

type Story = StoryObj<typeof AttendanceInfoModal>;

export const Default: Story = {
  render: (args) => {


    return (
      <>
      <div>TEST</div>
      <AttendanceInfoModal {...args} />
      </>
    );
  },
  args: {
    open: true,
  },
};
