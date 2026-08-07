import { useEffect, useRef, useState } from 'react';

const SplitText = ({
  text = '',
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
  showCallback = false
}) => {
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);
  const animatedCountRef = useRef(0);

  const getEasing = (e) => {
    if (e === 'power3.out') return 'cubic-bezier(0.215, 0.61, 0.355, 1)';
    if (e === 'power2.out') return 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    if (e === 'back.out') return 'cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    return e || 'ease-out';
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    } else {
      setInView(true);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const items = text.split(splitType === 'words' ? ' ' : '');

  const handleTransitionEnd = (index) => {
    animatedCountRef.current += 1;
    if (animatedCountRef.current >= items.length) {
      if (showCallback && typeof onLetterAnimationComplete === 'function') {
        onLetterAnimationComplete();
      }
    }
  };

  return (
    <span
      ref={containerRef}
      className={`split-text-container ${className}`}
      style={{
        display: 'inline-block',
        textAlign: textAlign,
        wordBreak: 'break-word'
      }}
    >
      {items.map((char, i) => {
        const itemDelay = (i * delay) / 1000;
        const currentStyle = inView
          ? {
              opacity: to.opacity !== undefined ? to.opacity : 1,
              transform: `translate3d(0, ${to.y !== undefined ? to.y : 0}px, 0)`,
              transition: `opacity ${duration}s ${getEasing(ease)} ${itemDelay}s, transform ${duration}s ${getEasing(ease)} ${itemDelay}s`
            }
          : {
              opacity: from.opacity !== undefined ? from.opacity : 0,
              transform: `translate3d(0, ${from.y !== undefined ? from.y : 40}px, 0)`,
              transition: 'none'
            };

        return (
          <span
            key={i}
            className="split-char"
            style={{
              display: 'inline-block',
              willChange: 'transform, opacity',
              ...currentStyle
            }}
            onTransitionEnd={() => handleTransitionEnd(i)}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        );
      })}
    </span>
  );
};

export default SplitText;
