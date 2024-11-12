import React, { useState, useEffect } from 'react';
import { UserOnboarding } from './components/UserOnboarding';
import { ScheduleForm } from './components/ScheduleForm';
import { ScheduleList } from './components/ScheduleList';
import { DiaryEntryForm } from './components/DiaryEntry';
import { DiaryList } from './components/DiaryList';
import { ThemeToggle } from './components/ThemeToggle';
import { DateTimeDisplay } from './components/DateTimeDisplay';
import { storage } from './utils/storage';
import { notifications } from './utils/notifications';
import type { Schedule, DiaryEntry, User } from './types';

function App() {
  const [user, setUser] = useState<User | null>(storage.getUser());
  const [schedules, setSchedules] = useState<Schedule[]>(storage.getSchedules());
  const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>(storage.getDiaryEntries());

  useEffect(() => {
    if (user?.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [user?.theme]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (user?.notifications) {
        notifications.checkSchedule(schedules);
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [schedules, user]);

  const handleUserComplete = (name: string) => {
    const newUser = { name, theme: 'light' as const, notifications: true };
    setUser(newUser);
    storage.setUser(newUser);
  };

  const handleThemeToggle = () => {
    if (user) {
      const newTheme = user.theme === 'light' ? 'dark' : 'light';
      const updatedUser = { ...user, theme: newTheme };
      setUser(updatedUser);
      storage.setUser(updatedUser);
    }
  };

  const handleScheduleSubmit = (newSchedule: Omit<Schedule, 'id' | 'createdAt'>) => {
    const schedule: Schedule = {
      ...newSchedule,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    const updatedSchedules = [...schedules, schedule];
    setSchedules(updatedSchedules);
    storage.setSchedules(updatedSchedules);
  };

  const handleScheduleToggle = (id: string) => {
    const updatedSchedules = schedules.map((schedule) =>
      schedule.id === id ? { ...schedule, isActive: !schedule.isActive } : schedule
    );
    setSchedules(updatedSchedules);
    storage.setSchedules(updatedSchedules);
  };

  const handleScheduleDelete = (id: string) => {
    const updatedSchedules = schedules.filter((schedule) => schedule.id !== id);
    setSchedules(updatedSchedules);
    storage.setSchedules(updatedSchedules);
  };

  const handleDiarySubmit = (newEntry: Omit<DiaryEntry, 'id' | 'createdAt'>) => {
    const entry: DiaryEntry = {
      ...newEntry,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    const updatedEntries = [...diaryEntries, entry];
    setDiaryEntries(updatedEntries);
    storage.setDiaryEntries(updatedEntries);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
        <UserOnboarding onComplete={handleUserComplete} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-8 transition-colors">
      <DateTimeDisplay />
      <ThemeToggle theme={user.theme} onToggle={handleThemeToggle} />
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome, {user.name}!
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Manage your schedules and diary entries
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <ScheduleForm onSubmit={handleScheduleSubmit} />
            <ScheduleList
              schedules={schedules}
              onToggle={handleScheduleToggle}
              onDelete={handleScheduleDelete}
            />
          </div>

          <div className="space-y-8">
            <DiaryEntryForm onSubmit={handleDiarySubmit} />
            <DiaryList entries={diaryEntries} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;