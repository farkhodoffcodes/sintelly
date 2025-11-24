import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ChevronLeft, MoreVertical } from 'lucide-react';

const TherapyView: React.FC = () => {
  const data = [
    { name: 'Mon', value: 3 },
    { name: 'Tue', value: 5 },
    { name: 'Wed', value: 2 },
    { name: 'Thu', value: 4 },
    { name: 'Fri', value: 6 },
    { name: 'Sat', value: 4 },
    { name: 'Sun', value: 5 },
  ];

  const assessments = [
    { title: "Mood Questionnaire", code: "PHQ", icon: "📝" },
    { title: "Insomnia Rating Scale", code: "RIS", icon: "😴" },
    { title: "Anxiety Scale", code: "GAD", icon: "😰" },
    { title: "Stress Index", code: "PSI", icon: "📉" },
  ];

  return (
    <div className="h-full bg-gray-50/50 pb-32">
       <div className="px-6 pt-12 pb-6 flex items-center justify-between">
        <button className="p-2 rounded-full hover:bg-gray-100"><ChevronLeft size={20} /></button>
        <h1 className="text-xl font-bold text-gray-900">Therapy Progress</h1>
        <div className="w-10"></div> 
      </div>

      <div className="px-6 space-y-6">
        {/* Hero Analytics Card */}
        <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-purple-50">
          <div className="flex items-start gap-4 mb-4">
             <div className="w-12 h-12 bg-violet-100 rounded-2xl flex items-center justify-center text-xl">
               🧠
             </div>
             <div>
               <h3 className="font-bold text-gray-800">CBT Exercise Analytics</h3>
               <p className="text-xs text-gray-500 leading-relaxed mt-1">AI-driven CBT insights and wellness recommendations for better living.</p>
             </div>
          </div>
          
          <div className="h-32 w-full mt-4">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={data}>
                 <XAxis dataKey="name" hide />
                 <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    cursor={{fill: '#F3F4F6', radius: 4}}
                  />
                 <Bar dataKey="value" radius={[4, 4, 4, 4]}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#8B5CF6' : '#D8B4FE'} />
                    ))}
                 </Bar>
               </BarChart>
             </ResponsiveContainer>
          </div>
        </div>

        {/* Tests Grid */}
        <div className="flex justify-between items-center">
           <h3 className="font-bold text-gray-800">Psychodiagnostics Tests</h3>
           <button className="text-xs text-gray-400">See All</button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {assessments.map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-3xl shadow-sm border border-gray-50 flex flex-col justify-between h-36 relative group hover:border-violet-200 transition-colors">
              <div className="flex justify-between items-start">
                <div className="p-2 bg-gray-50 rounded-xl text-lg group-hover:bg-violet-50 transition-colors">{item.icon}</div>
                <button className="text-gray-300 hover:text-gray-500"><MoreVertical size={16} /></button>
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-800 leading-tight mb-1">{item.title}</h4>
                <p className="text-xs text-gray-400">{item.code}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full py-4 bg-[#8B5CF6] text-white rounded-2xl font-semibold shadow-lg shadow-violet-200 hover:bg-violet-700 transition-colors">
          See all
        </button>
      </div>
    </div>
  );
};

export default TherapyView;