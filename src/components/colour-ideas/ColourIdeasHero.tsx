/**
 * ColourIdeasHero.tsx
 *
 * Premium hero section for the Colour Ideas page.
 * Full-width hero with luxury background, centered heading,
 * and a modern glassmorphic search box.
 */

import { useState } from 'react';
import { m } from 'framer-motion';
import { Search } from 'lucide-react';
import { HERO_IMAGE } from '@/data/colourIdeasData';

interface ColourIdeasHeroProps {
  onSearchChange: (query: string) => void;
}

export default function ColourIdeasHero({ onSearchChange }: ColourIdeasHeroProps) {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <section className="relative w-full min-h-[520px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Luxury home interior"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2745]/80 via-[#0F2745]/60 to-[#0F2745]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#17375E]/30 to-transparent" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-[10%] right-[15%] w-[200px] h-[200px] rounded-full bg-[#F47C20]/10 blur-[80px] pointer-events-none z-0" />
      <div className="absolute bottom-[15%] left-[10%] w-[300px] h-[300px] rounded-full bg-[#4A90D9]/8 blur-[100px] pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-20 md:py-28 w-full max-w-4xl mx-auto">
        {/* Eyebrow */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-[#F47C20]" />
          <span className="text-white/80 text-[13px] font-semibold tracking-[0.1em] uppercase">
            Paint Inspiration Gallery
          </span>
        </m.div>

        {/* Heading */}
        <m.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[42px] sm:text-[56px] md:text-[72px] font-[800] text-white leading-[1.05] tracking-[-0.03em] mb-6"
        >
          Colour Ideas
        </m.h1>

        {/* Subtle divider */}
        <m.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-16 h-[3px] bg-gradient-to-r from-[#F47C20] to-[#E7684B] rounded-full mb-10"
        />

        {/* Search Box */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full max-w-lg"
        >
          <div className="relative group">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#F47C20]/20 to-[#4A90D9]/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 transition-all duration-300 group-focus-within:bg-white/15 group-focus-within:border-white/30">
              <Search className="w-5 h-5 text-white/50 mr-4 flex-shrink-0" />
              <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search room ideas..."
                className="w-full bg-transparent text-white text-[16px] placeholder:text-white/40 focus:outline-none"
                id="colour-ideas-search"
              />
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
