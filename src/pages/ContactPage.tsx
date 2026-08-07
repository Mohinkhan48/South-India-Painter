/**
 * ContactPage.tsx
 *
 * Structurally Polished Contact Us page for South India Painter.
 * Retains all 9 original sections but applies a strict, premium layout:
 * - Equal card heights
 * - Generous and consistent section padding (py-24)
 * - Unified card for the map
 * - 6 cards (3x2 grid) for "Why Choose Us" to avoid orphans
 */

import { useState, useRef } from 'react';
import { m, useInView, type Variants } from 'framer-motion';

// ---------------------------------------------------------------------------
// Animation Variants
// ---------------------------------------------------------------------------

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

// ---------------------------------------------------------------------------
// Data Constants
// ---------------------------------------------------------------------------

const WHATSAPP_NUM = '919740556799';
const PHONE_1 = '+91 9740556799';
const PHONE_2 = '+91 8023391256';
const PHONE_2_RAW = '918023391256';
const EMAIL = 'hello@southindiapainter.com';
const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.163353457007!2d77.53127811482187!3d12.961395890862757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dd84e20b329%3A0xc48c1ea99fb0a241!2sChandra%20Layout%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1689255018612!5m2!1sen!2sin';
const MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=No.+35,+1st+Stage,+2nd+Phase,+Near+Chandra+Layout+Bus+Depot,+Vijayanagar,+Bangalore+-+560040';

const services = [
  { icon: '🎨', title: 'Interior Painting', desc: 'Premium interior finishes for every room' },
  { icon: '🏠', title: 'Exterior Painting', desc: 'Weather-resistant coatings for lasting beauty' },
  { icon: '🖌️', title: 'Texture Painting', desc: 'Artistic textures that transform any wall' },
  { icon: '💧', title: 'Waterproofing', desc: 'Long-lasting protection against moisture' },
  { icon: '🪵', title: 'Wood Coating', desc: 'Expert finishes for all wooden surfaces' },
  { icon: '🏢', title: 'Commercial Painting', desc: 'Professional solutions for offices & retail' },
  { icon: '🏡', title: 'Villa Painting', desc: 'Luxury painting for premium villas' },
  { icon: '🏗️', title: 'Apartment Painting', desc: 'Efficient, clean painting for apartments' },
];

const whyCards = [
  { icon: '🔍', title: 'Free Site Inspection', desc: 'We visit your property at no cost and assess every detail before quoting.' },
  { icon: '🎨', title: 'Expert Consultation', desc: 'Our colour experts help you choose the perfect palette for your space.' },
  { icon: '📋', title: 'Transparent Pricing', desc: 'No hidden charges — clear, itemised quotes so you know exactly what you pay for.' },
  { icon: '✨', title: 'Premium Materials', desc: 'We use only top-grade paints from Asian Paints, Berger, and Dulux.' },
  { icon: '⏰', title: 'On-Time Delivery', desc: 'We respect your time — strict timelines and milestone-based project tracking.' },
  { icon: '🛡️', title: 'Warranty Support', desc: 'Backed by a comprehensive warranty for complete peace of mind.' },
];

const faqs = [
  {
    q: 'How much does painting cost?',
    a: 'Painting costs vary based on the area (sq. ft.), surface condition, type of paint, and finish selected. As a general guide, interior painting starts from ₹12 per sq. ft. for basic emulsions and goes up to ₹30+ per sq. ft. for premium textures. We provide a free site inspection and a detailed, transparent quotation before any work begins.',
  },
  {
    q: 'Do you provide free site inspection?',
    a: 'Yes, absolutely! We offer a completely free site inspection anywhere across South India. Our team will visit your property, assess the surfaces, understand your requirements, and provide a precise quotation — all at zero cost and with no obligation.',
  },
  {
    q: 'Which paint brands do you use?',
    a: 'We work with all leading brands including Asian Paints Royale, Berger Silk, Dulux Velvet Touch, Nerolac Excel, and Nippon Paint. We recommend the best brand and product based on your surface type, environment, and budget — always prioritising long-lasting quality.',
  },
  {
    q: 'How long does painting take?',
    a: 'Timeline depends on the scope of work. A standard 2BHK apartment (approx. 1,000 sq. ft.) typically takes 3–5 days for interior painting. Larger villas or exterior projects may take 7–14 days. We provide a detailed project schedule at the time of quotation and stick to committed timelines.',
  },
  {
    q: 'Do you offer warranty?',
    a: "Yes. We provide a service warranty on our workmanship — typically 1 year. This is in addition to the paint manufacturer's product warranty (which can range from 5–15 years depending on the product). Any defects related to our application are rectified free of charge within the warranty period.",
  },
  {
    q: 'Can I book online?',
    a: 'Yes! You can book a free site inspection directly through our website using the contact form above, or by clicking "Book Free Site Visit" on the hero section. You can also reach us instantly via WhatsApp or call us on +91 9740556799 / +91 8023391256.',
  },
];

// ---------------------------------------------------------------------------
// Shared UI Components
// ---------------------------------------------------------------------------

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <m.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={stagger} className={className}>
      {children}
    </m.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <AnimatedSection className="text-center mb-16 flex flex-col items-center">
      <m.span
        variants={fadeUp}
        className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5 ${
          light ? 'bg-white/10 text-white border border-white/20' : 'bg-[#F26A3D]/10 text-[#F26A3D] border border-[#F26A3D]/20'
        }`}
      >
        <span className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-white' : 'bg-[#F26A3D]'}`} />
        {eyebrow}
      </m.span>
      <m.h2
        variants={fadeUp}
        className={`text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight mb-5 max-w-3xl ${
          light ? 'text-white' : 'text-[#132B4A]'
        }`}
      >
        {title}
      </m.h2>
      {subtitle && (
        <m.p
          variants={fadeUp}
          className={`text-[17px] leading-relaxed max-w-2xl ${light ? 'text-white/70' : 'text-[#5E6872]'}`}
        >
          {subtitle}
        </m.p>
      )}
    </AnimatedSection>
  );
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#E8E4DD] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
      >
        <span className={`text-base font-semibold transition-colors duration-200 ${open ? 'text-[#F26A3D]' : 'text-[#132B4A] group-hover:text-[#F26A3D]'}`}>
          {q}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border ${
            open ? 'bg-[#F26A3D] border-[#F26A3D] text-white rotate-45' : 'bg-transparent border-[#CCC9C3] text-[#132B4A]/50 group-hover:border-[#F26A3D] group-hover:text-[#F26A3D]'
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="7" y1="2" x2="7" y2="12" />
            <line x1="2" y1="7" x2="12" y2="7" />
          </svg>
        </span>
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="text-[15px] text-[#5E6872] leading-relaxed pr-8">{a}</p>
        </div>
      </div>
    </div>
  );
}

const inputClass =
  'w-full px-4 py-3 bg-[#FAFAF8] border border-[#E8E4DD] rounded-xl text-[#132B4A] placeholder:text-[#A9B3BC] text-[15px] focus:outline-none focus:ring-2 focus:ring-[#F26A3D]/30 focus:border-[#F26A3D] transition-all duration-200 hover:border-[#132B4A]/30';

// ---------------------------------------------------------------------------
// Main Page
// ---------------------------------------------------------------------------

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', city: '', propertyType: '', service: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Required';
    if (!formData.phone.trim()) errs.phone = 'Required';
    else if (!/^\+?[\d\s\-]{8,15}$/.test(formData.phone)) errs.phone = 'Invalid phone';
    if (!formData.city.trim()) errs.city = 'Required';
    if (!formData.service) errs.service = 'Required';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1500);
  };

  return (
    <div className="font-sans text-[#132B4A] bg-[#FAF8F4] overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#0a1828]" aria-label="Contact hero">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/contact-hero.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#132B4A]/80 via-[#132B4A]/60 to-[#0a1828]/95" />
        
        <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center">
          <m.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col items-center">
            <m.span variants={fadeUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold uppercase tracking-[0.2em] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F26A3D] animate-pulse" />
              Contact Us
            </m.span>

            <m.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black text-white leading-[1.05] tracking-tight mb-6">
              {"Let's Bring Your "}
              <span className="text-[#F26A3D]">Dream Home</span>
              <br />to Life
            </m.h1>

            <m.p variants={fadeUp} className="text-[17px] md:text-[19px] text-white/70 max-w-2xl leading-relaxed mb-10">
              Talk to our painting experts and schedule a free site inspection anywhere in South India.
            </m.p>

            <m.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a href="#contact-form" className="inline-flex items-center gap-2.5 px-9 py-4 bg-[#F26A3D] hover:bg-[#d4572f] text-white font-bold text-[15px] rounded-full shadow-[0_8px_24px_rgba(242,106,61,0.4)] hover:shadow-[0_12px_32px_rgba(242,106,61,0.55)] hover:scale-105 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Book Free Site Visit
              </a>
              <a href={`tel:${PHONE_2_RAW}`} className="inline-flex items-center gap-2.5 px-9 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold text-[15px] rounded-full border border-white/30 hover:border-white/50 hover:scale-105 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call Now · {PHONE_2}
              </a>
            </m.div>
          </m.div>
        </div>
      </section>

      {/* 2. CONTACT INFO CARDS */}
      <section className="py-24 bg-[#F7F4F0]" aria-label="Contact information">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading eyebrow="Get In Touch" title="How to Reach Us" subtitle="Four easy ways to connect with our painting experts." />
          
          <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <m.div variants={fadeUp} className="group bg-white rounded-[24px] p-8 border border-[#E8E4DD] shadow-[0_4px_24px_rgba(19,43,74,0.04)] hover:shadow-[0_16px_48px_rgba(19,43,74,0.08)] transition-all duration-300 h-full flex flex-col relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F26A3D] to-[#F8A67A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-12 h-12 rounded-xl bg-[#132B4A] flex items-center justify-center text-white mb-6 flex-shrink-0"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
              <h3 className="text-[13px] font-bold text-[#132B4A]/50 uppercase tracking-[0.13em] mb-2">Office Address</h3>
              <address className="not-italic text-[15px] text-[#132B4A] leading-relaxed flex-grow">
                No. 35, 1st Stage, 2nd Phase,<br />Near Chandra Layout Bus Depot,<br />Vijayanagar, Bangalore,<br /><span className="font-semibold">Karnataka – 560040</span>
              </address>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="mt-6 text-[#F26A3D] text-[13px] font-bold hover:underline inline-flex items-center gap-1">Open in Maps →</a>
            </m.div>

            <m.div variants={fadeUp} className="group bg-white rounded-[24px] p-8 border border-[#E8E4DD] shadow-[0_4px_24px_rgba(19,43,74,0.04)] hover:shadow-[0_16px_48px_rgba(19,43,74,0.08)] transition-all duration-300 h-full flex flex-col relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F26A3D] to-[#F8A67A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-12 h-12 rounded-xl bg-[#132B4A] flex items-center justify-center text-white mb-6 flex-shrink-0"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div>
              <h3 className="text-[13px] font-bold text-[#132B4A]/50 uppercase tracking-[0.13em] mb-2">Phone Numbers</h3>
              <div className="flex-grow flex flex-col gap-1.5">
                <a href="tel:+919740556799" className="text-[16px] font-bold text-[#132B4A] hover:text-[#F26A3D] transition-colors">{PHONE_1}</a>
                <a href={`tel:${PHONE_2_RAW}`} className="text-[16px] font-bold text-[#132B4A] hover:text-[#F26A3D] transition-colors">{PHONE_2}</a>
              </div>
              <p className="mt-6 text-[13px] text-[#8a96a3]">Mon – Sat, 9 AM – 7 PM</p>
            </m.div>

            <m.div variants={fadeUp} className="group bg-white rounded-[24px] p-8 border border-[#E8E4DD] shadow-[0_4px_24px_rgba(19,43,74,0.04)] hover:shadow-[0_16px_48px_rgba(19,43,74,0.08)] transition-all duration-300 h-full flex flex-col relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F26A3D] to-[#F8A67A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-12 h-12 rounded-xl bg-[#132B4A] flex items-center justify-center text-white mb-6 flex-shrink-0"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
              <h3 className="text-[13px] font-bold text-[#132B4A]/50 uppercase tracking-[0.13em] mb-2">Email Address</h3>
              <a href={`mailto:${EMAIL}`} className="text-[15px] font-bold text-[#132B4A] hover:text-[#F26A3D] transition-colors break-all flex-grow">{EMAIL}</a>
              <p className="mt-6 text-[13px] text-[#8a96a3]">We reply within 24 hours</p>
            </m.div>

            <m.div variants={fadeUp} className="group bg-white rounded-[24px] p-8 border border-[#E8E4DD] shadow-[0_4px_24px_rgba(19,43,74,0.04)] hover:shadow-[0_16px_48px_rgba(19,43,74,0.08)] transition-all duration-300 h-full flex flex-col relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F26A3D] to-[#F8A67A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-12 h-12 rounded-xl bg-[#132B4A] flex items-center justify-center text-white mb-6 flex-shrink-0"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
              <h3 className="text-[13px] font-bold text-[#132B4A]/50 uppercase tracking-[0.13em] mb-2">Working Hours</h3>
              <div className="flex-grow flex flex-col gap-4">
                <div>
                  <p className="text-[13px] text-[#8a96a3] font-semibold mb-0.5">Monday – Saturday</p>
                  <p className="text-[15px] font-bold text-[#132B4A]">9:00 AM – 7:00 PM</p>
                </div>
                <div>
                  <p className="text-[13px] text-[#8a96a3] font-semibold mb-0.5">Sunday</p>
                  <p className="text-[15px] font-bold text-[#9aa5b0]">Closed</p>
                </div>
              </div>
            </m.div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. CONTACT FORM */}
      <section id="contact-form" className="py-24 bg-white" aria-label="Book free site visit">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading eyebrow="Book Now" title="Get a Free Inspection" subtitle="Fill in your details and our expert will reach out within 2 hours to confirm your visit." />
          
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-start">
            <AnimatedSection>
              <h3 className="text-2xl font-extrabold text-[#132B4A] leading-snug mb-4">Why book a free<br />inspection with us?</h3>
              <p className="text-[16px] text-[#5E6872] leading-relaxed mb-8">
                Our site visit is completely free, with zero pressure or commitment. We assess your property, understand your vision, and present a detailed itemised quotation before any work begins.
              </p>
              <ul className="flex flex-col gap-4 mb-10">
                {[
                  '100% free — no hidden charges',
                  'Expert visits within 24–48 hours',
                  'Personalised colour consultation',
                  'Transparent, itemised quotation',
                  'No obligation — just honest advice'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[15px] text-[#132B4A] font-medium">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F26A3D]/10 flex items-center justify-center mt-0.5"><svg className="w-4 h-4 text-[#F26A3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center gap-6 pt-6 border-t border-[#E8E4DD]">
                <div className="text-center">
                  <p className="text-2xl font-black text-[#132B4A]">500+</p>
                  <p className="text-[11px] text-[#8a96a3] font-bold uppercase tracking-wider mt-1">Projects</p>
                </div>
                <div className="w-px h-10 bg-[#E8E4DD]" />
                <div className="text-center">
                  <p className="text-2xl font-black text-[#132B4A]">4.9★</p>
                  <p className="text-[11px] text-[#8a96a3] font-bold uppercase tracking-wider mt-1">Rating</p>
                </div>
                <div className="w-px h-10 bg-[#E8E4DD]" />
                <div className="text-center">
                  <p className="text-2xl font-black text-[#132B4A]">10+</p>
                  <p className="text-[11px] text-[#8a96a3] font-bold uppercase tracking-wider mt-1">Years</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-white rounded-[32px] border border-[#E8E4DD] shadow-[0_20px_60px_rgba(19,43,74,0.08)] p-8 sm:p-10">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6"><svg className="w-10 h-10 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></div>
                    <h3 className="text-[22px] font-extrabold text-[#132B4A] mb-3">Request Received!</h3>
                    <p className="text-[16px] text-[#5E6872] max-w-sm mx-auto leading-relaxed">Thank you, <strong>{formData.name}</strong>. Our team will call you at <strong>{formData.phone}</strong> within 2 hours to confirm your visit.</p>
                    <a href={`https://wa.me/${WHATSAPP_NUM}?text=Hi%21%20I%20just%20submitted%20the%20contact%20form.`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-[#25D366] hover:bg-[#20b957] text-white font-bold rounded-full transition-colors duration-200">Confirm via WhatsApp</a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[12px] font-bold text-[#132B4A] uppercase tracking-[0.1em] mb-2">Full Name *</label>
                        <input id="name" type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="e.g. Rajesh Kumar" className={`${inputClass} ${errors.name ? 'border-rose-400 focus:border-rose-400 focus:ring-rose-400/20' : ''}`} />
                      </div>
                      <div>
                        <label className="block text-[12px] font-bold text-[#132B4A] uppercase tracking-[0.1em] mb-2">Phone Number *</label>
                        <input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="+91 98765 43210" className={`${inputClass} ${errors.phone ? 'border-rose-400 focus:border-rose-400 focus:ring-rose-400/20' : ''}`} />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[12px] font-bold text-[#132B4A] uppercase tracking-[0.1em] mb-2">Email Address</label>
                        <input id="email" type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="you@email.com" className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-[12px] font-bold text-[#132B4A] uppercase tracking-[0.1em] mb-2">City *</label>
                        <input id="city" type="text" value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} placeholder="e.g. Bangalore" className={`${inputClass} ${errors.city ? 'border-rose-400 focus:border-rose-400 focus:ring-rose-400/20' : ''}`} />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[12px] font-bold text-[#132B4A] uppercase tracking-[0.1em] mb-2">Property Type</label>
                        <div className="relative">
                          <select id="propertyType" value={formData.propertyType} onChange={(e) => setFormData({...formData, propertyType: e.target.value})} className={`${inputClass} appearance-none pr-10 cursor-pointer`}>
                            <option value="">Select type</option>
                            <option>Apartment / Flat</option><option>Villa / House</option><option>Office / Commercial</option><option>Other</option>
                          </select>
                          <svg className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-[#A9B3BC] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                      </div>
                      <div>
                        <label className="block text-[12px] font-bold text-[#132B4A] uppercase tracking-[0.1em] mb-2">Service Required *</label>
                        <div className="relative">
                          <select id="service" value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className={`${inputClass} appearance-none pr-10 cursor-pointer ${errors.service ? 'border-rose-400 focus:border-rose-400 focus:ring-rose-400/20' : ''}`}>
                            <option value="">Select service</option>
                            <option>Interior Painting</option><option>Exterior Painting</option><option>Texture Painting</option><option>Waterproofing</option><option>Other</option>
                          </select>
                          <svg className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-[#A9B3BC] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold text-[#132B4A] uppercase tracking-[0.1em] mb-2">Message / Requirements</label>
                      <textarea id="message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={3} placeholder="Tell us about your project..." className={`${inputClass} resize-none`} />
                    </div>
                    <button type="submit" disabled={submitting} className="w-full h-14 flex items-center justify-center gap-2 bg-[#F26A3D] hover:bg-[#d4572f] disabled:opacity-70 text-white font-bold text-[15px] rounded-xl shadow-[0_8px_24px_rgba(242,106,61,0.35)] hover:shadow-[0_12px_32px_rgba(242,106,61,0.50)] transition-all duration-200 mt-2">
                      {submitting ? 'Booking...' : 'Book Free Inspection'}
                    </button>
                    <p className="text-center text-[12px] text-[#A9B3BC] font-medium">🔒 Your details are kept private and secure.</p>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 4. SERVICES GRID */}
      <section className="py-24 bg-[#F5F2EE]" aria-label="Our services">
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionHeading eyebrow="What We Offer" title="Our Painting Services" subtitle="Comprehensive painting solutions for every type of property." />
          <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <m.div key={i} variants={fadeUp} className="group bg-white rounded-[20px] p-7 border border-[#E8E4DD] shadow-[0_4px_16px_rgba(19,43,74,0.03)] hover:shadow-[0_16px_40px_rgba(19,43,74,0.08)] hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col cursor-default">
                <div className="text-[32px] mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 transform-origin-left">{s.icon}</div>
                <h3 className="text-[17px] font-extrabold text-[#132B4A] mb-2.5">{s.title}</h3>
                <p className="text-[14px] text-[#5E6872] leading-relaxed flex-grow">{s.desc}</p>
                <div className="mt-5 w-8 h-1 bg-[#F26A3D]/20 rounded-full group-hover:bg-[#F26A3D] group-hover:w-12 transition-all duration-300" />
              </m.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* 5. GOOGLE MAP (Unified Card) */}
      <section className="py-24 bg-white" aria-label="Our location">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionHeading eyebrow="Find Us" title="Visit Our Office" />
          <AnimatedSection>
            <div className="rounded-[32px] overflow-hidden border border-[#E8E4DD] shadow-[0_20px_60px_rgba(19,43,74,0.08)] bg-white flex flex-col">
              <iframe title="Office Map" src={MAP_EMBED} className="w-full h-[450px]" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#132B4A] flex items-center justify-center flex-shrink-0"><svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
                  <div>
                    <h4 className="font-extrabold text-[#132B4A] text-[16px] mb-1">South India Painter</h4>
                    <address className="not-italic text-[14px] text-[#5E6872] leading-relaxed">No. 35, 1st Stage, 2nd Phase, Near Chandra Layout Bus Depot,<br />Vijayanagar, Bangalore, Karnataka 560040</address>
                  </div>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                  <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3.5 bg-[#132B4A] hover:bg-[#0d1e35] text-white font-bold text-[14px] rounded-xl transition-colors duration-200">Get Directions</a>
                  <a href={`tel:${PHONE_2_RAW}`} className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3.5 bg-[#F26A3D] hover:bg-[#d4572f] text-white font-bold text-[14px] rounded-xl transition-colors duration-200">Call Now</a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 6. WHY CHOOSE US (Trimmed to 6 cards for perfect grid) */}
      <section className="py-24 bg-[#0a1828] relative overflow-hidden" aria-label="Why contact us">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(242,106,61,0.05),transparent)]" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <SectionHeading eyebrow="Our Promise" title="Why Choose South India Painter?" subtitle="Six core promises that set us apart from the rest." light />
          <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCards.map((c, i) => (
              <m.div key={i} variants={fadeUp} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[24px] p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[#F26A3D]/20 flex items-center justify-center text-[22px] mb-5 group-hover:bg-[#F26A3D] transition-colors duration-300">{c.icon}</div>
                <h3 className="font-extrabold text-white text-[17px] mb-2.5">{c.title}</h3>
                <p className="text-[14px] text-white/60 leading-relaxed flex-grow">{c.desc}</p>
              </m.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-24 bg-white" aria-label="Frequently asked questions">
        <div className="container mx-auto px-6 max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Common Questions" subtitle="Everything you need to know before booking." />
          <AnimatedSection className="bg-white rounded-[24px] border border-[#E8E4DD] shadow-[0_8px_32px_rgba(19,43,74,0.04)] px-6 sm:px-10">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* 8. WHATSAPP CTA */}
      <section className="py-20 bg-gradient-to-r from-[#25D366] to-[#20b957] relative overflow-hidden" aria-label="WhatsApp contact">
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <AnimatedSection className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-6 text-center md:text-left">
              <div className="w-16 h-16 rounded-2xl bg-white/25 backdrop-blur-md flex items-center justify-center flex-shrink-0"><svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></div>
              <div><h2 className="text-[26px] md:text-[32px] font-black text-white mb-1.5">Need Instant Assistance?</h2><p className="text-white/90 text-[16px] font-medium">Chat with our painting expert on WhatsApp.</p></div>
            </div>
            <a href={`https://wa.me/${WHATSAPP_NUM}`} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-white text-[#25D366] font-extrabold text-[15px] rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:scale-105 transition-all duration-300">Open WhatsApp</a>
          </AnimatedSection>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-28 bg-[#0a1828] relative overflow-hidden" aria-label="Final call to action">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-[#F26A3D]/5 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-3xl relative z-10 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#F26A3D]/15 border border-[#F26A3D]/30 text-[#F26A3D] text-[11px] font-bold uppercase tracking-widest mb-8"><span className="w-1.5 h-1.5 rounded-full bg-[#F26A3D]" />Start Your Transformation</span>
            <h2 className="text-4xl md:text-[3.5rem] font-black text-white leading-tight tracking-tight mb-6">Ready to Transform<br /><span className="text-[#F26A3D]">Your Space?</span></h2>
            <p className="text-white/65 text-[17px] leading-relaxed mb-10 max-w-xl mx-auto">Book your free inspection today — zero cost, zero commitment.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact-form" className="inline-flex items-center gap-2.5 px-9 py-4 bg-[#F26A3D] hover:bg-[#d4572f] text-white font-bold text-[15px] rounded-full shadow-[0_8px_24px_rgba(242,106,61,0.4)] hover:scale-105 transition-all duration-300">Book Free Inspection</a>
              <a href={`tel:${PHONE_2_RAW}`} className="inline-flex items-center gap-2.5 px-9 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white font-bold text-[15px] rounded-full transition-all duration-300">Call {PHONE_2}</a>
            </div>
            <div className="mt-14 flex flex-wrap justify-center gap-6 text-[13px] font-medium text-white/40">
              <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-[#F26A3D]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>4.9/5 Rating</span>
              <span>•</span><span>500+ Projects</span><span>•</span><span>10+ Years</span>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
