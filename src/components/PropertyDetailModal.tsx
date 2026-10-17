import React, { useState } from 'react';
import { X, MapPin, CheckCircle, ShieldCheck, Phone, MessageCircle, Calendar, Calculator, Ruler, Compass, Layers, Share2 } from 'lucide-react';
import { Property } from '../types';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
  onScheduleVisit: (property: Property) => void;
  onEnquire: (propertyTitle: string) => void;
  onOpenEmiCalculator: (price: number) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  onScheduleVisit,
  onEnquire,
  onOpenEmiCalculator
}) => {
  if (!property) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  const isRent = property.transactionType === 'rent';

  // Quick Indian stamp duty estimate
  const stampDutyRate = property.city === 'Delhi NCR' ? 0.06 : 0.05;
  const estimatedStampDuty = property.price * stampDutyRate;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleWhatsApp = () => {
    const text = `Hi Jagannath Properties, I am interested in "${property.title}" (${property.priceDisplay}) located in ${property.locality}. Please share more details and layout plan.`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl border border-[#e8ded1] w-full max-w-4xl max-h-[92vh] overflow-y-auto my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-5 py-4 border-b border-[#eae1d5] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-[#132c23] text-white text-xs font-semibold uppercase tracking-wider">
              {isRent ? 'For Rent' : 'For Sale'}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-[#FAF0E1] text-[#b47b3b] text-xs font-bold border border-[#dfc39e]">
              {property.category}
            </span>
            {property.reraApproved && (
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5" />
                HRERA Approved
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              title="Copy Link"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6 text-left">
          
          {copiedLink && (
            <div className="bg-emerald-50 text-emerald-800 text-xs px-3 py-2 rounded-lg border border-emerald-200 text-center">
              Property link copied to clipboard!
            </div>
          )}

          {/* Main Title & Price Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#142620]">
                {property.title}
              </h2>
              <p className="text-sm text-slate-500 flex items-center gap-1.5 mt-1">
                <MapPin className="w-4 h-4 text-[#b47b3b] shrink-0" />
                <span>{property.locality}</span>
              </p>
            </div>

            <div className="sm:text-right">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#142620]">
                {property.priceDisplay}
              </div>
              {property.pricePerUnit && !isRent && (
                <p className="text-xs font-semibold text-slate-400">
                  Rate: {property.pricePerUnit}
                </p>
              )}
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="space-y-2">
            <div className="h-64 sm:h-96 rounded-2xl overflow-hidden bg-slate-900 shadow-md">
              <img
                src={property.images[activeImageIndex] || property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>

            {property.images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {property.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`h-16 w-24 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activeImageIndex === i
                        ? 'border-[#b47b3b] scale-102 ring-2 ring-[#b47b3b]/30'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Key Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#FAF8F5] p-4 rounded-xl border border-[#ebdccb]">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                <Ruler className="w-3.5 h-3.5 text-[#b47b3b]" />
                Plot / Carpet Area
              </span>
              <p className="text-sm font-bold text-slate-900">
                {property.areaSize} {property.areaUnit}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-[#b47b3b]" />
                Configuration
              </span>
              <p className="text-sm font-bold text-slate-900">
                {property.bhk ? `${property.bhk} BHK Luxury` : property.category}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                <Compass className="w-3.5 h-3.5 text-[#b47b3b]" />
                Orientation & Facing
              </span>
              <p className="text-sm font-bold text-slate-900">
                {property.facing || 'East Facing (Vastu Compliant)'}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#b47b3b]" />
                Title Verification
              </span>
              <p className="text-sm font-bold text-emerald-700">
                100% Clear Title & Registry
              </p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-bold text-slate-900 text-base mb-2">
              Property Description & Overview
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
              {property.description}
            </p>
          </div>

          {/* Amenities Checklist */}
          <div>
            <h3 className="font-bold text-slate-900 text-base mb-3">
              Sector & Property Amenities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {property.amenities.map((amenity, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Indian Stamp Duty & Registration Note (Haryana / Delhi NCR) */}
          {!isRent && (
            <div className="p-4 rounded-xl bg-[#FAF3E8] border border-[#ebd6be] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-700">
              <div className="space-y-0.5">
                <p className="font-bold text-[#142620] text-sm">
                  Estimated Stamp Duty & Govt. Registry Charges
                </p>
                <p className="text-slate-600">
                  Haryana: ~5% (Male) / 3% (Female) | Delhi: ~6% (Male) / 4% (Female)
                </p>
                <p className="text-[11px] text-slate-500">
                  Estimated Duty: ~₹ {Math.round(estimatedStampDuty).toLocaleString('en-IN')} (Bank loan up to 80% available)
                </p>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenEmiCalculator(property.price);
                }}
                className="self-start sm:self-auto px-3.5 py-2 rounded-lg bg-white border border-[#b47b3b] text-[#b47b3b] hover:bg-[#b47b3b] hover:text-white font-semibold transition-colors flex items-center gap-1.5 shrink-0"
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>Calculate EMI</span>
              </button>
            </div>
          )}

          {/* Bottom Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3 border-t border-[#eee2d3]">
            <button
              onClick={() => onScheduleVisit(property)}
              className="flex-1 min-w-[200px] py-3 px-4 rounded-xl bg-[#143629] hover:bg-[#0e271d] text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#deb06f]" />
              <span>Book Free Site Visit (With Cab)</span>
            </button>

            <button
              onClick={handleWhatsApp}
              className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onEnquire(property.title);
              }}
              className="py-3 px-4 rounded-xl bg-[#b47b3b] hover:bg-[#9a672e] text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Enquire Now</span>
            </button>

            <a
              href="tel:+919876543210"
              className="p-3 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-800 transition-colors"
              title="Call Helpline"
            >
              <Phone className="w-4 h-4 text-[#143629]" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
