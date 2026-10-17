import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SearchFilterBar } from './components/SearchFilterBar';
import { FocusAreasSection } from './components/FocusAreasSection';
import { CategorySection } from './components/CategorySection';
import { FeaturedPropertiesSection } from './components/FeaturedPropertiesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { StatsBar } from './components/StatsBar';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CTABanner } from './components/CTABanner';
import { ServicesSection } from './components/ServicesSection';
import { MarketRatesSection } from './components/MarketRatesSection';
import { Footer } from './components/Footer';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { EmiCalculatorModal } from './components/EmiCalculatorModal';
import { ScheduleVisitModal } from './components/ScheduleVisitModal';
import { PostPropertyModal } from './components/PostPropertyModal';
import { EnquiryModal } from './components/EnquiryModal';
import { AdminLeadsDrawer } from './components/AdminLeadsDrawer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { Property, TransactionType, PropertyCategory, CityLocation, EnquirySubmission } from './types';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  // Main data states
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [leads, setLeads] = useState<EnquirySubmission[]>([]);

  // Filter states
  const [activeTransaction, setActiveTransaction] = useState<TransactionType>('buy');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [selectedBudget, setSelectedBudget] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals & Drawers
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [visitProperty, setVisitProperty] = useState<Property | null>(null);
  const [isScheduleVisitOpen, setIsScheduleVisitOpen] = useState(false);
  const [isEmiModalOpen, setIsEmiModalOpen] = useState(false);
  const [emiCalculatorPrice, setEmiCalculatorPrice] = useState<number>(7500000);
  const [isPostPropertyOpen, setIsPostPropertyOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquirySubject, setEnquirySubject] = useState<string | undefined>(undefined);
  const [isAdminLeadsOpen, setIsAdminLeadsOpen] = useState(false);

  // Toast message
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  // Fetch properties from Express backend
  const fetchProperties = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (activeTransaction) params.append('transaction', activeTransaction);
      if (selectedType && selectedType !== 'all') params.append('type', selectedType);
      if (selectedLocation && selectedLocation !== 'all') params.append('location', selectedLocation);
      if (searchQuery.trim()) params.append('search', searchQuery.trim());

      // Budget filter parser
      if (selectedBudget === 'under-30l') {
        params.append('maxPrice', '3000000');
      } else if (selectedBudget === '30l-60l') {
        params.append('minPrice', '3000000');
        params.append('maxPrice', '6000000');
      } else if (selectedBudget === '60l-1cr') {
        params.append('minPrice', '6000000');
        params.append('maxPrice', '10000000');
      } else if (selectedBudget === '1cr-2.5cr') {
        params.append('minPrice', '10000000');
        params.append('maxPrice', '25000000');
      } else if (selectedBudget === 'above-2.5cr') {
        params.append('minPrice', '25000000');
      } else if (selectedBudget === 'rent-under-20k') {
        params.append('maxPrice', '20000');
      } else if (selectedBudget === 'rent-20k-50k') {
        params.append('minPrice', '20000');
        params.append('maxPrice', '50000');
      }

      const res = await fetch(`/api/properties?${params.toString()}`);
      const data = await res.json();
      if (data.success) {
        setProperties(data.data);
      }
    } catch (err) {
      console.error('Error loading properties:', err);
    } finally {
      setLoading(false);
    }
  }, [activeTransaction, selectedType, selectedLocation, selectedBudget, searchQuery]);

  // Fetch leads for counter & admin drawer
  const fetchLeads = async () => {
    try {
      const res = await fetch('/api/enquiries');
      const data = await res.json();
      if (data.success) {
        setLeads(data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

  useEffect(() => {
    fetchLeads();
  }, []);

  // Handlers
  const handleResetFilters = () => {
    setActiveTransaction('buy');
    setSelectedType('all');
    setSelectedLocation('all');
    setSelectedBudget('all');
    setSearchQuery('');
  };

  const handleSelectCity = (city: CityLocation | 'all') => {
    setSelectedLocation(city);
    const element = document.getElementById('properties');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (category: PropertyCategory | string) => {
    setSelectedType(category);
    const element = document.getElementById('properties');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenScheduleVisit = (prop: Property) => {
    setSelectedProperty(null);
    setVisitProperty(prop);
    setIsScheduleVisitOpen(true);
  };

  const handleOpenEnquiry = (title?: string) => {
    setEnquirySubject(title);
    setIsEnquiryOpen(true);
  };

  const handleOpenEmiWithPrice = (price: number) => {
    setEmiCalculatorPrice(price);
    setIsEmiModalOpen(true);
  };

  const handlePropertyAdded = (newProp: Property) => {
    setProperties(prev => [newProp, ...prev]);
    showToast(`Property "${newProp.title}" listed successfully!`);
    handleNavigateSection('properties');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-800 flex flex-col font-sans selection:bg-[#c58b44]/20 selection:text-[#8a5b21]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-4 sm:right-8 z-50 bg-[#122b22] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-[#2b5643] flex items-center gap-3 animate-in fade-in slide-in-from-top-4">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Top Header */}
      <Header
        onOpenEnquiry={handleOpenEnquiry}
        onOpenPostProperty={() => setIsPostPropertyOpen(true)}
        onOpenEmiCalculator={() => setIsEmiModalOpen(true)}
        onOpenAdminLeads={() => setIsAdminLeadsOpen(true)}
        onSelectCity={handleSelectCity}
        onNavigateSection={handleNavigateSection}
        selectedCity={selectedLocation as any}
        leadsCount={leads.length}
      />

      {/* Hero Section */}
      <HeroSection
        onExploreClick={() => handleNavigateSection('properties')}
        onContactClick={() => handleNavigateSection('contact')}
      />

      {/* Search and Filters Bar */}
      <SearchFilterBar
        activeTransaction={activeTransaction}
        onTransactionChange={(tab) => setActiveTransaction(tab)}
        selectedType={selectedType}
        onTypeChange={(t) => setSelectedType(t)}
        selectedLocation={selectedLocation}
        onLocationChange={(loc) => setSelectedLocation(loc)}
        selectedBudget={selectedBudget}
        onBudgetChange={(b) => setSelectedBudget(b)}
        searchQuery={searchQuery}
        onSearchQueryChange={(q) => setSearchQuery(q)}
        onSearchExecute={fetchProperties}
        onResetFilters={handleResetFilters}
      />

      {/* Focus Areas Section - Rohtak, Sonipat, Panipat, Jind, Delhi NCR */}
      <FocusAreasSection
        onSelectCity={(city) => handleSelectCity(city)}
        selectedCity={selectedLocation as any}
      />

      {/* Category Section - Plots, Houses, Apartments, Commercial, Farm Houses */}
      <CategorySection
        onSelectCategory={handleSelectCategory}
        selectedCategory={selectedType}
      />

      {/* Featured Properties Section */}
      <FeaturedPropertiesSection
        properties={properties}
        onSelectProperty={(prop) => setSelectedProperty(prop)}
        onViewAllClick={handleResetFilters}
        onFilterCategory={(cat) => setSelectedType(cat)}
        selectedCategory={selectedType}
      />

      {/* Why Choose Jagannath Properties Section */}
      <WhyChooseUsSection
        onLearnMoreClick={() => handleNavigateSection('services')}
      />

      {/* Stats Bar */}
      <StatsBar />

      {/* Comprehensive Services Section */}
      <ServicesSection
        onEnquireService={(srv) => handleOpenEnquiry(`Service: ${srv}`)}
      />

      {/* Market Rates & Stamp Duty Guide */}
      <MarketRatesSection
        onSelectCityFilter={(city) => handleSelectCity(city)}
      />

      {/* Client Testimonials */}
      <TestimonialsSection />

      {/* Call to Action Banner */}
      <CTABanner
        onContactClick={() => handleOpenEnquiry('General Consultation')}
      />

      {/* Footer */}
      <Footer
        onSelectCity={(city) => handleSelectCity(city)}
        onSelectCategory={handleSelectCategory}
        onNavigateSection={handleNavigateSection}
      />

      {/* Floating WhatsApp Button */}
      <WhatsAppFloatingButton
        onQuickCall={() => {
          window.location.href = 'tel:+919876543210';
        }}
      />

      {/* Property Details Modal */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onScheduleVisit={(prop) => handleOpenScheduleVisit(prop)}
        onEnquire={(title) => handleOpenEnquiry(title)}
        onOpenEmiCalculator={(p) => handleOpenEmiWithPrice(p)}
      />

      {/* Schedule Site Visit Modal */}
      <ScheduleVisitModal
        property={visitProperty}
        isOpen={isScheduleVisitOpen}
        onClose={() => {
          setIsScheduleVisitOpen(false);
          setVisitProperty(null);
        }}
        onSubmitSuccess={(msg) => {
          showToast(msg);
          fetchLeads();
        }}
      />

      {/* Indian Home Loan EMI & Stamp Duty Modal */}
      <EmiCalculatorModal
        initialPrice={emiCalculatorPrice}
        isOpen={isEmiModalOpen}
        onClose={() => setIsEmiModalOpen(false)}
        onApplyLoanHelp={(amt) => {
          handleOpenEnquiry(`Home Loan Approval Assistance for ${amt}`);
        }}
      />

      {/* Post Property Modal (Free for Indian Sellers / Dealers) */}
      <PostPropertyModal
        isOpen={isPostPropertyOpen}
        onClose={() => setIsPostPropertyOpen(false)}
        onPropertyAdded={handlePropertyAdded}
      />

      {/* Quick Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => {
          setIsEnquiryOpen(false);
          setEnquirySubject(undefined);
        }}
        propertyTitle={enquirySubject}
        onSuccess={(msg) => {
          showToast(msg);
          fetchLeads();
        }}
      />

      {/* Admin Leads CRM Drawer */}
      <AdminLeadsDrawer
        isOpen={isAdminLeadsOpen}
        onClose={() => setIsAdminLeadsOpen(false)}
        leads={leads}
        onRefresh={fetchLeads}
      />

    </div>
  );
}
