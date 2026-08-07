import { useState, useRef, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import './CardNav.css';

const CardNav = ({
  logo,
  logoAlt = 'Company Logo',
  items = [],
  baseColor = '#ffffff',
  menuColor = '#000000',
  buttonBgColor = '#111111',
  buttonTextColor = '#ffffff',
  ease = 'power3.out',
  theme = 'dark'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (isOpen && cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current.filter(Boolean),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: ease }
      );
    }
  }, [isOpen, ease]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (href) => {
    setIsOpen(false);
    if (href && href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={`card-nav-wrapper ${theme} ${isOpen ? 'is-open' : ''}`}>
      {/* Mobile Top Bar */}
      <div className="card-nav-bar">
        <a href="#" className="card-nav-brand">
          {logo && <img src={logo} alt={logoAlt} className="card-nav-logo" />}
          <div className="card-nav-brand-text">
            <span className="brand-title">AWS <span className="highlight">SBG</span></span>
            <span className="brand-sub">JSSATEB</span>
          </div>
        </a>

        <button
          className="card-nav-toggle-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          style={{ background: buttonBgColor, color: buttonTextColor }}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
          <span>{isOpen ? 'Close' : 'Menu'}</span>
        </button>
      </div>

      {/* Expanded Cards Overlay */}
      {isOpen && (
        <div className="card-nav-overlay" onClick={() => setIsOpen(false)}>
          <div className="card-nav-container" onClick={(e) => e.stopPropagation()}>
            {items.map((card, idx) => (
              <div
                key={card.label}
                ref={(el) => (cardsRef.current[idx] = el)}
                className="card-nav-item"
                style={{
                  backgroundColor: card.bgColor || '#1B1722',
                  color: card.textColor || '#ffffff'
                }}
              >
                <div className="card-nav-item-header">
                  <span className="card-nav-item-title">{card.label}</span>
                  <span className="card-nav-item-num">0{idx + 1}</span>
                </div>

                <div className="card-nav-links-list">
                  {card.links &&
                    card.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href || '#'}
                        target={link.external ? '_blank' : '_self'}
                        rel={link.external ? 'noreferrer' : ''}
                        className="card-nav-link"
                        aria-label={link.ariaLabel || link.label}
                        onClick={() => handleLinkClick(link.href)}
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight size={14} className="link-arrow" />
                      </a>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardNav;
