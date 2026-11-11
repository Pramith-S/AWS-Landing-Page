import { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';

const MAIN_TEXT = 'AWS STUDENT BUILDER GROUP';
const SUB_TEXT = 'JSSATEB';
const GLYPH_POOL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const CELL_HEIGHT_EM = 1.24;

// Tracks completed intro within the current SPA session so section navigation never replays it.
let hasCompletedIntro = false;

function buildDeterministicGlyph(seed, stepIdx, forbiddenChar) {
  const hash = Math.abs((seed * 73856093) ^ (stepIdx * 19349663) ^ 0x9e3779b9);
  let candidate = GLYPH_POOL[hash % GLYPH_POOL.length];
  if (candidate === forbiddenChar) {
    candidate = GLYPH_POOL[(hash + 7) % GLYPH_POOL.length];
  }
  return candidate;
}

function buildLineSlots(text, lineOffset, baseDuration, perCharStep, sweepStartMs) {
  let glyphOrder = 0;

  return text.split('').map((char, idx) => {
    if (char === ' ') {
      return { isSpace: true, key: `${lineOffset}-space-${idx}` };
    }

    const order = glyphOrder++;
    const steps = 7 + Math.round(order * (lineOffset === 0 ? 0.52 : 1.05));
    const seed = (lineOffset + 1) * 131 + idx * 37 + char.charCodeAt(0);

    const reel = [];
    for (let s = 0; s < steps; s++) {
      const prev = s > 0 ? reel[s - 1] : '';
      let picked = buildDeterministicGlyph(seed + s * 17, s, s === steps - 1 ? char : prev);
      if (picked === prev) {
        picked = GLYPH_POOL[(GLYPH_POOL.indexOf(picked) + 3) % GLYPH_POOL.length];
      }
      reel.push(picked);
    }
    reel.push(char);

    const fragX = ((order % 5) - 2) * 1.4;
    const fragY = (((order * 3) % 5) - 2) * 1.1;
    const fragSkew = (order % 2 === 0 ? 1 : -1) * (4 + (order % 4));

    return {
      isSpace: false,
      key: `${lineOffset}-char-${idx}`,
      char,
      steps,
      reel,
      fragDelay: 20 + order * 6,
      fragX: `${fragX.toFixed(1)}px`,
      fragY: `${fragY.toFixed(1)}px`,
      fragSkew: `${fragSkew}deg`,
      spinDelay: 40 + (order % 3) * 15,
      spinDuration: baseDuration + order * perCharStep + ((order * 17) % 36),
      sweepDelay: sweepStartMs + order * 18
    };
  });
}

const Loader = ({ minDisplayTime = 2550, onFinished }) => {
  const [isVisible, setIsVisible] = useState(() => !hasCompletedIntro);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const mainSlots = useMemo(() => buildLineSlots(MAIN_TEXT, 0, 620, 40, 1220), []);
  const subSlots = useMemo(() => buildLineSlots(SUB_TEXT, 1, 860, 88, 1420), []);

  useEffect(() => {
    if (hasCompletedIntro) {
      setIsVisible(false);
      return;
    }

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches);

    const delay = prefersReducedMotion ? Math.min(minDisplayTime, 900) : minDisplayTime;
    document.body.style.overflow = '';

    let dismissed = false;
    let fadeTimer = null;
    let exitTimer = null;

    const triggerDismiss = (fadeMs = 480) => {
      if (dismissed) return;
      dismissed = true;
      hasCompletedIntro = true;
      setIsFadingOut(true);
      document.body.style.overflow = '';
      exitTimer = setTimeout(() => {
        setIsVisible(false);
        if (onFinished) onFinished();
      }, fadeMs);
    };

    fadeTimer = setTimeout(() => {
      triggerDismiss(480);
    }, delay);

    const handleUserDismiss = () => triggerDismiss(280);

    window.addEventListener('keydown', handleUserDismiss, { passive: true });
    window.addEventListener('pointerdown', handleUserDismiss, { passive: true });
    window.addEventListener('touchstart', handleUserDismiss, { passive: true });
    window.addEventListener('wheel', handleUserDismiss, { passive: true });
    window.addEventListener('click', handleUserDismiss);

    return () => {
      if (fadeTimer) clearTimeout(fadeTimer);
      if (exitTimer) clearTimeout(exitTimer);
      window.removeEventListener('keydown', handleUserDismiss);
      window.removeEventListener('pointerdown', handleUserDismiss);
      window.removeEventListener('touchstart', handleUserDismiss);
      window.removeEventListener('wheel', handleUserDismiss);
      window.removeEventListener('click', handleUserDismiss);
      document.body.style.overflow = '';
    };
  }, [minDisplayTime, onFinished]);

  if (!isVisible) return null;

  const renderLine = (slots, className, label) => (
    <div className={`intro-line ${className}`} aria-label={label}>
      {slots.map((slot) => {
        if (slot.isSpace) {
          return (
            <span key={slot.key} className="glyph-space" aria-hidden="true">
              {'\u00A0'}
            </span>
          );
        }

        return (
          <span
            key={slot.key}
            className="glyph-cell"
            aria-hidden="true"
            style={{
              '--steps': slot.steps,
              '--frag-delay': `${slot.fragDelay}ms`,
              '--frag-x': slot.fragX,
              '--frag-y': slot.fragY,
              '--frag-skew': slot.fragSkew,
              '--spin-delay': `${slot.spinDelay}ms`,
              '--spin-dur': `${slot.spinDuration}ms`,
              '--sweep-delay': `${slot.sweepDelay}ms`
            }}
          >
            <span className="glyph-sizer">{slot.char}</span>
            <span className="glyph-window">
              <span className="glyph-reel">
                {slot.reel.map((g, gIdx) => (
                  <span key={gIdx} className="glyph-item">
                    {g}
                  </span>
                ))}
              </span>
            </span>
          </span>
        );
      })}
    </div>
  );

  return (
    <StyledOverlay className={isFadingOut ? 'fade-out' : ''}>
      <StyledWrapper>
        <div className="loader" role="status" aria-live="polite">
          {renderLine(mainSlots, 'intro-line-main', MAIN_TEXT)}
          {renderLine(subSlots, 'intro-line-sub', SUB_TEXT)}
        </div>
      </StyledWrapper>
    </StyledOverlay>
  );
};

const StyledOverlay = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  z-index: 999999;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  touch-action: pan-y;
  will-change: opacity;
  transition: opacity 0.48s cubic-bezier(0.22, 1, 0.36, 1), visibility 0.48s ease;

  &.fade-out {
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100vw;
  padding: 0 1.25rem;
  box-sizing: border-box;

  .loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: clamp(0.3rem, 0.85vw, 0.6rem);
    user-select: none;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .intro-line {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    white-space: pre;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-weight: 700;
    letter-spacing: -0.012em;
    line-height: ${CELL_HEIGHT_EM};
    color: #ffffff;
  }

  .intro-line-main {
    font-size: clamp(0.95rem, 4.15vw, 3.05rem);
  }

  .intro-line-sub {
    font-size: clamp(0.85rem, 3.1vw, 2.3rem);
  }

  .glyph-space {
    display: inline-block;
    width: 0.28em;
    height: ${CELL_HEIGHT_EM}em;
    line-height: ${CELL_HEIGHT_EM}em;
  }

  .glyph-cell {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: ${CELL_HEIGHT_EM}em;
    line-height: ${CELL_HEIGHT_EM}em;
    color: #ffffff;
    animation:
      glyphFragment 380ms cubic-bezier(0.22, 1, 0.36, 1) var(--frag-delay) both,
      glyphVioletSweep 360ms ease-in-out var(--sweep-delay) 1 both;
  }

  .glyph-sizer {
    display: inline-block;
    visibility: hidden;
    pointer-events: none;
    line-height: ${CELL_HEIGHT_EM}em;
  }

  .glyph-window {
    position: absolute;
    top: 0;
    left: -0.04em;
    right: -0.04em;
    height: ${CELL_HEIGHT_EM}em;
    overflow: hidden;
    -webkit-mask-image: linear-gradient(
      to bottom,
      transparent 0%,
      #000 13%,
      #000 87%,
      transparent 100%
    );
    mask-image: linear-gradient(
      to bottom,
      transparent 0%,
      #000 13%,
      #000 87%,
      transparent 100%
    );
  }

  .glyph-reel {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    will-change: transform;
    animation: glyphReelSpin var(--spin-dur) cubic-bezier(0.14, 0.92, 0.24, 1) var(--spin-delay) both;
  }

  .glyph-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${CELL_HEIGHT_EM}em;
    line-height: ${CELL_HEIGHT_EM}em;
    flex: none;
  }

  @keyframes glyphReelSpin {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(0, calc(var(--steps) * -${CELL_HEIGHT_EM}em), 0);
    }
  }

  @keyframes glyphFragment {
    0% {
      opacity: 0;
      transform: translate3d(var(--frag-x), var(--frag-y), 0) skewX(var(--frag-skew));
      text-shadow: -2px 0 rgba(168, 85, 247, 0.8), 2px 0 rgba(56, 189, 248, 0.55);
    }
    22% {
      opacity: 0.95;
      transform: translate3d(calc(var(--frag-x) * -0.5), 1px, 0) skewX(calc(var(--frag-skew) * -0.45));
    }
    40% {
      opacity: 0.36;
      transform: translate3d(1px, -1px, 0) skewX(2deg);
      text-shadow: 1.5px 0 rgba(192, 132, 252, 0.65), -1.5px 0 rgba(255, 255, 255, 0.4);
    }
    66% {
      opacity: 1;
      transform: translate3d(0, 0, 0) skewX(0deg);
      text-shadow: -1px 0 rgba(168, 85, 247, 0.3), 1px 0 rgba(56, 189, 248, 0.2);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0) skewX(0deg);
      text-shadow: none;
    }
  }

  @keyframes glyphVioletSweep {
    0% {
      color: #ffffff;
    }
    45% {
      color: #c084fc;
      text-shadow: 0 0 10px rgba(168, 85, 247, 0.35);
    }
    100% {
      color: #ffffff;
      text-shadow: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .glyph-cell {
      animation: none;
    }
    .glyph-reel {
      animation: none;
      transform: translate3d(0, calc(var(--steps) * -${CELL_HEIGHT_EM}em), 0);
    }
  }
`;

export default Loader;
