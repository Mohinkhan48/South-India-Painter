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

export default function EnquireFormModal({
  isOpen,
  onClose,
}: EnquireFormModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

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
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = 'Required';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Required';
    } else if (
      !/^[0-9+\-\s()]{10,}$/.test(formData.phone.trim())
    ) {
      errs.phone = 'Invalid phone number';
    }

    if (
      formData.email.trim() &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        formData.email.trim()
      )
    ) {
      errs.email = 'Invalid email address';
    }

    setErrors(errs);

    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setFormData((p) => ({
      ...p,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((p) => ({
        ...p,
        [name]: '',
      }));
    }

    if (submitError) {
      setSubmitError('');
    }

    if (submitted) {
      setSubmitted(false);
    }
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

        setFormData({
          name: '',
          phone: '',
          email: '',
        });

        setErrors({});
      } else {
        setSubmitError(result.message);
      }
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Blurred dark backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal card */}
      <div
        className="relative z-10 flex w-[92vw] max-w-[760px] flex-col overflow-hidden rounded-xl bg-white shadow-2xl sm:flex-row"
        style={{
          minHeight: '500px',
          maxHeight: '90vh',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* =====================================================
            LEFT IMAGE
            ===================================================== */}
        <div
          className="relative hidden overflow-hidden bg-[#f0f4f8] sm:block sm:w-[52%]"
        >
          <img
            src="/images/projects/interior painting.png"
            alt="Painting Service"
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              /*
               * Image itself is shifted slightly right.
               * The image frame/container does NOT move.
               */
              objectPosition: '56% center',
            }}
          />
        </div>

        {/* =====================================================
            RIGHT FORM
            ===================================================== */}
        <div
          className="relative flex min-w-0 flex-1 flex-col justify-start overflow-y-auto"
          style={{
  padding: '50px 38px 32px 38px',
}}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-3 flex h-8 w-8 items-center justify-center text-gray-600 transition-colors hover:text-gray-900"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Heading */}
          <h3 className="mb-1 text-[22px] font-bold text-[#17375E]">
            BUILD YOUR VISION
          </h3>

          {/* Description */}
          <p className="mb-5 text-[13px] leading-relaxed text-gray-500">
            Get a free consultation for your next major project.
            <br />
            Leave your details and we'll be in touch.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-4"
          >
            {/* =================================================
                NAME
                ================================================= */}
            <div>
              <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#17375E]">
                Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="YOUR NAME"
                value={formData.name}
                onChange={handleChange}
                className={`h-[42px] w-full border-b ${
                  errors.name
                    ? 'border-red-400'
                    : 'border-gray-300'
                } bg-transparent text-[14px] text-[#1a1a1a] placeholder-gray-400 transition-colors focus:border-[#17375E] focus:outline-none`}
              />

              {errors.name && (
                <p className="mt-1 text-[11px] text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            {/* =================================================
                PHONE
                ================================================= */}
            <div>
              <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#17375E]">
                Phone
              </label>

              <input
                type="tel"
                name="phone"
                placeholder="YOUR PHONE"
                value={formData.phone}
                onChange={handleChange}
                className={`h-[42px] w-full border-b ${
                  errors.phone
                    ? 'border-red-400'
                    : 'border-gray-300'
                } bg-transparent text-[14px] text-[#1a1a1a] placeholder-gray-400 transition-colors focus:border-[#17375E] focus:outline-none`}
              />

              {errors.phone && (
                <p className="mt-1 text-[11px] text-red-500">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* =================================================
                EMAIL
                ================================================= */}
            <div>
              <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#17375E]">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="YOUR EMAIL"
                value={formData.email}
                onChange={handleChange}
                className={`h-[42px] w-full border-b ${
                  errors.email
                    ? 'border-red-400'
                    : 'border-gray-300'
                } bg-transparent text-[14px] text-[#1a1a1a] placeholder-gray-400 transition-colors focus:border-[#17375E] focus:outline-none`}
              />

              {errors.email && (
                <p className="mt-1 text-[11px] text-red-500">
                  {errors.email}
                </p>
              )}
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

            {/* =================================================
                SUBMIT BUTTON (RE-ADDED)
                ================================================= */}
            <button
              type="submit"
              disabled={submitted || isSubmitting}
              className={`mt-4 flex h-[48px] min-h-[48px] w-full shrink-0 translate-y-4 items-center justify-center gap-2 rounded-md text-[14px] font-bold text-white transition-all duration-300 ${
                submitted
                  ? 'cursor-not-allowed bg-green-500'
                  : 'hover:opacity-90'
              }`}
              style={!submitted ? { backgroundColor: '#E7684B' } : undefined}
            >
              {isSubmitting ? (
                'Sending...'
              ) : submitted ? (
                '✓ Request Sent!'
              ) : (
                <>
                  GET STARTED
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>

            {/* Success message */}
            {submitted && (
              <p className="text-center text-sm font-semibold text-green-600">
                Thank you! Our team will contact you shortly.
              </p>
            )}

            {/* Error message */}
            {submitError && (
              <p className="text-center text-sm font-semibold text-red-500">
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