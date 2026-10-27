import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import PillNav from './PillNav';
import './Navbar.css';

const awsLogo = '/images/aws_logo.png';

const Navbar = ({ onOpenJoinModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#about');

  useEffect(() => {
    const sectionIds = ['about', 'pillars', 'events', 'domains', 'core-team', 'contact', 'faq'];
    let ticking = false;

    const checkScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const viewportCenter = window.innerHeight * 0.4;
      let currentSection = '#about';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportCenter && rect.bottom >= 80) {
            currentSection = `#${id}`;
          }
        }
      }

      setActiveSection(currentSection);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(checkScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    checkScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Pillars', href: '#pillars' },
    { name: 'Events', href: '#events' },
    { name: 'Domains', href: '#domains' },
    { name: 'Core Team', href: '#core-team' },
    { name: 'Contact', href: '#contact' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`sbg-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#" className="nav-brand">
          <img src={awsLogo} alt="AWS Logo" className="aws-brand-logo" />
          <div className="brand-text-group">
            <span className="brand-title">AWS <span className="highlight">Student Builder Group</span></span>
            <span className="brand-subtitle">
              <span className="full-sub-text">JSS Academy of Technical Education Bengaluru</span>
              <span className="short-sub-text">JSSATEB</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links (PillNav) */}
        <nav className="nav-desktop-links">
          <PillNav
            items={[
              { label: 'About', href: '#about' },
              { label: 'Pillars', href: '#pillars' },
              { label: 'Events', href: '#events' },
              { label: 'Domains', href: '#domains' },
              { label: 'Core Team', href: '#core-team' },
              { label: 'Contact', href: '#contact' },
              { label: 'FAQ', href: '#faq' }
            ]}
            activeHref={activeSection}
            ease="power2.easeOut"
            theme="dark"
            initialLoadAnimation={false}
          />
        </nav>

        {/* Right CTA */}
        <div className="nav-actions">
          <a
            href="https://bit.ly/45162HC"
            target="_blank"
            rel="noreferrer"
            className="nav-cta-btn"
          >
            <span>Join Group</span>
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://www.meetup.com/aws-sbg-at-jss-academy-of-technical-education-bengaluru/"
              target="_blank"
              rel="noreferrer"
              className="btn-purple-primary mobile-cta-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Group
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
