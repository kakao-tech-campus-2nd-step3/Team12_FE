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
      nickname: "어피치",
      description: "카카오프랜즈",
      profileImage: "null"
    },
    role: "스터디장",
    joined_at: "2024-11-08T00:00:00"
  },
  {
    member: {
      id: 5,
      nickname: "라이언",
      description: "안녕안녕",
      profileImage: "null"
    },
    role: "스터디원",
    joined_at: "2024-11-04T00:00:00"
  }
];

export { members };