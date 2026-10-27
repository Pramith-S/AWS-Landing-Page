import './StarfieldBackground.css';

/**
 * StarfieldBackground
 * Infinite parallax cosmic starry sky background for Core Team Section
 * - #stars (1px micro stars, 50s cycle)
 * - #stars2 (2px medium stars, 100s cycle)
 * - #stars3 (3px radiant stars, 150s cycle)
 * - Radial deep navy-obsidian gradient with ambient violet nebula vignette
 */
const StarfieldBackground = () => {
  return (
    <div className="starfield-bg-container" aria-hidden="true">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div className="starfield-vignette-overlay" />
    </div>
  );
};

export default StarfieldBackground;
