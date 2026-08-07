import { m } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import Container from '@/components/common/Container';
import { ArrowLeft, Clock } from 'lucide-react';
import { useEffect } from 'react';

export default function GenericPlaceholderPage() {
  const location = useLocation();
  const pageName = location.pathname.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Page';

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${pageName} | South India Painters`;
  }, [pageName]);

  return (
    <main className="w-full min-h-[80vh] bg-[#F8F9FA] flex items-center py-32">
      <Container>
        <m.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto bg-white rounded-[32px] p-10 sm:p-16 text-center shadow-[0_20px_60px_rgba(23,55,94,0.08)] border border-[#E0E4E8]"
        >
          <div className="w-24 h-24 bg-[#F47C20]/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#F47C20]/20 shadow-[0_0_40px_rgba(244,124,32,0.15)]">
            <Clock className="w-10 h-10 text-[#F47C20]" />
          </div>
          
          <h1 className="text-[36px] sm:text-[48px] font-[800] text-[#17375E] mb-6 leading-tight">
            {pageName} is <br className="hidden sm:block" />
            <span className="text-[#F47C20]">Coming Soon</span>
          </h1>
          
          <p className="text-[#64748B] text-[18px] sm:text-[20px] mb-12 max-w-2xl mx-auto leading-relaxed">
            We are working hard to bring you a premium experience. Our {pageName} feature will be available shortly. Stay tuned for exciting updates!
          </p>

          <Link 
            to="/resources"
            className="inline-flex items-center justify-center gap-3 h-[56px] px-8 bg-[#17375E] hover:bg-[#0f2440] text-white text-[16px] font-bold rounded-[14px] shadow-[0_12px_24px_rgba(23,55,94,0.2)] hover:-translate-y-1 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Resources
          </Link>
        </m.div>
      </Container>
    </main>
  );
}
