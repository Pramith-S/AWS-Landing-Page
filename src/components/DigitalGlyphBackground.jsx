import React, { useEffect, useRef } from 'react';
import './DigitalGlyphBackground.css';

/**
 * DigitalGlyphBackground
 * 
 * Cinematic Vertical Matrix Rain with Golden & Purple Streams
 * Ultra-optimized 60 FPS Canvas Implementation:
 * - Perfectly aligned vertical column lanes
 * - Zero GC allocation inside render() (cached gradients)
 * - Layered alpha glow technique instead of expensive Gaussian shadowBlur
 * - Automatic pause via IntersectionObserver when offscreen
 */

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
    let bgGrad = null;

    // Strict vertical lane configuration
    let lanes = [];

    const initLanes = () => {
      lanes = [];
      const laneWidth = isMobile ? 36 : 46;
      const numLanes = Math.floor(width / laneWidth);
      const startX = Math.floor((width - numLanes * laneWidth) / 2) + Math.floor(laneWidth / 2);

      for (let i = 0; i < numLanes; i++) {
        const x = startX + i * laneWidth;
        
        const isForeground = Math.random() < 0.42;
        const fontSize = isForeground ? (isMobile ? 15 : 18) : (isMobile ? 12 : 14);
        const lineHeight = isForeground ? (isMobile ? 20 : 23) : (isMobile ? 15 : 18);
        const trailLength = Math.floor(Math.random() * 14) + (isForeground ? 20 : 14);

        const chars = [];
        for (let j = 0; j < trailLength; j++) {
          chars.push(getRandomGlyph());
        }

        const isGold = Math.random() < 0.50;
        const theme = isGold ? 'gold' : 'purple';

        const y = Math.random() * (height + 500) - 300;
        const streamSpeed = (Math.random() * 0.8 + (isForeground ? 1.3 : 0.8)) * speed;

        lanes.push({
          x,
          y,
          isForeground,
          fontSize,
          lineHeight,
          font: `${isForeground ? 'bold' : '600'} ${fontSize}px "Consolas", "Courier New", monospace`,
          speed: streamSpeed,
          trailLength,
          chars,
          theme,
          glowColor: isGold ? '#FFB800' : '#C084FC',
          secondaryGlow: isGold ? '#FFA51F' : '#A855F7',
          mutateTimer: Math.floor(Math.random() * 6) + 3,
          delay: Math.floor(Math.random() * 50)
        });
      }
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = Math.max(rect.width, 320);
      height = Math.max(rect.height, 400);
      isMobile = width < 768;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5); // Cap DPR at 1.5 for performance

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Pre-create ambient gradient on resize (cached, zero GC during render)
      bgGrad = ctx.createRadialGradient(
        width * 0.5, height * 0.35, 60,
        width * 0.5, height * 0.35, Math.max(width, height) * 0.70
      );
      bgGrad.addColorStop(0, 'rgba(28, 14, 46, 0.40)');
      bgGrad.addColorStop(0.5, 'rgba(12, 6, 22, 0.25)');
      bgGrad.addColorStop(1, 'rgba(4, 3, 10, 0.85)');

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

    // Optimized 60 FPS Render Loop (Hardware fill rate, Zero GC, No shadowBlur stalls)
    const render = () => {
      if (!isVisibleRef.current) {
        animFrameRef.current = null;
        return;
      }

      // 1. CLEAR WITH DEEP OBSIDIAN-VIOLET BACKGROUND
      ctx.fillStyle = '#04030A';
      ctx.fillRect(0, 0, width, height);

      if (bgGrad) {
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, width, height);
      }

      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';

      // 2. RENDER EACH PROPERLY ALIGNED VERTICAL COLUMN
      for (let i = 0; i < lanes.length; i++) {
        const lane = lanes[i];

        if (lane.delay > 0) {
          lane.delay--;
          continue;
        }

        lane.y += lane.speed;

        const totalHeight = lane.trailLength * lane.lineHeight;
        if (lane.y - totalHeight > height) {
          lane.y = -Math.floor(Math.random() * 150) - 30;
          lane.speed = (Math.random() * 0.8 + (lane.isForeground ? 1.3 : 0.8)) * speed;
          lane.theme = Math.random() < 0.50 ? 'gold' : 'purple';
          lane.glowColor = lane.theme === 'gold' ? '#FFB800' : '#C084FC';
          lane.secondaryGlow = lane.theme === 'gold' ? '#FFA51F' : '#A855F7';
        }

        lane.mutateTimer--;
        if (lane.mutateTimer <= 0) {
          const mutateIdx = Math.floor(Math.random() * lane.trailLength);
          lane.chars[mutateIdx] = getRandomGlyph();
          lane.mutateTimer = Math.floor(Math.random() * 6) + 3;
        }

        ctx.font = lane.font;

        for (let t = lane.trailLength - 1; t >= 0; t--) {
          const charY = lane.y - t * lane.lineHeight;

          if (charY < -30 || charY > height + 30) continue;

          const char = lane.chars[t] || '0';
          const isHead = t === 0;
          const isNearHead = t === 1 || t === 2;

          if (isHead) {
            // Intense Glowing Head using fast multi-pass alpha layering
            ctx.fillStyle = lane.glowColor;
            ctx.globalAlpha = 0.45;
            ctx.fillText(char, lane.x - 1, charY);
            ctx.fillText(char, lane.x + 1, charY);
            ctx.fillText(char, lane.x, charY - 1);
            ctx.fillText(char, lane.x, charY + 1);

            // Blinding Pure White Core
            ctx.fillStyle = '#FFFFFF';
            ctx.globalAlpha = 1.0;
            ctx.fillText(char, lane.x, charY);
          } else if (isNearHead) {
            ctx.globalAlpha = 0.95;
            if (lane.theme === 'gold') {
              ctx.fillStyle = t === 1 ? '#FFFBEB' : '#FEF08A';
            } else {
              ctx.fillStyle = t === 1 ? '#FAF5FF' : '#E9D5FF';
            }
            ctx.fillText(char, lane.x, charY);
          } else {
            const progress = t / lane.trailLength;
            const alpha = Math.max(0.04, (1 - progress) * (lane.isForeground ? 0.90 : 0.65));
            ctx.globalAlpha = alpha;

            if (lane.theme === 'gold') {
              ctx.fillStyle = t < 6 ? '#FBBF24' : (t < 14 ? '#F59E0B' : '#D97706');
            } else {
              ctx.fillStyle = t < 6 ? '#E879F9' : (t < 14 ? '#C084FC' : '#9333EA');
            }
            ctx.fillText(char, lane.x, charY);
          }
        }
      }

      ctx.globalAlpha = 1.0;

      if (!prefersReducedMotion) {
        animFrameRef.current = requestAnimationFrame(render);
      }
    };

    if (!prefersReducedMotion) {
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
      <div className="digital-glyph-vignette" />
    </div>
  );
};

export default DigitalGlyphBackground;
