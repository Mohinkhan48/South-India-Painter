export interface PropertyType {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  bookingValue: string;
  route?: string;
}

export const propertyTypes: PropertyType[] = [
  {
    id: 'home-interiors',
    title: 'INTERIOR SPACES',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Bright residential living room interior with sofa, coffee table, and large windows',
    imagePosition: 'center center',
    bookingValue: 'Home Interiors',
    route: '/services/interior-spaces',
  },
  {
    id: 'villas-independent-homes',
    title: 'VILLAS/BUNGALOWS',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Bright daytime exterior of a premium villa with landscaping and modern architectural details',
    imagePosition: 'center center',
    bookingValue: 'Villas & Independent Homes',
    route: '/services/villas-bungalows',
  },
  {
    id: 'apartments-residential-buildings',
    title: 'HIGH-RISE APARTMENTS',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Bright apartment building exterior with balconies, windows, and blue sky',
    imagePosition: 'center center',
    bookingValue: 'Apartments & Residential Buildings',
    route: '/services/high-rise-apartments',
  },
  {
    id: 'commercial-spaces',
    title: 'COMMERCIAL SPACES',
    image:
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Bright modern office interior with desks, chairs, and large windows',
    imagePosition: 'center center',
    bookingValue: 'Commercial Spaces',
    route: '/services/commercial-spaces',
  },
  {
    id: 'residential-buildings',
    title: 'RESIDENTIAL BUILDINGS',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Modern residential building with clean lines and professional finish',
    imagePosition: 'center center',
    bookingValue: 'Residential Buildings',
    route: '/services/residential-buildings',
  },
  {
    id: 'industries',
    title: 'INDUSTRIES',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Luxury hotel exterior with pool area and tropical landscaping',
    imagePosition: 'center center',
    bookingValue: 'Industries',
    route: '/services/industries',
  },
];
