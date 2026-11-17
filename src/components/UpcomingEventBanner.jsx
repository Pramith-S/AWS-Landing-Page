import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import {
  Calendar,
  Clock,
  MapPin,
  ExternalLink,
  Sparkles,
  X,
  ArrowUpRight,
  Check
} from 'lucide-react';
import './UpcomingEventBanner.css';

const POSTER_SRC = '/images/quest-hunt-poster.png';
const REGISTRATION_URL = 'https://cloud-quest-registration-phi.vercel.app/';
const COMMAND_TEXT = 'npx upcoming-event --aws-quest-hunt';

export default function UpcomingEventBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll and listen for ESC key when modal is open
  useEffect(() => {
    if (isModalOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setIsModalOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isModalOpen]);

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard?.writeText(COMMAND_TEXT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRegisterClick = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Terminal Card positioned downside of the first page */}
      <StyledTerminalWrapper>
        <div
          className="card"
          onClick={handleRegisterClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsModalOpen(true);
            }
          }}
          title="Click to register & view event poster"
        >
          <div className="wrap">
            <div className="terminal">
              <hgroup className="head">
                <p className="title">
                  <svg
                    width="16px"
                    height="16px"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth={2}
                    stroke="currentColor"
                    fill="none"
                  >
                    <path d="M7 15L10 12L7 9M13 15H17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" />
                  </svg>
                  <span>Upcoming Event</span>
                </p>

                <button
                  className="copy_toggle"
                  type="button"
                  onClick={handleCopy}
                  title="Copy command"
                >
                  {copied ? (
                    <span className="copied-tag">
                      <Check size={13} /> Copied
                    </span>
                  ) : (
                    <svg
                      width="16px"
                      height="16px"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth={2}
                      stroke="currentColor"
                      fill="none"
                    >
                      <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                      <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                    </svg>
                  )}
                </button>
              </hgroup>

              <div className="body">
                <div className="pre">
                  <code>-&nbsp;</code>
                  <code>npx&nbsp;</code>
                  <code className="cmd" data-cmd="upcoming-event --aws-quest-hunt" />
                </div>

                <div className="terminal-footer">
                  <span className="event-date-chip">20 NOV • 1PM</span>
                  <button
                    type="button"
                    className="click-register-link"
                    onClick={handleRegisterClick}
                  >
                    <span>Click to register</span>
                    <ArrowUpRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledTerminalWrapper>

      {/* Full-Screen Poster & Registration Lightbox (Rendered via React Portal onto document.body) */}
      {isModalOpen && mounted && createPortal(
        <div
          className="event-lightbox-overlay"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="event-lightbox-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="event-lightbox-header">
              <div className="event-header-left">
                <span className="event-org-label">JSSATE-B AWS STUDENT BUILDER CENTER</span>
                <h2 className="event-header-title">AWS QUEST HUNT</h2>
              </div>
              <button
                type="button"
                className="event-close-btn"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content: Poster & Action Area */}
            <div className="event-lightbox-content">
              {/* Poster Column */}
              <div className="event-poster-container">
                <img
                  src={POSTER_SRC}
                  alt="AWS Quest Hunt Event Poster"
                  className="event-poster-img"
                />
              </div>

              {/* Event Info & Direct Registration Column */}
              <div className="event-info-container">
                <div className="event-tag-badge">
                  <Sparkles size={14} />
                  <span>SOLVE • EXPLORE • DEPLOY</span>
                </div>

                <h3 className="event-info-name">AWS Quest Hunt 2026</h3>
                <p className="event-info-desc">
                  An exciting cloud gamified arcade mission! Test your AWS cloud skills, tackle quiz quests, solve challenges, and win prizes.
                </p>

                {/* Event Schedule Details */}
                <div className="event-meta-card">
                  <div className="meta-row">
                    <Calendar size={18} className="meta-icon" />
                    <div>
                      <span className="meta-row-label">Date</span>
                      <strong className="meta-row-value">20 November</strong>
                    </div>
                  </div>

                  <div className="meta-row">
                    <Clock size={18} className="meta-icon" />
                    <div>
                      <span className="meta-row-label">Timings</span>
                      <strong className="meta-row-value">1:00 PM – 5:00 PM IST</strong>
                    </div>
                  </div>

                  <div className="meta-row">
                    <MapPin size={18} className="meta-icon" />
                    <div>
                      <span className="meta-row-label">Venue</span>
                      <strong className="meta-row-value">Sem Hall-2, JSSATEB Campus</strong>
                    </div>
                  </div>
                </div>

                {/* Direct Registration Button & Link */}
                <div className="event-actions-box">
                  <a
                    href={REGISTRATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="direct-register-btn"
                  >
                    <span>Register</span>
                    <ExternalLink size={18} />
                  </a>

                  <div className="direct-link-container">
                    <span className="direct-link-label">Direct Link:</span>
                    <a
                      href={REGISTRATION_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="direct-link-url"
                    >
                      {REGISTRATION_URL}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

const StyledTerminalWrapper = styled.div`
  width: 100%;
  max-width: 440px;
  margin-top: 1.5rem;
  z-index: 15;
  pointer-events: auto;

  .card {
    padding: 0.75rem;
    overflow: hidden;
    border: 1px solid rgba(139, 92, 246, 0.35);
    border-radius: 12px;
    background-color: rgba(24, 21, 36, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    width: 100%;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(124, 58, 237, 0.15);
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .card:hover {
    transform: translateY(-2px);
    border-color: rgba(168, 85, 247, 0.65);
    box-shadow: 0 14px 40px rgba(0, 0, 0, 0.65), 0 0 28px rgba(168, 85, 247, 0.3);
  }

  .wrap {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;
    z-index: 10;
    border: 0.5px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    overflow: hidden;
  }

  .terminal {
    display: flex;
    flex-direction: column;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      "Liberation Mono", "Courier New", monospace;
  }

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    min-height: 38px;
    padding-inline: 12px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: #1a1824;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .title {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 2.2rem;
    user-select: none;
    font-size: 0.82rem;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #cbd5e1;
  }

  .title > svg {
    height: 16px;
    width: 16px;
    margin-top: 1px;
    color: #ff9900;
  }

  .copy_toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem 0.5rem;
    border: 0.65px solid rgba(255, 255, 255, 0.15);
    margin-left: auto;
    border-radius: 6px;
    background-color: #242032;
    color: #94a3b8;
    cursor: pointer;
    font-size: 0.72rem;
    transition: all 0.2s ease;
  }

  .copy_toggle:hover {
    background-color: #312b44;
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.3);
  }

  .copy_toggle > svg {
    width: 15px;
    height: 15px;
  }

  .copied-tag {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: #00ffa3;
    font-weight: 600;
  }

  .body {
    display: flex;
    flex-direction: column;
    position: relative;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    overflow-x: auto;
    padding: 0.85rem 1rem;
    line-height: 19px;
    color: white;
    background-color: #0c0a12;
    white-space: nowrap;
    gap: 0.6rem;
  }

  .pre {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-wrap: nowrap;
    white-space: pre;
    background-color: transparent;
    overflow: hidden;
    box-sizing: border-box;
    font-size: 14.5px;
  }

  .pre code:nth-child(1) {
    color: #ff9900;
    font-weight: 700;
  }

  .pre code:nth-child(2) {
    color: #e34ba9;
    font-weight: 700;
  }

  .cmd {
    height: 19px;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    color: #38bdf8;
    font-weight: 600;
  }

  .cmd::before {
    content: attr(data-cmd);
    position: relative;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    background-color: transparent;
    animation: inputs 7s steps(32) infinite;
  }

  .cmd::after {
    content: "";
    position: relative;
    display: block;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
    border-right: 0.15em solid #00ffa3;
    animation: cursor 0.5s step-end infinite alternate, blinking 0.5s infinite;
  }

  .terminal-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    padding-top: 0.5rem;
    border-top: 1px dashed rgba(255, 255, 255, 0.1);
  }

  .event-date-chip {
    font-size: 0.72rem;
    font-weight: 700;
    color: #ff9900;
    background: rgba(255, 153, 0, 0.12);
    border: 1px solid rgba(255, 153, 0, 0.3);
    padding: 0.15rem 0.45rem;
    border-radius: 4px;
    letter-spacing: 0.04em;
  }

  .click-register-link {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    background: transparent;
    border: none;
    padding: 0;
    font-family: inherit;
    font-size: 0.8rem;
    font-weight: 700;
    color: #00ffa3;
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-color: rgba(0, 255, 163, 0.4);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .card:hover .click-register-link {
    color: #ffffff;
    text-decoration-color: #00ffa3;
  }

  @keyframes blinking {
    20%,
    80% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(0);
    }
  }

  @keyframes cursor {
    50% {
      border-right-color: transparent;
    }
  }

  @keyframes inputs {
    0%,
    100% {
      width: 0;
    }
    12%,
    88% {
      width: 280px;
      max-width: max-content;
    }
  }
`;
