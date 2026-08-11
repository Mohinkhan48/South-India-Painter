import { m } from 'framer-motion';

const brands = [
  {
    id: 1,
    name: 'Asian Paints',
    logo: '/images/projects/asian-paint-logo.png',
  },
  {
    id: 2,
    name: 'Asian Paints',
    logo: '/images/projects/asian-paint-logo.png',
  },
  {
    id: 3,
    name: 'Asian Paints',
    logo: '/images/projects/asian-paint-logo.png',
  },
  {
    id: 4,
    name: 'Asian Paints',
    logo: '/images/projects/asian-paint-logo.png',
  },
];

export default function ProjectsBrands() {
  return (
    <section className="py-20 bg-white border-y border-slate-200">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center w-full"
        >
          <span className="inline-flex items-center rounded-full bg-[#F26A4B]/10 text-[#F26A4B] px-5 py-2 text-xs font-bold uppercase tracking-[0.25em]">
            Premium Paint Brand
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-[#163152]">
            Trusted Asian Paints Products
          </h2>

          <p className="mt-2 max-w-3xl mx-auto text-lg leading-8 text-slate-600 text-center">
            We proudly use premium Asian Paints products to deliver durable,
            beautiful and long-lasting finishes for every residential,
            commercial and luxury painting project.
          </p>
        </m.div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {brands.map((brand, index) => (
            <m.div
              key={brand.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="group bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 h-[190px] flex flex-col items-center justify-center"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-[170px] h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  console.error("Image not found:", brand.logo);
                  e.currentTarget.style.display = "none";
                }}
              />

              <h4 className="mt-5 text-xl font-bold text-[#163152]">
                {brand.name}
              </h4>

              <p className="mt-1 text-sm text-slate-500">
                Premium Quality Paint
              </p>
            </m.div>
          ))}

        </div>

      </div>
    </section>
  );
}