import { m } from 'framer-motion';
import Container from '@/components/common/Container';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
  }
];

export default function ResourcesBlogsSection() {
  return (
    <section className="bg-[#F8F9FA]">
      <Container>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-[50px]"
        >
          <div>
            <h2 className="text-[36px] sm:text-[44px] font-[800] text-[#17375E] mb-[24px]">
              Latest Painting Guides
            </h2>
            <p className="text-[#64748B] text-[18px] sm:text-[20px] max-w-2xl">
              Expert advice, trends, and inspiration from our professionals.
            </p>
          </div>
          <Link 
            to="/resources/blogs"
            className="hidden sm:inline-flex items-center gap-2 text-[#F47C20] font-bold text-[16px] hover:text-[#d96c18] transition-colors"
          >
            View All Guides <ArrowRight className="w-5 h-5" />
          </Link>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
          {blogs.map((blog, index) => (
            <m.div
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className="group flex flex-col bg-white rounded-[24px] overflow-hidden shadow-[0_12px_30px_rgba(23,55,94,0.06)] hover:shadow-[0_20px_50px_rgba(23,55,94,0.12)] border border-transparent hover:border-[#F47C20]/30 transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-full h-[240px] overflow-hidden relative">
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
              
              <div className="p-8 flex flex-col grow">
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
        
        <div className="mt-10 text-center sm:hidden">
          <Link 
            to="/resources/blogs"
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#F47C20] text-[#F47C20] font-bold text-[16px] h-[52px] px-8 rounded-[12px]"
          >
            View All Guides
          </Link>
        </div>
      </Container>
    </section>
  );
}
