export interface Study {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  isOpen: boolean;
  topic: string;
  profileImage?: string;
}
