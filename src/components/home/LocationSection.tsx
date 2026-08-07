import { m, useReducedMotion } from 'framer-motion';
import business from '@/config/business';
import { MapPin } from 'lucide-react';

export default function LocationSection() {
  const shouldReduceMotion = useReducedMotion();

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.163353457007!2d77.53127811482187!3d12.961395890862757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dd84e20b329%3A0xc48c1ea99fb0a241!2sChandra%20Layout%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1689255018612!5m2!1sen!2sin";
  const mapsLink = "https://www.google.com/maps/search/?api=1&query=No.+35,+1st+Stage,+2nd+Phase,+Near+Chandra+Layout+Bus+Depot,+Vijayanagar,+Bangalore+-+560040";

  return (
    <section
  className="flex w-full justify-center bg-[#FAF8F4]"
  style={{ paddingTop: '80px', paddingBottom: '120px' }}
>
      <div className="w-full px-5 flex flex-col items-center" style={{ maxWidth: 1280 }}>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={sectionVariants}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: 'easeOut' }}
          className="w-full flex flex-col items-center"
        >
          {/* ── Heading ── */}
          <div className="text-center max-w-2xl" style={{ marginBottom: '60px' }}>
            <h2 className="font-bold text-[#0F2745] text-[34px] md:text-[46px] lg:text-[56px] leading-[1.15] tracking-tight mb-6">
              Our Location
            </h2>
            <p className="text-[#6B7280] text-lg">
              Visit our office for a detailed consultation or view our location to understand our primary service areas.
            </p>
          </div>

          {/* ── Map Card ── */}
          <div className="w-full bg-white rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(15,39,69,0.08)] border border-[rgba(15,39,69,0.08)] p-6 md:p-10 flex flex-col lg:flex-row gap-10">
            {/* Left: Address details */}
            <div className="lg:w-1/3 flex flex-col justify-center space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F26A4B]/10 flex items-center justify-center text-[#F26A4B]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0F2745] mb-3">Head Office</h3>
                  <p className="text-gray-600 whitespace-pre-line leading-relaxed text-lg">
                    {business.address},<br />
                    {business.city} - {business.pincode},<br />
                    {business.state}
                  </p>
                </div>
              </div>

              <a 
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-[#F26A4B] text-white font-semibold hover:bg-[#E0593B] transition-colors shadow-lg shadow-[#F26A4B]/30 hover:-translate-y-1 w-full lg:w-auto text-center"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions
              </a>
            </div>

            {/* Right: Embed */}
            <div className="lg:w-2/3 h-[400px] lg:h-[450px] rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
              <iframe 
                src={mapEmbedUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
