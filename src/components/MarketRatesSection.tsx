import React, { useState, useEffect } from 'react';
import { TrendingUp, IndianRupee, ShieldCheck, MapPin, Info } from 'lucide-react';
import { MarketRateInfo, CityLocation } from '../types';

interface MarketRatesSectionProps {
  onSelectCityFilter: (city: CityLocation) => void;
}

export const MarketRatesSection: React.FC<MarketRatesSectionProps> = ({ onSelectCityFilter }) => {
  const [rates, setRates] = useState<MarketRateInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/market-rates')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setRates(data.data);
        }
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white border-t border-[#f2ebe2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#b47b3b] uppercase">
            MARKET INTELLIGENCE & CIRCLE RATES
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#142620] tracking-tight">
            Haryana & Delhi NCR Property Rate Trends
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Transparent price benchmarks per Gaj (Sq. Yd.) and Sq. Ft. with state registration stamp duty rates.
          </p>
        </div>

        {loading ? (
          <div className="py-8 text-center text-slate-500 text-sm">Loading market benchmark rates...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rates.map((item) => (
              <div
                key={item.city}
                className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#ebdccb] shadow-xs hover:shadow-md transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#eee3d5] mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-[#b47b3b]" />
                      <h3 className="font-bold text-slate-900 text-lg">
                        {item.city}
                      </h3>
                    </div>
                    <span className="text-[11px] font-bold text-[#143629] bg-[#e6f1ec] px-2.5 py-0.5 rounded-full">
                      High Growth
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                      <span className="text-slate-500">Avg. Plot Rate:</span>
                      <span className="font-bold text-slate-900">{item.avgPlotRatePerSqYd}</span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                      <span className="text-slate-500">Apartment Rate:</span>
                      <span className="font-bold text-slate-900">{item.avgApartmentRatePerSqFt}</span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                      <span className="text-slate-500">Commercial Yield:</span>
                      <span className="font-bold text-emerald-700">{item.commercialRentalYield}</span>
                    </div>

                    <div className="pt-2 text-xs">
                      <span className="font-semibold text-slate-500 block mb-1">Key Hotspots:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.hotspots.map((spot, i) => (
                          <span key={i} className="bg-white border border-[#ebdccb] text-slate-700 text-[11px] px-2 py-0.5 rounded">
                            {spot}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#eee3d5] flex items-center justify-between">
                  <div className="text-[11px] text-slate-500">
                    Stamp: <strong className="text-slate-800">{item.stampDutyMale}</strong> / <strong className="text-emerald-700">{item.stampDutyFemale}</strong>
                  </div>
                  <button
                    onClick={() => onSelectCityFilter(item.city)}
                    className="text-xs font-bold text-[#b47b3b] hover:underline cursor-pointer"
                  >
                    View Deals →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
