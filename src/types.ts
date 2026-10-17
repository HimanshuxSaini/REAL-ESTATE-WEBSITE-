export type TransactionType = 'buy' | 'rent' | 'plots' | 'commercial';

export type PropertyCategory = 
  | 'Residential Plot'
  | 'Residential Plots'
  | 'Independent House'
  | 'Independent Houses'
  | 'Flats & Apartments'
  | 'Commercial Property'
  | 'Commercial Properties'
  | 'Farm House'
  | 'Farm Houses';

export type CityLocation = 'Rohtak' | 'Sonipat' | 'Panipat' | 'Jind' | 'Delhi NCR';

export interface Property {
  id: string;
  title: string;
  category: PropertyCategory;
  transactionType: TransactionType;
  city: CityLocation;
  locality: string;
  price: number; // in INR
  priceDisplay: string; // e.g. "₹ 78 Lakh", "₹ 1.25 Cr", "₹ 45,000 /month"
  pricePerUnit?: string; // e.g. "₹ 65,000 / Sq. Yd." or "₹ 4,800 / Sq. Ft."
  areaSize: number;
  areaUnit: 'Sq. Yds.' | 'Sq. Ft.' | 'Acres';
  bhk?: number;
  facing?: string;
  roadWidth?: string;
  images: string[];
  featured: boolean;
  verified: boolean;
  reraApproved: boolean;
  description: string;
  amenities: string[];
  postedDate: string;
  agentContact: {
    name: string;
    phone: string;
    whatsapp: string;
  };
}

export interface EnquirySubmission {
  id: string;
  propertyId?: string;
  propertyTitle?: string;
  fullName: string;
  phone: string;
  email?: string;
  preferredCity?: string;
  budgetRange?: string;
  message: string;
  type: 'general' | 'property_inquiry' | 'schedule_visit' | 'owner_listing';
  status: 'new' | 'contacted' | 'visit_scheduled' | 'closed';
  createdAt: string;
}

export interface SiteVisitRequest {
  id: string;
  propertyId: string;
  propertyTitle: string;
  visitorName: string;
  phone: string;
  visitDate: string;
  visitTimeSlot: string;
  pickupRequired: boolean;
  pickupLocation?: string;
  createdAt: string;
}

export interface MarketRateInfo {
  city: CityLocation;
  avgPlotRatePerSqYd: string;
  avgApartmentRatePerSqFt: string;
  commercialRentalYield: string;
  hotspots: string[];
  stampDutyMale: string;
  stampDutyFemale: string;
}
