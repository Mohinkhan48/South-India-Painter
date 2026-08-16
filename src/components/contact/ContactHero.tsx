import { m } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="relative min-h-[420px] flex items-center justify-center overflow-hidden" aria-label="Contact South India Painter">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} />
      <div className="absolute inset-0 bg-[#0B1D30]/80" />
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 max-w-5xl text-center pt-16">
        <m.div className="flex flex-col items-center" initial="hidden" animate="visible" variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-[#F26A3D]/10 text-[#F26A3D] border border-[#F26A3D]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F26A3D]" />
            Contact Us
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
            Let's Bring Your <span className="text-[#F26A3D]">Dream Home</span><br />to Life
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed mb-8">
            Talk to our painting experts and schedule a free site inspection anywhere in South India.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact-form" className="inline-flex items-center justify-center gap-2 h-12 px-7 bg-[#F26A3D] hover:bg-[#E4573C] text-[#102A43] font-bold rounded-full shadow-[0_10px_28px_rgba(242,106,61,0.35)] transition-all duration-300 hover:-translate-y-1">
              <span>Book Free Site Visit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:08023391256" className="inline-flex items-center justify-center gap-2 h-12 px-7 bg-white/5 border border-white/30 hover:bg-white/10 text-white font-semibold rounded-full transition-all duration-300">
              <Phone className="w-4 h-4" />
              <span>Call 080 23391256</span>
            </a>
          </div>
        </m.div>
      </div>
    </section>
  );
}
