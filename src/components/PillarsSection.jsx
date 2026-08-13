import { useState, useEffect, useRef } from 'react';
import { Terminal, Layers, Award, Radio, Tv } from 'lucide-react';
import DecryptedText from './DecryptedText';
import './PillarsSection.css';

const PillarsSection = () => {
  const pillars = [
    {
      id: 1,
      badge: "SKILL BUILDING",
      icon: Terminal,
      title: "Technical Workshops & Bootcamps",
      description: "Hands-on, project-based intensive bootcamps focused on foundational and advanced AWS cloud primitives, cloud-native engineering, and automated DevOps.",
      tags: ["EC2 & S3", "Serverless Lambda", "IAM & DevSecOps", "Kubernetes (EKS)", "Cloud Security"],
      highlight: "Weekly Hands-on Labs",
      channel: "CH 01"
    },
    {
      id: 2,
      badge: "PRODUCTION BUILDING",
      icon: Layers,
      title: "Cloud Projects & Architecture",
      description: "Collaborative open-source development where students design, build, and deploy production-grade cloud architectures for real community and collegiate applications.",
      tags: ["Microservices", "Terraform / CDK", "Docker Containers", "CI/CD Pipelines", "DynamoDB"],
      highlight: "Open Source Engineering",
      channel: "CH 02"
    },
    {
      id: 3,
      badge: "CAREER ACCELERATION",
      icon: Award,
      title: "Career & Certifications",
      description: "Structured pathways and peer study groups for AWS Certified Cloud Practitioner & Solutions Architect exams, plus industry mentorship and networking.",
      tags: ["AWS Certifications", "1-on-1 Mentorship", "Resume Reviews", "Cloud Network"],
      highlight: "Industry Recognized",
      channel: "CH 03"
    }
  ];

  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const [isPoweredOn, setIsPoweredOn] = useState(true);
  const [isTuning, setIsTuning] = useState(false);
  const timerRef = useRef(null);

  // Switch to specific channel
  const handleTune = (index) => {
    if (!isPoweredOn) return;
    setIsTuning(true);
    setActivePillarIndex(index);
    setTimeout(() => {
      setIsTuning(false);
    }, 400);
  };

  // Auto-switch channel every 15 seconds
  useEffect(() => {
    if (!isPoweredOn) return;

    timerRef.current = setInterval(() => {
      setActivePillarIndex((prevIndex) => {
        const next = (prevIndex + 1) % pillars.length;
        setIsTuning(true);
        setTimeout(() => setIsTuning(false), 400);
        return next;
      });
    }, 15000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPoweredOn, activePillarIndex]);

  // Random TV screen glitch effect every 2 to 5 seconds
  useEffect(() => {
    if (!isPoweredOn) return;

    let glitchTimeoutId;
    const scheduleGlitch = () => {
      const randomDelay = Math.floor(Math.random() * 3000) + 2000;
      glitchTimeoutId = setTimeout(() => {
        setIsTuning(true);
        setTimeout(() => setIsTuning(false), 220);
        scheduleGlitch();
      }, randomDelay);
    };

    scheduleGlitch();

    return () => {
      if (glitchTimeoutId) clearTimeout(glitchTimeoutId);
    };
  }, [isPoweredOn]);

  const activePillar = pillars[activePillarIndex];
  const IconComponent = activePillar.icon;

  return (
    <section id="pillars" className="section-padding pillars-section">
      <div className="container">
        {/* Section Header */}
        <div className="pillars-header text-center">
          <div className="section-badge">
            <span>// CORE PILLARS</span>
          </div>
          <h2 className="section-title">
            <DecryptedText
              text="What We Do: "
              animateOn="view"
              speed={35}
              sequential={true}
              className="decrypted"
              encryptedClassName="encrypted"
            />
            <span className="text-gradient">3 Core Pillars</span>
          </h2>
          <p className="section-description mx-auto">
            Explore the core pillars driving student innovation, cloud architecture, and industry career readiness at AWS SBG JSSATEB.
          </p>
        </div>

        {/* Vintage Television Console (Desktop index.html) */}
        <div className="tv-console-container">
          <div className="tv-cabinet">
            {/* Retro Antenna (Top Right) */}
            <div className="tv-antenna-wrapper">
              <div className="antenna-base"></div>
              <div className="antenna-rod rod-left">
                <div className="antenna-tip"></div>
              </div>
              <div className="antenna-rod rod-right">
                <div className="antenna-tip"></div>
              </div>
            </div>

            {/* TV Screen Container */}
            <div className="tv-screen-bezel">
              <div className="tv-screen-glass">
                {/* Scanlines & Screen Reflections */}
                <div className="tv-scanlines"></div>
                <div className="tv-glass-glare"></div>

                {/* Static Glitch Overlay when switching channels */}
                {isTuning && <div className="tv-static-effect"></div>}

                {/* CRT Screen Display Content */}
                <div className={`tv-display-viewport ${isPoweredOn ? 'powered-on' : 'powered-off'}`}>
                  {isPoweredOn ? (
                    <div className="tv-screen-content">
                      {/* Top Broadcast Bar */}
                      <div className="tv-broadcast-bar">
                        <div className="tv-broadcast-channel">
                          <span className="tv-ch-number">{activePillar.channel}</span>
                          <span className="tv-live-indicator">● BROADCASTING</span>
                        </div>
                        <div className="tv-auto-timer">
                          <Tv size={13} />
                          <span>CORE PILLARS</span>
                        </div>
                      </div>

                      {/* Pillar Card Details */}
                      <div className="tv-pillar-details">
                        <div className="tv-pillar-badge-row">
                          <div className="tv-pillar-icon-box">
                            <IconComponent size={22} className="pillar-icon" />
                          </div>
                          <span className="tv-pillar-badge">{activePillar.badge}</span>
                        </div>

                        <h3 className="tv-pillar-title">{activePillar.title}</h3>
                        <p className="tv-pillar-desc">{activePillar.description}</p>

                        <div className="tv-pillar-tags">
                          {activePillar.tags.map((tag, idx) => (
                            <span key={idx} className="tv-tag-item">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="tv-pillar-footer">
                          <span className="tv-pillar-highlight">✨ {activePillar.highlight}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="tv-screen-off-state">
                      <Tv size={48} className="off-icon" />
                      <span>TELEVISION STANDBY</span>
                      <small>Press Power knob to turn ON</small>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* TV Control Panel */}
            <div className="tv-control-panel">
              {/* Speaker Grill */}
              <div className="tv-speaker-grill">
                <div className="tv-speaker-slots">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="tv-grill-slot"></div>
                  ))}
                </div>
              </div>

              {/* Power & Volume Row */}
              <div className="tv-knobs-row">
                <div className="tv-knob-group">
                  <input
                    id="checkbox"
                    type="checkbox"
                    checked={isPoweredOn}
                    onChange={() => setIsPoweredOn(!isPoweredOn)}
                  />
                  <label className="switch" htmlFor="checkbox" title="Toggle TV Power">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="slider">
                      <path
                        d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"
                      ></path>
                    </svg>
                  </label>
                </div>

                <div className="tv-knob-group">
                  <div className="tv-rotary-knob vol-knob" title="Volume Control">
                    <div className="knob-line"></div>
                  </div>
                </div>
              </div>

              {/* Main Tuning Knob Section */}
              <div className="tv-tuning-section">
                <div className="tv-tuning-header">
                  <span className="tv-knob-label">CHANNEL TUNING</span>
                  <Radio size={14} className="radio-icon" />
                </div>

                <div className="clock-input">
                  <input type="radio" id="v1" name="clock-radio" checked={activePillarIndex === 0} onChange={() => handleTune(0)} />
                  <input type="radio" id="v2" name="clock-radio" checked={activePillarIndex === 1} onChange={() => handleTune(1)} />
                  <input type="radio" id="v3" name="clock-radio" checked={activePillarIndex === 2} onChange={() => handleTune(2)} />

                  <label htmlFor="v1" id="l1" onClick={() => handleTune(0)} title="CH 01"></label>
                  <label htmlFor="v2" id="l2" onClick={() => handleTune(1)} title="CH 02"></label>
                  <label htmlFor="v3" id="l3" onClick={() => handleTune(2)} title="CH 03"></label>

                  <div className="dial"></div>
                </div>

                {/* Direct Channel Buttons */}
                <div className="tv-channel-selector">
                  {pillars.map((p, idx) => (
                    <button
                      key={p.id}
                      type="button"
                      className={`tv-chan-button ${activePillarIndex === idx ? 'active' : ''}`}
                      onClick={() => handleTune(idx)}
                    >
                      CH 0{idx + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
