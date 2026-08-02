/**
 * types/index.ts
 *
 * Shared TypeScript interfaces and types used across the application.
 * Keep domain types here; component-specific prop types live alongside
 * their components.
 */

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  coverImage?: string;
  icon?: string;
  features?: string[];
}

// ---------------------------------------------------------------------------
// Projects / Portfolio
// ---------------------------------------------------------------------------

export type ProjectCategory =
  | 'interior'
  | 'exterior'
  | 'commercial'
  | 'waterproofing'
  | 'texture'
  | 'wallpaper'
  | 'wood';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: number;
  shortDescription: string;
  description: string;
  coverImage?: string;
  images?: string[];
  tags?: string[];
}

// ---------------------------------------------------------------------------
// Colour Ideas
// ---------------------------------------------------------------------------

export interface ColourPalette {
  id: string;
  name: string;
  description?: string;
  colours: string[]; // hex values
  room?: string;
}

// ---------------------------------------------------------------------------
// Forms
// ---------------------------------------------------------------------------

export interface QuoteFormData {
  name: string;
  phone: string;
  email?: string;
  city: string;
  serviceType: string;
  propertyType: string;
  message?: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  subject: string;
  message: string;
}

// ---------------------------------------------------------------------------
// SEO / Meta
// ---------------------------------------------------------------------------

export interface PageMeta {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}
