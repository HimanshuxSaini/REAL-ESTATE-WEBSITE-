import React from 'react';
import { Phone, ArrowRight, Building2 } from 'lucide-react';

interface CTABannerProps {
  onContactClick: () => void;
}

export const CTABanner: React.FC<CTABannerProps> = ({ onContactClick }) => {
  return (
    <section className="py-16 md:py-20 bg-[#122b22] text-white relative overflow-hidden">
      {/* Background architectural geometric line art pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#deb06f_1px,transparent_1px)] [background-size:28px_28px]"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center relative z-10 space-y-6">
        
        {/* Kicker Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e4435] border border-[#2d5c48] text-xs font-bold uppercase tracking-widest text-[#e4bd80]">
          <Building2 className="w-3.5 h-3.5" />
          READY TO FIND YOUR DREAM PROPERTY?
        </div>

        {/* Main Headline - Matches Screenshot */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
          Get Expert Guidance from Jagannath Properties
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-[#c5ded5] max-w-2xl mx-auto leading-relaxed">
          Whether you want to buy, sell or rent, we are here to help you find prime properties with complete peace of mind.
        </p>

        {/* Buttons - Matches Screenshot */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
          <button
            onClick={onContactClick}
            className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#b47b3b] to-[#c78b47] hover:from-[#9c682e] hover:to-[#b0783a] text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer group"
          >
            <span>Contact Us Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="tel:+919876543210"
            className="px-6 py-3.5 rounded-xl border border-[#3b6d57] bg-[#17382c]/80 hover:bg-[#1b4334] text-white font-semibold text-sm sm:text-base transition-all flex items-center gap-2.5 shadow-md"
          >
            <Phone className="w-4 h-4 text-[#deb06f]" />
            <span>Call +91 98765 43210</span>
          </a>
        </div>

      </div>
    </section>
  );
};
