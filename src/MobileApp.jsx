import { useState } from 'react';
import ShapeGrid from './components/ShapeGrid';
import ChipLogo from './components/ChipLogo';
import WordRotate from './components/WordRotate';
import JoinButton from './components/JoinButton';
import ContributeButton from './components/ContributeButton';

import MobileNavbar from './mobile-components/MobileNavbar';
import MobileAboutSection from './mobile-components/MobileAboutSection';
import MobilePillarsSection from './mobile-components/MobilePillarsSection';
import MobileEventsSection from './mobile-components/MobileEventsSection';
import MobileTeamSection from './mobile-components/MobileTeamSection';
import MobileTeamLeadReveal from './mobile-components/MobileTeamLeadReveal';
import MobileDomainsSection from './mobile-components/MobileDomainsSection';
import MobileContactSection from './mobile-components/MobileContactSection';
import MobileFaqSection from './mobile-components/MobileFaqSection';
import MobileFooter from './mobile-components/MobileFooter';
import MobileJoinModal from './mobile-components/MobileJoinModal';
import './App.css';
import './MobileApp.css';

function MobileApp() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  const handleOpenJoinModal = () => setIsJoinModalOpen(true);
  const handleCloseJoinModal = () => setIsJoinModalOpen(false);

  const rotateWords = [
    "WITH OPEN SOURCE",
    "WITH DEVOPS",
    "WITH CLOUD & AI",
    "ON THE AWS CLOUD",
    "WITH FULL-STACK"
  ];

  return (
    <div className="app-wrapper mobile-app-wrapper">
      {/* Mobile Navbar */}
      <MobileNavbar onOpenJoinModal={handleOpenJoinModal} />

      {/* Shared Hero, About, and Pillars Background Container */}
      <div className="mobile-shared-hero-about-pillars">
        {/* Continuous Background ShapeGrid Canvas */}
        <div className="hero-shapegrid-wrapper">
          <ShapeGrid
            speed={0.5}
            squareSize={30}
            direction='diagonal'
            borderColor="#2F293A"
            hoverFillColor='#222'
            shape='square'
            hoverTrailAmount={0}
            hoverColor="#A855F7"
            size={60}
            randomFlicker={true}
            randomFlickerCount={8}
          />
        </div>

        {/* Mobile Hero Section */}
        <section id="hero" className="hero-layout mobile-hero-layout">
          <div className="hero-grid-container mobile-hero-container">
            <div className="hero-left-col">
              <ChipLogo />
            </div>

            <div className="hero-right-col">
              <h1 className="hero-heading-static">BUILD THE FUTURE</h1>
              <h1 className="hero-heading-rotate">
                <WordRotate
                  words={rotateWords}
                  duration={2500}
                  delay={1}
                  className="word-rotate-text"
                />
              </h1>
              <p className="hero-subtext">
                JSS Academy of Technical Education Bengaluru's student community powered by AWS. We build real projects across Cloud, AI, Full Stack, DevOps and Open Source.
              </p>

              <div className="hero-btn-group">
                <JoinButton onClick={handleOpenJoinModal} />
                <ContributeButton href="https://github.com/awsjssateb" />
              </div>
            </div>
          </div>
        </section>

        {/* Mobile About Section */}
        <MobileAboutSection />

        {/* Mobile Pillars Section */}
        <MobilePillarsSection onOpenJoinModal={handleOpenJoinModal} />
      </div>

      {/* Other Mobile Components */}
      <MobileEventsSection onOpenJoinModal={handleOpenJoinModal} />
      <MobileTeamSection />
      <MobileTeamLeadReveal />
      <MobileDomainsSection />
      <MobileContactSection />
      <MobileFaqSection />
      <MobileFooter />

      <MobileJoinModal isOpen={isJoinModalOpen} onClose={handleCloseJoinModal} />
    </div>
  );
}

export default MobileApp;
