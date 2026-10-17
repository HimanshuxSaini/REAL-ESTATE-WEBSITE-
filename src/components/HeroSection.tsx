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
    <section id="home" className="relative min-h-[calc(100vh-76px)] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#f7f2ea] to-[#FAF8F5] py-10 lg:py-16">
      {/* Subtle architectural background watermark accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#b47b3b_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center w-full">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-6 sm:space-y-8 text-left">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#142620] tracking-tight leading-[1.08]">
              Your Dream Home <br />
              Begins with the <br />
              <span className="text-[#b47b3b] font-serif italic font-normal tracking-normal">
                Right Address
              </span>
            </h1>

            {/* Description Paragraph */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-xl leading-relaxed">
              Discover the right property in the right location with Jagannath Properties. Your trusted real estate partner for residential, commercial and investment properties.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="px-7 py-4 rounded-xl bg-[#143629] hover:bg-[#0e271d] text-white font-semibold text-base sm:text-lg shadow-md hover:shadow-xl transition-all flex items-center gap-2.5 cursor-pointer group"
              >
                <span>Explore Properties</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={onContactClick}
                className="px-7 py-4 rounded-xl border border-slate-400/80 hover:border-[#143629] hover:bg-white text-slate-800 font-semibold text-base sm:text-lg transition-all cursor-pointer shadow-xs hover:shadow-md"
              >
                Contact Us
              </button>
            </div>

            {/* Quick Trust Badges */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#ebd8c2]/80 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#b47b3b] shrink-0" />
                <span className="font-medium">100% Verified Titles</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#143629] shrink-0" />
                <span className="font-medium">RERA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#b47b3b] shrink-0" />
                <span className="font-medium">Free Site Visits</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual - Sliding in from right */}
          <div className="lg:col-span-6 xl:col-span-7 relative overflow-hidden lg:overflow-visible flex items-center justify-center">
            <motion.div
              initial={{ x: 160, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1
              }}
              className="relative w-full mx-auto flex items-center justify-center"
            >
              {/* Warm Ambient Glow behind the architectural model */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-[#b47b3b]/25 via-[#1b4332]/15 to-amber-400/20 rounded-full blur-3xl -z-10 pointer-events-none transform -translate-y-4"></div>

              {/* Gentle floating motion container */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-full flex items-center justify-center"
              >
                {/* Main Cut-out 3D Architectural Villa in Hand */}
                <img
                  src="/images/banners/MAIN BANNER.png"
                  alt="Modern Luxury Dream House Model - Jagannath Properties"
                  className="w-full max-h-[520px] sm:max-h-[620px] lg:max-h-[700px] xl:max-h-[760px] 2xl:max-h-[820px] object-contain drop-shadow-[0_25px_45px_rgba(20,54,41,0.25)] select-none transition-transform duration-500 hover:scale-[1.02]"
                />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
