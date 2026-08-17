import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { ChevronDown, ChevronRight, Menu, Phone, X, Paintbrush, Home, Droplets, Layers, ScrollText, TreePine } from 'lucide-react';
import { cn } from '@/utils';
import business from '@/config/business';
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';

const desktopNavLinks: Array<{ label: string; to: string }> = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Resources', to: '/resources' },
  { label: 'Projects', to: '/projects' },
  { label: 'Colour Ideas', to: '/colour-ideas' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const serviceLinks: Array<{ label: string; to: string; icon: React.ElementType; desc: string }> = [
  { label: 'Interior Painting', to: '/services/interior-painting', icon: Paintbrush, desc: 'Walls, ceilings & more' },
  { label: 'Exterior Painting', to: '/services/exterior-painting', icon: Home, desc: 'Weather-proof finishes' },
  { label: 'Waterproofing', to: '/services/waterproofing', icon: Droplets, desc: 'Leakage & damp solutions' },
  { label: 'Wall Textures', to: '/services/wall-textures', icon: Layers, desc: 'Decorative wall artistry' },
  { label: 'Wallpaper', to: '/services/wallpaper', icon: ScrollText, desc: 'Designer wallpaper installs' },
  { label: 'Wood Finishes', to: '/services/wood-finishes', icon: TreePine, desc: 'Polish, stain & lacquer' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const servicesTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsServicesOpen(false);
        setIsMobileServicesOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) {
        window.clearTimeout(servicesTimeoutRef.current);
      }
    };
  }, []);

  const clearServicesTimeout = () => {
    if (servicesTimeoutRef.current) {
      window.clearTimeout(servicesTimeoutRef.current);
      servicesTimeoutRef.current = null;
    }
  };

  const openServicesDropdown = () => {
    clearServicesTimeout();
    setIsServicesOpen(true);
  };

  const closeServicesDropdown = () => {
    clearServicesTimeout();
    servicesTimeoutRef.current = window.setTimeout(() => setIsServicesOpen(false), 140);
  };

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-300',
          isScrolled ? 'shadow-[0_10px_30px_rgba(16,42,67,0.08)] backdrop-blur-[4px]' : 'shadow-none'
        )}
      >
        <Container className="flex h-[72px] items-center justify-between gap-4">
          <Link
            to="/"
            className="flex flex-shrink-0 items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-4"
            aria-label={`${business.companyName} — Home`}
          >
            <span className="text-[20px] font-extrabold uppercase tracking-[0.3em] text-[var(--color-primary)] sm:text-[22px]">
              {business.companyName}
            </span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden flex-1 items-center justify-center lg:flex">
            <div className="flex items-center gap-7">
              {desktopNavLinks.map((link) => {
                if (link.label === 'Services') {
                  return (
                    <div
                      key={link.to}
                      className="relative"
                      onMouseEnter={openServicesDropdown}
                      onMouseLeave={closeServicesDropdown}
                    >
                      <NavLink
                        to={link.to}
                        end={link.to === '/'}
                        className={({ isActive }) =>
                          cn(
                            'relative flex items-center gap-1 text-[15px] font-semibold transition-colors duration-200',
                            isActive || isServicesOpen
                              ? 'text-[var(--color-accent)]'
                              : 'text-[var(--color-text)] hover:text-[var(--color-accent)]'
                          )
                        }
                      >
                        {({ isActive }) => (
                          <span className="relative flex items-center gap-1">
                            <span>{link.label}</span>
                            <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                            {(isActive || isServicesOpen) && (
                              <m.span
                                layoutId="active-nav-indicator"
                                className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full bg-[var(--color-accent)]"
                                initial={false}
                                transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: 'easeOut' }}
                              />
                            )}
                          </span>
                        )}
                      </NavLink>

                      <AnimatePresence>
                        {isServicesOpen && (
                          <m.div
                            initial={{ opacity: 0, y: -8, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.97 }}
                            transition={{ duration: shouldReduceMotion ? 0 : 0.22, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute left-1/2 top-full mt-3 w-[335px] -translate-x-1/2 rounded-[24px] border border-[#102A43]/10 bg-white p-3 shadow-[0_24px_50px_rgba(15,39,69,0.16)] backdrop-blur-xl"
                            onMouseEnter={openServicesDropdown}
                            onMouseLeave={closeServicesDropdown}
                          >
                            {/* Header strip */}
                            <div className="mb-2.5 rounded-[16px] bg-gradient-to-r from-[#0F2745] via-[#16375E] to-[#0F2745] px-8 py-3.5 border border-white/10 shadow-sm">
                              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F26A3D] mb-1">Our Services</p>
                              <p className="text-[14px] font-bold text-white tracking-wide">Premium Painting Solutions</p>
                            </div>
                            <div className="grid gap-1">
                              {serviceLinks.map((item) => {
                                const Icon = item.icon;
                                return (
                                  <Link
                                    key={item.to}
                                    to={item.to}
                                    className="group flex items-center gap-3.5 rounded-[14px] px-3.5 py-2.5 transition-all duration-200 hover:bg-[#FCE9E2]/50"
                                    onClick={() => setIsServicesOpen(false)}
                                  >
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#FCE9E2] text-[#F26A3D] transition-all duration-200 group-hover:bg-[#F26A3D] group-hover:text-white shadow-sm">
                                      <Icon className="h-4.5 w-4.5" />
                                    </div>
                                    <div className="min-w-0">
                                      <p className="text-[13.5px] font-bold text-[#102A43] group-hover:text-[#F26A3D] transition-colors duration-200">{item.label}</p>
                                      <p className="text-[11.5px] text-[#64748B] font-medium">{item.desc}</p>
                                    </div>
                                    <ChevronRight className="ml-auto h-4 w-4 shrink-0 text-[#CBD5E1] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#F26A3D]" />
                                  </Link>
                                );
                              })}
                            </div>
                          </m.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      cn(
                        'relative text-[15px] font-semibold transition-colors duration-200',
                        isActive
                          ? 'text-[var(--color-accent)]'
                          : 'text-[var(--color-text)] hover:text-[var(--color-accent)]'
                      )
                    }
                  >
                    {({ isActive }) => (
                      <span className="relative">
                        {link.label}
                        {isActive && (
                          <m.span
                            layoutId="active-nav-indicator"
                            className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full bg-[var(--color-accent)]"
                            initial={false}
                            transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: 'easeOut' }}
                          />
                        )}
                      </span>
                    )}
                  </NavLink>
                );
              })}
            </div>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${business.phone.replace(/\D/g, '')}`}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-white)] text-[var(--color-primary)] transition-all duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              aria-label={`Call ${business.phone}`}
            >
              <Phone className="h-4 w-4" />
            </a>
            <Button
  size="sm"
  className="!h-[48px] !w-[165px] !whitespace-nowrap !rounded-full !bg-[#F26A3D] !px-6 !text-base !font-semibold !text-white !shadow-[0_12px_26px_rgba(242,106,61,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:!bg-[#D9552A]"
  onClick={() => navigate('/contact')}
>
  Get a Free Quote
</Button>
          </div>

          <button
            type="button"
            className="rounded-md p-2 text-[var(--color-primary)] transition-colors duration-200 hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </Container>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <m.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: 'easeOut' }}
              className="fixed inset-0 z-40 bg-[var(--color-primary)]/35 backdrop-blur-sm lg:hidden"
              aria-label="Close navigation menu"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <m.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 z-50 flex h-full w-[min(90vw,380px)] flex-col bg-gradient-to-b from-[#0C1E35] to-[#162B45] shadow-[−20px_0_60px_rgba(0,0,0,0.35)] lg:hidden overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              {/* Close button */}
              <button
                type="button"
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Logo */}
              <div className="px-6 pt-6 pb-4 border-b border-white/10">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="text-[18px] font-extrabold uppercase tracking-[0.3em] text-white">
                    {business.companyName}
                  </span>
                </Link>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col gap-2 px-5 pt-5 flex-1">
                {desktopNavLinks.map((link) => {
                  if (link.label === 'Services') {
                    return (
                      <m.div 
                        key={link.to} 
                        whileTap={{ scale: 0.95 }}
                        className="flex flex-col"
                      >
                        <div className="flex items-center justify-between rounded-xl hover:bg-white/10 transition-colors duration-200">
                          <NavLink
                            to={link.to}
                            className={({ isActive }) =>
                              cn(
                                'flex-1 flex items-center gap-3.5 rounded-l-xl px-4 py-3.5 text-[16px] font-semibold transition-all duration-200',
                                isActive
                                  ? '!text-[#F26A3D]'
                                  : '!text-white'
                              )
                            }
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {({ isActive }) => (
                              <>
                                <span className={cn('w-2 h-2 rounded-full flex-shrink-0 transition-colors duration-200', isActive ? 'bg-[#F26A3D]' : 'bg-white')} />
                                <span>{link.label}</span>
                              </>
                            )}
                          </NavLink>
                          <button
                            type="button"
                            className="flex h-12 w-12 items-center justify-center rounded-r-xl border-l border-white/10 text-white"
                            onClick={() => setIsMobileServicesOpen((open) => !open)}
                            aria-label="Toggle services list"
                          >
                            <ChevronDown
                              className={cn(
                                'h-5 w-5 !text-white/60 transition-transform duration-300',
                                isMobileServicesOpen && 'rotate-180'
                              )}
                            />
                          </button>
                        </div>
                        <AnimatePresence initial={false}>
                          {isMobileServicesOpen && (
                            <m.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <div className="mx-2 mb-2 mt-1 flex flex-col gap-0.5 rounded-[14px] bg-white/5 p-2">
                                {serviceLinks.map((item) => {
                                  const Icon = item.icon;
                                  return (
                                    <m.div key={item.to} whileTap={{ scale: 0.95 }}>
                                      <Link
                                        to={item.to}
                                        className="group flex items-center gap-3 rounded-[10px] px-3 py-2.5 transition-all duration-200 hover:bg-[#F26A3D]/20"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                      >
                                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] bg-[#F26A3D]/20 text-[#F26A3D]">
                                          <Icon className="h-3.5 w-3.5" />
                                        </div>
                                        <div>
                                          <p className="text-[13px] font-semibold !text-white">{item.label}</p>
                                          <p className="text-[11px] !text-white/50">{item.desc}</p>
                                        </div>
                                      </Link>
                                    </m.div>
                                  );
                                })}
                              </div>
                            </m.div>
                          )}
                        </AnimatePresence>
                      </m.div>
                    );
                  }

                  return (
                    <m.div key={link.to} whileTap={{ scale: 0.95 }}>
                      <NavLink
                        to={link.to}
                        end={link.to === '/'}
                        className={({ isActive }) =>
                          cn(
                            'flex items-center gap-3.5 rounded-xl px-4 py-3.5 text-[16px] font-semibold transition-all duration-200',
                            isActive
                              ? 'bg-[#F26A3D]/20 !text-[#F26A3D]'
                              : '!text-white hover:bg-white/10'
                          )
                        }
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {({ isActive }) => (
                          <>
                            <span className={cn('w-2 h-2 rounded-full flex-shrink-0 transition-colors duration-200', isActive ? 'bg-[#F26A3D]' : 'bg-white')} />
                            <span>{link.label}</span>
                          </>
                        )}
                      </NavLink>
                    </m.div>
                  );
                })}
              </nav>

              {/* Bottom CTA */}
              <div className="px-5 pb-8 pt-4 flex flex-col gap-3 border-t border-white/10 mt-4">
                <a
                  href={`tel:${business.phone.replace(/\D/g, '')}`}
                  className="flex items-center gap-3 rounded-[14px] border border-white/15 bg-white/8 px-4 py-3.5 text-white hover:bg-white/15 transition-colors"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F26A3D]/20">
                    <Phone className="h-4 w-4 text-[#F26A3D]" />
                  </div>
                  <div>
                    <p className="text-[11px] text-white/50 font-medium">Call Us</p>
                    <p className="text-[15px] font-bold text-white">{business.phone}</p>
                  </div>
                </a>
                <button
                  type="button"
                  className="w-full rounded-[14px] bg-gradient-to-r from-[#F26A3D] to-[#D9552A] px-6 py-4 text-base font-bold text-white shadow-[0_12px_30px_rgba(242,106,61,0.4)] hover:shadow-[0_16px_40px_rgba(242,106,61,0.5)] hover:-translate-y-0.5 transition-all duration-200"
                  onClick={() => { setIsMobileMenuOpen(false); navigate('/contact'); }}
                >
                  Get a Free Quote
                </button>
              </div>
            </m.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
