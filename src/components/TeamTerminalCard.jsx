import React, { useState } from 'react';
import styled from 'styled-components';
import { Check } from 'lucide-react';

const TeamTerminalCard = () => {
  const [copied, setCopied] = useState(false);
  const commandText = 'npx run meet-core-team';

  const handleCopy = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(commandText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <StyledWrapper>
      <div className="card">
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
                <span>Terminal</span>
              </p>
              <button
                className={`copy_toggle ${copied ? 'copied' : ''}`}
                tabIndex={0}
                type="button"
                onClick={handleCopy}
                title={copied ? "Copied to clipboard!" : "Copy command"}
                aria-label="Copy terminal command"
              >
                {copied ? (
                  <span className="copy-feedback">
                    <Check size={14} className="check-icon" />
                    <span className="copied-text">Copied</span>
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
              <pre className="pre">
                <code>-&nbsp;</code>
                <code>npx&nbsp;</code>
                <code className="cmd" data-cmd="run meet-core-team" />
              </pre>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.75rem auto 1rem;
  width: 100%;
  max-width: 440px;

  .card {
    padding: 0.85rem;
    overflow: hidden;
    border: 1px solid rgba(139, 92, 246, 0.3);
    border-radius: 14px;
    background-color: rgba(18, 15, 28, 0.75);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(124, 58, 237, 0.12);
    width: 100%;
    transition: all 0.3s ease;
  }

  .card:hover {
    border-color: rgba(168, 85, 247, 0.55);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.75), 0 0 30px rgba(139, 92, 246, 0.25);
    transform: translateY(-2px);
  }

  .wrap {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    z-index: 10;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 9px;
    overflow: hidden;
    background: #09070f;
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
    background-color: #161322;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .title {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 2.25rem;
    user-select: none;
    font-weight: 600;
    font-size: 0.85rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #94a3b8;
  }

  .title > svg {
    height: 16px;
    width: 16px;
    color: #a855f7;
  }

  .copy_toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 0.3rem 0.55rem;
    border: 1px solid rgba(139, 92, 246, 0.3);
    margin-left: auto;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.04);
    color: #94a3b8;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: inherit;
    font-size: 0.75rem;
  }

  .copy_toggle:hover {
    color: #ffffff;
    background-color: rgba(139, 92, 246, 0.18);
    border-color: rgba(168, 85, 247, 0.6);
  }

  .copy_toggle.copied {
    border-color: #10b981;
    background-color: rgba(16, 185, 129, 0.15);
    color: #34d399;
  }

  .copy-feedback {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }

  .check-icon {
    color: #34d399;
  }

  .copied-text {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .copy_toggle > svg {
    width: 16px;
    height: 16px;
  }

  .copy_toggle:active > svg > path,
  .copy_toggle:focus-within > svg > path {
    animation: clipboard-check 500ms linear forwards;
  }

  .body {
    display: flex;
    flex-direction: column;
    position: relative;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    overflow-x: auto;
    padding: 0.9rem 1.15rem;
    line-height: 20px;
    color: white;
    background-color: #07050c;
    white-space: nowrap;
    scrollbar-width: none;
  }

  .body::-webkit-scrollbar {
    display: none;
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
    font-size: 15px;
    margin: 0;
  }

  .pre code:nth-child(1) {
    color: #64748b;
    font-weight: 700;
  }

  .pre code:nth-child(2) {
    color: #a855f7;
    font-weight: 700;
  }

  .cmd {
    height: 20px;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    color: #f8fafc;
    font-weight: 600;
  }

  .cmd::before {
    content: attr(data-cmd);
    position: relative;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    background-color: transparent;
    animation: inputs 6s steps(18) infinite;
  }

  .cmd::after {
    content: "";
    position: relative;
    display: block;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
    border-right: 0.15em solid #a855f7;
    animation: cursor 0.5s step-end infinite alternate, blinking 0.5s infinite;
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
    15%,
    85% {
      width: 18.2ch;
    }
  }

  @keyframes clipboard-check {
    100% {
      color: #34d399;
      d: path(
        "M 9 5 H 7 a 2 2 0 0 0 -2 2 v 12 a 2 2 0 0 0 2 2 h 10 a 2 2 0 0 0 2 -2 V 7 a 2 2 0 0 0 -2 -2 h -2 M 9 5 a 2 2 0 0 0 2 2 h 2 a 2 2 0 0 0 2 -2 M 9 5 a 2 2 0 0 1 2 -2 h 2 a 2 2 0 0 1 2 2 m -6 9 l 2 2 l 4 -4"
      );
    }
  }
`;

export default TeamTerminalCard;
