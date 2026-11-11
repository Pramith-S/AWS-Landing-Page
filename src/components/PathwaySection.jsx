import React from 'react';
import { Milestone } from 'lucide-react';
import StrokeText from './StrokeText';
import PathwayHangingBoard from './PathwayHangingBoard';
import PathwayPatternBackground from './PathwayPatternBackground';
import './PathwaySection.css';

const PathwaySection = ({ onOpenJoinModal }) => {
  return (
    <section id="pathway" className="section-padding pathway-section">
      {/* Full-Section Dark Cosmic Light-Violet Patterned Background */}
      <PathwayPatternBackground />

      <div className="container pathway-content-wrapper">
        
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
              strokeColor="#A78BFA"
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
              strokeColor="#C4B5FD"
              fillColor="#A78BFA"
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
            Explore our community milestones and event chronicles below. Click any hanging event card to open full session details, speakers, and venue info.
          </p>
        </div>

        {/* Hanging Kraft-Paper Event Cards Board */}
        <div className="pathway-board-display-container">
          <PathwayHangingBoard onOpenJoinModal={onOpenJoinModal} />
        </div>

      </div>
    </section>
  );
};

export default PathwaySection;
