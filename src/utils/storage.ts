import type { Schedule, DiaryEntry, User } from '../types';

const STORAGE_KEYS = {
  USER: 'scheduler_user',
  SCHEDULES: 'scheduler_schedules',
  DIARY: 'scheduler_diary',
} as const;

export const storage = {
  getUser: (): User | null => {
    const data = localStorage.getItem(STORAGE_KEYS.USER);
    return data ? JSON.parse(data) : null;
  },

  setUser: (user: User): void => {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  },

  getSchedules: (): Schedule[] => {
    const data = localStorage.getItem(STORAGE_KEYS.SCHEDULES);
    return data ? JSON.parse(data) : [];
  },

  setSchedules: (schedules: Schedule[]): void => {
    localStorage.setItem(STORAGE_KEYS.SCHEDULES, JSON.stringify(schedules));
  },

  getDiaryEntries: (): DiaryEntry[] => {
    const data = localStorage.getItem(STORAGE_KEYS.DIARY);
    return data ? JSON.parse(data) : [];
  },

  setDiaryEntries: (entries: DiaryEntry[]): void => {
    localStorage.setItem(STORAGE_KEYS.DIARY, JSON.stringify(entries));
  },
};