/**
 * ColourCombinations.tsx
 *
 * Displays popular interior and exterior colour palette cards with category filtering.
 * Each card shows a preview of the exact colour swatch plus metadata.
 */

import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { COLOUR_COMBINATIONS } from '@/data/colourIdeasData';

export default function ColourCombinations() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Interior' | 'Exterior'>('All');

  const filteredCombos = COLOUR_COMBINATIONS.filter((combo) => {
    if (activeCategory === 'All') return true;
    return combo.category === activeCategory;
  });

  return (
    <section className="w-full pt-[120px] pb-[120px] bg-[#FAF8F4]">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[40px]"
        >
          <span className="inline-block rounded-full bg-[rgba(231,104,75,0.12)] px-5 py-2 text-[13px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-[24px]">
            Trending Palettes
          </span>
          <h2 className="text-[2rem] sm:text-[2.5rem] font-[800] text-[var(--color-primary)] leading-tight mb-4">
            Popular Colour Combinations
          </h2>
          <p
  className="..."
  style={{ transform: "translateX(3px)" }}
>
  Explore curated interior and exterior colour palettes crafted for timeless beauty.
</p>
        </m.div>

        {/* Category Filter Tabs */}
        <div
          className="flex justify-center items-center gap-3 mb-[50px] flex-wrap"
          style={{ transform: "translateX(-12px)" }}
        >
          {(['All', 'Interior', 'Exterior'] as const).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#F26A4B] text-white shadow-md shadow-[#F26A4B]/20'
                  : 'bg-white text-[#102A43] hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category} {category !== 'All' ? 'Paints' : 'Palettes'}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <m.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredCombos.map((combo, idx) => (
              <m.div
                key={combo.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className="group rounded-[24px] bg-white overflow-hidden shadow-[0_8px_28px_rgba(16,42,67,0.06)] hover:shadow-[0_16px_48px_rgba(16,42,67,0.12)] transition-shadow duration-300 relative border border-gray-100"
              >
                {/* Category Badge */}
                {combo.category && (
                  <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-black/40 text-white backdrop-blur-md">
                    {combo.category}
                  </span>
                )}

                {/* Swatch Preview Bar */}
                <div
                  className="h-36 w-full transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{
                    background:
                      combo.colours.length > 1
                        ? `linear-gradient(135deg, ${combo.colours[0].hex} 0%, ${combo.colours[1].hex} 100%)`
                        : combo.colours[0].hex,
                  }}
                />

                {/* Card body */}
                <div className="p-6">
                  <h3 className="text-[1.15rem] font-[700] text-[var(--color-primary)] mb-2">
                    {combo.name}
                  </h3>
                  <p className="text-[0.88rem] leading-relaxed text-gray-500 mb-5">
                    {combo.description}
                  </p>

                  {/* Swatch circles & names */}
                  <div className="flex flex-wrap gap-3 pt-3 border-t border-gray-100">
                    {combo.colours.map((c, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span
                          className="inline-block w-5 h-5 rounded-full border border-gray-300 shadow-inner flex-shrink-0"
                          style={{ backgroundColor: c.hex }}
                        />
                        <span className="text-xs font-semibold text-[#102A43]">{c.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </m.div>
            ))}
          </AnimatePresence>
        </m.div>
      </div>
    </section>
  );
}
