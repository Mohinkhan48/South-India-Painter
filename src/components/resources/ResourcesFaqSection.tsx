import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import Container from '@/components/common/Container';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils';

const faqs = [
  {
    question: 'How much paint do I need?',
    answer: 'The amount of paint depends on the square footage of your walls. As a general rule, one gallon of high-quality paint covers about 350-400 square feet with one coat. However, textured walls, bare drywall, and dramatic color changes usually require two coats or more.'
  },
  {
    question: 'Which paint lasts longer?',
    answer: 'Premium 100% acrylic latex paint generally offers the best durability, flexibility, and color retention for both interiors and exteriors. For high-traffic areas, higher sheen finishes (like satin or semi-gloss) are more washable and long-lasting than flat finishes.'
  },
  {
    question: 'How long does painting take?',
    answer: 'A standard-sized room (e.g., 10x12 feet) typically takes one professional painter a full day (6-8 hours) to prep, prime, and apply two coats of paint. Larger projects or exteriors can take anywhere from a few days to a couple of weeks, depending on crew size and weather.'
  },
  {
    question: 'How much does painting cost?',
    answer: 'Painting costs vary based on the surface area, the type and quality of paint selected, and the level of prep work required. We recommend using our Paint Cost Calculator for an instant estimate, or booking a free site visit for a precise, personalized quotation.'
  }
];

export default function ResourcesFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white">
      <Container className="max-w-4xl">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-[50px]"
        >
          <h2 className="text-[36px] sm:text-[44px] font-[800] text-[#17375E] mb-[24px]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#64748B] text-[18px] sm:text-[20px]">
            Quick answers to common questions about your painting project.
          </p>
        </m.div>

        <div className="flex flex-col gap-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                className={cn(
                  "border rounded-[20px] overflow-hidden transition-all duration-300",
                  isOpen 
                    ? "border-[#F47C20]/50 bg-[#F47C20]/5 shadow-[0_10px_30px_rgba(244,124,32,0.1)]" 
                    : "border-[#E0E4E8] bg-white hover:border-[#17375E]/30"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F47C20] focus-visible:ring-offset-2 rounded-[20px]"
                >
                  <span className={cn(
                    "text-[18px] sm:text-[20px] font-bold transition-colors duration-300",
                    isOpen ? "text-[#F47C20]" : "text-[#17375E]"
                  )}>
                    {faq.question}
                  </span>
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300",
                    isOpen ? "bg-[#F47C20] text-white" : "bg-[#F8F9FA] text-[#17375E]"
                  )}>
                    <ChevronDown className={cn(
                      "w-5 h-5 transition-transform duration-300",
                      isOpen ? "rotate-180" : ""
                    )} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <m.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 sm:px-8 pb-8 pt-0 text-[#64748B] text-[16px] sm:text-[18px] leading-relaxed">
                        {faq.answer}
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </m.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
