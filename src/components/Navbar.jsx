import { ArrowUpRight } from 'lucide-react';
import PillNav from './PillNav';
import { NAV_ITEMS, useActiveSection } from './useActiveSection';
import './Navbar.css';

const awsLogo = '/images/aws_logo.png';

const Navbar = ({ onOpenJoinModal }) => {
  const { isScrolled, activeSection, handleNavSelect } = useActiveSection();

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
        <nav className="nav-desktop-links" aria-label="Primary Navigation">
          <PillNav
            items={NAV_ITEMS}
            activeHref={activeSection}
            onItemSelect={handleNavSelect}
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
        </div>
      </div>

      {/* Responsive Pill Navigation Bar on Tablet & Mobile Viewports */}
      <nav className="container mobile-pill-nav-row" aria-label="Section Navigation">
        <PillNav
          items={NAV_ITEMS}
          activeHref={activeSection}
          onItemSelect={handleNavSelect}
          ease="power2.easeOut"
          theme="dark"
          initialLoadAnimation={false}
        />
      </nav>
    </header>
  );
};

export default Navbar;
