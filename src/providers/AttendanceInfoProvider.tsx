import {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { checkAttendance, getCode } from '@/api/attendance';

interface AttendanceInfoContextValue {
  code: string;
  checkAttend: (submitCode: string) => Promise<void>;
}

interface AttendanceInfoContextProps {
  studyId: number;
  dateId?: number;
  children?: ReactNode;
}

export const AttendanceInfoContext = createContext<AttendanceInfoContextValue>({
  code: '',
  checkAttend: async () => {},
});

export function AttendanceInfoContextProvider(
  { studyId, dateId, children }
  : AttendanceInfoContextProps,
) {
  const [attendanceCode, setAttendanceCode] = useState('');

  useEffect(() => {
    (async () => {
      if (!dateId) return;
      try {
        const code = await getCode({ study_id: studyId, date_id: dateId });
        setAttendanceCode(code.code);
      } catch (error) {
        console.error('Failed to fetch attendance code:', error);
      }
    })();
  }, [studyId, dateId]);

  const checkAttend = async (submitCode: string): Promise<void> => {
    const requestData = {
      date_id: dateId,
      code: submitCode,
    };
    await checkAttendance(
      { requestData, study_id: studyId.toString() },
    );
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
