import React, { useEffect, useRef } from 'react';
import './MatrixNumberRain.css';

const MatrixNumberRain = ({
  speed = 0.22, // Slow, gentle downward movement
  opacity = 0.75 // High clarity and visibility
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

    // Rich character set: Numbers + Tech symbols + Cloud symbols + Hex letters
    const charList = [
      // Numbers
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
      // Cloud & AWS infrastructure symbols
      '☁', '⚡', 'λ', '⚙', '⬡', '◈', '⎇', '⌬', '⌘', '▲', '⛁',
      // Tech & syntax symbols
      '+', '#', '<', '>', '*', '=', '$', '-', '/', '%', '&', '_', '~', '^', '|', ':', ';', '{', '}', '[', ']',
      // Letters & Hex
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    const fontSize = 14;
    const colSpacing = 22;
    const rowSpacing = 20;

    let cols = Math.floor(width / colSpacing);
    let rows = Math.floor(height / rowSpacing);

    // Static grid of characters so they remain visible and stable
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

    // Moving light beams that cascade from upside to downside
    let beams = [];
    const numBeams = Math.max(18, Math.floor(cols * 0.45));

    const initBeams = () => {
      beams = [];
      for (let i = 0; i < numBeams; i++) {
        beams.push({
          col: Math.floor(Math.random() * cols),
          row: Math.random() * -rows, // Stagger above screen
          speed: (Math.random() * 0.16 + 0.12) * speed * 2.5, // Slow downward pace
          length: Math.floor(Math.random() * 8) + 6, // Length of illuminated streak
          colorType: Math.random() > 0.2 ? 'blue' : 'cyan' // Dominant electric blue light
        });
      }
    };

    initGrid();
    initBeams();

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement.offsetHeight || 950;
      cols = Math.floor(width / colSpacing);
      rows = Math.floor(height / rowSpacing);
      initGrid();
      initBeams();
    };

    window.addEventListener('resize', handleResize);

    const draw = () => {
      // Clear background
      ctx.fillStyle = '#07060d';
      ctx.fillRect(0, 0, width, height);

      // Map to quickly look up which cells are currently touched by a moving blue light beam
      // illuminatedCells[r][c] = { intensity: 0..1, isHead: bool }
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
                colorType: b.colorType
              };
            }
          }
        }

        // Advance beam downward from upside to downside
        b.row += b.speed;

        // Reset beam when it moves past bottom
        if (b.row - b.length > rows) {
          b.row = -Math.floor(Math.random() * 15) - 2;
          b.col = Math.floor(Math.random() * cols);
          b.speed = (Math.random() * 0.16 + 0.12) * speed * 2.5;
          b.length = Math.floor(Math.random() * 8) + 6;
          b.colorType = Math.random() > 0.2 ? 'blue' : 'cyan';
        }
      }

      ctx.font = `600 ${fontSize}px "Consolas", "Courier New", monospace`;
      ctx.textBaseline = 'top';

      // Draw all characters in the grid
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          // Subtle mutation: ~0.4% chance per frame to mutate character for organic matrix feel
          if (Math.random() > 0.996) {
            grid[r][c] = charList[Math.floor(Math.random() * charList.length)];
          }

          const char = grid[r][c];
          const x = c * colSpacing + 6;
          const y = r * rowSpacing + 4;

          const light = illuminated[`${r}_${c}`];

          if (light) {
            // Illuminated by moving blue light beam
            if (light.isHead) {
              // Glowing white-blue leading head
              ctx.fillStyle = '#FFFFFF';
              ctx.shadowBlur = 12;
              ctx.shadowColor = '#00E5FF';
            } else {
              // Electric blue streak
              ctx.fillStyle = light.colorType === 'cyan' ? '#00E5FF' : '#38BDF8';
              ctx.shadowBlur = 8 * light.intensity;
              ctx.shadowColor = '#0284C7';
            }
          } else {
            // Light colour static symbols (clearly visible and legible)
            ctx.fillStyle = 'rgba(218, 230, 248, 0.55)'; // Sharp, clearly visible light silver-slate
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
