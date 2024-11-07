interface AttendanceInfo {
  requiredAttendance: string[];
  memberId: { [key: string]: MemberAttendanceInfo };
}

interface MemberAttendanceInfo {
  memberAttendance: string[];
  attendanceRate: number;
}

const attendanceInfo: AttendanceInfo = {
  requiredAttendance: ['2024-11-01', '2024-11-05', '2024-11-10', '2024-11-15', '2024-11-20'],
  memberId: {
    member1: {
      memberAttendance: ['2024-11-01', '2024-11-05', '2024-11-15'],
      attendanceRate: 0.6,
    },
    member2: {
      memberAttendance: ['2024-11-01', '2024-11-10'],
      attendanceRate: 0.4,
    },
    member3: {
      memberAttendance: ['2024-11-05', '2024-11-10', '2024-11-15', '2024-11-20'],
      attendanceRate: 0.8,
    },
    member4: {
      memberAttendance: ['2024-11-01', '2024-11-05', '2024-11-10', '2024-11-15', '2024-11-20'],
      attendanceRate: 1.0,
    },
    member5: {
      memberAttendance: ['2024-11-01'],
      attendanceRate: 0.2,
    },
    member6: {
      memberAttendance: ['2024-11-05', '2024-11-20'],
      attendanceRate: 0.4,
    },
    member7: {
      memberAttendance: [],
      attendanceRate: 0.0,
    },
    member8: {
      memberAttendance: ['2024-11-01', '2024-11-10', '2024-11-15'],
      attendanceRate: 0.6,
    },
  },
};

const mockAttendanceDate: string[] = [
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
