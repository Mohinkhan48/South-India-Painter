import { useState } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Lightbox from '@/components/common/Lightbox';

const projects = [
  {
    src: '/images/projects/our projects 1.png',
    alt: 'Our Recent Project 1',
  },
  {
    src: '/images/projects/our projects 2.png',
    alt: 'Our Recent Project 2',
  },
  {
    src: '/images/projects/our projects 3.png',
    alt: 'Our Recent Project 3',
  },
  {
    src: '/images/projects/our projects 4.png',
    alt: 'Our Recent Project 4',
  },
  {
    src: '/images/projects/our projects 5.png',
    alt: 'Our Recent Project 5',
  },
  {
    src: '/images/projects/our projects 6.png',
    alt: 'Our Recent Project 6',
  },
];

export default function RecentProjectsSection() {
  const shouldReduceMotion = useReducedMotion();
  const navigate = useNavigate();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="flex w-full justify-center bg-[#FAF8F4] pt-[120px] pb-[180px]">
      <div className="w-full px-5 flex flex-col items-center" style={{ maxWidth: 1280 }}>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={sectionVariants}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: 'easeOut' }}
          className="w-full flex flex-col items-center"
        >
          {/* ── Heading ── */}
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <h2 className="font-bold text-[#0F2745] text-[34px] md:text-[46px] lg:text-[56px] leading-[1.15] tracking-tight">
              Our Recent Projects
            </h2>
          </div>

          {/* ── Project Gallery Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] w-full">
            {projects.map((project, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  ease: 'easeOut',
                  delay: index * 0.1,
                }}
                className="group relative w-full h-[320px] rounded-[20px] overflow-hidden cursor-pointer shadow-sm hover:shadow-[0_12px_30px_rgba(15,39,69,0.12)] transition-shadow duration-300"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={project.src}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </m.div>
            ))}
          </div>

          {/* ── View All Projects Button ── */}
          <div style={{ marginTop: '60px' }}>
            <style>{`
              .btn-premium-blue {
                background-color: #16324F;
                color: #FFFFFF;
              }
              .btn-premium-blue:hover {
                background-color: #0F2740;
              }
            `}</style>
            <button
              onClick={() => {
                navigate('/projects');
                window.scrollTo(0, 0);
              }}
              className="flex items-center justify-center w-[300px] h-[58px] btn-premium-blue font-bold text-[16px] tracking-[0.5px] rounded-[14px] shadow-[0_12px_30px_rgba(22,50,79,0.25)] transition-all duration-300 ease-out hover:-translate-y-[3px] hover:shadow-[0_16px_40px_rgba(22,50,79,0.35)]"
            >
              VIEW ALL PROJECTS
            </button>
          </div>
        </m.div>
      </div>

      <Lightbox
        images={projects}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentIndex}
      />
    </section>
  );
}
