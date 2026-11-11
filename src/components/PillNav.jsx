import { useState, useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import './PillNav.css';

const PillNav = ({
  logo,
  logoAlt = 'Logo',
  items = [],
  activeHref = '#about',
  onItemSelect,
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
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const pillRef = useRef(null);
  const itemRefs = useRef({});

  const currentHighlight = hoveredTab || activeHref;

  const updatePillPosition = useCallback(() => {
    const trackNode = trackRef.current;
    const activeNode = itemRefs.current[currentHighlight];
    const pillNode = pillRef.current;

    if (!trackNode || !activeNode || !pillNode) return;

    const trackRect = trackNode.getBoundingClientRect();
    const activeRect = activeNode.getBoundingClientRect();

    const left = activeRect.left - trackRect.left;
    const width = activeRect.width;

    gsap.to(pillNode, {
      left: `${left}px`,
      width: `${width}px`,
      duration: initialLoadAnimation ? 0.35 : 0.32,
      ease: ease,
      opacity: 1
    });
  }, [currentHighlight, ease, initialLoadAnimation]);

  // Keep the active section pill smoothly centered inside scrollable mobile capsule
  useEffect(() => {
    if (hoveredTab) return;
    const containerNode = containerRef.current;
    const activeNode = itemRefs.current[activeHref];
    if (!containerNode || !activeNode) return;
    if (containerNode.scrollWidth <= containerNode.clientWidth + 2) return;

    const targetScrollLeft =
      activeNode.offsetLeft - containerNode.clientWidth / 2 + activeNode.offsetWidth / 2;

    containerNode.scrollTo({
      left: Math.max(0, targetScrollLeft),
      behavior: 'smooth',
    });
  }, [activeHref, hoveredTab]);

  useEffect(() => {
    updatePillPosition();
    window.addEventListener('resize', updatePillPosition);

    let observer;
    if (typeof ResizeObserver !== 'undefined' && trackRef.current) {
      observer = new ResizeObserver(updatePillPosition);
      observer.observe(trackRef.current);
    }

    if (typeof document !== 'undefined' && document.fonts?.ready) {
      document.fonts.ready.then(updatePillPosition).catch(() => {});
    }

    return () => {
      window.removeEventListener('resize', updatePillPosition);
      observer?.disconnect();
    };
  }, [updatePillPosition]);

  return (
    <div
      ref={containerRef}
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

      <div ref={trackRef} className="pill-nav-track">
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
                aria-current={activeHref === href ? 'location' : undefined}
                className={`pill-nav-item ${isCurrent ? 'is-active' : ''}`}
                onClick={(e) => {
                  setHoveredTab(null);
                  onItemSelect?.(href, e);
                }}
                onPointerEnter={(e) => {
                  if (e.pointerType === 'mouse') setHoveredTab(href);
                }}
                onPointerLeave={(e) => {
                  if (e.pointerType === 'mouse') setHoveredTab(null);
                }}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PillNav;
