import React from 'react';
import { Heart, ChevronLeft, Clock } from 'lucide-react';

const ExercisesView: React.FC = () => {
  const categories = [
    { 
      title: "Sleep Support", 
      count: 5, 
      image: "https://images.unsplash.com/photo-1541781777621-afb1b3809763?auto=format&fit=crop&q=80&w=200",
      bg: "bg-indigo-50"
    },
    { 
      title: "Emotional Regulation", 
      count: 9, 
      image: "https://images.unsplash.com/photo-1499209974431-2761e2010326?auto=format&fit=crop&q=80&w=200",
      bg: "bg-rose-50"
    },
    { 
      title: "Zen Zone", 
      count: 9, 
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=200",
      bg: "bg-emerald-50"
    },
    { 
      title: "Stress Toolbox", 
      count: 11, 
      image: "https://images.unsplash.com/photo-1515023115689-589c33041697?auto=format&fit=crop&q=80&w=200",
      bg: "bg-orange-50"
    }
  ];

  return (
    <div className="h-full bg-white pb-32">
      <div className="px-6 pt-12 pb-6 flex items-center gap-4">
        <button className="p-2 rounded-full bg-gray-100"><ChevronLeft size={20} /></button>
        <h1 className="text-xl font-bold text-gray-900">Exercises</h1>
      </div>

      <div className="px-6 space-y-6">
        <div className="flex gap-4 overflow-x-auto no-scrollbar">
           {/* Featured */}
           <div className="min-w-[160px] p-4 bg-white border border-gray-100 rounded-3xl shadow-sm">
              <div className="flex justify-between mb-2">
                 <span className="text-xs font-medium text-gray-500">Future Visitor</span>
                 <Heart size={14} className="text-gray-300" />
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-400 mb-4">
                <Clock size={12} /> 6 min
              </div>
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-lg">🧘‍♀️</div>
           </div>
           <div className="min-w-[160px] p-4 bg-white border border-gray-100 rounded-3xl shadow-sm">
              <div className="flex justify-between mb-2">
                 <span className="text-xs font-medium text-gray-500">Color Inhale</span>
                 <Heart size={14} className="text-gray-300" />
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-400 mb-4">
                <Clock size={12} /> 6 min
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-lg">🌬️</div>
           </div>
        </div>

        <div className="flex justify-between items-end">
          <h2 className="font-bold text-lg">Categories</h2>
          <span className="text-xs text-gray-400">See All</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {categories.map((cat, idx) => (
            <div key={idx} className={`p-4 rounded-[2rem] ${cat.bg} relative overflow-hidden h-40 group cursor-pointer transition-transform hover:scale-[1.02]`}>
               <div className="relative z-10">
                 <h3 className="font-bold text-gray-800 text-sm w-2/3 leading-tight mb-1">{cat.title}</h3>
                 <p className="text-[10px] text-gray-500">{cat.count} exercises</p>
               </div>
               <img 
                 src={cat.image} 
                 alt={cat.title}
                 className="absolute bottom-0 right-0 w-24 h-24 object-cover rounded-tl-[2rem] opacity-80 group-hover:opacity-100 transition-opacity"
               />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExercisesView;