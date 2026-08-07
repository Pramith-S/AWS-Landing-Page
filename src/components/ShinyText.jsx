import React from 'react';
import './ShinyText.css';

const ShinyText = ({
  text,
  speed = 2,
  delay = 0,
  color = '#ffffff',
  shineColor = '#a855f7',
  spread = 120,
  direction = 'left',
  yoyo = false,
  pauseOnHover = false,
  disabled = false,
  className = ''
}) => {
  if (disabled) {
    return <span className={className} style={{ color }}>{text}</span>;
  }

  const animationStyle = {
    '--shiny-color': color,
    '--shiny-shine-color': shineColor,
    '--shiny-spread': `${spread}px`,
    '--shiny-speed': `${speed}s`,
    '--shiny-delay': `${delay}s`,
    '--shiny-direction': direction === 'right' ? 'reverse' : 'normal'
  };

  return (
    <span
      className={`shiny-text ${pauseOnHover ? 'pause-on-hover' : ''} ${className}`}
      style={animationStyle}
    >
      {text}
    </span>
  );
};

export default ShinyText;
