import { useEffect } from 'react';
import ProjectsGallery from '@/components/projects/ProjectsGallery';
import ProjectsByCity from '@/components/projects/ProjectsByCity';
import ProjectsBrands from '@/components/projects/ProjectsBrands';
import ProjectsCTA from '@/components/projects/ProjectsCTA';
import ProjectsContact from '@/components/projects/ProjectsContact';
import { useSEO } from '@/hooks/useSEO';

export default function ProjectsPage() {
  useSEO({
    title: 'Our Projects | South India Painters',
    description:
      'See completed painting projects by South India Painters — luxury villas, apartments, commercial offices and industrial buildings across Bangalore and South India.',
    canonical: 'https://southindiapainters.com/projects',
  });

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ width: '100%', boxSizing: 'border-box', background: '#FAF8F4' }}>
      <ProjectsGallery />
      <ProjectsByCity />
      <ProjectsBrands />
      <ProjectsCTA />
      <ProjectsContact />
    </div>
  );
}

