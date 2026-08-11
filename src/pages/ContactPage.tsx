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
  MessageCircle,
} from 'lucide-react';

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

const PHONE_1 = '+91 9740556799';
const PHONE_2 = '+91 8023391256';

const PHONE_1_RAW = '919740556799';
const PHONE_2_RAW = '918023391256';

const EMAIL = 'hello@southindiapainter.com';

const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.163353457007!2d77.53127811482187!3d12.961395890862757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dd84e20b329%3A0xc48c1ea99fb0a241!2sChandra%20Layout%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1689255018612!5m2!1sen!2sin';

const MAPS_LINK =
  'https://www.google.com/maps/search/?api=1&query=No.+35,+1st+Stage,+2nd+Phase,+Near+Chandra+Layout+Bus+Depot,+Vijayanagar,+Bangalore+-+560040';

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
      className={`inline-flex items-center justify-center gap-2 w-[240px] h-8 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${
  light
    ? "bg-white/10 text-white border border-white/20"
    : "bg-[#F26A3D]/10 text-[#F26A3D] border border-[#F26A3D]/20"
}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
          light ? "bg-white" : "bg-[#F26A3D]"
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

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = 'Required';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Required';
    } else if (!/^\+?[\d\s-]{8,15}$/.test(formData.phone)) {
      errs.phone = 'Invalid phone';
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
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const errs = validate();

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="font-sans text-[#102A43] bg-[#FAF8F4] overflow-x-hidden">

      {/* ========================================================
          1. HERO
      ======================================================== */}

      <section
        className="relative min-h-[420px] flex items-center justify-center overflow-hidden"
        aria-label="Contact South India Painter"
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
    Four easy ways to connect with our painting experts.
  </p>

</div>

          {/* ========================================================
        4 CARDS
    ======================================================== */}

          <div style={{ marginTop: "80px" }}>

            <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">

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
            PHONE CARD
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
                  <Phone className="w-5 h-5" />
                </div>

                <h3 className="text-[11px] font-bold text-[#102A43]/60 uppercase tracking-[0.16em] mb-3">
                  Phone Numbers
                </h3>

                <div className="flex flex-col gap-2 flex-grow">

                  <a
                    href={`tel:${PHONE_1_RAW}`}
                    className="text-sm sm:text-base font-bold text-[#102A43] hover:text-[#F26A3D] transition-colors"
                  >
                    {PHONE_1}
                  </a>

                  <a
                    href={`tel:${PHONE_2_RAW}`}
                    className="text-sm sm:text-base font-bold text-[#102A43] hover:text-[#F26A3D] transition-colors"
                  >
                    {PHONE_2}
                  </a>

                </div>

                <p className="text-xs text-[#5E6872] mt-4">
                  Mon – Sat, 9 AM – 7 PM
                </p>

              </m.div>


              {/* ====================================================
            EMAIL CARD
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
                  <Mail className="w-5 h-5" />
                </div>

                <h3 className="text-[11px] font-bold text-[#102A43]/60 uppercase tracking-[0.16em] mb-3">
                  Email Address
                </h3>

                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm sm:text-base font-bold text-[#102A43] hover:text-[#F26A3D] break-all transition-colors"
                >
                  {EMAIL}
                </a>

                <p className="text-xs text-[#5E6872] mt-auto pt-4">
                  We reply within 2 hours
                </p>

              </m.div>


              {/* ====================================================
            WORKING HOURS CARD
        ==================================================== */}

              <m.div
                variants={fadeUp}
                style={{
                  padding: "28px",
                }}
                className="group relative bg-white rounded-[26px] border border-[#E8E4DD] shadow-[0_10px_30px_rgba(16,42,67,0.06)] hover:shadow-[0_20px_45px_rgba(16,42,67,0.12)] hover:-translate-y-2 transition-all duration-300 min-h-[250px] flex flex-col overflow-hidden"
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
                "100% free — no hidden charges",
                "Expert visits within 24–48 hours",
                "Personalised colour & finish consultation",
                "Transparent, itemised quotation",
                "No obligation — just honest expert advice",
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

            <div className="flex items-center gap-5 pt-5 border-t border-[#E8E4DD] max-w-lg">

              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#102A43]">
                  5000+
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
                  10+
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
      placeholder="e.g. Rajesh Kumar"
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
      placeholder="+91 98765 43210"
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
        <option value="Commercial Painting">
          Commercial Painting
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
    Comprehensive painting solutions for every type of property.
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
                  title="South India Painter Office Location"
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
                      South India Painter
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
    Why Choose South India Painter?
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
                <MessageCircle className="w-7 h-7 text-white" />
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
          gap-3
          px-8
          py-4
          bg-white
          !text-[#25D366]
          font-extrabold
          text-sm
          sm:text-base
          rounded-full
          shadow-[0_8px_25px_rgba(0,0,0,0.15)]
          hover:scale-105
          hover:shadow-[0_12px_30px_rgba(0,0,0,0.20)]
          transition-all
          duration-300
        "
            >
              <MessageCircle className="w-5 h-5" />

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
      <m.div
  variants={fadeUp}
  className="relative -top-4 -left-3"
>
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
  className="relative left-90 top-2 text-white/75 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
>
  Book your free inspection today — zero cost, zero commitment.
</m.p>

      {/* BUTTONS */}
      <m.div
  variants={fadeUp}
  className="relative top-7 flex flex-col sm:flex-row gap-4 justify-center items-center"
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
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 bg-transparent border border-white/30 hover:bg-white/10 !text-white font-bold text-base md:text-lg rounded-full transition-all duration-300"
        >
          <Phone className="w-5 h-5" />
          <span>Call {PHONE_2}</span>
        </a>

      </m.div>

      {/* STATS */}
      <m.div
  variants={fadeUp}
  className="relative top-12 mt-10 flex flex-wrap justify-center gap-5 text-xs sm:text-sm font-medium text-white/40"
>

        <span className="flex items-center gap-1.5">
          <span className="text-[#F26A3D]">
            ★
          </span>
          4.9/5 Rating
        </span>

        <span>•</span>

        <span>
          5000+ Projects
        </span>

        <span>•</span>

        <span>
          10+ Years
        </span>

      </m.div>

    </AnimatedSection>

  </div>
</section>
</div>
);
}