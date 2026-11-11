import React, { useEffect, useRef } from 'react';
import './AnimatedDotGridBackground.css';

/**
 * Full-section warm off-white dotted grid background with gentle wave animation
 * and subtle cursor proximity ripple. Pauses automatically when off-screen.
 */
const AnimatedDotGridBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const parent = canvas.parentElement;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let rafId = null;
    let isVisible = true;
    let startTime = performance.now();

    const pointer = { x: -9999, y: -9999, active: false };
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    const SPACING = 22;

    const resize = () => {
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawFrame = (now) => {
      const t = prefersReducedMotion ? 0 : (now - startTime) * 0.001;

      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / SPACING) + 1;
      const rows = Math.ceil(height / SPACING) + 1;
      const offsetX = ((width % SPACING) / 2) || SPACING / 2;
      const offsetY = SPACING / 2;

      for (let r = 0; r < rows; r++) {
        const y = offsetY + r * SPACING;
        for (let c = 0; c < cols; c++) {
          const x = offsetX + c * SPACING;

          // Gentle diagonal wave across the whole section
          const wave = Math.sin(t * 1.45 - (c * 0.24 + r * 0.2));
          const normalized = (wave + 1) * 0.5; // 0 .. 1

          let boost = 0;
          if (pointer.active) {
            const dx = x - pointer.x;
            const dy = y - pointer.y;
            const distSq = dx * dx + dy * dy;
            if (distSq < 19600) {
              boost = 1 - Math.sqrt(distSq) / 140;
            }
          }

          const radius = 1.15 + normalized * 0.65 + boost * 1.15;
          const alpha = 0.32 + normalized * 0.3 + boost * 0.35;

          // Blend smoothly between sepia-charcoal (#5f5444) and warm amber (#c87216) on wave peaks / hover
          const warmMix = Math.max(0, (normalized - 0.55) * 1.1 + boost * 0.9);
          const clampedMix = Math.min(1, warmMix);
          const red = Math.round(95 + (200 - 95) * clampedMix);
          const green = Math.round(84 + (114 - 84) * clampedMix);
          const blue = Math.round(68 + (22 - 68) * clampedMix);

          ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha.toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const tick = (now) => {
      if (!isVisible) {
        rafId = null;
        return;
      }
      drawFrame(now);
      if (!prefersReducedMotion) {
        rafId = requestAnimationFrame(tick);
      }
    };

    const startLoop = () => {
      if (prefersReducedMotion) {
        drawFrame(performance.now());
        return;
      }
      if (rafId === null && isVisible) {
        rafId = requestAnimationFrame(tick);
      }
    };

    const handlePointerMove = (e) => {
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    resize();
    startLoop();

    const resizeObs = new ResizeObserver(() => {
      resize();
      if (prefersReducedMotion) drawFrame(performance.now());
    });
    if (parent) {
      resizeObs.observe(parent);
      parent.addEventListener('pointermove', handlePointerMove, { passive: true });
      parent.addEventListener('pointerleave', handlePointerLeave);
    }

    const visObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            startLoop();
          } else if (rafId !== null) {
            cancelAnimationFrame(rafId);
            rafId = null;
          }
        });
      },
      { threshold: 0.01 }
    );
    if (parent) visObs.observe(parent);

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      resizeObs.disconnect();
      visObs.disconnect();
      if (parent) {
        parent.removeEventListener('pointermove', handlePointerMove);
        parent.removeEventListener('pointerleave', handlePointerLeave);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="animated-dot-grid-canvas" aria-hidden="true" />;
};

export default AnimatedDotGridBackground;
