import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import business from '@/config/business';
import Container from '@/components/common/Container';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Projects', to: '/projects' },
  { label: 'Colour Ideas', to: '/colour-ideas' },
  { label: 'Contact Us', to: '/contact' },
];

const serviceLinks = [
  { label: 'Interior Painting', to: '/services#interior' },
  { label: 'Exterior Painting', to: '/services#exterior' },
  { label: 'Waterproofing', to: '/services#waterproofing' },
  { label: 'Wall Textures', to: '/services#textures' },
  { label: 'Wood & Metal Finishes', to: '/services#wood-metal' },
  { label: 'Commercial Painting', to: '/services#commercial' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-primary)] text-[var(--color-white)] mt-[100px] mt-auto pt-[60px] pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & About */}
          <div className="flex flex-col gap-6">
            <Link
              to="/"
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-sm"
              aria-label={`${business.companyName} — Home`}
            >
              <span className="font-sans text-2xl font-extrabold tracking-tight text-white">
                {business.companyName}
              </span>
            </Link>
            <p className="text-[15px] leading-relaxed text-white/70 max-w-sm">
              {business.description}
            </p>
            <div className="flex items-center gap-4 mt-2">
              {business.socialLinks.facebook && (
                <a href={business.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="p-2 -ml-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors" aria-label="Facebook">
                  <FacebookIcon fontSize="small" />
                </a>
              )}
              {business.socialLinks.instagram && (
                <a href={business.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors" aria-label="Instagram">
                  <InstagramIcon fontSize="small" />
                </a>
              )}
              {business.socialLinks.youtube && (
                <a href={business.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors" aria-label="YouTube">
                  <YouTubeIcon fontSize="small" />
                </a>
              )}
              {business.socialLinks.linkedin && (
                <a href={business.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors" aria-label="LinkedIn">
                  <LinkedInIcon fontSize="small" />
                </a>
              )}
              {business.socialLinks.twitter && (
                <a href={business.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors" aria-label="Twitter">
                  <TwitterIcon fontSize="small" />
                </a>
              )}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[17px] font-bold tracking-wide">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-[15px] text-white/70 hover:text-[var(--color-accent)] transition-colors inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[17px] font-bold tracking-wide">Our Services</h3>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-[15px] text-white/70 hover:text-[var(--color-accent)] transition-colors inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[17px] font-bold tracking-wide">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <span className="text-[15px] text-white/70 leading-relaxed">
                  {business.address},<br />
                  {business.city}, {business.state} {business.pincode}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[var(--color-accent)] shrink-0" />
                <a 
                  href={`tel:${business.phone.replace(/\D/g, '')}`}
                  className="text-[15px] text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-sm"
                >
                  {business.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[var(--color-accent)] shrink-0" />
                <a 
                  href={`mailto:${business.email}`}
                  className="text-[15px] text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-sm"
                >
                  {business.email}
                </a>
              </li>
              <li className="flex items-start gap-3 pt-2">
                <Clock className="h-5 w-5 text-white/50 shrink-0 mt-0.5" />
                <div className="flex flex-col text-[14px] text-white/70">
                  <span>Mon-Fri: {business.workingHours.weekdays}</span>
                  <span>Sat: {business.workingHours.saturday}</span>
                  <span>Sun: {business.workingHours.sunday}</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[14px] text-white/50 text-center md:text-left">
            © {currentYear} <span className="font-semibold text-white/70">{business.companyName}</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-[13px] text-white/50 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-[13px] text-white/50 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
