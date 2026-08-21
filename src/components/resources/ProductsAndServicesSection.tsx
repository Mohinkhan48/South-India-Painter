import { m } from 'framer-motion';
import Container from '@/components/common/Container';
import { 
  Paintbrush, 
  Home, 
  Droplets, 
  Scroll, 
  Layers, 
  Palette, 
  Calculator, 
  TreePine, 
  Package, 
  Sparkles, 
  Stamp, 
  Grid
} from 'lucide-react';

const services = [
  { title: 'Interior Painting', icon: Paintbrush },
  { title: 'Exterior Painting', icon: Home },
  { title: 'Waterproofing', icon: Droplets },
  { title: 'Wallpaper', icon: Scroll },
  { title: 'Wall Texture', icon: Layers },
  { title: 'Colour Visualizer', icon: Palette },
  { title: 'Paint Calculator', icon: Calculator },
  { title: 'Wood Coating', icon: TreePine },
  { title: 'Paint Products', icon: Package },
  { title: 'Home Cleaning', icon: Sparkles },
  { title: 'Wall Stencil', icon: Stamp },
  { title: 'Grouting', icon: Grid }
];

export default function ProductsAndServicesSection() {
  return (
    <section className="bg-[#F8F9FA] py-16 sm:py-20">
      <Container>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center w-full mb-[50px]"
        >
          <h2 className="text-[36px] sm:text-[44px] font-[800] text-[#17375E]">
            Products & Services
          </h2>
          <p className="max-w-2xl mx-auto text-[#64748B] text-[18px] sm:text-[20px] leading-8 text-center mt-2">
            Discover our comprehensive range of painting solutions and specialized services tailored for your home.
          </p>
        </m.div>

        <div
  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[24px] sm:gap-[32px]"
  style={{ transform: 'translateY(35px)' }}
>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <m.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
              >
                <div className="group flex flex-col items-center justify-center p-6 sm:p-8 h-[220px] bg-white rounded-[24px] border-2 border-transparent shadow-[0_10px_30px_rgba(23,55,94,0.06)] hover:border-[#F47C20] hover:shadow-[0_20px_50px_rgba(244,124,32,0.15)] transform transition-all duration-300 hover:-translate-y-2 cursor-pointer select-none">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[20px] bg-[#F8F9FA] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#F47C20]/10 group-hover:shadow-inner transition-all duration-300">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#17375E] group-hover:text-[#F47C20] transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[16px] sm:text-[18px] font-bold text-[#17375E] text-center leading-tight group-hover:text-[#F47C20] transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
              </m.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
