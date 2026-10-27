import { useRef, useEffect } from 'react';
import './CosmicCloudVeil.css';

/**
 * CosmicCloudVeil
 * Tailored animated background for the Contact Section (Connect / Inquiry Form / Builder Community)
 * - Deep dark obsidian base (#07070A - #0B0B0E)
 * - Interactive AWS Cloud Constellation: interconnected builder network nodes with glowing tethers
 * - Special AWS Hub nodes with radiant electric violet & warm amber pulses
 * - Interactive cursor attraction & connection lines
 * - Breathing cosmic nebula gradient layers
 * - Auto-pauses off-screen for 60fps buttery smoothness
 */
const CosmicCloudVeil = () => {
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

    // Create Cloud Network Nodes
    // Density scaled based on area
    const nodeCount = Math.min(55, Math.max(30, Math.floor((window.innerWidth * 700) / 18000)));

    const nodes = Array.from({ length: nodeCount }, (_, i) => {
      const isHub = i % 7 === 0;
      const isAmber = i % 11 === 0;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (isHub ? 0.3 : 0.5),
        vy: (Math.random() - 0.5) * (isHub ? 0.3 : 0.5),
        radius: isHub ? 3.8 : Math.random() * 1.8 + 1.2,
        isHub,
        color: isAmber ? '#FF9900' : isHub ? '#A855F7' : '#8B5CF6',
        alpha: Math.random() * 0.4 + 0.3,
        pulseOffset: Math.random() * Math.PI * 2
      };
    });

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handlePointerLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.targetX = -1000;
      mouseRef.current.targetY = -1000;
    };

    container.addEventListener('pointermove', handlePointerMove, { passive: true });
    container.addEventListener('pointerleave', handlePointerLeave, { passive: true });

    let time = 0;

    const render = () => {
      if (!isVisibleRef.current) {
        animFrameRef.current = null;
        return;
      }

      time += 0.014;

      // Mouse lerping
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.12;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.12;

      // 1. Deep Obsidian Base (#0B0B0E)
      ctx.fillStyle = '#0B0B0E';
      ctx.fillRect(0, 0, width, height);

      // 2. Slow Breathing Cosmic Nebula Glows
      // Purple Nebula Bloom 1 (Left Side)
      const neb1X = width * 0.25 + Math.sin(time * 0.6) * 40;
      const neb1Y = height * 0.35 + Math.cos(time * 0.5) * 35;
      const neb1 = ctx.createRadialGradient(neb1X, neb1Y, 10, neb1X, neb1Y, Math.max(width, height) * 0.45);
      neb1.addColorStop(0, 'rgba(108, 43, 217, 0.13)');
      neb1.addColorStop(0.5, 'rgba(76, 29, 149, 0.05)');
      neb1.addColorStop(1, 'rgba(11, 11, 14, 0)');
      ctx.fillStyle = neb1;
      ctx.fillRect(0, 0, width, height);

      // Violet-Amber Nebula Bloom 2 (Right Form Side)
      const neb2X = width * 0.75 + Math.cos(time * 0.7) * 45;
      const neb2Y = height * 0.6 + Math.sin(time * 0.4) * 40;
      const neb2 = ctx.createRadialGradient(neb2X, neb2Y, 20, neb2X, neb2Y, Math.max(width, height) * 0.5);
      neb2.addColorStop(0, 'rgba(124, 58, 237, 0.10)');
      neb2.addColorStop(0.4, 'rgba(255, 153, 0, 0.03)');
      neb2.addColorStop(1, 'rgba(11, 11, 14, 0)');
      ctx.fillStyle = neb2;
      ctx.fillRect(0, 0, width, height);

      // Interactive Cursor Nebula Halo
      if (mouseRef.current.active && mouseRef.current.x > 0) {
        const mouseGlow = ctx.createRadialGradient(
          mouseRef.current.x, mouseRef.current.y, 0,
          mouseRef.current.x, mouseRef.current.y, 220
        );
        mouseGlow.addColorStop(0, 'rgba(139, 92, 246, 0.16)');
        mouseGlow.addColorStop(0.6, 'rgba(108, 43, 217, 0.04)');
        mouseGlow.addColorStop(1, 'rgba(11, 11, 14, 0)');
        ctx.fillStyle = mouseGlow;
        ctx.fillRect(0, 0, width, height);
      }

      // 3. Update Node Positions
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        // Bounce gently at bounds
        if (node.x <= 0 || node.x >= width) node.vx *= -1;
        if (node.y <= 0 || node.y >= height) node.vy *= -1;
      }

      // 4. Draw Interconnected Constellation Tethers
      const connectionDist = 125;
      ctx.lineWidth = 1;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.18;
            ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }

        // Draw Interactive Tethers to Mouse Cursor
        if (mouseRef.current.active && mouseRef.current.x > 0) {
          const mdx = nodes[i].x - mouseRef.current.x;
          const mdy = nodes[i].y - mouseRef.current.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mDist < 160) {
            const mAlpha = (1 - mDist / 160) * 0.45;
            ctx.strokeStyle = `rgba(192, 132, 252, ${mAlpha})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.stroke();
            ctx.lineWidth = 1;
          }
        }
      }

      // 5. Draw Cloud Network Nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const pulse = Math.sin(time * 2 + node.pulseOffset) * 0.2;
        const currentAlpha = Math.max(0.2, Math.min(0.85, node.alpha + pulse));

        // Core Dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.globalAlpha = currentAlpha;
        ctx.fill();

        // Glowing Aura for Hub Nodes
        if (node.isHub) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = node.color;
          ctx.globalAlpha = currentAlpha * 0.25;
          ctx.fill();

          // Outer Pulse Ring
          const ringRadius = node.radius * (2.8 + Math.abs(pulse) * 2);
          ctx.beginPath();
          ctx.arc(node.x, node.y, ringRadius, 0, Math.PI * 2);
          ctx.strokeStyle = node.color;
          ctx.globalAlpha = (1 - (ringRadius / (node.radius * 4.8))) * 0.35;
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;
      animFrameRef.current = requestAnimationFrame(render);
    };

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
    };
  }, []);

  return (
    <div ref={containerRef} className="cosmic-cloud-veil-container" aria-hidden="true">
      <canvas ref={canvasRef} className="cosmic-cloud-veil-canvas" />
      <div className="cosmic-cloud-vignette" />
    </div>
  );
};

export default CosmicCloudVeil;
