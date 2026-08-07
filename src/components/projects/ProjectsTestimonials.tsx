import { m } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsData } from '@/data/projectsData';
import SectionHeading from '@/components/common/SectionHeading';
import { useCallback } from 'react';

// Extract testimonials from projects data
const testimonials = projectsData
  .filter(p => p.testimonial)
  .map(p => ({
    id: p.id,
    name: p.testimonial!.name,
    city: p.city,
    text: p.testimonial!.text,
    rating: p.testimonial!.rating,
    image: `https://i.pravatar.cc/150?u=${p.id}` // Placeholder avatar
  }));

export default function ProjectsTestimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (testimonials.length === 0) return null;

  return (
    <section className="section bg-[#FAF8F4]">
      <div className="container relative">
        <SectionHeading 
          title="What Our Clients Say"
          description="Read testimonials from our satisfied customers across South India."
          align="center"
        />

        <div className="relative mt-12 px-12 md:px-16">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6 min-w-0"
                >
                  <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-8 rounded-[24px] shadow-soft h-full flex flex-col relative"
                  >
                    <Quote className="absolute top-6 right-6 w-10 h-10 text-[#F26A4B] opacity-10" />
                    
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-[#C89B5B] fill-[#C89B5B]' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    
                    <p className="text-[#5E6872] text-[16px] leading-relaxed mb-8 flex-grow">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#FAF8F4]"
                      />
                      <div>
                        <h4 className="font-bold text-[#0F2745]">{testimonial.name}</h4>
                        <p className="text-sm text-[#5E6872]">{testimonial.city}</p>
                      </div>
                    </div>
                  </m.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-[#0F2745] hover:text-[#F26A4B] hover:shadow-lg transition-all z-10"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-[#0F2745] hover:text-[#F26A4B] hover:shadow-lg transition-all z-10"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
