/**
 * business.ts
 *
 * Central source of truth for all company-specific information.
 * Import this config wherever business details are needed instead of
 * hard-coding them across components.
 *
 * Replace placeholder values with real client data before launch.
 */

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  youtube?: string;
  linkedin?: string;
  twitter?: string;
}

export interface WorkingHours {
  weekdays: string;
  saturday: string;
  sunday: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface BusinessConfig {
  companyName: string;
  tagline: string;
  description: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  serviceAreas: string[];
  workingHours: WorkingHours;
  socialLinks: SocialLinks;
  googleMapsUrl: string;
  foundedYear: number;
  heroEyebrow: string;
  heroStats: HeroStat[];
}

const business: BusinessConfig = {
  companyName: 'SOUTH INDIA PAINTER',
  tagline: 'Your Tagline Goes Here',
  description:
    'A professional painting and home improvement company serving South India. ' +
    'Replace this description with real company information before launch.',

  // Contact — replace with real details before launch
  phone: '+91 00000 00000',
  whatsapp: '+910000000000',
  email: 'hello@example.com',

  // Address — replace with real address before launch
  address: '123 Placeholder Street, Area Name',
  city: 'Chennai',
  state: 'Tamil Nadu',
  pincode: '600000',

  // Areas served — update with real service locations
  serviceAreas: [
    'Chennai',
    'Bengaluru',
    'Hyderabad',
    'Coimbatore',
    'Madurai',
    'Mysuru',
  ],

  workingHours: {
    weekdays: '8:00 AM – 7:00 PM',
    saturday: '9:00 AM – 5:00 PM',
    sunday: 'Closed',
  },

  // Social links — replace with real URLs before launch
  socialLinks: {
    facebook: 'https://facebook.com/placeholder',
    instagram: 'https://instagram.com/placeholder',
    youtube: 'https://youtube.com/placeholder',
    linkedin: 'https://linkedin.com/company/placeholder',
  },

  // Google Maps embed URL — replace with real URL before launch
  googleMapsUrl: 'https://maps.google.com/?q=Chennai,Tamil+Nadu',

  foundedYear: 2010,
  heroEyebrow: 'PROFESSIONAL PAINTING & HOME IMPROVEMENT',
  heroStats: [
    { value: '4.9/5', label: 'Average Rating' },
    { value: '10+ Years', label: 'Of Excellence' },
  ],
};

export default business;
