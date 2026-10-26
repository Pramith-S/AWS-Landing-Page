import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import './PillNav.css';

const PillNav = ({
  logo,
  logoAlt = 'Logo',
  items = [],
  activeHref = '#about',
  className = '',
  ease = 'power2.easeOut',
  baseColor = 'rgba(20, 17, 32, 0.65)',
  pillColor = '#7C3AED',
  hoveredPillTextColor = '#ffffff',
  pillTextColor = '#94a3b8',
  theme = 'dark',
  initialLoadAnimation = false
}) => {
  const [hoveredTab, setHoveredTab] = useState(null);
  const navRef = useRef(null);
  const pillRef = useRef(null);
  const itemRefs = useRef({});

  const currentHighlight = hoveredTab || activeHref;

  const updatePillPosition = () => {
    const navNode = navRef.current;
    const activeNode = itemRefs.current[currentHighlight];
    const pillNode = pillRef.current;

    if (!navNode || !activeNode || !pillNode) return;

    const navRect = navNode.getBoundingClientRect();
    const activeRect = activeNode.getBoundingClientRect();

    const left = activeRect.left - navRect.left;
    const width = activeRect.width;

    gsap.to(pillNode, {
      left: `${left}px`,
      width: `${width}px`,
      duration: 0.35,
      ease: ease,
      opacity: 1
    });
  };

  useEffect(() => {
    updatePillPosition();
    window.addEventListener('resize', updatePillPosition);
    return () => window.removeEventListener('resize', updatePillPosition);
  }, [currentHighlight, ease]);

  return (
    <div
      ref={navRef}
      className={`pill-nav-container ${theme} ${className}`.trim()}
      style={{
        '--base-color': baseColor,
        '--pill-color': pillColor,
        '--pill-text-color': pillTextColor,
        '--hover-pill-text-color': hoveredPillTextColor
      }}
    >
      {logo && (
        <a href="#" className="pill-nav-logo">
          <img src={logo} alt={logoAlt} />
        </a>
      )}

      {/* Animated Sliding Pill Highlight */}
      <div ref={pillRef} className="pill-nav-slider" />

      <div className="pill-nav-items">
        {items.map((item) => {
          const href = item.href || `#${item.label.toLowerCase()}`;
          const isCurrent = currentHighlight === href;
          return (
            <a
              key={item.label}
              ref={(el) => (itemRefs.current[href] = el)}
              href={href}
              className={`pill-nav-item ${isCurrent ? 'is-active' : ''}`}
              onClick={() => setHoveredTab(null)}
              onMouseEnter={() => setHoveredTab(href)}
              onMouseLeave={() => setHoveredTab(null)}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default PillNav;
