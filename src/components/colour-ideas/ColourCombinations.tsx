/**
 * ColourCombinations.tsx
 *
 * Displays popular interior and exterior colour palette cards with category filtering.
 * Each card shows a preview of the exact colour swatch plus metadata.
 */

import { m, AnimatePresence } from 'framer-motion';
import { COLOUR_COMBINATIONS } from '@/data/colourIdeasData';

export default function ColourCombinations() {
  const interiorCombos = COLOUR_COMBINATIONS.filter((c) => c.category === 'Interior');
  const exteriorCombos = COLOUR_COMBINATIONS.filter((c) => c.category === 'Exterior');

  return (
    <section className="w-full pt-[120px] pb-[120px] bg-[#FAF8F4]">
      <div className="container mx-auto px-4">
        {/* Main Section heading */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[50px]"
        >
          <span className="inline-block rounded-full bg-[rgba(231,104,75,0.12)] px-5 py-2 text-[13px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-[24px]">
            Trending Palettes
          </span>
          <h2 className="text-[2rem] sm:text-[2.5rem] font-[800] text-[var(--color-primary)] leading-tight">
            Premium Interior Colour Combination
          </h2>
        </m.div>

        {/* Interior Section */}
        <div className="mb-[90px] sm:mb-[110px]">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-primary)]">
              Interior
            </h3>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-[var(--color-accent)]/30 to-transparent" />
          </div>

          {/* Interior Cards */}
          <m.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence>
              {interiorCombos.map((combo, idx) => (
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
                  {/* 50/50 Split Swatch Preview Bar with Vertical White Line */}
                  <div className="relative h-36 w-full flex overflow-hidden group-hover:scale-[1.03] transition-transform duration-500">
                    <div
                      className="w-1/2 h-full"
                      style={{ backgroundColor: combo.colours[0].hex }}
                    />
                    <div className="w-[3px] bg-white h-full z-10 shadow-sm" />
                    <div
                      className="w-1/2 h-full"
                      style={{
                        backgroundColor: combo.colours[1]
                          ? combo.colours[1].hex
                          : combo.colours[0].hex,
                      }}
                    />
                  </div>

                  {/* Card body: Left & Right Color Names only */}
                  <div
  className="flex items-center justify-between text-xs sm:text-sm font-bold text-[#102A43]"
  style={{
    padding: '4px 14px 6px 14px',
  }}
>
  <span className="flex-1 text-left truncate">
    {combo.colours[0].name}
  </span>

  {combo.colours[1] && (
    <span className="flex-1 text-right truncate">
      {combo.colours[1].name}
    </span>
  )}
</div>
                </m.div>
              ))}
            </AnimatePresence>
          </m.div>
        </div>

        {/* Space between Interior and Exterior */}
        <div style={{ height: '60px' }} />

        {/* Exterior Section */}
        <div className="pt-4">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-primary)]">
              Exterior
            </h3>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-[var(--color-accent)]/30 to-transparent" />
          </div>

          {/* Exterior Cards */}
          <m.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence>
              {exteriorCombos.map((combo, idx) => (
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
                  {/* Swatch Preview Bar */}
                  <div
                    className="h-36 w-full transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{ backgroundColor: combo.colours[0].hex }}
                  />

                  {/* Card body: Exterior Colour Name only */}
                  <div className="p-5 text-center text-xs sm:text-sm font-bold text-[#102A43]">
                    <span>{combo.name}</span>
                  </div>
                </m.div>
              ))}
            </AnimatePresence>
          </m.div>
        </div>
      </div>
    </section>
  );
}
