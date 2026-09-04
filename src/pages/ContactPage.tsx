import { useState, useRef, type ReactNode, type ChangeEvent, type FormEvent } from 'react';
import { m, useInView, type Variants } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  ArrowRight,
  Check,
  ChevronDown,
} from 'lucide-react';
import { submitLead } from '@/utils/leadApi';
import { useSEO } from '@/hooks/useSEO';

// ============================================================
// ANIMATION
// ============================================================

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// ============================================================
// CONSTANTS
// ============================================================

const WHATSAPP_NUM = '919740556799';

const PHONE_1 = '080 23391256';
const PHONE_2 = '080 23391256';

const PHONE_1_RAW = '08023391256';
const PHONE_2_RAW = '08023391256';

const EMAIL = 'care@southindiapainters.com';

const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.163353457007!2d77.53127811482187!3d12.961395890862757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dd84e20b329%3A0xc48c1ea99fb0a241!2sChandra%20Layout%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1689255018612!5m2!1sen!2sin';

const MAPS_LINK =
  'https://www.google.com/maps/dir/?api=1&destination=No.+35,+1st+Stage,+2nd+Phase,+Near+Chandra+Layout+Bus+Depot,+Vijayanagar,+Bangalore+-+560040';

// ============================================================
// DATA
// ============================================================

const services = [
  {
    icon: '🎨',
    title: 'Interior Painting',
    desc: 'Premium interior finishes for every room',
  },
  {
    icon: '🏠',
    title: 'Exterior Painting',
    desc: 'Weather-resistant coatings for lasting beauty',
  },
  {
    icon: '🖌️',
    title: 'Texture Painting',
    desc: 'Artistic textures that transform any wall',
  },
  {
    icon: '💧',
    title: 'Waterproofing',
    desc: 'Long-lasting protection against moisture',
  },
  {
    icon: '🪵',
    title: 'Wood Coating',
    desc: 'Expert finishes for all wooden surfaces',
  },
  {
    icon: '🏢',
    title: 'Commercial Painting',
    desc: 'Professional solutions for offices & retail',
  },
  {
    icon: '🏡',
    title: 'Villa Painting',
    desc: 'Luxury painting for premium villas',
  },
  {
    icon: '🏗️',
    title: 'Apartment Painting',
    desc: 'Efficient, clean painting for apartments',
  },
];

const whyCards = [
  {
    icon: '🔍',
    title: 'Free Site Inspection',
    desc: 'We visit your property at no cost and assess every detail before quoting.',
  },
  {
    icon: '🎨',
    title: 'Expert Consultation',
    desc: 'Our colour experts help you choose the perfect palette for your space.',
  },
  {
    icon: '📋',
    title: 'Transparent Pricing',
    desc: 'No hidden charges — clear, itemised quotes so you know exactly what you pay for.',
  },
  {
    icon: '✨',
    title: 'Premium Materials',
    desc: 'We use only top-grade paints from Asian Paints, Berger, and Dulux.',
  },
  {
    icon: '⏰',
    title: 'On-Time Delivery',
    desc: 'We respect your time — strict timelines and milestone-based project tracking.',
  },
  {
    icon: '🛡️',
    title: 'Warranty Support',
    desc: 'Backed by a comprehensive warranty for complete peace of mind.',
  },
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
    a: 'Timeline depends on the scope of work. A standard 2BHK apartment (approx. 1,000 sq. ft.) typically takes 3-4 Days for interior painting. Larger villas or exterior projects may take 7–14 days. We provide a detailed project schedule at the time of quotation and stick to committed timelines.',
  },
  {
    q: 'Do you offer warranty?',
    a: "Yes. We provide a service warranty on our workmanship — typically 1 year. This is in addition to the paint manufacturer's product warranty (which can range from 5–15 years depending on the product). Any defects related to our application are rectified free of charge within the warranty period.",
  },
  {
    q: 'Can I book online?',
    a: 'Yes! You can book a free site inspection directly through our website using the contact form above, or by clicking "Book Free Site Visit" on the hero section. You can also reach us instantly via WhatsApp or call us on 080 23391256.',
  },
];

// ============================================================
// SHARED COMPONENTS
// ============================================================

function AnimatedSection({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, {
    once: true,
    margin: '-80px',
  });

  return (
    <m.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={stagger}
      className={className}
    >
      {children}
    </m.div>
  );
}

function SectionBadge({
  text,
  light = false,
}: {
  text: string;
  light?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center justify-center gap-2 w-[240px] h-8 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${light
        ? "bg-white/10 text-white border border-white/20"
        : "bg-[#F26A3D]/10 text-[#F26A3D] border border-[#F26A3D]/20"
        }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${light ? "bg-white" : "bg-[#F26A3D]"
          }`}
      />

      <span className="leading-none">
        {text}
      </span>
    </span>
  );
}

function FaqItem({
  q,
  a,
}: {
  q: string;
  a: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#E8E4DD] last:border-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 py-5 sm:py-6 text-left group"
      >
        <span
          className={`text-base sm:text-lg font-bold transition-colors duration-200 ${open
            ? 'text-[#F26A3D]'
            : 'text-[#102A43] group-hover:text-[#F26A3D]'
            }`}
        >
          {q}
        </span>

        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border ${open
            ? 'bg-[#F26A3D] border-[#F26A3D] text-white rotate-45'
            : 'bg-transparent border-[#CCC9C3] text-[#102A43]/60 group-hover:border-[#F26A3D] group-hover:text-[#F26A3D]'
            }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="7" y1="2" x2="7" y2="12" />
            <line x1="2" y1="7" x2="12" y2="7" />
          </svg>
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'
          }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm sm:text-base text-[#5E6872] leading-relaxed pr-6">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// CONTACT PAGE
// ============================================================

export default function ContactPage() {
  useSEO({
    title: 'Contact South India Painters | Get a Free Painting Estimate',
    description:
      'Contact South India Painters for a free estimate. Call us, send an enquiry, or visit our office in Vijayanagar, Bangalore. Serving all of South India.',
    canonical: 'https://southindiapainters.com/contact',
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    propertyType: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = 'Required';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Required';
    } else if (!/^[0-9+\-\s()]{10,}$/.test(formData.phone.trim())) {
      errs.phone = 'Invalid phone';
    }

    if (formData.email.trim() && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())) {
      errs.email = 'Invalid email';
    }

    if (!formData.city.trim()) {
      errs.city = 'Required';
    }

    if (!formData.service) {
      errs.service = 'Required';
    }

    return errs;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }

    if (submitError) setSubmitError('');
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    const errs = validate();

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setSubmitting(true);
    setSubmitError('');

    const result = await submitLead({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      city: formData.city,
      propertyType: formData.propertyType,
      service: formData.service,
      sourcePage: 'Contact Page - Tell Us About Your Project Form',
      website_url: honeypot
    });

    setSubmitting(false);

    if (result.success) {
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        city: '',
        propertyType: '',
        service: '',
        message: '',
      });
      setErrors({});
    } else {
      setSubmitError(result.message);
    }
  };

  return (
    <div className="font-sans text-[#102A43] bg-[#FAF8F4] overflow-x-hidden">

      {/* ========================================================
          1. HERO
      ======================================================== */}

      <section
        className="relative min-h-[420px] flex items-center justify-center overflow-hidden"
        aria-label="Contact South India Painters"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-[#071827]/80" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1828]/70 via-[#0A1828]/75 to-[#0A1828]" />

        <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl text-center pt-20">
          <AnimatedSection className="flex flex-col items-center">
            <m.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 w-[150px] h-8 justify-center rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 text-white border border-white/20">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                Contact Us
              </span>
            </m.div>

            <m.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
            >
              Let's Bring Your{' '}
              <span className="text-[#F26A3D]">
                Dream Home
              </span>
              <br />
              to Life
            </m.h1>

            <m.p
              variants={fadeUp}
              className="text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed mb-8"
            >
              Talk to our painting experts and schedule a free site inspection
              anywhere in South India.
            </m.p>

            <m.div
              variants={fadeUp}
              className="relative top-4 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#contact-form"

                className="inline-flex items-center justify-center gap-2 h-12 min-w-[220px] px-8 bg-[#F26A3D] hover:bg-[#E4573C] !text-[#102A43] font-bold rounded-full shadow-[0_10px_28px_rgba(242,106,61,0.35)] transition-all duration-300 hover:-translate-y-1"
              >
                <span>Book Free Site Visit</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${PHONE_2_RAW}`}
                style={{ color: '#ffffff' }}
                className="inline-flex items-center justify-center gap-2 h-12 min-w-[220px] px-8 bg-white/5 border border-white/30 hover:bg-white/10 !text-white font-semibold rounded-full transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Call {PHONE_2}</span>
              </a>
            </m.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ========================================================
    2. CONTACT INFORMATION
======================================================== */}

      <section
        className="mt-12 sm:mt-16 bg-[#F5F2EE] pt-32 pb-24"
        aria-label="Contact information"
      >
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 max-w-7xl">

          {/* SECTION HEADING */}
          <div className="relative top-10 flex flex-col items-center">

            {/* GET IN TOUCH - smaller width, same text size */}
            <div className="inline-flex items-center gap-2 w-[150px] h-8 justify-center rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-[#F26A3D]/10 text-[#F26A3D] border border-[#F26A3D]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F26A3D]" />
              Get In Touch
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.15] tracking-tight mb-4 max-w-3xl text-center text-[#102A43]">
              How to Reach Us
            </h2>

            <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-center text-[#5E6872]">
              Three easy ways to connect with our painting experts.
            </p>

          </div>

          {/* ========================================================
        3 CARDS
    ======================================================== */}

          <div style={{ marginTop: "80px" }}>

            <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">

              {/* ====================================================
            ADDRESS CARD
        ==================================================== */}

              <m.div
                variants={fadeUp}
                style={{
                  padding: "28px",
                }}
                className="group bg-white rounded-[24px] border border-[#E8E4DD] shadow-[0_8px_30px_rgba(16,42,67,0.05)] hover:shadow-[0_18px_45px_rgba(16,42,67,0.10)] hover:-translate-y-1 transition-all duration-300 min-h-[230px] flex flex-col relative overflow-hidden"
              >

                <div className="absolute top-0 left-0 right-0 h-1 bg-[#F26A3D]" />

                <div className="relative -top-3 w-12 h-12 rounded-[14px] bg-[#102A43] flex items-center justify-center text-white mb-6 flex-shrink-0 shadow-[0_8px_20px_rgba(16,42,67,0.18)]">
                  <MapPin className="w-5 h-5" />
                </div>

                <h3 className="text-[11px] font-bold text-[#102A43]/60 uppercase tracking-[0.16em] mb-2">
                  Office Address
                </h3>

                <address className="not-italic text-sm sm:text-[15px] text-[#102A43] leading-relaxed flex-grow">
                  No. 35, 1st Stage, 2nd Phase,
                  <br />
                  Near Chandra Layout Bus Depot,
                  <br />
                  Vijayanagar, Bangalore,
                  <br />
                  <span className="font-semibold">
                    Karnataka – 560040
                  </span>
                </address>

                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#ffffff" }}
                  className="mt-5 w-full h-11 inline-flex items-center justify-center gap-2 rounded-xl bg-[#102A43] !text-white hover:bg-[#F26A3D] hover:!text-white text-sm font-bold shadow-[0_8px_20px_rgba(16,42,67,0.12)] transition-all duration-300"
                >
                  <span>Open in Maps</span>
                  <span className="text-base">↗</span>
                </a>

              </m.div>


              {/* ====================================================
            CONTACT DETAILS (PHONE & EMAIL COMBINED)
        ==================================================== */}

              <m.div
                variants={fadeUp}
                style={{
                  padding: "28px",
                }}
                className="group bg-white rounded-[24px] border border-[#E8E4DD] shadow-[0_8px_30px_rgba(16,42,67,0.05)] hover:shadow-[0_18px_45px_rgba(16,42,67,0.10)] hover:-translate-y-1 transition-all duration-300 min-h-[230px] flex flex-col relative overflow-hidden"
              >

                <div className="absolute top-0 left-0 right-0 h-1 bg-[#F26A3D]" />

                <div className="relative -top-3 flex gap-3 mb-6">
                  <div className="w-12 h-12 rounded-[14px] bg-[#102A43] flex items-center justify-center text-white flex-shrink-0 shadow-[0_8px_20px_rgba(16,42,67,0.18)]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="w-12 h-12 rounded-[14px] bg-[#102A43] flex items-center justify-center text-white flex-shrink-0 shadow-[0_8px_20px_rgba(16,42,67,0.18)]">
                    <Mail className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-[11px] font-bold text-[#102A43]/60 uppercase tracking-[0.16em] mb-3">
                  Contact Details
                </h3>

                <div className="flex flex-col gap-4 flex-grow justify-center">
                  <div>
                    <span className="block text-[10px] font-bold text-[#F26A3D] uppercase tracking-wider mb-1">Phone</span>
                    <a
                      href={`tel:${PHONE_1_RAW}`}
                      className="text-sm sm:text-base font-bold text-[#102A43] hover:text-[#F26A3D] transition-colors"
                    >
                      {PHONE_1}
                    </a>
                  </div>

                  <div>
                    <span className="block text-[10px] font-bold text-[#F26A3D] uppercase tracking-wider mb-1">Email</span>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-sm sm:text-base font-bold text-[#102A43] hover:text-[#F26A3D] break-all transition-colors"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex flex-col gap-1 mt-6 text-xs text-[#5E6872]">
                  <p>Mon – Sat, 9 AM – 7 PM</p>
                  <p>We reply within 2 hours</p>
                </div>

              </m.div>


              {/* ====================================================
            WORKING HOURS CARD
        ==================================================== */}

              <m.div
                variants={fadeUp}
                style={{
                  padding: "28px",
                }}
                className="group relative bg-white rounded-[26px] border border-[#E8E4DD] shadow-[0_10px_30px_rgba(16,42,67,0.06)] hover:shadow-[0_20px_45px_rgba(16,42,67,0.12)] hover:-translate-y-2 transition-all duration-300 min-h-[230px] flex flex-col overflow-hidden"
              >

                <div className="absolute top-0 left-0 right-0 h-1 bg-[#F26A3D]" />

                <div className="relative -top-3 w-12 h-12 rounded-[14px] bg-[#102A43] flex items-center justify-center text-white mb-6 flex-shrink-0 shadow-[0_8px_20px_rgba(16,42,67,0.18)]">
                  <Clock3 className="w-5 h-5" />
                </div>

                <h3 className="text-[11px] font-bold text-[#102A43]/60 uppercase tracking-[0.16em] mb-3">
                  Working Hours
                </h3>

                <div className="flex flex-col gap-4 flex-grow">

                  <div>
                    <p className="text-xs text-[#5E6872] font-semibold mb-1">
                      Monday – Saturday
                    </p>

                    <p className="text-sm sm:text-base font-bold text-[#102A43]">
                      9:00 AM – 7:00 PM
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-[#5E6872] font-semibold mb-1">
                      Sunday
                    </p>

                    <p className="text-sm sm:text-base font-bold text-[#102A43]">
                      Closed
                    </p>
                  </div>

                </div>

              </m.div>

            </AnimatedSection>

          </div>

        </div>
      </section>

      {/* ========================================================
    3. CONTACT FORM
======================================================== */}

      <div
        style={{
          marginTop: "80px",
          backgroundColor: "#ffffff",
          position: "relative",
          zIndex: 1,
          minHeight: "710px",
        }}
      >
        <section
          id="contact-form"
          aria-label="Book free site visit"
          className="pt-16 sm:pt-20 lg:pt-24 pb-56 sm:pb-64 lg:pb-72"
        >
          <div className="container mx-auto px-5 sm:px-8 lg:px-12 max-w-7xl">

            {/* SECTION HEADING */}

            <div
              className="flex flex-col items-center"
              style={{ transform: "translateY(20px)" }}
            >


              {/* BOOK NOW */}
              <div className="inline-flex items-center gap-2 w-[120px] h-8 justify-center rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-[#F26A3D]/10 text-[#F26A3D] border border-[#F26A3D]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F26A3D]" />
                Book Now
              </div>

              {/* TITLE */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.15] tracking-tight mb-4 max-w-3xl text-center text-[#102A43]">
                Get a Free Inspection
              </h2>

              {/* SUBTITLE */}
              <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-center text-[#5E6872]">
                Fill in your details and our expert will reach out within 2 hours to confirm your visit.
              </p>

            </div>

            {/* LEFT + RIGHT */}
            <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-[0.88fr_1fr] gap-10 lg:gap-14 items-start">

              {/* ==================================================
            LEFT CONTENT
        ================================================== */}

              <div style={{ marginTop: "70px" }}>
                <AnimatedSection className="flex flex-col">

                  <m.h3
                    variants={fadeUp}
                    className="text-2xl sm:text-3xl font-extrabold text-[#102A43] leading-snug mb-4"
                  >
                    Why book a free
                    <br />
                    inspection with us?
                  </m.h3>

                  <m.p
                    variants={fadeUp}
                    className="text-base sm:text-lg text-[#5E6872] leading-relaxed mb-7 max-w-xl"
                  >
                    Our site visit is completely free, with zero pressure or
                    commitment. We assess your property, evaluate surfaces, and
                    present a detailed itemised quotation before any work begins.
                  </m.p>

                  {/* BENEFITS */}

                  <m.ul
                    variants={stagger}
                    className="flex flex-col gap-3.5 mb-8"
                  >
                    {[
                      "100% Free — No Hidden Charges",
                      "Expert Visits Within 24–48 Hours",
                      "Personalised Colour & Finish Consultation",
                      "Transparent, Itemised Quotation",
                      "No Obligation — Just Honest Expert Advice",
                    ].map((item, idx) => (
                      <m.li
                        key={idx}
                        variants={fadeUp}
                        className="flex items-start gap-3 text-sm sm:text-base text-[#102A43] font-semibold"
                      >
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F26A3D]/10 flex items-center justify-center mt-0.5">
                          <Check
                            className="w-4 h-4 text-[#F26A3D]"
                            strokeWidth={3}
                          />
                        </span>

                        <span>{item}</span>
                      </m.li>
                    ))}
                  </m.ul>

                  {/* STATS */}

                  <div
  className="flex items-center gap-6 pt-8 mt-8 border-t border-[#E8E4DD] max-w-lg"
  style={{ transform: 'translateY(25px)' }}
>

                    <div>
                      <p className="text-2xl sm:text-3xl font-black text-[#102A43]">
                        1981
                      </p>
                      <p className="text-[11px] text-[#5E6872] font-bold uppercase tracking-wider">
                        Projects
                      </p>
                    </div>

                    <div className="w-px h-9 bg-[#E8E4DD]" />

                    <div>
                      <p className="text-2xl sm:text-3xl font-black text-[#102A43]">
                        4.9★
                      </p>
                      <p className="text-[11px] text-[#5E6872] font-bold uppercase tracking-wider">
                        Rating
                      </p>
                    </div>

                    <div className="w-px h-9 bg-[#E8E4DD]" />

                    <div>
                      <p className="text-2xl sm:text-3xl font-black text-[#102A43]">
                        25+
                      </p>
                      <p className="text-[11px] text-[#5E6872] font-bold uppercase tracking-wider">
                        Years
                      </p>
                    </div>

                  </div>

                </AnimatedSection>
              </div>


              {/* ==================================================
            RIGHT FORM
        ================================================== */}

              <AnimatedSection className="relative top-[65px]">

                <m.div
                  variants={fadeUp}
                  style={{
                    paddingLeft: "28px",
                    paddingRight: "28px",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                  }}
                  className="relative bg-white rounded-[24px] border border-[#E6E1D9] shadow-[0_18px_55px_rgba(16,42,67,0.11)] overflow-hidden"
                >

                  {/* ORANGE TOP LINE */}

                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#F26A3D]" />

                  {/* DECORATION */}

                  <div className="pointer-events-none absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[#F26A3D]/[0.06] blur-3xl" />

                  <div className="pointer-events-none absolute top-8 right-8 w-20 h-20 rounded-full border border-[#F26A3D]/10" />


                  {/* FORM HEADER */}

                  <div className="relative z-10 mb-4">

                    <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-[#F26A3D] mb-1">
                      Free Consultation
                    </p>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#102A43] leading-tight">
                      Tell us about your project
                    </h3>

                    <div className="h-[20px]" />

                  </div>


                  {/* FORM */}

                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="relative z-10 flex flex-col gap-3.5"
                  >

                    {/* NAME + PHONE */}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">

                      <div>

                        <label className="block text-[10px] font-bold text-[#102A43] tracking-[0.12em] uppercase mb-1.5">
                          Full Name *
                        </label>

                        <input
                          type="text"
                          name="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleChange}
                          style={{ textIndent: "8px" }}
                          className="w-full h-[46px] px-3.5 bg-[#FAFAF8] border border-[#E8E4DD] rounded-xl text-[#102A43] placeholder:text-[#A9B3BC] text-sm focus:outline-none focus:ring-2 focus:ring-[#F26A3D]/20 focus:border-[#F26A3D] transition-all"
                        />

                        {errors.name && (
                          <p className="mt-1 text-[10px] text-red-500">
                            {errors.name}
                          </p>
                        )}

                      </div>


                      <div>

                        <label className="block text-[10px] font-bold text-[#102A43] tracking-[0.12em] uppercase mb-1.5">
                          Phone Number *
                        </label>

                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                          style={{ textIndent: "8px" }}
                          className="w-full h-[46px] px-3.5 bg-[#FAFAF8] border border-[#E8E4DD] rounded-xl text-[#102A43] placeholder:text-[#A9B3BC] text-sm focus:outline-none focus:ring-2 focus:ring-[#F26A3D]/20 focus:border-[#F26A3D] transition-all"
                        />

                        {errors.phone && (
                          <p className="mt-1 text-[10px] text-red-500">
                            {errors.phone}
                          </p>
                        )}

                      </div>

                    </div>


                    {/* EMAIL + CITY */}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">

                      <div>

                        <label className="block text-[10px] font-bold text-[#102A43] tracking-[0.12em] uppercase mb-1.5">
                          Email Address
                        </label>

                        <input
                          type="email"
                          name="email"
                          placeholder="you@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          style={{ textIndent: "8px" }}
                          className="w-full h-[46px] px-3.5 bg-[#FAFAF8] border border-[#E8E4DD] rounded-xl text-[#102A43] placeholder:text-[#A9B3BC] text-sm focus:outline-none focus:ring-2 focus:ring-[#F26A3D]/20 focus:border-[#F26A3D] transition-all"
                        />

                      </div>


                      <div>

                        <label className="block text-[10px] font-bold text-[#102A43] tracking-[0.12em] uppercase mb-1.5">
                          City *
                        </label>

                        <input
                          type="text"
                          name="city"
                          placeholder="e.g. Bangalore"
                          value={formData.city}
                          onChange={handleChange}
                          style={{ textIndent: "8px" }}
                          className="w-full h-[46px] px-3.5 bg-[#FAFAF8] border border-[#E8E4DD] rounded-xl text-[#102A43] placeholder:text-[#A9B3BC] text-sm focus:outline-none focus:ring-2 focus:ring-[#F26A3D]/20 focus:border-[#F26A3D] transition-all"
                        />

                        {errors.city && (
                          <p className="mt-1 text-[10px] text-red-500">
                            {errors.city}
                          </p>
                        )}

                      </div>

                    </div>


                    {/* PROPERTY + SERVICE */}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">

                      <div>

                        <label className="block text-[10px] font-bold text-[#102A43] tracking-[0.12em] uppercase mb-1.5">
                          Property Type
                        </label>

                        <div className="relative">

                          <select
                            name="propertyType"
                            value={formData.propertyType}
                            onChange={handleChange}
                            style={{ textIndent: "8px" }}
                            className="w-full h-[46px] px-3.5 pr-9 bg-[#FAFAF8] border border-[#E8E4DD] rounded-xl text-[#102A43] text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#F26A3D]/20 focus:border-[#F26A3D] transition-all"
                          >
                            <option value="">Select type</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Villa">Villa</option>
                            <option value="Independent House">
                              Independent House
                            </option>
                            <option value="Commercial">Commercial</option>
                            <option value="Office">Office</option>
                          </select>

                          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] pointer-events-none" />

                        </div>

                      </div>


                      <div>

                        <label className="block text-[10px] font-bold text-[#102A43] tracking-[0.12em] uppercase mb-1.5">
                          Service Required *
                        </label>

                        <div className="relative">

                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            style={{ textIndent: "8px" }}
                            className="w-full h-[46px] px-3.5 pr-9 bg-[#FAFAF8] border border-[#E8E4DD] rounded-xl text-[#102A43] text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#F26A3D]/20 focus:border-[#F26A3D] transition-all"
                          >
                            <option value="">Select service</option>
                            <option value="Interior Painting">
                              Interior Painting
                            </option>
                            <option value="Exterior Painting">
                              Exterior Painting
                            </option>
                            <option value="Texture Painting">
                              Texture Painting
                            </option>
                            <option value="Waterproofing">
                              Waterproofing
                            </option>
                            <option value="Wood Coating">
                              Wood Coating
                            </option>
                          </select>

                          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] pointer-events-none" />

                        </div>

                        {errors.service && (
                          <p className="mt-1 text-[10px] text-red-500">
                            {errors.service}
                          </p>
                        )}

                      </div>

                    </div>

                    {/* TERMS */}

                    <p className="text-[10px] sm:text-[11px] text-[#9CA3AF] leading-relaxed">
                      By booking a consultation, you agree to our{" "}
                      <span className="text-[#F26A3D]">
                        Terms & Conditions.
                      </span>
                    </p>

                    {/* Honeypot field (hidden from users) */}
                    <input
                      type="text"
                      name="website_url"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      style={{ display: 'none' }}
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    {/* SUBMIT BUTTON */}

                    <m.button
                      type="submit"
                      disabled={submitted || submitting}
                      whileHover={
                        submitted || submitting
                          ? undefined
                          : { y: -2 }
                      }
                      style={{
                        backgroundColor: "#F26A3D",
                        color: "#FFFFFF",
                      }}
                      className="w-full h-[48px] !rounded-xl !bg-[#F26A3D] hover:!bg-[#E4573C] !text-white font-bold text-sm flex items-center justify-center gap-2 shadow-[0_10px_24px_rgba(242,106,61,0.25)] transition-all duration-300"
                    >
                      {submitted ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Submitted</span>
                        </>
                      ) : submitting ? (
                        <span>Submitting...</span>
                      ) : (
                        <span>Submit</span>
                      )}
                    </m.button>

                    {/* Success / Error Messages */}
                    {submitted && (
                      <p className="text-green-600 text-xs font-semibold text-center mt-1">
                        Thank you! Your request has been received. Our team will contact you shortly.
                      </p>
                    )}
                    {submitError && (
                      <p className="text-red-500 text-xs font-semibold text-center mt-1">
                        {submitError}
                      </p>
                    )}

                    {/* SECURITY */}

                    <p className="text-center text-[10px] text-[#9CA3AF]">
                      🔒 Your details are kept 100% private and secure.
                    </p>

                  </form>

                </m.div>

              </AnimatedSection>

            </div>

          </div>
        </section>
      </div>

      {/* ========================================================
          4. SERVICES
      ======================================================== */}

      <section
        className="block w-full bg-[#F5F2EE]"
        aria-label="Painting services"
      >
        <div
          className="container mx-auto px-5 sm:px-8 lg:px-12 max-w-7xl"
          style={{
            paddingTop: "80px",
            paddingBottom: "96px",
            position: "static",
            transform: "none",
          }}
        >

          <div className="relative top-[-40px] flex flex-col items-center">

            {/* WHAT WE OFFER */}
            <div className="inline-flex items-center gap-2 w-[150px] h-8 justify-center rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-[#F26A3D]/10 text-[#F26A3D] border border-[#F26A3D]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F26A3D]" />
              What We Offer
            </div>

            {/* TITLE */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.15] tracking-tight mb-4 max-w-3xl text-center text-[#102A43]">
              Our Painting Services
            </h2>

            {/* SUBTITLE */}
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-center text-[#5E6872]">
              Comprehensive Painting Solutions for Every Type of Property — Fresh Paint & Repainting
            </p>

          </div>

          <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {services.map((service, index) => (
              <m.div
                key={index}
                variants={fadeUp}
                className="group bg-white rounded-[22px] p-6 border border-[#E8E4DD] shadow-[0_8px_25px_rgba(16,42,67,0.04)] hover:shadow-[0_18px_40px_rgba(16,42,67,0.10)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* ICON */}
                <div
                  className="text-3xl mb-4"
                  style={{ transform: "translateX(8px)" }}
                >
                  {service.icon}
                </div>

                {/* TEXT */}
                <div
                  style={{
                    transform: "translateX(12px)",
                  }}
                >
                  <h3 className="text-base sm:text-lg font-bold text-[#102A43] mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="mt-5 h-1 w-8 rounded-full bg-[#F26A3D] group-hover:w-14 transition-all duration-300" />
                </div>
              </m.div>
            ))}

          </AnimatedSection>
        </div>
      </section>

      {/* ========================================================
    5. MAP
======================================================== */}

      <section
        className="block w-full bg-white"
        aria-label="Our office location"
      >
        <div
          className="container mx-auto px-5 sm:px-8 lg:px-12 max-w-7xl"
          style={{
            paddingTop: "64px",
            paddingBottom: "80px",
            position: "static",
            transform: "none",
          }}
        >

          {/* MAP HEADING */}
          <div className="relative top-[-30px] mb-8 flex flex-col items-center">

            {/* FIND US */}
            <div className="inline-flex items-center gap-2 w-[100px] h-8 justify-center rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-[#F26A3D]/10 text-[#F26A3D] border border-[#F26A3D]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F26A3D]" />
              Find Us
            </div>

            {/* TITLE */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.15] tracking-tight mb-4 max-w-3xl text-center text-[#102A43]">
              Visit Our Office
            </h2>

            {/* SUBTITLE */}
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-center text-[#5E6872]">
              Come visit us for a detailed consultation or get directions to our office.
            </p>

          </div>

          {/* MAP + ADDRESS + BUTTONS */}
          <AnimatedSection className="mt-2">
            <m.div
              variants={fadeUp}
              className="rounded-[28px] overflow-hidden border border-[#E8E4DD] shadow-[0_20px_60px_rgba(16,42,67,0.10)] bg-white"
            >

              {/* MAP */}
              <div className="relative">
                <iframe
                  title="South India Painters Office Location"
                  src={MAP_EMBED}
                  className="w-full h-[420px] sm:h-[480px]"
                  style={{
                    border: 0,
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* ADDRESS + BUTTONS */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 px-6 sm:px-8 py-6 bg-white">

                {/* ADDRESS */}
                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-full bg-[#102A43] flex items-center justify-center flex-shrink-0 text-white">
                    <MapPin className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#102A43]">
                      South India Painters
                    </h3>

                    <p className="text-sm text-[#6B7280] leading-relaxed">
                      No. 35, 1st Stage, 2nd Phase, Near Chandra Layout Bus
                      Depot, Vijayanagar, Bangalore, Karnataka 560040
                    </p>
                  </div>

                </div>

                {/* BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">

                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#ffffff" }}
                    className="inline-flex items-center justify-center gap-2 h-14 px-10 min-w-[190px] bg-[#102A43] hover:bg-[#F26A3D] !text-white rounded-full font-bold text-base transition-all duration-300"
                  >
                    <MapPin className="w-5 h-5" />
                    <span>Get Directions</span>
                    <span>↗</span>
                  </a>

                  <a
                    href={`tel:${PHONE_1_RAW}`}
                    style={{ color: "#ffffff" }}
                    className="inline-flex items-center justify-center gap-2 h-14 px-10 min-w-[170px] bg-[#F26A3D] hover:bg-[#E4573C] !text-white rounded-full font-bold text-base transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </a>

                </div>

              </div>

            </m.div>
          </AnimatedSection>

        </div>
      </section>

      {/* ========================================================
    6. WHY CHOOSE US
======================================================== */}

      <section
        className="mt-12 sm:mt-16 py-16 lg:py-24 bg-[#0A1828]"
        aria-label="Why choose us"
      >
        <div
          className="container mx-auto px-5 sm:px-8 lg:px-12 max-w-7xl"
          style={{
            paddingTop: "80px",
            paddingBottom: "80px",
          }}
        >

          <div className="relative top-[-40px] mb-8 flex flex-col items-center">

            {/* OUR PROMISE */}
            <div className="inline-flex items-center gap-2 w-[130px] h-8 justify-center rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-white/10 text-white border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              Our Promise
            </div>

            {/* TITLE */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.15] tracking-tight mb-4 max-w-3xl text-center text-white">
              Why Choose South India Painters?
            </h2>

            {/* SUBTITLE */}
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-center text-white/75">
              Six core promises that set us apart from the rest.
            </p>

          </div>

          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            {whyCards.map((card, index) => (
              <m.div
                key={index}
                variants={fadeUp}
                className="group bg-[#162536] rounded-[22px] p-6 border border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.12)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.20)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* MOVE ONLY THE CONTENT */}
                <div
                  style={{
                    transform: "translateX(10px)",
                  }}
                >
                  {/* ICON */}
                  <div
                    className="text-3xl mb-4"
                    style={{ transform: "translateX(-3px)" }}
                  >
                    {card.icon}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    {card.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-sm text-white/70 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </m.div>
            ))}

          </AnimatedSection>

        </div>
      </section>

      <section
        className="py-16 sm:py-24 bg-white"
        aria-label="Frequently asked questions"
      >
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 max-w-4xl">

          {/* FAQ HEADING */}
          {/* FAQ HEADING */}
          <div className="relative top-[30px] mb-8 flex flex-col items-center">

            {/* FAQ */}
            <div className="inline-flex items-center gap-2 w-[90px] h-8 justify-center rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-[#F26A3D]/10 text-[#F26A3D] border border-[#F26A3D]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F26A3D]" />
              FAQ
            </div>

            {/* TITLE */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.15] tracking-tight mb-4 max-w-3xl text-center text-[#102A43]">
              Common Questions
            </h2>

            {/* SUBTITLE */}
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-center text-[#5E6872]">
              Everything you need to know before booking.
            </p>

          </div>

          {/* FAQ QUESTIONS */}
          <AnimatedSection
            className="relative top-[50px] bg-white rounded-[24px] border border-[#E8E4DD] shadow-[0_8px_32px_rgba(16,42,67,0.05)] px-5 sm:px-8"
          >
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                q={faq.q}
                a={faq.a}
              />
            ))}
          </AnimatedSection>

        </div>
      </section>

      {/* ========================================================
    8. WHATSAPP
======================================================== */}

      <section
        className="w-full bg-gradient-to-r from-[#25D366] to-[#1DA851] rounded-t-[48px] shadow-[0_-10px_40px_rgba(37,211,102,0.12)]"
        style={{
          marginTop: "120px",
          marginBottom: "40px",
        }}
        aria-label="WhatsApp contact"
      >
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 max-w-5xl">

          <AnimatedSection
            className="flex flex-col md:flex-row items-center justify-between gap-6 py-10 sm:py-12"
          >

            {/* LEFT CONTENT */}
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">

              {/* WhatsApp Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7 text-white"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.816 5.816 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>

              {/* Text */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  Need Instant Assistance?
                </h2>

                <p className="text-white/90 text-sm sm:text-base mt-1">
                  Chat directly with our painting expert on WhatsApp.
                </p>
              </div>

            </div>

            {/* WHATSAPP BUTTON */}
            <a
              href={`https://wa.me/${WHATSAPP_NUM}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#25D366" }}
              className="
          flex-shrink-0
          inline-flex
          items-center
          justify-center
          gap-2
          px-6
          h-8
          text-sm
          md:px-8
          md:h-12
          md:text-sm
          bg-white
          !text-[#25D366]
          font-extrabold
          rounded-full
          shadow-[0_8px_25px_rgba(0,0,0,0.15)]
          hover:scale-105
          hover:shadow-[0_12px_30px_rgba(0,0,0,0.20)]
          transition-all
          duration-300
          max-md:-translate-y-2
        "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4.5 h-4.5 md:w-4 md:h-4"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.816 5.816 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>

              <span>
                Open WhatsApp
              </span>
            </a>

          </AnimatedSection>

        </div>
      </section>
      {/* ========================================================
    9. FINAL CTA
======================================================== */}

      <section
        aria-label="Final call to action"
        style={{
          marginTop: "0px",
          height: "420px",
          paddingTop: "50px",
          paddingBottom: "0px",
          backgroundColor: "#0A1828",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* TOP LINE */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2"
          style={{
            width: "600px",
            height: "1px",
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.15), transparent)",
          }}
        />

        {/* GLOW */}
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-[#F26A3D]/5 blur-[100px] pointer-events-none" />

        <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] rounded-full bg-[#F26A3D]/5 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-5 sm:px-8 lg:px-12 max-w-3xl relative z-10 text-center">

          <AnimatedSection>

            {/* BADGE */}
            <m.div variants={fadeUp}>
              <SectionBadge
                text="Start Your Transformation"
                light
              />
            </m.div>

            {/* TITLE */}
            <m.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6"
            >
              Ready to Transform
              <br />
              <span className="text-[#F26A3D]">
                Your Space?
              </span>
            </m.h2>

            {/* DESCRIPTION */}
            <m.p
  variants={fadeUp}
  className="text-white/75 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto max-sm:translate-x-0 sm:translate-x-[373px]"
>
  Book your free inspection today — zero cost, zero commitment.
</m.p>

            {/* BUTTONS */}
            <m.div
  variants={fadeUp}
  className="flex flex-col sm:flex-row gap-4 justify-center items-center translate-y-3"
>

              <a
                href="#contact-form"
                style={{
                  color: "#102A43",
                }}
                className="w-full sm:w-auto min-w-[250px] h-[58px] inline-flex items-center justify-center gap-2.5 bg-[#F26A3D] hover:bg-[#E4573C] !text-[#102A43] font-bold text-base md:text-lg rounded-full shadow-[0_8px_24px_rgba(242,106,61,0.4)] hover:scale-105 transition-all duration-300"
              >
                <span>Book Free Inspection</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href={`tel:${PHONE_2_RAW}`}
                style={{
                  color: "#ffffff",
                }}
                className="w-full sm:w-auto min-w-[250px] h-[58px] inline-flex items-center justify-center gap-2.5 bg-transparent border border-white/30 hover:bg-white/10 !text-white font-bold text-base md:text-lg rounded-full transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>Call {PHONE_2}</span>
              </a>

            </m.div>

            {/* STATS */}
            <m.div
  variants={fadeUp}
  className="mt-10 flex flex-wrap justify-center gap-5 text-xs sm:text-sm font-medium text-white/40 translate-y-6"
>

              <span className="flex items-center gap-1.5">
                <span className="text-[#F26A3D]">
                  ★
                </span>
                4.9/5 Rating
              </span>

              <span>•</span>

              <span>
                1981 Projects
              </span>

              <span>•</span>

              <span>
                25+ YEARS
              </span>

            </m.div>

          </AnimatedSection>

        </div>
      </section>
      
      {/* Mobile-only spacer to create gap before footer */}
      <div className="h-10 sm:h-0" />
    </div>
    
  );
}