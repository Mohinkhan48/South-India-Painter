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
    image: '/images/projects/interior spaces.png',
    imageAlt: 'Interior spaces painting by South India Painters',
    imagePosition: 'center center',
    bookingValue: 'Home Interiors',
    route: '/services/interior-spaces',
  },
  {
    id: 'villas-independent-homes',
    title: 'VILLAS/BUNGALOWS',
    image: '/images/projects/banglows.png',
    imageAlt: 'Villas and bungalows painting by South India Painters',
    imagePosition: 'center center',
    bookingValue: 'Villas & Independent Homes',
    route: '/services/villas-bungalows',
  },
  {
    id: 'apartments-residential-buildings',
    title: 'HIGH-RISE APARTMENTS',
    image: '/images/projects/appartments.png',
    imageAlt: 'High-rise apartments painting by South India Painters',
    imagePosition: 'center center',
    bookingValue: 'Apartments & Residential Buildings',
    route: '/services/high-rise-apartments',
  },
  {
    id: 'commercial-spaces',
    title: 'COMMERCIAL SPACES',
    image: '/images/projects/commercial spaces.png',
    imageAlt: 'Commercial spaces painting by South India Painters',
    imagePosition: 'center center',
    bookingValue: 'Commercial Spaces',
    route: '/services/commercial-spaces',
  },
  {
    id: 'residential-buildings',
    title: 'RESIDENTIAL BUILDINGS',
    image: '/images/projects/residential buildings.png',
    imageAlt: 'Residential buildings painting by South India Painters',
    imagePosition: 'center center',
    bookingValue: 'Residential Buildings',
    route: '/services/residential-buildings',
  },
  {
    id: 'industries',
    title: 'INDUSTRIES',
    image: '/images/projects/industries.png',
    imageAlt: 'Industries painting by South India Painters',
    imagePosition: 'center center',
    bookingValue: 'Industries',
    route: '/services/industries',
  },
];
