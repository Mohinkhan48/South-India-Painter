import { m } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '@/components/common/Button';

export default function ProjectsHero() {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Navy Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1579208035275-01e4a11fbeaf?auto=format&fit=crop&w=1920&q=80")' }}
      >
        <div className="absolute inset-0 bg-[#0F2745]/70 mix-blend-multiply" />
      </div>

      <div className="container relative z-10 text-center text-white px-5 sm:px-8 mt-16">
        {/* Breadcrumb */}
        <m.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center text-sm font-medium text-white/70 mb-6"
        >
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-white">Projects</span>
        </m.nav>

        {/* Heading */}
        <m.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[40px] md:text-[64px] font-bold tracking-tight leading-tight mb-6"
        >
          Our Projects
        </m.h1>

        {/* Subtitle */}
        <m.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[18px] md:text-[22px] max-w-2xl mx-auto text-white/90 mb-10 leading-relaxed"
        >
          Every project reflects our commitment to quality, craftsmanship, and customer satisfaction across South India.
        </m.p>

        {/* CTA Buttons */}
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="primary" size="lg" className="w-full sm:w-auto">
            View Residential Projects
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-[#0F2745]">
            Book Free Site Visit
          </Button>
        </m.div>
      </div>
    </section>
  );
}
