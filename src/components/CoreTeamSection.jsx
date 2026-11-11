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
  GraduationCap,
  Search,
  Maximize2,
  X,
  Award
} from 'lucide-react';
import { coreTeamData } from '../data/coreTeamData';
import StrokeText from './StrokeText';
import TactileTeamTabButton from './TactileTeamTabButton';
import './CoreTeamSection.css';

const domainIcons = {
  tech: Terminal,
  events: Calendar,
  marketing: Megaphone,
  operations: Briefcase
};

// Reusable Vertical Rolling Social Icon Button (from user snippet)
const SocialRollBtn = ({ href, type, title, ariaLabel, icon: Icon, size = 14 }) => {
  const isExternal = href && href !== '#';
  return (
    <a
      href={href || '#'}
      target={isExternal ? '_blank' : '_self'}
      rel="noreferrer"
      className={`social-roll-btn ${type}-roll`}
      title={title}
      aria-label={ariaLabel}
    >
      <div className="social-roll-slot">
        <div className="social-roll-icon initial-icon">
          <Icon size={size} />
        </div>
        <div className={`social-roll-icon hover-icon ${type}-hover`}>
          <Icon size={size} />
        </div>
      </div>
    </a>
  );
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

  const [isMobileOrCoarse, setIsMobileOrCoarse] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth <= 768 || Boolean(window.matchMedia?.('(pointer: coarse)')?.matches);
  });

  useEffect(() => {
    const mq = window.matchMedia?.('(pointer: coarse)');
    const checkViewport = () => {
      setIsMobileOrCoarse(window.innerWidth <= 768 || Boolean(mq?.matches));
    };
    checkViewport();
    window.addEventListener('resize', checkViewport, { passive: true });
    mq?.addEventListener?.('change', checkViewport);
    return () => {
      window.removeEventListener('resize', checkViewport);
      mq?.removeEventListener?.('change', checkViewport);
    };
  }, []);

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
        {!isMobileOrCoarse && (
        <iframe
          src="/xenon-choir/bg.html"
          title="Xenon Choir Ambient Background"
          className="xenon-choir-iframe"
          tabIndex={-1}
          loading="lazy"
        />
        )}
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
            PRIMARY CATEGORY TABS (Teenage Engineering [EP-133 K.O. II] Style)
           ========================================================================= */}
        <div className="team-options-container">
          <div className="team-options-tabs" role="tablist" aria-label="Core Team Categories">
            <TactileTeamTabButton
              active={activeTab === 'grand-stage'}
              onClick={() => setActiveTab('grand-stage')}
              icon={Camera}
              title="COMMUNITY GRAND STAGE"
              badge="2 PHOTOS"
            />

            <TactileTeamTabButton
              active={activeTab === 'mentors'}
              onClick={() => setActiveTab('mentors')}
              icon={GraduationCap}
              title="MENTORS"
              badge="2 FACULTY"
            />

            <TactileTeamTabButton
              active={activeTab === 'lead'}
              onClick={() => setActiveTab('lead')}
              icon={Sparkles}
              title="AWS SBG LEAD"
              badge="KUMAR R SHET"
            />

            <TactileTeamTabButton
              active={activeTab === 'members'}
              onClick={() => setActiveTab('members')}
              icon={Users}
              title="TEAM MEMBERS"
              badge="4 TEAMS"
            />
          </div>
        </div>

        {/* =========================================================================
            VIEW 1: COMMUNITY GRAND STAGE (Floating Polaroid Photo Frames)
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
                <div key={photo.id} className="grand-stage-item-wrapper">
                  {/* Floating Polaroid Photo Frame */}
                  <div className="polaroid-stack stage-polaroid-stack">
                    <div className="polaroid-card stage-polaroid-card">
                      <div
                        className="polaroid-image stage-polaroid-image"
                        onClick={() => setLightboxPhoto(photo)}
                      >
                        <img
                          src={photo.src}
                          alt={photo.name}
                          className="polaroid-img"
                          loading="lazy"
                        />
                        <div className="stage-img-overlay">
                          <button
                            type="button"
                            className="stage-zoom-btn ep-btn"
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
                      </div>
                    </div>
                  </div>

                  <div className="stage-caption-box">
                    <h4 className="stage-card-title">{photo.name}</h4>
                    <p className="stage-card-caption">{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            VIEW 2: MENTORS (Floating Polaroid Frames • Rolling Social Handles)
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
                <div key={mentor.id} className="mentor-card-wrapper">
                  {/* Floating Polaroid Frame */}
                  <div className="polaroid-stack mentor-polaroid-stack">
                    <div className="polaroid-card mentor-polaroid-card">
                      <div className="polaroid-image mentor-polaroid-image">
                        <img
                          src={mentor.photo}
                          alt={mentor.name}
                          className="polaroid-img"
                          style={{ objectPosition: mentor.position || 'center 20%' }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Clean details: Name, Role, Dept, Rolling Social Handles */}
                  <div className="mentor-info-box">
                    <h4 className="mentor-name-title">{mentor.name}</h4>
                    <p className="mentor-role-title">{mentor.role}</p>
                    <p className="mentor-dept-title">{mentor.department}</p>
                    <div className="neo-dashed-divider" />

                    <div className="social-actions-row">
                      <SocialRollBtn
                        href={mentor.socials.instagram}
                        type="ig"
                        title={mentor.socials.instagram ? `${mentor.name} Instagram` : 'Instagram (add later)'}
                        ariaLabel={`${mentor.name} Instagram`}
                        icon={Instagram}
                        size={15}
                      />
                      <SocialRollBtn
                        href={mentor.socials.linkedin || 'https://www.linkedin.com'}
                        type="in"
                        title={`${mentor.name} LinkedIn`}
                        ariaLabel={`${mentor.name} LinkedIn`}
                        icon={Linkedin}
                        size={15}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            VIEW 3: AWS SBG LEAD (Clean Floating Showcase • EP-133 Action & Rolling Socials)
           ========================================================================= */}
        {activeTab === 'lead' && (
          <div className="tab-pane-fade-in" id="pane-lead">
            <div className="lead-showcase-container">
              <div className="lead-clean-card">
                {/* Photo Column with Polaroid Stack */}
                <div className="lead-photo-column">
                  <div className="polaroid-stack lead-polaroid-stack">
                    <div className="polaroid-card lead-polaroid-card">
                      <div className="polaroid-image lead-polaroid-image">
                        {coreTeamData.chapterLead.photos.map((photo, idx) => (
                          <img
                            key={photo.src}
                            src={photo.src}
                            alt={photo.alt}
                            className={`lead-carousel-img ${leadPhotoIdx === idx ? 'active' : ''}`}
                            style={{ objectPosition: photo.position || 'center 15%' }}
                            loading="lazy"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Carousel Dots */}
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

                {/* Lead Details: Name, Role, EP-133 Portfolio Button, Rolling Socials */}
                <div className="lead-info-column">
                  <span className="lead-eyebrow">// CAMPUS ARCHITECT</span>
                  <h3 className="lead-name-text">{coreTeamData.chapterLead.name}</h3>
                  <p className="lead-role-text">{coreTeamData.chapterLead.role}</p>

                  <div className="neo-dashed-divider" />

                  <div className="lead-actions-row">
                    <a
                      href={coreTeamData.chapterLead.socials.portfolio}
                      target="_blank"
                      rel="noreferrer"
                      className="lead-portfolio-btn ep-btn"
                      title="Visit Portfolio"
                    >
                      <Globe size={15} />
                      <span>Visit Portfolio</span>
                      <ExternalLink size={13} />
                    </a>

                    <div className="lead-social-cluster">
                      <SocialRollBtn
                        href={coreTeamData.chapterLead.socials.instagram}
                        type="ig"
                        title={coreTeamData.chapterLead.socials.instagram ? 'Instagram' : 'Instagram (add later)'}
                        ariaLabel="Kumar R Shet Instagram"
                        icon={Instagram}
                        size={15}
                      />
                      <SocialRollBtn
                        href={coreTeamData.chapterLead.socials.linkedin || 'https://www.linkedin.com'}
                        type="in"
                        title="Kumar R Shet LinkedIn"
                        ariaLabel="Kumar R Shet LinkedIn"
                        icon={Linkedin}
                        size={15}
                      />
                      <SocialRollBtn
                        href={coreTeamData.chapterLead.socials.github || 'https://github.com/imkumar80'}
                        type="git"
                        title="Kumar R Shet GitHub"
                        ariaLabel="Kumar R Shet GitHub"
                        icon={Github}
                        size={15}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            VIEW 4: TEAM MEMBERS (Floating Polaroid Frames • Rolling Social Handles)
           ========================================================================= */}
        {activeTab === 'members' && (
          <div className="tab-pane-fade-in" id="pane-members">
            {/* Domain Filter Sub-bar (Teenage Engineering button style) */}
            <div className="domain-toolbar">
              <div className="domain-subtabs" role="tablist" aria-label="Domain Teams">
                {coreTeamData.teams.map((t) => {
                  const Icon = domainIcons[t.id] || Users;
                  const isCur = activeDomain === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      className={`domain-subtab-btn ep-btn ${isCur ? 'active' : ''}`}
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
              className="domain-banner-card"
              style={{ '--domain-accent': currentDomainTeam.accentColor }}
            >
              <div className="banner-icon-box">
                {(() => {
                  const Icon = domainIcons[currentDomainTeam.id] || Users;
                  return <Icon size={20} />;
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

            {/* Stacked Polaroid Cards Grid (Floating Frames without outer boxes) */}
            {displayedMembers.length > 0 ? (
              <div className="neo-members-grid">
                {displayedMembers.map((member) => (
                  <div
                    key={member.id}
                    className="member-card-wrapper"
                    style={{ '--domain-accent': member.accentColor }}
                  >
                    {/* The Stacked Polaroid Box (Strictly on the Photo, like Image 2!) */}
                    <div className="polaroid-stack">
                      <div className="polaroid-card">
                        <div className="polaroid-image">
                          <img
                            src={member.photo}
                            alt={member.name}
                            className="polaroid-img"
                            style={{ objectPosition: member.position || 'center top' }}
                            loading="lazy"
                            onError={(e) => {
                              if (member.photo.endsWith('.jpg')) {
                                e.target.src = member.photo.replace('.jpg', '.png');
                              }
                            }}
                          />
                          {member.isLead && (
                            <div className="polaroid-lead-tag">
                              <Award size={10} />
                              <span>LEAD</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Member Details */}
                    <div className="member-info-box">
                      <h4 className="member-name-text">{member.name}</h4>
                      <p className="member-role-text">{member.role}</p>

                      <div className="neo-dashed-divider" />

                      {/* Rolling Social Handles on every card */}
                      <div className="member-social-row">
                        <SocialRollBtn
                          href={member.instagram}
                          type="ig"
                          title={member.instagram ? `${member.name} Instagram` : 'Instagram (add later)'}
                          ariaLabel={`${member.name} Instagram`}
                          icon={Instagram}
                          size={14}
                        />
                        <SocialRollBtn
                          href={member.linkedin || 'https://www.linkedin.com'}
                          type="in"
                          title={`${member.name} LinkedIn`}
                          ariaLabel={`${member.name} LinkedIn`}
                          icon={Linkedin}
                          size={14}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-members-found">
                <Search size={28} />
                <h4>No builders found</h4>
                <p>No members in {currentDomainTeam.name} match "{searchQuery}".</p>
                <button
                  type="button"
                  className="reset-search-btn ep-btn"
                  onClick={() => setSearchQuery('')}
                >
                  Reset Search
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Lightbox Modal for Grand Stage Photos */}
      {lightboxPhoto && (
        <div
          className="stage-lightbox-backdrop"
          onClick={() => setLightboxPhoto(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged Stage Photo"
        >
          <div className="stage-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="stage-lightbox-close"
              onClick={() => setLightboxPhoto(null)}
              aria-label="Close enlarged view"
            >
              <X size={20} />
            </button>
            <img
              src={lightboxPhoto.src}
              alt={lightboxPhoto.name}
              className="stage-lightbox-img"
            />
            <div className="stage-lightbox-caption">
              <h4>{lightboxPhoto.name}</h4>
              <p>{lightboxPhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CoreTeamSection;
