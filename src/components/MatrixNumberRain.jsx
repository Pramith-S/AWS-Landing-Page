import React, { useEffect, useRef } from 'react';
import './MatrixNumberRain.css';

const MatrixNumberRain = ({
  speed = 0.22, // Slow, gentle downward movement
  opacity = 0.95 // Crisp clarity and legibility for characters
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Rich character pool: Numbers + Cloud & AWS symbols + Tech syntax + Monospace letters
    const cloudSymbols = ['☁', '⚡', 'λ', '⚙', '⬡', '◈', '⎇', '⌬', '⌘', '▲', '⛁', '⛅', '⛯', '📡', '⨀', '✦', '✧', '⬢'];
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const techSymbols = ['+', '#', '<', '>', '*', '=', '$', '-', '/', '%', '&', '_', '~', '^', '|', ':', ';'];
    const letters = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    // Balanced pool matching Image 2 reference with prominent cloud & tech elements
    const charList = [
      ...numbers, ...numbers, ...numbers,
      ...cloudSymbols, ...cloudSymbols,
      ...techSymbols, ...techSymbols,
      ...letters
    ];

    const fontSize = 15;
    const colSpacing = 24;
    const rowSpacing = 22;

    let displayWidth = 1200;
    let displayHeight = 1000;
    let cols = 50;
    let rows = 45;

    // Static grid of characters displayed continuously across the background
    let grid = [];

    const initGrid = () => {
      grid = [];
      for (let r = 0; r < rows; r++) {
        grid[r] = [];
        for (let c = 0; c < cols; c++) {
          grid[r][c] = charList[Math.floor(Math.random() * charList.length)];
        }
      }
    };

    // Moving electric blue light beams cascading from upside to downside
    let beams = [];

    const initBeams = () => {
      beams = [];
      const numBeams = Math.max(28, Math.floor(cols * 0.55));
      for (let i = 0; i < numBeams; i++) {
        beams.push({
          col: Math.floor(Math.random() * cols),
          row: Math.random() * -rows, // Stagger above screen
          speed: (Math.random() * 0.12 + 0.10) * speed * 2.2, // Slow, elegant pace
          length: Math.floor(Math.random() * 11) + 8, // Length of illuminated beam streak
          hueShift: Math.random() > 0.25 ? 'blue' : 'cyan'
        });
      }
    };

    const updateDimensions = () => {
      const parent = canvas.parentElement;
      const w = parent ? parent.offsetWidth : window.innerWidth;
      const h = parent ? Math.max(parent.offsetHeight, 920) : window.innerHeight;

      if (w === displayWidth && h === displayHeight && grid.length > 0) return;

      displayWidth = w || window.innerWidth || 1200;
      displayHeight = h || 1000;

      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      cols = Math.ceil(displayWidth / colSpacing) + 1;
      rows = Math.ceil(displayHeight / rowSpacing) + 1;

      initGrid();
      initBeams();
    };

    updateDimensions();

    // Use ResizeObserver for responsive adaptation when parent container expands
    let resizeObserver = null;
    if (typeof ResizeObserver !== 'undefined' && canvas.parentElement) {
      resizeObserver = new ResizeObserver(() => {
        updateDimensions();
      });
      resizeObserver.observe(canvas.parentElement);
    }

    const handleWindowResize = () => {
      updateDimensions();
    };
    window.addEventListener('resize', handleWindowResize);

    const draw = () => {
      // Gentle translucent dark slate canvas background allowing section light to shine through
      const bgGrad = ctx.createRadialGradient(
        displayWidth * 0.5, displayHeight * 0.20, 60,
        displayWidth * 0.5, displayHeight * 0.35, displayWidth * 0.85
      );
      bgGrad.addColorStop(0, 'rgba(18, 22, 38, 0.85)'); // Gentle subtle ambient illumination at upper-center
      bgGrad.addColorStop(0.55, 'rgba(12, 14, 25, 0.92)');
      bgGrad.addColorStop(1, 'rgba(8, 9, 16, 0.97)');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, displayWidth, displayHeight);

      // Map to quickly look up which cells are illuminated by falling electric blue light
      const illuminated = {};

      for (let i = 0; i < beams.length; i++) {
        const b = beams[i];
        const headRow = Math.floor(b.row);

        for (let offset = 0; offset < b.length; offset++) {
          const r = headRow - offset;
          if (r >= 0 && r < rows) {
            const key = `${r}_${b.col}`;
            const intensity = 1 - (offset / b.length);
            const isHead = offset === 0;

            if (!illuminated[key] || illuminated[key].intensity < intensity) {
              illuminated[key] = {
                intensity,
                isHead,
                hueShift: b.hueShift
              };
            }
          }
        }

        // Advance beam downward from upside to downside
        b.row += b.speed;

        // Reset beam when it moves past bottom
        if (b.row - b.length > rows) {
          b.row = -Math.floor(Math.random() * 20) - 2;
          b.col = Math.floor(Math.random() * cols);
          b.speed = (Math.random() * 0.12 + 0.10) * speed * 2.2;
          b.length = Math.floor(Math.random() * 11) + 8;
          b.hueShift = Math.random() > 0.25 ? 'blue' : 'cyan';
        }
      }

      ctx.font = `600 ${fontSize}px "Consolas", "Courier New", "Segoe UI Symbol", monospace`;
      ctx.textBaseline = 'top';

      // Draw all characters in the grid
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          // Rare character mutation (~0.2% per frame) for subtle organic matrix heartbeat
          if (Math.random() > 0.998) {
            grid[r][c] = charList[Math.floor(Math.random() * charList.length)];
          }

          const char = grid[r][c] || '0';
          const x = c * colSpacing + 6;
          const y = r * rowSpacing + 4;

          const light = illuminated[`${r}_${c}`];

          if (light) {
            // Illuminated by moving blue light beam
            if (light.isHead) {
              // Glowing pure white/cyan head
              ctx.fillStyle = '#FFFFFF';
              ctx.shadowBlur = 14;
              ctx.shadowColor = '#00E5FF';
            } else {
              // Moving electric blue light
              const alpha = Math.max(0.35, light.intensity * 0.85);
              ctx.fillStyle = light.hueShift === 'cyan' ? `rgba(0, 229, 255, ${alpha})` : `rgba(56, 189, 248, ${alpha})`;
              ctx.shadowBlur = 8 * light.intensity;
              ctx.shadowColor = '#0284C7';
            }
          } else {
            // Subtle, elegant light slate/blue-gray static symbols providing background depth without clashing with text
            ctx.fillStyle = 'rgba(160, 182, 214, 0.18)';
            ctx.shadowBlur = 0;
          }

          ctx.fillText(char, x, y);
          ctx.shadowBlur = 0;
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      if (resizeObserver) resizeObserver.disconnect();
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
