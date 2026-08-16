/**
 * data/colourIdeasData.ts
 *
 * Central data store for the Colour Ideas page.
 * Contains room definitions, colour swatches, style filters,
 * inspiration data per room, and popular colour combinations.
 */

import livingRoomBefore from '@/assets/colour-ideas/rooms/living-room-before.png';
import livingRoomAfter from '@/assets/colour-ideas/rooms/living-room-after.png';
import bedroomBefore from '@/assets/colour-ideas/rooms/bedroom-before.png';
import bedroomAfter from '@/assets/colour-ideas/rooms/bedroom-after.png';
import kidsBedroomBefore from '@/assets/colour-ideas/rooms/kids-bedroom-before.png';
import kidsBedroomAfter from '@/assets/colour-ideas/rooms/kids-bedroom-after.png';
import kitchenBefore from '@/assets/colour-ideas/rooms/kitchen-before.png';
import kitchenAfter from '@/assets/colour-ideas/rooms/kitchen-after.png';
import diningRoomBefore from '@/assets/colour-ideas/rooms/dining-room-before.png';
import diningRoomAfter from '@/assets/colour-ideas/rooms/dining-room-after.png';
import bathroomBefore from '@/assets/colour-ideas/rooms/bathroom-before.png';
import bathroomAfter from '@/assets/colour-ideas/rooms/bathroom-after.png';
import homeOfficeBefore from '@/assets/colour-ideas/rooms/home-office-before.png';
import homeOfficeAfter from '@/assets/colour-ideas/rooms/home-office-after.png';
import balconyBefore from '@/assets/colour-ideas/rooms/balcony-before.png';
import balconyAfter from '@/assets/colour-ideas/rooms/balcony-after.png';
import exteriorBefore from '@/assets/colour-ideas/rooms/exterior-before.png';
import exteriorAfter from '@/assets/colour-ideas/rooms/exterior-after.png';
import ceilingBefore from '@/assets/colour-ideas/rooms/ceiling-before.png';
import ceilingAfter from '@/assets/colour-ideas/rooms/ceiling-after.png';

// ---------------------------------------------------------------------------
// Room card images (high-quality originals for display)
// ---------------------------------------------------------------------------
import heroImg from '@/assets/colour-ideas/hero_bg.png';
import livingRoomImg from '@/assets/colour-ideas/rooms/living-room.png';
import bedroomImg from '@/assets/colour-ideas/rooms/bedroom.png';
import kidsBedroomImg from '@/assets/colour-ideas/rooms/kids-bedroom.png';
import kitchenImg from '@/assets/colour-ideas/rooms/kitchen.png';
import diningRoomImg from '@/assets/colour-ideas/rooms/dining-room.png';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export interface Room {
  slug: string;
  name: string;
  image: string;
  description: string;
}

export interface ColourSwatch {
  name: string;
  slug: string;
  hex: string;
  overlay: string; // rgba overlay colour for tinting
}

export interface StyleFilter {
  name: string;
  slug: string;
}

export interface Inspiration {
  id: string;
  title: string;
  image: string;
  wallColour: string;
  wallColourHex: string;
  accentWallColour: string;
  accentWallColourHex: string;
  ceilingColour: string;
  ceilingColourHex: string;
  doorColour: string;
  doorColourHex: string;
  furnitureSuggestion: string;
  flooringSuggestion: string;
  lightingRecommendation: string;
  palette: string[]; // array of hex colours
  style: string; // matches StyleFilter slug
}

export interface ColourCombination {
  id: string;
  name: string;
  category?: 'Interior' | 'Exterior';
  colours: { name: string; hex: string }[];
  description: string;
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------
export const HERO_IMAGE = heroImg;

// ---------------------------------------------------------------------------
// Rooms
// ---------------------------------------------------------------------------
export const ROOMS: Room[] = [
  { slug: 'living-room', name: 'Living Room', image: livingRoomImg, description: 'Elegant spaces for everyday living' },
  { slug: 'bedroom', name: 'Bedroom', image: bedroomImg, description: 'Peaceful retreats for rest' },
  { slug: 'kids-bedroom', name: 'Kids Bedroom', image: kidsBedroomImg, description: 'Fun & playful rooms for children' },
  { slug: 'kitchen', name: 'Kitchen', image: kitchenImg, description: 'Modern culinary spaces' },
  { slug: 'dining-room', name: 'Dining Room', image: diningRoomImg, description: 'Warm gatherings over meals' },
  { slug: 'bathroom', name: 'Bathroom', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80', description: 'Spa-like sanctuaries' },
  { slug: 'home-office', name: 'Home Office', image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&q=80', description: 'Productive workspaces at home' },
  { slug: 'balcony', name: 'Balcony', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', description: 'Open-air retreats' },
  { slug: 'exterior', name: 'Exterior', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', description: 'Stunning kerb appeal' },
  { slug: 'ceiling', name: 'Ceiling', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', description: 'The fifth wall transformed' },
];

// ---------------------------------------------------------------------------
// Colour Swatches
// ---------------------------------------------------------------------------
export const COLOUR_SWATCHES: ColourSwatch[] = [
  { name: 'White', slug: 'white', hex: '#FFFFFF', overlay: 'rgba(255,255,255,0.18)' },
  { name: 'Cream', slug: 'cream', hex: '#FFFDD0', overlay: 'rgba(255,253,208,0.22)' },
  { name: 'Beige', slug: 'beige', hex: '#D4B896', overlay: 'rgba(212,184,150,0.25)' },
  { name: 'Grey', slug: 'grey', hex: '#8E8E8E', overlay: 'rgba(142,142,142,0.22)' },
  { name: 'Blue', slug: 'blue', hex: '#4A90D9', overlay: 'rgba(74,144,217,0.20)' },
  { name: 'Green', slug: 'green', hex: '#6B8F71', overlay: 'rgba(107,143,113,0.22)' },
  { name: 'Olive', slug: 'olive', hex: '#808000', overlay: 'rgba(128,128,0,0.20)' },
  { name: 'Brown', slug: 'brown', hex: '#7B5B3A', overlay: 'rgba(123,91,58,0.22)' },
  { name: 'Black', slug: 'black', hex: '#2C2C2C', overlay: 'rgba(44,44,44,0.25)' },
  { name: 'Pink', slug: 'pink', hex: '#E8A0BF', overlay: 'rgba(232,160,191,0.18)' },
  { name: 'Purple', slug: 'purple', hex: '#7B6D8D', overlay: 'rgba(123,109,141,0.20)' },
  { name: 'Terracotta', slug: 'terracotta', hex: '#CC6B49', overlay: 'rgba(204,107,73,0.22)' },
];

// ---------------------------------------------------------------------------
// Style Filters
// ---------------------------------------------------------------------------
export const STYLE_FILTERS: StyleFilter[] = [
  { name: 'All Styles', slug: 'all' },
  { name: 'Modern', slug: 'modern' },
  { name: 'Luxury', slug: 'luxury' },
  { name: 'Minimal', slug: 'minimal' },
  { name: 'Scandinavian', slug: 'scandinavian' },
  { name: 'Traditional', slug: 'traditional' },
  { name: 'Contemporary', slug: 'contemporary' },
  { name: 'Premium', slug: 'premium' },
];

// ---------------------------------------------------------------------------
// Room Inspirations
// ---------------------------------------------------------------------------
// Each room has 5 inspirations. Images use Unsplash with different themes.
// Colour swatches will apply a CSS overlay tint on top of the base images.

function buildInspirations(roomSlug: string, roomName: string): Inspiration[] {
  // Room-specific base images from Unsplash
  const roomImages: Record<string, string[]> = {
    'living-room': [
      livingRoomImg,
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80',
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=900&q=80',
      'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=900&q=80',
    ],
    'bedroom': [
      bedroomImg,
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=900&q=80',
      'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=900&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=900&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&q=80',
    ],
    'kids-bedroom': [
      kidsBedroomImg,
      'https://images.unsplash.com/photo-1617331140180-e8262094733a?w=900&q=80',
      'https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?w=900&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&q=80',
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=900&q=80',
    ],
    'kitchen': [
      kitchenImg,
      'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=900&q=80',
      'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=900&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=80',
      'https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=900&q=80',
    ],
    'dining-room': [
      diningRoomImg,
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=900&q=80',
      'https://images.unsplash.com/photo-1615968679312-9b7ed9f04e87?w=900&q=80',
      'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=900&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80',
    ],
    'bathroom': [
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80',
      'https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=900&q=80',
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=900&q=80',
    ],
    'home-office': [
      'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=900&q=80',
      'https://images.unsplash.com/photo-1618220179428-22790b461013?w=900&q=80',
      'https://images.unsplash.com/photo-1616627988170-85843d3c5e13?w=900&q=80',
      'https://images.unsplash.com/photo-1600494603562-d4b40f5da39e?w=900&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=80',
    ],
    'balcony': [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=900&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=80',
    ],
    'exterior': [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=900&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80',
    ],
    'ceiling': [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80',
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=900&q=80',
      'https://images.unsplash.com/photo-1616627988170-85843d3c5e13?w=900&q=80',
    ],
  };

  const styles: string[] = ['modern', 'luxury', 'minimal', 'scandinavian', 'contemporary'];

  const inspirationTemplates = [
    {
      wallColour: 'Soft White', wallColourHex: '#F5F1EB',
      accentWallColour: 'Dusty Navy', accentWallColourHex: '#2C4A6E',
      ceilingColour: 'Pure White', ceilingColourHex: '#FFFFFF',
      doorColour: 'Warm White', doorColourHex: '#F0EDE6',
      furnitureSuggestion: 'Natural oak with linen upholstery',
      flooringSuggestion: 'Light engineered oak hardwood',
      lightingRecommendation: 'Warm LED pendant + recessed spotlights',
      palette: ['#F5F1EB', '#2C4A6E', '#FFFFFF', '#C4A76C', '#8B7355'],
    },
    {
      wallColour: 'Warm Greige', wallColourHex: '#C4B9A8',
      accentWallColour: 'Deep Forest', accentWallColourHex: '#2D4A3E',
      ceilingColour: 'Off White', ceilingColourHex: '#FAF8F4',
      doorColour: 'Dark Walnut', doorColourHex: '#4A3728',
      furnitureSuggestion: 'Dark walnut with velvet cushions',
      flooringSuggestion: 'Warm walnut parquet flooring',
      lightingRecommendation: 'Statement chandelier + wall sconces',
      palette: ['#C4B9A8', '#2D4A3E', '#FAF8F4', '#4A3728', '#D4A847'],
    },
    {
      wallColour: 'Cloud Grey', wallColourHex: '#D6D2CC',
      accentWallColour: 'Terracotta', accentWallColourHex: '#CC6B49',
      ceilingColour: 'Bright White', ceilingColourHex: '#FFFFFF',
      doorColour: 'Matte Black', doorColourHex: '#2C2C2C',
      furnitureSuggestion: 'Mid-century modern with brass accents',
      flooringSuggestion: 'Polished concrete or grey porcelain tiles',
      lightingRecommendation: 'Track lighting + oversized floor lamp',
      palette: ['#D6D2CC', '#CC6B49', '#FFFFFF', '#2C2C2C', '#B8926A'],
    },
    {
      wallColour: 'Nordic Blue', wallColourHex: '#A8C4D4',
      accentWallColour: 'Pale Blush', accentWallColourHex: '#E8CFCF',
      ceilingColour: 'Snow White', ceilingColourHex: '#FAFAFA',
      doorColour: 'Natural Pine', doorColourHex: '#C5A86A',
      furnitureSuggestion: 'Light birch with wool throws',
      flooringSuggestion: 'White-washed pine boards',
      lightingRecommendation: 'Paper pendant lamps + candle holders',
      palette: ['#A8C4D4', '#E8CFCF', '#FAFAFA', '#C5A86A', '#8B9E8B'],
    },
    {
      wallColour: 'Champagne', wallColourHex: '#F0E3CE',
      accentWallColour: 'Midnight Blue', accentWallColourHex: '#17375E',
      ceilingColour: 'Ivory', ceilingColourHex: '#FFFFF0',
      doorColour: 'Espresso', doorColourHex: '#3C2415',
      furnitureSuggestion: 'Tufted leather with marble accents',
      flooringSuggestion: 'Dark herringbone hardwood',
      lightingRecommendation: 'Crystal chandelier + dimmer controls',
      palette: ['#F0E3CE', '#17375E', '#FFFFF0', '#3C2415', '#D4AF37'],
    },
  ];

  const images = roomImages[roomSlug] || roomImages['living-room'];

  return inspirationTemplates.map((tmpl, i) => ({
    id: `${roomSlug}-insp-${i + 1}`,
    title: `${roomName} Inspiration ${i + 1}`,
    image: images[i] || images[0],
    style: styles[i],
    ...tmpl,
  }));
}

// Pre-build all room inspirations
export const ROOM_INSPIRATIONS: Record<string, Inspiration[]> = {};
ROOMS.forEach(room => {
  ROOM_INSPIRATIONS[room.slug] = buildInspirations(room.slug, room.name);
});

// ---------------------------------------------------------------------------
// Before / After Pairs
// ---------------------------------------------------------------------------
export interface BeforeAfterPair {
  roomSlug: string;
  before: string;
  after: string;
  beforeLabel: string;
  afterLabel: string;
}

export const BEFORE_AFTER_PAIRS: Record<string, BeforeAfterPair> = {
  'living-room': {
    roomSlug: 'living-room',
    before: livingRoomBefore,
    after: livingRoomAfter,
    beforeLabel: 'Before Painting',
    afterLabel: 'After Painting',
  },
  'bedroom': {
    roomSlug: 'bedroom',
    before: bedroomBefore,
    after: bedroomAfter,
    beforeLabel: 'Before Painting',
    afterLabel: 'After Painting',
  },
  'kids-bedroom': {
    roomSlug: 'kids-bedroom',
    before: kidsBedroomBefore,
    after: kidsBedroomAfter,
    beforeLabel: 'Before Painting',
    afterLabel: 'After Painting',
  },
  'kitchen': {
    roomSlug: 'kitchen',
    before: kitchenBefore,
    after: kitchenAfter,
    beforeLabel: 'Before Painting',
    afterLabel: 'After Painting',
  },
  'dining-room': {
    roomSlug: 'dining-room',
    before: diningRoomBefore,
    after: diningRoomAfter,
    beforeLabel: 'Before Painting',
    afterLabel: 'After Painting',
  },
  'bathroom': {
    roomSlug: 'bathroom',
    before: bathroomBefore,
    after: bathroomAfter,
    beforeLabel: 'Before Painting',
    afterLabel: 'After Painting',
  },
  'home-office': {
    roomSlug: 'home-office',
    before: homeOfficeBefore,
    after: homeOfficeAfter,
    beforeLabel: 'Before Painting',
    afterLabel: 'After Painting',
  },
  'balcony': {
    roomSlug: 'balcony',
    before: balconyBefore,
    after: balconyAfter,
    beforeLabel: 'Before Painting',
    afterLabel: 'After Painting',
  },
  'exterior': {
    roomSlug: 'exterior',
    before: exteriorBefore,
    after: exteriorAfter,
    beforeLabel: 'Before Painting',
    afterLabel: 'After Painting',
  },
  'ceiling': {
    roomSlug: 'ceiling',
    before: ceilingBefore,
    after: ceilingAfter,
    beforeLabel: 'Before Painting',
    afterLabel: 'After Painting',
  },
};

// ---------------------------------------------------------------------------
// Popular Colour Combinations
// ---------------------------------------------------------------------------
export const COLOUR_COMBINATIONS: ColourCombination[] = [
  // INTERIOR COMBINATIONS
  {
    id: 'cream-dark-almond',
    name: 'Cream + Dark Almond',
    category: 'Interior',
    colours: [
      { name: 'Cream', hex: '#F3E5C8' },
      { name: 'Dark Almond', hex: '#6E4D3B' },
    ],
    description: 'Soft warm cream paired with rich dark almond depth',
  },
  {
    id: 'absolute-white-oak-leaf',
    name: 'Absolute White + Oak Leaf',
    category: 'Interior',
    colours: [
      { name: 'Absolute White', hex: '#F5F6F8' },
      { name: 'Oak Leaf', hex: '#B88B58' },
    ],
    description: 'Pristine white elegance with natural oak wood warmth',
  },
  {
    id: 'grey-matter-brown-tan',
    name: 'Grey Matter + Brown Tan',
    category: 'Interior',
    colours: [
      { name: 'Grey Matter', hex: '#9EA3A8' },
      { name: 'Brown Tan', hex: '#946E56' },
    ],
    description: 'Modern slate grey balanced with warm brown tan accents',
  },
  {
    id: 'emerald-accent-almond-white',
    name: 'Emerald Accent + Almond White',
    category: 'Interior',
    colours: [
      { name: 'Emerald Accent', hex: '#1E4D3B' },
      { name: 'Almond White', hex: '#F2EAD9' },
    ],
    description: 'Deep opulent green contrasting with soft almond white',
  },

  // INTERIOR SINGLE COLOURS
  {
    id: 'mystic-lake',
    name: 'Mystic Lake',
    category: 'Interior',
    colours: [
      { name: 'Mystic Lake', hex: '#5B7B88' },
    ],
    description: 'Tranquil and soothing lake blue-grey hue',
  },
  {
    id: 'subtle-cream',
    name: 'Subtle Cream',
    category: 'Interior',
    colours: [
      { name: 'Subtle Cream', hex: '#F5EDDA' },
    ],
    description: 'Soft, delicate cream tone for warm inviting spaces',
  },
  {
    id: 'gulmarg-winter',
    name: 'Gulmarg Winter',
    category: 'Interior',
    colours: [
      { name: 'Gulmarg Winter', hex: '#DCE3EA' },
    ],
    description: 'Cool, crisp and serene winter ice blue',
  },
  {
    id: 'swiss-coffee',
    name: 'Swiss Coffee',
    category: 'Interior',
    colours: [
      { name: 'Swiss Coffee', hex: '#EAE3D2' },
    ],
    description: 'Smooth, cozy coffee cream finish',
  },
  {
    id: 'taupe-tone',
    name: 'Taupe Tone',
    category: 'Interior',
    colours: [
      { name: 'Taupe Tone', hex: '#A89A8B' },
    ],
    description: 'Sophisticated neutral taupe with earthy warmth',
  },
  {
    id: 'rave-raisin',
    name: 'Rave Raisin',
    category: 'Interior',
    colours: [
      { name: 'Rave Raisin', hex: '#583743' },
    ],
    description: 'Bold, luxurious deep raisin plum accent',
  },
  {
    id: 'bamboo-grove',
    name: 'Bamboo Grove',
    category: 'Interior',
    colours: [
      { name: 'Bamboo Grove', hex: '#8A9A65' },
    ],
    description: 'Fresh, organic earthy bamboo green',
  },

  // EXTERIOR COLOURS
  {
    id: 'tropical-tan',
    name: 'Tropical Tan',
    category: 'Exterior',
    colours: [
      { name: 'Tropical Tan', hex: '#D6A374' },
    ],
    description: 'Warm golden sand exterior finish',
  },
  {
    id: 'tiara',
    name: 'Tiara',
    category: 'Exterior',
    colours: [
      { name: 'Tiara', hex: '#EFE6D5' },
    ],
    description: 'Soft, graceful off-white exterior shade',
  },
  {
    id: 'white-delight',
    name: 'White Delight',
    category: 'Exterior',
    colours: [
      { name: 'White Delight', hex: '#F4F0E8' },
    ],
    description: 'Luminous, pure white exterior coating',
  },
  {
    id: 'chapel-grey',
    name: 'Chapel Grey',
    category: 'Exterior',
    colours: [
      { name: 'Chapel Grey', hex: '#9B9891' },
    ],
    description: 'Timeless, elegant medium grey exterior',
  },
  {
    id: 'gentle-blue',
    name: 'Gentle Blue',
    category: 'Exterior',
    colours: [
      { name: 'Gentle Blue', hex: '#8EAAC9' },
    ],
    description: 'Refreshing and calm gentle blue exterior',
  },
];
