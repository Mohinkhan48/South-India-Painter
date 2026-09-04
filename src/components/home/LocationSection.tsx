import { m, useReducedMotion } from 'framer-motion';
import business from '@/config/business';
import { MapPin } from 'lucide-react';

export default function LocationSection() {
  const shouldReduceMotion = useReducedMotion();

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.163353457007!2d77.53127811482187!3d12.961395890862757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dd84e20b329%3A0xc48c1ea99fb0a241!2sChandra%20Layout%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1689255018612!5m2!1sen!2sin";

  const mapsLink =
    "https://www.google.com/maps/dir/?api=1&destination=No.+35,+1st+Stage,+2nd+Phase,+Near+Chandra+Layout+Bus+Depot,+Vijayanagar,+Bangalore+-+560040";

  return (
    <section className="flex w-full justify-center bg-[#FAF8F4] pt-20 pb-28" aria-label="Our Location">
        <div className="w-full px-5 sm:px-8 lg:px-10 flex flex-col items-center max-w-7xl">

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={sectionVariants}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            ease: 'easeOut',
          }}
          className="w-full flex flex-col items-center"
        >
          {/* Heading */}
          <div
            className="text-center max-w-2xl"
            style={{ marginBottom: '50px' }}
          >
            <h2 className="font-black text-[#102A43] text-[34px] md:text-[46px] lg:text-[52px] leading-tight tracking-tight mb-4">
              Our Location
            </h2>

            <p className="text-[#6B7280] text-base md:text-lg leading-relaxed max-w-xl mx-auto">
              Visit our office for a detailed consultation or view our location
              to understand our primary service areas.
            </p>
          </div>

          {/* Location Card */}
          <div className="w-full overflow-hidden rounded-[28px] bg-[#F5F2EE] border border-[#102A43]/10 shadow-[0_24px_60px_rgba(16,42,67,0.12)] flex flex-col lg:flex-row">

            {/* Left - Office Details */}
            <div className="lg:w-[40%] p-6 sm:p-10 lg:p-12 pl-6 sm:pl-12 lg:pl-16 flex flex-col justify-center relative">

              {/* Orange accent */}
              <div className="absolute left-0 top-8 bottom-8 w-1.5 rounded-r-full bg-[#F26A3D]" />

              <div className="flex items-start gap-5">

                {/* Location Icon */}
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#FCE9E2] flex items-center justify-center text-[#F26A3D]">
                  <MapPin
                    className="w-7 h-7"
                    strokeWidth={2.2}
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#F26A3D] mb-2">
                    Visit Us
                  </p>

                  <h3 className="text-2xl font-black text-[#102A43] mb-4">
                    Head Office
                  </h3>

                  <p className="text-[#5E6872] leading-7 text-base md:text-lg">
                    {business.address},
                    <br />
                    {business.city} - {business.pincode},
                    <br />
                    {business.state}
                  </p>
                </div>

              </div>

              {/* Get Directions */}
<a
  href={mapsLink}
  target="_blank"
  rel="noopener noreferrer"
  className="relative mt-6 sm:mt-0 sm:left-15 sm:top-4 inline-flex w-full sm:w-[190px] h-14 items-center justify-center gap-2 rounded-full bg-[#F26A4B] text-white font-semibold hover:bg-[#E0593B] transition-all duration-300 shadow-lg shadow-[#F26A4B]/30 hover:-translate-y-1 text-center"
>
  <MapPin className="w-5 h-5" />
  Get Directions
</a>

            </div>

            {/* Right - Map */}
            <div className="lg:w-[60%] p-3 sm:p-4">
              <div className="relative h-[340px] sm:h-[380px] lg:h-[410px] rounded-[22px] overflow-hidden border border-[#102A43]/10 bg-white shadow-inner">

                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="South India Painters office location in Vijayanagar, Bangalore"
                ></iframe>

              </div>
            </div>

          </div>
        </m.div>
      </div>
    </section>
  );
}