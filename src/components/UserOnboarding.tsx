import React from 'react';
import { UserCircle2, Bell } from 'lucide-react';
import { notifications } from '../utils/notifications';

interface Props {
  onComplete: (name: string) => void;
}

export function UserOnboarding({ onComplete }: Props) {
  const [name, setName] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      const hasPermission = await notifications.requestPermission();
      onComplete(name);
    }
  };

  return (
    <div className="max-w-md w-full p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <div className="flex flex-col items-center gap-4">
        <UserCircle2 className="w-16 h-16 text-blue-600 dark:text-blue-400" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Welcome!</h2>
        <p className="text-gray-600 dark:text-gray-300 text-center">
          Let's personalize your experience. Please enter your name to get started.
        </p>
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 
                dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 
                focus:border-transparent dark:text-white"
              required
            />
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <Bell className="w-4 h-4" />
            <p>You'll receive browser notifications for your schedules</p>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white 
              rounded-lg transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
}