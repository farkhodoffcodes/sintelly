import React from 'react';
import { ChevronLeft, Link, Settings, Share2, FileText, Shield, Moon, History } from 'lucide-react';

const ProfileView: React.FC = () => {
  const sections = [
    { title: "General Information", items: [
      { icon: History, label: "History" },
      { icon: Moon, label: "App Theme" },
    ]},
    { title: "Other", items: [
      { icon: Share2, label: "Share App" },
      { icon: FileText, label: "Terms of Service" },
      { icon: Shield, label: "Privacy Policy" },
    ]}
  ];

  return (
    <div className="h-full bg-gradient-to-b from-purple-50 to-white pb-32">
       <div className="px-6 pt-12 pb-6 flex items-center justify-between">
        <button className="p-2 rounded-full hover:bg-gray-100"><ChevronLeft size={20} /></button>
        <h1 className="text-xl font-bold text-gray-900">Profile</h1>
        <button className="p-2 rounded-full hover:bg-gray-100"><Link size={20} /></button>
      </div>

      <div className="px-6 space-y-8">
        {/* Banner */}
        <div className="bg-white rounded-[2rem] p-6 shadow-sm flex justify-between items-center relative overflow-hidden border border-gray-100">
          <div className="z-10">
            <div className="flex items-center gap-2 mb-2 text-gray-800">
              <span className="text-xl">👑</span>
              <span className="font-bold">Limited Offer</span>
            </div>
            <p className="text-xs text-gray-500 max-w-[140px] mb-4">Buy now and save over 55% on our yearly plan!</p>
            <button className="bg-gray-900 text-white text-xs px-4 py-2 rounded-lg font-medium">Continue Now</button>
          </div>
          <div className="w-24 h-24">
            <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Sintelly" alt="Robot" className="w-full h-full transform rotate-12" />
          </div>
        </div>

        {sections.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 ml-2">{section.title}</h3>
            <div className="bg-white/60 backdrop-blur-sm rounded-[2rem] overflow-hidden">
              {section.items.map((item, itemIdx) => {
                const Icon = item.icon;
                return (
                  <div key={itemIdx} className="flex items-center gap-4 p-5 hover:bg-white transition-colors cursor-pointer border-b border-gray-50 last:border-0">
                    <Icon size={20} className="text-gray-500" />
                    <span className="text-sm font-medium text-gray-700 flex-1">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileView;