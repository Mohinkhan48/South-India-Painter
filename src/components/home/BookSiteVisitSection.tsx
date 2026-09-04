import { useState } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { submitLead } from '@/utils/leadApi';

const serviceTypes = [
  'Interior Painting',
  'Exterior Painting',
  'Re-Painting',
  'Waterproofing',
  'Wood Polish',
  'Texture Painting',
];

export default function BookSiteVisitSection() {
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Required';
    }
    
    if (!formData.phone.trim()) {
      errs.phone = 'Required';
    } else if (!/^[0-9+\-\s()]{10,}$/.test(formData.phone.trim())) {
      errs.phone = 'Invalid phone number';
    }
    
    if (formData.email.trim() && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())) {
      errs.email = 'Invalid email address';
    }
    
    if (!formData.city.trim()) {
      errs.city = 'Required';
    }
    
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }));
    if (submitError) setSubmitError('');
    if (submitted) setSubmitted(false);
  };

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (validate()) {
      setIsSubmitting(true);
      setSubmitError('');
      
      const result = await submitLead({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        services: selectedServices,
        sourcePage: 'Home Page - Book Site Visit Form',
        website_url: honeypot
      });

      setIsSubmitting(false);

      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          city: '',
        });
        setSelectedServices([]);
        setErrors({});
      } else {
        setSubmitError(result.message);
      }
    }
  };

  const inputClass = (field: string) =>
    `w-full h-[56px] bg-white border rounded-[14px] text-[15px] text-[#1a1a1a] placeholder-[#9CA3AF] transition-all focus:outline-none focus:ring-2 focus:ring-[#F26A4B]/20 focus:border-[#F26A4B] ${
      errors[field] ? 'border-red-400' : 'border-[#E5E7EB]'
    }`;

  const inputPadding = { paddingLeft: '20px', paddingRight: '20px' };

  return (
    <section className="w-full flex justify-center bg-[#FAF8F5] px-4 md:px-8 mt-16 mb-16 lg:mt-[120px] lg:mb-[120px]">
      <m.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: 'easeOut' }}
        className="w-full max-w-[1280px] rounded-[32px] overflow-hidden shadow-[0_32px_80px_rgba(22,50,79,0.12)] flex flex-col lg:flex-row lg:items-stretch"
      >

        {/* ═══════════════════════════
             LEFT — Image with overlay text
        ════════════════════════════ */}
        <div className="relative lg:w-[50%] min-h-[340px] lg:min-h-0 flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=85"
            alt="Luxury home interior"
            width="900"
            height="600"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#0D1F35]/55" />

          {/* Overlay text — centered */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 md:px-12 py-16 text-center">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <h2 className="text-white font-black text-[42px] md:text-[56px] leading-[1.15] uppercase tracking-tight mb-6">
                Unlock Better<br />
                Spaces With A<br />
                Free Site Visit
              </h2>
              {/* Orange underline accent */}
              <div className="w-[72px] h-[5px] bg-[#F26A45] rounded-full" />
            </m.div>
          </div>
        </div>

        {/* ═══════════════════════════
             RIGHT — Form panel
        ════════════════════════════ */}
        <m.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
          className="lg:w-[50%] bg-white flex flex-col justify-start"
          style={{
            paddingLeft: 'clamp(24px, 6vw, 60px)',
            paddingRight: 'clamp(24px, 6vw, 60px)',
            paddingTop: 'clamp(32px, 5vw, 64px)',
            paddingBottom: 'clamp(32px, 5vw, 64px)',
          }}
        >
          {/* Orange label */}
          <p className="text-[#F26A45] font-semibold text-[12px] tracking-[0.18em] uppercase mb-4">
            Free Consultation
          </p>

          {/* Heading */}
          <h3 className="font-bold text-[#17375E] text-[32px] md:text-[38px] leading-tight tracking-tight mb-3">
            Book Site Visit
          </h3>
          <p className="text-[#6B7280] text-[15px] mb-8 leading-[1.6]">
            Get a detailed site inspection and project consultation{' '}
            <span className="text-[#F26A45] font-medium cursor-pointer hover:underline">from our team.</span>
          </p>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-[22px]">
            {/* Full Name */}
            <div>
              <label className="block text-[11px] font-semibold text-[#17375E] tracking-[0.12em] uppercase mb-2">
                Full Name
              </label>
              <input
                type="text" name="name" placeholder="Your full name"
                value={formData.name} onChange={handleChange}
                className={inputClass('name')}
                style={inputPadding}
              />
              {errors.name && <p className="mt-1 text-[11px] text-red-500">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-[11px] font-semibold text-[#17375E] tracking-[0.12em] uppercase mb-2">
                Phone Number
              </label>
              <div className="flex gap-2">
                <div
                  className="flex items-center justify-center h-[56px] rounded-[14px] border border-[#E5E7EB] bg-white text-[15px] font-medium text-[#374151] shrink-0"
                  style={{ paddingLeft: '16px', paddingRight: '16px' }}
                >
                  +91
                </div>
                <input
                  type="tel" name="phone" placeholder="Phone number"
                  value={formData.phone} onChange={handleChange}
                  className={`flex-1 ${inputClass('phone')}`}
                  style={inputPadding}
                />
              </div>
              {errors.phone && <p className="mt-1 text-[11px] text-red-500">{errors.phone}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-[11px] font-semibold text-[#17375E] tracking-[0.12em] uppercase mb-2">
                Email ID <span className="text-[#9CA3AF] normal-case tracking-normal font-normal">(Optional)</span>
              </label>
              <input
                type="email" name="email" placeholder="you@example.com"
                value={formData.email} onChange={handleChange}
                className={inputClass('email')}
                style={inputPadding}
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-[11px] font-semibold text-[#17375E] tracking-[0.12em] uppercase mb-2">
                City
              </label>
              <input
                type="text" name="city" placeholder="e.g. Bangalore"
                value={formData.city} onChange={handleChange}
                className={inputClass('city')}
                style={inputPadding}
              />
              {errors.city && <p className="mt-1 text-[11px] text-red-500">{errors.city}</p>}
            </div>

            {/* Service Type */}
            <div>
              <label className="block text-[11px] font-semibold text-[#17375E] tracking-[0.12em] uppercase mb-3">
                Service Type
              </label>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {serviceTypes.map((service) => {
                  const active = selectedServices.includes(service);
                  return (
                    <label
                      key={service}
                      className="flex items-center gap-2.5 cursor-pointer group"
                    >
                      <div
                        onClick={() => toggleService(service)}
                        className={`w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center transition-all duration-200 ${
                          active
                            ? 'border-[#F26A45] bg-[#F26A45]'
                            : 'border-[#D1D5DB] bg-white group-hover:border-[#F26A45]/60'
                        }`}
                      >
                        {active && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                      <span
                        onClick={() => toggleService(service)}
                        className={`text-[14px] transition-colors ${
                          active ? 'text-[#F26A45] font-medium' : 'text-[#4B5563]'
                        }`}
                      >
                        {service}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Terms */}
            <p className="text-[12px] text-[#9CA3AF] leading-[1.6] -mt-1">
              By booking a consultation, you agree to our{' '}
              <span className="text-[#F26A45] cursor-pointer hover:underline">Terms & Conditions.</span>
            </p>

            {/* Honeypot field (hidden from users) */}
            <input
              type="text"
              name="website_url"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Submit Button */}
            <m.button
              type="submit"
              disabled={submitted || isSubmitting}
              style={{ backgroundColor: submitted ? '#22c55e' : '#F26A4B' }}
              whileHover={shouldReduceMotion || submitted || isSubmitting ? undefined : { y: -2, boxShadow: '0 20px 40px rgba(242,106,75,0.38)', backgroundColor: '#E4573C' }}
              transition={{ duration: 0.2 }}
              className={`w-full h-[60px] rounded-[16px] font-bold text-[16px] text-white flex items-center justify-center gap-2 shadow-[0_10px_28px_rgba(242,106,75,0.3)] transition-all duration-300 ${
                submitted || isSubmitting ? 'cursor-not-allowed opacity-80' : ''
              }`}
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : submitted ? (
                '✓ Booking Confirmed!'
              ) : (
                <><span>BOOK SITE INSPECTION</span><ArrowRight className="w-5 h-5" /></>
              )}
            </m.button>

            {/* Success / Error Messages */}
            {submitted && (
              <p className="text-green-600 text-sm font-semibold text-center mt-2">
                Thank you! Your request has been received. Our team will contact you shortly.
              </p>
            )}
            {submitError && (
              <p className="text-red-500 text-sm font-semibold text-center mt-2">
                {submitError}
              </p>
            )}
          </form>
        </m.div>

      </m.div>
    </section>
  );
}