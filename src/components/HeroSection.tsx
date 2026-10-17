import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { motion } from 'motion/react';

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

            {/* CTAs */}
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

            {/* Quick Trust Badges */}
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

          {/* Right Column: Hero Visual - Sliding in from right */}
          <div className="lg:col-span-6 relative overflow-hidden lg:overflow-visible">
            <motion.div
              initial={{ x: 140, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1.0,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1
              }}
              className="relative mx-auto max-w-lg lg:max-w-none flex items-center justify-center"
            >
              {/* Warm Ambient Glow behind the architectural model */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-[#b47b3b]/20 via-[#1b4332]/10 to-amber-400/15 rounded-full blur-3xl -z-10 pointer-events-none transform -translate-y-2"></div>

              {/* Gentle floating motion container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-full flex items-center justify-center"
              >
                {/* Main Cut-out 3D Architectural Villa in Hand */}
                <img
                  src="/images/banners/MAIN BANNER.png"
                  alt="Modern Luxury Dream House Model - Jagannath Properties"
                  className="w-full max-h-[440px] sm:max-h-[520px] lg:max-h-[580px] object-contain drop-shadow-[0_20px_35px_rgba(20,54,41,0.25)] select-none transition-transform duration-500 hover:scale-[1.02]"
                />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
