import { useState, useRef, useEffect } from 'react';
import { Flashlight } from 'lucide-react';
import './TeamLeadReveal.css';

const TeamLeadReveal = () => {
  const sectionRef = useRef(null);
  const targetPos = useRef({ x: -500, y: -500 });
  const currentPos = useRef({ x: -500, y: -500 });
  const animFrameId = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let isVisible = false;
    let isRunning = false;

    const updatePosition = () => {
      if (!isVisible) {
        isRunning = false;
        return;
      }

      const dx = targetPos.current.x - currentPos.current.x;
      const dy = targetPos.current.y - currentPos.current.y;

      currentPos.current.x += dx * 0.2;
      currentPos.current.y += dy * 0.2;

      section.style.setProperty('--mouse-x', `${currentPos.current.x.toFixed(1)}px`);
      section.style.setProperty('--mouse-y', `${currentPos.current.y.toFixed(1)}px`);

      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        animFrameId.current = requestAnimationFrame(updatePosition);
      } else {
        isRunning = false;
      }
    };

    const startAnimation = () => {
      if (!isRunning && isVisible) {
        isRunning = true;
        animFrameId.current = requestAnimationFrame(updatePosition);
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) {
        startAnimation();
      } else if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
        isRunning = false;
      }
    }, { threshold: 0.1 });

    observer.observe(section);
    section._startAnim = startAnimation;

    return () => {
      observer.disconnect();
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    targetPos.current.x = e.clientX - rect.left;
    targetPos.current.y = e.clientY - rect.top;
    
    if (!isHovered) setIsHovered(true);
    if (sectionRef.current._startAnim) sectionRef.current._startAnim();
  };

  const handleMouseEnter = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    targetPos.current = { x, y };
    currentPos.current = { x, y };
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section
      id="team-lead-reveal"
      ref={sectionRef}
      className="team-lead-reveal-section"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        '--spotlight-radius': isHovered ? '280px' : '0px',
      }}
    >
      {/* Pitch-black dark base overlay layer */}
      <div className="reveal-dark-overlay" />

      {/* Flashlight ambient purple light glow */}
      <div
        className="flashlight-glow-ring"
        style={{ opacity: isHovered ? 1 : 0 }}
      />

      {/* Revealed content layer (Background image masked by flashlight radius) */}
      <div
        className="reveal-content-layer"
        style={{ opacity: isHovered ? 1 : 0 }}
      />

      {/* Instruction Hint pill when cursor hasn't hovered */}
      <div className={`flashlight-hint ${isHovered ? 'hidden' : ''}`}>
        <Flashlight size={16} />
        <span>Move your cursor to shine the flashlight & reveal Team Lead</span>
      </div>
    </section>
  );
};

export default TeamLeadReveal;
