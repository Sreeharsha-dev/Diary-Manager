export interface Schedule {
  id: string;
  time: string;
  eventName: string;
  isActive: boolean;
  createdAt: string;
}

export interface DiaryEntry {
  id: string;
  date: string;
  content: string;
  createdAt: string;
}

export interface User {
  name: string;
  theme: 'light' | 'dark';
  notifications: boolean;
}