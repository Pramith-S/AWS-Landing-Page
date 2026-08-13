import { Users } from 'lucide-react';
import LeadershipCard from './LeadershipCard';
import Aurora from './Aurora';
import StrokeText from './StrokeText';
import './TeamSection.css';

const TeamSection = () => {
  return (
    <section id="team" className="section-padding team-section">
      <div className="aurora-background">
        <Aurora
          colorStops={['#6C2BD9', '#A855F7', '#4F46E5']}
          blend={0.5}
          amplitude={1.0}
          speed={0.8}
        />
      </div>
      <div className="container">
        {/* Section Header */}
        <div className="team-header text-center">
          <div className="section-badge">
            <Users size={14} />
            <span>// OUR LEADERSHIP</span>
          </div>
          <div className="about-stroke-heading section-stroke-heading" aria-label="Driven by Students, Empowered by AWS">
            <StrokeText
              text="Driven by Students,"
              trigger="scroll"
              strokeColor="#8B5CF6"
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
              text="Empowered by AWS"
              trigger="scroll"
              strokeColor="#8B5CF6"
              fillColor="#8B5CF6"
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
          <p className="section-subtitle mx-auto">
            Meet the passionate core leads guiding workshops, hackathons, and cloud architectural excellence at JSSATEB.
          </p>
        </div>

        {/* Team Cards */}
        <div className="team-grid">
          <LeadershipCard name="Tech Lead" aboutMe="Revealing soon!" />
          <LeadershipCard name="Events Lead" aboutMe="Revealing soon!" />
          <LeadershipCard name="Marketing Lead" aboutMe="Revealing soon!" />
          <LeadershipCard name="Operations Lead" aboutMe="Revealing soon!" />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
