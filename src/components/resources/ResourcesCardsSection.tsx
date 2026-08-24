import { m } from 'framer-motion';
import Container from '@/components/common/Container';

const cards = [
  {
    title: 'Colour Visualizer',
    image:
      'https://images.unsplash.com/photo-1562184552-997c461abbe6?auto=format&fit=crop&w=800&q=80',
    link: '/resources/colour-visualizer',
  },
  {
    title: 'Colour Trends & Ideas',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    link: '/colour-ideas',
  },
  {
    title: 'Painting Tips',
    image:
      'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=800&q=80',
    link: '/resources/blogs',
  },
  {
    title: 'Room Colour Ideas',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    link: '/colour-ideas',
  },
  {
    title: 'Paint & Finish Guide',
    image:
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80',
    link: '/resources/blogs',
  },
  {
    title: 'Waterproofing Guide',
    image:
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    link: '/resources/blogs',
  },
];

export default function ResourcesCardsSection() {
  return (
    <section className="py-20">
      <Container>

        {/* Section Heading */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col items-center text-center w-full mb-[50px]"
        >
          <h2 className="text-[36px] sm:text-[44px] font-[800] text-[#17375E]">
            Explore Resources
          </h2>

          <p className="max-w-2xl mx-auto text-[#64748B] text-[18px] sm:text-[20px] leading-8 mt-2 text-center">
            Helpful guides, colour inspiration and expert painting tips to
            make your painting journey seamless and enjoyable.
          </p>
        </m.div>

        {/* Resource Cards */}
        <div
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[32px]"
  style={{ transform: 'translateY(50px)' }}
>
          {cards.map((card, index) => (
            <m.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.1,
              }}
            >
              <div
                className="group relative block w-full h-[340px] rounded-[24px] overflow-hidden shadow-[0_12px_40px_rgba(23,55,94,0.08)] hover:shadow-[0_20px_60px_rgba(244,124,32,0.2)] transform transition-all duration-500 hover:-translate-y-2"
              >
                {/* Background Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />

                {/* Premium Dark Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#17375E] via-[#17375E]/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95" />

                {/* Orange Hover Border */}
                <div className="absolute inset-0 border-[3px] border-transparent group-hover:border-[#F47C20]/50 rounded-[24px] transition-colors duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center z-10">
  <h3 className="relative bottom-[20px] text-white text-[28px] font-bold mb-4 leading-tight transform transition-transform duration-500 group-hover:-translate-y-2">
    {card.title}
  </h3>
</div>
              </div>
            </m.div>
          ))}
        </div>

      </Container>
    </section>
  );
}