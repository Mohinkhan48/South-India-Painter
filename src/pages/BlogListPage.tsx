import { m } from 'framer-motion';
import Container from '@/components/common/Container';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

const blogs = [
  {
    category: 'Color Psychology',
    title: 'How to Choose the Perfect Color Palette for Your Living Room',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80',
    link: '/resources/blogs/color-palette',
    desc: 'Discover the secrets behind color psychology and how to select hues that create the perfect mood.'
  },
  {
    category: 'Expert Advice',
    title: 'Top 5 Waterproofing Mistakes and How to Avoid Them',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    link: '/resources/blogs/waterproofing-mistakes',
    desc: 'Protect your home from water damage by avoiding these common waterproofing errors.'
  },
  {
    category: 'Trends 2024',
    title: 'The Best Texture Painting Ideas for Modern Indian Homes',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    link: '/resources/blogs/texture-ideas',
    desc: 'Explore the latest wall texture trends that are transforming living spaces across the country.'
  },
  {
    category: 'DIY Tips',
    title: 'How to Prep Your Walls Before Painting Like a Pro',
    image: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=800&q=80',
    link: '/resources/blogs/wall-prep',
    desc: 'A step-by-step guide to cleaning, sanding, and priming your walls for a flawless finish.'
  },
  {
    category: 'Cost Guide',
    title: 'Understanding House Painting Costs in South India',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    link: '/resources/blogs/painting-costs',
    desc: 'A comprehensive breakdown of labor, material, and hidden costs to budget your project.'
  },
  {
    category: 'Exterior',
    title: 'Protecting Your Home Exterior from Harsh Monsoons',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    link: '/resources/blogs/monsoon-protection',
    desc: 'Learn which exterior paints and waterproofing techniques hold up best during heavy rains.'
  }
];

import { useSEO } from '@/hooks/useSEO';

export default function BlogListPage() {
  useSEO({
    title: 'Painting Guides, Color Tips & Expert Blogs | South India Painters',
    description: 'Expert painting guides, interior design inspiration, wall texture trends, and house painting cost insights by South India Painters.',
    canonical: 'https://southindiapainters.com/resources/blogs',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#F8F9FA] pt-28 pb-20 lg:py-32">
      <Container>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <Link to="/resources" className="inline-flex items-center gap-2 text-[#64748B] hover:text-[#F47C20] transition-colors mb-6 font-semibold">
            <ArrowLeft className="w-4 h-4" /> Back to Resources
          </Link>
          <h1 className="text-[44px] sm:text-[56px] font-[800] text-[#17375E] mb-4">
            Painting Guides & Blogs
          </h1>
          <p className="text-[#64748B] text-[18px] sm:text-[20px] max-w-2xl">
            Explore our extensive library of expert advice, trends, and practical tips for your next painting project.
          </p>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <m.div
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className="group flex flex-col bg-white rounded-[24px] overflow-hidden shadow-[0_12px_30px_rgba(23,55,94,0.06)] hover:shadow-[0_20px_50px_rgba(23,55,94,0.12)] border border-transparent hover:border-[#F47C20]/30 transform transition-all duration-300 hover:-translate-y-2 h-full"
            >
              <div className="w-full h-[240px] overflow-hidden relative shrink-0">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full">
                  <span className="text-[13px] font-bold text-[#F47C20] uppercase tracking-wider">
                    {blog.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-[22px] font-bold text-[#17375E] mb-3 leading-snug group-hover:text-[#F47C20] transition-colors duration-300">
                  {blog.title}
                </h3>
                <p className="text-[#64748B] text-[15px] leading-relaxed mb-6 flex-grow">
                  {blog.desc}
                </p>
                
                <div className="mt-auto pt-6 border-t border-[#E0E4E8]">
                  <Link 
                    to={blog.link}
                    className="inline-flex items-center gap-2 text-[#17375E] font-bold text-[15px] group-hover:text-[#F47C20] transition-colors"
                  >
                    Read More <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </Container>
    </main>
  );
}
