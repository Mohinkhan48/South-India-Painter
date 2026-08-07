import { useState, useMemo } from 'react';
import { galleryImages, projectCategories } from '@/data/projectsData';
import Lightbox from '@/components/common/Lightbox';

export default function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(16);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') return galleryImages;
    return galleryImages.filter((img) => 
      img.categories.includes(activeCategory)
    );
  }, [activeCategory]);

  // Featured = always the first image
  const featuredImage = filteredImages.length > 0 ? filteredImages[0] : null;
  // Grid images start from index 1, show exactly visibleCount items → always fills complete rows
  const gridImages = filteredImages.slice(1, visibleCount + 1);
  const hasMore = visibleCount + 1 < filteredImages.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 16);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(16);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Lightbox sees the full filtered list (featured at 0, grid items at 1+)
  const lightboxImagesList = filteredImages.map((img) => ({
    src: img.src,
    alt: 'Project work'
  }));

  return (
    <section style={{ width: '100%', boxSizing: 'border-box', background: '#FAF8F4', paddingBottom: '96px' }}>
      
      {/* Title & Divider */}
      <div className="w-full text-center px-5">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0F2745] tracking-[0.1em] uppercase">
          PROJECTS
        </h1>
        <div className="w-16 md:w-24 h-[1px] bg-[#0F2745]/20 mx-auto mt-6 mb-[60px]" />
      </div>

      <div style={{ width: '100%', maxWidth: 1500, margin: '0 auto', paddingLeft: 'clamp(16px, 4vw, 48px)', paddingRight: 'clamp(16px, 4vw, 48px)', boxSizing: 'border-box' }}>
        
        {/* Featured Image */}
        {featuredImage && (
          <div
            style={{ width: '100%', height: 'clamp(300px, 45vw, 580px)', borderRadius: 24, overflow: 'hidden', marginBottom: 50, cursor: 'pointer', boxShadow: '0 8px 40px rgba(0,0,0,0.12)' }}
            className="group"
            onClick={() => openLightbox(0)}
          >
            <img
              src={featuredImage.src}
              alt="Featured Project"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.7s ease' }}
              className="group-hover:scale-[1.02]"
            />
          </div>
        )}

        {/* Category Filters */}
        <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginBottom: 48 }}>
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-5 py-2 rounded-full font-semibold text-[13px] sm:text-[14px] border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#F26A4B] text-white border-[#F26A4B] shadow'
                  : 'bg-white text-[#0F2745] border-gray-200 hover:border-[#F26A4B] hover:text-[#F26A4B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid — 4 equal columns, always complete rows */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, width: '100%' }}>
          {gridImages.map((img, idx) => (
            <div
              key={img.id}
              style={{ borderRadius: 18, overflow: 'hidden', cursor: 'pointer', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
              className="group transition-shadow duration-300 hover:shadow-xl"
              onClick={() => openLightbox(idx + 1)}
            >
              <img
                src={img.src}
                alt="Project"
                loading="lazy"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                className="group-hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="flex justify-center mt-[60px]">
            <button
              onClick={handleLoadMore}
              className="flex items-center justify-center w-[200px] h-[56px] border-2 border-[#F26A4B] text-[#F26A4B] font-bold text-[16px] rounded-full transition-all duration-300 hover:bg-[#F26A4B] hover:text-white hover:scale-105 shadow-sm"
            >
              Load More
            </button>
          </div>
        )}
        
      </div>

      <Lightbox
        images={lightboxImagesList}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}
