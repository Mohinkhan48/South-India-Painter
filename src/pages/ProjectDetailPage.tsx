import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { m } from 'framer-motion';
import { ChevronRight, ArrowLeft, MapPin, Clock, Ruler, ShieldCheck, Quote } from 'lucide-react';
import { projectsData } from '@/data/projectsData';
import BeforeAfterSlider from '@/components/common/BeforeAfterSlider';
import Button from '@/components/common/Button';
import Lightbox from '@/components/common/Lightbox';

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Scroll to top on mount or route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#FAF8F4] px-5 text-center">
        <h1 className="text-4xl font-bold text-[#0F2745] mb-4">Project Not Found</h1>
        <p className="text-[#5E6872] mb-8">The project you are looking for does not exist.</p>
        <Button variant="primary" onClick={() => navigate('/projects')}>
          Back to Projects
        </Button>
      </div>
    );
  }

  // Helper for opening lightbox
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Convert gallery strings to objects for Lightbox
  const lightboxImages = project.gallery.map((src, index) => ({
    id: index,
    src,
    alt: `${project.title} Image ${index + 1}`
  }));

  const relatedProjects = projectsData
    .filter((p) => p.id !== project.id && (p.category === project.category || p.city === project.city))
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-white pb-20">
      
      {/* ── Hero Section ── */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex flex-col justify-end overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${project.coverImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2745] via-[#0F2745]/60 to-transparent mix-blend-multiply" />
        </div>

        <div className="container relative z-10 text-white px-5 sm:px-8 pb-16">
          <m.nav 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center text-sm font-medium text-white/70 mb-6"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-1.5" />
            <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
            <ChevronRight className="w-4 h-4 mx-1.5" />
            <span className="text-white truncate max-w-[200px] sm:max-w-none">{project.title}</span>
          </m.nav>

          <m.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="text-xs font-bold bg-[#F26A4B] text-white uppercase tracking-wider px-3 py-1 rounded-full">
              {project.category}
            </span>
            <span className="flex items-center text-white/90 text-sm font-medium">
              <MapPin className="w-4 h-4 mr-1" />
              {project.city}
            </span>
          </m.div>

          <m.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[40px] md:text-[56px] font-bold tracking-tight leading-tight mb-4 max-w-4xl"
          >
            {project.title}
          </m.h1>
        </div>
      </section>

      {/* ── Main Content Grid ── */}
      <section className="container px-5 sm:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Left Column: Overview & Details */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Overview */}
            <m.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-[#0F2745] mb-6">Project Overview</h2>
              <p className="text-[#5E6872] text-[17px] leading-relaxed">
                {project.overview}
              </p>
            </m.div>

            {/* Before & After */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#0F2745] mb-6">The Transformation</h2>
              <BeforeAfterSlider 
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
              />
            </m.div>

            {/* Image Gallery */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#0F2745] mb-6">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.map((img, index) => (
                  <div 
                    key={index} 
                    className={`relative rounded-2xl overflow-hidden cursor-pointer group ${index === 0 && project.gallery.length % 2 !== 0 ? 'sm:col-span-2' : ''}`}
                    onClick={() => openLightbox(index)}
                  >
                    <img 
                      src={img} 
                      alt={`Gallery ${index + 1}`} 
                      className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#0F2745]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-white/90 backdrop-blur-sm text-[#0F2745] font-semibold px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        View Image
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </m.div>

          </div>

          {/* Right Column: Sticky Sidebar Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-[100px] space-y-8">
              
              {/* Info Card */}
              <m.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-[#FAF8F4] p-8 rounded-[24px] shadow-sm border border-[#E4DED5]"
              >
                <h3 className="text-xl font-bold text-[#0F2745] mb-6 border-b border-[#E4DED5] pb-4">Project Details</h3>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#F26A4B]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#5E6872] mb-1">Duration</p>
                      <p className="font-semibold text-[#0F2745]">{project.duration}</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                      <Ruler className="w-5 h-5 text-[#F26A4B]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#5E6872] mb-1">Area Covered</p>
                      <p className="font-semibold text-[#0F2745]">{project.areaCovered}</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                      <ShieldCheck className="w-5 h-5 text-[#F26A4B]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#5E6872] mb-1">Paint Brand Used</p>
                      <p className="font-semibold text-[#0F2745]">{project.paintBrandUsed}</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-[#E4DED5]">
                  <h4 className="text-sm font-bold text-[#0F2745] mb-3">Services Performed</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.servicesPerformed.map((service, idx) => (
                      <span key={idx} className="bg-white border border-[#E4DED5] text-[#5E6872] text-xs font-semibold px-3 py-1.5 rounded-full">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  <Button variant="primary" className="w-full">
                    Book Similar Project
                  </Button>
                </div>
              </m.div>

              {/* Testimonial (if exists) */}
              {project.testimonial && (
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#0F2745] p-8 rounded-[24px] text-white relative overflow-hidden"
                >
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-white/10" />
                  <p className="text-white/90 italic mb-6 relative z-10 leading-relaxed">
                    "{project.testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#F26A4B] flex items-center justify-center text-white font-bold">
                      {project.testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold">{project.testimonial.name}</p>
                    </div>
                  </div>
                </m.div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* ── Related Projects ── */}
      {relatedProjects.length > 0 && (
        <section className="container px-5 sm:px-8 mt-24 pt-16 border-t border-[#E4DED5]">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-[#0F2745]">Related Projects</h2>
            <Link to="/projects" className="hidden sm:flex items-center text-[#F26A4B] font-bold hover:text-[#0F2745] transition-colors">
              View All Projects
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((rp) => (
              <div 
                key={rp.id}
                onClick={() => navigate(`/projects/${rp.slug}`)}
                className="group cursor-pointer"
              >
                <div className="relative h-[240px] rounded-[20px] overflow-hidden mb-4">
                  <img 
                    src={rp.coverImage} 
                    alt={rp.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#0F2745]/20 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#F26A4B] uppercase tracking-wider">{rp.category}</span>
                  <span className="text-sm text-[#5E6872]">{rp.city}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F2745] group-hover:text-[#F26A4B] transition-colors">
                  {rp.title}
                </h3>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline" onClick={() => navigate('/projects')} className="w-full">
              View All Projects
            </Button>
          </div>
        </section>
      )}

      {/* Lightbox for Gallery */}
      {lightboxImages.length > 0 && (
        <Lightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}

