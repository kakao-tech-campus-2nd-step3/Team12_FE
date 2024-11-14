import {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { getCode } from '@/api/attendance';

interface AttendanceInfoContextValue {
  code: string;
}

interface AttendanceInfoContextProps {
  studyId: number;
  dateId: number;
  children?: ReactNode;
}

export const MemberInfoContext = createContext<AttendanceInfoContextValue>({
  code: '',
});

export function MemberInfoContextProvider(
  { studyId, dateId, children }
  : AttendanceInfoContextProps,
) {
  const [attendanceCode, setAttendanceCode] = useState('');
  useEffect(() => {
    (async () => {
      try {
        const code = await getCode({ study_id: studyId, date_id: dateId });
        setAttendanceCode(code.data.code);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [studyId, dateId]);

  return (
    <MemberInfoContext.Provider value={{
      code: attendanceCode,
    }}
    >
      {children}
    </MemberInfoContext.Provider>
  );
}
