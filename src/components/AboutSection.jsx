import { useState, useRef, useEffect } from 'react';
import {
  Cpu,
  Terminal,
  Layers,
  Globe,
  Award,
  BookOpen,
  Sparkles,
  Code2,
  Users,
  Compass,
  ArrowRight,
  CheckCircle2,
  Zap,
  ShieldCheck
} from 'lucide-react';
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
import SideRays from './SideRays';
import LogoLoop from './LogoLoop';
import './AboutSection.css';

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

const FOUR_PILLARS = [
  {
    id: 'pillar-1',
    num: '01',
    label: 'PILLAR 01 // HANDS-ON WORKSHOPS',
    badge: 'HANDS-ON LABS',
    icon: Terminal,
    title: 'Technical Workshops & Labs',
    description: 'Move beyond textbooks with structured workshops covering compute, storage, serverless, database design, containerization and Generative AI on Amazon Bedrock.',
    tags: ['EC2 & S3', 'Serverless Lambda', 'Amazon Bedrock', 'Containers'],
    accent: '#8B5CF6'
  },
  {
    id: 'pillar-2',
    num: '02',
    label: 'PILLAR 02 // PRODUCTION ARCHITECTURE',
    badge: 'OPEN SOURCE',
    icon: Layers,
    title: 'Production Systems & Projects',
    description: 'Collaborative architectural sprints where student builders deploy real-world cloud solutions, resilient microservices, and open-source infrastructure.',
    tags: ['System Design', 'IaC & Terraform', 'CI/CD Pipelines', 'DevSecOps'],
    accent: '#A78BFA'
  },
  {
    id: 'pillar-3',
    num: '03',
    label: 'PILLAR 03 // GLOBAL ECOSYSTEM',
    badge: 'INDUSTRY NETWORK',
    icon: Globe,
    title: 'Ecosystem & Industry Network',
    description: 'Connect with AWS Community Builders, AWS User Group Bengaluru, industry speakers and global student opportunities.',
    tags: ['AWS Community Builders', 'AWS UG Bengaluru', 'Speaker Series', 'Global Network'],
    accent: '#FF9900'
  },
  {
    id: 'pillar-4',
    num: '04',
    label: 'PILLAR 04 // PROFESSIONAL PATHWAYS',
    badge: 'EXAM READINESS',
    icon: Award,
    title: 'Certifications & Mentorship',
    description: 'Accelerate cloud proficiency through peer study cohorts, architectural reviews, and structured pathways toward industry-standard AWS certifications.',
    tags: ['Cloud Practitioner', 'Solutions Architect', 'Architecture Reviews', 'Peer Circles'],
    accent: '#10B981'
  }
];

const WHY_JOIN_BENEFITS = [
  {
    id: 'benefit-1',
    number: '01',
    title: 'Free Learning Resources',
    category: 'SKILL BUILDER',
    description: 'Access AWS Skill Builder courses, learning paths and guided technical labs.',
    icon: BookOpen,
    accent: '#8B5CF6'
  },
  {
    id: 'benefit-2',
    number: '02',
    title: 'Vouchers & Promotional Credits',
    category: 'EXAM READINESS',
    description: 'Explore opportunities for AWS promotional credits and certification exam discounts, subject to availability and eligibility.',
    icon: Sparkles,
    accent: '#FF9900'
  },
  {
    id: 'benefit-3',
    number: '03',
    title: 'Build in Public',
    category: 'PORTFOLIO & SPEAKING',
    description: 'Opportunities to lead technical sessions, publish architecture case studies and showcase future projects.',
    icon: Code2,
    accent: '#EC4899'
  },
  {
    id: 'benefit-4',
    number: '04',
    title: 'Peer-to-Peer Mentorship',
    category: 'CROSS-DEPARTMENT',
    description: 'Learn alongside students across departments and academic years.',
    icon: Users,
    accent: '#3B82F6'
  },
  {
    id: 'benefit-5',
    number: '05',
    title: 'Fast-Track into the Ecosystem',
    category: 'GLOBAL PATHWAYS',
    description: 'Discover opportunities such as AWS Community Builders, student programs and AWS All Builders Welcome initiatives.',
    icon: Compass,
    accent: '#10B981'
  }
];

const AboutSection = () => {
  const [activePillar, setActivePillar] = useState('pillar-1');
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const missionCardRef = useRef(null);

  const handleMouseMove = (e, ref) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.setProperty('--mouse-x', `${x}px`);
    ref.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="about" className="section-padding about-section">
      {/* Subtle Ambient Ray Backdrop */}
      <div className="about-siderays-wrapper" aria-hidden="true">
        <SideRays
          speed={2.2}
          rayColor1="#4c1d95"
          rayColor2="#7c3aed"
          intensity={1.4}
          spread={2.2}
          origin="top-left"
          tilt={-5}
          saturation={1.2}
          blend={0.7}
          falloff={1.8}
          opacity={0.65}
        />
      </div>

      {/* Cyber Grid & Ambient Radial Lighting */}
      <div className="about-grid-overlay" aria-hidden="true" />
      <div className="about-glow-orb about-glow-top" aria-hidden="true" />
      <div className="about-glow-orb about-glow-bottom" aria-hidden="true" />

      <div className="container about-container">
        {/* =========================================================
            PART 1 & 2: ABOUT INTRODUCTION & PROMINENT MISSION CARD
            (Asymmetric 2-Column Editorial Grid)
           ========================================================= */}
        <div className="about-intro-grid">
          {/* Left Column: Community Introduction */}
          <div className="about-intro-narrative">
            <div className="section-badge about-badge">
              <span className="badge-pulse-dot" />
              <span>// ABOUT THE COMMUNITY</span>
            </div>

            <h2 className="about-editorial-headline">
              Empowering the Next Generation of{' '}
              <span className="text-gradient-purple">Cloud Builders.</span>
            </h2>

            <p className="about-overview-text">
              The AWS Student Builder Group (SBG) at JSSATEB is a student-led cloud community supported by Amazon Web Services. We bridge the gap between academic theory and cloud engineering through hands-on learning, industry mentorship and access to the global AWS builder ecosystem.
            </p>

            {/* Quick Status / Chapter Specs Strip */}
            <div className="about-chapter-telemetry">
              <div className="telemetry-chip">
                <span className="telemetry-label">CHAPTER</span>
                <span className="telemetry-value">JSSATEB · BENGALURU</span>
              </div>
              <div className="telemetry-chip">
                <span className="telemetry-label">ECOSYSTEM</span>
                <span className="telemetry-value">POWERED BY AWS</span>
              </div>
              <div className="telemetry-chip">
                <span className="telemetry-label">INITIATIVE</span>
                <span className="telemetry-value">STUDENT-LED BUILDERS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent Mission Card */}
          <div className="about-mission-wrapper">
            <div
              className="about-mission-card"
              ref={missionCardRef}
              onMouseMove={(e) => handleMouseMove(e, missionCardRef)}
            >
              {/* Corner HUD Reticles */}
              <span className="hud-corner top-left" aria-hidden="true">+</span>
              <span className="hud-corner top-right" aria-hidden="true">+</span>
              <span className="hud-corner bottom-left" aria-hidden="true">+</span>
              <span className="hud-corner bottom-right" aria-hidden="true">+</span>

              <div className="mission-card-top">
                <div className="mission-tag-pill">
                  <span className="pulse-indicator" />
                  <span className="mission-tag-text">DIRECTIVE // OUR MISSION</span>
                </div>
                <div className="mission-code-badge">AWS_SBG // 001</div>
              </div>

              <div className="mission-icon-halo">
                <Zap size={22} className="mission-halo-icon" />
              </div>

              <h3 className="mission-heading">
                Build. <span className="text-gradient-purple">Learn.</span> Innovate.
              </h3>

              <p className="mission-description">
                To foster a builder-first culture at JSSATEB where students master cloud architecture, deploy real-world projects, earn recognized certifications and collaborate with enterprise technology leaders.
              </p>

              {/* 3 Core Directives Bar */}
              <div className="mission-pillars-row">
                <div className="mission-pillar-item">
                  <div className="pillar-item-badge">BUILD</div>
                  <span className="pillar-item-sub">Production Solutions</span>
                </div>
                <div className="mission-pillar-sep" aria-hidden="true">/</div>
                <div className="mission-pillar-item">
                  <div className="pillar-item-badge">LEARN</div>
                  <span className="pillar-item-sub">Cloud & Certifications</span>
                </div>
                <div className="mission-pillar-sep" aria-hidden="true">/</div>
                <div className="mission-pillar-item">
                  <div className="pillar-item-badge">INNOVATE</div>
                  <span className="pillar-item-sub">Industry Mentorship</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            PART 3: FOUR CORE PILLARS
            (4-Column Desktop / 2-Column Responsive Grid)
           ========================================================= */}
        <div className="about-pillars-subheading">
          <div className="section-badge about-badge">
            <Layers size={13} />
            <span>// ARCHITECTURE & INITIATIVES</span>
          </div>
          <h3 className="about-sub-title">
            Four Core <span className="text-gradient-purple">Pillars</span>
          </h3>
          <p className="about-sub-desc">
            A comprehensive foundation designed to turn ambitious students into production-ready cloud builders.
          </p>
        </div>

        <div className="about-four-pillars-grid">
          {FOUR_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            const isSelected = activePillar === pillar.id;

            return (
              <div
                key={pillar.id}
                className={`pillar-feature-card ${isSelected ? 'is-selected' : ''}`}
                onMouseEnter={() => setActivePillar(pillar.id)}
                style={{ '--pillar-accent': pillar.accent }}
              >
                {/* Corner Marks */}
                <span className="card-corner tl" aria-hidden="true">+</span>
                <span className="card-corner br" aria-hidden="true">+</span>

                <div className="pillar-card-header">
                  <span className="pillar-number">{pillar.num}</span>
                  <span className="pillar-badge-tag">{pillar.badge}</span>
                </div>

                <div className="pillar-icon-box">
                  <Icon size={22} className="pillar-main-icon" />
                </div>

                <h4 className="pillar-card-title">{pillar.title}</h4>
                <p className="pillar-card-desc">{pillar.description}</p>

                {/* Tech Chips */}
                <div className="pillar-tags-list">
                  {pillar.tags.map((tag) => (
                    <span key={tag} className="pillar-tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pillar-card-glow-line" />
              </div>
            );
          })}
        </div>

        {/* =========================================================
            PART 4: WHY JOIN AWS SBG JSSATEB?
            (Visually Elegant Vertical Benefits Section)
           ========================================================= */}
        <div className="about-why-join-section">
          <div className="why-join-layout">
            {/* Left Column: Command Summary Spotlight Card */}
            <div className="why-join-spotlight-col">
              <div className="why-join-spotlight-card">
                <div className="spotlight-terminal-bar">
                  <div className="terminal-dots">
                    <span className="dot dot-red" />
                    <span className="dot dot-amber" />
                    <span className="dot dot-green" />
                  </div>
                  <span className="terminal-title">AWS_SBG // ADVANTAGE_MATRIX</span>
                </div>

                <div className="spotlight-card-body">
                  <div className="spotlight-hero-badge">
                    <ShieldCheck size={14} />
                    <span>OFFICIAL STUDENT CHAPTER</span>
                  </div>

                  <h3 className="spotlight-heading">
                    Why Join <br />
                    <span className="text-gradient-purple">AWS SBG JSSATEB?</span>
                  </h3>

                  <p className="spotlight-quote">
                    "Zero club fees. Real engineering. Pure builder momentum."
                  </p>

                  <div className="spotlight-checkpoints">
                    <div className="checkpoint-item">
                      <CheckCircle2 size={16} className="cp-icon" />
                      <span>Open to all departments and academic years</span>
                    </div>
                    <div className="checkpoint-item">
                      <CheckCircle2 size={16} className="cp-icon" />
                      <span>Hands-on cloud architecture · not passive slide decks</span>
                    </div>
                    <div className="checkpoint-item">
                      <CheckCircle2 size={16} className="cp-icon" />
                      <span>Direct connection with AWS User Group Bengaluru</span>
                    </div>
                    <div className="checkpoint-item">
                      <CheckCircle2 size={16} className="cp-icon" />
                      <span>Aligned with the AWS All Builders Welcome ethos</span>
                    </div>
                  </div>

                  {/* Terminal CLI prompt snippet */}
                  <div className="spotlight-terminal-cli">
                    <div className="cli-line">
                      <span className="cli-prompt">$</span> aws-sbg join --chapter jssateb
                    </div>
                    <div className="cli-response">
                      <span className="cli-status">&gt;</span> Builder circle initialized. [STATUS: ACTIVE]
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Vertical Benefits Rail */}
            <div className="why-join-benefits-col">
              <div className="benefits-rail-track" aria-hidden="true" />

              <div className="benefits-stream">
                {WHY_JOIN_BENEFITS.map((benefit, index) => {
                  const Icon = benefit.icon;
                  const isHovered = hoveredBenefit === benefit.id;

                  return (
                    <div
                      key={benefit.id}
                      className={`benefit-row-card ${isHovered ? 'benefit-hovered' : ''}`}
                      onMouseEnter={() => setHoveredBenefit(benefit.id)}
                      onMouseLeave={() => setHoveredBenefit(null)}
                      style={{ '--benefit-accent': benefit.accent }}
                    >
                      {/* Left Rail Pin */}
                      <div className="benefit-rail-pin">
                        <span className="pin-number">{benefit.number}</span>
                        <div className="pin-glow-node" />
                      </div>

                      {/* Benefit Content Card */}
                      <div className="benefit-card-content">
                        <div className="benefit-header-row">
                          <div className="benefit-icon-badge">
                            <Icon size={17} className="b-icon" />
                          </div>
                          <div className="benefit-titles">
                            <span className="benefit-category">{benefit.category}</span>
                            <h4 className="benefit-title">{benefit.title}</h4>
                          </div>
                        </div>

                        <p className="benefit-description">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            PART 5: TECH STACK TICKER MARQUEE
            (Clean horizontal transition ribbon into following sections)
           ========================================================= */}
        <div className="about-tech-ribbon-wrapper">
          <div className="tech-ribbon-label">
            <span>TOOLING & CLOUD PRIMITIVES WE BUILD WITH:</span>
          </div>
          <div className="about-tech-loop-container">
            <LogoLoop
              logos={techLogos}
              speed={38}
              direction="right"
              logoHeight={26}
              gap={32}
              hoverSpeed={0}
              scaleOnHover={true}
              fadeOut={true}
              fadeOutColor="var(--bg-dark-base)"
              useCustomRender={false}
              ariaLabel="Cloud technology stack marquee"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;