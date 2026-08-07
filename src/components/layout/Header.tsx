import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { ChevronDown, ChevronRight, Menu, Phone, X } from 'lucide-react';
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

const serviceLinks: Array<{ label: string; to: string }> = [
  { label: 'Interior Painting', to: '/services/interior-painting' },
  { label: 'Exterior Painting', to: '/services/exterior-painting' },
  { label: 'Waterproofing', to: '/services/waterproofing' },
  { label: 'Wall Textures', to: '/services/wall-textures' },
  { label: 'Wallpaper', to: '/services/wallpaper' },
  { label: 'Wood Finishes', to: '/services/wood-finishes' },
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
                            initial={{ opacity: 0, y: -6, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -6, scale: 0.98 }}
                            transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: 'easeOut' }}
                            className="absolute left-1/2 top-full mt-4 w-64 -translate-x-1/2 rounded-[20px] border border-[var(--color-border)] bg-[var(--color-white)] p-3 shadow-[0_20px_50px_rgba(16,42,67,0.14)]"
                            onMouseEnter={openServicesDropdown}
                            onMouseLeave={closeServicesDropdown}
                          >
                            <div className="grid gap-1">
                              {serviceLinks.map((item) => (
                                <Link
                                  key={item.to}
                                  to={item.to}
                                  className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-[var(--color-primary)] transition-colors duration-200 hover:bg-[var(--color-surface)] hover:text-[var(--color-accent)]"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  <span>{item.label}</span>
                                  <ChevronRight className="h-4 w-4" />
                                </Link>
                              ))}
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
              className="h-[46px] rounded-full bg-[var(--color-accent)] px-5 font-semibold text-white shadow-[0_12px_26px_rgba(231,104,75,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-accent-dark)]"
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
              transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 z-50 flex h-full w-[min(88vw,360px)] flex-col border-l border-[var(--color-border)] bg-[var(--color-surface)] p-6 pt-20 shadow-2xl lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <nav className="flex flex-col gap-4">
                {desktopNavLinks.map((link) => {
                  if (link.label === 'Services') {
                    return (
                      <div key={link.to} className="flex flex-col gap-2">
                        <button
                          type="button"
                          className="flex items-center justify-between rounded-xl px-1 py-2 text-left text-lg font-semibold text-[var(--color-primary)]"
                          onClick={() => setIsMobileServicesOpen((open) => !open)}
                        >
                          <span>{link.label}</span>
                          <ChevronDown
                            className={cn(
                              'h-4 w-4 transition-transform duration-200',
                              isMobileServicesOpen && 'rotate-180'
                            )}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {isMobileServicesOpen && (
                            <m.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-3 flex flex-col gap-1.5 border-l border-[var(--color-border)] pl-3 py-2">
                                {serviceLinks.map((item) => (
                                  <Link
                                    key={item.to}
                                    to={item.to}
                                    className="rounded-lg px-2 py-2 text-sm font-medium text-[var(--color-text-muted)] transition-colors duration-200 hover:bg-[var(--color-white)] hover:text-[var(--color-accent)]"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {item.label}
                                  </Link>
                                ))}
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
                          'rounded-xl px-1 py-2 text-lg font-semibold transition-colors duration-200',
                          isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-primary)]'
                        )
                      }
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  );
                })}
              </nav>

              <div className="mt-auto flex flex-col gap-4 border-t border-[var(--color-border)] pt-6">
                <a
                  href={`tel:${business.phone.replace(/\D/g, '')}`}
                  className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-white)] px-4 py-3 text-[var(--color-primary)]"
                >
                  <Phone className="h-5 w-5 text-[var(--color-accent)]" />
                  <span className="font-semibold">{business.phone}</span>
                </a>
                <Button
                  size="lg"
                  fullWidth
                  className="border border-[var(--color-accent)] bg-[var(--color-accent)] text-white shadow-[0_12px_24px_rgba(231,104,75,0.24)] hover:bg-[var(--color-accent-dark)]"
                  onClick={() => navigate('/contact')}
                >
                  Get a Free Quote
                </Button>
              </div>
            </m.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
