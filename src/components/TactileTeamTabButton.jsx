import React from 'react';
import styled from 'styled-components';

/**
 * Tactile Neomorphic Pill Button for Core Team Navigation
 * Faithfully follows the user-provided styled-components architecture:
 * <StyledWrapper> > button.button > .button-outer > .button-inner > span
 * Styled with precision to match Image 3 (AWS Orange active state + Tactile Dark states).
 */
const TactileTeamTabButton = ({
  active = false,
  onClick,
  icon: Icon,
  title,
  badge,
  role = 'tab',
  ariaSelected,
  className = ''
}) => {
  return (
    <StyledWrapper className={className}>
      <button
        type="button"
        role={role}
        aria-selected={ariaSelected ?? active}
        className={`button ${active ? 'active' : ''}`}
        onClick={onClick}
      >
        <div className="button-outer">
          <div className="button-inner">
            <span className="btn-content-flex">
              {Icon && <Icon size={14} className="btn-icon" />}
              <span className="btn-title">{title}</span>
              {badge && <span className="btn-badge">{badge}</span>}
            </span>
          </div>
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: inline-flex;

  .button {
    all: unset;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    position: relative;
    border-radius: 100em;
    background-color: rgba(0, 0, 0, 0.75);
    box-shadow:
      -0.15em -0.15em 0.15em -0.075em rgba(5, 5, 5, 0.25),
      0.0375em 0.0375em 0.0675em 0 rgba(5, 5, 5, 0.1);
    transition: transform 200ms ease;
  }

  .button::after {
    content: "";
    position: absolute;
    z-index: 0;
    width: calc(100% + 0.3em);
    height: calc(100% + 0.3em);
    top: -0.15em;
    left: -0.15em;
    border-radius: inherit;
    background: linear-gradient(
      -135deg,
      rgba(5, 5, 5, 0.5),
      transparent 20%,
      transparent 100%
    );
    filter: blur(0.0125em);
    opacity: 0.25;
    mix-blend-mode: multiply;
  }

  .button .button-outer {
    position: relative;
    z-index: 1;
    border-radius: inherit;
    transition: box-shadow 300ms ease;
    will-change: box-shadow;
    box-shadow:
      0 0.05em 0.05em -0.01em rgba(5, 5, 5, 1),
      0 0.01em 0.01em -0.01em rgba(5, 5, 5, 0.5),
      0.15em 0.3em 0.1em -0.01em rgba(5, 5, 5, 0.25);
  }

  .button:hover .button-outer {
    box-shadow:
      0 0 0 0 rgba(5, 5, 5, 1),
      0 0 0 0 rgba(5, 5, 5, 0.5),
      0 0 0 0 rgba(5, 5, 5, 0.25);
  }

  /* Active glow in AWS Orange matching Image 3 */
  .button.active .button-outer {
    box-shadow:
      0 0 22px rgba(255, 153, 0, 0.58),
      0 0.05em 0.05em -0.01em rgba(0, 0, 0, 0.8),
      0.15em 0.3em 0.1em -0.01em rgba(255, 153, 0, 0.3);
  }

  .button.active:hover .button-outer {
    box-shadow:
      0 0 28px rgba(255, 153, 0, 0.72),
      0 0.05em 0.05em -0.01em rgba(0, 0, 0, 0.8);
  }

  .button-inner {
    --inset: 0.035em;
    position: relative;
    z-index: 1;
    border-radius: inherit;
    padding: 0.72em 1.35em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(
      135deg,
      rgba(42, 38, 56, 1),
      rgba(24, 21, 33, 1)
    );
    transition:
      box-shadow 300ms ease,
      clip-path 250ms ease,
      background-image 250ms ease,
      transform 250ms ease;
    will-change: box-shadow, clip-path, background-image, transform;
    overflow: clip;
    clip-path: inset(0 0 0 0 round 100em);
    box-shadow:
      0 0 0 0 inset rgba(5, 5, 5, 0.1),
      -0.05em -0.05em 0.05em 0 inset rgba(5, 5, 5, 0.25),
      0 0 0 0 inset rgba(5, 5, 5, 0.1),
      0 0 0.05em 0.2em inset rgba(255, 255, 255, 0.12),
      0.025em 0.05em 0.1em 0 inset rgba(255, 255, 255, 0.35),
      0.12em 0.12em 0.12em inset rgba(255, 255, 255, 0.12),
      -0.075em -0.25em 0.25em 0.1em inset rgba(5, 5, 5, 0.35);
  }

  .button:hover .button-inner {
    clip-path: inset(
      clamp(1px, 0.0625em, 2px) clamp(1px, 0.0625em, 2px)
        clamp(1px, 0.0625em, 2px) clamp(1px, 0.0625em, 2px) round 100em
    );
    box-shadow:
      0.1em 0.15em 0.05em 0 inset rgba(5, 5, 5, 0.75),
      -0.025em -0.03em 0.05em 0.025em inset rgba(5, 5, 5, 0.5),
      0.25em 0.25em 0.2em 0 inset rgba(5, 5, 5, 0.5),
      0 0 0.05em 0.5em inset rgba(255, 255, 255, 0.15),
      0 0 0 0 inset rgba(255, 255, 255, 1),
      0.12em 0.12em 0.12em inset rgba(255, 255, 255, 0.25),
      -0.075em -0.12em 0.2em 0.1em inset rgba(5, 5, 5, 0.25);
  }

  /* Active Orange State (Image 3) */
  .button.active .button-inner {
    background-image: linear-gradient(
      135deg,
      #FF9900,
      #FF8C00
    );
    box-shadow:
      0 0 0 0 inset rgba(5, 5, 5, 0.1),
      -0.05em -0.05em 0.05em 0 inset rgba(160, 60, 0, 0.35),
      0 0 0.05em 0.2em inset rgba(255, 255, 255, 0.45),
      0.025em 0.05em 0.1em 0 inset rgba(255, 255, 255, 0.8),
      0.12em 0.12em 0.12em inset rgba(255, 255, 255, 0.4),
      -0.075em -0.25em 0.25em 0.1em inset rgba(140, 50, 0, 0.45);
  }

  .button.active:hover .button-inner {
    clip-path: inset(
      clamp(1px, 0.0625em, 2px) clamp(1px, 0.0625em, 2px)
        clamp(1px, 0.0625em, 2px) clamp(1px, 0.0625em, 2px) round 100em
    );
    box-shadow:
      0.1em 0.15em 0.05em 0 inset rgba(140, 50, 0, 0.6),
      -0.025em -0.03em 0.05em 0.025em inset rgba(120, 40, 0, 0.4),
      0.25em 0.25em 0.2em 0 inset rgba(160, 60, 0, 0.45),
      0 0 0.05em 0.5em inset rgba(255, 255, 255, 0.35),
      -0.075em -0.12em 0.2em 0.1em inset rgba(120, 40, 0, 0.35);
  }

  .btn-content-flex {
    position: relative;
    z-index: 4;
    display: inline-flex;
    align-items: center;
    gap: 0.65em;
    font-family: var(--font-heading, "Outfit", "Inter", sans-serif);
    letter-spacing: 0.04em;
    font-weight: 800;
    font-size: 0.82rem;
    text-transform: uppercase;
    transition: transform 250ms ease;
    will-change: transform;
    user-select: none;
    white-space: nowrap;
    color: #f1f5f9;
  }

  .btn-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: #cbd5e1;
    transition: color 200ms ease;
  }

  .btn-title {
    display: inline-block;
    letter-spacing: 0.04em;
  }

  .btn-badge {
    padding: 0.22em 0.65em;
    border-radius: 9999px;
    font-family: var(--font-mono, "JetBrains Mono", monospace);
    font-size: 0.68rem;
    font-weight: 800;
    letter-spacing: 0.02em;
    display: inline-block;
    background: rgba(10, 8, 16, 0.7);
    color: #FFB800;
    border: 1px solid rgba(255, 184, 0, 0.25);
    transition: all 200ms ease;
  }

  /* Active text, icon, and badge colors (Image 3) */
  .button.active .btn-content-flex {
    color: #07060a;
    font-weight: 900;
  }

  .button.active .btn-icon {
    color: #07060a;
  }

  .button.active .btn-badge {
    background: #000000;
    color: #FFA500;
    border: 1px solid rgba(0, 0, 0, 0.4);
  }

  .button:hover .btn-content-flex {
    transform: scale(0.975);
  }

  .button:active .button-inner {
    transform: scale(0.975);
  }

  @media (max-width: 768px) {
    .button-inner {
      padding: 0.58em 0.9em;
    }
    .btn-content-flex {
      font-size: 0.72rem;
      gap: 0.45em;
    }
    .btn-badge {
      font-size: 0.6rem;
      padding: 0.16em 0.45em;
    }
  }

  @media (max-width: 480px) {
    .button-inner {
      padding: 0.5em 0.75em;
    }
    .btn-content-flex {
      font-size: 0.67rem;
    }
    .btn-badge {
      display: none;
    }
  }
`;

export default TactileTeamTabButton;
