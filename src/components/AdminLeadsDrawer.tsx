import React from 'react';
import { X, Phone, Calendar, User, Clock, CheckCircle2, Shield, MessageSquare } from 'lucide-react';
import { EnquirySubmission } from '../types';

interface AdminLeadsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  leads: EnquirySubmission[];
  onRefresh: () => void;
}

export const AdminLeadsDrawer: React.FC<AdminLeadsDrawerProps> = ({
  isOpen,
  onClose,
  leads,
  onRefresh
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs">
      <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-200">
        
        {/* Header */}
        <div className="bg-[#122b22] text-white p-4 flex items-center justify-between border-b border-[#224436]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#b47b3b] text-white flex items-center justify-center font-bold text-xs">
              CRM
            </div>
            <div className="text-left">
              <h3 className="font-bold text-white text-base">
                Customer Inquiries & Leads
              </h3>
              <p className="text-[11px] text-emerald-200">
                {leads.length} Active Buyer Leads in Database
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onRefresh}
              className="text-xs bg-[#1f4a38] hover:bg-[#285d47] px-2.5 py-1 rounded text-white"
            >
              Refresh
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Lead Items List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#FAF8F5]">
          {leads.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-sm">
              No leads yet. Submit an inquiry or book a site visit to see it recorded here.
            </div>
          ) : (
            leads.map((lead) => {
              const isVisit = lead.type === 'schedule_visit';
              return (
                <div
                  key={lead.id}
                  className="bg-white p-4 rounded-xl border border-[#ebdccb] shadow-2xs text-left space-y-2 hover:border-[#b47b3b] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                      isVisit ? 'bg-amber-100 text-amber-900 border border-amber-200' : 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                    }`}>
                      {isVisit ? 'Site Visit Booked' : 'Buyer Inquiry'}
                    </span>
                    <span className="text-[10px] text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {lead.createdAt}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#b47b3b]" />
                    <span className="font-bold text-slate-900 text-sm">{lead.fullName}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-600 bg-slate-50 p-2 rounded-lg">
                    <div className="flex items-center gap-1.5 font-medium">
                      <Phone className="w-3.5 h-3.5 text-emerald-600" />
                      <a href={`tel:${lead.phone}`} className="hover:underline text-slate-800">
                        {lead.phone}
                      </a>
                    </div>
                    {lead.budgetRange && (
                      <span className="font-semibold text-[#b47b3b] text-[11px]">
                        Budget: {lead.budgetRange}
                      </span>
                    )}
                  </div>

                  {lead.propertyTitle && (
                    <p className="text-xs text-slate-700 font-medium line-clamp-1">
                      Property: <strong>{lead.propertyTitle}</strong>
                    </p>
                  )}

                  <p className="text-xs text-slate-500 bg-[#FAF8F5] p-2 rounded border border-slate-100">
                    "{lead.message}"
                  </p>

                  <div className="flex items-center justify-between pt-1 text-[11px]">
                    <span className="text-emerald-700 flex items-center gap-1 font-semibold">
                      <CheckCircle2 className="w-3 h-3" />
                      Assigned to Field Executive
                    </span>
                    <a
                      href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(lead.fullName)}%2C%20regarding%20your%20property%20inquiry%20with%20Jagannath%20Properties.`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#25D366] hover:underline font-bold"
                    >
                      WhatsApp Lead →
                    </a>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-white border-t border-[#ebd8c2] text-center text-xs text-slate-500">
          MERN Backend Connected • Express REST API
        </div>

      </div>
    </div>
  );
};
