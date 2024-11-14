export interface Attendance {
  id: number;
  study_id: number;
  start_time: string;
  time_interval: number;
  deadline: string;
}

export interface AttendanceInfo {
  required_attendance: string[];
  member_attendance: {
    [key: string]: MemberAttendanceInfo;
  };
}

export interface MemberAttendanceInfo {
  member_attendance_list: string[];
  attendance_rate: string;
}

export type AttendanceCreationRequestBody = Pick<Attendance, 'study_id' | 'start_time' | 'time_interval'>;
export type AttendDateCreationInputs = AttendDateCreationRequestBody;
export type AttendanceResponse = Pick<Attendance, 'id' | 'start_time' | 'deadline'>;
export type RequireAttendanceDate = AttendanceResponse;
export type MemberAttendance = MemberAttendanceInfo;
export type MemberAttendanceResponse = AttendanceInfo;
