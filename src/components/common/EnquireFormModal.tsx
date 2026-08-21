/**
 * EnquireFormModal.tsx
 *
 * Reusable modal popup with an enquiry form.
 * Shows an image on the left and a form on the right,
 * with a blurred/darkened backdrop.
 */

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ArrowRight } from 'lucide-react';
import { submitLead } from '@/utils/leadApi';

interface EnquireFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquireFormModal({ isOpen, onClose }: EnquireFormModalProps) {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [honeypot, setHoneypot] = useState('');

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Required';
    if (!formData.phone.trim()) {
      errs.phone = 'Required';
    } else if (!/^[0-9+\-\s()]{10,}$/.test(formData.phone.trim())) {
      errs.phone = 'Invalid phone number';
    }
    if (formData.email.trim() && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())) {
      errs.email = 'Invalid email address';
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
        sourcePage: 'Enquire Form Modal',
        website_url: honeypot,
      });
      setIsSubmitting(false);
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', phone: '', email: '' });
        setErrors({});
      } else {
        setSubmitError(result.message);
      }
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Blurred dark backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal card */}
      <div
        className="relative z-10 bg-white rounded-lg shadow-2xl flex flex-col sm:flex-row w-[90vw] max-w-[680px] max-h-[90vh] overflow-hidden"
        style={{ minHeight: '520px' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left image */}
        <div className="hidden sm:block sm:w-[45%] relative">
          <img
            src="/images/projects/interior painting.png"
            alt="Painting Service"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right form */}
        <div className="flex-1 p-6 sm:p-8 relative flex flex-col justify-center">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <h3 className="text-[22px] font-bold text-[#17375E] mb-1">
            BUILD YOUR VISION
          </h3>
          <p className="text-[13px] text-gray-500 mb-6 leading-relaxed">
            Get a free consultation for your next major project.<br />
            Leave your details and we'll be in touch.
          </p>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            {/* Name */}
            <div>
              <label className="block text-[11px] font-semibold text-[#17375E] tracking-[0.12em] uppercase mb-1.5">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="YOUR NAME"
                value={formData.name}
                onChange={handleChange}
                className={`w-full h-[44px] border-b ${errors.name ? 'border-red-400' : 'border-gray-300'} bg-transparent text-[14px] text-[#1a1a1a] placeholder-gray-400 focus:outline-none focus:border-[#17375E] transition-colors`}
              />
              {errors.name && <p className="mt-1 text-[11px] text-red-500">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-[11px] font-semibold text-[#17375E] tracking-[0.12em] uppercase mb-1.5">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="YOUR PHONE"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full h-[44px] border-b ${errors.phone ? 'border-red-400' : 'border-gray-300'} bg-transparent text-[14px] text-[#1a1a1a] placeholder-gray-400 focus:outline-none focus:border-[#17375E] transition-colors`}
              />
              {errors.phone && <p className="mt-1 text-[11px] text-red-500">{errors.phone}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-[11px] font-semibold text-[#17375E] tracking-[0.12em] uppercase mb-1.5">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="YOUR EMAIL"
                value={formData.email}
                onChange={handleChange}
                className={`w-full h-[44px] border-b ${errors.email ? 'border-red-400' : 'border-gray-300'} bg-transparent text-[14px] text-[#1a1a1a] placeholder-gray-400 focus:outline-none focus:border-[#17375E] transition-colors`}
              />
              {errors.email && <p className="mt-1 text-[11px] text-red-500">{errors.email}</p>}
            </div>

            {/* Honeypot */}
            <input
              type="text"
              name="website_url"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Submit */}
            <button
              type="submit"
              disabled={submitted || isSubmitting}
              className={`w-full h-[48px] rounded-none font-bold text-[14px] text-white flex items-center justify-center gap-2 transition-all duration-300 ${
                submitted
                  ? 'bg-green-500 cursor-not-allowed'
                  : 'bg-[#17375E] hover:bg-[#0F2745]'
              }`}
            >
              {isSubmitting ? (
                'Sending...'
              ) : submitted ? (
                '✓ Request Sent!'
              ) : (
                <>GET STARTED <ArrowRight className="w-4 h-4" /></>
              )}
            </button>

            {submitted && (
              <p className="text-green-600 text-sm font-semibold text-center">
                Thank you! Our team will contact you shortly.
              </p>
            )}
            {submitError && (
              <p className="text-red-500 text-sm font-semibold text-center">
                {submitError}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
}
