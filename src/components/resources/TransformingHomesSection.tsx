import { m } from 'framer-motion';
import Container from '@/components/common/Container';
import { Link } from 'react-router-dom';

const cities = [
  { name: 'Bangalore',     projects: '4,850+', image: '/images/projects/banglore.png' },
  { name: 'Chennai',       projects: '3,200+', image: '/images/projects/chennai.png' },
  { name: 'Hyderabad',     projects: '2,950+', image: '/images/projects/hyderabad.png' },
  { name: 'Mysore',        projects: '1,420+', image: '/images/projects/mysore.png' },
  { name: 'Coimbatore',   projects: '1,840+', image: '/images/projects/coimbatur.png' },
  { name: 'Kochi',         projects: '2,150+', image: '/images/projects/kochi.png' },
  { name: 'Trivandrum',    projects: '1,380+', image: '/images/projects/trivandrum.png' },
  { name: 'Mangalore',     projects: '980+',   image: '/images/projects/manglore.png' },
  { name: 'Madurai',       projects: '890+',   image: '/images/projects/madurai.png' },
  { name: 'Vijayawada',    projects: '1,250+', image: '/images/projects/vijyawada.png' },
  { name: 'Visakhapatnam', projects: '1,650+', image: '/images/projects/vishakapatnam.png' },
  { name: 'Kozhikode',     projects: '730+',   image: '/images/projects/Kkozhikode.png' },
];

export default function TransformingHomesSection() {
  return (
    <section className="bg-white">
      <Container>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center w-full mb-[50px]"
        >
          <h2 className="text-[36px] sm:text-[44px] font-[800] text-[#17375E]">
            Transforming Homes Across South India
          </h2>
          <p
  className="max-w-2xl mx-auto text-[#64748B] text-[18px] sm:text-[20px] leading-8 mt-2 text-center">

  Interactive tools and helpful guides to make your painting journey seamless
  and enjoyable.
</p>
        </m.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[32px]">
          {cities.map((city, index) => (
            <m.div
              key={city.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
              className="h-full"
            >
              <Link
                to={`/locations/${city.name.toLowerCase()}`}
                className="group flex flex-col items-center bg-[#F8F9FA] rounded-[24px] p-8 border-2 border-transparent shadow-[0_8px_24px_rgba(23,55,94,0.04)] hover:border-[#F47C20] hover:shadow-[0_20px_40px_rgba(244,124,32,0.12)] hover:bg-white transform transition-all duration-300 hover:-translate-y-2 h-full"
              >
                <div className="w-[140px] h-[140px] rounded-full overflow-hidden mb-6 shadow-[0_12px_24px_rgba(23,55,94,0.15)] border-[4px] border-white group-hover:border-[#F47C20]/20 transition-colors duration-300 relative shrink-0">
                  <img 
                    src={city.image} 
                    alt={city.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-[22px] font-bold text-[#17375E] mb-2 group-hover:text-[#F47C20] transition-colors duration-300 text-center">
                  {city.name}
                </h3>
                <p className="text-[15px] font-semibold text-[#64748B] text-center">
                  {city.projects} Projects
                </p>
              </Link>
            </m.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
