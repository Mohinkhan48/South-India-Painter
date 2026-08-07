import { useEffect, useState, useRef } from 'react';
import { m, useInView, type Variants } from 'framer-motion';

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// Counter Hook
function useCountUp(target: number, duration = 2000, startWhenVisible = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(!startWhenVisible);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
    }
  }, [isInView, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * target));
      
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    requestAnimationFrame(step);
  }, [target, duration, hasStarted]);

  return { count, ref };
}

function StatCounter({ target, suffix = '+', label }: { target: number, suffix?: string, label: string }) {
  const { count, ref } = useCountUp(target, 2500);
  
  return (
    <m.div variants={fadeUpVariant} className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-[0_8px_30px_rgba(19,43,74,0.06)] hover:-translate-y-2 transition-transform duration-300">
      <span ref={ref} className="text-4xl md:text-5xl font-extrabold text-[#132B4A] tracking-tight">
        {count}{suffix}
      </span>
      <span className="mt-3 text-sm md:text-base font-semibold text-[#5E6872] uppercase tracking-wider text-center">{label}</span>
    </m.div>
  );
}

export default function AboutPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    {
      name: "Rahul M.",
      role: "Homeowner, Bangalore",
      text: "South India Painter transformed our villa completely. The attention to detail and the premium finish using Asian Paints Royale was beyond our expectations. Highly professional team!",
      image: "/assets/about/story.png"
    },
    {
      name: "Priya K.",
      role: "Interior Designer",
      text: "I always recommend them to my clients. Their execution is flawless, they stick to timelines, and the work site is always left spotless after completion.",
      image: "/assets/about/story.png"
    },
    {
      name: "Suresh Reddy",
      role: "Commercial Client, Hyderabad",
      text: "We hired them for our office space renovation. The color consultation was very helpful, and the painting was done over the weekend with zero disruption to our work.",
      image: "/assets/about/story.png"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="font-sans text-[#132B4A] bg-[#FAF8F4] overflow-hidden">
      
      {/* 1. Premium Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center bg-[#132B4A]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{ backgroundImage: `url('/assets/about/hero.png')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#132B4A] via-[#132B4A]/60 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
          <m.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            <m.span variants={fadeUpVariant} className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold tracking-widest uppercase mb-6">
              About South India Painter
            </m.span>
            
            <m.h1 variants={fadeUpVariant} className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
              Painting Homes.<br/>
              <span className="text-[#F26A3D]">Building Trust.</span>
            </m.h1>
            
            <m.a 
              variants={fadeUpVariant}
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                // If there's a global modal, trigger it. Otherwise navigate.
                window.location.href = '/contact';
              }}
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#F26A3D] text-white font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_8px_20px_rgba(242,106,61,0.3)] hover:shadow-[0_12px_25px_rgba(242,106,61,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book Free Site Visit
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </m.a>
          </m.div>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <m.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square group"
            >
              <img 
                src="/assets/about/story.png" 
                alt="Our Story" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#132B4A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </m.div>
            
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <m.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-extrabold text-[#132B4A] mb-6">
                Our Story
              </m.h2>
              <m.div variants={fadeUpVariant} className="w-20 h-1.5 bg-[#F26A3D] rounded-full mb-8" />
              
              <m.p variants={fadeUpVariant} className="text-lg md:text-xl text-[#5E6872] leading-relaxed mb-6">
                Founded with a passion for transforming spaces, South India Painter has grown from a small local team into one of the most trusted premium painting services across South India.
              </m.p>
              
              <m.p variants={fadeUpVariant} className="text-lg text-[#5E6872] leading-relaxed mb-8">
                We believe that every wall is a canvas and every home deserves a masterpiece. By combining certified professionals, premium materials, and a customer-first approach, we ensure that our work doesn't just look good on day one, but lasts for years to come.
              </m.p>
              
              <m.ul variants={staggerContainer} className="space-y-4">
                {['Uncompromising Quality Standards', 'Transparent Pricing & Timelines', 'Dedicated Project Managers'].map((item, i) => (
                  <m.li key={i} variants={fadeUpVariant} className="flex items-center gap-4 text-lg font-semibold text-[#132B4A]">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F26A3D]/10 flex items-center justify-center text-[#F26A3D]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    {item}
                  </m.li>
                ))}
              </m.ul>
            </m.div>
          </div>
        </div>
      </section>

      {/* 3. Company Statistics */}
      <section className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <m.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            <StatCounter target={5000} label="Projects Completed" />
            <StatCounter target={10} label="Years Experience" />
            <StatCounter target={98} suffix="%" label="Customer Satisfaction" />
            <StatCounter target={12} label="Cities Served" />
            <StatCounter target={100} label="Professional Painters" />
          </m.div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-24 bg-[#FAF8F4]">
        <div className="container mx-auto px-6 max-w-7xl">
          <m.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#132B4A] mb-6">Why Choose Us</h2>
            <div className="w-20 h-1.5 bg-[#F26A3D] rounded-full mx-auto" />
          </m.div>
          
          <m.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: 'Certified Professionals', desc: 'Background-verified, highly trained painters ensuring flawless execution.' },
              { title: 'Premium Paint Brands', desc: 'We only use top-tier products from brands like Asian Paints and Berger.' },
              { title: 'Affordable Pricing', desc: 'Transparent, competitive quotes with absolutely no hidden charges.' },
              { title: 'Timely Delivery', desc: 'We respect your time. Projects are completed on the promised date.' },
              { title: 'Clean Work Process', desc: 'Post-painting cleanup is guaranteed. We leave your home spotless.' },
              { title: '100% Satisfaction', desc: 'We do not consider a project complete until you are fully happy.' }
            ].map((feature, idx) => (
              <m.div 
                key={idx} 
                variants={fadeUpVariant}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-14 h-14 bg-[#F26A3D]/10 rounded-xl flex items-center justify-center text-[#F26A3D] mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#132B4A] mb-3">{feature.title}</h3>
                <p className="text-[#5E6872] leading-relaxed">{feature.desc}</p>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* 5. Our Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <m.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-10"
          >
            {/* Mission */}
            <m.div variants={fadeUpVariant} className="relative p-10 rounded-[2rem] bg-gradient-to-br from-[#132B4A] to-[#0A1A2F] text-white overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-[#F26A3D]/20 transition-colors duration-700" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#F26A3D] rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To transform every space with flawless paint finishes, using premium products and a dedication to excellence that inspires confidence and joy in every client we serve.
                </p>
              </div>
            </m.div>
            
            {/* Vision */}
            <m.div variants={fadeUpVariant} className="relative p-10 rounded-[2rem] bg-gradient-to-br from-[#F26A3D] to-[#D9552A] text-white overflow-hidden group">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-20 -mb-20 group-hover:bg-[#132B4A]/20 transition-colors duration-700" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <svg className="w-8 h-8 text-[#F26A3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  To be the most trusted and preferred painting partner across South India, known for unmatched quality, innovative techniques, and exceptional customer service.
                </p>
              </div>
            </m.div>
          </m.div>
        </div>
      </section>

      {/* 6. Meet Our Team */}
      <section className="py-24 bg-[#FAF8F4]">
        <div className="container mx-auto px-6 max-w-7xl">
          <m.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#132B4A] mb-6">Meet Our Team</h2>
            <div className="w-20 h-1.5 bg-[#F26A3D] rounded-full mx-auto mb-6" />
            <p className="text-lg text-[#5E6872] max-w-2xl mx-auto">The dedicated professionals working behind the scenes to ensure your project is a resounding success.</p>
          </m.div>
          
          <m.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {[
              { role: 'Founder & CEO', name: 'Vikram R.' },
              { role: 'Project Manager', name: 'Karthik S.' },
              { role: 'Painting Supervisor', name: 'Ramesh N.' },
              { role: 'Customer Support', name: 'Anjali P.' }
            ].map((member, idx) => (
              <m.div key={idx} variants={fadeUpVariant} className="flex flex-col items-center group">
                <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden shadow-xl border-4 border-white">
                  <img 
                    src="/assets/about/story.png" 
                    alt={member.role} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-[#132B4A]/10 group-hover:bg-transparent transition-colors" />
                </div>
                <h4 className="text-2xl font-bold text-[#132B4A] mb-1">{member.name}</h4>
                <p className="text-[#F26A3D] font-medium tracking-wide uppercase text-sm">{member.role}</p>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* 7. Our Work Process (Horizontal Timeline) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <m.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#132B4A] mb-6">Our Work Process</h2>
            <div className="w-20 h-1.5 bg-[#F26A3D] rounded-full mx-auto" />
          </m.div>
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0" />
            
            <m.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="relative z-10 grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-4"
            >
              {['Consultation', 'Inspection', 'Colour Selection', 'Painting', 'Quality Check', 'Final Handover'].map((step, i) => (
                <m.div key={i} variants={fadeUpVariant} className="flex flex-col items-center relative group">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-[#F26A3D] text-[#132B4A] font-bold text-xl flex items-center justify-center mb-6 shadow-lg group-hover:bg-[#F26A3D] group-hover:text-white transition-colors duration-300">
                    {i + 1}
                  </div>
                  <h4 className="text-lg font-bold text-[#132B4A] text-center mb-2">{step}</h4>
                  
                  {/* Mobile connecting line */}
                  {i < 5 && <div className="md:hidden w-1 h-12 bg-gray-200 my-4" />}
                </m.div>
              ))}
            </m.div>
          </div>
        </div>
      </section>

      {/* 8. Brands We Use */}
      <section className="py-20 bg-[#FAF8F4] border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <p className="text-center text-sm font-bold text-[#5E6872] uppercase tracking-widest mb-10">Premium Brands We Trust</p>
          <m.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-70"
          >
            {['Asian Paints', 'Berger', 'Dulux', 'Nerolac', 'JSW Paints', 'Indigo Paints'].map((brand, i) => (
              <m.div key={i} variants={fadeUpVariant} className="text-2xl md:text-3xl font-black text-[#132B4A] uppercase tracking-tighter">
                {brand}
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* 9. Customer Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <m.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#132B4A] mb-6">Client Testimonials</h2>
            <div className="w-20 h-1.5 bg-[#F26A3D] rounded-full mx-auto" />
          </m.div>
          
          <div className="relative bg-[#132B4A] rounded-[2rem] p-10 md:p-16 text-white shadow-2xl overflow-hidden min-h-[300px] flex items-center">
            {/* Quote Icon BG */}
            <svg className="absolute top-10 left-10 w-32 h-32 text-white/5 rotate-180" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
            
            <div className="relative z-10 w-full transition-opacity duration-500 ease-in-out" key={activeTestimonial}>
              <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-10 text-center italic">
                "{testimonials[activeTestimonial].text}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <img src={testimonials[activeTestimonial].image} alt="Client" className="w-16 h-16 rounded-full object-cover border-2 border-[#F26A3D]" />
                <div className="text-left">
                  <h5 className="font-bold text-lg">{testimonials[activeTestimonial].name}</h5>
                  <p className="text-white/70 text-sm">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
            </div>
            
            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {testimonials.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${i === activeTestimonial ? 'bg-[#F26A3D]' : 'bg-white/20'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="relative py-24 bg-[#132B4A] overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F26A3D]/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F26A3D]/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
        
        <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
          <m.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <m.h2 variants={fadeUpVariant} className="text-4xl md:text-6xl font-black text-white mb-8">
              Let's Transform Your Home
            </m.h2>
            <m.p variants={fadeUpVariant} className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Ready to give your space the premium makeover it deserves? Get in touch with our experts today for a free consultation and exact quote.
            </m.p>
            
            <m.div variants={fadeUpVariant} className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a href="/contact" className="w-full sm:w-auto inline-flex justify-center items-center px-10 py-4 bg-[#F26A3D] text-white font-bold text-lg rounded-full transition-all hover:bg-white hover:text-[#132B4A] shadow-lg">
                Book Free Site Visit
              </a>
              <a href="/contact" className="w-full sm:w-auto inline-flex justify-center items-center px-10 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-full transition-all hover:bg-white/10">
                Contact Us
              </a>
            </m.div>
          </m.div>
        </div>
      </section>
      
    </div>
  );
}
