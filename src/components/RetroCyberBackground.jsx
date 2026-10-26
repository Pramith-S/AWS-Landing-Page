import { useRef, useEffect } from 'react';
import './RetroCyberBackground.css';

/**
 * RetroCyberBackground
 * Tailored animated background for the Domains Section (Retro CRT Terminal & Winamp Console)
 * - Deep midnight cyber background with dark violet ambient halo
 * - Perspective retro grid with subtle undulating motion
 * - Floating CRT phosphor & binary data particles (0, 1, //, >_)
 * - Interactive cursor glow & ripple
 * - Auto-pauses off-screen for maximum performance
 */
const RetroCyberBackground = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000, active: false });
  const animFrameRef = useRef(null);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;

    // Handle high-DPI rendering cleanly
    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = Math.max(rect.width, 300);
      height = Math.max(rect.height, 300);
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    // Initialize particles (Phosphor dots + binary cyber symbols)
    const SYMBOLS = ['0', '1', '//', '>', '{', '}', ';', '0x'];
    const COLORS = [
      'rgba(168, 85, 247, ', // Electric Violet
      'rgba(139, 92, 246, ', // Purple
      'rgba(34, 197, 94, ',  // Phosphor Green (Terminal)
      'rgba(255, 153, 0, '   // Subtle AWS Amber
    ];

    const particleCount = 45;
    const particles = Array.from({ length: particleCount }, () => {
      const isSymbol = Math.random() > 0.65;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -0.35 - Math.random() * 0.65, // drifting gently upward
        size: isSymbol ? 11 : Math.random() * 2.5 + 1.2,
        isSymbol,
        char: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        baseColor: COLORS[Math.floor(Math.random() * COLORS.length)],
        baseAlpha: Math.random() * 0.35 + 0.15,
        pulseOffset: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03
      };
    });

    // Interactive ripples
    const ripples = [];
    const addRipple = (x, y) => {
      if (ripples.length > 5) ripples.shift();
      ripples.push({ x, y, radius: 5, maxRadius: 180, alpha: 0.35 });
    };

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;
      mouseRef.current.active = true;
    };

    const handlePointerLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.targetX = -1000;
      mouseRef.current.targetY = -1000;
    };

    const handleClick = (e) => {
      const rect = container.getBoundingClientRect();
      addRipple(e.clientX - rect.left, e.clientY - rect.top);
    };

    container.addEventListener('pointermove', handlePointerMove, { passive: true });
    container.addEventListener('pointerleave', handlePointerLeave, { passive: true });
    container.addEventListener('click', handleClick, { passive: true });

    let time = 0;

    // Main 60fps render loop
    const render = () => {
      if (!isVisibleRef.current) {
        animFrameRef.current = null;
        return;
      }

      time += 0.016;

      // Smooth mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.1;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.1;

      // 1. Draw Deep Obsidian Background with Midnight Violet Undertone
      ctx.fillStyle = '#0B0B0E';
      ctx.fillRect(0, 0, width, height);

      // 2. Soft Ambient Radial Glow (Centered behind retro console)
      const ambientGrad = ctx.createRadialGradient(
        width * 0.5, height * 0.45, 40,
        width * 0.5, height * 0.45, Math.max(width, height) * 0.65
      );
      ambientGrad.addColorStop(0, 'rgba(108, 43, 217, 0.14)');
      ambientGrad.addColorStop(0.5, 'rgba(24, 18, 38, 0.25)');
      ambientGrad.addColorStop(1, 'rgba(11, 11, 14, 0)');
      ctx.fillStyle = ambientGrad;
      ctx.fillRect(0, 0, width, height);

      // Interactive Cursor Glow
      if (mouseRef.current.active && mouseRef.current.x > 0) {
        const mouseGlow = ctx.createRadialGradient(
          mouseRef.current.x, mouseRef.current.y, 0,
          mouseRef.current.x, mouseRef.current.y, 220
        );
        mouseGlow.addColorStop(0, 'rgba(168, 85, 247, 0.18)');
        mouseGlow.addColorStop(0.5, 'rgba(124, 58, 237, 0.06)');
        mouseGlow.addColorStop(1, 'rgba(11, 11, 14, 0)');
        ctx.fillStyle = mouseGlow;
        ctx.fillRect(0, 0, width, height);
      }

      // 3. Perspective Retro Cyber Grid
      ctx.save();
      const horizonY = height * 0.32;
      const gridSpacingX = 55;
      const gridOffsetZ = (time * 28) % 45;

      // Perspective vertical fan lines
      const vanishingX = width * 0.5;
      const vanishingY = horizonY;
      const numLines = Math.ceil(width / gridSpacingX) + 12;

      ctx.lineWidth = 1;
      for (let i = -numLines / 2; i <= numLines / 2; i++) {
        const bottomX = vanishingX + i * (gridSpacingX * 1.6);
        const alpha = Math.max(0, 0.12 - Math.abs(i) * 0.005);
        ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(vanishingX, vanishingY);
        ctx.lineTo(bottomX, height);
        ctx.stroke();
      }

      // Horizontal perspective rungs
      for (let yOffset = gridOffsetZ; yOffset < (height - horizonY); yOffset += 38) {
        // Perspective curving/depth factor
        const progress = yOffset / (height - horizonY);
        const currentY = horizonY + Math.pow(progress, 1.6) * (height - horizonY);
        const rungAlpha = Math.sin(progress * Math.PI) * 0.16;

        ctx.strokeStyle = `rgba(168, 85, 247, ${rungAlpha})`;
        ctx.beginPath();
        ctx.moveTo(0, currentY);
        ctx.lineTo(width, currentY);
        ctx.stroke();
      }
      ctx.restore();

      // 4. Update & Draw Expanding Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 3;
        r.alpha *= 0.95;

        if (r.alpha < 0.01 || r.radius > r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(168, 85, 247, ${r.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();
      }

      // 5. Update & Draw Particles (Phosphor dots & binary fragments)
      ctx.save();
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges smoothly
        if (p.y < -20) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 10;
        if (p.x > width + 20) p.x = -10;

        // Pulse alpha
        const pulse = Math.sin(time * 2 + p.pulseOffset) * 0.15;
        const currentAlpha = Math.max(0.05, Math.min(0.65, p.baseAlpha + pulse));

        if (p.isSymbol) {
          ctx.fillStyle = `${p.baseColor}${currentAlpha})`;
          ctx.fillText(p.char, p.x, p.y);
        } else {
          // Circular phosphor glow dot
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${p.baseColor}${currentAlpha})`;
          ctx.fill();

          // Soft aura around dot
          if (p.size > 2) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * 2.4, 0, Math.PI * 2);
            ctx.fillStyle = `${p.baseColor}${currentAlpha * 0.25})`;
            ctx.fill();
          }
        }
      }
      ctx.restore();

      // 6. Faint CRT Scanline Pass
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      for (let y = 0; y < height; y += 4) {
        ctx.fillRect(0, y, width, 1.5);
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    // IntersectionObserver to save battery & GPU when scrolled away
    const observer = new IntersectionObserver(([entry]) => {
      isVisibleRef.current = entry.isIntersecting;
      if (entry.isIntersecting && !animFrameRef.current) {
        animFrameRef.current = requestAnimationFrame(render);
      }
    }, { threshold: 0.05 });

    observer.observe(container);
    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerleave', handlePointerLeave);
      container.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="retro-cyber-bg-container" aria-hidden="true">
      <canvas ref={canvasRef} className="retro-cyber-bg-canvas" />
      <div className="retro-cyber-vignette" />
    </div>
  );
};

export default RetroCyberBackground;
