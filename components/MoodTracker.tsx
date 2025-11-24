import React, { useState } from 'react';
import { ChevronLeft, MoreVertical, RefreshCcw, Save } from 'lucide-react';
import { Emotion } from '../types';

interface MoodTrackerProps {
  onBack: () => void;
  onSave: (val: number) => void;
}

const MoodTracker: React.FC<MoodTrackerProps> = ({ onBack, onSave }) => {
  const [moodValue, setMoodValue] = useState<number>(3);

  const getMoodEmoji = (val: number) => {
    switch (Math.round(val)) {
      case 1: return '😫';
      case 2: return '😔';
      case 3: return '😐';
      case 4: return '🙂';
      case 5: return '🤩';
      default: return '😐';
    }
  };

  const getMoodColor = (val: number) => {
    switch (Math.round(val)) {
      case 1: return 'bg-red-100 ring-red-300';
      case 2: return 'bg-orange-100 ring-orange-300';
      case 3: return 'bg-yellow-100 ring-yellow-300';
      case 4: return 'bg-green-100 ring-green-300';
      case 5: return 'bg-emerald-100 ring-emerald-300';
      default: return 'bg-gray-100 ring-gray-300';
    }
  };

  const moodLabels = ["Terrible", "Bad", "Okay", "Good", "Great"];

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-white to-purple-50 p-6 pt-12">
      <div className="flex justify-between items-center mb-8">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
          <ChevronLeft className="text-gray-800" />
        </button>
        <h2 className="text-xl font-semibold text-gray-900">Mood</h2>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <MoreVertical className="text-gray-800" />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center space-y-12">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          How Do You Feel<br />Today?
        </h1>

        <div className={`relative w-64 h-64 rounded-full flex items-center justify-center transition-all duration-500 ring-8 ${getMoodColor(moodValue)} shadow-lg`}>
           {/* Halo effect */}
           <div className="absolute inset-0 rounded-full bg-white opacity-50 blur-xl animate-pulse-slow"></div>
           <span className="text-9xl z-10 drop-shadow-sm transform transition-transform duration-300 hover:scale-110 cursor-grab active:cursor-grabbing">
             {getMoodEmoji(moodValue)}
           </span>
        </div>

        <div className="w-full max-w-xs space-y-6">
          <div className="flex justify-between text-sm font-medium text-gray-400 px-2">
            <span>Awful</span>
            <span>Amazing</span>
          </div>
          
          <input 
            type="range" 
            min="1" 
            max="5" 
            step="0.1"
            value={moodValue}
            onChange={(e) => setMoodValue(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-violet-600"
          />
          
          <div className="text-center text-violet-600 font-semibold text-lg">
             {moodLabels[Math.round(moodValue) - 1]}
          </div>
        </div>
      </div>

      <div className="mt-auto grid grid-cols-2 gap-4 mb-20">
        <button 
          onClick={() => setMoodValue(3)}
          className="py-4 rounded-2xl bg-violet-100 text-violet-700 font-semibold flex items-center justify-center gap-2 hover:bg-violet-200 transition-colors"
        >
          <RefreshCcw size={20} /> Reset
        </button>
        <button 
          onClick={() => onSave(moodValue)}
          className="py-4 rounded-2xl bg-black text-white font-semibold flex items-center justify-center gap-2 shadow-lg hover:bg-gray-800 transition-colors"
        >
           Save <Save size={20} />
        </button>
      </div>
    </div>
  );
};

export default MoodTracker;