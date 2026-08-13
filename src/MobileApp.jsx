import { useState } from 'react';
import ShapeGrid from './components/ShapeGrid';
import ChipLogo from './components/ChipLogo';
import WordRotate from './components/WordRotate';
import JoinButton from './components/JoinButton';
import ContributeButton from './components/ContributeButton';
import LogoLoop from './components/LogoLoop';

import { FaAws } from 'react-icons/fa6';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiNodedotjs,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiLinux,
  SiGit,
  SiGithubactions,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiFastapi,
  SiGraphql,
  SiTailwindcss
} from 'react-icons/si';

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

const techLogos = [
  { node: <FaAws />, title: "AWS Cloud", href: "https://aws.amazon.com" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiPython />, title: "Python", href: "https://python.org" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiKubernetes />, title: "Kubernetes", href: "https://kubernetes.io" },
  { node: <SiTerraform />, title: "Terraform", href: "https://www.terraform.io" },
  { node: <SiAnsible />, title: "Ansible", href: "https://www.ansible.com" },
  { node: <SiLinux />, title: "Linux", href: "https://www.kernel.org" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithubactions />, title: "GitHub Actions", href: "https://github.com/features/actions" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiRedis />, title: "Redis", href: "https://redis.io" },
  { node: <SiFastapi />, title: "FastAPI", href: "https://fastapi.tiangolo.com" },
  { node: <SiGraphql />, title: "GraphQL", href: "https://graphql.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" }
];

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

        {/* Logo Loop directly under Hero section on Mobile Index */}
        <div className="mobile-hero-logo-loop-banner">
          <LogoLoop
            logos={techLogos}
            speed={35}
            direction="right"
            logoHeight={30}
            gap={24}
            hoverSpeed={0}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="transparent"
            useCustomRender={false}
            ariaLabel="Cloud technology stack partners marquee"
          />
        </div>

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
