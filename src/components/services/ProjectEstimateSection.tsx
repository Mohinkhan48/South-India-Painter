import { useState } from 'react';
import { m } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const cards = [
  { id: 'painting', title: 'PAINTING ESTIMATE', desc: 'For interior and exterior painting projects.', buttonText: 'Estimate Painting Cost', path: '#', image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1400&q=80' },
  { id: 'waterproofing', title: 'WATERPROOFING ESTIMATE', desc: 'For terraces, walls and moisture-prone areas.', buttonText: 'Estimate Waterproofing Cost', path: '#', image: 'https://images.unsplash.com/photo-1585128719715-46776b56a0d1?auto=format&fit=crop&w=1400&q=80' },
];

export default function ProjectEstimateSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section style={{ background: '#0A1624', padding: '90px 0 110px', position: 'relative', overflow: 'visible' }}>
      {/* Glow */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 800, height: 800, background: 'rgba(231,104,75,0.03)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }} />

      <div style={{ width: 'min(1400px, calc(100% - 64px))', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <div style={{ maxWidth: 680, marginBottom: 56 }}>
          <m.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--color-accent)', marginBottom: 14 }}
          >
            PLAN YOUR PROJECT
          </m.p>
          <m.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            style={{ fontSize: 'clamp(34px, 4vw, 56px)', fontWeight: 700, lineHeight: 1.08, color: '#fff', marginBottom: 18 }}
          >
            Get a Clearer Idea{' '}
            <span style={{ display: 'inline-block' }}>Before You Begin.</span>
          </m.h2>
          <m.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
            style={{ fontSize: 16, color: '#b4c4d3', lineHeight: 1.65, maxWidth: 500 }}
          >
            Explore an initial estimate based on your project type, area and service requirements.
          </m.p>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28 }} className="estimate-grid">
          {cards.map((card, idx) => {
            const isHov = hovered === card.id;
            const isDimmed = hovered !== null && hovered !== card.id;
            return (
              <m.div
                key={card.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHovered(card.id)}
                onMouseLeave={() => setHovered(null)}
                style={{ 
                  position: 'relative', 
                  overflow: 'hidden', 
                  borderRadius: 32, 
                  background: '#122234', 
                  minHeight: 450, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'flex-end', 
                  transition: 'transform 0.35s ease, box-shadow 0.35s ease, opacity 0.4s ease', 
                  opacity: isDimmed ? 0.6 : 1, 
                  transform: isHov ? 'translateY(-6px) scale(1.01)' : 'translateY(0px) scale(1)', 
                  boxShadow: isHov ? '0 24px 60px rgba(0,0,0,0.3)' : '0 8px 30px rgba(0,0,0,0.1)' 
                }}
              >
                {/* bg image */}
                <img 
                  src={card.image} 
                  alt={card.title} 
                  style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    opacity: isHov ? 0.55 : 0.4, 
                    mixBlendMode: 'luminosity', 
                    transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease', 
                    transform: isHov ? 'scale(1.05)' : 'scale(1)' 
                  }} 
                />
                
                {/* gradient */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #060D14 20%, rgba(10,22,36,0.7) 60%, rgba(10,22,36,0.1) 100%)', pointerEvents: 'none' }} />
                
                {/* accent border (subtle top accent) */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--color-accent)', opacity: isHov ? 0.85 : 0, transform: isHov ? 'scaleX(1)' : 'scaleX(0.95)', transition: 'all 0.4s ease', transformOrigin: 'center' }} />
                
                {/* content */}
                <div style={{ position: 'relative', zIndex: 10, padding: '40px 48px' }}>
                  <h3 style={{ fontSize: 28, fontWeight: 700, color: '#fff', marginBottom: 10, lineHeight: 1.2, transform: isHov ? 'translateY(-3px)' : 'translateY(0)', transition: 'transform 0.3s ease' }}>{card.title}</h3>
                  <p style={{ fontSize: 15, color: '#8eabc2', marginBottom: 28, maxWidth: 300, transform: isHov ? 'translateY(-2px)' : 'translateY(0)', transition: 'transform 0.3s ease' }}>{card.desc}</p>
                  <Link to={card.path} style={{ display: 'inline-flex', alignItems: 'center', gap: 14, fontSize: 15, fontWeight: 600, color: isHov ? '#ffffff' : '#d0dbe5', textDecoration: 'none', transition: 'color 0.3s ease' }}>
                    <span>{card.buttonText}</span>
                    <span style={{ 
                      width: 48, 
                      height: 48, 
                      borderRadius: '50%', 
                      background: isHov ? 'var(--color-accent)' : 'rgba(255,255,255,0.1)', 
                      border: isHov ? '1px solid var(--color-accent)' : '1px solid rgba(255,255,255,0.2)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      transition: 'all 0.3s ease',
                      transform: isHov ? 'scale(1.08)' : 'scale(1)'
                    }}>
                      <ArrowUpRight style={{ width: 20, height: 20, transition: 'transform 0.3s ease', transform: isHov ? 'translate(3px, -3px)' : 'translate(0, 0)' }} />
                    </span>
                  </Link>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .estimate-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
