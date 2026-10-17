import React from 'react';
import { Users, Home, MapPin, Briefcase } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      value: '500+',
      label: 'Happy Clients',
      icon: <Users className="w-5 h-5 text-[#b47b3b]" />
    },
    {
      value: '1000+',
      label: 'Properties Sold',
      icon: <Home className="w-5 h-5 text-[#b47b3b]" />
    },
    {
      value: '5+',
      label: 'Major Locations',
      icon: <MapPin className="w-5 h-5 text-[#b47b3b]" />
    },
    {
      value: '10+',
      label: 'Years of Experience',
      icon: <Briefcase className="w-5 h-5 text-[#b47b3b]" />
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-[#FAF3E8]/80 border border-[#e8d8c3] rounded-2xl py-6 px-4 sm:px-8 shadow-xs">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center divide-y sm:divide-y-0 sm:divide-x divide-[#e8d8c3]/60">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-center gap-3.5 ${
                idx > 0 ? 'pt-4 sm:pt-0' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-[#ebdccb] shadow-2xs flex items-center justify-center shrink-0">
                {stat.icon}
              </div>
              <div className="text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#142620] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
