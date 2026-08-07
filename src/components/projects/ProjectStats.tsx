import { m } from 'framer-motion';

const stats = [
  { id: 1, value: '5000+', label: 'Projects Completed' },
  { id: 2, value: '12+', label: 'Cities Covered' },
  { id: 3, value: '98%', label: 'Customer Satisfaction' },
  { id: 4, value: '10+', label: 'Years of Experience' },
];

export default function ProjectStats() {
  return (
    <section className="py-16 bg-white relative z-20 -mt-10 mx-5 sm:mx-8 max-w-7xl xl:mx-auto rounded-2xl shadow-elevated">
      <div className="container px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#E4DED5]">
          {stats.map((stat, index) => (
            <m.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col items-center justify-center text-center ${index === 0 ? '' : 'pl-8'}`}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-[#F26A4B] mb-2">{stat.value}</h3>
              <p className="text-[#5E6872] font-medium text-sm md:text-base uppercase tracking-wider">{stat.label}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
