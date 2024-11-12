import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

export function DateTimeDisplay() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  return (
    <div className="fixed top-4 left-4 flex items-center gap-2 bg-white dark:bg-gray-800 
      px-4 py-2 rounded-lg shadow-md text-gray-800 dark:text-white">
      <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
      <span className="text-sm font-medium">{formatDate(dateTime)}</span>
    </div>
  );
}