export interface Member {
  id: number;
  nickname: string;
  description: string;
  profileImage?: string;
}

export interface MemberInfo {
  member: Member;
  role: string;
  join_at: string;
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
    join_at: '2024-11-08T00:00:00',
  },
  {
    member: {
      id: 5,
      nickname: '라이언',
      description: '안녕안녕',
      profileImage: 'https://i.pinimg.com/564x/f7/97/af/f797af58d1c77a6b434a728fa03966e7.jpg',
    },
    role: '스터디원',
    join_at: '2024-11-04T00:00:00',
  },
];

export { members };

export const mockMemberList = [
  {
    id: 1,
    name: '김철수',
    nickname: '김디토',
    email: 'agile@gmail.com',
    description: '안녕하세용 김디토이고 하 뭐라해야하냐 목데이턴지 몫데이턴지 만드는게 제일 힘드네',
    contact: '010-1234-1234',
  },
  {
    id: 2,
    name: '김철수',
    nickname: '김기토',
    email: 'agile@gmail.com',
    description: '안녕하세용 김디토이고 하 뭐라해야하냐 목데이턴지 몫데이턴지 만드는게 제일 힘드네',
    contact: '010-1234-4321',
  },
  {
    id: 3,
    name: '김철수',
    nickname: '김니토',
    email: 'agile@gmail.com',
    description: '안녕하세용 김디토이고 하 뭐라해야하냐 목데이턴지 몫데이턴지 만드는게 제일 힘드네',
    contact: '010-1234-2413',
  },
  {
    id: 4,
    name: '김철수',
    nickname: '김디토',
    email: 'agile@gmail.com',
    description: '안녕하세용 김디토이고 하 뭐라해야하냐 목데이턴지 몫데이턴지 만드는게 제일 힘드네 저는 동명방구입니다',
    contact: '010-1234-3412',
  },
  {
    id: 6,
    name: '김철수',
    nickname: '김리토',
    email: 'agile@gmail.com',
    description: '안녕하세용 김디토이고 하 뭐라해야하냐 목데이턴지 몫데이턴지 만드는게 제일 힘드네저는 동명이인입니다',
    contact: '010-1234-4231',
  },
  {
    id: 7,
    name: '김철수',
    nickname: '김미토',
    email: 'agile@gmail.com',
    description: '안녕하세용 김디토이고 하 뭐라해야하냐 목데이턴지 몫데이턴지 만드는게 제일 힘드네저는공명입니다.',
    contact: '010-1234-1324',
  },
];
