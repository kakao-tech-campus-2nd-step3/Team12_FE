import { createContext, ReactNode } from 'react';
import { useSuspenseQueries } from '@tanstack/react-query';
import { queryKeys } from '@constants/queryKeys';
import type { ExtendedStudyInfo } from '@/types/study';
import { getMyRole, getStudyInfo, getStudyMembers } from '@/api/study';
import { getAttendanceList, getDateList } from '@/api/attendance';
import { getNoticeList } from '@/api/notice';
import { getAssignList } from '@/api/assignment';

interface StudyInfoContextProps {
  studyId: number;
  children?: ReactNode;
}
interface StudyInfoContextValue {
  study: ExtendedStudyInfo;
  refetch: () => void;
}

export const StudyInfoContext = createContext<StudyInfoContextValue>({
  study: {
    members: [],
    study_attendance_info: {
      required_attendance: [],
      member_attendance: {},
    },
    attendance_date_info: [],
    topic: '',
    name: '',
    is_open: true,
    description: '',
    created_at: new Date(),
    id: 0,
    profile_image: '',
    my_role: '',
  },
  refetch: () => {},
});

export function StudyInfoContextProvider({ studyId, children }: StudyInfoContextProps) {
  const {
    data: study,
    refetch,
  } = useSuspenseQueries({
    queries: [
      {
        queryKey: [queryKeys.STUDY_INFO, studyId],
        queryFn: () => getStudyInfo(studyId),
      },
      {
        queryKey: [queryKeys.STUDY_MEMBERS, studyId],
        queryFn: () => getStudyMembers(studyId),
      },
      {
        queryKey: [queryKeys.STUDY_ATTENDANCE_DATES, studyId],
        queryFn: () => getAttendanceList(studyId),
      },
      {
        queryKey: [queryKeys.STUDY_ATTENDANCE_INFO, studyId],
        queryFn: () => getDateList(studyId),
      },
      {
        queryKey: [queryKeys.STUDY_NOTICE_INFO, studyId],
        queryFn: () => getNoticeList({
          sort: 'createdAt,desc', page: 0, size: 1, studyId,
        }),
      },
      {
        queryKey: [queryKeys.STUDY_ASSIGNMENT_INFO, studyId],
        queryFn: () => getAssignList({
          sort: 'createdAt,desc', page: 0, size: 1, studyId,
        }),
      },
      {
        queryKey: [queryKeys.STUDY_ROLES, studyId],
        queryFn: () => getMyRole(studyId),
      },

    ],
    combine: (result) => {
      const [studyInfo,
        studyMemberInfo,
        attendanceInfo,
        dateInfo,
        noticeInfo,
        assignmentInfo,
        roleInfo,
      ] = result;
      const data: ExtendedStudyInfo = {
        ...(studyInfo.data),
        members: studyMemberInfo.data,
        study_attendance_info: attendanceInfo.data,
        attendance_date_info: dateInfo.data.attendance_date_list,
        notice: noticeInfo.data.notices.length === 1 ? noticeInfo.data.notices[0] : undefined,
        assignment: assignmentInfo.data.assignments.length === 1
          ? assignmentInfo.data.assignments[0]
          : undefined,
        my_role: roleInfo.data,
      };
      const refetchInfos = () => {
        studyInfo.refetch();
        studyMemberInfo.refetch();
      };
      return {
        data,
        refetch: refetchInfos,
      };
    },
  });
  return (
    <StudyInfoContext.Provider value={{ study, refetch }}>
      {children}
    </StudyInfoContext.Provider>
  );
}

export default StudyInfoContextProvider;
