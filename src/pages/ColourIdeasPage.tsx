/**
 * pages/ColourIdeasPage.tsx
 *
 * Main landing page for the Colour Ideas feature.
 * Includes a premium hero with search, a room selection grid,
 * popular colour combinations, and a consultation CTA.
 */

import { useState, useEffect } from 'react';
import ColourIdeasHero from '@/components/colour-ideas/ColourIdeasHero';
import RoomGrid from '@/components/colour-ideas/RoomGrid';
import ColourCombinations from '@/components/colour-ideas/ColourCombinations';
import ColourIdeasCta from '@/components/colour-ideas/ColourIdeasCta';

export default function ColourIdeasPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <main className="min-h-screen bg-white flex flex-col gap-[100px] pb-16 sm:pb-20">
      {/* Hero section with search */}
      <ColourIdeasHero onSearchChange={setSearchQuery} />

      {/* Choose Your Room grid */}
      <RoomGrid searchQuery={searchQuery} />

      {/* Popular colour combinations */}
      <ColourCombinations />

      {/* Consultation CTA */}
      <ColourIdeasCta />

      {/* Extra spacing before footer in mobile view only */}
      <div className="h-0 sm:h-0 bg-white" />
    </main>
  );
}
