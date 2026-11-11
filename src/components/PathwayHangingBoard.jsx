import React, { useState, useEffect } from 'react';
import {
  Calendar,
  MapPin,
  UserCheck,
  Sparkles,
  ArrowRight,
  ChevronDown,
  X
} from 'lucide-react';
import './PathwayHangingBoard.css';

// Event Milestones & Chronicles (horizontal 2-column grid with pixel-chip boards; click for full details)
const PATHWAY_COLUMNS = [
  {
    columnId: 'phase-1',
    headerLabel: 'PHASE I · LAUNCH & CLOUD LABS',
    accentDot: '#B45309',
    events: [
      {
        id: 'event-inauguration',
        num: 1,
        title: 'INAUGURATION & AWS FOUNDATIONS',
        shortMeta: '29 Sept 2026 · Sem Hall 1, JSSATEB',
        shortSummary:
          'Historic kickoff of AWS Student Builder Group at JSSATEB with Ms. Omshree Butani demystifying core AWS cloud building blocks.',
        subtitle: 'What Even is AWS? · The Grand Kickoff',
        timeline: '29 September 2026 · 2:00 PM IST',
        venue: 'Sem Hall 1, JSSATEB',
        speaker: 'Ms. Omshree Butani',
        speakerRole: 'Senior FinOps Analyst @ Cimpress · AWS Golden Jacket Holder · AWS Community Builder',
        description:
          'The historic launch of AWS Student Builder Group at JSSATEB! Ms. Omshree Butani walked builders through cloud fundamentals, breaking down core AWS building blocks, FinOps insights, and real-world architecture patterns in an inspiring live workshop.',
        highlights: ['Cloud Fundamentals', 'Demystifying AWS', 'FinOps & Architecture', 'Auditorium Kickoff'],
        tag: 'INAUGURAL EVENT',
        accentColor: '#0888F0',
        drawerAccent: '#38A3FF',
        bannerTextColor: '#07111A',
        pixelCells: [2, 14, 30, 41, 45, 48],
        tiltDeg: -0.55
      },
      {
        id: 'event-practitioner-lab',
        num: 2,
        title: 'AWS CLOUD PRACTITIONER LAB',
        shortMeta: '16 Oct 2026 · Online / Virtual Session',
        shortSummary:
          'Hands-on virtual AWS console walkthroughs covering core cloud services, architecture patterns, and practical CLF-C02 prep.',
        subtitle: 'Hands-on Console & Cloud Practitioner Essentials',
        timeline: '16 October 2026 · Online Mode',
        venue: 'Online / Virtual Session',
        speaker: 'Ms. Abhinaya SV',
        speakerRole: 'AWS Cloud Mentor & Technical Speaker',
        description:
          'Comprehensive virtual hands-on lab conducted on 16th October by Ms. Abhinaya SV. Builders engaged in live console walkthroughs covering core AWS cloud services, architectural patterns, and practical prep for the AWS Certified Cloud Practitioner (CLF-C02).',
        highlights: ['Online Hands-on Lab', 'Live Console Walkthroughs', 'CLF-C02 Prep', 'Core Cloud Architecture'],
        tag: 'HANDS-ON LAB',
        accentColor: '#22E01A',
        drawerAccent: '#4ADE80',
        bannerTextColor: '#061206',
        pixelCells: [3, 12, 20, 42, 44, 49],
        tiltDeg: 0.45
      },
      {
        id: 'event-cloud-quest',
        num: 3,
        title: 'AWS CLOUD GAMIFIED QUEST',
        shortMeta: 'Upcoming Season · Virtual Cloud Arena',
        shortSummary:
          'Interactive 3D RPG cloud tournament powered by AWS Cloud Quest—solve city challenges and deploy live infrastructure.',
        subtitle: 'Competitive 3D Cloud Challenge & RPG Tournament',
        timeline: 'Upcoming Season · Competition Track',
        venue: 'Virtual Cloud Arena',
        speaker: 'AWS Cloud Quest Arena',
        speakerRole: 'Gamified Builder Challenge',
        description:
          'An adrenaline-filled, interactive 3D RPG cloud tournament powered by AWS Cloud Quest! Solve real-world city challenges, deploy live cloud infrastructure, and battle for top ranks on the live leaderboard.',
        highlights: ['3D RPG Simulation', 'Live Infrastructure Scoring', 'Digital Badges', 'Exclusive Swag & Prizes'],
        tag: 'GAMIFIED EVENT',
        accentColor: '#B26BF9',
        drawerAccent: '#C084FC',
        bannerTextColor: '#0B0614',
        pixelCells: [2, 15, 29, 41, 46, 48],
        tiltDeg: -0.4
      }
    ]
  },
  {
    columnId: 'phase-2',
    headerLabel: 'PHASE II · HACKS, COMMUNITY & SUMMIT',
    accentDot: '#6D28D9',
    events: [
      {
        id: 'event-hackathons',
        num: 4,
        title: 'CLOUD HACKATHONS & BUILDATHONS',
        shortMeta: 'To Be Announced · JSSATEB Main Campus',
        shortSummary:
          'High-octane 24-hour sprint to architect and deploy serverless, cloud-native, and Generative AI solutions on AWS.',
        subtitle: '24-Hour Production-Grade Solution Sprint',
        timeline: 'To Be Announced · 24-Hour Sprint',
        venue: 'JSSATEB Main Campus',
        speaker: 'Builder Mentors & Industry Leads',
        speakerRole: 'Architect Mentorship & Jury',
        description:
          'High-octane 24-hour sprint to architect, build, and deploy serverless, cloud-native, and Generative AI applications using AWS services. Includes mentor guidance, cloud credits, and judging by industry veterans.',
        highlights: ['Serverless & GenAI Track', 'AWS Cloud Credits', 'Jury Evaluation', 'Incubation & Awards'],
        tag: 'HACKATHONS',
        accentColor: '#E11111',
        drawerAccent: '#FB7185',
        bannerTextColor: '#FFFFFF',
        pixelCells: [2, 14, 30, 41, 45, 48],
        tiltDeg: 0.5
      },
      {
        id: 'event-meetups',
        num: 5,
        title: 'MEETUPS & COMMUNITY SUMMIT',
        shortMeta: 'Monthly Series · Campus Auditoriums',
        shortSummary:
          'Open-floor technical meetups, lightning project demos, and architect tech talks with alumni and AWS User Group leaders.',
        subtitle: 'Knowledge Sharing, Networking & Project Demos',
        timeline: 'Ongoing Series & Grand Finale · Monthly Sessions',
        venue: 'Campus Auditoriums & Tech Spaces',
        speaker: 'AWS Community Leaders & Alumni',
        speakerRole: 'AWS User Group & Tech Ecosystem',
        description:
          'Open-floor technical meetups, project showcases, cloud architect tech talks, and our grand annual celebration bringing together builders, alumni, and industry leaders.',
        highlights: ['Architect Tech Talks', 'Lightning Project Demos', 'Open Networking', 'Global AWS Community'],
        tag: 'COMMUNITY HUB',
        accentColor: '#E5DC00',
        drawerAccent: '#FACC15',
        bannerTextColor: '#0B0C04',
        pixelCells: [4, 13, 20, 41, 45, 49],
        tiltDeg: -0.45
      },
      {
        id: 'event-annual-horizon',
        num: 6,
        title: 'ANNUAL HORIZON & CELEBRATION',
        shortMeta: 'Annual Ceremony · JSSATEB Auditorium',
        shortSummary:
          'Crowning annual celebration honoring certified student builders, top hackathon teams, and incoming chapter leadership.',
        subtitle: 'Celebration of Builders, Project Demos & Leadership Transition',
        timeline: 'Annual Milestone Ceremony · JSSATEB Campus',
        venue: 'JSSATEB Main Auditorium & Live Stream',
        speaker: 'Faculty Mentors, Core Leads & Alumni',
        speakerRole: 'AWS Student Builder Group Council',
        description:
          'The crowning annual celebration recognizing certified student builders, top hackathon teams, and welcoming the incoming chapter leadership with grand honors.',
        highlights: ['Builder Recognition', 'Certification Honors', 'Annual Keynote', 'Leadership Handover'],
        tag: 'GRAND FINALE',
        accentColor: '#FF4D94',
        drawerAccent: '#F472B6',
        bannerTextColor: '#12050B',
        pixelCells: [2, 14, 30, 42, 46, 48],
        tiltDeg: 0.4
      }
    ]
  }
];

const GRID_INDICES = Array.from({ length: 50 }, (_, idx) => idx + 1);

// 8-bit Pixel Chip Emblem matching uploaded AWS pillar reference cards
const PixelChipSvg = ({ color }) => (
  <svg
    className="pixel-board-chip-svg"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Top pins */}
    <rect x="20" y="6" width="6" height="8" fill={color} />
    <rect x="30" y="6" width="6" height="8" fill={color} />
    <rect x="40" y="6" width="6" height="8" fill={color} />
    {/* Bottom pins */}
    <rect x="20" y="50" width="6" height="8" fill={color} />
    <rect x="30" y="50" width="6" height="8" fill={color} />
    <rect x="40" y="50" width="6" height="8" fill={color} />
    {/* Left pins */}
    <rect x="6" y="20" width="8" height="6" fill={color} />
    <rect x="6" y="30" width="8" height="6" fill={color} />
    <rect x="6" y="40" width="8" height="6" fill={color} />
    {/* Right pins */}
    <rect x="50" y="20" width="8" height="6" fill={color} />
    <rect x="50" y="30" width="8" height="6" fill={color} />
    <rect x="50" y="40" width="8" height="6" fill={color} />
    {/* Hollow Pixel Chip Frame */}
    <rect x="14" y="14" width="38" height="7" fill={color} />
    <rect x="14" y="43" width="38" height="7" fill={color} />
    <rect x="14" y="21" width="7" height="22" fill={color} />
    <rect x="45" y="21" width="7" height="22" fill={color} />
  </svg>
);

// Clean AWS wordmark + smile curve anchored in lower-right card cells
const AwsSmileLogo = () => (
  <svg
    className="pixel-aws-smile-svg"
    viewBox="0 0 92 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="AWS"
  >
    <text
      x="46"
      y="23"
      textAnchor="middle"
      fill="#FFFFFF"
      fontFamily="Outfit, Inter, sans-serif"
      fontSize="24"
      fontWeight="700"
      letterSpacing="-0.5"
    >
      aws
    </text>
    <path
      d="M15 29 C34 39, 58 39, 76 29"
      stroke="#FFFFFF"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    <path
      d="M71 27 L78 28.8 L74.5 34.5"
      stroke="#FFFFFF"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Inline SVG braided dark-hemp knot anchored at each brass grommet eyelet
const RopeKnotSvg = () => (
  <svg
    className="hanging-knot-svg"
    viewBox="0 0 36 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M18 0 V12" stroke="#8E6F4B" strokeWidth="8.5" strokeLinecap="round" />
    <path d="M14 2 L22 7 M14 7 L22 12" stroke="#5A4227" strokeWidth="1.8" strokeLinecap="round" />
    <ellipse cx="18" cy="18" rx="9.5" ry="7.5" fill="#9E7D57" stroke="#4C3720" strokeWidth="1.5" />
    <path d="M10.5 16.5 Q18 11.5 25.5 17.5" stroke="#C5A47D" strokeWidth="2" strokeLinecap="round" />
    <path d="M11 21 Q18 16.5 25 21.5" stroke="#5A4227" strokeWidth="2" strokeLinecap="round" />
    <path d="M14 13 Q19 19 15 24.5" stroke="#6E5233" strokeWidth="2" strokeLinecap="round" />
    <path d="M18 24.5 V34" stroke="#8E6F4B" strokeWidth="6" strokeLinecap="round" />
    <path d="M15.5 27.5 L20.5 31" stroke="#5A4227" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const PathwayHangingBoard = ({ onOpenJoinModal }) => {
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && expandedId !== null) {
        setExpandedId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [expandedId]);

  const toggleCard = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="hanging-board-canvas">
      {/* Top Framed Chronicle Plaque */}
      <div className="hanging-top-banner-wrap">
        <div className="hanging-top-banner">
          <span className="banner-dot" aria-hidden="true" />
          <span className="banner-text">AWS SBG JSSATEB • 2026 EVENT CHRONICLES</span>
          <span className="banner-dot violet" aria-hidden="true" />
        </div>
      </div>

      {/* Horizontal 2 Side-by-Side Columns on Desktop; Chronological Stack on Mobile */}
      <div className="hanging-columns-grid">
        {PATHWAY_COLUMNS.map((col) => (
          <div key={col.columnId} className="hanging-chain-column">
            {/* Subtle Architectural Suspension Rails */}
            <div className="hanging-rope-rail rope-left" aria-hidden="true" />
            <div className="hanging-rope-rail rope-right" aria-hidden="true" />

            {/* Column Mounting Beam */}
            <div className="hanging-column-beam">
              <span className="beam-rivet" aria-hidden="true" />
              <span
                className="beam-indicator"
                style={{ backgroundColor: col.accentDot, boxShadow: `0 0 10px ${col.accentDot}` }}
                aria-hidden="true"
              />
              <span className="beam-title">{col.headerLabel}</span>
              <span className="beam-rivet" aria-hidden="true" />
            </div>

            {/* 3 Horizontal Pixel-Grid Event Boards in this Column */}
            <div className="hanging-cards-stack">
              {col.events.map((event) => {
                const isOpen = expandedId === event.id;

                return (
                  <article
                    key={event.id}
                    className={`hanging-card-shell ${isOpen ? 'is-expanded' : ''}`}
                    style={{
                      '--card-tilt': `${event.tiltDeg}deg`,
                      '--event-accent': event.accentColor,
                      '--drawer-accent': event.drawerAccent,
                      '--banner-ink': event.bannerTextColor
                    }}
                  >
                    {/* Rope Knots & Punched Grommet Eyelets anchored to the Column Ropes */}
                    <div className="hanging-anchor anchor-left" aria-hidden="true">
                      <RopeKnotSvg />
                      <span className="kraft-eyelet" />
                    </div>
                    <div className="hanging-anchor anchor-right" aria-hidden="true">
                      <RopeKnotSvg />
                      <span className="kraft-eyelet" />
                    </div>

                    {/* Torn-Edge Kraft Cardboard Outer Board Border */}
                    <div className="kraft-paper-bg" aria-hidden="true" />

                    {/* Mounted Dark Pixel-Grid Interior Canvas */}
                    <div className="pixel-board-inner-canvas">
                      {/* Proportional Pixel-Grid Card Stage (keeps 10x5 cells square even when expanded) */}
                      <div className="pixel-card-stage">
                      {/* Crisp 10x5 Architectural Pixel Grid Background Layer */}
                      <div className="pixel-board-grid-layer" aria-hidden="true">
                        {GRID_INDICES.map((cellIndex) => (
                          <span
                            key={cellIndex}
                            className={`pixel-grid-cell ${
                              event.pixelCells.includes(cellIndex) ? 'is-colored' : ''
                            }`}
                          />
                        ))}
                      </div>

                      {/* Top-Right Pixel Chip Emblem */}
                      <div className="pixel-board-chip-wrap" aria-hidden="true">
                        <PixelChipSvg color={event.accentColor} />
                      </div>

                      <button
                        type="button"
                        className="kraft-card-trigger"
                        onClick={() => toggleCard(event.id)}
                        aria-expanded={isOpen}
                        aria-controls={`${event.id}-details`}
                      >
                        {/* Colored Horizontal Title Banner */}
                        <div className="pixel-title-banner">
                          <h3 className="pixel-board-title">
                            {event.num}. {event.title}
                          </h3>
                          <span className="pixel-board-meta">{event.shortMeta}</span>
                        </div>

                        {/* Bottom Horizontal Split: Bordered Summary Box + AWS Mark */}
                        <div className="pixel-bottom-row">
                          <div className="pixel-summary-box">
                            <p className="pixel-board-summary">{event.shortSummary}</p>
                            <span className="pixel-board-hint">
                              <span>{isOpen ? 'Hide extra details' : 'Click for more details'}</span>
                              <ChevronDown
                                size={14}
                                className={`kraft-hint-chevron ${isOpen ? 'rotated' : ''}`}
                              />
                            </span>
                          </div>

                          <div className="pixel-aws-slot">
                            <AwsSmileLogo />
                          </div>
                        </div>
                      </button>
                    </div>

                    {/* Expanded Event Details Drawer (opens cleanly inside the card on click) */}
                    {isOpen && (
                        <div
                          id={`${event.id}-details`}
                          className="kraft-expanded-details"
                          role="region"
                          aria-label={`${event.title} details`}
                        >
                          <div className="kraft-details-header">
                            <span
                              className="kraft-details-tag"
                              style={{
                                borderColor: `${event.drawerAccent}66`,
                                color: event.drawerAccent,
                                backgroundColor: `${event.accentColor}22`
                              }}
                            >
                              <Sparkles size={11} />
                              <span>MILESTONE 0{event.num} · {event.tag}</span>
                            </span>

                            <button
                              type="button"
                              className="kraft-details-close"
                              onClick={() => setExpandedId(null)}
                              aria-label="Close event details"
                              title="Close details"
                            >
                              <X size={15} />
                            </button>
                          </div>

                          <div className="kraft-details-subtitle" style={{ color: event.drawerAccent }}>
                            {event.subtitle}
                          </div>

                          <div className="kraft-details-meta-grid">
                            <div className="kraft-meta-box">
                              <span className="kraft-meta-label">
                                <Calendar size={12} style={{ color: event.drawerAccent }} />
                                TIMELINE
                              </span>
                              <span className="kraft-meta-val">{event.timeline}</span>
                            </div>

                            <div className="kraft-meta-box">
                              <span className="kraft-meta-label">
                                <MapPin size={12} style={{ color: event.drawerAccent }} />
                                VENUE
                              </span>
                              <span className="kraft-meta-val">{event.venue}</span>
                            </div>

                            <div className="kraft-meta-box speaker-box">
                              <span className="kraft-meta-label">
                                <UserCheck size={12} style={{ color: event.drawerAccent }} />
                                KEY SPEAKER / MENTOR
                              </span>
                              <span className="kraft-meta-val speaker-name" style={{ color: event.drawerAccent }}>
                                {event.speaker}
                              </span>
                              <span className="kraft-meta-role">{event.speakerRole}</span>
                            </div>
                          </div>

                          <p className="kraft-details-description">{event.description}</p>

                          <div className="kraft-details-highlights">
                            {event.highlights.map((item, idx) => (
                              <span key={idx} className="kraft-highlight-chip">
                                <Sparkles size={10} style={{ color: event.drawerAccent }} />
                                <span>{item}</span>
                              </span>
                            ))}
                          </div>

                          <div className="kraft-details-actions">
                            {onOpenJoinModal && (
                              <button
                                type="button"
                                className="kraft-join-btn"
                                style={{
                                  backgroundColor: event.accentColor,
                                  color: event.bannerTextColor,
                                  boxShadow: `0 4px 18px ${event.accentColor}44`
                                }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onOpenJoinModal();
                                }}
                              >
                                <span>Join Event Community</span>
                                <ArrowRight size={14} />
                              </button>
                            )}
                            <button
                              type="button"
                              className="kraft-collapse-btn"
                              onClick={() => setExpandedId(null)}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PathwayHangingBoard;
