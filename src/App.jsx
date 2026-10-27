import { useState } from 'react';
import ShapeGrid from './components/ShapeGrid';
import ChipLogo from './components/ChipLogo';
import WordRotate from './components/WordRotate';
import JoinButton from './components/JoinButton';
import ContributeButton from './components/ContributeButton';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import PillarsSection from './components/PillarsSection';
import EventsSection from './components/EventsSection';
import PathwaySection from './components/PathwaySection';
import DomainsSection from './components/DomainsSection';
import CoreTeamSection from './components/CoreTeamSection';
import ContactSection from './components/ContactSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import JoinModal from './components/JoinModal';
import Loader from './components/Loader';
import './App.css';

function App() {
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
    <div className="app-wrapper">
      {/* Intro Website Loader */}
      <Loader />

      {/* Sticky Glass Navbar */}
      <Navbar onOpenJoinModal={handleOpenJoinModal} />

      {/* Hero Section (Preserved & Integrated) */}
      <section id="hero" className="hero-layout">
        {/* Background ShapeGrid Canvas */}
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
          />
        </div>

        {/* 2-Column Hero Content Overlay */}
        <div className="hero-grid-container">
          {/* Left Column: Chip Structure & Text */}
          <div className="hero-left-col">
            <ChipLogo />
          </div>

          {/* Right Column: Headings, WordRotate, Subtext & Join Button */}
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
              This is JSS Academy of Technical Education Bengaluru's student community powered by AWS. We build real projects across Cloud, AI, Full Stack, DevOps and Open Source turning students into engineers who ship, not larp.
            </p>

            {/* Hero Buttons: Join Group & Contribute */}
            <div className="hero-btn-group">
              <JoinButton onClick={handleOpenJoinModal} />
              <ContributeButton href="https://github.com/awsjssateb" />
            </div>
          </div>
        </div>

        {/* Gradient Fade Overlay transitioning seamlessly into AboutSection */}
        <div className="hero-bottom-fade-overlay" />
      </section>

      {/* 1. About The Program Section */}
      <AboutSection />

      {/* 2. What We Do / Core Pillars Section */}
      <PillarsSection onOpenJoinModal={handleOpenJoinModal} />

      {/* 3. Events Conducted Section */}
      <EventsSection onOpenJoinModal={handleOpenJoinModal} />

      {/* 3.5 AWS Landmark Pathway Section */}
      <PathwaySection onOpenJoinModal={handleOpenJoinModal} />

      {/* 4.6 Our Domains Section */}
      <DomainsSection />

      {/* 4.8 Meet Our Core Team Section */}
      <CoreTeamSection />

      {/* 5. Contact Us Section */}
      <ContactSection />

      {/* 5.5 FAQ Section */}
      <FaqSection />

      {/* 6. Footer Section */}
      <Footer />

      {/* Interactive Builder Join Modal */}
      <JoinModal isOpen={isJoinModalOpen} onClose={handleCloseJoinModal} />
    </div>
  );
}

export default App;
