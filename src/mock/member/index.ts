export interface Member {
  id: number;
  nickname: string;
  description: string;
  profileImage?: string;
}

export interface MemberInfo {
  member: Member;
  role: string;
  joined_at: string;
}

const members: MemberInfo[] = [
  {
    member: {
      id: 4,
      nickname: '어피치',
      description: '카카오프랜즈',
      profileImage: 'https://i.pinimg.com/564x/f7/97/af/f797af58d1c77a6b434a728fa03966e7.jpg',
    },
    role: '스터디장',
    joined_at: '2024-11-08T00:00:00',
  },
  {
    member: {
      id: 5,
      nickname: '라이언',
      description: '안녕안녕',
      profileImage: 'https://i.pinimg.com/564x/f7/97/af/f797af58d1c77a6b434a728fa03966e7.jpg',
    },
    role: '스터디원',
    joined_at: '2024-11-04T00:00:00',
  },
];

export { members };
