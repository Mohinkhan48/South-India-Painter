import { useState } from 'react';
import { m } from 'framer-motion';

const cards = [
  {
    id: 'painting',
    number: '01',
    label: 'PAINTING SERVICES',
    title: 'Transform Your Space',
    desc: 'Bring your home to life with carefully selected colours, professional finishes and high-quality painting solutions.',
    buttonText: 'Explore Painting Services',
    path: '/services',
    image: '/images/services/painted-interior-premium.jpg',
  },
  {
    id: 'waterproofing',
    number: '02',
    label: 'PROTECTION & CARE',
    title: 'Protect Your Home',
    desc: 'Prevent leaks, dampness and moisture damage with reliable waterproofing solutions for your home.',
    buttonText: 'Explore Waterproofing',
    path: '/services/waterproofing',
    image: '/images/services/waterproofing-terrace-premium.jpg',
  },
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
            Explore our professional painting and waterproofing solutions for your home.
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
                  borderRadius: 28, 
                  background: '#122234', 
                  minHeight: 450, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'flex-end', 
                  transition: 'transform 0.35s ease, box-shadow 0.35s ease, opacity 0.4s ease', 
                  opacity: isDimmed ? 0.6 : 1, 
                  transform: isHov ? 'translateY(-6px) scale(1.01)' : 'translateY(0px) scale(1)', 
                  boxShadow: isHov ? '0 24px 60px rgba(0,0,0,0.3)' : '0 8px 30px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div 
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'flex-end', 
                    minHeight: 450, 
                    width: '100%', 
                    position: 'relative', 
                    height: '100%',
                    boxSizing: 'border-box'
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
                      opacity: isHov ? 0.75 : 0.65, 
                      transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease', 
                      transform: isHov ? 'scale(1.04)' : 'scale(1)' 
                    }} 
                  />
                  
                  {/* gradient overlay */}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6, 13, 20, 0.98) 15%, rgba(10, 22, 36, 0.65) 55%, rgba(10, 22, 36, 0.15) 100%)', pointerEvents: 'none' }} />
                  
                  {/* Top-right service number */}
                  <div style={{ 
                    position: 'absolute', 
                    top: 40, 
                    right: 48, 
                    fontSize: 28, 
                    fontWeight: 600, 
                    color: 'rgba(255, 255, 255, 0.12)', 
                    fontFamily: 'monospace',
                    letterSpacing: '1px',
                    pointerEvents: 'none',
                    zIndex: 5
                  }}>
                    {card.number}
                  </div>

                  {/* content */}
                  <div style={{ position: 'relative', zIndex: 10, padding: '40px 48px' }}>
                    {/* Small orange label */}
                    <span style={{ 
                      fontSize: 12, 
                      fontWeight: 700, 
                      textTransform: 'uppercase', 
                      letterSpacing: '2px', 
                      color: 'var(--color-accent)', 
                      marginBottom: 8, 
                      display: 'block' 
                    }}>
                      {card.label}
                    </span>

                    {/* Main heading */}
                    <h3 style={{ 
                      fontSize: 'clamp(24px, 3vw, 32px)', 
                      fontWeight: 700, 
                      color: '#fff', 
                      marginBottom: 10, 
                      lineHeight: 1.2, 
                      transform: isHov ? 'translateY(-3px)' : 'translateY(0)', 
                      transition: 'transform 0.3s ease' 
                    }}>
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p style={{ 
                      fontSize: 15, 
                      color: 'rgba(255, 255, 255, 0.75)', 
                      marginBottom: 0, 
                      maxWidth: 440, 
                      lineHeight: 1.6,
                      transform: isHov ? 'translateY(-2px)' : 'translateY(0)', 
                      transition: 'transform 0.3s ease' 
                    }}>
                      {card.desc}
                    </p>
                  </div>
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
