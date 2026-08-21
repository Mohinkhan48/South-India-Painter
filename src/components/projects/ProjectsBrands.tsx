import { m } from 'framer-motion';

const interiorPaints = [
  'Tractor Emulsion',
  'Shine Emulsion',
  'Apcolite Premium Emulsion',
  'Premium Emulsion',
  'Royale Luxury Emulsion',
  'Royale Shyne',
  'Royale Matt',
];

const exteriorPaints = [
  'Ace Exterior Emulsion',
  'Ace Shyne',
  'Ace Sparc',
  'Apex Premium',
  'Apex Dust Proof',
  'Apex Shyne',
  'Apex Ultima Protek',
];

export default function ProjectsBrands() {
  return (
    <section className="relative isolate pt-20 pb-28 bg-transparent">
  <div className="absolute left-0 right-0 -top-10 bottom-0 -z-10 bg-[#FAF8F4]" />
      <div className="container mx-auto px-6">

        {/* Heading */}
        <m.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="relative -top-6 flex flex-col items-center text-center w-full mb-10"
>
          <span className="inline-flex items-center rounded-full bg-[#F26A4B]/10 text-[#F26A4B] px-5 py-2 text-xs font-bold uppercase tracking-[0.25em]">
            Premium Paint Brand
          </span>

          <h2 className="relative top-4 mt-5 text-4xl font-extrabold text-[#163152]">
  Trusted Asian Paints Products
</h2>

<p className="relative top-7 mt-2 max-w-3xl mx-auto text-lg leading-8 text-slate-600 text-center">
  We proudly use premium Asian Paints products to deliver durable,
  beautiful and long-lasting finishes for every residential,
  commercial and luxury painting project.
</p>
        </m.div>

        {/* Main content: Logo Left + Categories Right */}
        <div className="relative top-10 flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

          {/* LEFT — Logo */}
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0 flex flex-col items-center justify-center w-full lg:w-[260px] bg-white rounded-3xl border border-slate-200 shadow-lg p-10"
          >
            <img
              src="/images/projects/asian-paint-logo.png"
              alt="Asian Paints"
              className="w-[180px] h-auto object-contain"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <h4 className="mt-6 text-xl font-bold text-[#163152] text-center">Asian Paints</h4>
            <p className="mt-1 text-sm text-slate-500 text-center">Premium Quality Paint</p>
          </m.div>

          {/* RIGHT — Paint categories */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:-ml-6">

            {/* Interior Paints */}
            <m.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#F5F2EE] rounded-3xl border border-slate-200 p-7 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-xl bg-[#F26A4B] flex items-center justify-center text-white text-lg flex-shrink-0">
                  🎨
                </span>
                <h3 className="text-lg font-extrabold text-[#163152]">Interior Paints</h3>
              </div>

              <ul className="flex flex-col gap-2.5">
                {interiorPaints.map((paint) => (
                  <li key={paint} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F26A4B] flex-shrink-0" />
                    {paint}
                  </li>
                ))}
              </ul>
            </m.div>

            {/* Exterior Paints */}
            <m.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#F5F2EE] rounded-3xl border border-slate-200 p-7 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-xl bg-[#163152] flex items-center justify-center text-white text-lg flex-shrink-0">
                  🏠
                </span>
                <h3 className="text-lg font-extrabold text-[#163152]">Exterior Paints</h3>
              </div>

              <ul className="flex flex-col gap-2.5">
                {exteriorPaints.map((paint) => (
                  <li key={paint} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#163152] flex-shrink-0" />
                    {paint}
                  </li>
                ))}
              </ul>
            </m.div>

          </div>
        </div>

      </div>
    </section>
  );
}