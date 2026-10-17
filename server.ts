import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 5000;

app.use(express.json());

// In-Memory Document Store (MERN Stack Data Layer)
interface PropertyDoc {
  id: string;
  title: string;
  category: 'Residential Plot' | 'Residential Plots' | 'Independent House' | 'Independent Houses' | 'Flats & Apartments' | 'Commercial Property' | 'Commercial Properties' | 'Farm House' | 'Farm Houses';
  transactionType: 'buy' | 'rent' | 'plots' | 'commercial';
  city: 'Rohtak' | 'Sonipat' | 'Panipat' | 'Jind' | 'Delhi NCR';
  locality: string;
  price: number; // in INR
  priceDisplay: string;
  pricePerUnit?: string;
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

let properties: PropertyDoc[] = [
  {
    id: 'prop-1',
    title: 'Residential Plot in Prime Sector',
    category: 'Residential Plot',
    transactionType: 'plots',
    city: 'Sonipat',
    locality: 'Sector 34, Near GT Road, Sonipat, Haryana',
    price: 7800000,
    priceDisplay: '₹ 78 Lakh',
    pricePerUnit: '₹ 65,000 / Sq. Yd.',
    areaSize: 120,
    areaUnit: 'Sq. Yds.',
    facing: 'East Facing',
    roadWidth: '12m Road',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    verified: true,
    reraApproved: true,
    description: 'Prime 120 Gaj residential plot located in the most sought-after approved sector in Sonipat. Directly connected to Delhi-Amritsar Highway, 15 minutes from Rajiv Gandhi Education City. Clear registry & mutation with bank loan facility from SBI and HDFC.',
    amenities: ['12m Wide Paver Road', 'Underground Electricity', '24x7 Water Supply', 'Gated Sector Boundary', 'Adjoining 2-Acre Park', 'Immediate Registry & Possession'],
    postedDate: '2 days ago',
    agentContact: {
      name: 'Jagannath Properties Helpline',
      phone: '+91 98765 43210',
      whatsapp: '919876543210'
    }
  },
  {
    id: 'prop-2',
    title: 'Modern Independent Luxury Kothi',
    category: 'Independent House',
    transactionType: 'buy',
    city: 'Rohtak',
    locality: 'Sector 14 / Model Town, Rohtak, Haryana',
    price: 12500000,
    priceDisplay: '₹ 1.25 Cr',
    pricePerUnit: '₹ 62,500 / Sq. Yd.',
    areaSize: 200,
    areaUnit: 'Sq. Yds.',
    bhk: 4,
    facing: 'North-East Facing',
    roadWidth: '18m Road',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    verified: true,
    reraApproved: true,
    description: 'Ultra-luxurious 4 BHK duplex independent bungalow constructed with premium Italian marble flooring, teakwood woodwork, modular German kitchen, and private terrace garden. Vastu compliant with ample car parking for 3 vehicles.',
    amenities: ['4 Spacious En-suite Bedrooms', 'Modular Italian Kitchen', 'Covered Car Parking', 'Terrace Pergola Lounge', 'Borewell & Municipal Water', 'CCTV Security Setup'],
    postedDate: 'Yesterday',
    agentContact: {
      name: 'Jagannath Properties Helpline',
      phone: '+91 98765 43210',
      whatsapp: '919876543210'
    }
  },
  {
    id: 'prop-3',
    title: '3 BHK High-Rise Luxury Apartment',
    category: 'Flats & Apartments',
    transactionType: 'buy',
    city: 'Panipat',
    locality: 'Sushant City, Sector 18, Panipat, Haryana',
    price: 7200000,
    priceDisplay: '₹ 72 Lakh',
    pricePerUnit: '₹ 4,800 / Sq. Ft.',
    areaSize: 1500,
    areaUnit: 'Sq. Ft.',
    bhk: 3,
    facing: 'Park Facing',
    roadWidth: '24m Main Sector Road',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    verified: true,
    reraApproved: true,
    description: 'Ready-to-move spacious 3 BHK luxury apartment with two wide balconies overlooking central green landscaping. Club house with swimming pool, gym, badminton court, and 100% power backup. Bank loan approved from all nationalized banks.',
    amenities: ['Clubhouse & Swimming Pool', '100% Power Backup', 'Dedicated Covered Parking', 'Multi-tier Gated Security', 'Gymnasium & Yoga Deck', 'Kids Play Area'],
    postedDate: '3 days ago',
    agentContact: {
      name: 'Jagannath Properties Helpline',
      phone: '+91 98765 43210',
      whatsapp: '919876543210'
    }
  },
  {
    id: 'prop-4',
    title: 'Prime Commercial Corner Showroom / Shop',
    category: 'Commercial Property',
    transactionType: 'commercial',
    city: 'Delhi NCR',
    locality: 'Main Commercial Market, Pitampura / Rohini, Delhi NCR',
    price: 45000,
    priceDisplay: '₹ 45,000 /month',
    pricePerUnit: '₹ 90 / Sq. Ft. /mo',
    areaSize: 500,
    areaUnit: 'Sq. Ft.',
    facing: 'Main Road Facing',
    roadWidth: '30m Main Road',
    images: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: true,
    verified: true,
    reraApproved: true,
    description: 'High-visibility corner commercial space ideal for retail brand outlet, dental clinic, corporate consultancy, or jewelry boutique. Massive glass frontage with heavy daily footfall, adjacent to metro station and prime parking zone.',
    amenities: ['Corner Frontage 25 ft', 'Adjacent to Metro Station', '3-Phase High Load Power', 'Dedicated Customer Parking', '24x7 Security & CCTV', 'Fire Safety Compliant'],
    postedDate: '4 days ago',
    agentContact: {
      name: 'Jagannath Properties Helpline',
      phone: '+91 98765 43210',
      whatsapp: '919876543210'
    }
  },
  {
    id: 'prop-5',
    title: 'Grand Gated Farmhouse with Swimming Pool',
    category: 'Farm House',
    transactionType: 'buy',
    city: 'Sonipat',
    locality: 'Murthal GT Road Belt, Sonipat, Haryana',
    price: 45000000,
    priceDisplay: '₹ 4.50 Cr',
    pricePerUnit: '₹ 2.25 Cr / Acre',
    areaSize: 2,
    areaUnit: 'Acres',
    bhk: 5,
    facing: 'North Facing',
    roadWidth: '15m Metalled Road',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    verified: true,
    reraApproved: true,
    description: 'Magnificent 2-acre estate featuring a luxury 5-bedroom country retreat, private lap swimming pool, organic fruit orchard (Kinnow & Mango trees), gazebo lounge, and caretaker quarters. Located just 35 minutes from North Delhi border.',
    amenities: ['Private Swimming Pool', 'Lush Organic Orchard', 'Separate Caretaker Quarter', 'Boundary Wall with Solar Fence', 'Dual Submersible Tubewells', 'Barbeque & Party Lawn'],
    postedDate: '5 days ago',
    agentContact: {
      name: 'Jagannath Properties Helpline',
      phone: '+91 98765 43210',
      whatsapp: '919876543210'
    }
  },
  {
    id: 'prop-6',
    title: 'HUDA Approved Residential Plot',
    category: 'Residential Plot',
    transactionType: 'plots',
    city: 'Jind',
    locality: 'HUDA Sector 9, Near Civil Lines, Jind, Haryana',
    price: 6200000,
    priceDisplay: '₹ 62 Lakh',
    pricePerUnit: '₹ 24,800 / Sq. Yd.',
    areaSize: 250,
    areaUnit: 'Sq. Yds.',
    facing: 'North Facing',
    roadWidth: '12m Wide Sector Road',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    verified: true,
    reraApproved: true,
    description: 'Prestigious 250 Sq. Yd. (10 Marla) residential plot in Jind most established HUDA sector. Fully developed neighbourhood with prominent schools, hospitals, and parks within walking radius.',
    amenities: ['Park Facing Plot', 'Wide 12m Bitumen Road', 'Sewerage & Storm Drainage', 'Street Lights & Green Belt', 'Clear Title from HUDA', 'Ready for Immediate Construction'],
    postedDate: '1 week ago',
    agentContact: {
      name: 'Jagannath Properties Helpline',
      phone: '+91 98765 43210',
      whatsapp: '919876543210'
    }
  },
  {
    id: 'prop-7',
    title: 'Super Luxury Builder Floor with Private Lift',
    category: 'Independent House',
    transactionType: 'buy',
    city: 'Delhi NCR',
    locality: 'Sector 9, Rohini, Delhi NCR',
    price: 28500000,
    priceDisplay: '₹ 2.85 Cr',
    pricePerUnit: '₹ 12,950 / Sq. Ft.',
    areaSize: 2200,
    areaUnit: 'Sq. Ft.',
    bhk: 4,
    facing: 'North-East',
    roadWidth: '18m Road',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    verified: true,
    reraApproved: true,
    description: 'Designer 4 BHK floor in upscale Rohini sector with Schindler private lift access, stilt car parking for 2 SUVs, imported Greek marble, Hafele fitted kitchen, and home automation system.',
    amenities: ['Private Stilt Parking', 'Automatic Passenger Elevator', 'Smart Home Automation', 'Imported Italian Marble', 'Servant Quarter with Bath', 'Gated Colony with Guard'],
    postedDate: 'Just now',
    agentContact: {
      name: 'Jagannath Properties Helpline',
      phone: '+91 98765 43210',
      whatsapp: '919876543210'
    }
  },
  {
    id: 'prop-8',
    title: 'Spacious 2 BHK Family Home for Rent',
    category: 'Flats & Apartments',
    transactionType: 'rent',
    city: 'Rohtak',
    locality: 'Omaxe City, Sector 27, Rohtak, Haryana',
    price: 18000,
    priceDisplay: '₹ 18,000 /month',
    pricePerUnit: '₹ 16 / Sq. Ft. /mo',
    areaSize: 1100,
    areaUnit: 'Sq. Ft.',
    bhk: 2,
    facing: 'East Facing',
    roadWidth: '15m Road',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502005229762-ee1b3394625b?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    verified: true,
    reraApproved: true,
    description: 'Semi-furnished 2 BHK flat with modular kitchen, wardrobes, LED lighting, and geysers in Omaxe City Rohtak. Located in a family-friendly township with market, school, and dispensary inside society.',
    amenities: ['Semi-furnished with Wardrobes', 'Covered Car Parking', '24x7 Security & Guard', 'Continuous Water Supply', 'Gated Township with Park', 'Club Access'],
    postedDate: '6 days ago',
    agentContact: {
      name: 'Jagannath Properties Helpline',
      phone: '+91 98765 43210',
      whatsapp: '919876543210'
    }
  }
];

let enquiries: Array<{
  id: string;
  propertyId?: string;
  propertyTitle?: string;
  fullName: string;
  phone: string;
  email?: string;
  preferredCity?: string;
  budgetRange?: string;
  message: string;
  type: string;
  status: string;
  createdAt: string;
}> = [
  {
    id: 'enq-101',
    fullName: 'Rajesh K. Sharma',
    phone: '+91 98120 44556',
    email: 'rajesh.sharma@example.com',
    preferredCity: 'Sonipat',
    budgetRange: '₹ 75L - ₹ 1 Cr',
    propertyTitle: 'Residential Plot in Prime Sector 34',
    message: 'Interested in buying a 120-150 Gaj plot in Sonipat for immediate home construction. Please arrange a call back.',
    type: 'property_inquiry',
    status: 'new',
    createdAt: '2026-10-16 11:30 AM'
  },
  {
    id: 'enq-102',
    fullName: 'Sunita Aggarwal',
    phone: '+91 94160 88990',
    preferredCity: 'Rohtak',
    budgetRange: '₹ 1 Cr - ₹ 1.5 Cr',
    propertyTitle: 'Modern Independent Luxury Kothi',
    message: 'Looking for ready to move 4 BHK kothi in Model Town or Sector 14 Rohtak with bank loan support.',
    type: 'schedule_visit',
    status: 'visit_scheduled',
    createdAt: '2026-10-15 03:45 PM'
  }
];

let siteVisits: Array<{
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
}> = [
  {
    id: 'visit-1',
    propertyId: 'prop-1',
    propertyTitle: 'Residential Plot in Prime Sector',
    visitorName: 'Vikas Hooda',
    phone: '+91 98960 12345',
    visitDate: '2026-10-19',
    visitTimeSlot: '11:00 AM - 01:00 PM',
    pickupRequired: true,
    pickupLocation: 'Sonipat Bus Stand',
    createdAt: '2026-10-16 10:15 AM'
  }
];

// Helper to format Indian Currency
function formatIndianCurrency(amount: number, isMonthly = false): string {
  if (isMonthly) {
    return `₹ ${amount.toLocaleString('en-IN')} /month`;
  }
  if (amount >= 10000000) {
    const cr = (amount / 10000000).toFixed(2).replace(/\.00$/, '');
    return `₹ ${cr} Cr`;
  }
  if (amount >= 100000) {
    const lakh = (amount / 100000).toFixed(2).replace(/\.00$/, '');
    return `₹ ${lakh} Lakh`;
  }
  return `₹ ${amount.toLocaleString('en-IN')}`;
}

// REST API ROUTES
app.get('/api/properties', (req, res) => {
  let filtered = [...properties];
  const { type, location, transaction, minPrice, maxPrice, search } = req.query;

  if (transaction && transaction !== 'all') {
    filtered = filtered.filter(p => p.transactionType === transaction);
  }

  if (type && type !== 'all' && type !== 'All Types') {
    filtered = filtered.filter(p => p.category === type);
  }

  if (location && location !== 'all' && location !== 'Search Location or Area') {
    filtered = filtered.filter(p => 
      p.city.toLowerCase() === String(location).toLowerCase() ||
      p.locality.toLowerCase().includes(String(location).toLowerCase())
    );
  }

  if (minPrice) {
    filtered = filtered.filter(p => p.price >= Number(minPrice));
  }

  if (maxPrice) {
    filtered = filtered.filter(p => p.price <= Number(maxPrice));
  }

  if (search) {
    const q = String(search).toLowerCase();
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(q) ||
      p.locality.toLowerCase().includes(q) ||
      p.city.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  res.json({
    success: true,
    count: filtered.length,
    data: filtered
  });
});

app.get('/api/properties/:id', (req, res) => {
  const prop = properties.find(p => p.id === req.params.id);
  if (!prop) {
    return res.status(404).json({ success: false, message: 'Property not found' });
  }
  res.json({ success: true, data: prop });
});

app.post('/api/properties', (req, res) => {
  const {
    title,
    category,
    transactionType,
    city,
    locality,
    price,
    areaSize,
    areaUnit,
    bhk,
    facing,
    roadWidth,
    description,
    amenities,
    sellerName,
    sellerPhone
  } = req.body;

  if (!title || !price || !city || !locality) {
    return res.status(400).json({ success: false, message: 'Please provide all required fields' });
  }

  const numPrice = Number(price);
  const isRent = transactionType === 'rent';
  const newProp: PropertyDoc = {
    id: `prop-${Date.now()}`,
    title,
    category: category || 'Residential Plot',
    transactionType: transactionType || 'buy',
    city: city || 'Sonipat',
    locality,
    price: numPrice,
    priceDisplay: formatIndianCurrency(numPrice, isRent),
    pricePerUnit: `₹ ${(numPrice / (Number(areaSize) || 1)).toFixed(0)} / ${areaUnit || 'Sq. Yds.'}`,
    areaSize: Number(areaSize) || 100,
    areaUnit: areaUnit || 'Sq. Yds.',
    bhk: bhk ? Number(bhk) : undefined,
    facing: facing || 'North-East',
    roadWidth: roadWidth || '12m Road',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
    ],
    featured: false,
    verified: true,
    reraApproved: true,
    description: description || 'Prime property listed with verified paperwork and clear title with Jagannath Properties.',
    amenities: amenities && amenities.length > 0 ? amenities : ['Clear Title', 'Immediate Registry', 'Water & Electricity Connection'],
    postedDate: 'Just now',
    agentContact: {
      name: sellerName || 'Jagannath Properties Helpdesk',
      phone: sellerPhone || '+91 98765 43210',
      whatsapp: '919876543210'
    }
  };

  properties.unshift(newProp);

  res.status(201).json({
    success: true,
    message: 'Property listed successfully in Jagannath Properties database',
    data: newProp
  });
});

app.get('/api/enquiries', (req, res) => {
  res.json({
    success: true,
    count: enquiries.length,
    data: enquiries
  });
});

app.post('/api/enquiries', (req, res) => {
  const { fullName, phone, email, preferredCity, budgetRange, message, propertyId, propertyTitle, type } = req.body;

  if (!fullName || !phone) {
    return res.status(400).json({ success: false, message: 'Name and Phone number are required' });
  }

  const newEnquiry = {
    id: `enq-${Date.now()}`,
    propertyId,
    propertyTitle,
    fullName,
    phone,
    email,
    preferredCity,
    budgetRange,
    message: message || 'Interested in property consultation and site visit.',
    type: type || 'general',
    status: 'new',
    createdAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
  };

  enquiries.unshift(newEnquiry);

  res.status(201).json({
    success: true,
    message: 'Thank you! Our property advisor will connect with you within 15 minutes.',
    data: newEnquiry
  });
});

app.post('/api/schedule-visit', (req, res) => {
  const { propertyId, propertyTitle, visitorName, phone, visitDate, visitTimeSlot, pickupRequired, pickupLocation } = req.body;

  if (!visitorName || !phone || !visitDate) {
    return res.status(400).json({ success: false, message: 'Name, Phone and Visit Date are required' });
  }

  const visit = {
    id: `visit-${Date.now()}`,
    propertyId: propertyId || 'general',
    propertyTitle: propertyTitle || 'Site Inspection',
    visitorName,
    phone,
    visitDate,
    visitTimeSlot: visitTimeSlot || '10:00 AM - 12:00 PM',
    pickupRequired: Boolean(pickupRequired),
    pickupLocation: pickupLocation || '',
    createdAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
  };

  siteVisits.unshift(visit);

  // Also record in enquiries
  enquiries.unshift({
    id: `enq-visit-${Date.now()}`,
    propertyId: propertyId,
    propertyTitle: propertyTitle,
    fullName: visitorName,
    phone: phone,
    preferredCity: 'Site Visit',
    budgetRange: 'Site Visit Scheduled',
    message: `Scheduled Site Inspection on ${visitDate} (${visit.visitTimeSlot})${pickupRequired ? ` with pickup at: ${pickupLocation}` : ''}`,
    type: 'schedule_visit',
    status: 'visit_scheduled',
    createdAt: visit.createdAt
  });

  res.status(201).json({
    success: true,
    message: 'Site visit confirmed! Our field executive will contact you for directions and pickup coordination.',
    data: visit
  });
});

// Market Rates Endpoint
app.get('/api/market-rates', (req, res) => {
  const marketData = [
    {
      city: 'Rohtak',
      avgPlotRatePerSqYd: '₹ 28,000 - ₹ 75,000 / Sq. Yd.',
      avgApartmentRatePerSqFt: '₹ 3,800 - ₹ 5,500 / Sq. Ft.',
      commercialRentalYield: '6.5% - 8.2%',
      hotspots: ['Sector 14', 'Model Town', 'Omaxe City', 'Delhi Road', 'D-Park'],
      stampDutyMale: '5% (Haryana)',
      stampDutyFemale: '3% (Haryana)'
    },
    {
      city: 'Sonipat',
      avgPlotRatePerSqYd: '₹ 35,000 - ₹ 85,000 / Sq. Yd.',
      avgApartmentRatePerSqFt: '₹ 4,200 - ₹ 6,800 / Sq. Ft.',
      commercialRentalYield: '7.0% - 9.0%',
      hotspots: ['Sector 34/35', 'Rajiv Gandhi Education City', 'TDI City', 'Kundli KMP', 'Murthal Belt'],
      stampDutyMale: '5% (Haryana)',
      stampDutyFemale: '3% (Haryana)'
    },
    {
      city: 'Panipat',
      avgPlotRatePerSqYd: '₹ 30,000 - ₹ 70,000 / Sq. Yd.',
      avgApartmentRatePerSqFt: '₹ 3,500 - ₹ 5,200 / Sq. Ft.',
      commercialRentalYield: '7.5% - 9.5%',
      hotspots: ['Sushant City', 'Sector 18', 'Model Town', 'GT Road Hub', 'Eldeco Estate'],
      stampDutyMale: '5% (Haryana)',
      stampDutyFemale: '3% (Haryana)'
    },
    {
      city: 'Jind',
      avgPlotRatePerSqYd: '₹ 18,000 - ₹ 42,000 / Sq. Yd.',
      avgApartmentRatePerSqFt: '₹ 2,800 - ₹ 4,000 / Sq. Ft.',
      commercialRentalYield: '6.0% - 7.5%',
      hotspots: ['HUDA Sector 9', 'Civil Lines', 'Safidon Road', 'Patiala Chowk'],
      stampDutyMale: '5% (Haryana)',
      stampDutyFemale: '3% (Haryana)'
    },
    {
      city: 'Delhi NCR',
      avgPlotRatePerSqYd: '₹ 80,000 - ₹ 2,50,000 / Sq. Yd.',
      avgApartmentRatePerSqFt: '₹ 6,500 - ₹ 16,000 / Sq. Ft.',
      commercialRentalYield: '8.0% - 11.0%',
      hotspots: ['Rohini Sectors', 'Pitampura', 'Narela Industrial/Residential', 'Dwarka Expressway'],
      stampDutyMale: '6% (Delhi)',
      stampDutyFemale: '4% (Delhi)'
    }
  ];

  res.json({ success: true, data: marketData });
});

// EMI Calculator Endpoint
app.post('/api/calculate-emi', (req, res) => {
  const { propertyPrice, downPaymentPercent = 20, interestRate = 8.5, tenureYears = 20, state = 'Haryana', gender = 'male' } = req.body;

  const price = Number(propertyPrice) || 5000000;
  const downPayment = (price * downPaymentPercent) / 100;
  const loanPrincipal = price - downPayment;
  const monthlyRate = (interestRate / 12) / 100;
  const months = tenureYears * 12;

  const emi = (loanPrincipal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  const totalAmountPayable = emi * months;
  const totalInterestPayable = totalAmountPayable - loanPrincipal;

  // Stamp duty calculation
  let stampDutyPercent = 5;
  if (state === 'Haryana') {
    stampDutyPercent = gender === 'female' ? 3 : 5;
  } else if (state === 'Delhi') {
    stampDutyPercent = gender === 'female' ? 4 : 6;
  }
  const estimatedStampDuty = (price * stampDutyPercent) / 100;
  const estimatedRegistrationFee = (price * 1) / 100;

  res.json({
    success: true,
    data: {
      price,
      priceFormatted: formatIndianCurrency(price),
      downPayment,
      downPaymentFormatted: formatIndianCurrency(downPayment),
      loanPrincipal,
      loanPrincipalFormatted: formatIndianCurrency(loanPrincipal),
      monthlyEmi: Math.round(emi),
      monthlyEmiFormatted: `₹ ${Math.round(emi).toLocaleString('en-IN')}`,
      totalInterestPayable: Math.round(totalInterestPayable),
      totalInterestFormatted: formatIndianCurrency(Math.round(totalInterestPayable)),
      totalAmountPayable: Math.round(totalAmountPayable),
      totalPayableFormatted: formatIndianCurrency(Math.round(totalAmountPayable)),
      estimatedStampDuty,
      stampDutyFormatted: formatIndianCurrency(estimatedStampDuty),
      estimatedRegistrationFee,
      registrationFeeFormatted: formatIndianCurrency(estimatedRegistrationFee),
      stampDutyPercent
    }
  });
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Jagannath Properties MERN Server running on http://localhost:${PORT}`);
  });
}

startServer();
