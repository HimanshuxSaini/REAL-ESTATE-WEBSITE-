import React from 'react';
import { Home, Layers, Building, Store, Trees } from 'lucide-react';
import { PropertyCategory } from '../types';

interface CategorySectionProps {
  onSelectCategory: (category: PropertyCategory) => void;
  selectedCategory: string;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  onSelectCategory,
  selectedCategory
}) => {
  const categories: {
    name: PropertyCategory;
    subtitle: string;
    icon: React.ReactNode;
  }[] = [
    {
      name: 'Residential Plots',
      subtitle: 'Build your dream home',
      icon: <Home className="w-8 h-8 text-[#b47b3b]" />
    },
    {
      name: 'Independent Houses',
      subtitle: 'Spacious & modern homes',
      icon: <Layers className="w-8 h-8 text-[#b47b3b]" />
    },
    {
      name: 'Flats & Apartments',
      subtitle: 'For a comfortable lifestyle',
      icon: <Building className="w-8 h-8 text-[#b47b3b]" />
    },
    {
      name: 'Commercial Properties',
      subtitle: 'Shops, showrooms & offices',
      icon: <Store className="w-8 h-8 text-[#b47b3b]" />
    },
    {
      name: 'Farm Houses',
      subtitle: 'Peaceful living spaces',
      icon: <Trees className="w-8 h-8 text-[#b47b3b]" />
    }
  ];

  return (
    <section className="py-14 md:py-20 bg-[#FAF8F5] border-t border-[#f0e8dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header - Matches Screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#b47b3b] uppercase">
            EXPLORE BY CATEGORY
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#142620] tracking-tight">
            Find the Right Property for You
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            From residential plots to commercial spaces, discover properties that match your goals.
          </p>
        </div>

        {/* 5 Cards Row - Matches Screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.name;
            return (
              <div
                key={cat.name}
                onClick={() => onSelectCategory(cat.name)}
                className={`p-6 rounded-2xl cursor-pointer text-center transition-all duration-300 flex flex-col items-center justify-center border group ${
                  isSelected
                    ? 'bg-white border-[#b47b3b] shadow-md ring-2 ring-[#b47b3b]/20 -translate-y-1'
                    : 'bg-[#F6EFE5]/70 hover:bg-white border-[#ebdccb] hover:border-[#b47b3b]/50 hover:shadow-md hover:-translate-y-1'
                }`}
              >
                {/* Icon wrapper matching screenshot */}
                <div className="w-16 h-16 rounded-2xl bg-white group-hover:bg-[#FAF2E6] flex items-center justify-center mb-4 shadow-2xs border border-[#eee4d6] transition-colors">
                  {cat.icon}
                </div>

                <h3 className="font-bold text-slate-900 text-base mb-1 group-hover:text-[#b47b3b] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {cat.subtitle}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
