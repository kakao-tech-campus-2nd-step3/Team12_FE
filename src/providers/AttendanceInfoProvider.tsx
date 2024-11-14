import {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { checkAttendance, getCode } from '@/api/attendance';

interface AttendanceInfoContextValue {
  code: string;
  checkAttend: () => void;
}

interface AttendanceInfoContextProps {
  studyId: number;
  dateId?: number;
  children?: ReactNode;
}

export const AttendanceInfoContext = createContext<AttendanceInfoContextValue>({
  code: '',
  checkAttend: () => {},
});

export function AttendanceInfoContextProvider(
  { studyId, dateId, children }
  : AttendanceInfoContextProps,
) {
  const [attendanceCode, setAttendanceCode] = useState('');
  useEffect(() => {
    (async () => {
      try {
        if (!dateId) return;
        const code = await getCode({ study_id: studyId, date_id: dateId });
        setAttendanceCode(code.code);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [studyId, dateId]);

  const checkAttend = async () => {
    try {
      const requestData = {
        date_id: dateId,
        code: attendanceCode,
      };
      checkAttendance(
        { requestData, study_id: studyId.toString() },
      );
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AttendanceInfoContext.Provider value={{
      code: attendanceCode,
      checkAttend,
    }}
    >
      {children}
    </AttendanceInfoContext.Provider>
  );
}
