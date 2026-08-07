/**
 * ColourCombinations.tsx
 *
 * Displays popular colour combination cards in a responsive grid.
 * Each card shows a gradient preview of the two colours plus metadata.
 */

import { m } from 'framer-motion';
import { COLOUR_COMBINATIONS } from '@/data/colourIdeasData';

export default function ColourCombinations() {
  return (
    <section className="w-full pt-[120px] pb-[120px] bg-[#FAF8F4]">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[60px]"
        >
          <span className="inline-block rounded-full bg-[rgba(231,104,75,0.12)] px-5 py-2 text-[13px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-[24px]">
            Trending Palettes
          </span>
          <h2 className="text-[2rem] sm:text-[2.5rem] font-[800] text-[var(--color-primary)] leading-tight">
            Popular Colour Combinations
          </h2>
        </m.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {COLOUR_COMBINATIONS.map((combo, idx) => (
            <m.div
              key={combo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              whileHover={{ y: -6 }}
              className="group rounded-[24px] bg-white overflow-hidden shadow-[0_8px_28px_rgba(16,42,67,0.06)] hover:shadow-[0_16px_48px_rgba(16,42,67,0.12)] transition-shadow duration-300"
            >
              {/* Gradient preview bar */}
              <div
                className="h-36 w-full transition-transform duration-500 group-hover:scale-[1.03]"
                style={{
                  background: `linear-gradient(135deg, ${combo.colours[0].hex} 0%, ${combo.colours[1]?.hex ?? combo.colours[0].hex} 100%)`,
                }}
              />

              {/* Card body */}
              <div className="p-6">
                <h3 className="text-[1.15rem] font-[700] text-[var(--color-primary)] mb-2">
                  {combo.name}
                </h3>
                <p className="text-[0.9rem] leading-relaxed text-gray-500 mb-4">
                  {combo.description}
                </p>
                {/* Swatch circles */}
                <div className="flex gap-2">
                  {combo.colours.map((c, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span
                        className="inline-block w-5 h-5 rounded-full border border-gray-200"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span className="text-xs text-gray-400 font-medium">{c.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
