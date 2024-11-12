import React, { useState } from 'react';
import { Book } from 'lucide-react';
import type { DiaryEntry } from '../types';

interface Props {
  onSubmit: (entry: Omit<DiaryEntry, 'id' | 'createdAt'>) => void;
}

export function DiaryEntryForm({ onSubmit }: Props) {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      const today = new Date().toISOString().split('T')[0];
      onSubmit({ date: today, content });
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
        <Book className="w-5 h-5 text-blue-600" />
        Today's Diary Entry
      </h3>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your thoughts for today..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
        required
      />
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Save Entry
      </button>
    </form>
  );
}