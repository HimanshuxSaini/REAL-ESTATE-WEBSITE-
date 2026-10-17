import React from 'react';
import { Search, MapPin, Home, IndianRupee, RotateCcw } from 'lucide-react';
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
  const transactionTabs: { id: TransactionType; label: string }[] = [
    { id: 'buy', label: 'Buy' },
    { id: 'rent', label: 'Rent' },
    { id: 'plots', label: 'Plots' },
    { id: 'commercial', label: 'Commercial' },
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

  return (
    <div className="max-w-6xl mx-auto px-4 -mt-8 relative z-30">
      <div className="bg-white rounded-2xl shadow-xl border border-[#ebd8c2]/80 p-5 md:p-6 backdrop-blur-sm">
        
        {/* Transaction Tabs - Matches Screenshot */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-5 border-b border-slate-100 pb-4">
          <div className="bg-[#f4efe8] p-1 rounded-xl flex items-center gap-1">
            {transactionTabs.map((tab) => {
              const isActive = activeTransaction === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTransactionChange(tab.id)}
                  className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#143629] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Quick Keyword Search Input */}
          <div className="flex-1 min-w-[200px] ml-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search colony, sector, or landmark (e.g. Sector 14, GT Road)..."
                value={searchQuery}
                onChange={(e) => onSearchQueryChange(e.target.value)}
                className="w-full text-xs sm:text-sm pl-8 pr-3 py-2 rounded-lg border border-slate-200 focus:border-[#b47b3b] focus:outline-hidden focus:ring-1 focus:ring-[#b47b3b] bg-slate-50/50"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>

        {/* Form Controls Row - Matches Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 items-end">
          
          {/* Property Type Dropdown */}
          <div className="space-y-1.5 text-left">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
              <Home className="w-3.5 h-3.5 text-[#b47b3b]" />
              Property Type
            </label>
            <div className="relative">
              <select
                value={selectedType}
                onChange={(e) => onTypeChange(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-slate-200 hover:border-slate-300 rounded-xl px-3.5 py-3 text-sm text-slate-800 font-medium focus:outline-hidden focus:ring-2 focus:ring-[#b47b3b]/30 focus:border-[#b47b3b] transition-all cursor-pointer"
              >
                <option value="all">All Types</option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Location Dropdown */}
          <div className="space-y-1.5 text-left">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#b47b3b]" />
              Location
            </label>
            <div className="relative">
              <select
                value={selectedLocation}
                onChange={(e) => onLocationChange(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-slate-200 hover:border-slate-300 rounded-xl px-3.5 py-3 text-sm text-slate-800 font-medium focus:outline-hidden focus:ring-2 focus:ring-[#b47b3b]/30 focus:border-[#b47b3b] transition-all cursor-pointer"
              >
                <option value="all">Search Location or Area</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc} (Haryana/NCR)
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Budget Dropdown */}
          <div className="space-y-1.5 text-left">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
              <IndianRupee className="w-3.5 h-3.5 text-[#b47b3b]" />
              Budget
            </label>
            <div className="relative">
              <select
                value={selectedBudget}
                onChange={(e) => onBudgetChange(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-slate-200 hover:border-slate-300 rounded-xl px-3.5 py-3 text-sm text-slate-800 font-medium focus:outline-hidden focus:ring-2 focus:ring-[#b47b3b]/30 focus:border-[#b47b3b] transition-all cursor-pointer"
              >
                {budgetOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Action Button - Matches Screenshot */}
          <div className="flex gap-2">
            <button
              onClick={onSearchExecute}
              className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#b47b3b] to-[#c78b47] hover:from-[#9c682e] hover:to-[#b0783a] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Search Properties</span>
            </button>

            {(selectedType !== 'all' || selectedLocation !== 'all' || selectedBudget !== 'all' || searchQuery || activeTransaction !== 'buy') && (
              <button
                onClick={onResetFilters}
                className="p-3 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
                title="Reset Filters"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
