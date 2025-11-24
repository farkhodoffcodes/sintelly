import React from 'react';
import { Home, Grid, PieChart, User } from 'lucide-react';
import { ViewState } from '../types';

interface BottomNavProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentView, setView }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'exercises', icon: Grid, label: 'Exercises' },
    { id: 'therapy', icon: PieChart, label: 'Progress' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md z-50">
      <div className="bg-black text-white rounded-full px-6 py-4 shadow-2xl flex justify-between items-center backdrop-blur-xl bg-opacity-90 border border-gray-800">
        {navItems.map((item) => {
          const isActive = item.id === currentView || (item.id === 'exercises' && currentView === 'therapy'); // simplified grouping
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => setView(item.id as ViewState)}
              className={`relative p-2 transition-all duration-300 ${
                isActive ? 'text-white scale-110' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {isActive && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
              )}
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;