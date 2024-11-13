export interface Attendance {
  id: number;
  study_id: number;
  start_time: string;
  time_interval: number;
}

export type AttendanceCreationRequestBody = Pick<Attendance, 'study_id' | 'start_time' | 'time_interval'>;
export type AttendDateCreationInputs = AttendDateCreationRequestBody;
