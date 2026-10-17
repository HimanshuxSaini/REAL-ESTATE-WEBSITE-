import React, { useState } from 'react';
import { Phone, Menu, X, Building2, PlusCircle, Calculator, FileText, ChevronDown } from 'lucide-react';
import { CityLocation } from '../types';

interface HeaderProps {
  onOpenEnquiry: (propertyTitle?: string) => void;
  onOpenPostProperty: () => void;
  onOpenEmiCalculator: () => void;
  onOpenAdminLeads: () => void;
  onSelectCity: (city: CityLocation | 'all') => void;
  onNavigateSection: (sectionId: string) => void;
  selectedCity: CityLocation | 'all';
  leadsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenEnquiry,
  onOpenPostProperty,
  onOpenEmiCalculator,
  onOpenAdminLeads,
  onSelectCity,
  onNavigateSection,
  leadsCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);

  const areas: CityLocation[] = ['Rohtak', 'Sonipat', 'Panipat', 'Jind', 'Delhi NCR'];

  return (
    <>
      {/* Top Notification Bar for Indian Buyers */}
      <div className="bg-[#122b22] text-[#e2d5c3] text-xs py-1.5 px-4 sm:px-8 border-b border-[#254639]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Haryana RERA Registered & Authorized Channel Partner
            </span>
            <span className="hidden md:inline text-[#a69680]">|</span>
            <span className="hidden md:inline text-[#d5c7b3]">
              Serving: Rohtak, Sonipat, Panipat, Jind & Delhi NCR
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPostProperty}
              className="text-[#e8b671] hover:text-[#ffd699] font-medium flex items-center gap-1 transition-colors cursor-pointer"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              Post Property (Free)
            </button>
            <span className="text-[#a69680]">|</span>
            <button
              onClick={onOpenAdminLeads}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              title="View Customer Inquiries & Scheduled Visits"
            >
              <FileText className="w-3.5 h-3.5 text-[#e8b671]" />
              CRM Leads
              {leadsCount > 0 && (
                <span className="bg-[#b47b3b] text-white text-[10px] px-1.5 py-0.2 rounded-full font-bold">
                  {leadsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#eae3d8] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo - Matches screenshot */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onNavigateSection('home');
            }}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#244638] to-[#122820] flex items-center justify-center p-2 text-[#e3b879] shadow-sm group-hover:scale-105 transition-transform">
              <Building2 className="w-7 h-7 text-[#deb06f]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#162722] font-brand leading-none">
                JAGANNATH
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#b47b3b] leading-tight">
                PROPERTIES
              </span>
              <span className="text-[10px] text-slate-500 italic leading-none font-medium mt-0.5">
                Your Dream Our Commitment
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-slate-700">
            <button
              onClick={() => onNavigateSection('home')}
              className="text-[#b47b3b] hover:text-[#9b642a] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => onNavigateSection('properties')}
              className="hover:text-[#b47b3b] transition-colors cursor-pointer"
            >
              Properties
            </button>

            {/* Areas Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setAreasDropdownOpen(!areasDropdownOpen)}
                className="flex items-center gap-1 hover:text-[#b47b3b] transition-colors cursor-pointer py-2"
              >
                <span>Areas</span>
                <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-[#b47b3b] transition-transform group-hover:rotate-180" />
              </button>
              
              <div className="absolute top-full left-0 w-48 bg-white border border-[#eadfd0] rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="px-3 py-1 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Major Hubs
                </div>
                {areas.map((area) => (
                  <button
                    key={area}
                    onClick={() => {
                      onSelectCity(area);
                      onNavigateSection('properties');
                      setAreasDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-[#FAF4EC] hover:text-[#b47b3b] transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <span>{area}</span>
                    <span className="text-xs text-slate-400">Haryana</span>
                  </button>
                ))}
                <div className="border-t border-[#f0e7dc] my-1 pt-1">
                  <button
                    onClick={() => {
                      onSelectCity('all');
                      onNavigateSection('properties');
                      setAreasDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-1.5 text-xs font-semibold text-[#b47b3b] hover:bg-[#FAF4EC] transition-colors cursor-pointer"
                  >
                    View All Locations →
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigateSection('about')}
              className="hover:text-[#b47b3b] transition-colors cursor-pointer"
            >
              About Us
            </button>
            <button
              onClick={() => onNavigateSection('services')}
              className="hover:text-[#b47b3b] transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={onOpenEmiCalculator}
              className="flex items-center gap-1 hover:text-[#b47b3b] transition-colors cursor-pointer text-[#1f4a38]"
            >
              <Calculator className="w-4 h-4 text-[#b47b3b]" />
              <span>EMI Tool</span>
            </button>
            <button
              onClick={() => onNavigateSection('contact')}
              className="hover:text-[#b47b3b] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3">
            {/* Phone Number Pill from Screenshot */}
            <a
              href="tel:+919876543210"
              className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#f6efe5] hover:bg-[#ece2d4] text-[#1a2d26] text-sm font-semibold transition-all border border-[#ebd8c0]"
            >
              <div className="w-6 h-6 rounded-full bg-[#b47b3b] text-white flex items-center justify-center">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>+91 98765 43210</span>
            </a>

            {/* Enquire Now CTA Button from Screenshot */}
            <button
              onClick={() => onOpenEnquiry()}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#b47b3b] to-[#c78b47] hover:from-[#9c682e] hover:to-[#b0783a] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              Enquire Now
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#eae1d5] px-4 pt-3 pb-6 shadow-xl space-y-3 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col space-y-2 text-base font-medium">
              <button
                onClick={() => {
                  onNavigateSection('home');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-2 px-3 rounded-md hover:bg-[#FAF4EC] text-[#b47b3b]"
              >
                Home
              </button>
              <button
                onClick={() => {
                  onNavigateSection('properties');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-2 px-3 rounded-md hover:bg-[#FAF4EC] text-slate-800"
              >
                All Properties
              </button>
              
              <div className="py-2 px-3 bg-[#FAF8F5] rounded-lg">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Focus Areas (Haryana & Delhi NCR)
                </span>
                <div className="grid grid-cols-2 gap-1.5 pt-1">
                  {areas.map(area => (
                    <button
                      key={area}
                      onClick={() => {
                        onSelectCity(area);
                        onNavigateSection('properties');
                        setMobileMenuOpen(false);
                      }}
                      className="text-left text-sm py-1 px-2 rounded hover:bg-white text-slate-700"
                    >
                      • {area}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  onNavigateSection('about');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-2 px-3 rounded-md hover:bg-[#FAF4EC] text-slate-800"
              >
                About Us
              </button>
              <button
                onClick={() => {
                  onNavigateSection('services');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-2 px-3 rounded-md hover:bg-[#FAF4EC] text-slate-800"
              >
                Services
              </button>
              <button
                onClick={() => {
                  onOpenEmiCalculator();
                  setMobileMenuOpen(false);
                }}
                className="text-left py-2 px-3 rounded-md hover:bg-[#FAF4EC] text-[#1f4a38] flex items-center gap-2"
              >
                <Calculator className="w-4 h-4 text-[#b47b3b]" />
                Home Loan EMI & Stamp Duty
              </button>
              <button
                onClick={() => {
                  onNavigateSection('contact');
                  setMobileMenuOpen(false);
                }}
                className="text-left py-2 px-3 rounded-md hover:bg-[#FAF4EC] text-slate-800"
              >
                Contact
              </button>
              <button
                onClick={() => {
                  onOpenPostProperty();
                  setMobileMenuOpen(false);
                }}
                className="text-left py-2 px-3 rounded-md bg-[#eef5f1] text-[#1b4332] font-semibold flex items-center gap-2"
              >
                <PlusCircle className="w-4 h-4" />
                Post Property For Free
              </button>
              <button
                onClick={() => {
                  onOpenAdminLeads();
                  setMobileMenuOpen(false);
                }}
                className="text-left py-2 px-3 rounded-md bg-[#fff7eb] text-[#b47b3b] font-semibold flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                View CRM Leads ({leadsCount})
              </button>
            </div>

            <div className="pt-2 border-t border-[#f0e7dc]">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#FAF4EC] text-[#1a2d26] font-semibold text-sm"
              >
                <Phone className="w-4 h-4 text-[#b47b3b]" />
                Call Directly: +91 98765 43210
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
