import React, { useState } from 'react';
import BottomNav from './components/BottomNav';
import HomeView from './components/HomeView';
import MoodTracker from './components/MoodTracker';
import ChatInterface from './components/ChatInterface';
import ExercisesView from './components/ExercisesView';
import ProfileView from './components/ProfileView';
import TherapyView from './components/TherapyView';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  // Navigation handler ensuring smooth transitions or logic if needed
  const handleSetView = (view: ViewState) => {
    setCurrentView(view);
  };

  // Render content based on view
  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView onStartChat={() => handleSetView('chat')} onOpenMood={() => handleSetView('mood')} />;
      case 'chat':
        return <ChatInterface onBack={() => handleSetView('home')} />;
      case 'mood':
        return <MoodTracker onBack={() => handleSetView('home')} onSave={(val) => { console.log('Saved mood:', val); handleSetView('home'); }} />;
      case 'exercises':
        return <ExercisesView />;
      case 'profile':
        return <ProfileView />;
      case 'therapy':
        return <TherapyView />;
      default:
        return <HomeView onStartChat={() => handleSetView('chat')} onOpenMood={() => handleSetView('mood')} />;
    }
  };

  const isFullScreen = currentView === 'chat' || currentView === 'mood';

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-violet-200">
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl relative overflow-hidden">
        {renderView()}
        
        {!isFullScreen && (
          <BottomNav currentView={currentView} setView={handleSetView} />
        )}
      </div>
    </div>
  );
};

export default App;