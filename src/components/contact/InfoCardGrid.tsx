// React import removed – not needed
import { MapPin, Phone, Mail, Clock3 } from 'lucide-react';
import { MAPS_LINK, PHONE_1, PHONE_2, PHONE_1_RAW, PHONE_2_RAW, EMAIL } from '@/config/constants';
import AnimatedSection from '@/components/shared/AnimatedSection';

export default function InfoCardGrid() {
  return (
    <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
      {/* Address Card */}
      <div className="group bg-white rounded-[24px] p-6 border border-[#E8E4DD] shadow-[0_8px_30px_rgba(16,42,67,0.05)] hover:shadow-[0_18px_45px_rgba(16,42,67,0.10)] hover:-translate-y-1 transition-all duration-300 min-h-[230px] flex flex-col relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#F26A3D]" />
        <div className="w-12 h-12 rounded-[14px] bg-[#102A43] flex items-center justify-center text-white mb-5 flex-shrink-0 shadow-[0_8px_20px_rgba(16,42,67,0.16)]">
          <MapPin className="w-5 h-5" />
        </div>
        <h3 className="text-[11px] font-bold text-[#102A43]/60 uppercase tracking-[0.16em] mb-2">Office Address</h3>
        <address className="not-italic text-sm sm:text-[15px] text-[#102A43] leading-relaxed flex-grow">
          No. 35, 1st Stage, 2nd Phase,<br />
          Near Chandra Layout Bus Depot,<br />
          Vijayanagar, Bangalore,<br />
          <span className="font-semibold">Karnataka – 560040</span>
        </address>
        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 w-full h-11 inline-flex items-center justify-center gap-2 rounded-xl bg-[#102A43] text-white hover:bg-[#F26A3D] hover:text-white text-sm font-bold shadow-[0_8px_20px_rgba(16,42,67,0.12)] transition-all duration-300"
        >
          <span>Open in Maps</span>
          <span className="text-base">↗</span>
        </a>
      </div>

      {/* Phone Card */}
      <div className="group bg-white rounded-[24px] p-6 border border-[#E8E4DD] shadow-[0_8px_30px_rgba(16,42,67,0.05)] hover:shadow-[0_18px_45px_rgba(16,42,67,0.10)] hover:-translate-y-1 transition-all duration-300 min-h-[230px] flex flex-col relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#F26A3D]" />
        <div className="w-12 h-12 rounded-[14px] bg-[#102A43] flex items-center justify-center text-white mb-5 flex-shrink-0 shadow-[0_8px_20px_rgba(16,42,67,0.16)]">
          <Phone className="w-5 h-5" />
        </div>
        <h3 className="text-[11px] font-bold text-[#102A43]/60 uppercase tracking-[0.16em] mb-3">Phone Numbers</h3>
        <div className="flex flex-col gap-2 flex-grow">
          <a href={`tel:${PHONE_1_RAW}`} className="text-sm sm:text-base font-bold text-[#102A43] hover:text-[#F26A3D] transition-colors">{PHONE_1}</a>
          {PHONE_2 && PHONE_2 !== PHONE_1 && (
            <a href={`tel:${PHONE_2_RAW}`} className="text-sm sm:text-base font-bold text-[#102A43] hover:text-[#F26A3D] transition-colors">{PHONE_2}</a>
          )}
        </div>
        <p className="text-xs text-[#5E6872] mt-4">Mon – Sat, 9 AM – 7 PM</p>
      </div>

      {/* Email Card */}
      <div className="group bg-white rounded-[24px] p-6 border border-[#E8E4DD] shadow-[0_8px_30px_rgba(16,42,67,0.05)] hover:shadow-[0_18px_45px_rgba(16,42,67,0.10)] hover:-translate-y-1 transition-all duration-300 min-h-[230px] flex flex-col relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#F26A3D]" />
        <div className="w-12 h-12 rounded-[14px] bg-[#102A43] flex items-center justify-center text-white mb-5 flex-shrink-0 shadow-[0_8px_20px_rgba(16,42,67,0.16)]">
          <Mail className="w-5 h-5" />
        </div>
        <h3 className="text-[11px] font-bold text-[#102A43]/60 uppercase tracking-[0.16em] mb-3">Email Address</h3>
        <a href={`mailto:${EMAIL}`} className="text-sm sm:text-base font-bold text-[#102A43] hover:text-[#F26A3D] break-all transition-colors">{EMAIL}</a>
        <p className="text-xs text-[#5E6872] mt-auto pt-4">We reply within 2 hours</p>
      </div>

      {/* Hours Card */}
      <div className="group bg-white rounded-[24px] p-6 border border-[#E8E4DD] shadow-[0_8px_30px_rgba(16,42,67,0.05)] hover:shadow-[0_18px_45px_rgba(16,42,67,0.10)] hover:-translate-y-1 transition-all duration-300 min-h-[230px] flex flex-col relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#F26A3D]" />
        <div className="w-12 h-12 rounded-[14px] bg-[#102A43] flex items-center justify-center text-white mb-5 flex-shrink-0 shadow-[0_8px_20px_rgba(16,42,67,0.16)]">
          <Clock3 className="w-5 h-5" />
        </div>
        <h3 className="text-[11px] font-bold text-[#102A43]/60 uppercase tracking-[0.16em] mb-3">Working Hours</h3>
        <div className="flex flex-col gap-4 flex-grow">
          <div>
            <p className="text-xs text-[#5E6872] font-semibold mb-1">Monday – Saturday</p>
            <p className="text-sm sm:text-base font-bold text-[#102A43]">9:00 AM – 7:00 PM</p>
          </div>
          <div>
            <p className="text-xs text-[#5E6872] font-semibold mb-1">Sunday</p>
            <p className="text-sm sm:text-base font-bold text-[#102A43]">Closed</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
