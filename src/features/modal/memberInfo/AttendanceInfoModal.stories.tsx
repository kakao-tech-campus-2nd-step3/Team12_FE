import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { useState } from 'react';
import AttendanceInfoModal from '@/features/modal/memberInfo/AttendanceInfoModal';
import { members } from '@/mock/member';
import { attendanceInfo } from '@/mock/attendance';

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
    const [open, setOpen] = useState(args.open);
    const memberId = "4";
    const memberAttendanceInfo = attendanceInfo.memberAttendances[memberId];
    const attendanceDateList = attendanceInfo.attendanceDateList.attendanceDateList;
    return (
      open ? <AttendanceInfoModal open={open} onClose={() => setOpen(false)} memberInfo={members[0]} memberAttendanceInfo={memberAttendanceInfo} attendanceDateList={attendanceDateList}/>
      : <button onClick={() => setOpen(true)}>Open</button>
    );
  },
  args: {
    open: true,
  },
};