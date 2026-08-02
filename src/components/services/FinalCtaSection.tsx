import { m } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FinalCtaSection() {
  return (
    <section style={{ background: 'var(--color-surface)', padding: '0 0 90px' }}>
      <div style={{ width: 'min(1400px, calc(100% - 64px))', margin: '0 auto' }}>
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: 'linear-gradient(135deg, #0F2236 0%, #1A3A5C 100%)',
            borderRadius: 32,
            padding: 'clamp(48px, 8vw, 90px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative glow */}
          <div style={{ position: 'absolute', width: 600, height: 600, background: 'radial-gradient(circle, rgba(231,104,75,0.08) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '50%', pointerEvents: 'none' }} />
          {/* Decorative rings */}
          <div style={{ position: 'absolute', inset: 0, borderRadius: 32, background: 'linear-gradient(135deg, rgba(231,104,75,0.05), transparent 60%)', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 10, maxWidth: 660 }}>
            <m.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--color-accent)', marginBottom: 18 }}
            >
              LET'S GET STARTED
            </m.p>
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              style={{ fontSize: 'clamp(32px, 4.5vw, 58px)', fontWeight: 700, lineHeight: 1.1, color: '#fff', marginBottom: 20 }}
            >
              Ready to Transform <br />
              <span style={{ color: 'var(--color-accent)' }}>Your Space?</span>
            </m.h2>
            <m.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
              style={{ fontSize: 16, color: '#b4c4d3', lineHeight: 1.7, marginBottom: 36, maxWidth: 520, margin: '0 auto 36px' }}
            >
              Book a free site visit today and let our professionals help you plan your next painting, waterproofing or finishing project.
            </m.p>
            <m.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
            >
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  padding: '0 32px', height: 58, borderRadius: 999,
                  background: 'var(--color-accent)', color: '#fff',
                  fontSize: 14, fontWeight: 600, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '1px',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 8px 24px rgba(231,104,75,0.3)',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#CF5538'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(231,104,75,0.45)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--color-accent)'; (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(231,104,75,0.3)'; }}
              >
                BOOK A FREE SITE VISIT
                <ArrowRight style={{ width: 16, height: 16 }} />
              </Link>
              <Link
                to="/services"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  padding: '0 32px', height: 58, borderRadius: 999,
                  background: 'rgba(255,255,255,0.08)', color: '#fff',
                  fontSize: 14, fontWeight: 600, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '1px',
                  border: '1px solid rgba(255,255,255,0.18)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.15)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLElement).style.transform = ''; }}
              >
                Explore Our Services
              </Link>
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
