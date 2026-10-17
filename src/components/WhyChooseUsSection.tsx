import React from 'react';
import { Layers, MapPin, UserCheck, ShieldCheck, Award } from 'lucide-react';

interface WhyChooseUsSectionProps {
  onLearnMoreClick: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  onLearnMoreClick
}) => {
  const features = [
    {
      title: 'Wide Range of Properties',
      desc: 'Residential, commercial & plots',
      icon: <Layers className="w-5 h-5 text-[#b47b3b]" />
    },
    {
      title: 'Prime Locations',
      desc: 'Rohtak, Sonipat, Panipat, Jind & Delhi NCR',
      icon: <MapPin className="w-5 h-5 text-[#b47b3b]" />
    },
    {
      title: 'Expert Guidance',
      desc: 'End-to-end support in buying, selling & renting',
      icon: <UserCheck className="w-5 h-5 text-[#b47b3b]" />
    },
    {
      title: 'Transparent Deals',
      desc: 'Clear process with no hidden charges',
      icon: <ShieldCheck className="w-5 h-5 text-[#b47b3b]" />
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-[#FAF8F5] border-t border-[#f0e7dc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Image with Floating Partner Badge - Matches Screenshot */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 group">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80"
                alt="Jagannath Properties Trusted Architecture"
                className="w-full h-[380px] sm:h-[430px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

              {/* Bottom Gold Floating Card - Matches Screenshot */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-gradient-to-r from-[#b47b3b]/95 to-[#c98d49]/95 backdrop-blur-md px-5 py-3.5 rounded-xl text-white shadow-xl flex items-center gap-3 border border-white/20">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <span className="text-[11px] font-medium tracking-wide uppercase opacity-90 block">With</span>
                  <span className="text-base font-bold tracking-tight block">Trusted Real Estate Partner</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content & 4 Features - Matches Screenshot */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <p className="text-xs sm:text-sm font-bold tracking-widest text-[#b47b3b] uppercase mb-2">
                WHY CHOOSE US
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#142620] tracking-tight mb-4">
                Why Choose Jagannath Properties?
              </h2>
              <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                We are committed to helping you find the perfect property with transparency, expertise and local market knowledge.
              </p>
            </div>

            {/* 4 Feature Cards Grid - Matches Screenshot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-3">
              {features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-[#ebdccb] shadow-2xs hover:shadow-md transition-all flex items-start gap-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FAF1E4] border border-[#e8d2b7] flex items-center justify-center shrink-0">
                    {feat.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm mb-0.5">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-normal">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Haryana & NCR Regional Authority Assurance */}
            <div className="p-4 rounded-xl bg-[#143629]/5 border border-[#143629]/15 text-xs text-slate-700 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#143629] shrink-0" />
              <span>
                <strong>Legal Registry Guarantee:</strong> Complete title search, mutation verification, and Haryana HRERA registration checks handled by our in-house legal team.
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
