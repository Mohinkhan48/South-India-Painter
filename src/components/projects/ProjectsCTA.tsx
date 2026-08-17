import { m } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import Button from '@/components/common/Button';

export default function ProjectsCTA() {
  return (
    <section
      className="relative overflow-hidden mt-16 sm:mt-20 py-24 bg-gradient-to-r from-[#163152] via-[#1B365D] to-[#2A3556]"
      style={{ transform: 'translateY(50px)' }}
    >

      {/* Background Blur */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#F26A4B]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[420px] h-[420px] bg-white/5 rounded-full blur-3xl" />

      <div className="container relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center w-full">

        {/* Badge */}
        <m.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white backdrop-blur-md">
            Free Consultation
          </span>
        </m.div>

        {/* Heading */}
        <m.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-7 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
        >
          Ready to Transform
          <br />
          <span className="text-[#F26A4B]">
            Your Property?
          </span>
        </m.h2>

        {/* Description */}
        <m.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-9 text-white/85 text-center"
        >
          Book your <strong className="text-white">FREE site inspection</strong> today
          and receive expert colour consultation, transparent pricing, and premium
          painting solutions from South India's trusted painters.
        </m.p>

        {/* Buttons */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative lg:-left-34 mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >

          <Button
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight size={20} />}
            className="w-full sm:w-auto h-14 sm:h-16 min-w-0 sm:min-w-[240px] px-6 sm:px-8 rounded-full text-base sm:text-lg font-bold shadow-xl hover:scale-105 transition-all"
          >
            Book Free Site Visit
          </Button>

          <a
            href="tel:08023391256"
            className="inline-flex items-center justify-center w-full sm:w-auto h-14 sm:h-16 min-w-0 sm:min-w-[220px] px-6 sm:px-8 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-md text-white text-base sm:text-lg font-semibold hover:bg-white hover:text-[#163152] transition-all duration-300"
          >
            <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
            Call Now
          </a>

          <a
            href="https://wa.me/919740556799"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto h-14 sm:h-16 min-w-0 sm:min-w-[220px] px-6 sm:px-8 rounded-full bg-[#25D366] text-white text-base sm:text-lg font-semibold shadow-xl hover:bg-[#1EBE5D] hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
            WhatsApp Us
          </a>

        </m.div>

      </div>
    </section>
  );
}