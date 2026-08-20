import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import Container from '@/components/common/Container';
import { Calculator, Palette, BookOpen, ArrowRight, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { submitLead } from '@/utils/leadApi';

type FormData = {
  name: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  website_url?: string;
};

export default function ResourcesHeroSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError('');

    const result = await submitLead({
      name: data.name,
      phone: data.phone,
      email: data.email,
      city: data.city,
      service: data.service,
      sourcePage: 'Resources Page - Book Free Inspection Form',
      website_url: data.website_url
    });

    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
      reset();
    } else {
      setSubmitError(result.message);
    }
  };

  const inputClass =
    'w-full h-[54px] rounded-[12px] bg-[#F4F5F7] border border-[#E5E7EB] text-[#17375E] placeholder:text-[#9CA3AF] text-[15px] focus:outline-none focus:border-[#F47C20] focus:ring-2 focus:ring-[#F47C20]/20 transition-colors';

  return (
    <section className="relative w-full min-h-[700px] flex items-center pt-28 pb-10 lg:py-32 overflow-hidden">
      {/* Premium Interior Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?auto=format&fit=crop&w=1920&q=80"
          alt="Premium Interior Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#17375E]/95 via-[#17375E]/80 to-[#17375E]/40" />
      </div>

      <Container className="relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* Left Content (55%) */}
          <div className="w-full lg:w-[55%] flex flex-col">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="text-[12px] font-bold text-[#F47C20] uppercase tracking-[0.2em] bg-[#F47C20]/10 px-3 py-1 rounded-full border border-[#F47C20]/20">
                Resources Center
              </span>
            </m.div>

            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-[44px] sm:text-[56px] lg:text-[72px] font-[800] leading-[1.05] text-white mb-6"
            >
              Painting <br />
              <span className="text-[#F47C20]">Resources</span>
            </m.h1>

            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-[18px] sm:text-[20px] text-[#e0e4e8] leading-relaxed max-w-[540px] mb-10"
            >
              Everything you need to plan your painting project. Cost calculators, colour visualizers, guides and expert tools in one place.
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {[
                { text: 'Paint Cost Calculator', icon: Calculator },
                { text: 'Colour Visualizer', icon: Palette },
                { text: 'Expert Guides', icon: BookOpen },
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-[12px] border border-white/10">
                    <div className="w-6 h-6 rounded-full bg-[#F47C20]/20 flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5 text-[#F47C20]" />
                    </div>
                    <span className="text-white text-[14px] font-semibold">{feature.text}</span>
                  </div>
                );
              })}
            </m.div>
          </div>

          {/* Right Content: Card Form (45%) */}
          <div className="w-full lg:w-[45%] max-w-[500px] lg:max-w-none flex justify-center lg:justify-end">
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="w-full max-w-[480px] bg-white rounded-[24px] shadow-[0_30px_70px_rgba(0,0,0,0.35)] overflow-hidden relative"
            >
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <m.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex flex-col items-center justify-center py-16 px-10 text-center relative z-10"
                  >
                    <div className="w-16 h-16 bg-[#F47C20]/10 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8 text-[#F47C20]" />
                    </div>
                    <h3 className="text-[24px] font-bold text-[#17375E] mb-3">Request Received!</h3>
                    <p className="text-[#6B7280] text-[16px] leading-relaxed">
                      Thank you for booking a free site visit. Our expert will contact you shortly to confirm the appointment.
                    </p>
                  </m.div>
                ) : (
                  <m.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative z-10"
                  >
                    {/* Header block — own padded section, visually separated */}
                    <div
                      style={{
                        backgroundColor: '#17375E',
                        padding: '28px 40px',
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4" style={{ color: '#F47C20' }} />
                        <span
                          className="text-[11px] font-bold uppercase"
                          style={{ color: '#F47C20', letterSpacing: '0.2em' }}
                        >
                          Free Consultation
                        </span>
                      </div>
                      <h3 className="text-[26px] font-bold text-white leading-snug">
                        Book a Free Site Visit
                      </h3>
                    </div>

                    {/* Form block */}
                    <div style={{ padding: '32px 40px 40px' }}>
                      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-1">
                          <input
                            {...register('name', { required: 'Name is required' })}
                            type="text"
                            placeholder="Name"
                            className={inputClass}
                            style={{ paddingLeft: 20, paddingRight: 20 }}
                          />
                          {errors.name && <span className="text-red-500 text-xs pl-1">{errors.name.message}</span>}
                        </div>

                        <div className="flex flex-col gap-1">
                          <input
                            {...register('phone', {
                              required: 'Phone number is required',
                              pattern: { value: /^[0-9+\-\s()]{10,}$/, message: 'Invalid phone number' }
                            })}
                            type="tel"
                            placeholder="Phone Number"
                            className={inputClass}
                            style={{ paddingLeft: 20, paddingRight: 20 }}
                          />
                          {errors.phone && <span className="text-red-500 text-xs pl-1">{errors.phone.message}</span>}
                        </div>

                        <div className="flex flex-col gap-1">
                          <input
                            {...register('email', {
                              required: 'Email is required',
                              pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' }
                            })}
                            type="email"
                            placeholder="Email Address"
                            className={inputClass}
                            style={{ paddingLeft: 20, paddingRight: 20 }}
                          />
                          {errors.email && <span className="text-red-500 text-xs pl-1">{errors.email.message}</span>}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="flex-1 flex flex-col gap-1">
                            <select
                              {...register('city', { required: 'City is required' })}
                              className={`${inputClass} appearance-none cursor-pointer`}
                              style={{ paddingLeft: 20, paddingRight: 20 }}
                            >
                              <option value="">Select City</option>
                              <option value="bangalore">Bangalore</option>
                              <option value="chennai">Chennai</option>
                              <option value="hyderabad">Hyderabad</option>
                            </select>
                            {errors.city && <span className="text-red-500 text-xs pl-1">{errors.city.message}</span>}
                          </div>
                          <div className="flex-1 flex flex-col gap-1">
                            <select
                              {...register('service', { required: 'Service is required' })}
                              className={`${inputClass} appearance-none cursor-pointer`}
                              style={{ paddingLeft: 20, paddingRight: 20 }}
                            >
                              <option value="">Service Type</option>
                              <option value="interior">Interior</option>
                              <option value="exterior">Exterior</option>
                              <option value="waterproofing">Waterproofing</option>
                            </select>
                            {errors.service && <span className="text-red-500 text-xs pl-1">{errors.service.message}</span>}
                          </div>
                        </div>

                        {/* Honeypot field (hidden from users) */}
                        <input
                          type="text"
                          {...register('website_url')}
                          style={{ display: 'none' }}
                          tabIndex={-1}
                          autoComplete="off"
                        />

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="group w-full h-[56px] mt-2 flex items-center justify-center gap-2 rounded-[12px] text-[16px] font-bold transition-all duration-300"
                          style={{
                            color: '#FFFFFF',
                            backgroundColor: isSubmitting ? 'rgba(244,124,32,0.7)' : '#F47C20',
                            boxShadow: '0 12px 24px rgba(244,124,32,0.35)',
                            cursor: isSubmitting ? 'not-allowed' : 'pointer',
                          }}
                          onMouseEnter={(e) => {
                            if (!isSubmitting) e.currentTarget.style.backgroundColor = '#D96C18';
                          }}
                          onMouseLeave={(e) => {
                            if (!isSubmitting) e.currentTarget.style.backgroundColor = '#F47C20';
                          }}
                        >
                          {isSubmitting ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                          ) : (
                            <>
                              <span>BOOK FREE INSPECTION</span>
                              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </button>

                        {submitError && (
                          <p className="text-red-500 text-sm font-semibold text-center mt-2">
                            {submitError}
                          </p>
                        )}
                      </form>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </m.div>
          </div>

        </div>
      </Container>
    </section>
  );
}