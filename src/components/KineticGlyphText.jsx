import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import './KineticGlyphText.css';

const DEFAULT_GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!<>[]{}_/\\=+*~#%^&@;:';

// Keywords receiving distinctive styling and interactive reactions
const SPECIAL_KEYWORDS = {
  AWS: 'kw-aws',
  CLOUD: 'kw-cloud',
  BUILD: 'kw-build',
  BUILDERS: 'kw-build',
  BUILDING: 'kw-build',
  INNOVATE: 'kw-innovate',
  INNOVATION: 'kw-innovate',
  FUTURE: 'kw-future',
  CODE: 'kw-code',
  LIMITS: 'kw-limits',
  ENGINEER: 'kw-engineer',
  SERVERLESS: 'kw-cloud',
  DEVOPS: 'kw-code',
  SECURITY: 'kw-security'
};

/**
 * KineticGlyphText
 * Sophisticated Kinetic Typography & Character Scramble / Morphing Component
 */
export default function KineticGlyphText({
  text = '',
  as: Component = 'span',
  trigger = 'load', // 'load' | 'view' | 'hover' | 'manual'
  speed = 35, // ms per tick
  cycles = 8, // scramble iterations per char before resolving
  stagger = 0.02, // delay multiplier across characters
  className = '',
  highlightKeywords = true,
  interactiveHover = true,
  onComplete,
  style = {}
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isResolved, setIsResolved] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const containerRef = useRef(null);
  const animFrameRef = useRef(null);
  const startTimeRef = useRef(null);
  const isReducedMotion = useRef(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      isReducedMotion.current = mediaQuery.matches;
    }
  }, []);

  // Main morph / scramble routine
  const startScramble = useCallback(
    (targetString) => {
      if (isReducedMotion.current) {
        setDisplayText(targetString);
        setIsResolved(true);
        if (onComplete) onComplete();
        return;
      }

      setIsResolved(false);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

      const targetLen = targetString.length;
      const chars = targetString.split('');
      const charStates = chars.map((char, index) => ({
        target: char,
        isSpace: char === ' ' || char === '\n',
        resolved: false,
        startTime: index * (stagger * 1000), // ms delay per char
        duration: cycles * speed,
        current: char === ' ' ? ' ' : DEFAULT_GLYPHS[Math.floor(Math.random() * DEFAULT_GLYPHS.length)]
      }));

      const animationStart = performance.now();
      startTimeRef.current = animationStart;

      const tick = (now) => {
        const elapsed = now - animationStart;
        let allDone = true;

        const rendered = charStates.map((state) => {
          if (state.isSpace) return state.target;

          if (elapsed < state.startTime) {
            // Before character starts resolving: show random glyph
            allDone = false;
            return DEFAULT_GLYPHS[Math.floor(Math.random() * DEFAULT_GLYPHS.length)];
          }

          const charProgress = elapsed - state.startTime;
          if (charProgress >= state.duration) {
            state.resolved = true;
            return state.target;
          }

          // Active scrambling phase
          allDone = false;
          return DEFAULT_GLYPHS[Math.floor(Math.random() * DEFAULT_GLYPHS.length)];
        });

        setDisplayText(rendered.join(''));

        if (!allDone) {
          animFrameRef.current = requestAnimationFrame(tick);
        } else {
          setDisplayText(targetString);
          setIsResolved(true);
          if (onComplete) onComplete();
        }
      };

      animFrameRef.current = requestAnimationFrame(tick);
    },
    [cycles, speed, stagger, onComplete]
  );

  // Trigger on text change (morph transition)
  useEffect(() => {
    if (trigger === 'load') {
      startScramble(text);
    } else if (trigger === 'manual' && hasTriggered) {
      startScramble(text);
    }
  }, [text, trigger, startScramble, hasTriggered]);

  // Viewport intersection observer for 'view' trigger
  useEffect(() => {
    if (trigger !== 'view') return;

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered) {
            setHasTriggered(true);
            startScramble(text);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [trigger, text, hasTriggered, startScramble]);

  // Mini-scramble on word hover
  const handleWordHover = (word) => {
    if (!interactiveHover || !isResolved || isReducedMotion.current) return;
    // Trigger lightweight temporary scramble
    let count = 0;
    const interval = setInterval(() => {
      count++;
      if (count > 4) {
        clearInterval(interval);
      }
    }, 45);
  };

  // Render tokens with keyword highlights
  const tokens = useMemo(() => {
    if (!highlightKeywords) return [displayText];

    const words = displayText.split(/(\s+)/);
    return words.map((chunk, idx) => {
      const cleanUpper = chunk.replace(/[^A-Za-z]/g, '').toUpperCase();
      const kwClass = SPECIAL_KEYWORDS[cleanUpper];

      if (kwClass) {
        return (
          <span
            key={idx}
            className={`kinetic-keyword ${kwClass}`}
            onMouseEnter={() => handleWordHover(chunk)}
          >
            {chunk}
          </span>
        );
      }
      return chunk;
    });
  }, [displayText, highlightKeywords, isResolved]);

  return (
    <Component
      ref={containerRef}
      className={`kinetic-glyph-container ${className} ${isResolved ? 'is-resolved' : 'is-scrambling'}`}
      style={style}
    >
      {/* Hidden text for accessibility & SEO */}
      <span className="sr-only">{text}</span>

      {/* Visual animated morph text */}
      <span className="kinetic-glyph-output" aria-hidden="true">
        {tokens}
      </span>
    </Component>
  );
}
