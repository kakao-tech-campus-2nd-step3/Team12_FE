import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AttendanceInfoModal from '@/features/modal/memberInfo/AttendanceInfoModal';
import { getStudyMember } from '@/api/study';
import { StudyMember } from '@/types/study';
import { getAttendanceList } from '@/api/attendance';
import { AttendanceInfo, MemberAttendanceResponse } from '@/types/attendance';

const meta: Meta<typeof AttendanceInfoModal> = {
  title: 'Features/Modal/MemberInfo/AssignmentInfoModal',
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
    const [members, setMembers] = useState<StudyMember[]>([]);
    const [loading, setLoading] = useState(true); 
    const [memberAttendanceInfo, setMemberAttendance] = useState<AttendanceInfo>();

    useEffect(() => {
      const fetchStudyMember = async () => {
        try {
          const response = await getStudyMember(11);
          setMembers(response);
        } catch (error) {
          console.error("Error fetching members:", error);
        } finally {
          setLoading(false);
        }
      };

      async function fetchMemberAttendance(): Promise<void> {
        const response: MemberAttendanceResponse = await getAttendanceList(11);
        setMemberAttendance(response);
        console.log("Fetched member attendance:", response);
      }


      fetchStudyMember();
      fetchMemberAttendance();
    }, []);

    return (
      open ? (
        loading ? (
          <div>Loading...</div>
        ) : members.length > 0 ? (
          <AttendanceInfoModal
            open={open}
            onClose={() => setOpen(false)}
            memberInfo={members[0]}
            memberAttendanceInfo={memberAttendanceInfo?.member_attendance["4"] ?? null}
            attendanceDateList={memberAttendanceInfo?.attendance_date_list ?? null}
          />
        ) : (
          <div>No member data available</div>
        )
      ) : (
        <button onClick={() => setOpen(true)}>Open</button>
      )
    );
  },
  args: {
    open: true,
  },
};
