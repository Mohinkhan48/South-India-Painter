import { m } from 'framer-motion';
import Container from '@/components/common/Container';
import { Link } from 'react-router-dom';
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
  { title: 'Interior Painting', icon: Paintbrush, link: '/services/interior-painting' },
  { title: 'Exterior Painting', icon: Home, link: '/services/exterior-painting' },
  { title: 'Waterproofing', icon: Droplets, link: '/services/waterproofing' },
  { title: 'Wallpaper', icon: Scroll, link: '/services/wallpaper' },
  { title: 'Wall Texture', icon: Layers, link: '/services/wall-texture' },
  { title: 'Colour Visualizer', icon: Palette, link: '/resources/colour-visualizer' },
  { title: 'Paint Calculator', icon: Calculator, link: '/resources/paint-cost-calculator' },
  { title: 'Wood Coating', icon: TreePine, link: '/services/wood-coating' },
  { title: 'Paint Products', icon: Package, link: '/products' },
  { title: 'Home Cleaning', icon: Sparkles, link: '/services/home-cleaning' },
  { title: 'Wall Stencil', icon: Stamp, link: '/services/wall-stencil' },
  { title: 'Grouting', icon: Grid, link: '/services/grouting' }
];

export default function ProductsAndServicesSection() {
  return (
    <section className="bg-[#F8F9FA]">
      <Container>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-[50px]"
        >
          <h2 className="text-[36px] sm:text-[44px] font-[800] text-[#17375E] mb-[24px]">
            Products & Services
          </h2>
          <p
  className="max-w-2xl text-[#64748B] text-[18px] sm:text-[20px] leading-8 mt-5"
  style={{ marginLeft: "360px" }}
>
  Discover our comprehensive range of painting solutions and specialized services tailored for your home.
</p>
        </m.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[32px]">
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
                <Link
                  to={service.link}
                  className="group flex flex-col items-center justify-center p-8 h-[220px] bg-white rounded-[24px] border-2 border-transparent shadow-[0_10px_30px_rgba(23,55,94,0.06)] hover:border-[#F47C20] hover:shadow-[0_20px_50px_rgba(244,124,32,0.15)] transform transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-20 h-20 rounded-[20px] bg-[#F8F9FA] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#F47C20]/10 group-hover:shadow-inner transition-all duration-300">
                    <Icon className="w-10 h-10 text-[#17375E] group-hover:text-[#F47C20] transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[16px] sm:text-[18px] font-bold text-[#17375E] text-center leading-tight group-hover:text-[#F47C20] transition-colors duration-300">
                    {service.title}
                  </h3>
                </Link>
              </m.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
