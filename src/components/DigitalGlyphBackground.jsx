import React, { useEffect, useRef } from 'react';
import './DigitalGlyphBackground.css';

/**
 * DigitalGlyphBackground
 * 
 * Cinematic Vertical Matrix Rain with Golden & Purple Glowing Streams
 * Designed to match Reference Image 1 with precision:
 * - Perfectly aligned, distinct vertical column lanes (no messy horizontal overlaps)
 * - Blazing bright glowing heads (dual-pass bloom in pure white with golden & violet halos)
 * - AWS Gold & Cyber Violet color themes
 * - Authentic Katakana glyphs + Alphanumerics
 * - Smooth, organic cascading animation at 60 FPS
 * - Auto-pauses off-screen via IntersectionObserver; respects prefers-reduced-motion
 */

// Japanese Katakana matching the reference screenshot exactly
const KATAKANA = [
  'ヲ', 'ユ', 'カ', 'ロ', 'ル', 'コ', 'タ', 'ワ', 'オ', 'ト', 'モ', 'チ', 'ヤ', 'ニ',
  'マ', 'セ', 'ナ', 'ヘ', 'メ', 'ヌ', 'フ', 'ラ', 'キ', 'ゲ', 'サ', 'エ', 'シ', 'ヅ',
  'プ', 'ポ', 'ベ', 'バ', 'ア', 'ウ', 'ス', 'ツ', 'テ', 'ホ', 'ミ', 'ム', 'ヨ', 'レ', 'ン'
];

const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const LETTERS = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  'a', 'b', 'c', 'd', 'e', 'm', 'p', 'q', 'r', 's', 't', 'x', 'y', 'z'
];

const AWS_CLOUD_SYMBOLS = [
  'λ', '☁', '⚡', '⚙', '⬡', '◈', '⎇', '⌬', '⌘', '▲', '⬢', '◇', ':', ';', '=', '+', '-', '<', '>', '$', '%', '&'
];

const GLYPH_POOL = [
  ...KATAKANA, ...KATAKANA, ...KATAKANA,
  ...NUMBERS, ...NUMBERS,
  ...LETTERS,
  ...AWS_CLOUD_SYMBOLS
];

const getRandomGlyph = () => GLYPH_POOL[Math.floor(Math.random() * GLYPH_POOL.length)];

const DigitalGlyphBackground = ({
  speed = 1.0,
  opacity = 1.0
}) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let isMobile = false;

    // Strict vertical lane configuration
    let lanes = [];

    const initLanes = () => {
      lanes = [];
      // Generous lane width for clean, distinct columns without overlapping
      const laneWidth = isMobile ? 32 : 46;
      const numLanes = Math.floor(width / laneWidth);
      const startX = Math.floor((width - numLanes * laneWidth) / 2) + Math.floor(laneWidth / 2);

      for (let i = 0; i < numLanes; i++) {
        const x = startX + i * laneWidth;
        
        // Depth tier: ~40% foreground (large, bold, intense bloom), ~60% midground
        const isForeground = Math.random() < 0.42;
        const fontSize = isForeground ? (isMobile ? 16 : 19) : (isMobile ? 12 : 14);
        const lineHeight = isForeground ? (isMobile ? 20 : 23) : (isMobile ? 15 : 18);
        const trailLength = Math.floor(Math.random() * 16) + (isForeground ? 22 : 16);

        // Pre-fill glyph trail
        const chars = [];
        for (let j = 0; j < trailLength; j++) {
          chars.push(getRandomGlyph());
        }

        // Color theme: ~50% Golden (AWS SBG Gold theme), ~50% Electric Purple / Violet (Reference Image)
        const isGold = Math.random() < 0.50;
        const theme = isGold ? 'gold' : 'purple';

        // Stagger initial Y position across and above the viewport
        const y = Math.random() * (height + 600) - 400;
        const streamSpeed = (Math.random() * 0.9 + (isForeground ? 1.4 : 0.9)) * speed;

        lanes.push({
          x,
          y,
          isForeground,
          fontSize,
          lineHeight,
          font: `${isForeground ? 'bold' : '600'} ${fontSize}px "Consolas", "Courier New", "Hiragino Kaku Gothic Pro", monospace`,
          speed: streamSpeed,
          trailLength,
          chars,
          theme,
          glowColor: isGold ? '#FFB800' : '#C084FC', // Vibrant Gold or Electric Violet halo
          secondaryGlow: isGold ? '#FFA51F' : '#A855F7',
          mutateTimer: Math.floor(Math.random() * 6) + 3,
          delay: Math.floor(Math.random() * 60)
        });
      }
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = Math.max(rect.width, 320);
      height = Math.max(rect.height, 400);
      isMobile = width < 768;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      initLanes();
    };

    resize();

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
          if (entry.isIntersecting && !animFrameRef.current && !prefersReducedMotion) {
            animFrameRef.current = requestAnimationFrame(render);
          }
        });
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(container);

    // Main 60 FPS Render Loop
    const render = () => {
      if (!isVisibleRef.current) {
        animFrameRef.current = null;
        return;
      }

      // 1. CLEAR WITH DEEP OBSIDIAN-VIOLET BACKGROUND
      ctx.fillStyle = '#04030A';
      ctx.fillRect(0, 0, width, height);

      // Soft ambient cyber glow centered behind section
      const bgGrad = ctx.createRadialGradient(
        width * 0.5, height * 0.35, 60,
        width * 0.5, height * 0.35, Math.max(width, height) * 0.70
      );
      bgGrad.addColorStop(0, 'rgba(28, 14, 46, 0.40)');
      bgGrad.addColorStop(0.5, 'rgba(12, 6, 22, 0.25)');
      bgGrad.addColorStop(1, 'rgba(4, 3, 10, 0.85)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';

      // 2. RENDER EACH PROPERLY ALIGNED VERTICAL COLUMN
      for (let i = 0; i < lanes.length; i++) {
        const lane = lanes[i];

        if (lane.delay > 0) {
          lane.delay--;
          continue;
        }

        // Advance stream down the vertical column
        lane.y += lane.speed;

        // Reset stream when it travels past the bottom
        const totalHeight = lane.trailLength * lane.lineHeight;
        if (lane.y - totalHeight > height) {
          lane.y = -Math.floor(Math.random() * 180) - 40;
          lane.speed = (Math.random() * 0.9 + (lane.isForeground ? 1.4 : 0.9)) * speed;
          lane.theme = Math.random() < 0.50 ? 'gold' : 'purple';
          lane.glowColor = lane.theme === 'gold' ? '#FFB800' : '#C084FC';
          lane.secondaryGlow = lane.theme === 'gold' ? '#FFA51F' : '#A855F7';
        }

        // Random character mutation in trail for organic cyber network heartbeat
        lane.mutateTimer--;
        if (lane.mutateTimer <= 0) {
          const mutateIdx = Math.floor(Math.random() * lane.trailLength);
          lane.chars[mutateIdx] = getRandomGlyph();
          lane.mutateTimer = Math.floor(Math.random() * 6) + 3;
        }

        ctx.font = lane.font;

        // Draw each character in the column from tail to head
        for (let t = lane.trailLength - 1; t >= 0; t--) {
          const charY = lane.y - t * lane.lineHeight;

          // Viewport culling
          if (charY < -30 || charY > height + 30) continue;

          const char = lane.chars[t] || '0';
          const isHead = t === 0;
          const isNearHead = t === 1 || t === 2;

          if (isHead) {
            // === BRIGHTEST GLOWING HEAD (Dual-Pass Luminous Bloom) ===
            // Pass 1: Saturated diffuse neon halo (Gold or Purple)
            ctx.shadowColor = lane.glowColor;
            ctx.shadowBlur = lane.isForeground ? 22 : 14;
            ctx.fillStyle = lane.glowColor;
            ctx.fillText(char, lane.x, charY);

            // Pass 2: Blinding, pure white core
            ctx.shadowColor = '#FFFFFF';
            ctx.shadowBlur = 8;
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText(char, lane.x, charY);

            ctx.shadowBlur = 0;
          } else if (isNearHead) {
            // === NEAR-HEAD CHARACTERS ===
            // High-luminance colored glow
            ctx.shadowColor = lane.secondaryGlow;
            ctx.shadowBlur = lane.isForeground ? 10 : 5;
            
            if (lane.theme === 'gold') {
              ctx.fillStyle = t === 1 ? '#FFFBEB' : '#FEF08A'; // Pale golden-white
            } else {
              ctx.fillStyle = t === 1 ? '#FAF5FF' : '#E9D5FF'; // Pale electric lavender
            }
            ctx.fillText(char, lane.x, charY);
            ctx.shadowBlur = 0;
          } else {
            // === TRAIL CHARACTERS ===
            // Smooth exponential decay into rich Gold or Cyber Violet
            const progress = t / lane.trailLength; // 0 (near head) -> 1 (tail)
            const alpha = Math.max(0.04, (1 - progress) * (lane.isForeground ? 0.92 : 0.68));

            if (lane.theme === 'gold') {
              if (t < 6) {
                ctx.fillStyle = `rgba(251, 191, 36, ${alpha})`;  // Bright Amber
              } else if (t < 14) {
                ctx.fillStyle = `rgba(245, 158, 11, ${alpha})`;  // AWS Gold
              } else {
                ctx.fillStyle = `rgba(180, 83, 9, ${alpha * 0.85})`; // Deep Amber-Slate
              }
            } else {
              // Purple Theme (matching Reference Image 1)
              if (t < 6) {
                ctx.fillStyle = `rgba(192, 132, 252, ${alpha})`; // Bright Violet
              } else if (t < 14) {
                ctx.fillStyle = `rgba(147, 51, 234, ${alpha})`;  // Electric Purple
              } else {
                ctx.fillStyle = `rgba(99, 102, 241, ${alpha * 0.85})`; // Deep Indigo-Violet
              }
            }

            ctx.fillText(char, lane.x, charY);
          }
        }
      }

      if (!prefersReducedMotion) {
        animFrameRef.current = requestAnimationFrame(render);
      }
    };

    if (prefersReducedMotion) {
      render();
    } else {
      animFrameRef.current = requestAnimationFrame(render);
    }

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [speed]);

  return (
    <div 
      ref={containerRef} 
      className="digital-glyph-container" 
      style={{ opacity }}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="digital-glyph-canvas" />
      <div className="digital-glyph-top-fade" />
      <div className="digital-glyph-bottom-fade" />
    </div>
  );
};

export default DigitalGlyphBackground;
