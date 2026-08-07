import { m } from 'framer-motion';
import Container from '@/components/common/Container';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import business from '@/config/business';

export default function ResourcesCtaSection() {
  return (
    <section className="bg-white relative overflow-hidden">
      <Container>
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-[32px] overflow-hidden"
        >
          {/* Premium Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#17375E] via-[#17375E] to-[#F47C20]/40 z-0" />
          
          {/* Abstract Floating Shapes */}
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl pointer-events-none z-0" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-[#F47C20]/20 blur-3xl pointer-events-none z-0" />

          <div className="relative z-10 px-12 pt-24 pb-48 sm:pt-40 sm:pb-64 sm:px-24 flex flex-col items-center text-center">
            <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-[800] text-white mb-6 leading-tight">
              Ready to Transform Your Home?
            </h2>
            <p className="text-[#b4c4d3] text-[18px] sm:text-[22px] max-w-3xl mb-12">
              Book a free site inspection and receive a personalised quotation from our expert painting consultants.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
              <Link
  to="/contact"
  className="group inline-flex items-center justify-center gap-3
             h-[68px] min-w-[280px]
             px-12
             rounded-2xl
             bg-[#F47C20]
             text-white
             text-[20px]
             font-bold
             shadow-[0_18px_40px_rgba(244,124,32,0.35)]
             hover:bg-[#E56F12]
             hover:-translate-y-1
             hover:shadow-[0_22px_45px_rgba(244,124,32,0.45)]
             transition-all duration-300"
>
  Book Free Inspection
  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
</Link>
              
              <a
  href={`tel:${business.phone.replace(/\D/g, '')}`}
  className="group inline-flex items-center justify-center gap-3
             h-[68px] min-w-[240px]
             px-12
             rounded-2xl
             border-2 border-white/30
             bg-white/10
             backdrop-blur-md
             text-white
             text-[20px]
             font-bold
             hover:bg-white
             hover:text-[#163152]
             hover:-translate-y-1
             hover:shadow-xl
             transition-all duration-300"
>
  <Phone className="w-6 h-6" />
  Call Now
</a>
            </div>
          </div>
        </m.div>
      </Container>
    </section>
  );
}
