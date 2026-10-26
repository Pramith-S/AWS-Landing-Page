import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  Users,
  Terminal,
  Calendar,
  Megaphone,
  Briefcase,
  Linkedin,
  Instagram,
  Star,
  UserPlus,
  Sparkles,
  Camera,
  Globe,
  ExternalLink,
  Github,
  Mail
} from 'lucide-react';
import { coreTeamData } from '../data/coreTeamData';
import StarfieldBackground from './StarfieldBackground';
import StrokeText from './StrokeText';
import TeamTerminalCard from './TeamTerminalCard';
import './CoreTeamSection.css';

const teamIcons = {
  tech: Terminal,
  events: Calendar,
  marketing: Megaphone,
  operations: Briefcase
};

const leadPhotos = [
  {
    src: '/images/core-team/members/kumar-r-shet.jpg',
    alt: 'Kumar R Shet - AWS SBG Chapter Lead',
    position: 'center 10%'
  },
  {
    src: '/images/core-team/kumar-r-shet-stage.jpg',
    alt: 'Kumar R Shet - Inaugural Stage Address',
    position: 'center 20%'
  }
];

const StyledRadioWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem auto 1.5rem;
  width: 100%;

  .radio-input {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(8px, 1.8vw, 14px);
    background-color: #0b0b0e;
    padding: 10px 14px;
    border-radius: 12px;
    border: 1px solid rgba(139, 92, 246, 0.25);
    box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.8), 0 10px 30px rgba(0, 0, 0, 0.5);
    overflow-x: auto;
    max-width: 100%;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
  }

  .radio-input::-webkit-scrollbar {
    display: none;
  }

  .radio-input input {
    display: none;
  }

  .radio-input .label {
    width: clamp(88px, 19vw, 132px);
    height: 84px;
    background-color: #222228;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px 6px 8px;
    border-top: 1px solid #383844;
    border-left: 1px solid #282832;
    border-right: 1px solid #16161c;
    cursor: pointer;
    transition: all 0.15s linear;
    position: relative;
    z-index: 2;
    user-select: none;
  }

  .label .back-side {
    position: absolute;
    top: -10px;
    left: 0px;
    background-color: #222228;
    border-radius: 4px 4px 2px 2px;
    width: 100%;
    height: 14px;
    box-shadow:
      inset 0 5px 3px 1px rgba(0, 0, 0, 0.6),
      inset 0px -5px 2px 0px rgba(139, 92, 246, 0.2);
    transform: perspective(300px) rotateX(50deg);
    z-index: 1;
    opacity: 0;
    transition: all 0.15s linear;
  }

  .label:has(input[type="radio"]:checked) .back-side,
  .label.is-checked .back-side {
    opacity: 1;
    box-shadow:
      inset 0 5px 3px 1px rgba(0, 0, 0, 0.6),
      inset 0px -5px 2px 0px color-mix(in srgb, var(--radio-accent, #8b5cf6) 40%, transparent);
  }

  .label:has(input[type="radio"]:checked),
  .label.is-checked {
    transform: perspective(200px) rotateX(-18deg);
    transform-origin: 50% 40%;
    box-shadow: inset 0px -20px 15px 0px rgba(0, 0, 0, 0.7);
    border-top: 1px solid var(--radio-accent, #a855f7);
    margin-top: 6px;
    border-radius: 0 0 6px 6px;
    background-color: #191624;
  }

  .label .text {
    color: #64748b;
    font-size: clamp(10px, 2.2vw, 12px);
    line-height: 1.25;
    text-align: center;
    padding: 0px;
    font-weight: 800;
    font-family: var(--font-mono, monospace);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    transition: all 0.15s linear;
    text-shadow: -1px -1px 1px rgba(224, 224, 224, 0.08);
  }

  .label input[type="radio"]:checked + .text,
  .label.is-checked .text {
    color: var(--radio-accent, #a855f7);
    text-shadow:
      0px 0px 8px color-mix(in srgb, var(--radio-accent, #a855f7) 75%, transparent),
      1px 1px 2px rgba(0, 0, 0, 1);
  }

  .label .bottom-line {
    width: 100%;
    height: 4px;
    border-radius: 999px;
    background-color: #2a2a34;
    box-shadow: 0 0 3px 0px rgba(19, 19, 19, 0.8);
    border-top: 1px solid #383844;
    transition: all 0.15s linear;
  }

  .label:has(input[type="radio"]:checked) .bottom-line,
  .label.is-checked .bottom-line {
    background-color: var(--radio-accent, #a855f7);
    border-top: 1px solid var(--radio-accent, #a855f7);
    box-shadow: 0 0 10px color-mix(in srgb, var(--radio-accent, #a855f7) 85%, transparent);
  }
`;

const CoreTeamSection = () => {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0); // 0 = Community Grand Stage (first)
  const [activeDepartment, setActiveDepartment] = useState('tech'); // Default to 'tech' so it's open & visible immediately
  const [leadPhotoIdx, setLeadPhotoIdx] = useState(0);

  // Auto-switch lead photos every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setLeadPhotoIdx((prev) => (prev + 1) % leadPhotos.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const activePhoto = coreTeamData.groupPhotos[activePhotoIdx];
  const selectedTeam =
    coreTeamData.teams.find((team) => team.id === activeDepartment) || coreTeamData.teams[0];

  // Helper for initials (filters out symbols like & or /)
  const getInitials = (name) => {
    return name
      .split(/\s+/)
      .filter((w) => /^[a-zA-Z]/.test(w))
      .map((n) => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase() || 'SB';
  };

  return (
    <section id="core-team" className="section-padding core-team-section">
      {/* Animated Parallax Starfield Background */}
      <StarfieldBackground />

      <div className="container">
        {/* Section Header */}
        <div className="core-team-header">
          <div className="section-badge">
            <Users size={14} />
            <span>// MEET THE CORE TEAM</span>
          </div>

          <div className="about-stroke-heading section-stroke-heading" aria-label="Meet Our Core Team">
            <StrokeText
              text="Meet Our"
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
              text="Core Team"
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

          <p className="core-team-subtitle">
            The student architects, organizers, and creative builders powering workshops, hackathons, and cloud communities across JSSATEB.
          </p>

          {/* AWS SBG JSSATEB CHAPTER LEAD Compartment */}
          <div className="chapter-lead-compartment" id="chapter-lead">
            <div className="chapter-lead-inner">
              {/* Left Column: Portrait Card (B&W + Violet Corner Lighting + Golden Border) */}
              <div className="chapter-lead-portrait-col">
                <div className="member-card portrait-card golden-border-card chapter-lead-portrait-card">
                  <div className="golden-lead-badge">
                    <span>CHAPTER LEAD</span>
                  </div>

                  <div className="portrait-image-wrapper">
                    {leadPhotos.map((photo, idx) => (
                      <img
                        key={photo.src}
                        src={photo.src}
                        alt={photo.alt}
                        className={`member-portrait-img lead-carousel-img ${leadPhotoIdx === idx ? 'active' : ''}`}
                        style={{ objectPosition: photo.position }}
                        loading="lazy"
                      />
                    ))}
                    <div className="portrait-violet-corner-light" />
                    <div className="lead-photo-dots">
                      {leadPhotos.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          className={`lead-photo-dot ${leadPhotoIdx === idx ? 'active' : ''}`}
                          onClick={() => setLeadPhotoIdx(idx)}
                          aria-label={`Photo ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="portrait-overlay-gradient" />

                  <div className="portrait-content-overlay">
                    <div className="portrait-info-group">
                      <h4 className="member-name">Kumar R Shet</h4>
                      <p className="member-role">AWS SBG Chapter Lead</p>
                    </div>

                    <div className="member-socials-row">
                      <a
                        href="https://imkumar80.github.io/KumarShet/"
                        target="_blank"
                        rel="noreferrer"
                        className="member-social-link portfolio"
                        aria-label="Kumar R Shet Portfolio"
                        title="Portfolio Website"
                      >
                        <Globe size={15} />
                      </a>
                      <a
                        href="https://github.com/imkumar80"
                        target="_blank"
                        rel="noreferrer"
                        className="member-social-link github"
                        aria-label="Kumar R Shet GitHub"
                        title="GitHub"
                      >
                        <Github size={15} />
                      </a>
                      <a
                        href="mailto:kumarrrshet701@gmail.com"
                        className="member-social-link email"
                        aria-label="Email Kumar R Shet"
                        title="Email"
                      >
                        <Mail size={15} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Lead Bio, Details & Action Links */}
              <div className="chapter-lead-info-col">
                <div className="lead-header-meta">
                  <span className="lead-tag-badge">
                    <Sparkles size={13} />
                    <span>AWS SBG JSSATEB CHAPTER LEAD</span>
                  </span>
                  <h3 className="lead-display-name">Kumar R Shet</h3>
                  <p className="lead-subheading">
                    Campus Lead · AI Engineer & Researcher
                  </p>
                </div>

                <p className="lead-bio-text">
                  Directing the AWS Student Builder Group at JSS Academy of Technical Education Bengaluru. Driving technical excellence, community hackathons, cloud labs, and hands-on builder mentorship.
                </p>

                {/* Actions & Links Bar */}
                <div className="lead-actions-bar">
                  <a
                    href="https://imkumar80.github.io/KumarShet/"
                    target="_blank"
                    rel="noreferrer"
                    className="lead-portfolio-btn"
                  >
                    <Globe size={16} />
                    <span>Visit Portfolio</span>
                    <ExternalLink size={14} />
                  </a>
                  <a
                    href="https://github.com/imkumar80"
                    target="_blank"
                    rel="noreferrer"
                    className="lead-icon-link"
                    title="GitHub: @imkumar80"
                    aria-label="Kumar R Shet GitHub"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href="mailto:kumarrrshet701@gmail.com"
                    className="lead-icon-link"
                    title="Email: kumarrrshet701@gmail.com"
                    aria-label="Email Kumar R Shet"
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 1. Group Photos Showcase (Grand Stage First, then AWS Hand-Sign Formation Squad) */}
        <div className="group-photos-showcase">
          {/* Top Tabs */}
          <div className="photos-toolbar">
            <div className="photo-tabs">
              {coreTeamData.groupPhotos.map((photo, index) => (
                <button
                  key={photo.id}
                  className={`photo-tab-btn ${activePhotoIdx === index ? 'active' : ''}`}
                  onClick={() => setActivePhotoIdx(index)}
                >
                  <Camera size={15} />
                  <span>{photo.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Compact Photo Display Frame (Natural Vibrant Color, Made Compact) */}
          <div className="photo-display-frame-compact">
            <div className="photo-glare-effect" />
            <img
              key={activePhoto.id}
              src={activePhoto.src}
              alt={activePhoto.title}
              className="photo-img-compact photo-fade-in"
              loading="lazy"
            />
          </div>

          {/* Caption Bar */}
          <div className="photo-caption-bar">
            <div className="caption-info">
              <h3 className="caption-title">{activePhoto.title}</h3>
              <p className="caption-desc">{activePhoto.caption}</p>
            </div>
            <span className="caption-badge">
              <Sparkles size={13} />
              <span>{activePhoto.badge}</span>
            </span>
          </div>
        </div>

        {/* 2. Mechanical 3D Radio Switches Console */}
        <div className="team-compartments-container">
          <StyledRadioWrapper>
            <div className="radio-input" role="radiogroup" aria-label="Select Team Compartment">
              {coreTeamData.teams.map((team) => {
                const isChecked = activeDepartment === team.id;
                return (
                  <label
                    key={team.id}
                    className={`label ${isChecked ? 'is-checked active' : ''}`}
                    htmlFor={`team-radio-${team.id}`}
                    onClick={() => setActiveDepartment(team.id)}
                    style={{ '--radio-accent': team.accentColor }}
                  >
                    <div className="back-side" />
                    <input
                      type="radio"
                      id={`team-radio-${team.id}`}
                      name="team-radio-select"
                      checked={isChecked}
                      onChange={() => setActiveDepartment(team.id)}
                    />
                    <span className="text">{team.name}</span>
                    <span className="bottom-line" />
                  </label>
                );
              })}
            </div>
          </StyledRadioWrapper>

          {/* Selected Team Compartment (Opens after pressing) */}
          {selectedTeam && (
            <div
              key={selectedTeam.id}
              className="team-compartment open-animated"
              id={`compartment-${selectedTeam.id}`}
              style={{ '--team-accent': selectedTeam.accentColor }}
            >
              {/* Compartment Header */}
              <div className="compartment-top-bar">
                <div className="compartment-left">
                  <div
                    className="compartment-icon-bubble"
                    style={{
                      borderColor: `${selectedTeam.accentColor}55`,
                      color: selectedTeam.accentColor
                    }}
                  >
                    {(() => {
                      const IconComponent = teamIcons[selectedTeam.id] || Users;
                      return <IconComponent size={22} />;
                    })()}
                  </div>
                  <div className="compartment-heading-group">
                    <h3 className="compartment-name">{selectedTeam.name}</h3>
                    <p className="compartment-desc">{selectedTeam.description}</p>
                  </div>
                </div>
                <span
                  className="compartment-badge"
                  style={{
                    borderColor: `${selectedTeam.accentColor}40`,
                    color: selectedTeam.accentColor
                  }}
                >
                  {selectedTeam.badge}
                </span>
              </div>

              {/* Member Cards Grid */}
              <div className="members-grid">
                {selectedTeam.members.map((member) => {
                  if (member.isEmpty) {
                    return (
                      <div
                        key={member.id}
                        className="member-card empty-card"
                        style={{ '--team-accent': selectedTeam.accentColor }}
                      >
                        <div className="empty-card-inner">
                          <div className="empty-avatar-frame">
                            <UserPlus size={32} className="empty-icon" />
                          </div>
                          <div className="empty-slot-badge">OPEN SLOT</div>
                          <h4 className="member-name">{member.name}</h4>
                          <p className="member-role">{member.role}</p>
                          <span className="empty-slot-desc">Recruitment / Announcement Soon</span>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={member.id}
                      className={`member-card portrait-card ${member.hasGoldenBorder ? 'golden-border-card' : ''}`}
                      style={{ '--team-accent': selectedTeam.accentColor }}
                    >
                      {/* Golden Lead Badge if lead */}
                      {member.hasGoldenBorder && (
                        <div className="golden-lead-badge">
                          <span>LEAD</span>
                        </div>
                      )}

                      {/* Full-bleed Photo or Styled Placeholder */}
                      {member.photo ? (
                        <div className="portrait-image-wrapper">
                          <img
                            src={member.photo}
                            alt={member.name}
                            className="member-portrait-img"
                            loading="lazy"
                          />
                          {/* Violet corner lighting accent */}
                          <div className="portrait-violet-corner-light" />
                        </div>
                      ) : (
                        <div className="member-portrait-placeholder">
                          <div className="placeholder-avatar-bubble">
                            <span className="placeholder-initials">
                              {getInitials(member.name)}
                            </span>
                          </div>
                          <span className="placeholder-tag">{selectedTeam.name}</span>
                          {/* Violet corner lighting accent */}
                          <div className="portrait-violet-corner-light" />
                        </div>
                      )}

                      {/* Smooth bottom gradient fade overlay */}
                      <div className="portrait-overlay-gradient" />

                      {/* Integrated Bottom Bar */}
                      <div className="portrait-content-overlay">
                        {/* Left column: Name + Role (No stars) */}
                        <div className="portrait-info-group">
                          <h4 className="member-name">{member.name}</h4>
                          <p className="member-role">{member.role}</p>
                        </div>

                        {/* Right column: ONLY LinkedIn & Instagram */}
                        <div className="member-socials-row">
                          {member.linkedin && (
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noreferrer"
                              className="member-social-link linkedin"
                              aria-label={`${member.name} LinkedIn`}
                              title="LinkedIn"
                            >
                              <Linkedin size={15} />
                            </a>
                          )}
                          {member.instagram && (
                            <a
                              href={member.instagram}
                              target="_blank"
                              rel="noreferrer"
                              className="member-social-link instagram"
                              aria-label={`${member.name} Instagram`}
                              title="Instagram"
                            >
                              <Instagram size={15} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CoreTeamSection;
