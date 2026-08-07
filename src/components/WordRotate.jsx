import { useState, useEffect } from 'react';
import ShinyText from './ShinyText';
import './WordRotate.css';

const WordRotate = ({
  words = [],
  duration = 2500,
  delay = 1,
  className = '',
  shiny = true,
  shinyColor = '#ffffff',
  shinyShineColor = '#A855F7'
}) => {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
        setAnimating(false);
      }, 300);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  if (!words || words.length === 0) return null;

  const currentWord = words[index];

  return (
    <span className={`word-rotate-wrapper ${className}`}>
      <span className={`word-rotate-item ${animating ? 'exit' : 'enter'}`}>
        {shiny ? (
          <ShinyText
            text={currentWord}
            speed={2}
            delay={delay}
            color={shinyColor}
            shineColor={shinyShineColor}
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
        ) : (
          currentWord
        )}
      </span>
    </span>
  );
};

export default WordRotate;
