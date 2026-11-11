import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotateRays = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg) scale(1);
    opacity: 0.82;
  }
  50% {
    transform: translate(-50%, -50%) rotate(180deg) scale(1.06);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg) scale(1);
    opacity: 0.82;
  }
`;

const gridPulse = keyframes`
  0%, 100% {
    opacity: 0.65;
    transform: translate3d(0, 0, 0);
  }
  50% {
    opacity: 1;
    transform: translate3d(10px, 10px, 0);
  }
`;

const twinklePrimary = keyframes`
  0%, 100% {
    opacity: 0.45;
    transform: translate3d(0, 0, 0);
  }
  50% {
    opacity: 0.95;
    transform: translate3d(-6px, -10px, 0);
  }
`;

const twinkleSecondary = keyframes`
  0%, 100% {
    opacity: 0.85;
    transform: translate3d(0, 0, 0);
  }
  50% {
    opacity: 0.35;
    transform: translate3d(8px, -14px, 0);
  }
`;

const windowGlowBreathe = keyframes`
  0%, 100% {
    opacity: 0.86;
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    opacity: 1;
    transform: translate3d(-12px, 8px, 0) scale(1.025);
  }
`;

const leafBreezePrimary = keyframes`
  0%, 100% {
    transform: rotate(-2.5deg) translate3d(0, 0, 0);
  }
  50% {
    transform: rotate(3.2deg) translate3d(-6px, 5px, 0);
  }
`;

const leafBreezeSecondary = keyframes`
  0%, 100% {
    transform: rotate(2deg) translate3d(0, 0, 0);
  }
  50% {
    transform: rotate(-3deg) translate3d(5px, -4px, 0);
  }
`;

const PatternCanvas = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;

  .pattern-surface {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      #06050c 0%,
      #120e21 38%,
      #22193d 72%,
      #130f22 100%
    );
    position: relative;
    overflow: hidden;
  }

  /* Rotating light-violet conic rays & radial glow */
  .pattern-rays {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 190vmax;
    height: 190vmax;
    pointer-events: none;
    background:
      radial-gradient(
        circle at 30% 35%,
        rgba(196, 181, 253, 0.14) 0%,
        rgba(167, 139, 250, 0.06) 24%,
        transparent 48%
      ),
      repeating-conic-gradient(
        from 0deg at 50% 50%,
        rgba(196, 181, 253, 0.05) 0deg,
        rgba(167, 139, 250, 0.04) 10deg,
        transparent 10deg,
        transparent 30deg
      );
    animation: ${rotateRays} 54s linear infinite;
    will-change: transform, opacity;
  }

  /* Animated 50px architectural violet grid */
  .pattern-grid {
    position: absolute;
    inset: -30px;
    pointer-events: none;
    background:
      radial-gradient(
        circle at 80% 70%,
        rgba(167, 139, 250, 0.14) 0%,
        rgba(139, 92, 246, 0.05) 24%,
        transparent 46%
      ),
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 50px,
        rgba(196, 181, 253, 0.05) 50px,
        rgba(196, 181, 253, 0.05) 52px,
        transparent 52px,
        transparent 60px
      ),
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 50px,
        rgba(196, 181, 253, 0.05) 50px,
        rgba(196, 181, 253, 0.05) 52px,
        transparent 52px,
        transparent 60px
      );
    animation: ${gridPulse} 16s ease-in-out infinite;
    will-change: transform, opacity;
  }

  /* Twinkling crisp white & light-violet stars */
  .pattern-stars,
  .pattern-stars-alt {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: transparent;
    will-change: transform, opacity;
  }

  .pattern-stars {
    box-shadow:
      100px 200px 1px rgba(255, 255, 255, 0.8),
      300px 150px 2px rgba(196, 181, 253, 0.65),
      500px 300px 1px rgba(255, 255, 255, 0.85),
      700px 100px 2px rgba(167, 139, 250, 0.72),
      940px 220px 1px rgba(255, 255, 255, 0.75),
      1180px 140px 2px rgba(196, 181, 253, 0.7),
      200px 420px 2px rgba(196, 181, 253, 0.78),
      420px 600px 1px rgba(255, 255, 255, 0.65),
      640px 510px 2px rgba(167, 139, 250, 0.82),
      840px 360px 2px rgba(255, 255, 255, 0.72),
      1060px 490px 1px rgba(196, 181, 253, 0.7),
      150px 780px 2px rgba(255, 255, 255, 0.72),
      460px 840px 1px rgba(196, 181, 253, 0.76),
      780px 760px 2px rgba(167, 139, 250, 0.72),
      1120px 820px 1px rgba(255, 255, 255, 0.78),
      260px 1060px 2px rgba(196, 181, 253, 0.7),
      620px 1120px 1px rgba(255, 255, 255, 0.74),
      960px 1020px 2px rgba(167, 139, 250, 0.75);
    animation: ${twinklePrimary} 6.5s ease-in-out infinite;
  }

  .pattern-stars-alt {
    box-shadow:
      160px 90px 1px rgba(196, 181, 253, 0.65),
      380px 250px 2px rgba(255, 255, 255, 0.68),
      590px 175px 2px rgba(167, 139, 250, 0.75),
      820px 275px 1px rgba(255, 255, 255, 0.82),
      1040px 95px 2px rgba(196, 181, 253, 0.7),
      1280px 340px 2px rgba(255, 255, 255, 0.66),
      90px 560px 2px rgba(167, 139, 250, 0.72),
      340px 710px 1px rgba(255, 255, 255, 0.65),
      580px 660px 2px rgba(196, 181, 253, 0.78),
      920px 640px 1px rgba(255, 255, 255, 0.74),
      1210px 680px 2px rgba(167, 139, 250, 0.68),
      390px 960px 2px rgba(255, 255, 255, 0.72),
      860px 920px 1px rgba(196, 181, 253, 0.74),
      1240px 1160px 2px rgba(255, 255, 255, 0.68);
    animation: ${twinkleSecondary} 8.2s ease-in-out infinite;
  }

  /* ==========================================================================
     ATMOSPHERIC VIOLET WINDOW-LIGHT & SWAYING BOTANICAL LEAF SHADOWS
     Matches uploaded reference silhouette (soft lavender window beam + breeze)
     ========================================================================== */

  .window-shadow-cluster {
    position: absolute;
    pointer-events: none;
    animation: ${windowGlowBreathe} 12s ease-in-out infinite;
    will-change: transform, opacity;
  }

  .window-shadow-cluster--top {
    top: -6%;
    right: -4%;
    width: min(760px, 68vw);
    height: min(680px, 62vw);
  }

  .window-shadow-cluster--bottom {
    bottom: 2%;
    left: -6%;
    width: min(640px, 58vw);
    height: min(560px, 52vw);
    opacity: 0.72;
    animation-delay: -5.5s;
  }

  .window-light-bloom {
    position: absolute;
    inset: -10%;
    background: radial-gradient(
      ellipse 68% 62% at 54% 48%,
      rgba(167, 139, 250, 0.34) 0%,
      rgba(139, 92, 246, 0.16) 44%,
      transparent 76%
    );
    filter: blur(24px);
  }

  .window-projection-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  .window-panes-group {
    filter: blur(15px);
  }

  .window-branch-sway-top {
    transform-origin: 86% 6%;
    animation: ${leafBreezePrimary} 9.5s ease-in-out infinite;
    filter: blur(5.5px);
  }

  .window-branch-sway-bottom {
    transform-origin: 18% 88%;
    animation: ${leafBreezeSecondary} 10.5s ease-in-out infinite;
    filter: blur(6.5px);
  }

  @media (max-width: 768px) {
    .window-shadow-cluster--top {
      top: -6%;
      right: -18%;
      width: 440px;
      height: 410px;
      opacity: 0.76;
    }

    .window-shadow-cluster--bottom {
      bottom: 8%;
      left: -14%;
      width: 390px;
      height: 360px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .pattern-rays,
    .pattern-grid,
    .pattern-stars,
    .pattern-stars-alt,
    .window-shadow-cluster,
    .window-branch-sway-top,
    .window-branch-sway-bottom {
      animation: none !important;
    }
  }
`;

const PathwayPatternBackground = () => {
  return (
    <PatternCanvas aria-hidden="true">
      <div className="pattern-surface">
        <div className="pattern-rays" />
        <div className="pattern-grid" />
        <div className="pattern-stars" />
        <div className="pattern-stars-alt" />

        {/* Upper-Right Illuminated Violet Window Pane & Swaying Branch Silhouette */}
        <div className="window-shadow-cluster window-shadow-cluster--top">
          <div className="window-light-bloom" />
          <svg
            className="window-projection-svg"
            viewBox="0 0 640 580"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="paneGlowTop" x1="580" y1="30" x2="100" y2="480" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#DDD6FE" stopOpacity="0.62" />
                <stop offset="45%" stopColor="#A78BFA" stopOpacity="0.46" />
                <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.06" />
              </linearGradient>
              <linearGradient id="paneGlowSub" x1="520" y1="120" x2="60" y2="520" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.52" />
                <stop offset="55%" stopColor="#8B5CF6" stopOpacity="0.34" />
                <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.02" />
              </linearGradient>
              <mask id="windowBeamMaskTop">
                <g className="window-panes-group">
                  {/* 4 angled perspective window panes separated by dark frame crossbars */}
                  <polygon points="330,115 585,12 628,155 376,264" rx="14" fill="white" />
                  <polygon points="82,226 306,126 352,276 128,378" rx="14" fill="white" opacity="0.88" />
                  <polygon points="386,290 634,182 652,334 426,442" rx="14" fill="white" opacity="0.82" />
                  <polygon points="138,404 360,302 402,452 182,542" rx="14" fill="white" opacity="0.72" />
                </g>
              </mask>
            </defs>

            {/* Luminous lavender-violet window panes */}
            <g className="window-panes-group">
              <polygon points="330,115 585,12 628,155 376,264" fill="url(#paneGlowTop)" />
              <polygon points="82,226 306,126 352,276 128,378" fill="url(#paneGlowSub)" />
              <polygon points="386,290 634,182 652,334 426,442" fill="url(#paneGlowSub)" />
              <polygon points="138,404 360,302 402,452 182,542" fill="url(#paneGlowSub)" />
            </g>

            {/* Leaf branch shadows clipped inside the violet window beam so they silhouette softly over light panes */}
            <g mask="url(#windowBeamMaskTop)">
              <g className="window-branch-sway-top" fill="#130d24" fillOpacity="0.78">
                {/* Slender curving botanical stem */}
                <path
                  d="M615 10 C555 95, 495 190, 405 320"
                  stroke="#130d24"
                  strokeOpacity="0.7"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Alternating smooth pointed leaves matching reference image */}
                <path d="M582 56 C552 38, 520 45, 508 66 C535 76, 565 72, 582 56 Z" />
                <path d="M566 76 C596 74, 622 92, 626 116 C600 112, 578 96, 566 76 Z" />
                <path d="M542 108 C506 90, 470 98, 456 122 C490 132, 522 126, 542 108 Z" />
                <path d="M524 132 C558 134, 584 156, 586 184 C556 176, 534 156, 524 132 Z" />
                <path d="M498 168 C458 152, 422 162, 408 188 C444 198, 478 190, 498 168 Z" />
                <path d="M482 194 C518 196, 546 220, 548 250 C516 242, 492 220, 482 194 Z" />
                <path d="M454 232 C414 218, 376 232, 366 260 C402 268, 436 256, 454 232 Z" />
                <path d="M440 262 C476 268, 500 296, 496 328 C468 314, 448 290, 440 262 Z" />
                <path d="M412 308 C382 324, 374 362, 388 394 C412 372, 422 338, 412 308 Z" />
              </g>
            </g>
          </svg>
        </div>

        {/* Lower-Left Secondary Violet Window Light & Counter-Swaying Leaves */}
        <div className="window-shadow-cluster window-shadow-cluster--bottom">
          <div className="window-light-bloom" />
          <svg
            className="window-projection-svg"
            viewBox="0 0 560 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="paneGlowBottom" x1="40" y1="450" x2="460" y2="80" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.48" />
                <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.02" />
              </linearGradient>
              <mask id="windowBeamMaskBottom">
                <g className="window-panes-group">
                  <polygon points="20,255 215,172 252,294 58,378" fill="white" opacity="0.82" />
                  <polygon points="238,162 440,76 476,198 274,284" fill="white" opacity="0.7" />
                  <polygon points="66,400 260,316 296,438 102,512" fill="white" opacity="0.74" />
                  <polygon points="282,306 484,220 520,342 318,428" fill="white" opacity="0.58" />
                </g>
              </mask>
            </defs>

            <g className="window-panes-group">
              <polygon points="20,255 215,172 252,294 58,378" fill="url(#paneGlowBottom)" />
              <polygon points="238,162 440,76 476,198 274,284" fill="url(#paneGlowBottom)" />
              <polygon points="66,400 260,316 296,438 102,512" fill="url(#paneGlowBottom)" />
              <polygon points="282,306 484,220 520,342 318,428" fill="url(#paneGlowBottom)" />
            </g>

            <g mask="url(#windowBeamMaskBottom)">
              <g className="window-branch-sway-bottom" fill="#130d24" fillOpacity="0.76">
                <path
                  d="M40 460 C110 385, 175 315, 258 215"
                  stroke="#130d24"
                  strokeOpacity="0.65"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  fill="none"
                />
                <path d="M92 405 C62 384, 52 350, 62 324 C86 344, 96 376, 92 405 Z" />
                <path d="M114 382 C148 390, 180 374, 194 348 C164 342, 134 356, 114 382 Z" />
                <path d="M148 342 C116 322, 106 286, 116 258 C140 280, 152 312, 148 342 Z" />
                <path d="M172 316 C206 324, 238 308, 252 280 C222 276, 192 290, 172 316 Z" />
                <path d="M206 276 C176 256, 168 220, 180 194 C202 214, 212 246, 206 276 Z" />
                <path d="M242 232 C272 222, 294 196, 294 166 C268 178, 250 204, 242 232 Z" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </PatternCanvas>
  );
};

export default PathwayPatternBackground;
