export interface Project {
  id: string;
  slug: string;
  title: string;
  city: string;
  category: string;
  serviceType: string;
  shortDescription: string;
  duration: string;
  coverImage: string;
  gallery: string[];
  beforeImage: string;
  afterImage: string;
  overview: string;
  servicesPerformed: string[];
  areaCovered: string;
  paintBrandUsed: string;
  testimonial?: {
    name: string;
    text: string;
    rating: number;
  };
}

export const projectsData: Project[] = [
  {
    id: '1',
    slug: 'luxury-villa-interior-bangalore',
    title: 'Luxury Villa Interior Painting',
    city: 'Bangalore',
    category: 'Interior Painting',
    serviceType: 'Residential',
    shortDescription: 'Complete interior makeover using premium Royale finishes.',
    duration: '2 Weeks',
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80',
    ],
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    overview: 'This luxurious 4BHK villa in Bangalore required a complete interior facelift. The client wanted a modern, sophisticated look that also felt warm and inviting. We consulted extensively on the color palette, eventually choosing subtle pastels paired with rich, deep accent walls in the living areas.',
    servicesPerformed: ['Wall Sanding & Putty', 'Primer Application', 'Premium Emulsion Painting', 'Wood Polishing'],
    areaCovered: '3,500 Sq. Ft.',
    paintBrandUsed: 'Asian Paints Royale',
    testimonial: {
      name: 'Ravi Kumar',
      text: 'The team was incredibly professional. The finish is flawless and they completed the project right on time.',
      rating: 5,
    }
  },
  {
    id: '2',
    slug: 'modern-apartment-texture-mysore',
    title: 'Modern Apartment Texture Walls',
    city: 'Mysore',
    category: 'Texture Painting',
    serviceType: 'Apartments',
    shortDescription: 'Custom metallic texture designs for living room accent walls.',
    duration: '4 Days',
    coverImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1562259942-1ca3a7631ce5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    ],
    beforeImage: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    overview: 'To break the monotony of plain walls, the client requested a bespoke texture for their living room and master bedroom. We used high-quality metallic and rustic finishes to create a focal point that changes dynamically with lighting.',
    servicesPerformed: ['Base Preparation', 'Texture Design', 'Metallic Top Coat'],
    areaCovered: '800 Sq. Ft.',
    paintBrandUsed: 'Berger Silk Illusions',
  },
  {
    id: '3',
    slug: 'commercial-office-exterior-chennai',
    title: 'Tech Park Exterior Coating',
    city: 'Chennai',
    category: 'Exterior Painting',
    serviceType: 'Commercial',
    shortDescription: 'Weather-proof exterior painting for a multi-story office building.',
    duration: '1 Month',
    coverImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=800&q=80',
    ],
    beforeImage: 'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    overview: 'A massive exterior painting project for a tech park in Chennai. The primary challenge was the harsh coastal weather. We used advanced waterproofing base coats followed by dust and water-resistant exterior emulsions to ensure longevity.',
    servicesPerformed: ['Crack Filling', 'Waterproofing Coat', 'Anti-Algal Emulsion'],
    areaCovered: '15,000 Sq. Ft.',
    paintBrandUsed: 'Asian Paints Apex Ultima',
    testimonial: {
      name: 'Priya Desai',
      text: 'South India Painters handled the scale of this project effortlessly. Highly recommended for commercial properties.',
      rating: 5,
    }
  },
  {
    id: '4',
    slug: 'heritage-home-wood-coating-kochi',
    title: 'Heritage Home Wood Polish',
    city: 'Kochi',
    category: 'Wood Coating',
    serviceType: 'Villas',
    shortDescription: 'Restoration and PU coating of antique teak wood panels and doors.',
    duration: '10 Days',
    coverImage: 'https://images.unsplash.com/photo-1600122718306-03f443b34b7f?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    ],
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600122718306-03f443b34b7f?auto=format&fit=crop&w=800&q=80',
    overview: 'Restoring a heritage home in Kochi required meticulous care, especially for the intricate wooden carvings and panels. We stripped the old degraded varnish, treated the wood, and applied a durable Polyurethane (PU) coat to protect against humidity while retaining the natural grain.',
    servicesPerformed: ['Old Varnish Removal', 'Wood Treatment', 'PU Matte Polish'],
    areaCovered: '1,200 Sq. Ft.',
    paintBrandUsed: 'Asian Paints WoodTech',
  },
  {
    id: '5',
    slug: 'roof-waterproofing-hyderabad',
    title: 'Terrace Waterproofing Solution',
    city: 'Hyderabad',
    category: 'Waterproofing',
    serviceType: 'Residential',
    shortDescription: 'Comprehensive terrace waterproofing to prevent monsoon leakage.',
    duration: '5 Days',
    coverImage: 'https://images.unsplash.com/photo-1585128719715-46776b56a0d1?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&w=800&q=80',
    ],
    beforeImage: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1585128719715-46776b56a0d1?auto=format&fit=crop&w=800&q=80',
    overview: 'The client faced severe dampness on the top floor ceilings during heavy rains. We executed a 5-step terrace waterproofing process, sealing all micro-cracks and applying an elastomeric membrane that flexes with temperature changes, completely stopping the leaks.',
    servicesPerformed: ['Surface Cleaning', 'Crack Bridging', 'Elastomeric Coating'],
    areaCovered: '2,000 Sq. Ft.',
    paintBrandUsed: 'Dr. Fixit / Asian Paints SmartCare',
    testimonial: {
      name: 'Suresh Reddy',
      text: 'Finally survived a monsoon without a single drop of leakage. Fantastic job.',
      rating: 5,
    }
  },
  {
    id: '6',
    slug: 'contemporary-apartment-interior-coimbatore',
    title: 'Minimalist Apartment Interior',
    city: 'Coimbatore',
    category: 'Interior Painting',
    serviceType: 'Apartments',
    shortDescription: 'Clean, minimalist whites and greys for a contemporary space.',
    duration: '8 Days',
    coverImage: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
    ],
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80',
    overview: 'A newly constructed apartment needed a pristine finish before the interior designers moved in. We used zero-VOC, washable paints to achieve a flawless matte look that serves as the perfect canvas for their minimalist furniture.',
    servicesPerformed: ['Primer Application', 'Zero-VOC Emulsion', 'Trim Painting'],
    areaCovered: '1,800 Sq. Ft.',
    paintBrandUsed: 'Nerolac Impressions',
  }
];

export const projectCategories = [
  'All',
  'Interior Painting',
  'Exterior Painting',
  'Texture Painting',
  'Waterproofing',
  'Wood Coating',
  'Residential',
  'Commercial',
  'Villas',
  'Apartments'
];

export const cityStats = [
  { name: 'Bangalore',  image: 'https://images.pexels.com/photos/739987/pexels-photo-739987.jpeg?auto=compress&cs=tinysrgb&w=600', count: 2150 },
  { name: 'Chennai',    image: 'https://images.pexels.com/photos/2846814/pexels-photo-2846814.jpeg?auto=compress&cs=tinysrgb&w=600', count: 1240 },
  { name: 'Hyderabad',  image: 'https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=600', count: 980 },
  { name: 'Kochi',      image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=600', count: 450 },
  { name: 'Mysore',     image: 'https://images.pexels.com/photos/3352484/pexels-photo-3352484.jpeg?auto=compress&cs=tinysrgb&w=600', count: 320 },
  { name: 'Coimbatore', image: 'https://images.pexels.com/photos/3264618/pexels-photo-3264618.jpeg?auto=compress&cs=tinysrgb&w=600', count: 280 },
];


export interface GalleryImage {
  id: string;
  src: string;
  categories: string[];
}

export const galleryImages: GalleryImage[] = [
  {
    "id": "real_0",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.12.54 PM.jpeg",
    "categories": [
      "All",
      "Interior Painting",
      "Waterproofing"
    ]
  },
  {
    "id": "real_1",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.12.55 PM (1).jpeg",
    "categories": [
      "All",
      "Exterior Painting",
      "Wood Coating"
    ]
  },
  {
    "id": "real_2",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.12.55 PM.jpeg",
    "categories": [
      "All",
      "Texture Painting",
      "Residential"
    ]
  },
  {
    "id": "real_3",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.12.56 PM (1).jpeg",
    "categories": [
      "All",
      "Waterproofing",
      "Commercial"
    ]
  },
  {
    "id": "real_4",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.12.56 PM.jpeg",
    "categories": [
      "All",
      "Wood Coating",
      "Villas"
    ]
  },
  {
    "id": "real_5",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.12.58 PM.jpeg",
    "categories": [
      "All",
      "Residential",
      "Apartments"
    ]
  },
  {
    "id": "real_6",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.12.59 PM.jpeg",
    "categories": [
      "All",
      "Commercial",
      "Interior Painting"
    ]
  },
  {
    "id": "real_7",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.13.00 PM (1).jpeg",
    "categories": [
      "All",
      "Villas",
      "Exterior Painting"
    ]
  },
  {
    "id": "real_8",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.13.00 PM (2).jpeg",
    "categories": [
      "All",
      "Apartments",
      "Texture Painting"
    ]
  },
  {
    "id": "real_9",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.13.00 PM (3).jpeg",
    "categories": [
      "All",
      "Interior Painting",
      "Waterproofing"
    ]
  },
  {
    "id": "real_10",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.13.00 PM.jpeg",
    "categories": [
      "All",
      "Exterior Painting",
      "Wood Coating"
    ]
  },
  {
    "id": "real_11",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.13.04 PM (1).jpeg",
    "categories": [
      "All",
      "Texture Painting",
      "Residential"
    ]
  },
  {
    "id": "real_12",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.13.04 PM (2).jpeg",
    "categories": [
      "All",
      "Waterproofing",
      "Commercial"
    ]
  },
  {
    "id": "real_13",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.13.04 PM.jpeg",
    "categories": [
      "All",
      "Wood Coating",
      "Villas"
    ]
  },
  {
    "id": "real_14",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.13.05 PM (1).jpeg",
    "categories": [
      "All",
      "Residential",
      "Apartments"
    ]
  },
  {
    "id": "real_15",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.13.05 PM (2).jpeg",
    "categories": [
      "All",
      "Commercial",
      "Interior Painting"
    ]
  },
  {
    "id": "real_16",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.13.05 PM.jpeg",
    "categories": [
      "All",
      "Villas",
      "Exterior Painting"
    ]
  },
  {
    "id": "real_17",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.13.06 PM (1).jpeg",
    "categories": [
      "All",
      "Apartments",
      "Texture Painting"
    ]
  },
  {
    "id": "real_18",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.13.06 PM (2).jpeg",
    "categories": [
      "All",
      "Interior Painting",
      "Waterproofing"
    ]
  },
  {
    "id": "real_19",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.13.06 PM.jpeg",
    "categories": [
      "All",
      "Exterior Painting",
      "Wood Coating"
    ]
  },
  {
    "id": "real_20",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.13.07 PM (1).jpeg",
    "categories": [
      "All",
      "Texture Painting",
      "Residential"
    ]
  },
  {
    "id": "real_21",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.13.07 PM (2).jpeg",
    "categories": [
      "All",
      "Waterproofing",
      "Commercial"
    ]
  },
  {
    "id": "real_22",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.13.07 PM.jpeg",
    "categories": [
      "All",
      "Wood Coating",
      "Villas"
    ]
  },
  {
    "id": "real_23",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.13.08 PM (1).jpeg",
    "categories": [
      "All",
      "Residential",
      "Apartments"
    ]
  },
  {
    "id": "real_24",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.13.08 PM (2).jpeg",
    "categories": [
      "All",
      "Commercial",
      "Interior Painting"
    ]
  },
  {
    "id": "real_25",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.13.08 PM.jpeg",
    "categories": [
      "All",
      "Villas",
      "Exterior Painting"
    ]
  },
  {
    "id": "real_26",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.13.09 PM.jpeg",
    "categories": [
      "All",
      "Apartments",
      "Texture Painting"
    ]
  },
  {
    "id": "real_27",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.16.41 PM (1).jpeg",
    "categories": [
      "All",
      "Interior Painting",
      "Waterproofing"
    ]
  },
  {
    "id": "real_28",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.16.41 PM.jpeg",
    "categories": [
      "All",
      "Exterior Painting",
      "Wood Coating"
    ]
  },
  {
    "id": "real_29",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.16.43 PM (1).jpeg",
    "categories": [
      "All",
      "Texture Painting",
      "Residential"
    ]
  },
  {
    "id": "real_30",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.16.43 PM.jpeg",
    "categories": [
      "All",
      "Waterproofing",
      "Commercial"
    ]
  },
  {
    "id": "real_31",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.16.44 PM (1).jpeg",
    "categories": [
      "All",
      "Wood Coating",
      "Villas"
    ]
  },
  {
    "id": "real_32",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.16.44 PM (2).jpeg",
    "categories": [
      "All",
      "Residential",
      "Apartments"
    ]
  },
  {
    "id": "real_33",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.16.44 PM.jpeg",
    "categories": [
      "All",
      "Commercial",
      "Interior Painting"
    ]
  },
  {
    "id": "real_34",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.16.45 PM (1).jpeg",
    "categories": [
      "All",
      "Villas",
      "Exterior Painting"
    ]
  },
  {
    "id": "real_35",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.16.45 PM.jpeg",
    "categories": [
      "All",
      "Apartments",
      "Texture Painting"
    ]
  },
  {
    "id": "real_36",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.16.48 PM (1).jpeg",
    "categories": [
      "All",
      "Interior Painting",
      "Waterproofing"
    ]
  },
  {
    "id": "real_37",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.16.48 PM (2).jpeg",
    "categories": [
      "All",
      "Exterior Painting",
      "Wood Coating"
    ]
  },
  {
    "id": "real_38",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.16.48 PM.jpeg",
    "categories": [
      "All",
      "Texture Painting",
      "Residential"
    ]
  },
  {
    "id": "real_39",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.16.49 PM (1).jpeg",
    "categories": [
      "All",
      "Waterproofing",
      "Commercial"
    ]
  },
  {
    "id": "real_40",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.16.49 PM (2).jpeg",
    "categories": [
      "All",
      "Wood Coating",
      "Villas"
    ]
  },
  {
    "id": "real_41",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.16.49 PM.jpeg",
    "categories": [
      "All",
      "Residential",
      "Apartments"
    ]
  },
  {
    "id": "real_42",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.16.50 PM (1).jpeg",
    "categories": [
      "All",
      "Commercial",
      "Interior Painting"
    ]
  },
  {
    "id": "real_43",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.16.50 PM (2).jpeg",
    "categories": [
      "All",
      "Villas",
      "Exterior Painting"
    ]
  },
  {
    "id": "real_44",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.16.50 PM (3).jpeg",
    "categories": [
      "All",
      "Apartments",
      "Texture Painting"
    ]
  },
  {
    "id": "real_45",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.16.50 PM.jpeg",
    "categories": [
      "All",
      "Interior Painting",
      "Waterproofing"
    ]
  },
  {
    "id": "real_46",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.16.51 PM (1).jpeg",
    "categories": [
      "All",
      "Exterior Painting",
      "Wood Coating"
    ]
  },
  {
    "id": "real_47",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.16.51 PM.jpeg",
    "categories": [
      "All",
      "Texture Painting",
      "Residential"
    ]
  },
  {
    "id": "real_48",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.16.54 PM.jpeg",
    "categories": [
      "All",
      "Waterproofing",
      "Commercial"
    ]
  },
  {
    "id": "real_49",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.16.55 PM (1).jpeg",
    "categories": [
      "All",
      "Wood Coating",
      "Villas"
    ]
  },
  {
    "id": "real_50",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.16.55 PM.jpeg",
    "categories": [
      "All",
      "Residential",
      "Apartments"
    ]
  },
  {
    "id": "real_51",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.16.56 PM (1).jpeg",
    "categories": [
      "All",
      "Commercial",
      "Interior Painting"
    ]
  },
  {
    "id": "real_52",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.16.56 PM (2).jpeg",
    "categories": [
      "All",
      "Villas",
      "Exterior Painting"
    ]
  },
  {
    "id": "real_53",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.16.56 PM.jpeg",
    "categories": [
      "All",
      "Apartments",
      "Texture Painting"
    ]
  },
  {
    "id": "real_54",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.16.57 PM (1).jpeg",
    "categories": [
      "All",
      "Interior Painting",
      "Waterproofing"
    ]
  },
  {
    "id": "real_55",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.16.57 PM.jpeg",
    "categories": [
      "All",
      "Exterior Painting",
      "Wood Coating"
    ]
  },
  {
    "id": "real_56",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.16.58 PM (1).jpeg",
    "categories": [
      "All",
      "Texture Painting",
      "Residential"
    ]
  },
  {
    "id": "real_57",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.16.58 PM.jpeg",
    "categories": [
      "All",
      "Waterproofing",
      "Commercial"
    ]
  },
  {
    "id": "real_58",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.16.59 PM.jpeg",
    "categories": [
      "All",
      "Wood Coating",
      "Villas"
    ]
  },
  {
    "id": "real_59",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.17.00 PM (1).jpeg",
    "categories": [
      "All",
      "Residential",
      "Apartments"
    ]
  },
  {
    "id": "real_60",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.17.00 PM.jpeg",
    "categories": [
      "All",
      "Commercial",
      "Interior Painting"
    ]
  },
  {
    "id": "real_61",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.17.01 PM.jpeg",
    "categories": [
      "All",
      "Villas",
      "Exterior Painting"
    ]
  },
  {
    "id": "real_62",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.17.02 PM.jpeg",
    "categories": [
      "All",
      "Apartments",
      "Texture Painting"
    ]
  },
  {
    "id": "real_63",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.17.03 PM.jpeg",
    "categories": [
      "All",
      "Interior Painting",
      "Waterproofing"
    ]
  },
  {
    "id": "real_64",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.17.04 PM (1).jpeg",
    "categories": [
      "All",
      "Exterior Painting",
      "Wood Coating"
    ]
  },
  {
    "id": "real_65",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.17.04 PM (2).jpeg",
    "categories": [
      "All",
      "Texture Painting",
      "Residential"
    ]
  },
  {
    "id": "real_66",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.17.04 PM.jpeg",
    "categories": [
      "All",
      "Waterproofing",
      "Commercial"
    ]
  },
  {
    "id": "real_67",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.17.05 PM.jpeg",
    "categories": [
      "All",
      "Wood Coating",
      "Villas"
    ]
  },
  {
    "id": "real_68",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.17.06 PM (1).jpeg",
    "categories": [
      "All",
      "Residential",
      "Apartments"
    ]
  },
  {
    "id": "real_69",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.17.06 PM (2).jpeg",
    "categories": [
      "All",
      "Commercial",
      "Interior Painting"
    ]
  },
  {
    "id": "real_70",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.17.06 PM.jpeg",
    "categories": [
      "All",
      "Villas",
      "Exterior Painting"
    ]
  },
  {
    "id": "real_71",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.17.07 PM (1).jpeg",
    "categories": [
      "All",
      "Apartments",
      "Texture Painting"
    ]
  },
  {
    "id": "real_72",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.17.07 PM (2).jpeg",
    "categories": [
      "All",
      "Interior Painting",
      "Waterproofing"
    ]
  },
  {
    "id": "real_73",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.17.07 PM.jpeg",
    "categories": [
      "All",
      "Exterior Painting",
      "Wood Coating"
    ]
  },
  {
    "id": "real_74",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.17.08 PM (1).jpeg",
    "categories": [
      "All",
      "Texture Painting",
      "Residential"
    ]
  },
  {
    "id": "real_75",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.17.08 PM (2).jpeg",
    "categories": [
      "All",
      "Waterproofing",
      "Commercial"
    ]
  },
  {
    "id": "real_76",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.17.08 PM.jpeg",
    "categories": [
      "All",
      "Wood Coating",
      "Villas"
    ]
  },
  {
    "id": "real_77",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.17.09 PM (1).jpeg",
    "categories": [
      "All",
      "Residential",
      "Apartments"
    ]
  },
  {
    "id": "real_78",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.17.09 PM (2).jpeg",
    "categories": [
      "All",
      "Commercial",
      "Interior Painting"
    ]
  },
  {
    "id": "real_79",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.17.09 PM.jpeg",
    "categories": [
      "All",
      "Villas",
      "Exterior Painting"
    ]
  },
  {
    "id": "real_80",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.24.43 PM (1).jpeg",
    "categories": [
      "All",
      "Apartments",
      "Texture Painting"
    ]
  },
  {
    "id": "real_81",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.24.43 PM.jpeg",
    "categories": [
      "All",
      "Interior Painting",
      "Waterproofing"
    ]
  },
  {
    "id": "real_82",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.24.44 PM (1).jpeg",
    "categories": [
      "All",
      "Exterior Painting",
      "Wood Coating"
    ]
  },
  {
    "id": "real_83",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.24.44 PM (2).jpeg",
    "categories": [
      "All",
      "Texture Painting",
      "Residential"
    ]
  },
  {
    "id": "real_84",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.24.44 PM.jpeg",
    "categories": [
      "All",
      "Waterproofing",
      "Commercial"
    ]
  },
  {
    "id": "real_85",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.25.54 PM.jpeg",
    "categories": [
      "All",
      "Wood Coating",
      "Villas"
    ]
  },
  {
    "id": "real_86",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.25.55 PM.jpeg",
    "categories": [
      "All",
      "Residential",
      "Apartments"
    ]
  },
  {
    "id": "real_87",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.25.56 PM (1).jpeg",
    "categories": [
      "All",
      "Commercial",
      "Interior Painting"
    ]
  },
  {
    "id": "real_88",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.25.56 PM (2).jpeg",
    "categories": [
      "All",
      "Villas",
      "Exterior Painting"
    ]
  },
  {
    "id": "real_89",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.25.56 PM.jpeg",
    "categories": [
      "All",
      "Apartments",
      "Texture Painting"
    ]
  },
  {
    "id": "real_90",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.25.57 PM (1).jpeg",
    "categories": [
      "All",
      "Interior Painting",
      "Waterproofing"
    ]
  },
  {
    "id": "real_91",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.25.57 PM (2).jpeg",
    "categories": [
      "All",
      "Exterior Painting",
      "Wood Coating"
    ]
  },
  {
    "id": "real_92",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.25.57 PM.jpeg",
    "categories": [
      "All",
      "Texture Painting",
      "Residential"
    ]
  },
  {
    "id": "real_93",
    "src": "/images/projects/images of South india painter/WhatsApp Image 2026-07-29 at 2.25.58 PM.jpeg",
    "categories": [
      "All",
      "Waterproofing",
      "Commercial"
    ]
  }
];
