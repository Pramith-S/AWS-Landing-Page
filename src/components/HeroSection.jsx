import { useState } from 'react';
import ShapeGrid from './ShapeGrid';
import { ArrowRight, Cloud, Terminal, Award, Users, Code2, Play } from 'lucide-react';
import './HeroSection.css';

const HeroSection = ({ onOpenJoinModal }) => {
  return (
    <section id="hero" className="hero-container">
      {/* Integrated React Bits ShapeGrid Canvas Background */}
      <div className="hero-shapegrid-wrapper">
        <ShapeGrid 
          speed={0.5} 
          squareSize={40}
          direction='diagonal'
          borderColor="#2F293A"
          hoverFillColor='#222'
          shape='square'
          hoverTrailAmount={0}
          hoverColor="#A855F7"
          size={80}
          className="hero-shapegrid-canvas"
        />
      </div>

      {/* Decorative Orbs */}
      <div className="glow-orb glow-orb-orange hero-orb-left"></div>
      <div className="glow-orb glow-orb-purple hero-orb-right"></div>

      {/* Hero Foreground Content */}
      <div className="container hero-content">
        {/* Badge */}
        <div className="hero-badge animate-float">
          <span className="live-dot"></span>
          <Cloud size={16} className="badge-aws-icon" />
          <span>JSSATEB • AWS STUDENT BUILDER GROUP</span>
          <span className="badge-divider">|</span>
          <span className="badge-status">Cloud Season '26 Active</span>
        </div>

        {/* Hero Title */}
        <h1 className="hero-headline">
          Architect the <span className="text-gradient-aws">Cloud</span> of Tomorrow
        </h1>

        {/* Hero Description */}
        <p className="hero-subtext">
          Join JSSATEB's premier AWS student community. Master Cloud Computing, Serverless Architecture, 
          DevOps, and Generative AI on AWS with hands-on bootcamps, hackathons, and real-world project deployments.
        </p>

        {/* Primary CTAs */}
        <div className="hero-cta-group">
          <button className="btn-primary" onClick={onOpenJoinModal}>
            <span>Become a Builder</span>
            <ArrowRight size={18} />
          </button>
          
          <button className="btn-secondary" onClick={onOpenJoinModal}>
            <Play size={16} />
            <span>Join Community</span>
          </button>
        </div>

        {/* Metrics Grid */}
        <div className="hero-stats-grid">
          <div className="stat-card glass-card">
            <div className="stat-icon-box orange">
              <Users size={22} />
            </div>
            <div className="stat-number">500+</div>
            <div className="stat-label">Active Student Builders</div>
          </div>

          <div className="stat-card glass-card">
            <div className="stat-icon-box purple">
              <Terminal size={22} />
            </div>
            <div className="stat-number">35+</div>
            <div className="stat-label">Workshops & Bootcamps</div>
          </div>

          <div className="stat-card glass-card">
            <div className="stat-icon-box cyan">
              <Award size={22} />
            </div>
            <div className="stat-number">60+</div>
            <div className="stat-label">AWS Certified Members</div>
          </div>

          <div className="stat-card glass-card">
            <div className="stat-icon-box green">
              <Code2 size={22} />
            </div>
            <div className="stat-number">20+</div>
            <div className="stat-label">Deployed Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
