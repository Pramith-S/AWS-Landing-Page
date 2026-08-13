import { useState } from 'react';
import { Layers, Terminal, Calendar, Megaphone, Briefcase, CheckCircle2, Sparkles } from 'lucide-react';
import DecryptedText from '../components/DecryptedText';
import StrokeText from '../components/StrokeText';
import '../components/DomainsSection.css';
import './MobileDomainsSection.css';

const domainsData = [
  {
    id: 'tech',
    title: 'Tech Team',
    badge: 'Cloud & Infrastructure',
    icon: Terminal,
    kbps: '320kbps',
    gif: '/images/domains/tech.gif',
    description: 'The powerhouse behind our cloud infrastructure, open-source projects, and technical curriculum. Builds production-grade full-stack apps and DevOps pipelines.',
    focusPills: ['AWS Architecture', 'Full-Stack Dev', 'Serverless & EKS', 'DevOps & CI/CD', 'Open Source'],
    deliverables: [
      { title: 'Web Portals', desc: 'Cloud-native web portals & APIs.' },
      { title: 'AWS Bootcamps', desc: 'Hands-on EC2, S3 & Lambda labs.' },
      { title: 'Open Source', desc: 'Building open-source starter kits.' },
      { title: 'Hackathon Support', desc: 'Mentoring in cloud APIs & deployment.' }
    ]
  },
  {
    id: 'events',
    title: 'Events Team',
    badge: 'Community & Hackathons',
    icon: Calendar,
    kbps: '192kbps',
    gif: '/images/domains/events.gif',
    description: 'Orchestrates community workshops, hackathons, speaker sessions, and tech meetups. Drives student engagement, venue logistics, and speaker outreach.',
    focusPills: ['Hackathon Sprints', 'Workshop Ops', 'Speaker Outreach', 'Venue Ops', 'Meetups'],
    deliverables: [
      { title: 'Collegiate Hackathons', desc: '24-hour hackathons with top mentors.' },
      { title: 'Bootcamps', desc: 'Hosting weekly cloud architecture labs.' },
      { title: 'Industry Speakers', desc: 'Inviting AWS Certified Experts.' },
      { title: 'Attendee Experience', desc: 'Ensuring seamless check-ins & swags.' }
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing Team',
    badge: 'Brand & Content Strategy',
    icon: Megaphone,
    kbps: '128kbps',
    gif: '/images/domains/marketing.gif',
    description: 'Builds our brand identity and grows our student community. Crafts compelling social media campaigns, visual design assets, video teasers, and content strategies.',
    focusPills: ['Social Growth', 'Graphic Design', 'Content Strategy', 'Video Reels', 'Brand Identity'],
    deliverables: [
      { title: 'Social Campaigns', desc: 'Creating viral outreach campaigns.' },
      { title: 'Graphic Assets', desc: 'Event banners, posters, and swags.' },
      { title: 'Project Stories', desc: 'Highlighting student showcases & wins.' },
      { title: 'Video Recaps', desc: 'Editing promo reels for events.' }
    ]
  },
  {
    id: 'operations',
    title: 'Operations Team',
    badge: 'Logistics & Partnerships',
    icon: Briefcase,
    kbps: 'FLAC.HD',
    gif: '/images/domains/operations.gif',
    description: 'The backbone of our community. Handles internal logistics, sponsorship partnerships, college admin alignments, financial budgeting, and member onboarding.',
    focusPills: ['Logistics', 'Sponsorships', 'Admin Approvals', 'Budgeting', 'Onboarding'],
    deliverables: [
      { title: 'Sponsorship Tie-ups', desc: 'Securing cloud credits & swags.' },
      { title: 'Admin Coordination', desc: 'Aligning college permissions & auditoriums.' },
      { title: 'Member Relations', desc: 'Certifications tracking & onboarding.' },
      { title: 'Resource Planning', desc: 'Overseeing budget & hardware needs.' }
    ]
  }
];

const MobileDomainsSection = () => {
  const [activeDomainId, setActiveDomainId] = useState('tech');

  const activeDomain = domainsData.find(d => d.id === activeDomainId) || domainsData[0];

  return (
    <section id="domains" className="mobile-domains-section">
      {/* CSS-only Glowing Background (no WebGL canvas on mobile) */}
      <div className="mobile-domains-bg-glow" />

      <div className="container">
        {/* Section Header */}
        <div className="mobile-domains-header">
          <div className="section-badge">
            <Layers size={13} />
            <span>// OUR DOMAINS</span>
          </div>

          <div className="about-stroke-heading section-stroke-heading" aria-label="Specialized Teams: 4 Core Domains">
            <StrokeText
              text="Specialized Teams:"
              trigger="scroll"
              strokeColor="#8B5CF6"
              fillColor="#F8FAFC"
              strokeWidth={1.2}
              drawDuration={1.4}
              fillDelay={0.2}
              stagger={0.03}
              fontSize={32}
              fontWeight={800}
              letterSpacing={-0.5}
              fillMode="wipe"
            />
            <StrokeText
              text="4 Core Domains"
              trigger="scroll"
              strokeColor="#8B5CF6"
              fillColor="#8B5CF6"
              strokeWidth={1.2}
              drawDuration={1.4}
              fillDelay={0.3}
              stagger={0.03}
              fontSize={32}
              fontWeight={800}
              letterSpacing={-0.5}
              fillMode="wipe"
            />
          </div>
        </div>

        {/* Master Connected Retro Console Chassis */}
        <div className="mobile-domain-console">
          {/* Winamp Control Header */}
          <div className="mobile-console-header">
            <div className="mobile-header-bars" />
            <span className="mobile-header-title">PREFERENCES // SELECT_DOMAIN</span>
            <span className="mobile-header-badge">WINAMP v2.91</span>
          </div>

          {/* Winamp Radio Selector Stack */}
          <div className="mobile-winamp-stack">
            {domainsData.map((domain) => {
              const isChecked = activeDomainId === domain.id;
              return (
                <button
                  key={domain.id}
                  type="button"
                  className={`mobile-track-select ${isChecked ? 'active' : ''}`}
                  onClick={() => setActiveDomainId(domain.id)}
                >
                  <div className="mobile-led-indicator">
                    <div className="mobile-led-glass" />
                    <div className={`mobile-led-light ${isChecked ? 'active-led' : ''}`} />
                  </div>
                  <div className="mobile-track-info">
                    <span className="mobile-track-title">{domain.title.toUpperCase()}</span>
                    <span className="mobile-track-kbps">{domain.kbps}</span>
                  </div>
                  <div className={`mobile-equalizer-mini ${isChecked ? 'active-eq' : ''}`}>
                    <div className="bar" />
                    <div className="bar" />
                    <div className="bar" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* CRT Monitor Feed Header */}
          <div className="mobile-console-header" style={{ marginTop: '8px' }}>
            <div className="mobile-console-title">
              <span className="green-led">●</span>
              <span>CRT MONITOR // {activeDomain.id.toUpperCase()}_FEED</span>
            </div>
            <span className="mobile-console-status">60 FPS</span>
          </div>

          {/* CRT Monitor Screen Display */}
          <div className="mobile-console-screen" key={activeDomain.id}>
            <div className="mobile-screen-scanlines" />

            {/* Badge & Title */}
            <div className="mobile-domain-badge-row">
              <span className="mobile-domain-badge">
                <Sparkles size={11} />
                {activeDomain.badge}
              </span>
            </div>

            <h3 className="mobile-domain-title">{activeDomain.title}</h3>

            {/* GIF Preview Box */}
            <div className="mobile-gif-preview-box">
              <div className="mobile-gif-scanlines" />
              <img
                src={activeDomain.gif}
                alt={`${activeDomain.title} Feed`}
                className="mobile-gif-img"
              />
            </div>

            {/* Description */}
            <p className="mobile-domain-desc">{activeDomain.description}</p>

            {/* Focus Pills */}
            <div className="mobile-focus-section">
              <span className="mobile-focus-label">// CORE CAPABILITIES</span>
              <div className="mobile-focus-tags">
                {activeDomain.focusPills.map((pill, idx) => (
                  <span key={idx} className="mobile-focus-tag">
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Deliverables 2-Column Grid */}
            <div className="mobile-deliverables-grid">
              {activeDomain.deliverables.map((item, idx) => (
                <div key={idx} className="mobile-deliverable-card">
                  <CheckCircle2 size={14} className="deliverable-icon" />
                  <div className="deliverable-info">
                    <span className="deliverable-title">{item.title}</span>
                    <span className="deliverable-desc">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileDomainsSection;
