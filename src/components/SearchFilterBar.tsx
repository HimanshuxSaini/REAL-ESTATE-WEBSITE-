import React from 'react';
import { Search, MapPin, Home, KeyRound, Map, Building2, IndianRupee, ChevronDown, ArrowRight, RotateCcw } from 'lucide-react';
import { TransactionType, PropertyCategory, CityLocation } from '../types';

interface SearchFilterBarProps {
  activeTransaction: TransactionType;
  onTransactionChange: (tab: TransactionType) => void;
  selectedType: string;
  onTypeChange: (type: string) => void;
  selectedLocation: string;
  onLocationChange: (loc: string) => void;
  selectedBudget: string;
  onBudgetChange: (budget: string) => void;
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  onSearchExecute: () => void;
  onResetFilters: () => void;
}

export const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
  activeTransaction,
  onTransactionChange,
  selectedType,
  onTypeChange,
  selectedLocation,
  onLocationChange,
  selectedBudget,
  onBudgetChange,
  searchQuery,
  onSearchQueryChange,
  onSearchExecute,
  onResetFilters
}) => {
  const transactionTabs: { id: TransactionType; label: string; icon: React.ReactNode }[] = [
    { id: 'buy', label: 'Buy', icon: <Home className="w-4 h-4" /> },
    { id: 'rent', label: 'Rent', icon: <KeyRound className="w-4 h-4" /> },
    { id: 'plots', label: 'Plots', icon: <Map className="w-4 h-4" /> },
    { id: 'commercial', label: 'Commercial', icon: <Building2 className="w-4 h-4" /> },
  ];

  const propertyTypes: PropertyCategory[] = [
    'Residential Plot',
    'Independent House',
    'Flats & Apartments',
    'Commercial Property',
    'Farm House'
  ];

  const locations: CityLocation[] = [
    'Rohtak',
    'Sonipat',
    'Panipat',
    'Jind',
    'Delhi NCR'
  ];

  const budgetOptions = [
    { value: 'all', label: 'Any Budget' },
    { value: 'under-30l', label: 'Under ₹30 Lakh' },
    { value: '30l-60l', label: '₹30 Lakh - ₹60 Lakh' },
    { value: '60l-1cr', label: '₹60 Lakh - ₹1 Crore' },
    { value: '1cr-2.5cr', label: '₹1 Crore - ₹2.5 Crore' },
    { value: 'above-2.5cr', label: 'Above ₹2.5 Crore' },
    { value: 'rent-under-20k', label: 'Rent: Under ₹20,000 /mo' },
    { value: 'rent-20k-50k', label: 'Rent: ₹20,000 - ₹50,000 /mo' }
  ];

  const isFiltered = selectedType !== 'all' || selectedLocation !== 'all' || selectedBudget !== 'all' || searchQuery.trim() !== '' || activeTransaction !== 'buy';

  const selectedBudgetLabel = budgetOptions.find(b => b.value === selectedBudget)?.label || 'Any Budget';

  return (
    <section id="search-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 relative z-30">
      
      {/* Outer Floating Search Card Frame */}
      <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-5">

        {/* Left Architectural Villa Capsule (Matching Reference Image) */}
        <div className="hidden xl:flex items-center justify-center shrink-0 relative self-end mb-1">
          {/* Soft decorative background circles from mockup */}
          <div className="absolute -top-3 -left-3 w-28 h-28 bg-[#ebd9c2] rounded-full opacity-60 blur-xs"></div>
          <div className="absolute -bottom-2 -right-1 w-20 h-20 bg-[#dfcaa9] rounded-full opacity-50"></div>
          
          {/* Framed luxury architectural villa */}
          <div className="relative w-40 h-40 rounded-[2.2rem] overflow-hidden border-4 border-white shadow-xl bg-slate-900 group">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=480&q=85"
              alt="Luxury Architecture"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Main Search Controls Stack */}
        <div className="flex-1 w-full space-y-2.5">

          {/* Top Floating Row: Left Tabs & Right Location Pill */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-end justify-between gap-3">
            
            {/* Top Navigation Row: Buy, Rent, Plots, Commercial */}
            <div className="inline-flex items-center gap-1 sm:gap-2 bg-white/95 backdrop-blur-md p-1.5 rounded-2xl sm:rounded-t-2xl sm:rounded-b-lg border border-[#ebd8c2]/80 shadow-sm w-fit">
              {transactionTabs.map((tab) => {
                const isActive = activeTransaction === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => onTransactionChange(tab.id)}
                    type="button"
                    className={`relative flex flex-col items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#16382b] text-white shadow-md'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
                    }`}
                  >
                    <span className={`mb-1 transition-transform duration-200 ${isActive ? 'scale-105 text-white' : 'text-slate-600'}`}>
                      {tab.icon}
                    </span>
                    <span className="tracking-wide font-semibold">{tab.label}</span>

                    {/* Active bottom notch matching reference image */}
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-[6px] border-t-[#16382b]"></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Top Right Floating Pill (Matching Reference Image) */}
            <div className="hidden sm:inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#faf5eb]/95 backdrop-blur-md border border-[#ebd8c2] shadow-sm text-left self-end">
              <div className="w-8 h-8 rounded-full bg-[#f3e6d3] flex items-center justify-center text-[#8c6843] shrink-0">
                <Building2 className="w-4 h-4 text-[#8c6843]" />
              </div>
              <div>
                <p className="text-[11px] font-medium text-slate-500 leading-tight">Find Properties in</p>
                <p className="text-xs sm:text-[13px] font-bold text-slate-900 tracking-tight leading-tight">
                  Rohtak, Sonipat, Panipat, Jind & Delhi NCR
                </p>
              </div>
            </div>

          </div>

          {/* Middle Row: Full-Width Location Search Field */}
          <div className="relative">
            <div className="relative flex items-center bg-white rounded-full border border-[#ebd8c2] shadow-[0_8px_25px_rgba(0,0,0,0.06)] hover:border-[#b47b3b]/70 transition-all px-4 sm:px-6 py-3.5 sm:py-4">
              <Search className="w-5 h-5 sm:w-6 sm:h-6 text-[#b47b3b] shrink-0 mr-3" strokeWidth={2.4} />
              <input
                type="text"
                placeholder="Search colony, sector, landmark or project..."
                value={searchQuery}
                onChange={(e) => onSearchQueryChange(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && onSearchExecute()}
                className="w-full bg-transparent text-slate-800 placeholder:text-slate-400 text-sm sm:text-base font-medium focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchQueryChange('')}
                  className="text-xs text-slate-400 hover:text-slate-600 px-2.5 py-1 rounded-full hover:bg-slate-100 transition-colors cursor-pointer mr-1 font-medium"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Bottom Row: Three Dropdown Filters + Search Properties Button */}
          <div className="bg-white rounded-2xl sm:rounded-full border border-[#ebd8c2] shadow-[0_12px_36px_rgba(20,54,41,0.08)] p-2.5 sm:p-2 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 lg:gap-2">
            
            {/* Filter 1: Property Type */}
            <div className="relative flex-1 group">
              <div className="flex items-center gap-3 px-3.5 py-2.5 sm:py-2 rounded-xl sm:rounded-full hover:bg-[#FAF8F5] transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-[#eaf4ed] text-[#16382b] flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
                  <Home className="w-4 h-4 text-[#16382b]" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider leading-none mb-1">
                    Property Type
                  </p>
                  <p className="text-sm font-bold text-slate-800 truncate leading-tight">
                    {selectedType === 'all' ? 'All Types' : selectedType}
                  </p>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors shrink-0 ml-1" />
              </div>
              
              {/* Native Select Overlay */}
              <select
                value={selectedType}
                onChange={(e) => onTypeChange(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                aria-label="Select Property Type"
              >
                <option value="all">All Types</option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Subtle Divider */}
            <div className="hidden lg:block w-px h-8 bg-slate-200/80"></div>

            {/* Filter 2: Location */}
            <div className="relative flex-1 group">
              <div className="flex items-center gap-3 px-3.5 py-2.5 sm:py-2 rounded-xl sm:rounded-full hover:bg-[#FAF8F5] transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-[#f8efe2] text-[#b47b3b] flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
                  <MapPin className="w-4 h-4 text-[#b47b3b]" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider leading-none mb-1">
                    Location
                  </p>
                  <p className="text-sm font-bold text-slate-800 truncate leading-tight">
                    {selectedLocation === 'all' ? 'Search Location or Area' : selectedLocation}
                  </p>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors shrink-0 ml-1" />
              </div>
              
              <select
                value={selectedLocation}
                onChange={(e) => onLocationChange(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                aria-label="Select Location"
              >
                <option value="all">Search Location or Area</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc} (Haryana/NCR)
                  </option>
                ))}
              </select>
            </div>

            {/* Subtle Divider */}
            <div className="hidden lg:block w-px h-8 bg-slate-200/80"></div>

            {/* Filter 3: Budget */}
            <div className="relative flex-1 group">
              <div className="flex items-center gap-3 px-3.5 py-2.5 sm:py-2 rounded-xl sm:rounded-full hover:bg-[#FAF8F5] transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-[#eaf4ed] text-[#16382b] flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
                  <IndianRupee className="w-4 h-4 text-[#16382b]" />
                </div>
                <div className="flex-1 text-left min-w-0">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider leading-none mb-1">
                    Budget
                  </p>
                  <p className="text-sm font-bold text-slate-800 truncate leading-tight">
                    {selectedBudgetLabel}
                  </p>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors shrink-0 ml-1" />
              </div>

              <select
                value={selectedBudget}
                onChange={(e) => onBudgetChange(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                aria-label="Select Budget Range"
              >
                {budgetOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Actions: Search Button & Reset */}
            <div className="flex items-center gap-2 pt-1 sm:pt-0">
              {isFiltered && (
                <button
                  type="button"
                  onClick={onResetFilters}
                  className="w-10 h-10 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                  title="Reset All Filters"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}

              <button
                type="button"
                onClick={onSearchExecute}
                className="flex-1 sm:flex-initial bg-[#16382b] hover:bg-[#0e271d] text-white font-semibold text-sm sm:text-base px-7 sm:px-9 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer whitespace-nowrap group"
              >
                <span>Search Properties</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
