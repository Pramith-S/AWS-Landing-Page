import React from 'react';
import { Milestone, BookOpen } from 'lucide-react';
import StrokeText from './StrokeText';
import KaelkothPlaylistBook from './KaelkothPlaylistBook';
import './PathwaySection.css';

const PathwaySection = ({ onOpenJoinModal }) => {
  return (
    <section id="pathway" className="section-padding pathway-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="pathway-header-box">
          <div className="section-badge">
            <Milestone size={14} />
            <span>// AWS LANDMARK PATHWAY</span>
          </div>
          
          <div className="about-stroke-heading section-stroke-heading" aria-label="AWS SBG Landmarks & Community Pathway">
            <StrokeText
              text="Milestone Landmarks &"
              trigger="scroll"
              strokeColor="#FF9900"
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
              text="Community Pathway"
              trigger="scroll"
              strokeColor="#FF9900"
              fillColor="#FF9900"
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
            Explore the official builder grimoire of our community journey. Click any milestone track or arrow to expand session details, speakers, and venue manifests.
          </p>
        </div>

        {/* The Exact Kaelkoth Book Component from Downloads & Reference Image */}
        <div className="pathway-book-display-container">
          <KaelkothPlaylistBook onOpenJoinModal={onOpenJoinModal} />
        </div>

      </div>
    </section>
  );
};

export default PathwaySection;
