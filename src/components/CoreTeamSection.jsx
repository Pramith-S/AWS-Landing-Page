import React, { useState, useEffect, useMemo } from 'react';
import {
  Users,
  Terminal,
  Calendar,
  Megaphone,
  Briefcase,
  Linkedin,
  Instagram,
  Sparkles,
  Camera,
  Globe,
  ExternalLink,
  Github,
  Mail,
  GraduationCap,
  Search,
  Maximize2,
  X,
  Award,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { coreTeamData } from '../data/coreTeamData';
import StrokeText from './StrokeText';
import './CoreTeamSection.css';

const domainIcons = {
  tech: Terminal,
  events: Calendar,
  marketing: Megaphone,
  operations: Briefcase
};

const domainColors = {
  tech: '#8B5CF6',
  events: '#FF9900',
  marketing: '#EC4899',
  operations: '#10B981'
};

const CoreTeamSection = () => {
  // Primary Navigation Options: 'grand-stage' | 'mentors' | 'lead' | 'members'
  const [activeTab, setActiveTab] = useState('grand-stage');

  // Domain Sub-filter in Team Members: 'tech' | 'events' | 'marketing' | 'operations' (NO 'all' option!)
  const [activeDomain, setActiveDomain] = useState('tech');
  const [searchQuery, setSearchQuery] = useState('');

  // AWS SBG Lead Photo Carousel
  const [leadPhotoIdx, setLeadPhotoIdx] = useState(0);

  // Grand Stage Lightbox Modal
  const [lightboxPhoto, setLightboxPhoto] = useState(null);

  // Auto-switch Chapter Lead photo every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setLeadPhotoIdx((prev) => (prev + 1) % coreTeamData.chapterLead.photos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Current domain team members (only the selected team, no 'all' tab!)
  const currentDomainTeam = useMemo(() => {
    return coreTeamData.teams.find((t) => t.id === activeDomain) || coreTeamData.teams[0];
  }, [activeDomain]);

  const displayedMembers = useMemo(() => {
    let list = currentDomainTeam.members.map((m) => ({
      ...m,
      domainId: currentDomainTeam.id,
      domainName: currentDomainTeam.name,
      accentColor: currentDomainTeam.accentColor
    }));

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.role.toLowerCase().includes(q)
      );
    }

    return list;
  }, [currentDomainTeam, searchQuery]);

  return (
    <section id="core-team" className="section-padding core-team-section">
      {/* Xenon Choir Plasma Ambient Background */}
      <div className="xenon-choir-bg-container" aria-hidden="true">
        <iframe
          src="/xenon-choir/bg.html"
          title="Xenon Choir Ambient Background"
          className="xenon-choir-iframe"
          tabIndex={-1}
          loading="lazy"
        />
        <div className="xenon-choir-scrim" />
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="core-team-header">
          <div className="section-badge">
            <Users size={14} />
            <span>// ARCHITECTS & COMMUNITY BUILDERS</span>
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
              fontSize={34}
              fontWeight={900}
              letterSpacing={-0.5}
              fillMode="wipe"
            />
            <StrokeText
              text="Core Team"
              trigger="scroll"
              strokeColor="#FF9900"
              fillColor="#FF9900"
              strokeWidth={1.2}
              drawDuration={1.4}
              fillDelay={0.3}
              stagger={0.03}
              fontSize={34}
              fontWeight={900}
              letterSpacing={-0.5}
              fillMode="wipe"
            />
          </div>

          <p className="core-team-subtitle">
            The student leaders, faculty mentors, and domain architects driving technical workshops, hackathons, and cloud excellence across JSSATEB.
          </p>
        </div>

        {/* =========================================================================
            PRIMARY OPTIONS TABS (Zero Long Scrolling • Clean Black Blend)
           ========================================================================= */}
        <div className="team-options-container">
          <div className="team-options-tabs" role="tablist" aria-label="Core Team Categories">
            <button
              role="tab"
              aria-selected={activeTab === 'grand-stage'}
              className={`team-opt-btn ${activeTab === 'grand-stage' ? 'active' : ''}`}
              onClick={() => setActiveTab('grand-stage')}
            >
              <Camera size={15} />
              <span className="opt-title">COMMUNITY GRAND STAGE</span>
              <span className="opt-badge">2 PHOTOS</span>
            </button>

            <button
              role="tab"
              aria-selected={activeTab === 'mentors'}
              className={`team-opt-btn ${activeTab === 'mentors' ? 'active' : ''}`}
              onClick={() => setActiveTab('mentors')}
            >
              <GraduationCap size={15} />
              <span className="opt-title">MENTORS</span>
              <span className="opt-badge">2 FACULTY</span>
            </button>

            <button
              role="tab"
              aria-selected={activeTab === 'lead'}
              className={`team-opt-btn ${activeTab === 'lead' ? 'active' : ''}`}
              onClick={() => setActiveTab('lead')}
            >
              <Sparkles size={15} />
              <span className="opt-title">AWS SBG LEAD</span>
              <span className="opt-badge">KUMAR R SHET</span>
            </button>

            <button
              role="tab"
              aria-selected={activeTab === 'members'}
              className={`team-opt-btn ${activeTab === 'members' ? 'active' : ''}`}
              onClick={() => setActiveTab('members')}
            >
              <Users size={15} />
              <span className="opt-title">TEAM MEMBERS</span>
              <span className="opt-badge">4 TEAMS</span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            VIEW 1: COMMUNITY GRAND STAGE
           ========================================================================= */}
        {activeTab === 'grand-stage' && (
          <div className="tab-pane-fade-in" id="pane-grand-stage">
            <div className="stage-hero-meta">
              <span className="stage-tag-pill">
                <Camera size={13} />
                <span>OFFICIAL AWS SBG ARCHIVES</span>
              </span>
              <h3 className="stage-hero-title">
                COMMUNITY <span className="text-gradient-amber">GRAND STAGE</span> & FORMATION
              </h3>
            </div>

            <div className="grand-stage-grid">
              {coreTeamData.groupPhotos.map((photo) => (
                <div key={photo.id} className="grand-stage-card neo-black-box">
                  <div className="stage-img-container" onClick={() => setLightboxPhoto(photo)}>
                    <img
                      src={photo.src}
                      alt={photo.name}
                      className="stage-img-element"
                      loading="lazy"
                    />
                    <div className="stage-img-overlay">
                      <button
                        type="button"
                        className="stage-zoom-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxPhoto(photo);
                        }}
                        aria-label="Enlarge Photo"
                      >
                        <Maximize2 size={16} />
                        <span>Enlarge Photo</span>
                      </button>
                    </div>
                    <span className="stage-badge-tag">{photo.badge}</span>
                  </div>

                  <div className="stage-card-body">
                    <h4 className="stage-card-title">{photo.name}</h4>
                    <p className="stage-card-caption">{photo.caption}</p>
                    <div className="neo-dashed-divider" />
                    <div className="stage-card-footer">
                      <span className="stage-stat-pill">📍 {photo.venue}</span>
                      <span className="stage-stat-pill">👥 {photo.stats}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            VIEW 2: MENTORS
           ========================================================================= */}
        {activeTab === 'mentors' && (
          <div className="tab-pane-fade-in" id="pane-mentors">
            <div className="stage-hero-meta">
              <span className="stage-tag-pill">
                <GraduationCap size={13} />
                <span>ACADEMIC LEADERSHIP & GUIDANCE</span>
              </span>
              <h3 className="stage-hero-title">
                OUR FACULTY <span className="text-gradient-amber">MENTORS</span>
              </h3>
            </div>

            <div className="mentors-grid">
              {coreTeamData.mentors.map((mentor) => (
                <div key={mentor.id} className="mentor-card neo-black-box">
                  {/* Photo Window (Original natural background intact) */}
                  <div className="mentor-img-window">
                    <img
                      src={mentor.photo}
                      alt={mentor.name}
                      className="mentor-img-element"
                      loading="lazy"
                    />
                    <span className="mentor-role-badge">{mentor.badges[0]}</span>
                  </div>

                  {/* Body Content */}
                  <div className="mentor-card-body">
                    <h4 className="neo-member-name">{mentor.name}</h4>
                    <p className="neo-member-role">{mentor.role}</p>
                    <div className="neo-dashed-divider" />

                    <p className="mentor-department-text">{mentor.department}</p>
                    <p className="mentor-institution-text">{mentor.institution}</p>
                    <p className="mentor-bio-text">{mentor.bio}</p>

                    <div className="mentor-card-footer">
                      <div className="mentor-badges-row">
                        {mentor.badges.map((b, bi) => (
                          <span key={bi} className="mentor-pill-badge">
                            {b}
                          </span>
                        ))}
                      </div>

                      <div className="neo-social-corner">
                        <a
                          href={mentor.socials.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="neo-social-btn in-btn"
                          aria-label={`${mentor.name} LinkedIn`}
                          title="LinkedIn Profile"
                        >
                          <Linkedin size={15} />
                          <span>in</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            VIEW 3: AWS SBG LEAD (KUMAR R SHET)
           ========================================================================= */}
        {activeTab === 'lead' && (
          <div className="tab-pane-fade-in" id="pane-lead">
            <div className="chapter-lead-showcase neo-black-box">
              <div className="lead-grid-layout">
                {/* Left Column: Compact Portrait Showcase with Carousel */}
                <div className="lead-visual-col">
                  <div className="lead-frame-box">
                    <div className="lead-lead-badge-pill">
                      <Sparkles size={12} />
                      <span>AWS SBG LEAD</span>
                    </div>

                    <div className="lead-carousel-wrapper">
                      {coreTeamData.chapterLead.photos.map((photo, idx) => (
                        <img
                          key={photo.src}
                          src={photo.src}
                          alt={photo.alt}
                          className={`lead-carousel-img ${leadPhotoIdx === idx ? 'active' : ''}`}
                          style={{ objectPosition: photo.position }}
                          loading="lazy"
                        />
                      ))}
                    </div>

                    <div className="lead-photo-dots">
                      {coreTeamData.chapterLead.photos.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          className={`lead-dot ${leadPhotoIdx === idx ? 'active' : ''}`}
                          onClick={() => setLeadPhotoIdx(idx)}
                          aria-label={`Photo ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="lead-visual-footer">
                    <h4 className="neo-member-name">{coreTeamData.chapterLead.name}</h4>
                    <p className="neo-member-role">{coreTeamData.chapterLead.role}</p>
                    <div className="neo-dashed-divider" />
                    <div className="lead-quick-actions">
                      <a
                        href={coreTeamData.chapterLead.socials.portfolio}
                        target="_blank"
                        rel="noreferrer"
                        className="neo-social-btn globe-btn"
                        title="Portfolio Website"
                        aria-label="Kumar R Shet Portfolio"
                      >
                        <Globe size={14} />
                      </a>
                      <a
                        href={coreTeamData.chapterLead.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        className="neo-social-btn git-btn"
                        title="GitHub"
                        aria-label="Kumar R Shet GitHub"
                      >
                        <Github size={14} />
                      </a>
                      <a
                        href={`mailto:${coreTeamData.chapterLead.socials.email}`}
                        className="neo-social-btn mail-btn"
                        title="Email"
                        aria-label="Email Kumar R Shet"
                      >
                        <Mail size={14} />
                      </a>
                      <a
                        href={coreTeamData.chapterLead.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="neo-social-btn in-btn"
                        title="LinkedIn"
                        aria-label="Kumar R Shet LinkedIn"
                      >
                        <Linkedin size={14} />
                        <span>in</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Column: Full Details, Pillars, Metrics & Actions */}
                <div className="lead-details-col">
                  <div className="lead-header-info">
                    <div className="lead-tags-row">
                      {coreTeamData.chapterLead.badges.map((b, idx) => (
                        <span key={idx} className="lead-spec-pill">
                          {b}
                        </span>
                      ))}
                    </div>

                    <h3 className="lead-hero-name">{coreTeamData.chapterLead.name}</h3>
                    <p className="lead-hero-tagline">{coreTeamData.chapterLead.tagline}</p>
                    <p className="lead-hero-dept">{coreTeamData.chapterLead.department}</p>
                  </div>

                  <p className="lead-main-bio">{coreTeamData.chapterLead.bio}</p>

                  {/* Impact Metrics Counters */}
                  <div className="lead-metrics-row">
                    {coreTeamData.chapterLead.stats.map((st, idx) => (
                      <div key={idx} className="lead-metric-box">
                        <span className="metric-val">{st.value}</span>
                        <span className="metric-lbl">{st.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Pillars */}
                  <div className="lead-pillars-section">
                    <h5 className="pillars-title">
                      <ShieldCheck size={15} />
                      <span>LEADERSHIP PILLARS</span>
                    </h5>
                    <div className="pillars-list">
                      {coreTeamData.chapterLead.pillars.map((pil, idx) => (
                        <div key={idx} className="pillar-item">
                          <ChevronRight size={13} className="pillar-icon" />
                          <span>{pil}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Primary CTA Row */}
                  <div className="lead-cta-row">
                    <a
                      href={coreTeamData.chapterLead.socials.portfolio}
                      target="_blank"
                      rel="noreferrer"
                      className="lead-primary-cta"
                    >
                      <Globe size={15} />
                      <span>Visit Portfolio</span>
                      <ExternalLink size={13} />
                    </a>
                    <a
                      href={coreTeamData.chapterLead.socials.github}
                      target="_blank"
                      rel="noreferrer"
                      className="lead-secondary-cta"
                    >
                      <Github size={15} />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={`mailto:${coreTeamData.chapterLead.socials.email}`}
                      className="lead-secondary-cta"
                    >
                      <Mail size={15} />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            VIEW 4: TEAM MEMBERS (TECH, EVENTS, MARKETING, OPERATIONAL - NO 'ALL' TAB!)
           ========================================================================= */}
        {activeTab === 'members' && (
          <div className="tab-pane-fade-in" id="pane-members">
            {/* Domain Filter Sub-bar (Only the 4 individual teams, NO 'ALL' TAB!) */}
            <div className="domain-toolbar">
              <div className="domain-subtabs" role="tablist" aria-label="Domain Teams">
                {coreTeamData.teams.map((t) => {
                  const Icon = domainIcons[t.id] || Users;
                  const isCur = activeDomain === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      className={`domain-subtab-btn ${isCur ? 'active' : ''}`}
                      onClick={() => setActiveDomain(t.id)}
                      style={{ '--domain-accent': t.accentColor }}
                    >
                      <Icon size={14} />
                      <span>{t.name.toUpperCase()}</span>
                      <span className="subtab-count">{t.members.length}</span>
                    </button>
                  );
                })}
              </div>

              {/* Instant Search Input */}
              <div className="member-search-box">
                <Search size={14} className="search-icon" />
                <input
                  type="text"
                  placeholder={`Search ${currentDomainTeam.name}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                  aria-label="Search team members"
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="clear-search-btn"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                  >
                    <X size={13} />
                  </button>
                )}
              </div>
            </div>

            {/* Active Domain Overview Banner */}
            <div
              className="domain-banner-card neo-black-box"
              style={{ '--domain-accent': currentDomainTeam.accentColor }}
            >
              <div className="banner-icon-box">
                {(() => {
                  const Icon = domainIcons[currentDomainTeam.id] || Users;
                  return <Icon size={22} />;
                })()}
              </div>
              <div className="banner-content">
                <div className="banner-header-row">
                  <h4 className="banner-title">{currentDomainTeam.name}</h4>
                  <span className="banner-badge">{currentDomainTeam.badge}</span>
                </div>
                <p className="banner-desc">{currentDomainTeam.description}</p>
              </div>
            </div>

            {/* Neo-Brutalist Compact Members Grid (Original photos, not big, fits mobile screen!) */}
            {displayedMembers.length > 0 ? (
              <div className="neo-members-grid">
                {displayedMembers.map((member) => (
                  <div
                    key={member.id}
                    className={`neo-member-card neo-black-box ${member.isLead ? 'is-team-lead' : ''}`}
                    style={{ '--member-accent': member.accentColor }}
                  >
                    {/* Team Lead Badge */}
                    {member.isLead && (
                      <div className="lead-ribbon-badge">
                        <Award size={11} />
                        <span>LEAD</span>
                      </div>
                    )}

                    {/* Framed Photo Container (Original photo with real background intact!) */}
                    <div className="neo-photo-box">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="neo-photo-img"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to png if jpg not found
                          if (member.photo.endsWith('.jpg')) {
                            e.target.src = member.photo.replace('.jpg', '.png');
                          }
                        }}
                      />
                    </div>

                    {/* Member Details */}
                    <div className="neo-card-info">
                      <h4 className="neo-member-name">{member.name}</h4>
                      <p className="neo-member-role">{member.role}</p>

                      {/* Dashed Horizontal Divider (From reference image) */}
                      <div className="neo-dashed-divider" />

                      {/* Social Actions Row with LinkedIn in corner */}
                      <div className="neo-card-footer">
                        {member.instagram ? (
                          <a
                            href={member.instagram}
                            target="_blank"
                            rel="noreferrer"
                            className="neo-social-btn ig-btn"
                            title="Instagram"
                            aria-label={`${member.name} Instagram`}
                          >
                            <Instagram size={13} />
                          </a>
                        ) : <span />}

                        <a
                          href={member.linkedin || 'https://www.linkedin.com'}
                          target="_blank"
                          rel="noreferrer"
                          className="neo-social-btn in-btn"
                          title="LinkedIn"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <Linkedin size={14} />
                          <span>in</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-members-found neo-black-box">
                <Search size={28} />
                <h4>No builders found</h4>
                <p>No members in {currentDomainTeam.name} match "{searchQuery}".</p>
                <button
                  type="button"
                  className="reset-search-btn"
                  onClick={() => setSearchQuery('')}
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* =========================================================================
          LIGHTBOX MODAL FOR GRAND STAGE HIGH-RES PHOTOS
         ========================================================================= */}
      {lightboxPhoto && (
        <div className="grand-stage-lightbox" onClick={() => setLightboxPhoto(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setLightboxPhoto(null)}
              aria-label="Close Lightbox"
            >
              <X size={18} />
            </button>
            <img
              src={lightboxPhoto.src}
              alt={lightboxPhoto.name}
              className="lightbox-full-img"
            />
            <div className="lightbox-caption">
              <h4>{lightboxPhoto.name}</h4>
              <p>{lightboxPhoto.caption}</p>
              <span className="lightbox-tag">{lightboxPhoto.badge} • {lightboxPhoto.venue}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CoreTeamSection;
