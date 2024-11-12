import React from 'react';
import { Clock, Trash2, ToggleLeft, ToggleRight } from 'lucide-react';
import type { Schedule } from '../types';
import { formatTime12Hour } from '../utils/dateTime';

interface Props {
  schedules: Schedule[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function ScheduleList({ schedules, onToggle, onDelete }: Props) {
  const sortedSchedules = [...schedules].sort((a, b) => a.time.localeCompare(b.time));

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center gap-2">
        <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        Your Schedules
      </h3>
      <div className="space-y-2">
        {sortedSchedules.map((schedule) => (
          <div
            key={schedule.id}
            className="flex items-center justify-between bg-white dark:bg-gray-800 
              p-4 rounded-lg shadow-sm"
          >
            <div>
              <p className="font-medium text-gray-800 dark:text-white">{schedule.eventName}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {formatTime12Hour(schedule.time)}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onToggle(schedule.id)}
                className="p-2 text-gray-600 dark:text-gray-400 
                  hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label={schedule.isActive ? "Disable schedule" : "Enable schedule"}
              >
                {schedule.isActive ? (
                  <ToggleRight className="w-6 h-6" />
                ) : (
                  <ToggleLeft className="w-6 h-6" />
                )}
              </button>
              <button
                onClick={() => onDelete(schedule.id)}
                className="p-2 text-gray-600 dark:text-gray-400 
                  hover:text-red-600 dark:hover:text-red-400 transition-colors"
                aria-label="Delete schedule"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
        {schedules.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 py-4">No schedules yet</p>
        )}
      </div>
    </div>
  );
}