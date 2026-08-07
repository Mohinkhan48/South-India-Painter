import { m } from 'framer-motion';
import Container from '@/components/common/Container';
import { Calculator, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PaintCostBanner() {
  return (
    <section className="w-full bg-[#F8F9FA]">
      <Container>
        <m.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-[#17375E] rounded-[24px] p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-[0_30px_60px_rgba(23,55,94,0.2)]"
        >
          {/* Abstract Orange Background Accents */}
          <div className="absolute top-[-50%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[#F47C20]/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-30%] left-[-5%] w-[300px] h-[300px] rounded-full bg-[#F47C20]/10 blur-3xl pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-8 text-center sm:text-left z-10 lg:w-2/3">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#F47C20]/20 flex items-center justify-center shrink-0 border border-[#F47C20]/30 shadow-[0_0_30px_rgba(244,124,32,0.2)]">
              <Calculator className="w-10 h-10 sm:w-12 sm:h-12 text-[#F47C20]" />
            </div>
            <div>
              <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-bold text-white mb-3 leading-tight">
                Calculate Your Paint Budget
              </h2>
              <p className="text-[#b4c4d3] text-[18px] sm:text-[20px] max-w-xl">
                Estimate your painting cost instantly using our smart calculator. Get accurate pricing for your home interior and exterior.
              </p>
            </div>
          </div>

          <div className="shrink-0 z-10 w-full lg:w-auto flex justify-center lg:justify-end">
            <Link 
              to="/resources/paint-cost-calculator"
              className="group flex items-center justify-center gap-3 h-[64px] px-10 bg-[#F47C20] hover:bg-[#d96c18] text-white text-[18px] font-bold rounded-[16px] shadow-[0_16px_32px_rgba(244,124,32,0.3)] hover:-translate-y-1.5 transition-all duration-300 w-full sm:w-auto"
            >
              Calculate Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </m.div>
      </Container>
    </section>
  );
}
