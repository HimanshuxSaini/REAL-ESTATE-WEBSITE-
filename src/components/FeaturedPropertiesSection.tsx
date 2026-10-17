import React from 'react';
import { MapPin, ArrowRight, Compass, ShieldCheck, Ruler } from 'lucide-react';
import { Property, PropertyCategory } from '../types';

interface FeaturedPropertiesSectionProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
  onViewAllClick: () => void;
  onFilterCategory: (category: string) => void;
  selectedCategory: string;
}

export const FeaturedPropertiesSection: React.FC<FeaturedPropertiesSectionProps> = ({
  properties,
  onSelectProperty,
  onViewAllClick,
  onFilterCategory,
  selectedCategory
}) => {
  const categoryFilters = [
    'All',
    'Residential Plot',
    'Independent House',
    'Flats & Apartments',
    'Commercial Property',
    'Farm House'
  ];

  return (
    <section id="properties" className="py-16 md:py-24 bg-white border-t border-[#f2ebe2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header with View All Button - Matches Screenshot */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="space-y-2 text-left">
            <p className="text-xs sm:text-sm font-bold tracking-widest text-[#b47b3b] uppercase">
              FEATURED PROPERTIES
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#142620] tracking-tight">
              Latest Property Listings
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Explore handpicked properties in prime locations across Haryana and Delhi NCR.
            </p>
          </div>

          <button
            onClick={onViewAllClick}
            className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#b47b3b] text-[#b47b3b] hover:bg-[#b47b3b] hover:text-white font-semibold text-sm transition-all cursor-pointer group"
          >
            <span>View All Properties</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categoryFilters.map((cat) => {
            const isActive = (cat === 'All' && selectedCategory === 'all') || selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onFilterCategory(cat === 'All' ? 'all' : cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#143629] text-white shadow-xs'
                    : 'bg-[#FAF8F5] text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Property Cards Grid - Matches Screenshot */}
        {properties.length === 0 ? (
          <div className="text-center py-16 bg-[#FAF8F5] rounded-2xl border border-dashed border-[#e6dbc9]">
            <p className="text-base font-semibold text-slate-700">No properties found matching your filter criteria</p>
            <p className="text-xs text-slate-500 mt-1">Try adjusting the location, property type, or budget.</p>
            <button
              onClick={() => onFilterCategory('all')}
              className="mt-4 px-4 py-2 rounded-lg bg-[#b47b3b] text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties.map((prop) => {
              const isRent = prop.transactionType === 'rent';
              return (
                <div
                  key={prop.id}
                  className="group rounded-2xl overflow-hidden bg-white border border-[#e8ded1] hover:border-[#b47b3b]/60 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* Photo Container */}
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={prop.images[0]}
                      alt={prop.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Badge: For Sale / For Rent - Matches Screenshot */}
                    <div className="absolute top-3 left-3 bg-[#132c23]/90 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md uppercase tracking-wider">
                      {isRent ? 'For Rent' : 'For Sale'}
                    </div>

                    {/* Verified RERA tag */}
                    {prop.reraApproved && (
                      <div className="absolute top-3 right-3 bg-white/95 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-emerald-600" />
                        RERA
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between text-left">
                    <div>
                      {/* Property Category / Title */}
                      <h3 className="font-bold text-slate-900 text-lg group-hover:text-[#b47b3b] transition-colors line-clamp-1">
                        {prop.category}
                      </h3>

                      {/* Location with Pin - Matches Screenshot */}
                      <p className="text-xs text-slate-500 flex items-center gap-1 mt-1 mb-3.5">
                        <MapPin className="w-3.5 h-3.5 text-[#b47b3b] shrink-0" />
                        <span className="line-clamp-1">{prop.city}, Haryana</span>
                      </p>

                      {/* Specs Row - Matches Screenshot */}
                      <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 pb-3 mb-3 border-b border-slate-100">
                        <div className="flex items-center gap-1.5">
                          <Ruler className="w-3.5 h-3.5 text-slate-400" />
                          <span className="font-medium">
                            {prop.areaSize} {prop.areaUnit}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          {prop.bhk ? (
                            <span className="font-medium text-slate-700">
                              {prop.bhk} BHK
                            </span>
                          ) : (
                            <span className="font-medium text-slate-700 truncate" title={prop.facing || prop.roadWidth}>
                              <Compass className="w-3.5 h-3.5 inline text-slate-400 mr-1" />
                              {prop.facing || prop.roadWidth}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Price and CTA - Matches Screenshot */}
                    <div className="pt-2">
                      <div className="mb-3">
                        <span className="text-xl font-extrabold text-[#142620]">
                          {prop.priceDisplay}
                        </span>
                        {prop.pricePerUnit && !isRent && (
                          <span className="block text-[11px] text-slate-400 font-medium">
                            {prop.pricePerUnit}
                          </span>
                        )}
                      </div>

                      {/* View Details Button - Matches Screenshot */}
                      <button
                        onClick={() => onSelectProperty(prop)}
                        className="w-full py-2.5 rounded-xl border border-[#b47b3b] text-[#b47b3b] hover:bg-[#b47b3b] hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
