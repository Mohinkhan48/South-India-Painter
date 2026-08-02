import { useState, useMemo } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Lightbox from '@/components/common/Lightbox';

const allProjects = [
  { id: 1, category: 'Interior', src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80', alt: 'Luxury Living Room' },
  { id: 2, category: 'Exterior', src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80', alt: 'Modern Villa Exterior' },
  { id: 3, category: 'Interior', src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80', alt: 'Premium Bedroom' },
  { id: 4, category: 'Texture', src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80', alt: 'Accent Wall Texture' },
  { id: 5, category: 'Waterproofing', src: 'https://images.unsplash.com/photo-1585128719715-46776b56a0d1?auto=format&fit=crop&w=800&q=80', alt: 'Roof Waterproofing' },
  { id: 6, category: 'Exterior', src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', alt: 'Luxury Home Exterior' },
  { id: 7, category: 'Interior', src: 'https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?auto=format&fit=crop&w=800&q=80', alt: 'Professional Interior Painting' },
  { id: 8, category: 'Texture', src: 'https://images.unsplash.com/photo-1562259942-1ca3a7631ce5?auto=format&fit=crop&w=800&q=80', alt: 'Custom Wall Texture' },
  { id: 9, category: 'Exterior', src: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=800&q=80', alt: 'House Painting Exterior' },
  { id: 10, category: 'Interior', src: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80', alt: 'Minimalist Dining Room' },
  { id: 11, category: 'Waterproofing', src: 'https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&w=800&q=80', alt: 'Wall Moisture Protection' },
  { id: 12, category: 'Texture', src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80', alt: 'Decorative Finish' },
];

const categories = ['All', 'Interior', 'Exterior', 'Texture', 'Waterproofing'];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return allProjects;
    return allProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(6); // Reset pagination on category change
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F4] pt-[120px] pb-[120px]">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* ── Breadcrumbs ── */}
        <nav className="flex items-center text-sm font-medium text-[#6B7280] mb-8">
          <Link to="/" className="hover:text-[#F26A4B] transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-[#0F2745]">Projects</span>
        </nav>

        {/* ── Page Heading ── */}
        <div className="mb-12">
          <m.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[40px] md:text-[56px] font-bold text-[#0F2745] tracking-tight leading-tight"
          >
            Our Projects
          </m.h1>
        </div>

        {/* ── Category Filter Bar ── */}
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-[60px]"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-6 py-2.5 rounded-full font-semibold text-[15px] transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#F56A54] text-white shadow-md'
                  : 'bg-white text-[#0F2745] border border-[rgba(15,39,69,0.08)] hover:border-[#F56A54] hover:text-[#F56A54]'
              }`}
            >
              {cat}
            </button>
          ))}
        </m.div>

        {/* ── Gallery Grid ── */}
        <m.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <m.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative w-full h-[320px] rounded-[20px] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={project.src}
                  alt={project.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </m.div>
            ))}
          </AnimatePresence>
        </m.div>

        {/* ── Load More Button ── */}
        {visibleCount < filteredProjects.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleLoadMore}
              className="flex items-center justify-center w-[200px] h-[56px] border-2 border-[#F56A54] text-[#F56A54] font-bold text-[16px] rounded-[14px] transition-all duration-300 hover:bg-[#F56A54] hover:text-white hover:scale-105"
            >
              Load More
            </button>
          </div>
        )}

      </div>

      <Lightbox
        images={filteredProjects}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
