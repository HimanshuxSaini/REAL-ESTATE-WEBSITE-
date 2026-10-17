import React, { useState } from 'react';
import { X, Building2, CheckCircle2, IndianRupee, MapPin } from 'lucide-react';
import { TransactionType, PropertyCategory, CityLocation } from '../types';

interface PostPropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPropertyAdded: (newProperty: any) => void;
}

export const PostPropertyModal: React.FC<PostPropertyModalProps> = ({
  isOpen,
  onClose,
  onPropertyAdded
}) => {
  if (!isOpen) return null;

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<PropertyCategory>('Residential Plot');
  const [transactionType, setTransactionType] = useState<TransactionType>('plots');
  const [city, setCity] = useState<CityLocation>('Sonipat');
  const [locality, setLocality] = useState('');
  const [price, setPrice] = useState('');
  const [areaSize, setAreaSize] = useState('');
  const [areaUnit, setAreaUnit] = useState<'Sq. Yds.' | 'Sq. Ft.' | 'Acres'>('Sq. Yds.');
  const [bhk, setBhk] = useState('');
  const [facing, setFacing] = useState('East Facing');
  const [roadWidth, setRoadWidth] = useState('12m Road');
  const [description, setDescription] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [sellerPhone, setSellerPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !price || !locality || !sellerPhone) {
      alert('Please fill all compulsory fields marked with *');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/properties', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          category,
          transactionType,
          city,
          locality,
          price: Number(price),
          areaSize: Number(areaSize) || 100,
          areaUnit,
          bhk: bhk ? Number(bhk) : undefined,
          facing,
          roadWidth,
          description,
          sellerName,
          sellerPhone,
          amenities: ['100% Clear Registry', 'Municipal Water', 'Wide Bitumen Road', 'Immediate Possession']
        })
      });

      const data = await res.json();
      if (data.success) {
        onPropertyAdded(data.data);
        onClose();
      } else {
        alert(data.message || 'Error listing property.');
      }
    } catch (err) {
      console.error(err);
      alert('Network error while saving property.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl border border-[#ebdccb] w-full max-w-2xl max-h-[92vh] overflow-y-auto my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#122b22] text-white px-5 py-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#b47b3b] text-white flex items-center justify-center">
              <Building2 className="w-4 h-4" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-white text-base">
                Post Your Property (Free Listing)
              </h3>
              <p className="text-[11px] text-emerald-200">
                Reach genuine verified buyers in Haryana & Delhi NCR with Zero Brokerage
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
          
          {/* Property Title */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">
              Listing Title *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. 150 Gaj Residential Plot in Sector 14"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-slate-200 bg-[#FAF8F5] focus:outline-hidden focus:border-[#b47b3b]"
            />
          </div>

          {/* Type & Transaction */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">
                Property Category *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as PropertyCategory)}
                className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-slate-200 bg-[#FAF8F5] focus:outline-hidden"
              >
                <option value="Residential Plot">Residential Plot (Gaj / Sq. Yds.)</option>
                <option value="Independent House">Independent House / Kothi</option>
                <option value="Flats & Apartments">Flats & Apartments</option>
                <option value="Commercial Property">Commercial Property / Shop</option>
                <option value="Farm House">Farm House / Agricultural</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">
                Purpose *
              </label>
              <select
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value as TransactionType)}
                className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-slate-200 bg-[#FAF8F5] focus:outline-hidden"
              >
                <option value="plots">For Plot Sale</option>
                <option value="buy">For House/Flat Sale</option>
                <option value="rent">For Rent / Lease</option>
                <option value="commercial">Commercial Deal</option>
              </select>
            </div>
          </div>

          {/* City & Locality */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#b47b3b]" />
                Major City / Hub *
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value as CityLocation)}
                className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-slate-200 bg-[#FAF8F5] focus:outline-hidden"
              >
                <option value="Rohtak">Rohtak</option>
                <option value="Sonipat">Sonipat</option>
                <option value="Panipat">Panipat</option>
                <option value="Jind">Jind</option>
                <option value="Delhi NCR">Delhi NCR</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">
                Colony / Sector / Landmark *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Sector 34, GT Road, Near Bus Stand"
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
                className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-slate-200 bg-[#FAF8F5] focus:outline-hidden focus:border-[#b47b3b]"
              />
            </div>
          </div>

          {/* Price (in Indian Rupees) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                <IndianRupee className="w-3.5 h-3.5 text-[#b47b3b]" />
                Price in INR (₹) *
              </label>
              <input
                type="number"
                required
                placeholder="e.g. 7500000 for ₹ 75 Lakh"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-slate-200 bg-[#FAF8F5] focus:outline-hidden focus:border-[#b47b3b]"
              />
              <span className="text-[10px] text-slate-500">
                {price ? `Preview: ₹ ${Number(price).toLocaleString('en-IN')}` : 'Enter numeric value in rupees'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">
                  Size
                </label>
                <input
                  type="number"
                  placeholder="e.g. 150"
                  value={areaSize}
                  onChange={(e) => setAreaSize(e.target.value)}
                  className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-slate-200 bg-[#FAF8F5] focus:outline-hidden"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">
                  Unit
                </label>
                <select
                  value={areaUnit}
                  onChange={(e) => setAreaUnit(e.target.value as any)}
                  className="w-full text-xs sm:text-sm p-2.5 rounded-xl border border-slate-200 bg-[#FAF8F5] focus:outline-hidden"
                >
                  <option value="Sq. Yds.">Sq. Yds. (Gaj)</option>
                  <option value="Sq. Ft.">Sq. Ft.</option>
                  <option value="Acres">Acres</option>
                </select>
              </div>
            </div>
          </div>

          {/* Details (Facing, Road, Description) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Facing</label>
              <input
                type="text"
                placeholder="e.g. East Facing"
                value={facing}
                onChange={(e) => setFacing(e.target.value)}
                className="w-full text-xs p-2 rounded-lg border border-slate-200 bg-[#FAF8F5]"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Road Width</label>
              <input
                type="text"
                placeholder="e.g. 12m Wide Road"
                value={roadWidth}
                onChange={(e) => setRoadWidth(e.target.value)}
                className="w-full text-xs p-2 rounded-lg border border-slate-200 bg-[#FAF8F5]"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">BHK (if House)</label>
              <input
                type="number"
                placeholder="e.g. 3"
                value={bhk}
                onChange={(e) => setBhk(e.target.value)}
                className="w-full text-xs p-2 rounded-lg border border-slate-200 bg-[#FAF8F5]"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">Key Features / Description</label>
            <textarea
              rows={2}
              placeholder="Highlight nearby facilities, registry status, possession timeframe..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-[#FAF8F5]"
            />
          </div>

          {/* Seller Contact */}
          <div className="pt-2 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Owner / Broker Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Devender Singh"
                value={sellerName}
                onChange={(e) => setSellerName(e.target.value)}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-[#FAF8F5]"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Mobile Number *</label>
              <input
                type="tel"
                required
                placeholder="e.g. +91 98765 43210"
                value={sellerPhone}
                onChange={(e) => setSellerPhone(e.target.value)}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-[#FAF8F5]"
              />
            </div>
          </div>

          <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Listing is immediately activated in Jagannath Properties MERN database.</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#b47b3b] to-[#c78b47] hover:from-[#9c682e] hover:to-[#b0783a] text-white font-bold text-sm shadow-md transition-all cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? 'Posting Property...' : 'Submit & Post Property'}
          </button>
        </form>

      </div>
    </div>
  );
};
