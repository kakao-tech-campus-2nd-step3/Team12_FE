export interface AttendanceInfo {
  attendanceDateList: {
    attendanceDateList: string[];
  };
  memberAttendances: {
    [key: string]: MemberAttendanceInfo;
  };
}

export interface MemberAttendanceInfo {
  memberAttendanceDateStringList: string[];
  attendanceRate: string;
}

const attendanceInfo : AttendanceInfo = {
  attendanceDateList: {
    attendanceDateList: ['2024-09-01',
      '2024-10-01',
      '2024-10-11', '2024-11-01', '2024-11-05', '2024-11-10', '2024-11-15', '2024-11-20'],
  },
  memberAttendances: {
    1: {
      memberAttendanceDateStringList: ['2024-11-01', '2024-11-05', '2024-11-15'],
      attendanceRate: '0.6',
    },
    2: {
      memberAttendanceDateStringList: ['2024-11-01', '2024-11-10'],
      attendanceRate: '0.4',
    },
    3: {
      memberAttendanceDateStringList: ['2024-11-05', '2024-11-10', '2024-11-15', '2024-11-20'],
      attendanceRate: '0.8',
    },
    4: {
      memberAttendanceDateStringList: ['2024-11-01', '2024-11-05', '2024-11-10', '2024-11-15', '2024-11-20'],
      attendanceRate: '1.0',
    },
    5: {
      memberAttendanceDateStringList: ['2024-11-01'],
      attendanceRate: '0.2',
    },
    6: {
      memberAttendanceDateStringList: ['2024-11-05', '2024-11-20'],
      attendanceRate: '0.4',
    },
    7: {
      memberAttendanceDateStringList: [],
      attendanceRate: '0.0',
    },
    8: {
      memberAttendanceDateStringList: ['2024-11-01', '2024-11-10', '2024-11-15'],
      attendanceRate: '0.6',
    },
  },
};

const mockAttendanceDate: string[] = [
  '2024-09-01 14:00',
  '2024-09-11 15:00',
  '2024-10-01 15:00',
  '2024-10-11 16:00',
  '2024-11-01 17:00',
  '2024-11-05 18:00',
  '2024-11-10 19:00',
  '2024-11-15 20:00',
  '2024-11-20 21:00',
];

const mockMemberAttendance = [
  {
    id: '1',
    name: '조장',
    time: '',
    status: false,
    imageUrl: 'https://picsum.photos/200',
  },
  {
    id: '2',
    name: '네글자이',
    time: '14:01:00',
    status: true,
    imageUrl: 'https://picsum.photos/200',
  },
  {
    id: '3',
    name: '다섯글자임',
    time: '',
    status: false,
    imageUrl: 'https://picsum.photos/200',
  },
  {
    id: '4',
    name: '삼세형',
    time: '14:01:00',
    status: true,
    imageUrl: 'https://picsum.photos/200',
  },
  {
    id: '5',
    name: '일민경',
    time: '',
    status: false,
    imageUrl: 'https://picsum.photos/200',
  },
  {
    id: '6',
    name: '어렵다',
    time: '14:01:00',
    status: true,
    imageUrl: 'https://picsum.photos/200',
  },
];

export { attendanceInfo, mockAttendanceDate, mockMemberAttendance };
