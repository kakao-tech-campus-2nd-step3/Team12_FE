import { createContext, ReactNode } from 'react';
import { useSuspenseQueries } from '@tanstack/react-query';
import { queryKeys } from '@constants/queryKeys';
import type { StudyInfoWithMembers } from '@/types/study';
import { getStudyInfo, getStudyMembers } from '@/api/study';
import { getAttendanceList, getDateList } from '@/api/attendance';

interface StudyInfoContextProps {
  studyId: number;
  children?: ReactNode;
}
interface StudyInfoContextValue {
  study: StudyInfoWithMembers;
  refetch: () => void;
}

export const StudyInfoContext = createContext<StudyInfoContextValue>({
  study: {
    members: [],
    studyAttendanceInfo: [],
    attendanceDateInfo: [],
    topic: '',
    name: '',
    is_open: true,
    description: '',
    created_at: new Date(),
    id: 0,
    profile_image: '',
  },
  refetch: () => {},
});

function StudyInfoContextProvider({ studyId, children }: StudyInfoContextProps) {
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
    ],
    combine: (result) => {
      const [studyInfo, studyMemberInfo, attendanceInfo, dateInfo] = result;
      const data: StudyInfoWithMembers = {
        ...(studyInfo.data),
        members: studyMemberInfo.data,
        studyAttendanceInfo: attendanceInfo.data,
        attendanceDateInfo: dateInfo.data.attendance_date_list,
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
