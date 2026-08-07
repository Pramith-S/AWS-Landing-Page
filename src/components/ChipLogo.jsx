import { useState, useEffect } from 'react';
import SplitText from './SplitText';
import './ChipLogo.css';

const ChipLogo = () => {
  const [activeSides, setActiveSides] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleTrigger = (side) => {
    setActiveSides(prev => ({ ...prev, [side]: true }));
    setTimeout(() => {
      setActiveSides(prev => ({ ...prev, [side]: false }));
    }, 350);
  };

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <div className="chip-wrapper">
      <div className={`chip-container ${isLoaded ? 'loaded' : ''}`}>
        <button 
          className={`chip-side edge-top ${activeSides.top ? 'active' : ''}`} 
          aria-label="Build - Top edge"
          onClick={() => handleTrigger('top')}
          onFocus={() => setActiveSides(prev => ({ ...prev, top: true }))}
          onBlur={() => setActiveSides(prev => ({ ...prev, top: false }))}
        />
        <button 
          className={`chip-side edge-left ${activeSides.left ? 'active' : ''}`} 
          aria-label="Innovate - Left edge"
          onClick={() => handleTrigger('left')}
          onFocus={() => setActiveSides(prev => ({ ...prev, left: true }))}
          onBlur={() => setActiveSides(prev => ({ ...prev, left: false }))}
        />
        
        {/* Transparent Center containing animated SplitText */}
        <div className="chip-center">
          <div className="chip-text-block">
            <SplitText
              text="AWS SBG"
              className="chip-text-line"
              delay={50}
              duration={1.25}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
              showCallback
            />
            <SplitText
              text="JSSATEB"
              className="chip-text-line"
              delay={50}
              duration={1.25}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>
        </div>

        <button 
          className={`chip-side edge-right ${activeSides.right ? 'active' : ''}`} 
          aria-label="Learn - Right edge"
          onClick={() => handleTrigger('right')}
          onFocus={() => setActiveSides(prev => ({ ...prev, right: true }))}
          onBlur={() => setActiveSides(prev => ({ ...prev, right: false }))}
        />
        <button 
          className={`chip-side edge-bottom ${activeSides.bottom ? 'active' : ''}`} 
          aria-label="Connect - Bottom edge"
          onClick={() => handleTrigger('bottom')}
          onFocus={() => setActiveSides(prev => ({ ...prev, bottom: true }))}
          onBlur={() => setActiveSides(prev => ({ ...prev, bottom: false }))}
        />
      </div>
    </div>
  );
};

export default ChipLogo;
