import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Calendar, Clock, MapPin, UserCheck, ArrowUpRight, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import StrokeText from './StrokeText';
import './EventsSection.css';

const communityImg = '/images/events/Community Events.png';
const hackathonsImg = '/images/events/Hackathons.png';
const workshopsImg = '/images/events/Workshops.png';

const EVENTS_DATA = [
  {
    id: 'event-1',
    title: 'Coming Soon',
    category: 'Upcoming',
    tag: 'WORKSHOPS',
    date: 'To Be Announced',
    time: 'Stay Tuned',
    location: 'JSSATEB - Auditorium',
    speaker: 'AWS Student Builder Group',
    description: 'Stay tuned in!',
    ctaText: 'Get Notified',
    accentColor: '#7C3AED',
    image: workshopsImg
  },
  {
    id: 'event-2',
    title: 'Coming Soon',
    category: 'Upcoming',
    tag: 'HACKATHONS',
    date: 'To Be Announced',
    time: 'Stay Tuned',
    location: 'JSSATEB - Library',
    speaker: 'AWS Student Builder Group',
    description: 'Stay tuned in!',
    ctaText: 'Get Notified',
    accentColor: '#10B981',
    image: hackathonsImg
  },
  {
    id: 'event-3',
    title: 'Coming Soon',
    category: 'Upcoming',
    tag: 'COMMUNITY EVENTS',
    date: 'To Be Announced',
    time: 'Stay Tuned',
    location: 'JSSATEB Campus',
    speaker: 'AWS Student Builder Group',
    description: 'Stay tuned in!',
    ctaText: 'Get Notified',
    accentColor: '#EC4899',
    image: communityImg
  }
];

const AUTOPLAY_DELAY = 4500;

const EventsSection = ({ onOpenJoinModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('All');
  const isAnimatingRef = useRef(false);

  const containerRef = useRef(null);
  const imagesContainerRef = useRef(null);
  const titleContainerRef = useRef(null);
  const autoPlayTimerRef = useRef(null);

  const filteredEvents = useMemo(() => {
    if (activeTab === 'All') return EVENTS_DATA;
    return EVENTS_DATA.filter(e => e.category === activeTab);
  }, [activeTab]);

  const total = filteredEvents.length;
  const currentEvent = filteredEvents[currentIndex % total] || filteredEvents[0];

  const mod = useCallback((n, max) => {
    return ((n % max) + max) % max;
  }, []);

  // Calculate 3D slide properties matching GSAP layout calculation
  const getSlideProps = useCallback((step, containerHeight) => {
    const h = containerHeight || 420;
    const absStep = Math.abs(step);
    const positions = [
      { x: -0.32, y: -0.85, rot: -25, s: 1.25, b: 12, o: 0 },
      { x: -0.15, y: -0.45, rot: -12, s: 1.1, b: 6, o: 0.6 },
      { x: 0, y: 0, rot: 0, s: 1, b: 0, o: 1 },
      { x: -0.05, y: 0.45, rot: 12, s: 0.8, b: 5, o: 0.6 },
      { x: -0.1, y: 0.85, rot: 25, s: 0.6, b: 12, o: 0 }
    ];
    const idx = Math.max(0, Math.min(4, step + 2));
    const p = positions[idx];

    return {
      x: p.x * h,
      y: p.y * h,
      rotation: p.rot,
      scale: p.s,
      blur: p.b,
      opacity: p.o,
      zIndex: absStep === 0 ? 4 : absStep === 1 ? 2 : 1
    };
  }, []);

  // Position slide element via GSAP
  const positionSlide = useCallback((slideEl, step) => {
    if (!imagesContainerRef.current) return;
    const h = imagesContainerRef.current.offsetHeight || 420;
    const props = getSlideProps(step, h);

    gsap.set(slideEl, {
      xPercent: -50,
      yPercent: -50,
      x: props.x,
      y: props.y,
      rotation: props.rotation,
      scale: props.scale,
      opacity: props.opacity,
      filter: `blur(${props.blur}px)`,
      zIndex: props.zIndex
    });
  }, [getSlideProps]);

  // Navigate carousel (next / prev)
  const go = useCallback((direction) => {
    if (isAnimatingRef.current || total === 0) return;
    isAnimatingRef.current = true;

    const nextIdx = direction === 'next' ? mod(currentIndex + 1, total) : mod(currentIndex - 1, total);
    const nextEvent = filteredEvents[nextIdx];

    const imagesEl = imagesContainerRef.current;
    if (!imagesEl) {
      setCurrentIndex(nextIdx);
      isAnimatingRef.current = false;
      return;
    }

    const h = imagesEl.offsetHeight || 420;
    const shift = direction === 'next' ? -1 : 1;
    const enterStep = direction === 'next' ? 2 : -2;

    const enterEventIdx = direction === 'next' ? mod(currentIndex + 2, total) : mod(currentIndex - 2, total);
    const enterEvent = filteredEvents[enterEventIdx] || nextEvent;

    const newSlide = document.createElement('div');
    newSlide.className = 'events-slider__slide';
    newSlide.setAttribute('data-step', enterStep);
    newSlide.innerHTML = `
      <div class="events-card-poster">
        <img src="${enterEvent.image}" alt="${enterEvent.tag}" class="events-slide-img" />
        <div class="poster-overlay"></div>
        <div class="poster-header-tags">
          <span class="event-tag-badge ${enterEvent.tag.toLowerCase().replace(/\s+/g, '-')}">${enterEvent.tag}</span>
        </div>
      </div>
    `;

    imagesEl.appendChild(newSlide);
    positionSlide(newSlide, enterStep);

    const existingSlides = Array.from(imagesEl.querySelectorAll('.events-slider__slide'));
    const slideItems = existingSlides.map(el => {
      const currentStep = parseInt(el.getAttribute('data-step') || '0', 10);
      return { el, step: currentStep };
    });

    slideItems.forEach(s => {
      s.step += shift;
      s.el.setAttribute('data-step', s.step);
    });

    const masterTl = gsap.timeline({
      onComplete: () => {
        slideItems.forEach(s => {
          if (Math.abs(s.step) >= 2 && s.el.parentNode === imagesEl) {
            imagesEl.removeChild(s.el);
          }
        });
        setCurrentIndex(nextIdx);
        isAnimatingRef.current = false;
      }
    });

    if (containerRef.current) {
      masterTl.to(containerRef.current, {
        '--active-accent': nextEvent.accentColor,
        duration: 1.0,
        ease: 'power2.inOut'
      }, 0);
    }

    slideItems.forEach(s => {
      const props = getSlideProps(s.step, h);
      s.el.style.zIndex = props.zIndex;

      masterTl.to(s.el, {
        x: props.x,
        y: props.y,
        rotation: props.rotation,
        scale: props.scale,
        opacity: props.opacity,
        filter: `blur(${props.blur}px)`,
        duration: 1.0,
        ease: 'power3.inOut'
      }, 0);
    });
  }, [currentIndex, total, filteredEvents, mod, positionSlide, getSlideProps]);

  const resetAutoPlay = useCallback(() => {
    if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    autoPlayTimerRef.current = setInterval(() => {
      if (!isAnimatingRef.current) {
        go('next');
      }
    }, AUTOPLAY_DELAY);
  }, [go]);

  const buildCarousel = useCallback(() => {
    const imagesEl = imagesContainerRef.current;
    if (!imagesEl || total === 0) return;

    imagesEl.innerHTML = '';
    for (let step = -1; step <= 1; step++) {
      const idx = mod(currentIndex + step, total);
      const ev = filteredEvents[idx];

      const slide = document.createElement('div');
      slide.className = 'events-slider__slide';
      slide.setAttribute('data-step', step);
      slide.innerHTML = `
        <div class="events-card-poster">
          <img src="${ev.image}" alt="${ev.tag}" class="events-slide-img" />
          <div class="poster-overlay"></div>
          <div class="poster-header-tags">
            <span class="event-tag-badge ${ev.tag.toLowerCase().replace(/\s+/g, '-')}">${ev.tag}</span>
          </div>
        </div>
      `;
      imagesEl.appendChild(slide);
      positionSlide(slide, step);
    }
  }, [currentIndex, total, filteredEvents, mod, positionSlide]);

  useEffect(() => {
    buildCarousel();
  }, [activeTab, buildCarousel]);

  useEffect(() => {
    resetAutoPlay();
    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [resetAutoPlay]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  return (
    <section id="events" className="section-padding events-section" ref={containerRef}>
      <div className="container">
        <div className="events-split-layout">

          {/* Left Column: Heading, Subtitle & Terminal Window Event Card */}
          <div className="events-left-content">
            <div className="events-header-box">
              <div className="section-badge">
                <Calendar size={14} />
                <span>// COMMUNITY EVENTS</span>
              </div>
              <div className="about-stroke-heading section-stroke-heading" aria-label="Events Conducted & Upcoming Sessions">
                <StrokeText
                  text="Events Conducted &"
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
                  text="Upcoming Sessions"
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
              <p className="section-subtitle">
                Join interactive hands-on cloud labs, hackathons, and architecture deep dives hosted by AWS SBG JSSATEB.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="events-filter-tabs">
              {['All', 'Upcoming', 'Past'].map((tab) => {
                const isPast = tab === 'Past';
                return (
                  <button
                    key={tab}
                    className={`filter-tab-btn ${activeTab === tab ? 'active' : ''} ${isPast ? 'dummy-btn' : ''}`}
                    onClick={() => {
                      if (!isPast) handleTabChange(tab);
                    }}
                    disabled={isPast}
                    title={isPast ? 'Past Events (Unavailable)' : undefined}
                  >
                    {tab === 'All' && <Filter size={14} />}
                    <span>{tab === 'All' ? 'All Events' : tab === 'Upcoming' ? 'Upcoming' : 'Past Events'}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Event Information Card (Terminal Window Style) */}
            <aside className="active-event-card terminal-card">
              {/* Terminal Window Header Bar */}
              <div className="terminal-header-bar">
                <div className="terminal-window-dots">
                  <span className="window-dot red"></span>
                  <span className="window-dot yellow"></span>
                  <span className="window-dot green"></span>
                </div>
                <span className="terminal-shell-label">aws-sbg-cli</span>
                <span className={`event-tag-badge ${currentEvent.tag.toLowerCase().replace(/\s+/g, '-')}`}>
                  {currentEvent.tag}
                </span>
              </div>

              <div className="terminal-body">
                <div className="terminal-cmd-line">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-cmd">event get-details --id={currentEvent.id}</span>
                </div>

                <h3 className="active-event-title" ref={titleContainerRef}>
                  {currentEvent.title}
                </h3>

                {/* Event Meta Details */}
                <div className="event-meta-list">
                  <div className="meta-item">
                    <Calendar size={15} className="meta-icon" />
                    <span>{currentEvent.date}</span>
                  </div>
                  <div className="meta-item">
                    <Clock size={15} className="meta-icon" />
                    <span>{currentEvent.time}</span>
                  </div>
                  <div className="meta-item">
                    <MapPin size={15} className="meta-icon" />
                    <span>{currentEvent.location}</span>
                  </div>
                  <div className="meta-item highlight">
                    <UserCheck size={15} className="meta-icon" />
                    <span>Host: {currentEvent.speaker}</span>
                  </div>
                </div>

                <div className="terminal-cmd-line desc-line">
                  <span className="terminal-prompt">&gt;</span>
                  <p className="active-event-desc">{currentEvent.description}</p>
                </div>

                {/* CTA & Slider Navigation Controls */}
                <div className="active-event-footer">
                  <a
                    href="https://chat.whatsapp.com/LvgZscYwBMD1lRVX79fgkh?s=cl&p=a&mlu=4"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-purple-primary event-cta"
                  >
                    <span>{currentEvent.ctaText}</span>
                    <ArrowUpRight size={16} />
                  </a>

                  {/* Carousel Navigation Arrows */}
                  <div className="slider-nav-arrows">
                    <button
                      className="nav-arrow-btn"
                      onClick={() => { go('prev'); resetAutoPlay(); }}
                      aria-label="Previous Event"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <span className="slider-counter">
                      0{currentIndex + 1} / 0{total}
                    </span>
                    <button
                      className="nav-arrow-btn"
                      onClick={() => { go('next'); resetAutoPlay(); }}
                      aria-label="Next Event"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Right Column: 3D Stacked GSAP Carousel Display */}
          <div
            className="events-right-carousel"
            onClick={() => {
              go('next');
              resetAutoPlay();
            }}
          >
            <div className="slider__images" ref={imagesContainerRef}>
              {/* Dynamic 3D Stacked Slides rendered via GSAP */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EventsSection;
