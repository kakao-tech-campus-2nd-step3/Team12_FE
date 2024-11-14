import { createContext, ReactNode } from 'react';
import { useSuspenseQueries } from '@tanstack/react-query';
import { queryKeys } from '@constants/queryKeys';
import type { StudyInfoWithMembers } from '@/types/study';
import { getStudyInfo, getStudyMembers } from '@/api/study';

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
    // attendanceDate: [],
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
    ],
    combine: (result) => {
      const [studyInfo, studyMemberInfo] = result;
      const data: StudyInfoWithMembers = {
        ...(studyInfo.data),
        members: studyMemberInfo.data,
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
