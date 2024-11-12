const QUOTES = [
  "The only way to do great work is to love what you do.",
  "Believe you can and you're halfway there.",
  "Don't watch the clock; do what it does. Keep going.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "The future depends on what you do today.",
];

export const notifications = {
  getRandomQuote: (): string => {
    return QUOTES[Math.floor(Math.random() * QUOTES.length)];
  },

  requestPermission: async (): Promise<boolean> => {
    if (!('Notification' in window)) {
      console.error('This browser does not support notifications');
      return false;
    }

    if (Notification.permission === 'granted') {
      return true;
    }

    const permission = await Notification.requestPermission();
    return permission === 'granted';
  },

  sendNotification: (title: string, body: string): void => {
    if (Notification.permission === 'granted') {
      new Notification(title, {
        body,
        icon: '/notification-icon.png',
      });
    }
  },

  checkSchedule: (schedules: Schedule[]): void => {
    const now = new Date();
    const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(
      now.getMinutes()
    ).padStart(2, '0')}`;

    schedules.forEach((schedule) => {
      if (schedule.isActive && schedule.time === currentTime) {
        const quote = notifications.getRandomQuote();
        notifications.sendNotification(
          schedule.eventName,
          `It's time for your scheduled event!\n\n${quote}`
        );
      }
    });
  },
};