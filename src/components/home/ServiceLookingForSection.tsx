import { m, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    id: 'fresh',
    name: 'FRESH PAINTING',
    description: 'Add the perfect finishing touch to your newly built home with our premium painting expertise.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'repaint',
    name: 'RE-PAINTING',
    description: 'Refresh your existing home with premium repainting solutions, flawless finishes and expert craftsmanship.',
    image: 'https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?auto=format&fit=crop&w=800&q=80',
  }
];

export default function ServiceLookingForSection() {
  const shouldReduceMotion = useReducedMotion();
  const navigate = useNavigate();

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const handleBookNowClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="flex w-full justify-center bg-[var(--color-background)] pt-[100px] pb-[120px]">
      <div className="w-full px-5 flex flex-col items-center" style={{ maxWidth: 1320 }}>
        
        {/* ── Premium Container Block ── */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={sectionVariants}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeOut' }}
          className="w-full flex flex-col items-center bg-white border border-[rgba(15,39,69,0.08)] rounded-[32px] shadow-[0_20px_60px_rgba(15,39,69,0.08)]"
          style={{ padding: 'clamp(40px, 6vw, 70px) clamp(24px, 5vw, 60px)' }}
        >
          {/* Decorative Coral Accent Bar */}
          <div className="w-[80px] h-[4px] bg-[#F26A4B] rounded-full mb-[32px]"></div>

          {/* ── Heading ── */}
          <div className="w-full max-w-[800px] text-center" style={{ marginBottom: '60px' }}>
            <h2 className="font-medium text-[var(--color-primary)] text-[34px] md:text-[46px] lg:text-[56px] leading-[1.15] tracking-tight">
              What Painting Service<br className="hidden sm:block" /> Are You Looking For?
            </h2>
          </div>

          {/* ── Services Cards Container ── */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-[20px] md:gap-[30px] lg:gap-[40px] w-full">
            {services.map((service, index) => (
              <m.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  ease: 'easeOut',
                  delay: index * 0.1,
                }}
                className="group relative w-full md:w-[420px] lg:w-[480px] h-[500px] rounded-[28px] overflow-hidden shadow-[0_12px_40px_rgba(16,42,67,0.08)] hover:shadow-[0_20px_50px_rgba(16,42,67,0.15)] transition-all duration-300 ease-out hover:-translate-y-[8px] cursor-pointer"
                onClick={handleBookNowClick}
              >
                {/* Background Image */}
                <img
                  src={service.image}
                  alt={service.name}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.08]"
                />

                {/* Bottom Overlay */}
                <div 
                  className="absolute bottom-0 left-0 w-[95%] sm:w-[90%] md:w-[95%] lg:w-[90%] bg-gradient-to-t from-black/80 to-black/60 backdrop-blur-[2px] rounded-tr-[50px] flex flex-col items-start border-t border-r border-white/10 transition-colors duration-300 group-hover:from-black/90 group-hover:to-black/70"
                  style={{ padding: '40px 32px 32px 32px' }}
                >
                  <h3 className="text-white text-[42px] font-bold mb-[12px] tracking-tight uppercase leading-none">
                    {service.name}
                  </h3>
                  <p className="text-[rgba(255,255,255,0.9)] text-[18px] leading-[1.7] max-w-[90%] mb-[24px]">
                    {service.description}
                  </p>

                  <button
                    onClick={handleBookNowClick}
                    className="flex items-center justify-center w-[180px] h-[54px] rounded-[999px] bg-white text-[#F26A4B] font-semibold text-[16px] shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-all duration-300 ease-out hover:bg-[#F26A4B] hover:text-white hover:-translate-y-[2px]"
                  >
                    Book Now
                  </button>
                </div>
              </m.div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
