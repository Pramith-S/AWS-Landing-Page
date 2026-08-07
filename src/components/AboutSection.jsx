import { useState, useEffect, useRef } from 'react';
import { CheckCircle2, Award, Rocket, Terminal, Cpu } from 'lucide-react';
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
import SideRays from './SideRays';
import StrokeText from './StrokeText';
import FoldText from './FoldText';
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

// LED Matrix Drawer Function
function drawNumeralLEDMatrix(number, canvas) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const board = { width: 16, height: 32 };

  const axis_x_points = [
    { from: [0, 0], to: [1, 0] },
    { from: [0, 1], to: [1, 1] },
    { from: [0, 2], to: [1, 2] },
  ];

  const axis_y_points = [
    { from: [0, 0], to: [0, 1] }, // left top
    { from: [0, 1], to: [0, 2] }, // left bottom
    { from: [1, 0], to: [1, 1] }, // right top
    { from: [1, 1], to: [1, 2] }, // right bottom
  ];

  const zero = { x: [0, 2], y: [0, 1, 2, 3] };
  const one = { x: [], y: [2, 3] };
  const two = { x: [0, 1, 2], y: [1, 2] };
  const three = { x: [0, 1, 2], y: [2, 3] };
  const four = { x: [1], y: [0, 2, 3] };
  const five = { x: [0, 1, 2], y: [0, 3] };
  const six = { x: [0, 1, 2], y: [0, 1, 3] };
  const seven = { x: [0], y: [2, 3] };
  const eight = { x: [0, 1, 2], y: [0, 1, 2, 3] };
  const nine = { x: [0, 1, 2], y: [0, 2, 3] };

  const supported_numbers = [zero, one, two, three, four, five, six, seven, eight, nine];

  const utils = {
    is_vertical(points) {
      return points.from[1] !== points.to[1];
    },
    diff(first, second) {
      return first.filter((value) => !second.includes(value));
    }
  };

  ctx.clearRect(0, 0, 100, 100);

  const selected_num = supported_numbers[number] || zero;

  ctx.save();
  ctx.translate(4, 4);

  const x_points = axis_x_points.map((_, index) => index);
  const y_points = axis_y_points.map((_, index) => index);

  const x_on = selected_num.x;
  const x_off = utils.diff(x_points, x_on);

  const y_on = selected_num.y;
  const y_off = utils.diff(y_points, y_on);

  const positioning_values = (points) => {
    const base = board.width / 4;
    let from = {};
    let to = {};

    if (utils.is_vertical(points)) {
      from.x = points.from[0] * board.width;
      from.y = points.from[1] * (board.height / 2) + base;

      to.x = points.to[0] * board.width;
      to.y = points.to[1] * (board.height / 2) - base;
    } else {
      from.x = points.from[0] * board.width + base;
      from.y = points.from[1] * (board.height / 2);

      to.x = points.to[0] * board.width - base;
      to.y = points.to[1] * (board.height / 2);
    }

    return { from, to };
  };

  const draw_line = (points, isOff) => {
    const values = positioning_values(points);

    ctx.save();
    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#FF3B30';
    if (isOff) ctx.globalAlpha = 0.15;
    ctx.moveTo(values.from.x, values.from.y);
    ctx.lineTo(values.to.x, values.to.y);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  };

  x_off.forEach((selected_index) => draw_line(axis_x_points[selected_index], true));
  y_off.forEach((selected_index) => draw_line(axis_y_points[selected_index], true));
  x_on.forEach((selected_index) => draw_line(axis_x_points[selected_index], false));
  y_on.forEach((selected_index) => draw_line(axis_y_points[selected_index], false));

  ctx.restore();
}

const AboutSection = () => {
  const [currentFloor, setCurrentFloor] = useState(1);
  const [displayFloor, setDisplayFloor] = useState(1);
  const [isMoving, setIsMoving] = useState(false);
  const [travelDirection, setTravelDirection] = useState(null); // 'up' | 'down' | null
  const [doorsClosing, setDoorsClosing] = useState(false);

  const canvasRef = useRef(null);

  const floors = [
    {
      floorNumber: 1,
      icon: Terminal,
      stat: "50+ Labs",
      title: "Hands-on Cloud Labs & Workshops",
      description: "Practical deep dives into EC2, Serverless, IAM policies, and Infrastructure as Code.",
      accentColor: "#8B5CF6",
      label: "F1 • Hands-on Labs"
    },
    {
      floorNumber: 2,
      icon: Award,
      stat: "AWS Certified",
      title: "AWS Certification Pathways & Study Groups",
      description: "Structured mentorship for AWS Cloud Practitioner and Solutions Architect exam success.",
      accentColor: "#FF9900",
      label: "F2 • Certifications"
    },
    {
      floorNumber: 3,
      icon: Rocket,
      stat: "25+ Apps",
      title: "Hackathons, Projects & Architecture Showcase",
      description: "Collaborative building sprints deploying scalable, resilient apps directly on AWS infrastructure.",
      accentColor: "#6C2BD9",
      label: "F3 • Hackathons"
    }
  ];

  const goToFloor = (targetFloor) => {
    if (targetFloor === currentFloor || isMoving || targetFloor < 1 || targetFloor > 3) return;

    const direction = targetFloor > currentFloor ? 'up' : 'down';
    const startFloor = currentFloor;

    setIsMoving(true);
    setTravelDirection(direction);
    setDoorsClosing(true);

    // Phase 1: Doors shut (0 - 400ms)
    // Phase 2: Elevator Transit (400ms - 1700ms)
    const totalDistance = Math.abs(targetFloor - startFloor);

    if (totalDistance === 2) {
      // 1 -> 3 or 3 -> 1 (Intermediate floor step at 1000ms)
      setTimeout(() => {
        setDisplayFloor(2);
      }, 1000);
    } else {
      // 1 -> 2 or 2 -> 3 or 3 -> 2 or 2 -> 1
      setTimeout(() => {
        setDisplayFloor(targetFloor);
      }, 1100);
    }

    // Phase 3: Deceleration & Arrival at target (1700ms)
    setTimeout(() => {
      setDisplayFloor(targetFloor);
      setCurrentFloor(targetFloor);
    }, 1700);

    // Phase 4: Journey complete & Doors unlock/open (2000ms)
    setTimeout(() => {
      setIsMoving(false);
      setTravelDirection(null);
      setDoorsClosing(false);
    }, 2000);
  };

  const goUp = () => {
    if (currentFloor < 3 && !isMoving) goToFloor(currentFloor + 1);
  };

  const goDown = () => {
    if (currentFloor > 1 && !isMoving) goToFloor(currentFloor - 1);
  };

  useEffect(() => {
    if (canvasRef.current) {
      drawNumeralLEDMatrix(displayFloor, canvasRef.current);
    }
  }, [displayFloor]);

  const activeCard = floors.find((f) => f.floorNumber === currentFloor) || floors[0];
  const IconComponent = activeCard.icon;

  return (
    <section id="about" className="section-padding about-section">
      {/* SideRays Background */}
      <div className="about-siderays-wrapper">
        <SideRays
          speed={3.5}
          rayColor1="#6c008f"
          rayColor2="#7C3AED"
          intensity={2}
          spread={2}
          origin="top-left"
          tilt={0}
          saturation={1.5}
          blend={0.75}
          falloff={1.6}
          opacity={1.0}
        />
      </div>
      {/* Hidden SVG Filter for Brushed Metal Door Effect */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
        <defs>
          <filter id="brushedMetalEffect" x="0" y="0">
            <feComponentTransfer in="SourceGraphic" result="metal">
              <feFuncR type="gamma" amplitude="1.21" exponent="0.53" />
              <feFuncG type="gamma" amplitude="1.21" exponent="0.53" />
              <feFuncB type="gamma" amplitude="1.21" exponent="0.5" />
            </feComponentTransfer>
            <feBlend in="SourceGraphic" in2="metal" mode="overlay" />
          </filter>
        </defs>
      </svg>

      {/* Background Subtle Gradient Glow */}
      <div className="about-glow-orb"></div>

      <div className="container">
        <div className="about-grid">
          {/* Left Column: Narrative */}
          <div className="about-content">
            <div className="section-badge">
              <Cpu size={14} />
              <span>// WHO WE ARE</span>
            </div>

            <div className="about-stroke-heading" aria-label="Empowering Next-Gen Cloud Architects & Builders">
              <StrokeText
                text="Empowering Next-Gen"
                trigger="scroll"
                strokeColor="#8B5CF6"
                fillColor="#F8FAFC"
                strokeWidth={1.5}
                drawDuration={1.6}
                fillDelay={0.2}
                stagger={0.04}
                fontSize={48}
                fontWeight={800}
                letterSpacing={-1.5}
                fillMode="wipe"
              />
              <StrokeText
                text="Cloud Architects & Builders"
                trigger="scroll"
                strokeColor="#8B5CF6"
                fillColor="#A78BFA"
                strokeWidth={1.5}
                drawDuration={1.8}
                fillDelay={0.3}
                stagger={0.04}
                fontSize={48}
                fontWeight={800}
                letterSpacing={-1.5}
                fillMode="wipe"
              />
            </div>

            <div className="narrative-body">
              <p>
                <FoldText
                  text="The AWS Student Builders Group (AWS SBG) at JSSATEB is an official, student-led initiative bridging the gap between academic theory and production-grade cloud engineering. We cultivate a vibrant developer ecosystem right here on campus in Bengaluru."
                  splitBy="word"
                  hinge="top"
                  trigger="scroll"
                  duration={0.5}
                  stagger={0.02}
                  fontSize="1.025rem"
                  fontWeight={400}
                  color="var(--text-secondary)"
                />
              </p>

              <p>
                <FoldText
                  text="From deploying serverless microservices to configuring enterprise DevSecOps pipelines, our group empowers students with industry-relevant AWS skills, hands-on architectural experience, and direct access to AWS experts and certification roadmaps."
                  splitBy="word"
                  hinge="top"
                  trigger="scroll"
                  duration={0.5}
                  stagger={0.02}
                  fontSize="1.025rem"
                  fontWeight={400}
                  color="var(--text-secondary)"
                />
              </p>
            </div>

            {/* Core Value Checklist */}
            <div className="about-checklist">
              <div className="check-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>
                  <FoldText
                    text="Production-First AWS Architecture"
                    splitBy="word"
                    hinge="top"
                    trigger="scroll"
                    duration={0.5}
                    stagger={0.03}
                    fontSize="0.95rem"
                    fontWeight={500}
                    color="var(--text-primary)"
                  />
                </span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>
                  <FoldText
                    text="Industry Mentor & Certification Guidance"
                    splitBy="word"
                    hinge="top"
                    trigger="scroll"
                    duration={0.5}
                    stagger={0.03}
                    fontSize="0.95rem"
                    fontWeight={500}
                    color="var(--text-primary)"
                  />
                </span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>
                  <FoldText
                    text="Open Source & Cloud Native Building"
                    splitBy="word"
                    hinge="top"
                    trigger="scroll"
                    duration={0.5}
                    stagger={0.03}
                    fontSize="0.95rem"
                    fontWeight={500}
                    color="var(--text-primary)"
                  />
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Elevator & Control Panel */}
          <div className="about-cards-grid elevator-integration-wrapper">
            <div className="elevator-layout flex-container">
              {/* Elevator Frame & Doors */}
              <div className="elevator-frame-container">
                <div className="elevator-header-display">
                  <span className="elevator-header-label">AWS SBG FACILITIES</span>
                  <span className={`elevator-header-floor ${isMoving ? 'moving' : ''}`}>
                    {isMoving ? (travelDirection === 'up' ? '▲ MOVING UP' : '▼ MOVING DOWN') : `FLOOR 0${currentFloor}`}
                  </span>
                </div>
                <section className={`frame ${doorsClosing ? 'doors-locked-shut' : ''} ${isMoving ? `transit-${travelDirection}` : ''}`}>
                  <div className="doors">
                    <div className="door left-door" data-floor={displayFloor}></div>
                    <div className="door right-door" data-floor={displayFloor}></div>
                  </div>
                  <div className="inside">
                    <div className="inside-ceiling-light"></div>
                    <div className="elevator-card-content">
                      <div className="inside-top-badge">
                        <span className="inside-floor-tag">FLOOR 0{activeCard.floorNumber} OF 03</span>
                        <span
                          className="about-stat-tag"
                          style={{
                            color: activeCard.accentColor,
                            borderColor: `${activeCard.accentColor}40`,
                            background: `${activeCard.accentColor}1A`
                          }}
                        >
                          {activeCard.stat}
                        </span>
                      </div>

                      <div
                        className="about-icon-box inside-icon-box"
                        style={{
                          background: `rgba(${activeCard.accentColor === '#FF9900' ? '255, 153, 0' : '139, 92, 246'}, 0.15)`,
                          borderColor: `rgba(${activeCard.accentColor === '#FF9900' ? '255, 153, 0' : '139, 92, 246'}, 0.35)`
                        }}
                      >
                        <IconComponent size={28} style={{ color: activeCard.accentColor }} />
                      </div>

                      <div className="inside-text-group">
                        <h3 className="about-card-title inside-title">{activeCard.title}</h3>
                        <p className="about-card-desc inside-desc">{activeCard.description}</p>
                      </div>

                      <div
                        className="inside-bottom-accent"
                        style={{ background: `linear-gradient(90deg, ${activeCard.accentColor}, transparent)` }}
                      ></div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Elevator Button Interface (Panel) */}
              <div className="elevator-panel-container center">
                <div className="panel">
                  <div className="panel-title">CONTROL</div>
                  <div className="num">
                    <canvas ref={canvasRef} width="24" height="40"></canvas>
                  </div>

                  {/* Dedicated Floor Selector Buttons 3, 2, 1 */}
                  <div className="direct-floor-buttons">
                    {floors.slice().reverse().map((f) => (
                      <button
                        key={f.floorNumber}
                        className={`metal radial floor-num-btn ${currentFloor === f.floorNumber ? 'active-floor-btn' : ''} ${isMoving ? 'disabled' : ''}`}
                        onClick={() => goToFloor(f.floorNumber)}
                        disabled={isMoving}
                        title={`Select Floor ${f.floorNumber}: ${f.title}`}
                      >
                        <span className="btn-floor-num">{f.floorNumber}</span>
                      </button>
                    ))}
                  </div>

                  {/* Up / Down Controls */}
                  <div className="buttons">
                    <button
                      className={`metal radial plus ${currentFloor >= 3 || isMoving ? 'disabled' : ''}`}
                      onClick={goUp}
                      disabled={currentFloor >= 3 || isMoving}
                      title="Elevator Up"
                    >
                      ↑
                    </button>
                    <button
                      className={`metal radial minus ${currentFloor <= 1 || isMoving ? 'disabled' : ''}`}
                      onClick={goDown}
                      disabled={currentFloor <= 1 || isMoving}
                      title="Elevator Down"
                    >
                      ↓
                    </button>
                  </div>

                  <div className="floor-quick-legend">
                    {floors.map((f) => (
                      <div
                        key={f.floorNumber}
                        className={`legend-item ${f.floorNumber === currentFloor ? 'active' : ''}`}
                      >
                        <span className="legend-num">F{f.floorNumber}</span>
                        <span className="legend-label">{f.label.split(' • ')[1]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Height Vertical Tech Stack Logo Loop (Left Side, Moving UP) */}
      <div className="about-section-logo-loop-column left-loop">
        <LogoLoop
          logos={techLogos}
          speed={45}
          direction="up"
          logoHeight={42}
          gap={32}
          hoverSpeed={0}
          scaleOnHover={true}
          fadeOut={false}
          fadeOutColor="transparent"
          useCustomRender={false}
          ariaLabel="Cloud technology stack partners left"
        />
      </div>

      {/* Full-Height Vertical Tech Stack Logo Loop (Right Side, Moving DOWN) */}
      <div className="about-section-logo-loop-column right-loop">
        <LogoLoop
          logos={techLogos}
          speed={45}
          direction="down"
          logoHeight={42}
          gap={32}
          hoverSpeed={0}
          scaleOnHover={true}
          fadeOut={false}
          fadeOutColor="transparent"
          useCustomRender={false}
          ariaLabel="Cloud technology stack partners right"
        />
      </div>
    </section>
  );
};

export default AboutSection;
