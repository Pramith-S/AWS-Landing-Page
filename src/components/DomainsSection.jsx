import { useState } from 'react';
import styled from 'styled-components';
import { Layers, Terminal, Calendar, Megaphone, Briefcase, CheckCircle2, Sparkles } from 'lucide-react';
import RetroCyberBackground from './RetroCyberBackground';
import './DomainsSection.css';

const domainsData = [
  {
    id: 'tech',
    title: 'Tech Team',
    badge: 'Cloud & Infrastructure',
    icon: Terminal,
    kbps: '320kbps',
    gif: '/images/domains/tech.gif',
    description: 'The powerhouse behind our cloud infrastructure, open-source projects, and technical curriculum. The Tech Team builds production-grade full-stack apps, DevOps pipelines, and leads hands-on AWS workshops.',
    focusPills: ['AWS Architecture', 'Full-Stack Dev', 'Serverless & EKS', 'DevOps & CI/CD', 'Open Source'],
    deliverables: [
      { title: 'Production Web Portals', desc: 'Deploying robust cloud-native web portals and services.' },
      { title: 'AWS Workshops', desc: 'Curating hands-on labs on EC2, S3, Bedrock & Lambda.' },
      { title: 'Open Source Repos', desc: 'Building open-source tools & starter kits for builders.' },
      { title: 'Hackathon Tech Support', desc: 'Mentoring teams in cloud deployment & APIs.' }
    ]
  },
  {
    id: 'events',
    title: 'Events Team',
    badge: 'Community & Hackathons',
    icon: Calendar,
    kbps: '192kbps',
    gif: '/images/domains/events.gif',
    description: 'Orchestrates seamless community workshops, hackathons, speaker sessions, and tech meetups. The Events Team drives student engagement, venue logistics, speaker outreach, and event execution.',
    focusPills: ['Hackathon Planning', 'Workshop Execution', 'Speaker Outreach', 'Venue Operations', 'Community Meetups'],
    deliverables: [
      { title: 'Collegiate Hackathons', desc: 'Organizing 24-hour hackathons with top mentors & prizes.' },
      { title: 'Hands-on Bootcamps', desc: 'Hosting weekly cloud architecture and dev bootcamps.' },
      { title: 'Industry Speakers', desc: 'Inviting AWS Certified Experts & Solutions Architects.' },
      { title: 'Attendee Experience', desc: 'Ensuring seamless check-ins, swags, and Q&As.' }
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing Team',
    badge: 'Brand & Content Strategy',
    icon: Megaphone,
    kbps: '128kbps',
    gif: '/images/domains/marketing.gif',
    description: 'Spreads the word, builds our brand identity, and grows our student builder community. The Marketing Team crafts compelling social media campaigns, visual design assets, video teasers, and content strategies.',
    focusPills: ['Social Media Growth', 'Visual Graphic Design', 'Content Strategy', 'Video Promo Teasers', 'Brand Identity'],
    deliverables: [
      { title: 'Social Campaigns', desc: 'Creating viral posts and outreach campaigns.' },
      { title: 'Graphic Assets', desc: 'Designing event banners, posters, badges, and swags.' },
      { title: 'Community Stories', desc: 'Highlighting student project showcases & wins.' },
      { title: 'Video Reels & Recaps', desc: 'Editing recap reels & promo videos for events.' }
    ]
  },
  {
    id: 'operations',
    title: 'Operations Team',
    badge: 'Logistics & Partnerships',
    icon: Briefcase,
    kbps: 'FLAC.HD',
    gif: '/images/domains/operations.gif',
    description: 'The backbone of our community. The Operations Team handles internal logistics, sponsorship partnerships, college administration alignments, financial budgeting, and member onboarding.',
    focusPills: ['Logistics Management', 'Sponsorship Tie-ups', 'Admin Approvals', 'Budgeting & Resources', 'Member Onboarding'],
    deliverables: [
      { title: 'Sponsorship Tie-ups', desc: 'Securing industry sponsors, cloud credits, and swags.' },
      { title: 'Admin Coordination', desc: 'Aligning college permissions, auditoriums, and labs.' },
      { title: 'Member Relations', desc: 'Managing onboarding, certifications tracking & feedback.' },
      { title: 'Resource Allocation', desc: 'Overseeing budget allocation & hardware needs.' }
    ]
  }
];

const StyledWinampWrapper = styled.div`
  /* Component Scoped Variables & Base */
  .winamp-player-container {
    --base-metal: #2a2a2e;
    --base-dark: #1a1a1d;
    --accent-gold: #ffb700;
    --neon-green: #00ff00;
    --neon-green-dim: #004d00;
    --glass-reflection: rgba(255, 255, 255, 0.15);
    --font-main: "Courier New", monospace;

    position: relative;
    width: 100%;
    background-color: var(--base-metal);
    background-image: linear-gradient(
        90deg,
        transparent 50%,
        rgba(0, 0, 0, 0.2) 50%
      ),
      linear-gradient(0deg, #333 0%, #222 100%);
    background-size:
      4px 4px,
      100% 100%;
    border: 2px solid #555;
    border-bottom: 2px solid #111;
    border-right: 2px solid #111;
    border-radius: 6px;
    padding: 6px;
    box-shadow:
      inset 1px 1px 0 rgba(255, 255, 255, 0.2),
      0 10px 20px rgba(0, 0, 0, 0.5);
    font-family: var(--font-main);
    overflow: hidden;
    user-select: none;
  }

  /* Header Section */
  .player-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #000;
    padding: 4px 8px;
    margin-bottom: 6px;
    border-radius: 2px;
    border: 1px solid #444;
  }

  .header-bars {
    width: 12px;
    height: 8px;
    background: repeating-linear-gradient(
      90deg,
      #666 0,
      #666 2px,
      transparent 2px,
      transparent 4px
    );
  }

  .header-title {
    font-size: 10px;
    color: #888;
    letter-spacing: 1px;
    font-weight: bold;
  }

  /* Radio Stack Layout */
  .radio-stack {
    display: flex;
    flex-direction: column;
    gap: 4px;
    background: #111;
    padding: 4px;
    border-radius: 2px;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8);
  }

  /* Individual Track (Label) */
  .track-select {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 10px;
    cursor: pointer;
    background: linear-gradient(180deg, #222 0%, #1a1a1a 100%);
    border: 1px solid #333;
    transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .track-select:hover {
    background: linear-gradient(180deg, #2a2a2a 0%, #202020 100%);
    border-color: #555;
  }

  .track-select:active {
    transform: translateY(1px);
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.5);
    border-top-color: #111;
  }

  /* Hidden Input */
  .track-select input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* LED Indicator Design */
  .led-indicator {
    position: relative;
    width: 16px;
    height: 16px;
    background: #000;
    border-radius: 50%;
    box-shadow:
      inset 0 1px 3px rgba(0, 0, 0, 1),
      0 1px 0 rgba(255, 255, 255, 0.1);
    border: 1px solid #333;
  }

  .led-light {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background-color: var(--neon-green-dim);
    border-radius: 50%;
    transition: all 0.3s ease;
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
  }

  .led-glass {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background: radial-gradient(
      circle at 30% 30%,
      rgba(255, 255, 255, 0.2),
      transparent 60%
    );
    z-index: 2;
  }

  /* Checked State for LED */
  .track-select input:checked ~ .led-indicator .led-light {
    background-color: var(--neon-green);
    box-shadow:
      0 0 5px var(--neon-green),
      0 0 10px var(--neon-green),
      inset 0 0 2px rgba(255, 255, 255, 0.5);
    animation: led-flicker 0.4s ease-out forwards;
  }

  /* Track Info Typography */
  .track-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    line-height: 1.2;
  }

  .track-title {
    color: #666;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-shadow: 1px 1px 0 #000;
    transition: color 0.3s;
  }

  .track-kbps {
    font-size: 9px;
    color: #444;
  }

  /* Checked State for Text */
  .track-select input:checked ~ .track-info .track-title {
    color: var(--neon-green);
    text-shadow: 0 0 8px rgba(0, 255, 0, 0.4);
  }

  .track-select input:checked ~ .track-info .track-title::after {
    content: "_";
    display: inline-block;
    animation: cursor-blink 1s step-end infinite;
  }

  .track-select input:checked ~ .track-info .track-kbps {
    color: var(--accent-gold);
  }

  /* Mini Equalizer Animation */
  .equalizer-mini {
    display: flex;
    gap: 2px;
    align-items: flex-end;
    height: 12px;
    opacity: 0.2;
    transition: opacity 0.3s;
  }

  .bar {
    width: 3px;
    background: var(--neon-green);
    height: 20%;
  }

  .track-select input:checked ~ .equalizer-mini {
    opacity: 1;
  }

  .track-select input:checked ~ .equalizer-mini .bar:nth-child(1) {
    animation: eq-bounce 0.8s infinite ease-in-out;
  }
  .track-select input:checked ~ .equalizer-mini .bar:nth-child(2) {
    animation: eq-bounce 1.1s infinite ease-in-out 0.2s;
  }
  .track-select input:checked ~ .equalizer-mini .bar:nth-child(3) {
    animation: eq-bounce 0.9s infinite ease-in-out 0.4s;
  }

  /* Overlay Effects */
  .screen-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%);
    background-size: 100% 4px;
    z-index: 50;
    opacity: 0.6;
  }

  /* Keyframe Animations */
  @keyframes cursor-blink {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }

  @keyframes led-flicker {
    0% { opacity: 0.5; transform: translate(-50%, -50%) scale(0.8); }
    20% { opacity: 1; }
    40% { opacity: 0.2; }
    60% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
    100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  }

  @keyframes eq-bounce {
    0%, 100% { height: 20%; }
    50% { height: 100%; background: var(--accent-gold); }
  }
`;

const DomainsSection = () => {
  const [activeDomainId, setActiveDomainId] = useState('tech');

  const activeDomain = domainsData.find(d => d.id === activeDomainId) || domainsData[0];

  return (
    <section id="domains" className="section-padding domains-section">
      {/* Retro Cyber Terminal Animated Background */}
      <RetroCyberBackground />

      <div className="container">
        {/* Section Header */}
        <div className="domains-header text-center">
          <div className="section-badge">
            <Layers size={14} />
            <span>// OUR DOMAINS</span>
          </div>
          <h2 className="section-title">
            Driven by Specialized Teams, <span className="text-gradient-purple">Building Excellence</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Our community is structured across 4 specialized domains to deliver world-class workshops, hackathons, and software engineering projects.
          </p>
        </div>

        {/* Master Connected Retro Console Chassis */}
        <div className="unified-retro-console">
          <div className="console-inner-layout">
            {/* Left Stack: Winamp Radio Selector + GIF TV Screen Box */}
            <div className="console-left-stack">
              <StyledWinampWrapper>
                <div className="winamp-player-container">
                  <div className="player-header">
                    <div className="header-bars" />
                    <span className="header-title">PREFERENCES // DOMAIN_MODE</span>
                  </div>
                  <div className="radio-stack">
                    {domainsData.map((domain) => {
                      const isChecked = activeDomainId === domain.id;
                      return (
                        <label
                          key={domain.id}
                          className="track-select"
                          htmlFor={`domain-track-${domain.id}`}
                          onClick={() => setActiveDomainId(domain.id)}
                        >
                          <input
                            type="radio"
                            id={`domain-track-${domain.id}`}
                            name="winamp-domain-mode"
                            checked={isChecked}
                            onChange={() => setActiveDomainId(domain.id)}
                          />
                          <div className="led-indicator">
                            <div className="led-glass" />
                            <div className="led-light" />
                            <div className="led-reflection" />
                          </div>
                          <div className="track-info">
                            <span className="track-title">{domain.title.toUpperCase()}</span>
                            <span className="track-kbps">{domain.kbps}</span>
                          </div>
                          <div className="equalizer-mini">
                            <div className="bar" />
                            <div className="bar" />
                            <div className="bar" />
                          </div>
                        </label>
                      );
                    })}
                  </div>
                  <div className="screen-overlay" />
                </div>
              </StyledWinampWrapper>

              {/* Lower GIF TV Screen Box */}
              <div className="gif-tv-screen-box">
                <div className="gif-tv-header">
                  <span className="gif-tv-header-title">VIDEO_FEED // {activeDomain.id.toUpperCase()}_LIVE</span>
                  <span className="gif-tv-header-badge">60 FPS</span>
                </div>
                <div className="gif-tv-display">
                  <div className="gif-tv-scanlines" />
                  <img
                    src={activeDomain.gif}
                    alt={`${activeDomain.title} GIF Feed`}
                    className="gif-tv-image"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: CRT TV Screen Details Display Card */}
            <div className="tv-screen-details-card" key={activeDomain.id}>
              <div className="tv-monitor-header">
                <div className="tv-header-left">
                  <div className="tv-power-led" />
                  <span className="tv-header-title">CRT MONITOR // DOMAIN_DISPLAY</span>
                </div>
                <span className="tv-header-status">SIGNAL: 100% OK</span>
              </div>

              <div className="tv-crt-screen">
                <div className="tv-screen-overlay" />

                <div className="tv-domain-badge">
                  <Sparkles size={12} />
                  <span>{activeDomain.badge}</span>
                </div>

                <h3 className="tv-domain-title">
                  {activeDomain.title}
                </h3>

                <p className="tv-domain-desc">
                  {activeDomain.description}
                </p>

                <div className="tv-focus-heading">
                  // CORE CAPABILITIES & FOCUS
                </div>

                <div className="tv-focus-tags">
                  {activeDomain.focusPills.map((pill, idx) => (
                    <span key={idx} className="tv-focus-pill">
                      {pill}
                    </span>
                  ))}
                </div>

                <div className="tv-deliverables-grid">
                  {activeDomain.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="tv-deliverable-item"
                      style={{ animationDelay: `${0.6 + idx * 0.1}s` }}
                    >
                      <CheckCircle2 size={16} className="tv-deliverable-icon" />
                      <div>
                        <div className="tv-deliverable-name">{item.title}</div>
                        <div className="tv-deliverable-desc">{item.desc}</div>
                      </div>
                    </div>
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

export default DomainsSection;
