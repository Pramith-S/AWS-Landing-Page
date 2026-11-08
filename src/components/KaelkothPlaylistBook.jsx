import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Calendar, 
  MapPin, 
  UserCheck, 
  Sparkles, 
  ArrowRight
} from 'lucide-react';
import './KaelkothPlaylistBook.css';

// Crisp vector AWS Logo for the spinning CD center & headers
const AwsBookLogo = ({ className = '' }) => (
  <svg
    viewBox="0 0 640 512"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fill="#FFFFFF"
      d="M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42z"
    />
    <path
      fill="#FF9900"
      d="M578.81 375.59c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02zM538.61 408.88c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38z"
    />
  </svg>
);

// Pathway Milestones with professional matching website theme colors:
// Gold (AWS), Green (DevOps), Violet (AI/Quest), Red (Hackathons), Cyan (Community), Royal Purple (Finale)
const KAELKOTH_EVENTS = [
  {
    id: 'station-1',
    num: 'I.',
    title: 'Inauguration & AWS Foundations',
    artist: 'Ms. Omshree Butani',
    duration: '03:42',
    durationSec: 222,
    subtitle: 'What Even is AWS? · The Grand Kickoff',
    timeline: '29 September 2026 · 2:00 PM IST',
    venue: 'Sem Hall 1, JSSATEB',
    speaker: 'Ms. Omshree Butani',
    speakerRole: 'Senior FinOps Analyst @ Cimpress · AWS Golden Jacket Holder · AWS Community Builder',
    description: 'The historic launch of AWS Student Builder Group at JSSATEB! Ms. Omshree Butani walked builders through cloud fundamentals, breaking down core AWS building blocks in an inspiring live workshop.',
    highlights: ['Cloud Fundamentals', 'Demystifying AWS', 'FinOps & Architecture', 'Auditorium Kickoff'],
    tag: 'INAUGURAL EVENT',
    themeColor: '#D97706', // AWS Gold / Amber
    themeAccent: '#B45309',
    badgeBg: 'rgba(217, 119, 6, 0.14)',
    badgeBorder: 'rgba(217, 119, 6, 0.45)',
    btnGradient: 'linear-gradient(135deg, #B45309, #78350F)'
  },
  {
    id: 'station-2',
    num: 'II.',
    title: 'AWS Cloud Practitioner Lab',
    artist: 'Ms. Abhinaya SV',
    duration: '04:12',
    durationSec: 252,
    subtitle: 'Hands-on Console & Cloud Practitioner Essentials',
    timeline: '16 October 2026 · Online Mode',
    venue: 'Online / Virtual Session',
    speaker: 'Ms. Abhinaya SV',
    speakerRole: 'AWS Cloud Mentor & Technical Speaker',
    description: 'Comprehensive virtual hands-on lab conducted on 16th October by Ms. Abhinaya SV. Builders engaged in live console walkthroughs covering core AWS cloud services, architectural patterns, and practical prep for the AWS Certified Cloud Practitioner (CLF-C02).',
    highlights: ['Online Hands-on Lab', 'Live Console Walkthroughs', 'CLF-C02 Prep', 'Core Cloud Architecture'],
    tag: 'HANDS-ON LAB',
    themeColor: '#059669', // DevOps Emerald / Green
    themeAccent: '#047857',
    badgeBg: 'rgba(5, 150, 105, 0.14)',
    badgeBorder: 'rgba(5, 150, 105, 0.45)',
    btnGradient: 'linear-gradient(135deg, #047857, #064E3B)'
  },
  {
    id: 'station-3',
    num: 'III.',
    title: 'AWS Cloud Gamified Quest Event',
    artist: 'AWS Cloud Quest Arena',
    duration: '02:58',
    durationSec: 178,
    subtitle: 'Competitive 3D Cloud Challenge & RPG Tournament',
    timeline: 'Upcoming Season · Competition Track',
    venue: 'Virtual Cloud Arena',
    speaker: 'AWS Cloud Quest Arena',
    speakerRole: 'Gamified Builder Challenge',
    description: 'An adrenaline-filled, interactive 3D RPG cloud tournament powered by AWS Cloud Quest! Solve real-world city challenges, deploy live cloud infrastructure, and battle for top ranks on the live leaderboard.',
    highlights: ['3D RPG Simulation', 'Live Infrastructure Scoring', 'Digital Badges', 'Exclusive Swag & Prizes'],
    tag: 'GAMIFIED EVENT',
    themeColor: '#7C3AED', // Electric Violet / Purple
    themeAccent: '#6D28D9',
    badgeBg: 'rgba(124, 58, 237, 0.14)',
    badgeBorder: 'rgba(124, 58, 237, 0.45)',
    btnGradient: 'linear-gradient(135deg, #6D28D9, #4C1D95)'
  },
  {
    id: 'station-4',
    num: 'IV.',
    title: 'Cloud Hackathons & Buildathons',
    artist: 'Builder Mentors & Industry Leads',
    duration: '05:01',
    durationSec: 301,
    subtitle: '24-Hour Production-Grade Solution Sprint',
    timeline: 'To Be Announced · 24-Hour Sprint',
    venue: 'JSSATEB Main Campus',
    speaker: 'Builder Mentors & Industry Leads',
    speakerRole: 'Architect Mentorship & Jury',
    description: 'High-octane 24-hour sprint to architect, build, and deploy serverless, cloud-native, and Generative AI applications using AWS services. Includes mentor guidance, cloud credits, and judging by industry veterans.',
    highlights: ['Serverless & GenAI Track', 'AWS Cloud Credits', 'Jury Evaluation', 'Incubation & Awards'],
    tag: 'HACKATHONS',
    themeColor: '#DC2626', // Crimson / Coral Red
    themeAccent: '#B91C1C',
    badgeBg: 'rgba(220, 38, 38, 0.14)',
    badgeBorder: 'rgba(220, 38, 38, 0.45)',
    btnGradient: 'linear-gradient(135deg, #B91C1C, #7F1D1D)'
  },
  {
    id: 'station-5',
    num: 'V.',
    title: 'Meetups, Community Events & Grand Summit',
    artist: 'AWS Community Leaders & Alumni',
    duration: '03:36',
    durationSec: 216,
    subtitle: 'Knowledge Sharing, Networking & Project Demos',
    timeline: 'Ongoing Series & Grand Finale · Monthly Sessions',
    venue: 'Campus Auditoriums & Tech Spaces',
    speaker: 'AWS Community Leaders & Alumni',
    speakerRole: 'AWS User Group & Tech Ecosystem',
    description: 'Open-floor technical meetups, project showcases, cloud architect tech talks, and our grand annual celebration bringing together builders, alumni, and industry leaders.',
    highlights: ['Architect Tech Talks', 'Lightning Project Demos', 'Open Networking', 'Global AWS Community'],
    tag: 'COMMUNITY HUB',
    themeColor: '#0284C7', // Ocean Cyan / Sky Blue
    themeAccent: '#0369A1',
    badgeBg: 'rgba(2, 132, 199, 0.14)',
    badgeBorder: 'rgba(2, 132, 199, 0.45)',
    btnGradient: 'linear-gradient(135deg, #0369A1, #0C4A6E)'
  },
  {
    id: 'station-6',
    num: 'VI.',
    title: 'AWS SBG Annual Horizon & Cloud Celebration',
    artist: 'Core Team Leads & Community Champions',
    duration: '04:20',
    durationSec: 260,
    subtitle: 'Celebration of Builders, Project Demos & Leadership Transition',
    timeline: 'Annual Milestone Ceremony · JSSATEB Campus',
    venue: 'JSSATEB Main Auditorium & Live Stream',
    speaker: 'Faculty Mentors, Core Leads & Alumni',
    speakerRole: 'AWS Student Builder Group Council',
    description: 'The crowning annual celebration recognizing certified student builders, top hackathon teams, and welcoming the incoming chapter leadership with grand honors.',
    highlights: ['Builder Recognition', 'Certification Honors', 'Annual Keynote', 'Leadership Handover'],
    tag: 'GRAND FINALE',
    themeColor: '#9333EA', // Royal Purple / Gold
    themeAccent: '#7C3AED',
    badgeBg: 'rgba(147, 51, 234, 0.14)',
    badgeBorder: 'rgba(147, 51, 234, 0.45)',
    btnGradient: 'linear-gradient(135deg, #7C3AED, #9333EA)'
  }
];

const KaelkothPlaylistBook = ({ onOpenJoinModal }) => {
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const [expandedTrackId, setExpandedTrackId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTimeSec, setCurrentTimeSec] = useState(0);
  const [isLooping, setIsLooping] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  const currentEvent = KAELKOTH_EVENTS[activeTrackIndex];

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const selectTrack = (index) => {
    setActiveTrackIndex(index);
    setCurrentTimeSec(0);
    if (!isPlaying) {
      setIsPlaying(true);
    }
  };

  // Clicking anywhere on track 1..6 selects it AND toggles expansion
  const handleTrackRowClick = (idx, eventId) => {
    selectTrack(idx);
    setExpandedTrackId((prev) => (prev === eventId ? null : eventId));
  };

  const handleNext = () => {
    let nextIdx;
    if (isShuffling) {
      nextIdx = Math.floor(Math.random() * KAELKOTH_EVENTS.length);
    } else {
      nextIdx = (activeTrackIndex + 1) % KAELKOTH_EVENTS.length;
    }
    selectTrack(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (activeTrackIndex - 1 + KAELKOTH_EVENTS.length) % KAELKOTH_EVENTS.length;
    selectTrack(prevIdx);
  };

  // Timer loop when playing
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTimeSec((prev) => {
          if (prev >= currentEvent.durationSec) {
            if (isLooping) {
              return 0;
            }
            handleNext();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeTrackIndex, isLooping, isShuffling]);

  const progressPercent = Math.min(100, (currentTimeSec / currentEvent.durationSec) * 100);

  return (
    <div className="kktmusic-outer-wrapper">
      
      {/* Main Kaelkoth Book Component matching exact reference image */}
      <div className="kktmusic">
        <div className="kktmusic-pages">

          {/* =================================================================
              LEFT PAGE: AWS SBG EDITION & SPINNING CD
              ================================================================= */}
          <div className="kktmusic-left">
            
            {/* Top Title: Updated to AWS SBG EDITION, SONGS FROM KAELKOTH removed */}
            <div className="kktmusic-left-title">
              <h2>AWS SBG<br />EDITION</h2>
            </div>

            {/* Baroque Golden Frame with Spinning Disc & AWS Smile */}
            <div className="kktmusic-disc">
              <div 
                className={`kktmusic-cd ${isPlaying ? 'spinning' : 'paused'}`}
                title={isPlaying ? "Click to Pause" : "Click to Play"}
                onClick={togglePlay}
              >
                {/* Official CD artwork from Kaelkoth */}
                <img src="https://i.imgur.com/OONeop0.png" alt="Playlist cover" />
                
                {/* Center hole with official AWS Smile Logo overlay */}
                <div className="kktmusic-hole">
                  <AwsBookLogo className="kktmusic-aws-inner-logo" />
                </div>
              </div>
            </div>

            {/* Now Playing Bar with Working Controls */}
            <div className="kktmusic-nowplaying">
              <div className="kktmusic-playing">
                <span>PLAYING NOW:</span>
                <b>{currentEvent.title}</b>
              </div>

              {/* Player Progress Scrubber */}
              <div className="kktmusic-progress-bar-wrap">
                <div className="kktmusic-progress-line">
                  <div 
                    className="kktmusic-progress-fill" 
                    style={{ width: `${progressPercent}%` }} 
                  />
                  <div 
                    className="kktmusic-progress-dot" 
                    style={{ left: `${progressPercent}%` }} 
                  />
                </div>
              </div>

              {/* Visual Controls Sprite Background */}
              <div className="kktmusic-controls" />

              {/* Working Clickable Buttons Layer directly over sprite icons */}
              <div className="kktmusic-controls-interactive-layer">
                {/* Repeat / Loop */}
                <button 
                  type="button"
                  className={`kkt-ctrl-hitbox hitbox-loop ${isLooping ? 'active-loop' : ''}`}
                  onClick={() => setIsLooping(!isLooping)}
                  title={isLooping ? "Loop On" : "Loop Off"}
                  aria-label="Loop toggle"
                />

                {/* Previous Track */}
                <button 
                  type="button"
                  className="kkt-ctrl-hitbox hitbox-prev"
                  onClick={handlePrev}
                  title="Previous Milestone"
                  aria-label="Previous Track"
                />

                {/* Play / Pause Toggle */}
                <button 
                  type="button"
                  className="kkt-ctrl-hitbox hitbox-play"
                  onClick={togglePlay}
                  title={isPlaying ? "Pause" : "Play"}
                  aria-label={isPlaying ? "Pause" : "Play"}
                />

                {/* Next Track */}
                <button 
                  type="button"
                  className="kkt-ctrl-hitbox hitbox-next"
                  onClick={handleNext}
                  title="Next Milestone"
                  aria-label="Next Track"
                />

                {/* Shuffle */}
                <button 
                  type="button"
                  className={`kkt-ctrl-hitbox hitbox-shuffle ${isShuffling ? 'active-shuffle' : ''}`}
                  onClick={() => setIsShuffling(!isShuffling)}
                  title={isShuffling ? "Shuffle On" : "Shuffle Off"}
                  aria-label="Shuffle toggle"
                />
              </div>

            </div>

            {/* Left Page Footer */}
            <div className="kktmusic-left-footer">
              <span>MELODIAS DE AWS STUDENT BUILDER GROUP</span>
              <p>JSSATEB Chapter · Community Chronicles</p>
              <i>✦ Edition I · Official Landmark Grimoire ✦</i>
            </div>

          </div>

          {/* =================================================================
              RIGHT PAGE: VOLUME I & EXPANDABLE MILESTONE TRACKLIST
              ================================================================= */}
          <div className="kktmusic-right">
            
            {/* Header: VOLUME I only */}
            <div className="kktmusic-right-header">
              <span>VOLUME I</span>
              <div className="kktmusic-divider">✦</div>
            </div>

            {/* Tracklist: Clicking anywhere on 1..6 expands details */}
            <div className="kktmusic-tracks" role="list">
              {KAELKOTH_EVENTS.map((event, idx) => {
                const isActive = idx === activeTrackIndex;
                const isExpanded = expandedTrackId === event.id;

                return (
                  <div 
                    key={event.id}
                    className={`kktmusic-track-item ${isActive ? 'active-playing-track' : ''} ${isExpanded ? 'is-expanded' : ''}`}
                    style={{
                      '--event-theme-color': event.themeColor,
                      '--event-theme-accent': event.themeAccent,
                      '--event-btn-gradient': event.btnGradient
                    }}
                  >
                    {/* Track Header Bar (Clicking anywhere expands & selects) */}
                    <div 
                      className="kktmusic-track"
                      onClick={() => handleTrackRowClick(idx, event.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handleTrackRowClick(idx, event.id);
                        }
                      }}
                      aria-expanded={isExpanded}
                      aria-label={`${event.title} by ${event.artist}`}
                    >
                      {/* Roman Numeral */}
                      <span 
                        className="kktmusic-number"
                        style={{ color: isActive ? event.themeColor : undefined }}
                      >
                        {event.num}
                      </span>

                      {/* Song/Event Title & Artist */}
                      <div className="kktmusic-song">
                        <b style={{ color: isActive ? event.themeColor : undefined }}>
                          {event.title}
                        </b>
                        <small>{event.artist}</small>
                      </div>

                      {/* Duration */}
                      <span className="kktmusic-duration">{event.duration}</span>

                      {/* Expand Arrow Mark */}
                      <button 
                        type="button"
                        className={`kktmusic-expand-arrow-btn ${isExpanded ? 'rotated' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTrackRowClick(idx, event.id);
                        }}
                        title={isExpanded ? "Collapse Event Details" : "Expand Event Details"}
                        aria-label="Toggle details"
                      >
                        {isExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                      </button>
                    </div>

                    {/* Expandable Event Details Card (High-Contrast, Crisp Typography, Theme Matched) */}
                    {isExpanded && (
                      <div 
                        className="kktmusic-event-details-card"
                        style={{
                          borderLeftColor: event.themeColor
                        }}
                      >
                        
                        {/* Subtitle with Theme Accent */}
                        <div 
                          className="kkt-event-subtitle"
                          style={{ color: event.themeColor }}
                        >
                          {event.subtitle}
                        </div>

                        {/* Meta Rows */}
                        <div className="kkt-event-meta-grid">
                          <div className="kkt-meta-item">
                            <span className="kkt-meta-label">
                              <Calendar size={11} className="kkt-meta-icon" style={{ color: event.themeColor }} />
                              TIMELINE
                            </span>
                            <span className="kkt-meta-value">{event.timeline}</span>
                          </div>

                          <div className="kkt-meta-item">
                            <span className="kkt-meta-label">
                              <MapPin size={11} className="kkt-meta-icon" style={{ color: event.themeColor }} />
                              VENUE
                            </span>
                            <span className="kkt-meta-value">{event.venue}</span>
                          </div>

                          <div className="kkt-meta-item speaker-highlight">
                            <span className="kkt-meta-label">
                              <UserCheck size={11} className="kkt-meta-icon" style={{ color: event.themeColor }} />
                              KEY SPEAKER / MENTOR
                            </span>
                            <span 
                              className="kkt-meta-value speaker-name"
                              style={{ color: event.themeColor }}
                            >
                              {event.speaker}
                            </span>
                            <span className="kkt-meta-sub">{event.speakerRole}</span>
                          </div>
                        </div>

                        {/* Description: High-contrast, sharp and readable */}
                        <p className="kkt-event-description">
                          {event.description}
                        </p>

                        {/* Highlights Pill Badges with Station Theme Colors */}
                        <div className="kkt-event-tags-row">
                          {event.highlights.map((h, hIdx) => (
                            <span 
                              key={hIdx} 
                              className="kkt-event-tag"
                              style={{
                                background: event.badgeBg,
                                borderColor: event.badgeBorder,
                                color: event.themeColor
                              }}
                            >
                              <Sparkles size={9} className="kkt-tag-sparkle" style={{ color: event.themeColor }} />
                              {h}
                            </span>
                          ))}
                        </div>

                        {/* Join Station Action Button */}
                        {onOpenJoinModal && (
                          <button 
                            type="button"
                            className="kkt-event-join-action"
                            style={{
                              background: event.btnGradient
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenJoinModal();
                            }}
                          >
                            <span>Join This Station</span>
                            <ArrowRight size={12} />
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default KaelkothPlaylistBook;
