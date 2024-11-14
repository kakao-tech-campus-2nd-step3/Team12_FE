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

export const AttendanceInfoContext = createContext<AttendanceInfoContextValue>({
  code: '',
});

export function AttendanceInfoContextProvider(
  { studyId, dateId, children }
  : AttendanceInfoContextProps,
) {
  const [attendanceCode, setAttendanceCode] = useState('');
  useEffect(() => {
    (async () => {
      try {
        const code = await getCode({ study_id: studyId, date_id: dateId });
        setAttendanceCode(code.code);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [studyId, dateId]);

  return (
    <AttendanceInfoContext.Provider value={{
      code: attendanceCode,
    }}
    >
      {children}
    </AttendanceInfoContext.Provider>
  );
}
