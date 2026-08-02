import { m } from 'framer-motion';

const brands = [
  { shortName: 'ASIAN PAINTS' },
  { shortName: 'BERGER' },
  { shortName: 'DULUX' },
  { shortName: 'NEROLAC' },
  { shortName: 'INDIGO PAINTS' },
  { shortName: 'NIPPON PAINT' },
];

const row1 = [...brands, ...brands, ...brands];
const row2 = [...brands, ...brands, ...brands].reverse();

function BrandPill({ name }: { name: string }) {
  return (
    <div
      style={{
        flexShrink: 0,
        height: 64,
        padding: '0 28px',
        borderRadius: 999,
        border: '1px solid rgba(15,42,65,0.10)',
        background: 'rgba(255,255,255,0.78)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 10px',
        cursor: 'default',
        transition: 'all 0.25s',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(231,104,75,0.35)';
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(16,42,67,0.09)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(15,42,65,0.10)';
        (e.currentTarget as HTMLElement).style.transform = '';
        (e.currentTarget as HTMLElement).style.boxShadow = '';
      }}
    >
      <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(15,42,65,0.42)', whiteSpace: 'nowrap', transition: 'color 0.25s' }}>
        {name}
      </span>
    </div>
  );
}

export default function TrustedMaterialsSection() {
  return (
    <section style={{ background: 'var(--color-surface)', paddingTop: 75, paddingBottom: 90, overflow: 'hidden' }}>
      {/* Heading */}
      <div style={{ width: 'min(1400px, calc(100% - 64px))', margin: '0 auto', textAlign: 'center', marginBottom: 48 }}>
        <m.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--color-accent)', marginBottom: 14 }}
        >
          MATERIALS WE TRUST
        </m.p>
        <m.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, lineHeight: 1.15, color: 'var(--color-primary-dark)' }}
        >
          Quality finishes begin with quality materials.
        </m.h2>
      </div>

      {/* Marquee rows — full width, fade masks */}
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ position: 'absolute', inset: '0 0 0 0', top: 0, left: 0, width: '8%', background: 'linear-gradient(to right, var(--color-surface), transparent)', zIndex: 10, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: '0 0 0 0', top: 0, right: 0, left: 'auto', width: '8%', background: 'linear-gradient(to left, var(--color-surface), transparent)', zIndex: 10, pointerEvents: 'none' }} />

        {/* Row 1 — slides left */}
        <div
          style={{ display: 'flex', alignItems: 'center', width: 'max-content', animation: 'marquee-slide 38s linear infinite' }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.animationPlayState = 'paused'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.animationPlayState = 'running'}
        >
          {row1.map((b, i) => <BrandPill key={`r1a-${i}`} name={b.shortName} />)}
          {row1.map((b, i) => <BrandPill key={`r1b-${i}`} name={b.shortName} />)}
        </div>

        {/* Row 2 — slides right */}
        <div
          style={{ display: 'flex', alignItems: 'center', width: 'max-content', animation: 'marquee-slide-reverse 42s linear infinite' }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.animationPlayState = 'paused'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.animationPlayState = 'running'}
        >
          {row2.map((b, i) => <BrandPill key={`r2a-${i}`} name={b.shortName} />)}
          {row2.map((b, i) => <BrandPill key={`r2b-${i}`} name={b.shortName} />)}
        </div>
      </div>

      <div style={{ width: 'min(1400px, calc(100% - 64px))', margin: '0 auto', textAlign: 'center', marginTop: 36 }}>
        <m.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ fontSize: 13, color: 'var(--color-text-muted)' }}
        >
          Brands we work with on residential, commercial and large-scale projects.
        </m.p>
      </div>
    </section>
  );
}
