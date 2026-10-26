import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Loader = ({ minDisplayTime = 2600, onFinished }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const mainWords = ['AWS', 'STUDENT', 'BUILDER', 'GROUP'];
  const downsideWord = 'JSSATEB';

  useEffect(() => {
    // Lock scroll while intro loader is active
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsFadingOut(true);
      const exitTimer = setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = '';
        if (onFinished) onFinished();
      }, 600);
      return () => clearTimeout(exitTimer);
    }, minDisplayTime);

    const handleDismiss = () => {
      setIsFadingOut(true);
      setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = '';
        if (onFinished) onFinished();
      }, 400);
    };

    window.addEventListener('keydown', handleDismiss);
    window.addEventListener('click', handleDismiss);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleDismiss);
      window.removeEventListener('click', handleDismiss);
      document.body.style.overflow = '';
    };
  }, [minDisplayTime, onFinished]);

  if (!isVisible) return null;

  let mainCharCounter = 0;

  return (
    <StyledOverlay className={isFadingOut ? 'fade-out' : ''}>
      <StyledWrapper>
        <div className="loader">
          {/* Top Line: AWS STUDENT BUILDER GROUP */}
          <div className="loader-line loader-main-line">
            {mainWords.map((word, wordIdx) => (
              <div key={`word-${wordIdx}`} className="loader-word">
                {word.split('').map((char) => {
                  const delay = mainCharCounter * 50;
                  mainCharCounter++;
                  return (
                    <span
                      key={`char-${mainCharCounter}`}
                      className="loader-char"
                      style={{ animationDelay: `${delay}ms` }}
                    >
                      {char}
                    </span>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Downside Line: JSSATEB */}
          <div className="loader-line loader-downside-line">
            <div className="loader-word">
              {downsideWord.split('').map((char, index) => {
                const delay = index * 75;
                return (
                  <span
                    key={`downside-${index}`}
                    className="loader-char downside-char"
                    style={{ animationDelay: `${delay}ms` }}
                  >
                    {char}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </StyledWrapper>
    </StyledOverlay>
  );
};

const StyledOverlay = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999999;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: opacity 0.6s ease, visibility 0.6s ease;

  &.fade-out {
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100vw;
  padding: 0 1.5rem;

  .loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: clamp(0.6rem, 1.6vw, 1.2rem);
    user-select: none;
  }

  /* Each line has overflow: hidden so letters pop up from below */
  .loader-line {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    overflow: hidden;
    height: 1.35em;
    padding: 0 0.2em;
  }

  .loader-main-line {
    font-family: var(--font-heading, 'Outfit', 'Poppins', sans-serif);
    font-size: clamp(1.5rem, 4vw, 3.2rem);
    font-weight: 800;
    letter-spacing: 0.05em;
    color: #ffffff;
    text-transform: uppercase;
    gap: 0.45em;
  }

  .loader-downside-line {
    font-family: var(--font-heading, 'Outfit', 'Poppins', sans-serif);
    font-size: clamp(1.1rem, 2.6vw, 2.1rem);
    font-weight: 800;
    letter-spacing: 0.32em;
    text-indent: 0.32em; /* Centers the letter-spaced text */
    color: var(--electric-violet, #a78bfa);
    text-transform: uppercase;
  }

  .loader-word {
    display: inline-flex;
    align-items: center;
  }

  /* The hideAndSeek undulating wave animation */
  .loader-char {
    display: inline-block;
    padding: 0;
    margin: 0 0.02em;
    transform: translateY(135%);
    animation: hideAndSeek 1.1s alternate infinite cubic-bezier(0.86, 0, 0.07, 1);
    text-shadow: 0 0 18px rgba(139, 92, 246, 0.5), 0 0 4px rgba(255, 255, 255, 0.8);
  }

  .downside-char {
    text-shadow: 0 0 16px rgba(139, 92, 246, 0.85);
  }

  @keyframes hideAndSeek {
    0% {
      transform: translateY(135%);
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    .loader-main-line {
      font-size: clamp(1rem, 4.4vw, 1.4rem);
      gap: 0.3em;
    }
    .loader-downside-line {
      font-size: clamp(0.85rem, 3.4vw, 1.1rem);
      letter-spacing: 0.22em;
      text-indent: 0.22em;
    }
  }
`;

export default Loader;
