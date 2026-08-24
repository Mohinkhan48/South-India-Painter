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

export default function ColourIdeasHero({
  onSearchChange,
}: ColourIdeasHeroProps) {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <section className="relative flex w-full min-h-[520px] md:min-h-[600px] items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Luxury home interior"
          className="h-full w-full object-cover"
          loading="eager"
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2745]/80 via-[#0F2745]/60 to-[#0F2745]/85" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#17375E]/30 to-transparent" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="pointer-events-none absolute right-[15%] top-[10%] z-0 h-[200px] w-[200px] rounded-full bg-[#F47C20]/10 blur-[80px]" />

      <div className="pointer-events-none absolute bottom-[15%] left-[10%] z-0 h-[300px] w-[300px] rounded-full bg-[#4A90D9]/8 blur-[100px]" />

      {/* Content */}
      <div
        className="
          relative
          z-10
          flex
          w-full
          max-w-4xl
          flex-col
          items-center
          px-6
          py-20
          text-center
          gap-3
          sm:gap-4
          md:py-28
          md:gap-0
        "
      >
        {/* Eyebrow */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/15
            bg-white/10
            px-5
            py-2
            backdrop-blur-md
            md:mb-8
          "
        >
          <div className="h-2 w-2 rounded-full bg-[#F47C20]" />

          <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-white/80">
            Paint Inspiration Gallery
          </span>
        </m.div>

        {/* Heading */}
        <m.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="
            text-[42px]
            font-[800]
            leading-[1.05]
            tracking-[-0.03em]
            text-white
            sm:text-[56px]
            md:mb-6
            md:text-[72px]
          "
        >
          Colour Ideas
        </m.h1>

        {/* Subtle Divider */}
        <m.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="
            h-[3px]
            w-16
            rounded-full
            bg-gradient-to-r
            from-[#F47C20]
            to-[#E7684B]
            md:mb-10
          "
        />

        {/* Search Box */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
          }}
          className="
            w-full
            max-w-[330px]
            sm:max-w-lg
          "
        >
          <div className="relative group">
            {/* Search Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#F47C20]/20 to-[#4A90D9]/20 blur-xl opacity-0 transition-opacity duration-500 group-focus-within:opacity-100" />

            {/* Search Container */}
            <div
              className="
                relative
                flex
                items-center
                rounded-2xl
                border
                border-white/20
                bg-white/10
                px-4
                py-3
                backdrop-blur-xl
                transition-all
                duration-300
                group-focus-within:border-white/30
                group-focus-within:bg-white/15
                sm:px-6
                sm:py-4
              "
            >
              <Search className="mr-3 h-5 w-5 flex-shrink-0 text-white/50 sm:mr-4" />

              <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search room ideas..."
                className="w-full bg-transparent text-[15px] text-white placeholder:text-white/40 focus:outline-none sm:text-[16px]"
                id="colour-ideas-search"
              />
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}