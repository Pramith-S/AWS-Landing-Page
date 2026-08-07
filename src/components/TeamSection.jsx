import { Users } from 'lucide-react';
import LeadershipCard from './LeadershipCard';
import Aurora from './Aurora';
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
          <h2 className="section-title">
            Driven by Students, <span className="text-gradient-purple">Empowered by AWS</span>
          </h2>
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
