import { ArrowUpRight } from 'lucide-react';
import PillNav from '../components/PillNav';
import { NAV_ITEMS, useActiveSection } from '../components/useActiveSection';
import '../components/Navbar.css';

const awsLogo = '/images/aws_logo.png';

const MobileNavbar = () => {
  const { isScrolled, activeSection, handleNavSelect } = useActiveSection();

  return (
    <header className={`sbg-navbar sbg-navbar--mobile ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#" className="nav-brand">
          <img src={awsLogo} alt="AWS Logo" className="aws-brand-logo" />
          <div className="brand-text-group">
            <span className="brand-title">
              AWS <span className="highlight">Student Builder Group</span>
            </span>
            <span className="brand-subtitle">
              <span className="short-sub-text" style={{ display: 'inline' }}>JSSATEB</span>
            </span>
          </div>
        </a>

        {/* Right CTA */}
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
        </div>
      </div>

      {/* Section Pill Navigation Bar for Mobile */}
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

export default MobileNavbar;
