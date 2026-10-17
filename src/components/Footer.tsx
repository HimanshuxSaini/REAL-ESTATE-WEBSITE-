import React from 'react';
import { Building2, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { CityLocation, PropertyCategory } from '../types';
import { CityCountrysideSkyline } from './CityCountrysideSkyline';

interface FooterProps {
  onSelectCity: (city: CityLocation) => void;
  onSelectCategory: (category: PropertyCategory) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCity,
  onSelectCategory,
  onNavigateSection
}) => {
  const quickLinks = [
    { label: 'Home', section: 'home' },
    { label: 'Properties', section: 'properties' },
    { label: 'About Us', section: 'about' },
    { label: 'Services', section: 'services' },
    { label: 'Contact', section: 'contact' }
  ];

  const propertyTypes: PropertyCategory[] = [
    'Residential Plots',
    'Independent Houses',
    'Flats & Apartments',
    'Commercial Properties',
    'Farm Houses'
  ];

  const locations: CityLocation[] = [
    'Rohtak',
    'Sonipat',
    'Panipat',
    'Jind',
    'Delhi NCR'
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: <Facebook className="w-4 h-4 text-[#1877F2]" />
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: <Twitter className="w-4 h-4 text-[#1DA1F2]" />
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: <Instagram className="w-4 h-4 text-[#E1306C]" />
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: <Linkedin className="w-4 h-4 text-[#0A66C2]" />
    }
  ];

  return (
    <footer id="contact" className="bg-[#FAF8F5] border-t border-[#e8dfd3] pt-16 pb-6 text-slate-700 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-8">
          
          {/* Column 1: Brand Info (span 4) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#244638] to-[#122820] flex items-center justify-center p-1.5 text-[#e3b879]">
                <Building2 className="w-6 h-6 text-[#deb06f]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-[#162722] font-brand leading-none">
                  JAGANNATH
                </span>
                <span className="text-xs font-semibold tracking-wider text-[#b47b3b] leading-tight">
                  PROPERTIES
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Jagannath Properties is your trusted real estate partner for residential, commercial and investment properties in Rohtak, Sonipat, Panipat, Jind and Delhi NCR.
            </p>

            {/* Social Icons - Circular buttons with authentic Facebook, Twitter, Instagram & LinkedIn icons */}
            <div className="flex items-center gap-2.5 pt-2">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white border border-[#dfd2be] hover:border-[#b47b3b] flex items-center justify-center shadow-2xs hover:shadow-md hover:scale-105 transition-all group cursor-pointer"
                  title={item.name}
                  aria-label={item.name}
                >
                  <span className="transition-transform group-hover:scale-110">
                    {item.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (span 2) */}
          <div className="lg:col-span-2 text-left space-y-3">
            <h4 className="font-bold text-[#142620] text-sm tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => onNavigateSection(item.section)}
                    className="text-slate-600 hover:text-[#b47b3b] transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Property Types (span 2) */}
          <div className="lg:col-span-2 text-left space-y-3">
            <h4 className="font-bold text-[#142620] text-sm tracking-wide">
              Property Types
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {propertyTypes.map((type) => (
                <li key={type}>
                  <button
                    onClick={() => {
                      onSelectCategory(type);
                      onNavigateSection('properties');
                    }}
                    className="text-slate-600 hover:text-[#b47b3b] transition-colors cursor-pointer text-left"
                  >
                    {type}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Our Locations (span 2) */}
          <div className="lg:col-span-2 text-left space-y-3">
            <h4 className="font-bold text-[#142620] text-sm tracking-wide">
              Our Locations
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {locations.map((loc) => (
                <li key={loc}>
                  <button
                    onClick={() => {
                      onSelectCity(loc);
                      onNavigateSection('properties');
                    }}
                    className="text-slate-600 hover:text-[#b47b3b] transition-colors cursor-pointer"
                  >
                    {loc}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Us (span 2) */}
          <div className="lg:col-span-2 text-left space-y-3">
            <h4 className="font-bold text-[#142620] text-sm tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#b47b3b] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#b47b3b] font-medium">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#b47b3b] shrink-0" />
                <a href="mailto:info@jagannathproperties.in" className="hover:text-[#b47b3b] truncate">
                  info@jagannathproperties.in
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#b47b3b] shrink-0 mt-0.5" />
                <span>Sector 14 / GT Road, Sonipat, Haryana</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#b47b3b] shrink-0" />
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Minimal White City-to-Countryside Skyline - Centered with reduced width */}
        <div className="pt-2 pb-2 flex justify-center">
          <CityCountrysideSkyline className="w-full max-w-lg sm:max-w-xl md:max-w-2xl text-[#b47b3b]/35 hover:text-[#b47b3b]/50 transition-colors" />
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 border-t border-[#eee2d3]/80">
          <p>© 2024 Jagannath Properties. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-[#b47b3b] transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-[#b47b3b] transition-colors">
              Terms & Conditions
            </a>
            <span>|</span>
            <a href="#sitemap" onClick={(e) => e.preventDefault()} className="hover:text-[#b47b3b] transition-colors">
              Sitemap
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
