# Daily Schedule & Diary Manager

A beautiful, modern web application for managing daily schedules and personal diary entries. Built with React, TypeScript, and Tailwind CSS.

![Schedule Manager Preview](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=2072)

## ✨ Features

- **Schedule Management**
  - Create and manage daily schedules
  - Set custom event times with AM/PM format
  - Enable/disable schedules as needed
  - Automatic browser notifications with motivational quotes
  - Sort schedules by time

- **Personal Diary**
  - Write and save daily diary entries
  - Automatic date and time tracking
  - View previous entries in chronological order

- **User Experience**
  - Beautiful, responsive design
  - Dark/Light theme support
  - Real-time date and time display
  - Persistent data storage
  - Browser notifications
  - Accessibility features

## 🚀 Technical Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Storage**: Local Storage
- **Notifications**: Web Notifications API
- **Date Handling**: Native JavaScript Date API
- **Build Tool**: Vite

## 🏗️ Project Structure

```
src/
├── components/
│   ├── DateTimeDisplay.tsx   # Real-time date/time component
│   ├── DiaryEntry.tsx        # Diary entry form
│   ├── DiaryList.tsx         # List of diary entries
│   ├── ScheduleForm.tsx      # Schedule creation form
│   ├── ScheduleList.tsx      # List of schedules
│   ├── ThemeToggle.tsx       # Dark/light mode toggle
│   └── UserOnboarding.tsx    # Initial user setup
├── utils/
│   ├── dateTime.ts          # Date/time formatting utilities
│   ├── notifications.ts     # Browser notification handling
│   └── storage.ts          # Local storage management
├── types.ts                # TypeScript interfaces
├── App.tsx                # Main application component
└── main.tsx              # Application entry point
```

## 🔧 Core Functionality

### Schedule Management
- Create schedules with custom times and event names
- Toggle schedules on/off
- Delete unwanted schedules
- Automatic notifications at scheduled times
- 12-hour time format with AM/PM

### Diary System
- Write daily diary entries
- Automatic date stamping
- Chronological entry display
- Persistent storage

### Theme System
- Toggle between light and dark themes
- System-wide theme consistency
- Smooth theme transitions

### Storage
- Local storage persistence
- Automatic data saving
- Structured data organization

## 🎨 Design Features

- Clean, modern interface
- Responsive layout
- Smooth animations
- Consistent spacing
- Accessible color schemes
- Clear typography
- Intuitive icons

## 🔔 Notifications

The application includes a notification system that:
- Requests permission on first use
- Sends browser notifications at scheduled times
- Includes motivational quotes with notifications
- Respects user preferences

## 🌙 Dark Mode

Full dark mode support with:
- System preference detection
- Manual toggle option
- Persistent theme preference
- Smooth transitions

## 📱 Responsive Design

- Mobile-first approach
- Tablet optimization
- Desktop enhancement
- Consistent experience across devices

## ♿ Accessibility

- ARIA labels
- Keyboard navigation
- Screen reader support
- Clear focus indicators
- Semantic HTML

## 🔒 Privacy

- All data stored locally
- No external data transmission
- User control over notifications
- No tracking or analytics

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.