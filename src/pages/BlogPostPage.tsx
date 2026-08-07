import { m } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import Container from '@/components/common/Container';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { useEffect } from 'react';

import FinalCtaSection from '@/components/services/FinalCtaSection';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const blogTitle = slug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Painting Guide';

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${blogTitle} | South India Painters`;
  }, [blogTitle]);

  return (
    <main className="w-full bg-white">
      {/* Blog Hero */}
      <section className="pt-32 pb-16 bg-[#F8F9FA] border-b border-[#E0E4E8]">
        <Container className="max-w-4xl">
          <Link to="/resources/blogs" className="inline-flex items-center gap-2 text-[#64748B] hover:text-[#F47C20] transition-colors mb-8 font-semibold">
            <ArrowLeft className="w-4 h-4" /> Back to Blogs
          </Link>
          
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-6 text-[14px] font-semibold text-[#64748B]">
              <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full shadow-sm border border-[#E0E4E8]">
                <Calendar className="w-4 h-4 text-[#F47C20]" />
                <span>Aug 24, 2024</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full shadow-sm border border-[#E0E4E8]">
                <User className="w-4 h-4 text-[#F47C20]" />
                <span>Expert Team</span>
              </div>
            </div>

            <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] font-[800] text-[#17375E] leading-[1.1] mb-8">
              {blogTitle}
            </h1>
          </m.div>
        </Container>
      </section>

      {/* Blog Content Placeholder */}
      <section className="py-16 lg:py-24">
        <Container className="max-w-4xl">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="prose prose-lg max-w-none prose-headings:text-[#17375E] prose-p:text-[#64748B] prose-a:text-[#F47C20]"
          >
            <img 
              src="https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?auto=format&fit=crop&w=1200&q=80" 
              alt={blogTitle} 
              className="w-full h-[400px] object-cover rounded-[24px] mb-12 shadow-md"
            />
            
            <p className="text-[20px] leading-relaxed mb-6">
              Welcome to our comprehensive guide on <strong>{blogTitle.toLowerCase()}</strong>. Painting your home is one of the most exciting and transformative projects you can undertake. However, it requires proper planning, the right tools, and expert knowledge to achieve a flawless finish.
            </p>
            
            <h2 className="text-[28px] font-bold mt-10 mb-4">Why This Matters</h2>
            <p className="text-[18px] leading-relaxed mb-6">
              Whether you are tackling a DIY project or hiring professionals, understanding the nuances of surface preparation, material selection, and application techniques is crucial. In this guide, we dive deep into everything you need to know.
            </p>

            <div className="bg-[#17375E]/5 p-8 rounded-[16px] border-l-4 border-[#F47C20] my-8">
              <h3 className="text-[20px] font-bold text-[#17375E] mb-2">Pro Tip</h3>
              <p className="text-[#64748B] mb-0">
                Always ensure your surfaces are clean, dry, and primed before applying the top coat. Skipping prep work is the number one reason for premature paint failure.
              </p>
            </div>

            <h2 className="text-[28px] font-bold mt-10 mb-4">Next Steps</h2>
            <p className="text-[18px] leading-relaxed mb-6">
              Ready to bring your vision to life? Use our online calculators to estimate your budget, or reach out to our team of experts for a personalized consultation.
            </p>
          </m.div>
        </Container>
      </section>

      <FinalCtaSection />
    </main>
  );
}
