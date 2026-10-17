import React, { useState } from 'react';
import { MessageCircle, X, Send, PhoneCall, TrendingUp, MapPin, Home, Building2, Car, Calculator, FileCheck, CheckCircle2, IndianRupee, Info } from 'lucide-react';

interface WhatsAppFloatingButtonProps {
  onQuickCall: () => void;
}

interface SuggestionOption {
  id: string;
  category: 'plots' | 'homes' | 'commercial' | 'services' | 'budget';
  label: string;
  icon: React.ReactNode;
  promptText: string;
  instantReply: string;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({ onQuickCall }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'plots' | 'homes' | 'services'>('all');
  const [userMsg, setUserMsg] = useState('');
  const [selectedSuggestion, setSelectedSuggestion] = useState<SuggestionOption | null>(null);

  const suggestions: SuggestionOption[] = [
    {
      id: 'sug-1',
      category: 'plots',
      label: 'Plots in Sonipat Sector 34',
      icon: <MapPin className="w-3.5 h-3.5 text-[#b47b3b]" />,
      promptText: 'Hi Jagannath Properties, I am interested in buying an approved residential plot in Sonipat (Sector 34 / GT Road belt). Please share available sizes and prices.',
      instantReply: 'We have 120, 150 & 250 Gaj approved plots in Sonipat starting ₹65,000/Sq. Yd. with immediate registry and SBI loan.'
    },
    {
      id: 'sug-2',
      category: 'homes',
      label: '4 BHK Kothi in Rohtak',
      icon: <Home className="w-3.5 h-3.5 text-[#b47b3b]" />,
      promptText: 'Hello, looking for a ready-to-move 4 BHK independent kothi/bungalow in Rohtak (Sector 14 / Model Town). What are the options under ₹1.5 Cr?',
      instantReply: 'We have duplex luxury kothis in Model Town & Sector 14 with Italian marble, parking & modular kitchen ready for possession.'
    },
    {
      id: 'sug-3',
      category: 'plots',
      label: 'Plots in Panipat & Jind',
      icon: <MapPin className="w-3.5 h-3.5 text-[#b47b3b]" />,
      promptText: 'Hi, please send me details of residential plots in Panipat (Sushant City) and Jind HUDA Sector 9 with registry details.',
      instantReply: 'HUDA approved plots available in Jind Sector 9 (250 Gaj) and Panipat Sushant City with clear mutation title.'
    },
    {
      id: 'sug-4',
      category: 'services',
      label: 'Book Free Site Visit (With Cab)',
      icon: <Car className="w-3.5 h-3.5 text-emerald-600" />,
      promptText: 'Namaste, I want to book a free on-site property tour this weekend with chauffeur pickup from Delhi/Sonipat.',
      instantReply: 'Free pickup arranged from your home or nearest Metro/Bus stop. Our field manager will escort you for on-ground inspection.'
    },
    {
      id: 'sug-5',
      category: 'commercial',
      label: 'Commercial Shops & High ROI',
      icon: <Building2 className="w-3.5 h-3.5 text-amber-600" />,
      promptText: 'Hi, I want commercial shop/office investment options in Delhi NCR or Sonipat with 8-10% rental yield.',
      instantReply: 'Commercial corner retail shops and main road showrooms available in Delhi NCR & GT Road hub yielding high monthly rent.'
    },
    {
      id: 'sug-6',
      category: 'services',
      label: 'Haryana Stamp Duty & Bank Loan',
      icon: <Calculator className="w-3.5 h-3.5 text-blue-600" />,
      promptText: 'Hi, I need assistance calculating Haryana stamp duty (male vs female buyer) and applying for an SBI/HDFC home loan.',
      instantReply: 'Haryana stamp duty is 5% for male and 3% for female buyers. We assist with 80% bank financing with 7-day sanctions.'
    },
    {
      id: 'sug-7',
      category: 'homes',
      label: 'Properties Under ₹50 Lakh',
      icon: <IndianRupee className="w-3.5 h-3.5 text-[#b47b3b]" />,
      promptText: 'Hello, please share the best residential plots and apartments available in Haryana under ₹50 Lakh budget.',
      instantReply: 'Curated 100-120 Gaj plots and 2 BHK apartments in Sonipat Kundli and Rohtak Omaxe City under ₹50L budget.'
    },
    {
      id: 'sug-8',
      category: 'services',
      label: 'Legal Registry & Title Check',
      icon: <FileCheck className="w-3.5 h-3.5 text-emerald-700" />,
      promptText: 'Hi, can your legal team verify Tehsil registry papers, Jamabandi, and mutation records for a property I am purchasing?',
      instantReply: 'Our in-house advocates provide 30-year search reports, encumbrance verification, and Tehsil registry liaison.'
    }
  ];

  const filteredSuggestions = selectedCategory === 'all'
    ? suggestions
    : suggestions.filter(s => s.category === selectedCategory || (selectedCategory === 'services' && s.category === 'commercial'));

  const handleSelectSuggestion = (item: SuggestionOption) => {
    setSelectedSuggestion(item);
    setUserMsg(item.promptText);
  };

  const handleSend = () => {
    const text = userMsg.trim() || (selectedSuggestion ? selectedSuggestion.promptText : "Hi Jagannath Properties, I am interested in exploring properties in Haryana & Delhi NCR.");
    const url = `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-[340px] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-[#ebd8c2] overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          
          {/* Header - Verified Business Style */}
          <div className="bg-[#122b22] text-white p-3.5 sm:p-4 flex items-center justify-between border-b border-[#214335]">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold shadow-md">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-[#122b22]"></div>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-bold text-white tracking-wide">Jagannath Properties</h4>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <p className="text-[11px] text-emerald-200 flex items-center gap-1">
                  Official WhatsApp Desk • Quick Response
                </p>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white p-1 rounded-md transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-3.5 sm:p-4 bg-[#fbf9f6] space-y-3 text-left max-h-[460px] overflow-y-auto">
            
            {/* Bot Greeting Bubble */}
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-2xs border border-[#eee4d6] text-xs text-slate-700 leading-relaxed">
              <div className="flex items-center justify-between text-[#142620] font-bold mb-1">
                <span>Welcome to Jagannath Properties</span>
                <span className="text-[10px] bg-[#FAF0E1] text-[#b47b3b] px-2 py-0.5 rounded font-semibold border border-[#eedfcb]">
                  Haryana & Delhi NCR
                </span>
              </div>
              Select any verified inquiry option below or type your custom requirement to connect directly with a property consultant:
            </div>

            {/* Suggestion Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-[11px]">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-2.5 py-1 rounded-full font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  selectedCategory === 'all'
                    ? 'bg-[#143629] text-white shadow-2xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <TrendingUp className="w-3 h-3" />
                <span>Featured</span>
              </button>
              <button
                onClick={() => setSelectedCategory('plots')}
                className={`px-2.5 py-1 rounded-full font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  selectedCategory === 'plots'
                    ? 'bg-[#143629] text-white shadow-2xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <MapPin className="w-3 h-3" />
                <span>Plots</span>
              </button>
              <button
                onClick={() => setSelectedCategory('homes')}
                className={`px-2.5 py-1 rounded-full font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  selectedCategory === 'homes'
                    ? 'bg-[#143629] text-white shadow-2xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Home className="w-3 h-3" />
                <span>Kothis & Flats</span>
              </button>
              <button
                onClick={() => setSelectedCategory('services')}
                className={`px-2.5 py-1 rounded-full font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  selectedCategory === 'services'
                    ? 'bg-[#143629] text-white shadow-2xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Car className="w-3 h-3" />
                <span>Visits & Loans</span>
              </button>
            </div>

            {/* Quick Suggestions Chips */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Suggested Topics
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {filteredSuggestions.map((item) => {
                  const isSelected = selectedSuggestion?.id === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectSuggestion(item)}
                      className={`w-full text-left p-2 rounded-xl text-xs flex items-center justify-between border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#eef7f3] border-[#25D366] text-[#143629] font-semibold ring-1 ring-[#25D366]'
                          : 'bg-white border-[#ebdccb] text-slate-700 hover:border-[#b47b3b] hover:bg-[#FAF4EC]'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate pr-1">
                        {item.icon}
                        <span className="truncate">{item.label}</span>
                      </div>
                      <span className="text-[10px] text-[#b47b3b] font-bold shrink-0">
                        Select →
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Instant Answer Preview if a suggestion is active */}
            {selectedSuggestion && (
              <div className="p-2.5 rounded-xl bg-[#eef7f3] border border-[#a7ddc0] text-[11px] text-[#143629] space-y-1 animate-in fade-in">
                <div className="flex items-center gap-1 font-bold text-emerald-800">
                  <Info className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Overview:</span>
                </div>
                <p className="leading-relaxed">
                  {selectedSuggestion.instantReply}
                </p>
              </div>
            )}

            {/* User Message Box & Send to WhatsApp */}
            <div className="space-y-2 pt-1 border-t border-[#ede2d4]">
              <div className="relative">
                <textarea
                  rows={2}
                  placeholder="Type your question or custom budget..."
                  value={userMsg}
                  onChange={(e) => {
                    setUserMsg(e.target.value);
                    if (selectedSuggestion && e.target.value !== selectedSuggestion.promptText) {
                      setSelectedSuggestion(null);
                    }
                  }}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-white focus:outline-hidden focus:ring-1 focus:ring-[#25D366] leading-normal"
                />
              </div>

              <button
                onClick={handleSend}
                className="w-full py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>
                  {selectedSuggestion ? 'Send Inquiry to WhatsApp Specialist' : 'Chat on WhatsApp'}
                </span>
              </button>
            </div>

            {/* Bottom Direct Call Option */}
            <div className="text-center pt-1 border-t border-[#ede2d4]">
              <a
                href="tel:+919876543210"
                className="text-[11px] text-[#b47b3b] hover:underline font-semibold flex items-center justify-center gap-1"
              >
                <PhoneCall className="w-3 h-3" />
                Prefer direct call? +91 98765 43210
              </a>
            </div>

          </div>
        </div>
      )}

      {/* Floating Circular WhatsApp Button - Matches Screenshot */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer focus:outline-hidden focus:ring-4 focus:ring-[#25D366]/30 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-white text-[#25D366]" />
        
        {/* Pulsing halo */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
        </span>
      </button>

    </div>
  );
};
