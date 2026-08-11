import { m } from 'framer-motion';
import { MapPin, Phone, MessageCircle, ExternalLink } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';

export default function ProjectsContact() {
  return (
    <section className="section bg-[#FAF8F4]">
      <div className="container">
        <SectionHeading
          title="Visit Our Office"
          description="Drop by for a consultation or reach out to us directly."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Contact Information Card */}
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[24px] p-8 md:p-12 shadow-soft flex flex-col justify-center"
          >
            <div className="space-y-10">

              {/* Address */}
              <div className="flex flex-col items-center text-center gap-4 w-full">
                <div className="w-12 h-12 bg-[#F26A4B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#F26A4B]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0F2745] mb-2">Office Address</h4>
                  <p className="text-[#5E6872] leading-relaxed">
                    No. 35, 1st Stage, 2nd Phase,<br />
                    Near Chandra Layout Bus Depot,<br />
                    Vijayanagar,<br />
                    Bangalore – 560040
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center text-center gap-4 w-full">
                <div className="w-12 h-12 bg-[#F26A4B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#F26A4B]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0F2745] mb-2">Phone</h4>
                  <a href="tel:+919740556799" className="text-[#5E6872] hover:text-[#F26A4B] transition-colors text-lg font-medium">
                    +91 97405 56799
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex flex-col items-center text-center gap-4 w-full">
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0F2745] mb-2">WhatsApp</h4>
                  <a href="https://wa.me/919740556799" target="_blank" rel="noopener noreferrer" className="text-[#5E6872] hover:text-[#25D366] transition-colors text-lg font-medium flex items-center justify-center gap-2">
                    Chat with our experts
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </m.div>

          {/* Embedded Map */}
          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] lg:h-auto min-h-[400px] rounded-[24px] overflow-hidden shadow-soft relative group"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.169134958178!2d77.5255476148219!3d12.961019790863073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dd59eb77dc9%3A0x6b09315d0138cf18!2sChandra%20Layout%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1689785642398!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />

            <a
              href="https://maps.google.com/?q=12.961019790863073,77.52773630000002"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-[#0F2745] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#F26A4B] hover:text-white transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
          </m.div>

        </div>
      </div>
    </section>
  );
}
