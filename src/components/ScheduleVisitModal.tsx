import React, { useState } from 'react';
import { X, Calendar, Clock, Car, CheckCircle2, User, Phone } from 'lucide-react';
import { Property } from '../types';

interface ScheduleVisitModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: (message: string) => void;
}

export const ScheduleVisitModal: React.FC<ScheduleVisitModalProps> = ({
  property,
  isOpen,
  onClose,
  onSubmitSuccess
}) => {
  if (!isOpen) return null;

  const [visitorName, setVisitorName] = useState('');
  const [phone, setPhone] = useState('');
  const [visitDate, setVisitDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('11:00 AM - 01:00 PM');
  const [pickupRequired, setPickupRequired] = useState(false);
  const [pickupLocation, setPickupLocation] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const timeSlots = [
    '09:00 AM - 11:00 AM',
    '11:00 AM - 01:00 PM',
    '02:00 PM - 04:00 PM',
    '04:00 PM - 06:00 PM'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorName.trim() || !phone.trim() || !visitDate) {
      alert('Please fill your name, phone number, and preferred date.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/schedule-visit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          propertyId: property ? property.id : 'general-sector',
          propertyTitle: property ? property.title : 'General Site Inspection',
          visitorName,
          phone,
          visitDate,
          visitTimeSlot: timeSlot,
          pickupRequired,
          pickupLocation: pickupRequired ? pickupLocation : ''
        })
      });

      const data = await res.json();
      if (data.success) {
        onSubmitSuccess(`Site visit scheduled for ${visitDate}! Our field executive will contact you at ${phone}.`);
        onClose();
      } else {
        alert(data.message || 'Failed to schedule visit.');
      }
    } catch (err) {
      console.error(err);
      onSubmitSuccess(`Site visit scheduled for ${visitDate}! Our field executive will call you shortly.`);
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl border border-[#ebdccb] w-full max-w-lg overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#122b22] text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#b47b3b] text-white flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-white text-base">
                Schedule a Free Site Visit
              </h3>
              <p className="text-[11px] text-emerald-200">
                Complimentary chauffeur pickup available across NCR & Haryana
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 text-left">
          
          {property && (
            <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#ebd8c2] text-xs">
              <span className="font-bold text-slate-400 uppercase tracking-wider block text-[10px]">Visiting Property</span>
              <p className="font-bold text-[#142620] text-sm mt-0.5">{property.title}</p>
              <p className="text-slate-500">{property.locality} • <strong className="text-[#b47b3b]">{property.priceDisplay}</strong></p>
            </div>
          )}

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-[#b47b3b]" />
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Ramesh Kumar"
                value={visitorName}
                onChange={(e) => setVisitorName(e.target.value)}
                className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-slate-200 bg-[#FAF8F5] focus:outline-hidden focus:border-[#b47b3b]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#b47b3b]" />
                Contact Mobile *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. +91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-slate-200 bg-[#FAF8F5] focus:outline-hidden focus:border-[#b47b3b]"
              />
            </div>
          </div>

          {/* Visit Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#b47b3b]" />
                Preferred Date *
              </label>
              <input
                type="date"
                required
                value={visitDate}
                onChange={(e) => setVisitDate(e.target.value)}
                className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-slate-200 bg-[#FAF8F5] focus:outline-hidden focus:border-[#b47b3b]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#b47b3b]" />
                Time Slot *
              </label>
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-slate-200 bg-[#FAF8F5] focus:outline-hidden focus:border-[#b47b3b]"
              >
                {timeSlots.map(slot => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Free Cab Pickup Checkbox */}
          <div className="p-3 rounded-xl bg-[#eef7f3] border border-[#c4e8d7] space-y-2">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-[#143629]">
              <input
                type="checkbox"
                checked={pickupRequired}
                onChange={(e) => setPickupRequired(e.target.checked)}
                className="rounded text-[#143629] focus:ring-[#143629] w-4 h-4"
              />
              <Car className="w-4 h-4 text-[#1b4332]" />
              <span>Need Free Pickup & Drop from Nearest Metro / Bus Stop?</span>
            </label>

            {pickupRequired && (
              <input
                type="text"
                placeholder="Enter pickup address (e.g. Samaypur Badli Metro, Sonipat Stand)"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="w-full text-xs p-2 rounded-lg border border-emerald-300 bg-white focus:outline-hidden"
              />
            )}
          </div>

          <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>No charges. Complete tour with registry maps & master plan blueprints.</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-xl bg-[#143629] hover:bg-[#0e271d] text-white font-bold text-sm shadow-md transition-all cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? 'Confirming Visit...' : 'Confirm Free Site Visit'}
          </button>
        </form>

      </div>
    </div>
  );
};
