import DecryptedText from '../components/DecryptedText';
import Marquee from '../components/Marquee';
import '../components/PillarsSection.css';

const MobilePillarsSection = () => {
  const pillarCardImages = [
    { id: 1, title: "Workshops & Bootcamps", src: "/images/pillars/Workshops_and_Bootcamps.png" },
    { id: 2, title: "Cloud Projects & Architecture", src: "/images/pillars/Cloud_Projects_and_Architecture.png" },
    { id: 3, title: "Career & Certifications", src: "/images/pillars/Carrer_and_Certifications.png" },
    { id: 4, title: "DevSecOps & Infrastructure", src: "/images/pillars/DevSecOps & Infrastructure.png" },
    { id: 5, title: "Generative AI & Bedrock Labs", src: "/images/pillars/Generative_AI_and_Bedrock_Labs.png" },
    { id: 6, title: "Hackathons & Community Sprints", src: "/images/pillars/Hackathons_and_Community_Sprints.png" },
  ];

  return (
    <section id="pillars" className="section-padding pillars-section">
      <div className="container">
        {/* Mobile Section Header */}
        <div className="pillars-header text-center">
          <div className="section-badge">
            <span>// CORE PILLARS</span>
          </div>
          <h2 className="section-title">
            <DecryptedText
              text="What We Do: "
              animateOn="view"
              speed={35}
              sequential={true}
              className="decrypted"
              encryptedClassName="encrypted"
            />
            <span className="text-gradient-purple">6 Core Pillars</span>
          </h2>
          <p className="section-description mx-auto">
            Explore the core pillars driving student innovation, cloud architecture, and industry career readiness at AWS SBG JSSATEB.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Image Card Marquee Carousel for Mobile */}
      <div className="pillars-marquee-wrapper">
        <Marquee duration="35s" pauseOnHover={true} repeat={3}>
          {pillarCardImages.map((card) => (
            <div key={card.id} className="mobile-pillar-image-card">
              <img src={card.src} alt={card.title} className="pillar-card-img" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default MobilePillarsSection;
