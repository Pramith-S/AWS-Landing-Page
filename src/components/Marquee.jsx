import './Marquee.css';

export function Marquee({
  children,
  reverse = false,
  pauseOnHover = true,
  className = '',
  duration = '35s',
  gap = '1.5rem',
  repeat = 3
}) {
  return (
    <div
      className={`marquee-root ${className}`}
      style={{
        '--marquee-duration': duration,
        '--marquee-gap': gap,
      }}
    >
      <div className={`marquee-track ${reverse ? 'reverse' : ''} ${pauseOnHover ? 'pause-on-hover' : ''}`}>
        {Array.from({ length: repeat }).map((_, i) => (
          <div key={i} className="marquee-group" aria-hidden={i > 0 ? 'true' : undefined}>
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
