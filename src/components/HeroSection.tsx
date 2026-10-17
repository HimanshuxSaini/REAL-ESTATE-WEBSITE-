import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Award } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onContactClick
}) => {
  return (
    <section id="home" className="relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#f7f2ea] to-[#FAF8F5]">
      {/* Subtle architectural background watermark accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#b47b3b_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Top Subtitle Badge - Matches Screenshot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ede5d8]/80 border border-[#e0d2bf] text-[11px] sm:text-xs font-semibold tracking-wider text-[#1d3d30] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b47b3b]"></span>
              PREMIUM PROPERTIES IN ROHTAK, SONIPAT, PANIPAT, JIND & DELHI NCR
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-[#142620] tracking-tight leading-[1.12]">
              Your Dream Home <br />
              Begins with the <br />
              <span className="text-[#b47b3b] font-serif italic font-normal tracking-normal">
                Right Address
              </span>
            </h1>

            {/* Description Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Discover the right property in the right location with Jagannath Properties. Your trusted real estate partner for residential, commercial and investment properties.
            </p>

            {/* CTAs matching screenshot */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="px-6 py-3.5 rounded-lg bg-[#143629] hover:bg-[#0e271d] text-white font-medium text-base shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer group"
              >
                <span>Explore Properties</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onContactClick}
                className="px-6 py-3.5 rounded-lg border border-slate-400/80 hover:border-[#143629] hover:bg-white text-slate-800 font-medium text-base transition-all cursor-pointer shadow-2xs"
              >
                Contact Us
              </button>
            </div>

            {/* Quick Trust Badges for Indian Real Estate Buyers */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-[#ebd8c2]/80 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#b47b3b] shrink-0" />
                <span className="font-medium">100% Verified Titles</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#143629] shrink-0" />
                <span className="font-medium">RERA Compliant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#b47b3b] shrink-0" />
                <span className="font-medium">Free Site Visits</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Floating Badge - Matches Screenshot */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Luxury Architectural Villa Visual */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                  alt="Modern Luxury Dream House"
                  className="w-full h-[360px] sm:h-[440px] lg:h-[470px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none"></div>

                {/* Bottom Left Badge in Villa photo */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-white flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1b4332] text-white flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 font-medium uppercase leading-tight">Featured Project</p>
                    <p className="text-xs font-bold text-slate-900">Sonipat & Rohtak Sectors</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge in Top Right of image - Matches Screenshot */}
              <div className="absolute -top-3 -right-2 sm:-top-5 sm:right-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-xl border border-[#e2d5c3] flex items-center gap-3 animate-in fade-in zoom-in-95">
                <div className="w-9 h-9 rounded-full bg-[#FAF3E8] border border-[#d9ba88] flex items-center justify-center text-[#b47b3b]">
                  <Award className="w-5 h-5 text-[#b47b3b]" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#142620] leading-tight">
                    Trusted Real Estate Partner
                  </p>
                  <p className="text-[11px] text-slate-500 leading-tight">
                    in Haryana & Delhi NCR
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
