import { useState, useEffect, useRef } from 'react';
import {
  Castle,
  Compass,
  Play,
  Pause,
  RotateCcw,
  Maximize2,
  Minimize2,
  Sparkles,
  Award,
  Layers,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Terminal,
  Zap,
  Globe2,
  Users
} from 'lucide-react';
import './AwsPopupTowerSection.css';

const CHAPTERS = [
  {
    id: 'entrance',
    time: 12,
    badge: 'ENTRANCE OF THE BUILDERS',
    title: 'AWS SBG JSSATEB Gateway',
    sub: 'Crossing the Threshold into Cloud Excellence',
    desc: 'Welcome to the ancient Codex of Builders. At the stone drawbridge and gatehouse stands the inscription: AWS SBG JSSATEB. Here, students take their first step across the threshold into modern cloud engineering, distributed architectures, and innovation.',
    icon: Castle,
    tag: 'Chapter 01'
  },
  {
    id: 'tower',
    time: 21,
    badge: 'ARCHITECTURAL KEEP',
    title: 'The AWS SBG Tower',
    sub: 'Built on the 6 Pillars of Well-Architected Framework',
    desc: 'Rising high above the courtyard is the four-sided Keep crowned in gold, hoisting the AWS SBG banner. Just as each origami fold gives structural integrity to paper, AWS SBG equips builders with resilience, high availability, security, and zero-downtime reliability.',
    icon: Cpu,
    tag: 'Chapter 02'
  },
  {
    id: 'about',
    time: 16,
    badge: 'ABOUT OUR COMMUNITY',
    title: 'Who We Are & What We Stand For',
    sub: 'JSSATEB\'s Premier Cloud & Builder Community',
    desc: 'AWS Student Builder Group at JSS Academy of Technical Education Bengaluru is a powerhouse of student engineers, creators, and leaders. We bridge academic theory with industry execution—turning students into engineers who ship real software.',
    icon: Users,
    tag: 'Chapter 03'
  },
  {
    id: 'benefits',
    time: 26,
    badge: 'THE BUILDER ARMORY',
    title: 'What You Will Get',
    sub: 'Everything You Need to Dominate Cloud Tech',
    desc: 'Gain direct access to AWS Cloud Credits, certification guidance (Cloud Practitioner & Solutions Architect), hands-on GenAI labs with Bedrock, flagship hackathons, open-source repositories, and mentorship from AWS Heroes.',
    icon: Award,
    tag: 'Chapter 04'
  },
  {
    id: 'journey',
    time: 28,
    badge: 'YOUR QUEST BEGINS',
    title: 'Join The Journey',
    sub: 'From First Commit to Production Deployments',
    desc: 'Whether you are writing your first line of code or deploying multi-region serverless clusters, there is a place for you in AWS SBG. Step into our ranks, build side-by-side with passionate peers, and create tech that matters.',
    icon: Zap,
    tag: 'Chapter 05'
  }
];

const PERKS = [
  {
    icon: Cpu,
    title: 'AWS Cloud Architecture',
    desc: 'Build real-world multi-tier VPCs, ECS containers, serverless Lambdas, S3 data lakes, and DynamoDB pipelines.'
  },
  {
    icon: Sparkles,
    title: 'GenAI & AI/ML Labs',
    desc: 'Deploy cutting-edge foundation models, RAG pipelines, and intelligent agents powered by Amazon Bedrock and SageMaker.'
  },
  {
    icon: ShieldCheck,
    title: 'Certifications & Credits',
    desc: 'Earn vouchers, structured study cohorts, and AWS credits to run your own cloud experiments without financial barriers.'
  },
  {
    icon: Terminal,
    title: 'Hackathons & Buildathons',
    desc: 'Participate in club-exclusive build sprints, collegiate hackathons, and global AWS tournaments with peer teams.'
  },
  {
    icon: Globe2,
    title: 'Global Builder Network',
    desc: 'Direct access to AWS Heroes, Community Leaders, DevRel professionals, and alumni working at top tech firms.'
  },
  {
    icon: Users,
    title: 'Peer Mentorship & Teams',
    desc: 'Work in dedicated domains (Tech, Events, Marketing, Operations) with collaborative sprint cycles and leadership growth.'
  }
];

export default function AwsPopupTowerSection({ onOpenJoinModal }) {
  const [activeChapterId, setActiveChapterId] = useState('entrance');
  const [currentTime, setCurrentTime] = useState(12);
  const [isPaused, setIsPaused] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeRef = useRef(null);
  const sectionRef = useRef(null);

  // Listen to postMessage from the popup iframe
  useEffect(() => {
    const handleMessage = (e) => {
      if (!e.data) return;
      if (e.data.type === 'POPUP_PROGRESS') {
        const t = e.data.time;
        setCurrentTime(t);
        // Automatically determine chapter if user hasn't explicitly locked it
        if (t >= 7 && t < 16) {
          setActiveChapterId('entrance');
        } else if (t >= 16 && t < 24) {
          setActiveChapterId('tower');
        } else if (t >= 24 && t < 33.5) {
          setActiveChapterId('benefits');
        }
      } else if (e.data.type === 'POPUP_PAUSED') {
        setIsPaused(e.data.paused);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const seekToTime = (timeInSeconds, chapterId) => {
    setActiveChapterId(chapterId);
    setCurrentTime(timeInSeconds);
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        { type: 'SEEK_TIME', time: timeInSeconds },
        '*'
      );
    }
  };

  const togglePlayPause = () => {
    const nextState = !isPaused;
    setIsPaused(nextState);
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        { type: 'SET_PAUSE', paused: nextState },
        '*'
      );
    }
  };

  const handleRestart = () => {
    seekToTime(7.5, 'entrance');
  };

  const toggleFullscreen = () => {
    if (!sectionRef.current) return;
    if (!document.fullscreenElement) {
      sectionRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  const activeChapter = CHAPTERS.find((c) => c.id === activeChapterId) || CHAPTERS[0];

  return (
    <section
      id="popup-tower"
      className={`aws-popup-section ${isFullscreen ? 'is-fullscreen-mode' : ''}`}
      ref={sectionRef}
    >
      {/* Background Ambient Glows */}
      <div className="popup-glow-left" />
      <div className="popup-glow-right" />

      <div className="popup-container">
        {/* Section Header */}
        <div className="popup-header">
          <div className="popup-badge">
            <Sparkles className="badge-icon-sparkle" size={15} />
            <span>3D INTERACTIVE POP-UP ARCHIVE</span>
            <span className="badge-pill-accent">THREE.JS & GLSL</span>
          </div>

          <h2 className="popup-title">
            THE CHRONICLES OF <span className="highlight-aws">AWS SBG JSSATEB</span>
          </h2>

          <p className="popup-subtitle">
            Step between the folded origami pages of cloud mastery. Watch the ancient Codex rise into the{' '}
            <strong>AWS SBG Architectural Tower</strong>, uncover the story behind our builder sanctuary, and discover what you gain when you join the journey.
          </p>
        </div>

        {/* Story Interactive Chapters Navigation Bar */}
        <div className="popup-chapters-nav">
          {CHAPTERS.map((chapter) => {
            const Icon = chapter.icon;
            const isActive = activeChapterId === chapter.id;
            return (
              <button
                key={chapter.id}
                type="button"
                className={`chapter-nav-btn ${isActive ? 'active' : ''}`}
                onClick={() => seekToTime(chapter.time, chapter.id)}
              >
                <div className="chapter-nav-icon-wrap">
                  <Icon size={16} />
                </div>
                <div className="chapter-nav-text">
                  <span className="chapter-nav-tag">{chapter.tag}</span>
                  <span className="chapter-nav-label">{chapter.title}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main 3D Canvas Viewport Stage */}
        <div className="popup-viewport-card">
          {/* Top Stage Bar */}
          <div className="viewport-top-bar">
            <div className="viewport-status">
              <span className="status-live-dot" />
              <span className="status-text">
                3D WORLD: <strong>{activeChapter.title}</strong>
              </span>
              <span className="time-display">
                {Math.floor(currentTime)}s / 120s
              </span>
            </div>

            <div className="viewport-controls">
              <button
                type="button"
                className="viewport-btn"
                onClick={togglePlayPause}
                title={isPaused ? 'Resume Animation' : 'Pause Animation'}
              >
                {isPaused ? <Play size={15} /> : <Pause size={15} />}
                <span>{isPaused ? 'Play' : 'Pause'}</span>
              </button>

              <button
                type="button"
                className="viewport-btn"
                onClick={handleRestart}
                title="Restart Tower Opening"
              >
                <RotateCcw size={15} />
                <span>Replay Tower</span>
              </button>

              <button
                type="button"
                className="viewport-btn"
                onClick={toggleFullscreen}
                title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
              >
                {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
                <span>{isFullscreen ? 'Exit Full' : 'Fullscreen'}</span>
              </button>
            </div>
          </div>

          {/* Embedded 3D Pop-Up Origami World */}
          <div className="popup-iframe-wrapper">
            <iframe
              ref={iframeRef}
              src="/popup/index.html"
              title="AWS SBG JSSATEB 3D Pop-Up Tower"
              className="popup-iframe"
              allow="autoplay; fullscreen"
            />

            {/* In-Canvas Story Hologram HUD */}
            <div className="in-canvas-story-overlay">
              <div className="story-hud-card">
                <div className="story-hud-header">
                  <span className="story-hud-badge">{activeChapter.badge}</span>
                  <span className="story-hud-chapter-tag">{activeChapter.tag}</span>
                </div>
                <h3 className="story-hud-title">{activeChapter.title}</h3>
                <h4 className="story-hud-sub">{activeChapter.sub}</h4>
                <p className="story-hud-desc">{activeChapter.desc}</p>

                <div className="story-hud-action-row">
                  <button
                    type="button"
                    className="story-hud-join-btn"
                    onClick={onOpenJoinModal}
                  >
                    <span>Join The Journey</span>
                    <ArrowRight size={15} />
                  </button>
                  <button
                    type="button"
                    className="story-hud-quick-btn"
                    onClick={() => seekToTime(21, 'tower')}
                  >
                    <span>View AWS SBG Tower</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Progress Scrubber */}
          <div className="popup-timeline-bar">
            <div
              className="popup-timeline-fill"
              style={{ width: `${Math.min(100, (currentTime / 120) * 100)}%` }}
            />
            <div className="timeline-markers">
              <span
                className="marker-point"
                style={{ left: '10%' }}
                onClick={() => seekToTime(12, 'entrance')}
                title="Entrance Gate (AWS SBG JSSATEB)"
              >
                <i>Gate</i>
              </span>
              <span
                className="marker-point"
                style={{ left: '17.5%' }}
                onClick={() => seekToTime(21, 'tower')}
                title="AWS SBG Tower Keep"
              >
                <i>Tower</i>
              </span>
              <span
                className="marker-point"
                style={{ left: '35%' }}
                onClick={() => seekToTime(42, 'journey')}
                title="Storm at Sea"
              >
                <i>Sea</i>
              </span>
              <span
                className="marker-point"
                style={{ left: '55%' }}
                onClick={() => seekToTime(68, 'journey')}
                title="Dragon on Hoard"
              >
                <i>Dragon</i>
              </span>
              <span
                className="marker-point"
                style={{ left: '75%' }}
                onClick={() => seekToTime(92, 'journey')}
                title="City at Night"
              >
                <i>City</i>
              </span>
            </div>
          </div>
        </div>

        {/* Narrative Deep Dive & What You Will Get Section */}
        <div className="popup-narrative-grid">
          {/* Column 1: About It */}
          <div className="narrative-col-card">
            <div className="narrative-card-header">
              <div className="narrative-card-icon">
                <Users size={20} />
              </div>
              <div>
                <span className="narrative-card-tag">THE COMMUNITY</span>
                <h3 className="narrative-card-title">About AWS SBG JSSATEB</h3>
              </div>
            </div>
            <p className="narrative-card-body">
              The <strong>AWS Student Builder Group at JSSATEB</strong> is an official AWS-backed student community. We are on a mission to democratize cloud knowledge, foster software craftsmanship, and cultivate engineers capable of architecting scalable, resilient solutions on Amazon Web Services.
            </p>
            <div className="narrative-stat-row">
              <div className="narrative-stat-item">
                <span className="stat-num">6+</span>
                <span className="stat-label">Core Domains</span>
              </div>
              <div className="narrative-stat-item">
                <span className="stat-num">500+</span>
                <span className="stat-label">Student Builders</span>
              </div>
              <div className="narrative-stat-item">
                <span className="stat-num">100%</span>
                <span className="stat-label">Hands-on Labs</span>
              </div>
            </div>
          </div>

          {/* Column 2: What You Will Get */}
          <div className="narrative-col-card highlight-border">
            <div className="narrative-card-header">
              <div className="narrative-card-icon orange-glow">
                <Award size={20} />
              </div>
              <div>
                <span className="narrative-card-tag text-aws">EXPAND YOUR ARSENAL</span>
                <h3 className="narrative-card-title">What You Will Get</h3>
              </div>
            </div>
            <p className="narrative-card-body">
              Joining AWS SBG JSSATEB equips you with enterprise-grade cloud competencies, official credentials, and career accelerations:
            </p>
            <ul className="perks-checklist">
              <li>
                <Zap size={14} className="perk-check-icon" />
                <span><strong>AWS Cloud Credits</strong> for deploying personal & club cloud architectures.</span>
              </li>
              <li>
                <Zap size={14} className="perk-check-icon" />
                <span><strong>Certification Vouchers & Prep</strong> for AWS Cloud Practitioner & SAA.</span>
              </li>
              <li>
                <Zap size={14} className="perk-check-icon" />
                <span><strong>GenAI & Bedrock Mastery</strong> building multi-modal LLM RAG pipelines.</span>
              </li>
              <li>
                <Zap size={14} className="perk-check-icon" />
                <span><strong>Hackathons & Global Showcases</strong> to compete and publish open source.</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Join The Journey */}
          <div className="narrative-col-card cta-card">
            <div className="narrative-card-header">
              <div className="narrative-card-icon purple-glow">
                <Compass size={20} />
              </div>
              <div>
                <span className="narrative-card-tag">YOUR NEXT CHAPTER</span>
                <h3 className="narrative-card-title">Join The Journey</h3>
              </div>
            </div>
            <p className="narrative-card-body">
              No previous cloud experience is required. Bring your curiosity, your work ethic, and your drive to build. Step inside our community and start creating high-impact technology today.
            </p>

            <div className="cta-action-box">
              <button
                type="button"
                className="join-journey-cta-btn"
                onClick={onOpenJoinModal}
              >
                <Zap size={16} />
                <span>Join AWS SBG JSSATEB</span>
                <ArrowRight size={16} />
              </button>

              <a href="#domains" className="explore-domains-link">
                <Layers size={14} />
                <span>Explore Community Domains</span>
              </a>
            </div>
          </div>
        </div>

        {/* 6 Core Perks Detailed Grid */}
        <div className="perks-detailed-section">
          <div className="perks-section-header">
            <span className="perks-section-tag">BUILT FOR ENGINEERS</span>
            <h3 className="perks-section-title">The Six Pillars of Your Growth in AWS SBG</h3>
          </div>

          <div className="perks-detailed-grid">
            {PERKS.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <div key={idx} className="perk-item-card">
                  <div className="perk-item-icon-wrap">
                    <Icon size={18} />
                  </div>
                  <h4 className="perk-item-title">{perk.title}</h4>
                  <p className="perk-item-desc">{perk.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
