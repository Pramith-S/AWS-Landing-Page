import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import '../components/Navbar.css';

const awsLogo = '/images/aws_logo.png';

const MobileNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Pillars', href: '#pillars' },
    { name: 'Events', href: '#events' },
    { name: 'Domains', href: '#domains' },
    { name: 'Team', href: '#team' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
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
              <span className="short-sub-text" style={{ display: 'inline' }}>JSSATEB</span>
            </span>
          </div>
        </a>

        {/* Right CTA & Menu Toggle */}
        <div className="nav-actions">
          <a
            href="https://bit.ly/45162HC"
            target="_blank"
            rel="noreferrer"
            className="nav-cta-btn"
          >
            <span>Join</span>
            <ArrowUpRight size={16} />
          </a>

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
              href="https://bit.ly/45162HC"
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

export default MobileNavbar;
