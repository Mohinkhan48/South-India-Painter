/**
 * ColourIdeasRoomPage.tsx
 *
 * Dedicated page for a single room type. Shows inspirations, colour swatches,
 * style filters, before/after slider, and colour palette metadata.
 */

import { useParams, Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import {
  ROOMS,
  COLOUR_SWATCHES,
  STYLE_FILTERS,
  ROOM_INSPIRATIONS,
  BEFORE_AFTER_PAIRS,
} from '@/data/colourIdeasData';
import BeforeAfterSlider from '@/components/common/BeforeAfterSlider';

export default function ColourIdeasRoomPage() {
  const { roomSlug = '' } = useParams();
  const room = ROOMS.find(r => r.slug === roomSlug);
  const inspirations = ROOM_INSPIRATIONS[roomSlug] || [];
  const beforeAfter = BEFORE_AFTER_PAIRS[roomSlug];

  const [activeColour, setActiveColour] = useState(COLOUR_SWATCHES[0]);
  const [activeStyle, setActiveStyle] = useState(STYLE_FILTERS[0]); // "All Styles"

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [roomSlug]);

  // Filter inspirations by selected style
  const filteredInspirations = inspirations.filter(
    i => activeStyle.slug === 'all' || i.style === activeStyle.slug
  );

  if (!room) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-500">Room not found.</p>
      </section>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* ─── Hero ─── */}
      <section className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Colour tint overlay */}
        <div
          className="absolute inset-0 mix-blend-multiply pointer-events-none"
          style={{ backgroundColor: activeColour.overlay }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2745]/70 via-[#0F2745]/40 to-[#0F2745]/80" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <m.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[2.8rem] md:text-[4rem] font-[800] text-white tracking-[-0.03em] mb-3"
          >
            {room.name}
          </m.h1>
          <p className="text-white/70 text-lg">{room.description}</p>
        </div>

        {/* Back link */}
        <Link
          to="/colour-ideas"
          className="absolute top-6 left-6 z-20 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-sm font-medium hover:bg-white/20 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          All Rooms
        </Link>
      </section>

      {/* ─── Style filter bar ─── */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-3">
          {STYLE_FILTERS.map(style => (
            <button
              key={style.slug}
              onClick={() => setActiveStyle(style)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeStyle.slug === style.slug
                  ? 'bg-[var(--color-accent)] text-white shadow-[0_4px_14px_rgba(244,124,32,0.35)]'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
              }`}
            >
              {style.name}
            </button>
          ))}
        </div>
      </section>

      {/* ─── Colour Swatch bar ─── */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-gray-400 font-medium uppercase tracking-wider mb-4">
            Select a colour
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {COLOUR_SWATCHES.map(swatch => (
              <button
                key={swatch.slug}
                onClick={() => setActiveColour(swatch)}
                className={`group relative w-10 h-10 rounded-full transition-all duration-200 ${
                  activeColour.slug === swatch.slug
                    ? 'ring-[3px] ring-[var(--color-primary)] ring-offset-2 scale-110'
                    : 'ring-1 ring-gray-200 hover:ring-[var(--color-accent)] hover:scale-105'
                }`}
                style={{ backgroundColor: swatch.hex }}
                aria-label={swatch.name}
                title={swatch.name}
              />
            ))}
          </div>
          {activeColour && (
            <p className="text-center text-sm text-[var(--color-primary)] font-semibold mt-3">
              {activeColour.name}
            </p>
          )}
        </div>
      </section>

      {/* ─── Inspirations Grid ─── */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-[1.8rem] sm:text-[2.2rem] font-[800] text-[var(--color-primary)] text-center mb-12">
            {room.name} Inspirations
          </h2>

          {filteredInspirations.length === 0 && (
            <p className="text-center text-gray-400 text-lg py-12">
              No inspirations found for this style. Try "All Styles".
            </p>
          )}

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {filteredInspirations.map((insp, idx) => (
              <m.article
                key={insp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="group rounded-[24px] overflow-hidden bg-white shadow-[0_8px_28px_rgba(16,42,67,0.06)] hover:shadow-[0_14px_40px_rgba(16,42,67,0.12)] transition-shadow duration-300"
              >
                {/* Image with tint overlay */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={insp.image}
                    alt={insp.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Colour tint */}
                  <div
                    className="absolute inset-0 mix-blend-multiply pointer-events-none transition-opacity duration-300"
                    style={{ backgroundColor: activeColour.overlay }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider shadow">
                    {insp.style}
                  </span>
                </div>

                {/* Metadata */}
                <div className="p-6">
                  <h3 className="text-[1.15rem] font-[700] text-[var(--color-primary)] mb-4">
                    {insp.title}
                  </h3>

                  {/* Colour palette dots */}
                  <div className="flex gap-1.5 mb-4">
                    {insp.palette.map((c, i) => (
                      <span
                        key={i}
                        className="w-5 h-5 rounded-full border border-gray-200"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>

                  {/* Details grid */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[0.85rem]">
                    <div>
                      <span className="text-gray-400">Wall</span>
                      <p className="font-medium" style={{ color: insp.wallColourHex }}>
                        {insp.wallColour}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-400">Accent</span>
                      <p className="font-medium" style={{ color: insp.accentWallColourHex }}>
                        {insp.accentWallColour}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-400">Ceiling</span>
                      <p className="font-medium" style={{ color: insp.ceilingColourHex }}>
                        {insp.ceilingColour}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-400">Door</span>
                      <p className="font-medium" style={{ color: insp.doorColourHex }}>
                        {insp.doorColour}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-400">Furniture</span>
                      <p className="font-medium text-gray-700">{insp.furnitureSuggestion}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Flooring</span>
                      <p className="font-medium text-gray-700">{insp.flooringSuggestion}</p>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-400">Lighting</span>
                      <p className="font-medium text-gray-700">{insp.lightingRecommendation}</p>
                    </div>
                  </div>
                </div>
              </m.article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Before & After ─── */}
      {beforeAfter && (
        <section className="py-16 sm:py-24 bg-[#FAF8F4]">
          <div className="container mx-auto px-4">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <span className="inline-block rounded-full bg-[rgba(231,104,75,0.12)] px-5 py-2 text-[13px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4">
                Transformation
              </span>
              <h2 className="text-[1.8rem] sm:text-[2.2rem] font-[800] text-[var(--color-primary)]">
                Before & After
              </h2>
            </m.div>
            <div className="max-w-4xl mx-auto">
              <BeforeAfterSlider
                beforeImage={beforeAfter.before}
                afterImage={beforeAfter.after}
                beforeLabel={beforeAfter.beforeLabel}
                afterLabel={beforeAfter.afterLabel}
              />
            </div>
          </div>
        </section>
      )}

      {/* ─── CTA ─── */}
      <section className="relative w-full py-20 sm:py-28 overflow-hidden mb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F2745] via-[#17375E] to-[#0F2745]" />
        <div className="absolute top-[-60px] right-[-40px] w-[300px] h-[300px] rounded-full bg-[#F47C20]/10 blur-[100px] pointer-events-none" />
        <div className="relative container mx-auto px-4 text-center">
          <m.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[2rem] sm:text-[2.6rem] font-[800] text-white mb-10"
          >
            Ready to Transform Your {room.name}?
          </m.h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#F47C20] to-[#E7684B] text-white font-[600] shadow-[0_8px_24px_rgba(244,124,32,0.35)] hover:shadow-[0_12px_32px_rgba(244,124,32,0.5)] hover:scale-[1.04] transition-all"
            >
              Book Free Site Visit
            </a>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 font-[600] hover:bg-white/20 hover:scale-[1.04] transition-all"
            >
              Talk to Colour Expert
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
