import React from 'react';
import { ArrowRight, MapPin, X } from 'lucide-react';
import { CityLocation } from '../types';

interface FocusAreasSectionProps {
  onSelectCity: (city: CityLocation) => void;
  selectedCity: CityLocation | 'all';
}

export const FocusAreasSection: React.FC<FocusAreasSectionProps> = ({
  onSelectCity,
  selectedCity
}) => {
  const areas: {
    city: CityLocation;
    image: string;
    description: string;
    highlight: string;
    propertiesCount: string;
  }[] = [
    {
      city: 'Rohtak',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
      description: 'Educational & Commercial Hub with approved HUDA sectors.',
      highlight: 'Sector 14, Model Town, Omaxe',
      propertiesCount: '140+ Properties'
    },
    {
      city: 'Sonipat',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
      description: 'Rapid growth corridor along GT Road & Delhi NCR border.',
      highlight: 'Rajiv Gandhi City, TDI, Sec 34',
      propertiesCount: '220+ Properties'
    },
    {
      city: 'Panipat',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80',
      description: 'Historic textile capital with booming luxury townships.',
      highlight: 'Sushant City, Sector 18, GT Road',
      propertiesCount: '115+ Properties'
    },
    {
      city: 'Jind',
      image: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=600&q=80',
      description: 'Heart of Haryana with high appreciation residential plots.',
      highlight: 'HUDA Sector 9, Civil Lines',
      propertiesCount: '80+ Properties'
    },
    {
      city: 'Delhi NCR',
      image: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=600&q=80',
      description: 'Metropolitan hub offering premium builder floors & shops.',
      highlight: 'Rohini, Pitampura, KMP Corridor',
      propertiesCount: '310+ Properties'
    }
  ];

  return (
    <section id="areas" className="py-16 md:py-24 bg-white relative overflow-hidden border-t border-[#f2ebe2]">
      {/* Decorative City Skyline Illustration Placeholder */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header - Matches Screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#b47b3b] uppercase">
            OUR FOCUS AREAS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#142620] tracking-tight">
            Property Deals in Major Locations
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            We offer a wide range of residential and commercial properties in the most promising areas across Haryana and Delhi NCR.
          </p>
        </div>

        {/* 5 Location Cards Grid - Matches Screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {areas.map((item) => {
            const isSelected = selectedCity === item.city;
            return (
              <div
                key={item.city}
                onClick={() => onSelectCity(item.city)}
                className={`group cursor-pointer rounded-2xl overflow-hidden bg-[#FAF8F5] border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  isSelected
                    ? 'border-[#b47b3b] ring-2 ring-[#b47b3b]/30 shadow-md'
                    : 'border-[#eae1d5] hover:border-[#b47b3b]/50'
                }`}
              >
                {/* Photo */}
                <div className="h-36 sm:h-40 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.city}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] font-bold text-slate-700 flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5 text-[#b47b3b]" />
                    {item.propertiesCount}
                  </div>
                </div>

                {/* Footer with Title and Arrow - Matches Screenshot */}
                <div className="p-3.5 flex items-center justify-between bg-white group-hover:bg-[#fbf7f1] transition-colors">
                  <div className="text-left">
                    <h3 className="font-bold text-slate-900 text-base group-hover:text-[#b47b3b] transition-colors">
                      {item.city}
                    </h3>
                    <p className="text-[11px] text-slate-500 line-clamp-1">
                      {item.highlight}
                    </p>
                  </div>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                    isSelected
                      ? 'bg-[#b47b3b] text-white'
                      : 'bg-[#f4eee5] text-[#b47b3b] group-hover:bg-[#b47b3b] group-hover:text-white'
                  }`}>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Filter Status Indicator */}
        {selectedCity !== 'all' && (
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="text-xs text-slate-500">Currently showing properties in:</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0E1] text-[#935f25] text-xs font-bold border border-[#dfc39e]">
              <MapPin className="w-3 h-3" />
              {selectedCity}
              <button
                onClick={() => onSelectCity('Rohtak')} // will toggle or reset
                className="hover:text-black ml-1 text-slate-400 p-0.5 rounded-full hover:bg-[#ebd8c2]"
                title="Clear filter"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          </div>
        )}

      </div>
    </section>
  );
};
