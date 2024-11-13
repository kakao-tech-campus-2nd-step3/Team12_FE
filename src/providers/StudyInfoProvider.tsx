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
}

export const StudyInfoContext = createContext<StudyInfoContextValue>({
  study: {
    members: [],
    // attendanceDate: [],
    topic: '',
    name: '',
    isOpen: true,
    description: '',
    createdAt: new Date(),
    id: 0,
    profileImage: '',
  },
});

function StudyInfoContextProvider({ studyId, children }: StudyInfoContextProps) {
  const {
    data: study,
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
      return {
        data,
      };
    },
  });
  return (
    <StudyInfoContext.Provider value={{ study }}>
      {children}
    </StudyInfoContext.Provider>
  );
}

export default StudyInfoContextProvider;