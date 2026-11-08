import { useState, useEffect, useRef, useCallback } from 'react';
import { Terminal, Sparkles, Play, Pause, ChevronRight } from 'lucide-react';
import KineticGlyphText from './KineticGlyphText';
import './KineticHeadlineSequencer.css';

const HEADLINE_SEQUENCES = [
  {
    id: 1,
    tag: 'MISSION // 01',
    line1: 'EMPOWERING THE NEXT GENERATION',
    line2: 'OF CLOUD BUILDERS.',
    accent: '#8B5CF6'
  },
  {
    id: 2,
    tag: 'MINDSET // 02',
    line1: 'THINK BEYOND CODE.',
    line2: 'BUILD BEYOND LIMITS.',
    accent: '#FF9900'
  },
  {
    id: 3,
    tag: 'HORIZON // 03',
    line1: 'THE FUTURE RUNS ON CLOUD.',
    line2: 'YOUR JOURNEY STARTS HERE.',
    accent: '#38BDF8'
  }
];

// Flat 6-step sequence as requested in prompt:
// Sequence 1: EMPOWERING THE NEXT GENERATION
// Sequence 2: OF CLOUD BUILDERS.
// Sequence 3: THINK BEYOND CODE.
// Sequence 4: BUILD BEYOND LIMITS.
// Sequence 5: THE FUTURE RUNS ON CLOUD.
// Sequence 6: YOUR JOURNEY STARTS HERE.
const SIX_SEQUENCES = [
  { id: 1, text: 'EMPOWERING THE NEXT GENERATION', subtitle: 'AWS STUDENT BUILDER GROUP // JSSATEB', accent: '#8B5CF6' },
  { id: 2, text: 'OF CLOUD BUILDERS.', subtitle: 'ENGINEERING PRODUCTION-GRADE ARCHITECTURES', accent: '#FF9900' },
  { id: 3, text: 'THINK BEYOND CODE.', subtitle: 'SYSTEMS ARCHITECTURE & SERVERLESS PRIMITIVES', accent: '#38BDF8' },
  { id: 4, text: 'BUILD BEYOND LIMITS.', subtitle: 'HACKATHONS • REAL DEPLOYMENTS • OPEN SOURCE', accent: '#EC4899' },
  { id: 5, text: 'THE FUTURE RUNS ON CLOUD.', subtitle: 'GEN-AI • KUBERNETES • DEVOPS AUTOMATION', accent: '#A78BFA' },
  { id: 6, text: 'YOUR JOURNEY STARTS HERE.', subtitle: 'OFFICIAL STUDENT COMMUNITY POWERED BY AWS', accent: '#10B981' }
];

export default function KineticHeadlineSequencer({
  autoAdvance = true,
  interval = 4200,
  className = ''
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoAdvance);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const currentSeq = SIX_SEQUENCES[currentIndex];

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SIX_SEQUENCES.length);
  }, []);

  const goToSequence = (idx) => {
    setCurrentIndex(idx);
  };

  // Auto-advance loop
  useEffect(() => {
    if (!isPlaying || isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      goToNext();
    }, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isHovered, interval, goToNext]);

  return (
    <div
      className={`kinetic-sequencer-banner ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label="AWS SBG Kinetic Typography Sequence"
    >
      {/* Subtle fine technical grid lines & ambient illumination */}
      <div className="kinetic-hud-grid-overlay" aria-hidden="true" />
      <div
        className="kinetic-ambient-glow"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${currentSeq.accent}22 0%, transparent 70%)`
        }}
        aria-hidden="true"
      />

      {/* Top Technical Metadata HUD */}
      <div className="kinetic-hud-header">
        <div className="hud-left">
          <div className="hud-badge pulse-dot">
            <span className="dot-indicator" />
            <span>KINETIC PROTOCOL // 0{currentSeq.id}</span>
          </div>
          <span className="hud-divider">|</span>
          <span className="hud-system-tag">GLYPH MORPH ENGINE v2.4</span>
        </div>

        <div className="hud-right">
          <div className="hud-stepper">
            <span className="current-step">0{currentSeq.id}</span>
            <span className="step-slash">/</span>
            <span className="total-steps">0{SIX_SEQUENCES.length}</span>
          </div>

          <button
            type="button"
            className="hud-play-toggle"
            onClick={() => setIsPlaying(!isPlaying)}
            title={isPlaying ? 'Pause sequence' : 'Play sequence'}
            aria-label={isPlaying ? 'Pause sequence' : 'Play sequence'}
          >
            {isPlaying ? <Pause size={12} /> : <Play size={12} />}
          </button>
        </div>
      </div>

      {/* Main Kinetic Headline Display */}
      <div className="kinetic-display-viewport">
        <h2 className="kinetic-primary-headline">
          <KineticGlyphText
            key={`seq-${currentSeq.id}`}
            text={currentSeq.text}
            trigger="load"
            speed={30}
            cycles={9}
            stagger={0.018}
            className="kinetic-scramble-word"
            highlightKeywords={true}
          />
        </h2>

        {/* Subtitle / Contextual Tag */}
        <p className="kinetic-context-subline">
          <ChevronRight size={13} className="subline-icon" />
          <span>{currentSeq.subtitle}</span>
        </p>
      </div>

      {/* Bottom Interactive HUD: Sequence Selector Pills & Progress Line */}
      <div className="kinetic-hud-footer">
        <div className="sequence-pills-row">
          {SIX_SEQUENCES.map((seq, idx) => {
            const isActive = currentIndex === idx;
            return (
              <button
                key={seq.id}
                type="button"
                className={`seq-pill-btn ${isActive ? 'active' : ''}`}
                onClick={() => goToSequence(idx)}
                style={{ '--pill-accent': seq.accent }}
                aria-label={`Jump to sequence ${seq.id}: ${seq.text}`}
              >
                <span className="pill-index">0{seq.id}</span>
                <span className="pill-dot" />
              </button>
            );
          })}
        </div>

        {/* Segmented Timeline Progress */}
        <div className="hud-progress-track">
          <div
            className="hud-progress-fill"
            style={{
              width: `${((currentIndex + 1) / SIX_SEQUENCES.length) * 100}%`,
              backgroundColor: currentSeq.accent
            }}
          />
        </div>
      </div>
    </div>
  );
}
