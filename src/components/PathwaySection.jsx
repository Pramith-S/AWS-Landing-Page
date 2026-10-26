import React, { useState } from 'react';
import { 
  Milestone, 
  Calendar, 
  MapPin, 
  UserCheck, 
  Sparkles, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  CheckCircle2,
  Clock,
  Radio,
  Layers
} from 'lucide-react';
import StrokeText from './StrokeText';
import './PathwaySection.css';

const PATHWAY_STATIONS = [
  {
    id: 'station-1',
    number: '01',
    shortName: 'Inauguration',
    fullName: 'Inauguration & AWS Foundations',
    subtitle: 'What Even is AWS? · The Grand Kickoff',
    line: 'Line 1 · Station 01',
    lineColor: '#FF9900',
    status: 'Completed',
    statusType: 'completed',
    date: '29 September 2026',
    time: '2:00 PM IST',
    venue: 'Sem Hall 1, JSSATEB',
    speaker: 'Ms. Omshree Butani',
    speakerRole: 'Senior FinOps Analyst @ Cimpress · AWS Golden Jacket Holder · AWS Community Builder',
    tag: 'INAUGURAL EVENT',
    description: 'The historic launch of AWS Student Builder Group at JSSATEB! Ms. Omshree Butani walked builders through cloud fundamentals, breaking down core AWS building blocks in an inspiring live workshop.',
    highlights: ['Cloud Fundamentals', 'Demystifying AWS', 'FinOps & Architecture', 'Auditorium Kickoff']
  },
  {
    id: 'station-2',
    number: '02',
    shortName: 'Practitioner Lab',
    fullName: 'AWS Cloud Practitioner Lab',
    subtitle: 'Hands-on Console & Cloud Practitioner Essentials',
    line: 'Line 1 · Station 02',
    lineColor: '#7C3AED',
    status: 'Completed',
    statusType: 'completed',
    date: '16 October 2026',
    time: 'Online Mode',
    venue: 'Online / Virtual Session',
    speaker: 'Ms. Abhinaya SV',
    speakerRole: 'AWS Cloud Mentor & Technical Speaker',
    tag: 'HANDS-ON LAB',
    description: 'Comprehensive virtual hands-on lab conducted on 16th October by Ms. Abhinaya SV. Builders engaged in live console walkthroughs covering core AWS cloud services, architectural patterns, and practical prep for the AWS Certified Cloud Practitioner (CLF-C02).',
    highlights: ['Online Hands-on Lab', 'Live Console Walkthroughs', 'CLF-C02 Certification Prep', 'Core Cloud Architecture']
  },
  {
    id: 'station-3',
    number: '03',
    shortName: 'Gamified Quest',
    fullName: 'AWS Cloud Gamified Quest Event',
    subtitle: 'Competitive 3D Cloud Challenge & RPG Tournament',
    line: 'Line 1 · Station 03',
    lineColor: '#06B6D4',
    status: 'Upcoming Quest',
    statusType: 'upcoming',
    date: 'Upcoming Season',
    time: 'Competition Track',
    venue: 'Virtual Cloud Arena',
    speaker: 'AWS Cloud Quest Arena',
    speakerRole: 'Gamified Builder Challenge',
    tag: 'GAMIFIED EVENT',
    description: 'An adrenaline-filled, interactive 3D RPG cloud tournament powered by AWS Cloud Quest! Solve real-world city challenges, deploy live cloud infrastructure, and battle for top ranks on the live leaderboard.',
    highlights: ['3D RPG Simulation', 'Live Infrastructure Scoring', 'Digital Badges', 'Exclusive Swag & Prizes']
  },
  {
    id: 'station-4',
    number: '04',
    shortName: 'Hackathons',
    fullName: 'Cloud Hackathons & Buildathons',
    subtitle: '24-Hour Production-Grade Solution Sprint',
    line: 'Line 1 · Station 04',
    lineColor: '#10B981',
    status: 'Upcoming Track',
    statusType: 'planned',
    date: 'To Be Announced',
    time: '24-Hour Build Sprint',
    venue: 'JSSATEB Main Campus',
    speaker: 'Builder Mentors & Industry Leads',
    speakerRole: 'Architect Mentorship & Jury',
    tag: 'HACKATHONS',
    description: 'High-octane 24-hour sprint to architect, build, and deploy serverless, cloud-native, and Generative AI applications using AWS services. Includes mentor guidance, cloud credits, and judging by industry veterans.',
    highlights: ['Serverless & GenAI Track', 'AWS Cloud Credits', 'Jury Evaluation', 'Incubation & Awards']
  },
  {
    id: 'station-5',
    number: '05',
    shortName: 'Community Events',
    fullName: 'Meetups, Community Events & Grand Summit',
    subtitle: 'Knowledge Sharing, Networking & Project Demos',
    line: 'Line 1 · Station 05',
    lineColor: '#EC4899',
    status: 'Continuous Hub',
    statusType: 'planned',
    date: 'Ongoing Series & Grand Finale',
    time: 'Monthly Sessions',
    venue: 'Campus Auditoriums & Tech Spaces',
    speaker: 'AWS Community Leaders & Alumni',
    speakerRole: 'AWS User Group & Tech Ecosystem',
    tag: 'COMMUNITY HUB',
    description: 'Open-floor technical meetups, project showcases, cloud architect tech talks, and our grand annual celebration bringing together builders, alumni, and industry leaders.',
    highlights: ['Architect Tech Talks', 'Lightning Project Demos', 'Open Networking', 'Global AWS Community']
  }
];

const PathwaySection = ({ onOpenJoinModal }) => {
  const [activeStationIndex, setActiveStationIndex] = useState(0);

  const currentStation = PATHWAY_STATIONS[activeStationIndex];

  const handleNextStation = () => {
    setActiveStationIndex((prev) => (prev + 1) % PATHWAY_STATIONS.length);
  };

  const handlePrevStation = () => {
    setActiveStationIndex((prev) => (prev - 1 + PATHWAY_STATIONS.length) % PATHWAY_STATIONS.length);
  };

  return (
    <section id="pathway" className="section-padding pathway-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="pathway-header-box">
          <div className="section-badge">
            <Milestone size={14} />
            <span>// AWS LANDMARK PATHWAY</span>
          </div>
          
          <div className="about-stroke-heading section-stroke-heading" aria-label="AWS SBG Landmarks & Community Pathway">
            <StrokeText
              text="Milestone Landmarks &"
              trigger="scroll"
              strokeColor="#FF9900"
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
              text="Community Pathway"
              trigger="scroll"
              strokeColor="#FF9900"
              fillColor="#FF9900"
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
          
          <p className="section-subtitle">
            Follow the transit track of our community journey. Click any station stop along the line to explore inaugural workshops, practitioner labs, gamified quests, and hackathons.
          </p>
        </div>

        {/* Metro Transit Container */}
        <div className="metro-transit-wrapper">
          
          {/* Top Line Indicator Bar */}
          <div className="metro-line-bar-header">
            <div className="metro-line-tag">
              <span className="metro-line-indicator-dot" style={{ backgroundColor: currentStation.lineColor }} />
              <span className="metro-line-title">AWS SBG TRANSIT LINE // {currentStation.line}</span>
            </div>
            <div className="metro-instruction-hint">
              <Radio size={13} className="pulse-icon" />
              <span>Click a station dot to navigate pathway</span>
            </div>
          </div>

          {/* Metro Line Track and Stations */}
          <div className="metro-line-card" role="tablist" aria-label="AWS Landmark Pathway Stations">
            {/* The Physical Railway / Track Line */}
            <div className="metro-track-rail">
              <div 
                className="metro-track-progress" 
                style={{ 
                  width: `${(activeStationIndex / (PATHWAY_STATIONS.length - 1)) * 100}%`,
                  background: `linear-gradient(90deg, #FF9900, ${currentStation.lineColor})`
                }} 
              />
            </div>

            {/* Individual Stations along the Line */}
            {PATHWAY_STATIONS.map((station, index) => {
              const isActive = index === activeStationIndex;
              return (
                <div
                  key={station.id}
                  className={`metro-line-point ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveStationIndex(index)}
                  role="tab"
                  tabIndex={0}
                  aria-selected={isActive}
                  aria-label={`Station ${station.number}: ${station.fullName}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveStationIndex(index);
                    }
                  }}
                  style={{ '--station-color': station.lineColor }}
                >
                  {/* Clean number inside station node circle */}
                  <span className="station-dot-number">{station.number}</span>

                  {/* Station Name Capsule (ONLY visible when active or touched/hovered) */}
                  <div className="station-active-capsule">
                    <span className="capsule-num">{station.number}</span>
                    <span className="capsule-divider">·</span>
                    <span className="capsule-name">{station.shortName}</span>
                    <span className="capsule-arrow" />
                  </div>

                  {/* Marker Pin Pulse */}
                  <div className="station-pin-marker" style={{ backgroundColor: station.lineColor }}>
                    <span className="pin-pulse-core" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Station Information Board (Popup / Details HUD) */}
          <div 
            className="metro-line-information"
            style={{ '--theme-accent': currentStation.lineColor }}
          >
            {/* Terminal Window Header */}
            <div className="metro-info-header">
              <div className="metro-info-station-badge">
                <span className="info-station-pill" style={{ borderColor: currentStation.lineColor, color: currentStation.lineColor }}>
                  STATION {currentStation.number}
                </span>
                <span className={`info-status-pill ${currentStation.statusType}`}>
                  {currentStation.status === 'Completed' && <CheckCircle2 size={12} />}
                  {currentStation.statusType === 'active' && <Clock size={12} />}
                  {currentStation.status}
                </span>
                <span className="info-tag-pill">{currentStation.tag}</span>
              </div>

              {/* Station Step Controls */}
              <div className="metro-step-controls">
                <button 
                  className="step-btn" 
                  onClick={handlePrevStation}
                  aria-label="Previous Station"
                  title="Previous Station"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="step-count">
                  0{activeStationIndex + 1} / 0{PATHWAY_STATIONS.length}
                </span>
                <button 
                  className="step-btn" 
                  onClick={handleNextStation}
                  aria-label="Next Station"
                  title="Next Station"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Information Body */}
            <div className="metro-info-body">
              <div className="metro-info-text-col">
                <div className="metro-cmd-prompt">
                  <span className="prompt-sym">$</span>
                  <span className="prompt-cmd">aws sbg pathway --station={currentStation.id}</span>
                </div>

                <h3 className="metro-station-title">
                  {currentStation.fullName}
                </h3>
                <h4 className="metro-station-subtitle">
                  {currentStation.subtitle}
                </h4>

                <p className="metro-station-desc">
                  {currentStation.description}
                </p>

                {/* Highlights Pill Badges */}
                <div className="metro-highlights-list">
                  {currentStation.highlights.map((h, i) => (
                    <span key={i} className="highlight-tag">
                      <Sparkles size={11} className="tag-sparkle" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Meta Details Box */}
              <div className="metro-meta-card">
                <div className="meta-card-header">
                  <Layers size={14} />
                  <span>STATION MANIFEST</span>
                </div>

                <div className="meta-row">
                  <Calendar size={14} className="meta-icon" />
                  <div className="meta-content">
                    <span className="meta-label">TIMELINE</span>
                    <span className="meta-val">{currentStation.date}</span>
                    {currentStation.time && <span className="meta-subval">{currentStation.time}</span>}
                  </div>
                </div>

                <div className="meta-row">
                  <MapPin size={14} className="meta-icon" />
                  <div className="meta-content">
                    <span className="meta-label">VENUE / LOCATION</span>
                    <span className="meta-val">{currentStation.venue}</span>
                  </div>
                </div>

                <div className="meta-row highlight-speaker">
                  <UserCheck size={14} className="meta-icon" />
                  <div className="meta-content">
                    <span className="meta-label">KEY SPEAKER / MENTORS</span>
                    <span className="meta-val speaker-title">{currentStation.speaker}</span>
                    <span className="meta-subval speaker-desc">{currentStation.speakerRole}</span>
                  </div>
                </div>

                {onOpenJoinModal && (
                  <button 
                    className="metro-join-btn"
                    onClick={onOpenJoinModal}
                    style={{ '--btn-accent': currentStation.lineColor }}
                  >
                    <span>Join This Station</span>
                    <ArrowRight size={14} />
                  </button>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default PathwaySection;
