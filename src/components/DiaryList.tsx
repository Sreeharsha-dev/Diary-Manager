import React from 'react';
import { Book } from 'lucide-react';
import type { DiaryEntry } from '../types';

interface Props {
  entries: DiaryEntry[];
}

export function DiaryList({ entries }: Props) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
        <Book className="w-5 h-5 text-blue-600" />
        Your Diary Entries
      </h3>
      <div className="space-y-2">
        {entries.map((entry) => (
          <div key={entry.id} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm font-medium text-gray-600">{entry.date}</p>
              <p className="text-xs text-gray-400">
                {new Date(entry.createdAt).toLocaleTimeString()}
              </p>
            </div>
            <p className="text-gray-800 whitespace-pre-wrap">{entry.content}</p>
          </div>
        ))}
        {entries.length === 0 && (
          <p className="text-center text-gray-500 py-4">No diary entries yet</p>
        )}
      </div>
    </div>
  );
}