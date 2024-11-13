export interface Attendance {
  id: number;
  study_id: number;
  start_time: string;
  time_interval: number;
  deadline: string;
}

export interface AttendanceInfo {
  attendance_date_list: {
    attendanceDateList: string[];
  };
  member_attendance: {
    [key: string]: MemberAttendanceInfo;
  };
}

export interface MemberAttendanceInfo {
  memberAttendanceDateStringList: string[];
  attendanceRate: string;
}

export type AttendanceCreationRequestBody = Pick<Attendance, 'study_id' | 'start_time' | 'time_interval'>;
export type AttendDateCreationInputs = AttendDateCreationRequestBody;
export type AttendanceResponse = Pick<Attendance, 'id' | 'start_time' | 'deadline'>;
export type MemberAttendance = MemberAttendanceInfo;
export type MemberAttendanceResponse = AttendanceInfo;
