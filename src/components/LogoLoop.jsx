import { useRef, useEffect, useState } from 'react';
import './LogoLoop.css';

const LogoLoop = ({
  logos = [],
  speed = 50,
  direction = 'up',
  logoHeight = 48,
  gap = 40,
  hoverSpeed = 0,
  scaleOnHover = true,
  fadeOut = true,
  fadeOutColor = '#0b0b0e',
  useCustomRender = false,
  ariaLabel = 'Partner and technology logos'
}) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const offsetRef = useRef(0);
  const animFrameRef = useRef(null);
  const lastTimeRef = useRef(null);

  const isVertical = direction === 'up' || direction === 'down';

  // Duplicate logos array so looping is 100% seamless
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = (time) => {
      if (lastTimeRef.current !== null) {
        const delta = (time - lastTimeRef.current) / 1000;
        const activeSpeed = isHovered ? hoverSpeed : speed;
        const moveStep = activeSpeed * delta;

        if (direction === 'up' || direction === 'left') {
          offsetRef.current -= moveStep;
        } else {
          offsetRef.current += moveStep;
        }

        // Loop size bounds
        const trackSize = isVertical ? track.scrollHeight / 2 : track.scrollWidth / 2;

        if (trackSize > 0) {
          if (Math.abs(offsetRef.current) >= trackSize) {
            offsetRef.current = offsetRef.current % trackSize;
          }
        }

        if (isVertical) {
          track.style.transform = `translate3d(0, ${offsetRef.current}px, 0)`;
        } else {
          track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
        }
      }

      lastTimeRef.current = time;
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [speed, hoverSpeed, isHovered, direction, isVertical]);

  return (
    <div
      ref={containerRef}
      className={`logo-loop-container direction-${direction}`}
      aria-label={ariaLabel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ '--fade-color': fadeOutColor }}
    >
      {fadeOut && <div className="logo-loop-fade-overlay" />}

      <div ref={trackRef} className="logo-loop-track">
        {duplicatedLogos.map((item, idx) => {
          const itemStyle = {
            height: `${logoHeight}px`,
            marginRight: !isVertical ? `${gap}px` : '0',
            marginBottom: isVertical ? `${gap}px` : '0'
          };

          const key = `${idx}-${item.title || item.alt || idx}`;

          if (useCustomRender && item.render) {
            return (
              <div key={key} style={itemStyle} className={`logo-loop-item ${scaleOnHover ? 'scale-on-hover' : ''}`}>
                {item.render}
              </div>
            );
          }

          const content = item.node ? (
            <div style={{ height: `${logoHeight}px`, display: 'flex', alignItems: 'center', fontSize: `${logoHeight * 0.8}px` }}>
              {item.node}
            </div>
          ) : item.src ? (
            <img src={item.src} alt={item.alt || 'Logo'} style={{ height: `${logoHeight}px` }} />
          ) : (
            <span style={{ fontSize: '1rem', fontWeight: 600 }}>{item.title}</span>
          );

          if (item.href) {
            return (
              <a
                key={key}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                title={item.title || item.alt}
                style={itemStyle}
                className={`logo-loop-item ${scaleOnHover ? 'scale-on-hover' : ''}`}
              >
                {content}
              </a>
            );
          }

          return (
            <div
              key={key}
              style={itemStyle}
              title={item.title || item.alt}
              className={`logo-loop-item ${scaleOnHover ? 'scale-on-hover' : ''}`}
            >
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LogoLoop;
