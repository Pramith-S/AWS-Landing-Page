import React, { useEffect, useRef } from 'react';
import './MatrixNumberRain.css';

const MatrixNumberRain = ({
  speed = 0.38, // Slow, gentle cascading speed requested by user
  opacity = 0.65
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement ? canvas.parentElement.offsetWidth : window.innerWidth);
    let height = (canvas.height = canvas.parentElement ? canvas.parentElement.offsetHeight : 950);

    // Tech symbols + numbers + hex letters matching user's reference image
    const charList = [
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
      '+', '#', '<', '>', '*', '=', '$', '-', '/', '%', '&', '_', '~', '^', '|', ':', ';',
      '{', '}', '[', ']',
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    const fontSize = 15;
    const colSpacing = 20; // Comfortable spacing matching the screenshot
    let columns = Math.floor(width / colSpacing);

    let drops = [];
    let dropSpeeds = [];
    let dropTypes = []; // 0: faint gray, 1: electric cyan/blue, 2: AWS orange/amber
    let dropCharBuffers = [];

    const initDrops = (colCount) => {
      drops = [];
      dropSpeeds = [];
      dropTypes = [];
      dropCharBuffers = [];

      for (let i = 0; i < colCount; i++) {
        // Stagger initial Y position across entire height so stream is active immediately
        drops[i] = Math.random() * (height / fontSize);
        // Slow speed between 0.25 and 0.55
        dropSpeeds[i] = (Math.random() * 0.3 + 0.22) * speed;

        // Type distribution matching the reference screenshot:
        // ~65% subtle faint code, ~20% glowing cyan/blue, ~15% glowing AWS orange
        const rand = Math.random();
        if (rand > 0.8) {
          dropTypes[i] = 'cyan';
        } else if (rand > 0.65) {
          dropTypes[i] = 'orange';
        } else {
          dropTypes[i] = 'faint';
        }

        // Keep a cached random character that shifts occasionally
        dropCharBuffers[i] = charList[Math.floor(Math.random() * charList.length)];
      }
    };

    initDrops(columns);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement.offsetHeight || 950;
      columns = Math.floor(width / colSpacing);
      initDrops(columns);
    };

    window.addEventListener('resize', handleResize);

    const draw = () => {
      // Gentle dark trail fade
      ctx.fillStyle = 'rgba(7, 6, 12, 0.16)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `600 ${fontSize}px "Consolas", "Courier New", monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Occasionally mutate character for lively cyberpunk matrix feel
        if (Math.random() > 0.94) {
          dropCharBuffers[i] = charList[Math.floor(Math.random() * charList.length)];
        }

        const char = dropCharBuffers[i];
        const x = i * colSpacing + 4;
        const y = drops[i] * fontSize;

        const type = dropTypes[i];

        // Color styling matching user's screenshot:
        // Some bright glowing letters (cyan / blue / white / orange), majority faint atmospheric tech glyphs
        if (type === 'cyan') {
          // Electric blue / cyan highlight (like A 2 G N 6 in user's image)
          const isGlowHead = Math.random() > 0.85;
          ctx.fillStyle = isGlowHead ? '#E0F2FE' : '#38BDF8';
          ctx.shadowBlur = isGlowHead ? 10 : 5;
          ctx.shadowColor = '#0284C7';
        } else if (type === 'orange') {
          // AWS Golden / Orange accent
          const isGlowHead = Math.random() > 0.85;
          ctx.fillStyle = isGlowHead ? '#FFF7ED' : '#FF9900';
          ctx.shadowBlur = isGlowHead ? 10 : 5;
          ctx.shadowColor = '#EA580C';
        } else {
          // Subtle muted dark slate / amber background characters
          ctx.fillStyle = 'rgba(148, 163, 184, 0.22)';
          ctx.shadowBlur = 0;
        }

        ctx.fillText(char, x, y);
        ctx.shadowBlur = 0;

        // Slow downward motion from upside to downside
        drops[i] += dropSpeeds[i];

        // Reset to top once it falls past bottom
        if (y > height + 20) {
          drops[i] = -2;
          dropSpeeds[i] = (Math.random() * 0.3 + 0.22) * speed;
          // Re-roll type
          const rand = Math.random();
          dropTypes[i] = rand > 0.8 ? 'cyan' : rand > 0.65 ? 'orange' : 'faint';
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed]);

  return (
    <canvas 
      ref={canvasRef} 
      className="matrix-number-rain-canvas" 
      style={{ opacity }}
      aria-hidden="true" 
    />
  );
};

export default MatrixNumberRain;
