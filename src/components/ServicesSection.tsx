import React from 'react';
import { Layers, Hammer, FileCheck, Banknote, ShieldCheck, Compass } from 'lucide-react';

interface ServicesSectionProps {
  onEnquireService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onEnquireService }) => {
  const services = [
    {
      title: 'Residential Plot Sourcing & Dealings',
      desc: 'HUDA approved, Town & Country Planning (DTP) cleared plots in premier sectors of Rohtak, Sonipat, Panipat & Jind with immediate registry & mutation.',
      icon: <Layers className="w-6 h-6 text-[#b47b3b]" />,
      action: 'Find Approved Plots'
    },
    {
      title: 'Turnkey Dream House Construction',
      desc: 'Architectural planning, 3D elevation designs, Vastu layout, municipal sanctioning, and A-grade construction contractor management at fixed per-sq.ft. costs.',
      icon: <Hammer className="w-6 h-6 text-[#b47b3b]" />,
      action: 'Estimate Building Cost'
    },
    {
      title: 'Legal Title Verification & Registry',
      desc: 'Thorough search report of last 30 years registry records from Tehsil office, Jamabandi check, encumbrance verification, and hassle-free deed registration.',
      icon: <FileCheck className="w-6 h-6 text-[#b47b3b]" />,
      action: 'Verify Property Papers'
    },
    {
      title: 'Bank Home Loan Facilitation',
      desc: 'Official tie-ups with State Bank of India, HDFC Bank, ICICI Bank, and PNB. Lowest repo rates, zero documentation hassle, and rapid 7-day loan sanctions.',
      icon: <Banknote className="w-6 h-6 text-[#b47b3b]" />,
      action: 'Apply for Home Loan'
    },
    {
      title: 'Commercial Leasing & High Yields',
      desc: 'Prime high-street retail shops, SCO plots (Shop-cum-Office), and warehousing hubs along GT Road corridor and KMP Expressway yielding 8-11% ROI.',
      icon: <Compass className="w-6 h-6 text-[#b47b3b]" />,
      action: 'View Commercial Deals'
    },
    {
      title: 'Agricultural & Farmhouse Estates',
      desc: 'Gated country estates, fertile canal-irrigated farmland, and retreat farmhouses with power connection, deep borewells, and luxury gazebos near Murthal.',
      icon: <ShieldCheck className="w-6 h-6 text-[#b47b3b]" />,
      action: 'Explore Farmhouses'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-[#FAF8F5] border-t border-[#f0e7dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2.5">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#b47b3b] uppercase">
            END-TO-END SERVICES
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#142620] tracking-tight">
            Comprehensive Real Estate Solutions
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            From plot identification to key handover, our expert advisors and legal advocates guide you through every milestone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#e8ded1] shadow-2xs hover:shadow-lg hover:border-[#b47b3b]/60 transition-all flex flex-col justify-between text-left group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FAF1E4] border border-[#e8d2b7] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#b47b3b] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <button
                onClick={() => onEnquireService(item.title)}
                className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:border-[#b47b3b] hover:text-[#b47b3b] font-semibold text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer bg-slate-50/50 hover:bg-[#FAF3E8]"
              >
                <span>{item.action}</span>
                <span>→</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
