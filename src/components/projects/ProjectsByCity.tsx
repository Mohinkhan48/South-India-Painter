import { m } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import { cityStats } from '@/data/projectsData';
import { useNavigate } from 'react-router-dom';

export default function ProjectsByCity() {
  const navigate = useNavigate();

  return (
    <section className="section bg-white overflow-hidden">
  <div className="container relative -top-6">
        <div className="relative -top-10">
          <SectionHeading 
            title="Projects By City"
            description="Explore our extensive portfolio of completed painting projects across major cities in South India."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {cityStats.map((city, index) => (
            <m.div
              key={city.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer h-[260px]"
              onClick={() => navigate(`/locations/${city.name.toLowerCase()}`)}
            >
              {/* Background Image */}
              <img 
                src={city.image} 
                alt={`${city.name} Projects`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2745]/90 via-[#0F2745]/40 to-transparent transition-opacity duration-300 group-hover:from-[#F26A4B]/90" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <div className="relative w-full flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold flex items-center justify-center mb-1">
                    <MapPin className="w-5 h-5 mr-2" />
                    {city.name}
                  </h3>
                  <p className="text-white/80 font-medium">
                    {city.count}+ Completed Projects
                  </p>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform group-hover:bg-white group-hover:text-[#F26A4B] transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
