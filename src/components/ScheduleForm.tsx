import React, { useState } from 'react';
import { Clock, Calendar } from 'lucide-react';
import type { Schedule } from '../types';
import { formatTime12Hour } from '../utils/dateTime';

interface Props {
  onSubmit: (schedule: Omit<Schedule, 'id' | 'createdAt'>) => void;
}

export function ScheduleForm({ onSubmit }: Props) {
  const [time, setTime] = useState('');
  const [eventName, setEventName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (time && eventName) {
      onSubmit({ time, eventName, isActive: true });
      setTime('');
      setEventName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center gap-2">
        <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        Add New Schedule
      </h3>
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Time</label>
          <div className="mt-1 relative">
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="pl-10 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 
                dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 
                focus:ring-blue-500 focus:border-transparent"
              required
            />
            {time && (
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 dark:text-gray-400">
                {formatTime12Hour(time)}
              </span>
            )}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Event Name</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            placeholder="Enter event name"
            className="mt-1 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 
              dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 
              focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg 
          hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
      >
        Add Schedule
      </button>
    </form>
  );
}