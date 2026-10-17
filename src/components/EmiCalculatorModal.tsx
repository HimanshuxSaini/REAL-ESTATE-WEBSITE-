import React, { useState } from 'react';
import { X, Calculator, IndianRupee, PieChart, ShieldCheck } from 'lucide-react';

interface EmiCalculatorModalProps {
  initialPrice?: number;
  isOpen: boolean;
  onClose: () => void;
  onApplyLoanHelp: (amount: string) => void;
}

export const EmiCalculatorModal: React.FC<EmiCalculatorModalProps> = ({
  initialPrice = 7500000,
  isOpen,
  onClose,
  onApplyLoanHelp
}) => {
  if (!isOpen) return null;

  const [price, setPrice] = useState<number>(initialPrice || 7500000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [tenureYears, setTenureYears] = useState<number>(20);
  const [state, setState] = useState<'Haryana' | 'Delhi'>('Haryana');
  const [buyerType, setBuyerType] = useState<'male' | 'female' | 'joint'>('male');

  // Math calculations
  const downPayment = (price * downPaymentPercent) / 100;
  const principal = price - downPayment;
  const monthlyRate = (interestRate / 12) / 100;
  const totalMonths = tenureYears * 12;

  const emi = totalMonths > 0
    ? (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1)
    : 0;

  const totalAmount = emi * totalMonths;
  const totalInterest = Math.max(0, totalAmount - principal);

  // Stamp Duty in Haryana / Delhi
  let stampRate = 0.05; // Haryana male default 5%
  if (state === 'Haryana') {
    stampRate = buyerType === 'female' ? 0.03 : buyerType === 'joint' ? 0.04 : 0.05;
  } else {
    stampRate = buyerType === 'female' ? 0.04 : buyerType === 'joint' ? 0.05 : 0.06;
  }
  const stampDuty = price * stampRate;
  const registrationFee = Math.min(price * 0.01, 50000); // capped in many tehsils

  // Helper format
  const formatINR = (val: number) => {
    if (isNaN(val)) return '₹ 0';
    if (val >= 10000000) {
      return `₹ ${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹ ${(val / 100000).toFixed(2)} Lakh`;
    }
    return `₹ ${Math.round(val).toLocaleString('en-IN')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl border border-[#ebdccb] w-full max-w-3xl max-h-[92vh] overflow-y-auto my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-5 py-4 border-b border-[#eae1d5] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#FAF1E4] border border-[#e8d2b7] flex items-center justify-center text-[#b47b3b]">
              <Calculator className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-slate-900 text-base">
                Home Loan EMI & Stamp Duty Calculator
              </h3>
              <p className="text-[11px] text-slate-500">
                Authorized bank rates (SBI, HDFC, ICICI, PNB) & Haryana/Delhi registry duties
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-6 text-left">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left: Input Controls */}
            <div className="space-y-4">
              
              {/* Property Value Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span className="text-slate-600">Property Price:</span>
                  <span className="text-[#b47b3b] font-bold text-sm">{formatINR(price)}</span>
                </div>
                <input
                  type="range"
                  min={1000000}
                  max={50000000}
                  step={200000}
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full accent-[#b47b3b] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>₹ 10 Lakh</span>
                  <span>₹ 2.5 Cr</span>
                  <span>₹ 5 Cr</span>
                </div>
              </div>

              {/* Down Payment */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span className="text-slate-600">Down Payment ({downPaymentPercent}%):</span>
                  <span className="text-slate-900 font-bold">{formatINR(downPayment)}</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={60}
                  step={5}
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full accent-[#b47b3b] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>10% (Min)</span>
                  <span>30%</span>
                  <span>60%</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span className="text-slate-600">Annual Interest Rate (%):</span>
                  <span className="text-slate-900 font-bold">{interestRate.toFixed(1)}% p.a.</span>
                </div>
                <input
                  type="range"
                  min={7.5}
                  max={13}
                  step={0.1}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full accent-[#b47b3b] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>7.5%</span>
                  <span>8.5% (Bank Avg)</span>
                  <span>13.0%</span>
                </div>
              </div>

              {/* Loan Tenure */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span className="text-slate-600">Loan Tenure:</span>
                  <span className="text-slate-900 font-bold">{tenureYears} Years ({totalMonths} Mos)</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={30}
                  step={1}
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full accent-[#b47b3b] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>5 Yrs</span>
                  <span>15 Yrs</span>
                  <span>30 Yrs</span>
                </div>
              </div>

              {/* State & Buyer Category for Stamp Duty */}
              <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block font-semibold text-slate-600 mb-1">State / Union Territory</label>
                  <select
                    value={state}
                    onChange={(e) => setState(e.target.value as any)}
                    className="w-full bg-[#FAF8F5] border border-slate-200 rounded-lg p-2 font-medium"
                  >
                    <option value="Haryana">Haryana (Rohtak, Sonipat, Panipat, Jind)</option>
                    <option value="Delhi">Delhi NCR</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-600 mb-1">Registration In Name Of</label>
                  <select
                    value={buyerType}
                    onChange={(e) => setBuyerType(e.target.value as any)}
                    className="w-full bg-[#FAF8F5] border border-slate-200 rounded-lg p-2 font-medium"
                  >
                    <option value="male">Male Buyer (5% Haryana / 6% Delhi)</option>
                    <option value="female">Female Buyer (3% Haryana - Discounted!)</option>
                    <option value="joint">Joint Ownership (4% Haryana)</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Right: Results Display Card */}
            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#ebdccb] flex flex-col justify-between space-y-4">
              
              <div className="text-center p-4 bg-white rounded-xl border border-[#eedfcb] shadow-xs">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                  Estimated Monthly EMI
                </span>
                <div className="text-3xl font-extrabold text-[#142620]">
                  ₹ {Math.round(emi).toLocaleString('en-IN')}
                </div>
                <span className="text-[11px] text-emerald-700 font-medium">
                  Principal: {formatINR(principal)}
                </span>
              </div>

              {/* Detailed Breakdown */}
              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Loan Principal</span>
                  <span className="font-bold text-slate-800">{formatINR(principal)}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Total Interest Payable</span>
                  <span className="font-bold text-[#b47b3b]">{formatINR(totalInterest)}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Total Loan Repayment</span>
                  <span className="font-bold text-slate-800">{formatINR(totalAmount)}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200 bg-[#FAF1E4] px-2 rounded">
                  <span className="text-slate-700 font-semibold">
                    Stamp Duty ({state} - {(stampRate * 100).toFixed(0)}%)
                  </span>
                  <span className="font-bold text-[#142620]">{formatINR(stampDuty)}</span>
                </div>
                <div className="flex justify-between py-1 px-2">
                  <span className="text-slate-500">Govt. Registration Fees (Approx.)</span>
                  <span className="font-bold text-slate-800">{formatINR(registrationFee)}</span>
                </div>
              </div>

              {/* Assistance Button */}
              <button
                onClick={() => {
                  onClose();
                  onApplyLoanHelp(formatINR(principal));
                }}
                className="w-full py-3 rounded-xl bg-[#143629] hover:bg-[#0e271d] text-white font-semibold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-[#deb06f]" />
                <span>Apply for Instant Bank Loan Approval</span>
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
