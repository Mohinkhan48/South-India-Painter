import { useState } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const serviceOptions = [
  'Interior Painting',
  'Exterior Painting',
  'Waterproofing',
  'Wall Textures',
  'Wallpaper',
  'Commercial Painting',
];

export default function BookSiteVisitSection() {
  const shouldReduceMotion = useReducedMotion();
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const ease = [0.16, 1, 0.3, 1] as const;

  const toggleService = (name: string) => {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(name)) {
        next.delete(name);
      } else {
        next.add(name);
      }
      return next;
    });
  };

  return (
    <section
      style={{ background: 'var(--color-surface)', padding: '80px 0 100px' }}
    >
      {/* Centered 1400px container */}
      <div style={{ width: 'min(1400px, calc(100% - 64px))', margin: '0 auto' }}>
        {/* The split card */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            minHeight: 600,
            borderRadius: 28,
            overflow: 'hidden',
            background: '#fff',
            border: '1px solid rgba(16,42,67,0.08)',
            boxShadow: '0 12px 60px rgba(16,42,67,0.09)',
          }}
          className="site-visit-card"
        >
          {/* ===== LEFT: image ===== */}
          <div style={{ position: 'relative', minHeight: 380, overflow: 'hidden' }}>
            <m.img
              src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1200&q=85"
              alt="Green-toned living room interior"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              initial={{ scale: shouldReduceMotion ? 1 : 1.05 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.9, ease }}
            />
            {/* Dark overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(8,20,38,0.52), rgba(8,20,38,0.38) 50%, rgba(8,20,38,0.58))' }} />

            {/* Text */}
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(36px, 6vw, 72px)', zIndex: 10, maxWidth: 520 }}>
              <m.h2
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.75, ease, delay: 0.15 }}
                style={{ color: '#fff', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.01em', fontSize: 'clamp(30px, 4vw, 52px)' }}
              >
                UNLOCK BETTER<br />
                SPACES WITH A<br />
                FREE SITE VISIT
              </m.h2>
              <m.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease, delay: 0.35 }}
                style={{ marginTop: 24, height: 3, width: 56, background: 'var(--color-accent)', transformOrigin: 'left' }}
              />
            </div>
          </div>

          {/* ===== RIGHT: form ===== */}
          <m.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease, delay: 0.1 }}
            style={{ background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(36px, 4vw, 64px)', overflowY: 'auto' }}
          >
            <div style={{ width: '100%', maxWidth: 480 }}>
              {/* Heading */}
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--color-accent)', marginBottom: 10 }}>
                FREE CONSULTATION
              </p>
              <h3 style={{ fontSize: 26, fontWeight: 700, color: 'var(--color-primary-dark)', lineHeight: 1.1, marginBottom: 8 }}>
                Book Site Visit
              </h3>
              <p style={{ fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.55, marginBottom: 24 }}>
                Get a detailed Site Inspection and project consultation{' '}
                <span style={{ color: 'var(--color-accent)', fontWeight: 500 }}>from our team.</span>
              </p>

              {/* Form */}
              <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {/* Name */}
                <FieldInput label="Full Name" type="text" placeholder="Your full name" />

                {/* Phone */}
                <div>
                  <label style={labelStyle}>Phone Number</label>
                  <div style={{ display: 'flex' }}>
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 14px', background: '#F5F4F0', border: '1px solid rgba(16,42,67,0.12)', borderRight: 'none', borderRadius: '11px 0 0 11px', fontSize: 13, fontWeight: 500, color: 'var(--color-primary-dark)', flexShrink: 0, userSelect: 'none' }}>
                      +91
                    </span>
                    <input type="tel" placeholder="Phone number" style={{ ...inputStyle, borderRadius: '0 11px 11px 0', flex: 1 }} />
                  </div>
                </div>

                {/* Email */}
                <FieldInput label="Email ID (Optional)" type="email" placeholder="you@example.com" />

                {/* City */}
                <FieldInput label="City" type="text" placeholder="e.g. Bangalore" />

                {/* Service Type */}
                <div>
                  <label style={labelStyle}>Service Type</label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: '10px 20px', marginTop: 8 }}>
                    {serviceOptions.map(opt => {
                      const checked = selected.has(opt);
                      return (
                        <label key={opt} onClick={() => toggleService(opt)} style={{ display: 'flex', alignItems: 'center', gap: 9, cursor: 'pointer' }}>
                          <span style={{ flexShrink: 0, width: 18, height: 18, borderRadius: 5, border: `1.5px solid ${checked ? 'var(--color-accent)' : 'rgba(16,42,67,0.22)'}`, background: checked ? 'var(--color-accent)' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
                            {checked && (
                              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </span>
                          <span style={{ fontSize: 13, fontWeight: 500, color: checked ? 'var(--color-accent)' : 'var(--color-primary-dark)', lineHeight: 1.3, transition: 'color 0.2s' }}>
                            {opt}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Consent */}
                <p style={{ fontSize: 11, color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  By booking a consultation, you agree to our{' '}
                  <a href="/terms" style={{ textDecoration: 'underline' }}>Terms &amp; Conditions.</a>
                </p>

                {/* CTA */}
                <button
                  type="submit"
                  style={{ width: '100%', minHeight: 54, marginTop: 8, background: 'var(--color-accent)', color: '#fff', border: 'none', borderRadius: 10, fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.2px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, transition: 'background 0.25s, transform 0.25s, box-shadow 0.25s' }}
                  className="group"
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#cf5538'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 20px rgba(231,104,75,0.28)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-accent)'; (e.currentTarget as HTMLButtonElement).style.transform = ''; (e.currentTarget as HTMLButtonElement).style.boxShadow = ''; }}
                >
                  BOOK SITE INSPECTION
                  <ArrowRight style={{ width: 16, height: 16 }} />
                </button>
              </form>
            </div>
          </m.div>
        </div>
      </div>

      {/* Responsive: stack below 900px */}
      <style>{`
        @media (max-width: 900px) {
          .site-visit-card {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .site-visit-card > div:first-child {
            min-height: 320px !important;
          }
        }
      `}</style>
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 11,
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.6px',
  color: 'var(--color-text-muted)',
  marginBottom: 6,
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  height: 52,
  background: '#fff',
  border: '1px solid rgba(16,42,67,0.12)',
  borderRadius: 11,
  padding: '0 16px',
  fontSize: 14,
  color: 'var(--color-primary-dark)',
  outline: 'none',
  boxSizing: 'border-box',
};

function FieldInput({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        style={inputStyle}
        onFocus={e => { e.currentTarget.style.borderColor = 'var(--color-accent)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(231,104,75,0.12)'; }}
        onBlur={e => { e.currentTarget.style.borderColor = 'rgba(16,42,67,0.12)'; e.currentTarget.style.boxShadow = ''; }}
      />
    </div>
  );
}
