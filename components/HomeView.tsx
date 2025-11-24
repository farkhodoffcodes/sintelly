import React from 'react';
import { Search, Bell, Clock, ListFilter } from 'lucide-react';

interface HomeViewProps {
  onStartChat: () => void;
  onOpenMood: () => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onStartChat, onOpenMood }) => {
  const exercises = [
    { id: 1, title: "Fatigue Scale", duration: "5 min", icon: "⚡" },
    { id: 2, title: "Mindfulness", duration: "10 min", icon: "🧘" },
    { id: 3, title: "Sleep Log", duration: "3 min", icon: "😴" },
  ];

  return (
    <div className="pb-32 bg-gradient-to-b from-[#E6E6FA]/30 via-white to-[#F0FFF0]/30 min-h-screen">
      {/* Header */}
      <div className="px-6 pt-12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm">
            <img src="https://i.pravatar.cc/150?img=32" alt="User" className="w-full h-full object-cover" />
          </div>
          <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center shadow-sm">
            <div className="w-4 h-4 bg-violet-500 rounded-full"></div>
          </div>
        </div>
        <div className="flex gap-3">
           <button className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50">
             <Search size={20} className="text-gray-600" />
           </button>
           <button className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 relative">
             <Bell size={20} className="text-gray-600" />
             <div className="absolute top-2 right-2 w-2 h-2 bg-red-400 rounded-full border border-white"></div>
           </button>
        </div>
      </div>

      {/* Greeting */}
      <div className="px-6 mt-8 mb-6">
        <h1 className="text-3xl font-semibold text-gray-800 leading-tight">
          Hi Emma Thompson <span className="text-gray-400 font-normal">How</span><br />
          <span className="text-gray-400 font-normal">Can I Help You Today?</span>
        </h1>
      </div>

      {/* Hero Card */}
      <div className="px-6 mb-6">
        <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-[2.5rem] p-6 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[220px]">
          <div className="z-10 max-w-[60%]">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Speak Wisely, Live Comfortably</h2>
            <p className="text-xs text-gray-500 mb-6 leading-relaxed">
              Your AI chat assistant is here to help you anytime you need.
            </p>
            <button 
              onClick={onStartChat}
              className="bg-gray-900 text-white text-xs font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition shadow-lg"
            >
              Start New Chat
            </button>
          </div>
          
          {/* 3D Robot Illustration Placeholder */}
          <div className="absolute -right-4 top-10 w-48 h-48 z-0">
             <img 
               src="https://api.dicebear.com/7.x/bottts/svg?seed=Sintelly&backgroundColor=transparent" 
               alt="Robot" 
               className="w-full h-full drop-shadow-2xl transform rotate-[-10deg] animate-float"
             />
          </div>
        </div>
      </div>

      {/* Mood Summary Card */}
      <div className="px-6 mb-8">
        <div className="bg-gradient-to-b from-[#F0FDF4] to-white rounded-[2.5rem] p-6 shadow-sm border border-green-50 relative overflow-hidden">
          <div className="flex flex-col items-center justify-center text-center z-10 relative">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-3xl mb-2 shadow-sm">
              😐
            </div>
            <h3 className="font-bold text-gray-800">Average</h3>
            <p className="text-xs text-gray-400 mb-4">Saturday, September 27, 11:35</p>
            
            <button 
              onClick={onOpenMood}
              className="w-full py-3 bg-white border border-gray-100 rounded-xl text-xs font-semibold text-gray-600 shadow-sm hover:bg-gray-50"
            >
              See all Moods
            </button>
          </div>
           <div className="absolute top-0 left-0 w-full h-full bg-green-200 opacity-10 blur-3xl rounded-full"></div>
        </div>
      </div>

      {/* Exercises Section */}
      <div className="px-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-800">Exercises in progress</h3>
          <button className="text-xs text-gray-400 hover:text-gray-600">See All</button>
        </div>

        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
          {exercises.map(ex => (
            <div key={ex.id} className="flex-shrink-0 w-32 bg-white p-4 rounded-3xl shadow-sm border border-gray-50 flex flex-col items-center gap-3">
              <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-lg">
                {ex.icon}
              </div>
              <div className="text-center">
                <p className="text-xs font-bold text-gray-800">{ex.title}</p>
                <div className="flex items-center gap-1 justify-center text-[10px] text-gray-400 mt-1">
                   <Clock size={10} /> {ex.duration}
                </div>
              </div>
              <button className="p-1.5 bg-gray-900 rounded-full text-white mt-1">
                <ListFilter size={12} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeView;