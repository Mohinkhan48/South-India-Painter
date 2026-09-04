import { m, useReducedMotion } from 'framer-motion';

const brands = [
  {
    name: 'Asian Paints',
    logo: '/images/projects/asian-paint-logo.png',
  },
  {
    name: 'Birla Opus',
    logo: '/images/projects/opus logo.png',
  },
  {
    name: 'JSW',
    logo: '/images/projects/jsw logo.png',
  },
];

const cardColors = ['#FFF5F0', '#FFF0EA', '#FDE9E2', '#FDF4EC', '#F0F4FF', '#F0FAF5'];

export default function TrustedBrandPartnerSection() {
  const shouldReduceMotion = useReducedMotion();

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  // Repeat brands enough times for seamless scrolling
  const repeated = Array.from({ length: 6 }).flatMap(() => brands);

  const brandItems = repeated.map((brand, i) => (
    <div
      key={i}
      className="flex flex-col items-center justify-center rounded-[18px] border border-[rgba(15,39,69,0.06)] shadow-[0_8px_20px_rgba(15,39,69,0.04)] px-[20px] py-[20px] shrink-0 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.03] cursor-pointer"
      style={{
        width: '220px',
        height: '110px',
        backgroundColor: cardColors[i % cardColors.length],
      }}
    >
      <img
        src={brand.logo}
        alt={`${brand.name} Logo`}
        width="120"
        height="38"
        loading="lazy"
        className="h-[38px] w-auto object-contain mb-[8px]"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
      <span className="text-[15px] font-bold text-[#0F2745] whitespace-nowrap">
        {brand.name}
      </span>
    </div>
  ));

  return (
    <section className="flex w-full justify-center bg-[#FAF8F4] pt-[100px] pb-[140px] overflow-hidden">
      <div className="w-full flex flex-col items-center">

        {/* ── Heading ── */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={sectionVariants}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeOut' }}
          className="w-full max-w-7xl px-5 flex flex-col items-center text-center mb-[60px]"
        >
          <h2 className="font-bold text-[#0F2745] text-[30px] md:text-[38px] xl:text-[54px] leading-[1.15] mb-[16px]">
            Trusted Brand Partners
          </h2>
          <p className="text-[20px] text-[#6B7280] max-w-[800px] leading-[1.6]">
            We proudly use premium products from Asian Paints, Birla Opus and JSW to deliver long-lasting, beautiful finishes.
          </p>
        </m.div>

        {/* ── Infinite Scrolling Marquee ── */}
        <div
  className="w-full overflow-hidden flex group"
  style={{ marginTop: '40px' }}
>
          {/* First Track */}
          <div
            className="flex shrink-0 marquee-track"
            style={{ gap: '28px', paddingRight: '28px' }}
          >
            {brandItems}
          </div>
          {/* Second Track for seamless loop */}
          <div
            className="flex shrink-0 marquee-track"
            style={{ gap: '28px', paddingRight: '28px' }}
            aria-hidden="true"
          >
            {brandItems}
          </div>
        </div>

        <style>{`
          .marquee-track {
            animation: marquee-scroll 30s linear infinite;
          }
          .group:hover .marquee-track {
            animation-play-state: paused;
          }
          @keyframes marquee-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
        `}</style>
      </div>
    </section>
  );
}
