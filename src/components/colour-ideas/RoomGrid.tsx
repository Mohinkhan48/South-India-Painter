/**
 * RoomGrid.tsx
 *
 * Displays a responsive grid of room cards that link to their detail pages.
 * Includes a simple client‑side search filter – the parent component passes the
 * current query via the `searchQuery` prop.
 */

import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ROOMS } from '@/data/colourIdeasData';

interface RoomGridProps {
  searchQuery: string;
}

export default function RoomGrid({ searchQuery }: RoomGridProps) {
  const filtered = ROOMS.filter(r =>
    r.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="w-full pt-[90px] pb-[120px] bg-white">
      <div className="container mx-auto px-4">
        <m.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[2.5rem] font-[800] text-[var(--color-primary)] mb-[60px]"
        >
          Choose Your Room
        </m.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {filtered.map(room => (
            <Link
              key={room.slug}
              to={`/colour-ideas/${room.slug}`}
              className="group block overflow-hidden rounded-[24px] shadow-[0_8px_24px_rgba(16,42,67,0.07)] hover:shadow-[0_12px_36px_rgba(16,42,67,0.12)] transition-shadow"
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={room.image}
                  alt={room.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2745]/45 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white text-[1.2rem] font-semibold drop-shadow-md">
                  {room.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
