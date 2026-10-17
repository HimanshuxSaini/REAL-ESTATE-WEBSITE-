import React, { useState } from 'react';
import { X, Send, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyTitle?: string;
  onSuccess: (msg: string) => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  propertyTitle,
  onSuccess
}) => {
  if (!isOpen) return null;

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredCity, setPreferredCity] = useState('Sonipat');
  const [budgetRange, setBudgetRange] = useState('₹ 50L - ₹ 1 Cr');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      alert('Please fill your name and phone number.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          preferredCity,
          budgetRange,
          message,
          propertyTitle: propertyTitle || 'General Property Consultation',
          type: propertyTitle ? 'property_inquiry' : 'general'
        })
      });

      const data = await res.json();
      if (data.success) {
        onSuccess(`Enquiry received! Our senior real estate advisor will call you at ${phone} within 15 minutes.`);
        onClose();
      } else {
        alert(data.message || 'Submission failed.');
      }
    } catch (err) {
      console.error(err);
      onSuccess(`Thank you ${fullName}! We have registered your inquiry.`);
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl border border-[#ebdccb] w-full max-w-md overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#122b22] text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#b47b3b] text-white flex items-center justify-center">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-white text-base">
                {propertyTitle ? 'Property Enquiry' : 'Quick Consultation'}
              </h3>
              <p className="text-[11px] text-emerald-200">
                Direct hotline with Jagannath Properties advisory desk
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
          
          {propertyTitle && (
            <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#ebd8c2] text-xs">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Regarding:</span>
              <p className="font-bold text-[#142620] mt-0.5">{propertyTitle}</p>
            </div>
          )}

          {/* Name & Phone */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Full Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Surender Hooda"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-slate-200 bg-[#FAF8F5] focus:outline-hidden focus:border-[#b47b3b]"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Mobile Number (WhatsApp Preferred) *</label>
            <input
              type="tel"
              required
              placeholder="e.g. +91 98765 43210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-slate-200 bg-[#FAF8F5] focus:outline-hidden focus:border-[#b47b3b]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Preferred Location</label>
              <select
                value={preferredCity}
                onChange={(e) => setPreferredCity(e.target.value)}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-[#FAF8F5]"
              >
                <option value="Sonipat">Sonipat</option>
                <option value="Rohtak">Rohtak</option>
                <option value="Panipat">Panipat</option>
                <option value="Jind">Jind</option>
                <option value="Delhi NCR">Delhi NCR</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Budget Range</label>
              <select
                value={budgetRange}
                onChange={(e) => setBudgetRange(e.target.value)}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-[#FAF8F5]"
              >
                <option value="Under ₹30 Lakh">Under ₹30 Lakh</option>
                <option value="₹30L - ₹60 Lakh">₹30L - ₹60 Lakh</option>
                <option value="₹60L - ₹1.2 Cr">₹60L - ₹1.2 Cr</option>
                <option value="₹1.2 Cr - ₹2.5 Cr">₹1.2 Cr - ₹2.5 Cr</option>
                <option value="Above ₹2.5 Cr">Above ₹2.5 Cr</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Specific Requirements</label>
            <textarea
              rows={2}
              placeholder="Tell us what size plot, facing, or sector you are looking for..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-[#FAF8F5]"
            />
          </div>

          <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Strict privacy. No unsolicited spam calls.</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#b47b3b] to-[#c78b47] hover:from-[#9c682e] hover:to-[#b0783a] text-white font-bold text-sm shadow-md transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>{isSubmitting ? 'Submitting...' : 'Request Call Back'}</span>
          </button>
        </form>

      </div>
    </div>
  );
};
