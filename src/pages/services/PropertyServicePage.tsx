/**
 * pages/services/PropertyServicePage.tsx
 *
 * Shared reusable detail page used by all six property-type pages.
 * Every section's content (services, why-choose points, process steps)
 * comes from the `config` prop — nothing is hardcoded — so each page
 * renders fully unique information.
 *
 * The `variant` field drives per-page visual styling differences
 * (section backgrounds, step card accent treatments, icon tints).
 */

import { m } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import business from '@/config/business';
import { useSEO } from '@/hooks/useSEO';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type PageVariant =
  | 'interior'
  | 'villa'
  | 'apartment'
  | 'commercial'
  | 'residential'
  | 'industrial';

export interface ProcessStep {
  step: string;
  label: string;
  desc: string;
}

export interface PropertyServiceConfig {
  pageTitle: string;
  eyebrow: string;
  heading: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  breadcrumbLabel: string;
  /** What We Offer items */
  services: string[];
  /** Why Choose points — unique per page */
  whyChoosePoints: string[];
  /** One image per whyChoosePoint, displayed inside each card */
  whyImages: string[];
  /** Process steps — unique per page */
  processSteps: ProcessStep[];
  /** Controls section-level visual treatment */
  variant: PageVariant;
}

// ---------------------------------------------------------------------------
// Per-variant theme tokens
// ---------------------------------------------------------------------------

interface VariantTheme {
  offerBg: string;
  offerBorder: string;
  whyBg: string;
  whyCardBg: string;
  processBg: string;
  stepEvenBg: string;
  stepOddBg: string;
  stepEvenText: string;
  stepOddText: string;
  checkBg: string;
  checkText: string;
  badgeBg: string;
  badgeText: string;
}

const VARIANT_THEMES: Record<PageVariant, VariantTheme> = {
  interior: {
    offerBg: '#FFF9F6',
    offerBorder: 'rgba(231,104,75,0.15)',
    whyBg: '#F5F0E8',
    whyCardBg: '#FFFCF8',
    processBg: '#ffffff',
    stepEvenBg: '#FFF4EF',
    stepOddBg: 'linear-gradient(135deg, #0F2236 0%, #1A3A5C 100%)',
    stepEvenText: '#102A43',
    stepOddText: '#ffffff',
    checkBg: 'rgba(231,104,75,0.12)',
    checkText: '#E7684B',
    badgeBg: '#E7684B',
    badgeText: '#ffffff',
  },
  villa: {
    offerBg: '#F6F9F4',
    offerBorder: 'rgba(39,132,90,0.15)',
    whyBg: '#EFF4EC',
    whyCardBg: '#FAFDF8',
    processBg: '#ffffff',
    stepEvenBg: '#EAF3EA',
    stepOddBg: 'linear-gradient(135deg, #1A3D2C 0%, #2E6B4A 100%)',
    stepEvenText: '#1A3D2C',
    stepOddText: '#ffffff',
    checkBg: 'rgba(39,132,90,0.12)',
    checkText: '#27845A',
    badgeBg: '#27845A',
    badgeText: '#ffffff',
  },
  apartment: {
    offerBg: '#F5F6FB',
    offerBorder: 'rgba(66,99,183,0.15)',
    whyBg: '#ECEEF8',
    whyCardBg: '#F8F9FF',
    processBg: '#ffffff',
    stepEvenBg: '#EDF0F9',
    stepOddBg: 'linear-gradient(135deg, #1A2456 0%, #2C3F90 100%)',
    stepEvenText: '#1A2456',
    stepOddText: '#ffffff',
    checkBg: 'rgba(66,99,183,0.12)',
    checkText: '#4263B7',
    badgeBg: '#4263B7',
    badgeText: '#ffffff',
  },
  commercial: {
    offerBg: '#F5F8FA',
    offerBorder: 'rgba(16,42,67,0.12)',
    whyBg: '#EDF1F5',
    whyCardBg: '#F8FAFC',
    processBg: '#ffffff',
    stepEvenBg: '#E8EEF4',
    stepOddBg: 'linear-gradient(135deg, #102A43 0%, #1F4C72 100%)',
    stepEvenText: '#102A43',
    stepOddText: '#ffffff',
    checkBg: 'rgba(16,42,67,0.1)',
    checkText: '#102A43',
    badgeBg: '#102A43',
    badgeText: '#ffffff',
  },
  residential: {
    offerBg: '#FAF7F2',
    offerBorder: 'rgba(200,155,91,0.18)',
    whyBg: '#F4EFE5',
    whyCardBg: '#FDFAF5',
    processBg: '#ffffff',
    stepEvenBg: '#F5EDD8',
    stepOddBg: 'linear-gradient(135deg, #3D2A10 0%, #7A5220 100%)',
    stepEvenText: '#3D2A10',
    stepOddText: '#ffffff',
    checkBg: 'rgba(200,155,91,0.15)',
    checkText: '#A87828',
    badgeBg: '#C89B5B',
    badgeText: '#ffffff',
  },
  industrial: {
    offerBg: '#F3F4F6',
    offerBorder: 'rgba(75,85,99,0.18)',
    whyBg: '#E8EAED',
    whyCardBg: '#F8F9FA',
    processBg: '#ffffff',
    stepEvenBg: '#E3E5E9',
    stepOddBg: 'linear-gradient(135deg, #1C1C2E 0%, #2D2D44 100%)',
    stepEvenText: '#1C1C2E',
    stepOddText: '#ffffff',
    checkBg: 'rgba(75,85,99,0.12)',
    checkText: '#4B5563',
    badgeBg: '#374151',
    badgeText: '#ffffff',
  },
};

// ---------------------------------------------------------------------------
// Framer-motion variants
// ---------------------------------------------------------------------------

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.07 } },
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function PropertyServicePage({ config }: { config: PropertyServiceConfig }) {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = VARIANT_THEMES[config.variant];

  useSEO({
    title: `${config.pageTitle} | South India Painters`,
    description: config.description,
    canonical: `https://southindiapainters.com${location.pathname}`,
    ogImage: config.heroImage.startsWith('http') ? config.heroImage : `https://southindiapainters.com${config.heroImage}`,
  });

  const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    `Hi, I would like to book a free site inspection for ${config.breadcrumbLabel} painting services.`
  )}`;

  const phoneHref = `tel:${business.phone.replace(/\s/g, '')}`;

  return (
    <main style={{ width: '100%', overflowX: 'clip', background: 'var(--color-background)' }}>

      {/* ------------------------------------------------------------------ */}
      {/* HERO                                                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative w-full min-h-[520px] lg:min-h-[620px] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img
            src={config.heroImage}
            alt={config.heroImageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(9,35,57,0.92)] via-[rgba(9,35,57,0.55)] to-[rgba(9,35,57,0.20)]" />
        </div>

        <div className="absolute top-7 left-6 z-10 sm:left-10">
  <button
    type="button"
    onClick={() => navigate(-1)}
    className="inline-flex items-center rounded-full shadow-md"
    style={{
      backgroundColor: '#E7684B',
      color: '#ffffff',
      padding: '7px 14px',
      minHeight: '34px',
      minWidth: '70px',
      gap: '5px',
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: 1,
      border: 'none',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
    }}
  >
    <ArrowLeft
      style={{
        width: '14px',
        height: '14px',
        flexShrink: 0,
      }}
    />
    <span>Back</span>
  </button>
</div>

        {/* Hero text */}
        <div className="relative z-10 w-full" style={{ padding: '80px var(--container-padding) 56px' }}>
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            <m.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--color-accent)', marginBottom: 14 }}
            >
              {config.eyebrow}
            </m.p>
            <m.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
              style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 800, lineHeight: 1.08, color: '#fff', marginBottom: 20, letterSpacing: '-0.02em' }}
            >
              {config.heading}
            </m.h1>
            <m.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
              style={{ fontSize: 17, color: '#c8d8e4', lineHeight: 1.7, maxWidth: 660 }}
            >
              {config.description}
            </m.p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* WHAT WE OFFER                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section style={{ background: theme.offerBg, padding: 'clamp(56px,8vw,96px) var(--container-padding)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <m.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '3px', color: theme.checkText, marginBottom: 12 }}
            >
              OUR SERVICES
            </m.p>
            <m.h2
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: 'clamp(26px,3.5vw,42px)', fontWeight: 800, color: 'var(--color-primary)', marginBottom: 48, letterSpacing: '-0.01em', lineHeight: 1.15 }}
            >
              What We Offer
            </m.h2>

            <m.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
                gap: 20,
              }}
            >
              {config.services.map((service) => (
                <m.div
                  key={service}
                  variants={fadeUp}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 14,
                    background: '#ffffff',
                    border: `1px solid ${theme.offerBorder}`,
                    borderRadius: 16,
                    padding: '18px 20px',
                    boxShadow: '0 2px 12px rgba(16,42,67,0.05)',
                  }}
                >
                  <CheckCircle2
                    style={{ width: 20, height: 20, color: theme.checkText, flexShrink: 0, marginTop: 2 }}
                  />
                  <span style={{ fontSize: 15, fontWeight: 500, color: 'var(--color-text)', lineHeight: 1.5 }}>
                    {service}
                  </span>
                </m.div>
              ))}
            </m.div>
          </m.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* WHY CHOOSE US                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section style={{ background: theme.whyBg, padding: 'clamp(56px,8vw,96px) var(--container-padding)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            <m.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '3px', color: theme.checkText, marginBottom: 12 }}
            >
              WHY US
            </m.p>
            <m.h2
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: 'clamp(26px,3.5vw,42px)', fontWeight: 800, color: 'var(--color-primary)', marginBottom: 48, letterSpacing: '-0.01em', lineHeight: 1.15 }}
            >
              Why Choose South India Painters?
            </m.h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
              gap: 16,
            }}>
              {config.whyChoosePoints.map((point, i) => (
                <m.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                    background: theme.whyCardBg,
                    borderRadius: 14,
                    padding: '16px 18px',
                    boxShadow: '0 2px 10px rgba(16,42,67,0.06)',
                    border: '1px solid rgba(16,42,67,0.06)',
                  }}
                >
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: theme.checkBg,
                    color: theme.checkText,
                    fontWeight: 700,
                    fontSize: 13,
                    flexShrink: 0,
                    marginTop: 1,
                  }}>
                    ✓
                  </span>
                  <span style={{ fontSize: 14, color: 'var(--color-text)', lineHeight: 1.55 }}>{point}</span>
                </m.div>
              ))}
            </div>
          </m.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* IMAGE GALLERY (between Why Choose and Our Process)                  */}
      {/* ------------------------------------------------------------------ */}
      {config.whyImages && config.whyImages.length > 0 && (
        <section style={{ background: theme.offerBg, padding: 'clamp(40px,6vw,72px) var(--container-padding)' }}>
          <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {config.whyImages.map((imgSrc, i) => (
                <m.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
                  style={{
                    borderRadius: 14,
                    overflow: 'hidden',
                    aspectRatio: '4/3',
                  }}
                >
                  <img
                    src={imgSrc}
                    alt=""
                    aria-hidden="true"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.06)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
                  />
                </m.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* OUR PROCESS                                                         */}
      {/* ------------------------------------------------------------------ */}
      <section style={{ background: theme.processBg, padding: 'clamp(56px,8vw,96px) var(--container-padding)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <m.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '3px', color: theme.checkText, marginBottom: 12 }}
          >
            HOW WE WORK
          </m.p>
          <m.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: 'clamp(26px,3.5vw,42px)', fontWeight: 800, color: 'var(--color-primary)', marginBottom: 56, letterSpacing: '-0.01em', lineHeight: 1.15 }}
          >
            Our Process
          </m.h2>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${config.processSteps.length} gap-3`}
          >
            {config.processSteps.map((ps, i) => {
              const isEven = i % 2 === 0;
              return (
                <m.div
                  key={ps.step}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '32px 20px',
                    borderRadius: 20,
                    background: isEven ? theme.stepEvenBg : theme.stepOddBg,
                    border: isEven ? `1px solid rgba(16,42,67,0.08)` : 'none',
                    boxShadow: isEven ? '0 2px 12px rgba(16,42,67,0.06)' : '0 8px 32px rgba(16,42,67,0.18)',
                  }}
                >
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: isEven ? theme.badgeBg : `${theme.badgeBg}33`,
                    color: isEven ? theme.badgeText : theme.badgeBg,
                    fontWeight: 800,
                    fontSize: 15,
                    marginBottom: 16,
                  }}>
                    {ps.step}
                  </span>
                  <h3 style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: isEven ? theme.stepEvenText : theme.stepOddText,
                    marginBottom: 6,
                  }}>
                    {ps.label}
                  </h3>
                  <p style={{
                    fontSize: 13,
                    color: isEven ? 'var(--color-text-muted)' : '#8daec8',
                    lineHeight: 1.5,
                  }}>
                    {ps.desc}
                  </p>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CTA                                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section style={{ background: theme.whyBg, padding: 'clamp(56px,8vw,96px) var(--container-padding)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <m.div
            initial={{ opacity: 0, y: 32 }}
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
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute', width: 600, height: 600,
              background: 'radial-gradient(circle, rgba(231,104,75,0.08) 0%, transparent 70%)',
              top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              borderRadius: '50%', pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative', zIndex: 10, maxWidth: 660 }}>
              <m.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--color-accent)', marginBottom: 18 }}
              >
                GET STARTED TODAY
              </m.p>
              <m.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
                style={{ fontSize: 'clamp(28px, 4.5vw, 52px)', fontWeight: 700, lineHeight: 1.1, color: '#fff', marginBottom: 16 }}
              >
                Book a Free Site Inspection
              </m.h2>
              <m.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
                style={{ fontSize: 16, color: '#b4c4d3', lineHeight: 1.7, marginBottom: 40, maxWidth: 520, margin: '0 auto 40px' }}
              >
                Let our team visit your site, assess your requirements and provide a transparent, no-obligation quote — completely free.
              </m.p>

              <m.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.24 }}
                style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}
              >
                <Link
                  to="/contact"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    padding: '0 32px', height: 58, borderRadius: 999,
                    background: 'var(--color-accent)', color: '#fff',
                    fontSize: 14, fontWeight: 600, textDecoration: 'none',
                    textTransform: 'uppercase', letterSpacing: '1px',
                    transition: 'all 0.25s ease',
                    boxShadow: '0 8px 24px rgba(231,104,75,0.3)',
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => { const el = e.currentTarget as HTMLElement; el.style.background = '#CF5538'; el.style.transform = 'translateY(-3px)'; el.style.boxShadow = '0 12px 32px rgba(231,104,75,0.45)'; }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--color-accent)'; el.style.transform = ''; el.style.boxShadow = '0 8px 24px rgba(231,104,75,0.3)'; }}
                >
                  Book a Free Site Inspection
                  <ArrowRight style={{ width: 16, height: 16 }} />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    padding: '0 28px', height: 58, borderRadius: 999,
                    background: 'rgba(37,211,102,0.12)', color: '#4cde87',
                    fontSize: 14, fontWeight: 600, textDecoration: 'none',
                    textTransform: 'uppercase', letterSpacing: '1px',
                    border: '1px solid rgba(37,211,102,0.25)',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(37,211,102,0.2)'; el.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(37,211,102,0.12)'; el.style.transform = ''; }}
                >
                  <MessageCircle style={{ width: 18, height: 18 }} />
                  WhatsApp Us
                </a>

                <a
                  href={phoneHref}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    padding: '0 28px', height: 58, borderRadius: 999,
                    background: 'rgba(255,255,255,0.08)', color: '#fff',
                    fontSize: 14, fontWeight: 600, textDecoration: 'none',
                    textTransform: 'uppercase', letterSpacing: '1px',
                    border: '1px solid rgba(255,255,255,0.18)',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(255,255,255,0.15)'; el.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(255,255,255,0.08)'; el.style.transform = ''; }}
                >
                  <Phone style={{ width: 16, height: 16 }} />
                  {business.phone}
                </a>
              </m.div>
            </div>
          </m.div>
        </div>
      </section>

    </main>
  );
}
