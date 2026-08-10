import { m } from 'framer-motion';
import Container from '@/components/common/Container';
import { Link } from 'react-router-dom';

const cities = [
  { name: 'Bangalore', projects: '4,850+', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=400&q=80' },
  { name: 'Chennai', projects: '3,200+', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=400&q=80' },
  { name: 'Hyderabad', projects: '2,950+', image: 'https://images.unsplash.com/photo-1602214486518-e395567b4515?auto=format&fit=crop&w=400&q=80' },
  { name: 'Mysore', projects: '1,420+', image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=400&q=80' },
  { name: 'Coimbatore', projects: '1,840+', image: 'https://images.unsplash.com/photo-1583417616656-787053e1a067?auto=format&fit=crop&w=400&q=80' },
  { name: 'Kochi', projects: '2,150+', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=400&q=80' },
  { name: 'Trivandrum', projects: '1,380+', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=400&q=80' },
  { name: 'Mangalore', projects: '980+', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=400&q=80' },
  { name: 'Madurai', projects: '890+', image: 'https://images.unsplash.com/photo-1583417616656-787053e1a067?auto=format&fit=crop&w=400&q=80' },
  { name: 'Vijayawada', projects: '1,250+', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=400&q=80' },
  { name: 'Visakhapatnam', projects: '1,650+', image: 'https://images.unsplash.com/photo-1602214486518-e395567b4515?auto=format&fit=crop&w=400&q=80' },
  { name: 'Kozhikode', projects: '730+', image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=400&q=80' }
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
          className="text-center mb-[50px]"
        >
          <h2 className="text-[36px] sm:text-[44px] font-[800] text-[#17375E] mb-[24px]">
            Transforming Homes Across South India
          </h2>
          <p
  className="max-w-2xl mx-auto translate-x-90 text-[#64748B] text-[18px] sm:text-[20px] leading-8 mt-5">

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
