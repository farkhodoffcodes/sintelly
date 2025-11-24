export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export interface Exercise {
  id: string;
  title: string;
  duration: string;
  category: string;
  icon: string;
  color: string;
}

export interface MoodEntry {
  value: number; // 1-5
  timestamp: Date;
  note?: string;
}

export type ViewState = 'home' | 'chat' | 'mood' | 'exercises' | 'profile' | 'therapy';

export enum Emotion {
  Terrible = 1,
  Bad = 2,
  Okay = 3,
  Good = 4,
  Great = 5
}