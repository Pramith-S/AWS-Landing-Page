import fs from 'fs';
import path from 'path';

const filePath = path.resolve('public/popup/index.html');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Replace the #poster style block and sound button up to <script>
const startToken = '/* the film\'s own still, there the moment the page opens';
const endToken = '<script>';

const startIndex = content.indexOf(startToken);
const endIndex = content.indexOf(endToken);

if (startIndex === -1 || endIndex === -1) {
  console.error('Tokens not found!');
  process.exit(1);
}

const hudCssAndHtml = `/* AWS SBG Pop-Up Book HUD & Controls */
  #poster { display: none !important; }

  /* Audio icon relocated to top right corner */
  #sound {
    position: fixed;
    right: calc(16px + env(safe-area-inset-right));
    top: 14px;
    z-index: 101;
    width: 38px;
    height: 38px;
    padding: 0;
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
    color: #e2e8f0;
    background: rgba(15, 23, 42, 0.75);
    border: 1px solid rgba(255, 153, 0, 0.35);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    opacity: 0.9;
    transition: all 0.25s ease;
  }
  #sound:hover {
    background: rgba(255, 153, 0, 0.2);
    border-color: #FF9900;
    transform: scale(1.06);
  }
  #sound svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
  #sound .spk { fill: currentColor; }
  #sound .wave { display: none; }
  #sound.on .wave { display: inline; }
  #sound.on .mute { display: none; }

  /* Top Navigation & Chapter Selector Bar */
  .aws-hud-topbar {
    position: fixed;
    top: 14px;
    left: 16px;
    right: 70px;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    pointer-events: none;
    gap: 12px;
  }
  .aws-hud-brand {
    pointer-events: auto;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: rgba(10, 14, 26, 0.82);
    border: 1px solid rgba(255, 153, 0, 0.35);
    padding: 6px 14px;
    border-radius: 999px;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.45), 0 0 15px rgba(255, 153, 0, 0.15);
  }
  .aws-hud-brand-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    background: linear-gradient(135deg, #FF9900 0%, #FFB84D 100%);
    border-radius: 5px;
    color: #111;
    font-weight: 900;
    font-size: 11px;
    font-family: system-ui, -apple-system, sans-serif;
    letter-spacing: -0.5px;
  }
  .aws-hud-brand-text {
    display: flex;
    flex-direction: column;
    font-family: system-ui, -apple-system, sans-serif;
  }
  .aws-hud-brand-title {
    color: #f8fafc;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
  .aws-hud-brand-sub {
    color: #FF9900;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.08em;
  }

  /* Chapter Quick Pills */
  .aws-hud-chapters {
    pointer-events: auto;
    display: flex;
    align-items: center;
    gap: 6px;
    overflow-x: auto;
    max-width: 100%;
    scrollbar-width: none;
  }
  .aws-hud-chapters::-webkit-scrollbar { display: none; }
  .aws-chapter-pill {
    padding: 5px 12px;
    background: rgba(15, 23, 42, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 999px;
    color: #94a3b8;
    font-family: monospace;
    font-size: 10.5px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
  .aws-chapter-pill:hover {
    color: #f8fafc;
    border-color: rgba(255, 153, 0, 0.4);
    background: rgba(255, 153, 0, 0.1);
  }
  .aws-chapter-pill.active {
    color: #FF9900;
    background: rgba(255, 153, 0, 0.18);
    border-color: #FF9900;
    box-shadow: 0 0 12px rgba(255, 153, 0, 0.25);
  }

  /* Story HUD Card (Lower Left Overlay) */
  .aws-hud-story-card {
    position: fixed;
    bottom: 20px;
    left: 20px;
    z-index: 100;
    max-width: 440px;
    width: calc(100vw - 40px);
    background: rgba(10, 14, 26, 0.86);
    border: 1px solid rgba(255, 153, 0, 0.3);
    border-radius: 16px;
    padding: 18px 20px 16px 20px;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.65), 0 0 30px rgba(255, 153, 0, 0.1);
    font-family: system-ui, -apple-system, sans-serif;
    color: #f8fafc;
    transition: all 0.3s ease;
  }
  .aws-hud-chapter-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 3px 10px;
    border-radius: 999px;
    background: rgba(255, 153, 0, 0.15);
    border: 1px solid rgba(255, 153, 0, 0.4);
    color: #FF9900;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-family: monospace;
    margin-bottom: 8px;
  }
  .aws-hud-title {
    font-size: 16px;
    font-weight: 800;
    color: #ffffff;
    line-height: 1.25;
    margin: 0 0 4px 0;
    letter-spacing: -0.01em;
  }
  .aws-hud-sub {
    font-size: 12px;
    font-weight: 600;
    color: #FF9900;
    margin: 0 0 8px 0;
  }
  .aws-hud-desc {
    font-size: 12px;
    line-height: 1.5;
    color: #cbd5e1;
    margin: 0 0 14px 0;
  }

  /* Action Buttons inside Story Card */
  .aws-hud-actions {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  .aws-btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    background: linear-gradient(135deg, #FF9900 0%, #EA580C 100%);
    border: none;
    border-radius: 10px;
    color: #ffffff;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.02em;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(255, 153, 0, 0.35);
    transition: all 0.2s ease;
  }
  .aws-btn-primary:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(255, 153, 0, 0.5);
    filter: brightness(1.1);
  }
  .aws-btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 7px 13px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 10px;
    color: #e2e8f0;
    font-size: 11.5px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .aws-btn-secondary:hover {
    background: rgba(255, 255, 255, 0.14);
    border-color: rgba(255, 153, 0, 0.5);
    color: #ffffff;
  }
  .aws-btn-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 10px;
    color: #e2e8f0;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .aws-btn-icon:hover {
    background: rgba(255, 153, 0, 0.2);
    border-color: #FF9900;
    color: #FF9900;
  }

  /* What You Will Get Modal Overlay */
  .aws-hud-modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 200;
    background: rgba(2, 6, 23, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    display: none;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  .aws-hud-modal-backdrop.open {
    display: flex;
  }
  .aws-hud-modal {
    max-width: 520px;
    width: 100%;
    background: linear-gradient(180deg, #111625 0%, #0a0d18 100%);
    border: 1px solid rgba(255, 153, 0, 0.4);
    border-radius: 20px;
    padding: 26px 28px;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(255, 153, 0, 0.15);
    font-family: system-ui, -apple-system, sans-serif;
    color: #f8fafc;
    position: relative;
    animation: modalPop 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }
  @keyframes modalPop {
    from { opacity: 0; transform: scale(0.92); }
    to { opacity: 1; transform: scale(1); }
  }
  .aws-modal-close-btn {
    position: absolute;
    top: 18px;
    right: 18px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    color: #94a3b8;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .aws-modal-close-btn:hover {
    color: #ffffff;
    background: rgba(239, 68, 68, 0.2);
    border-color: #ef4444;
  }
  .aws-modal-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 3px 10px;
    border-radius: 999px;
    background: rgba(255, 153, 0, 0.15);
    border: 1px solid rgba(255, 153, 0, 0.4);
    color: #FF9900;
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 0.08em;
    font-family: monospace;
    margin-bottom: 8px;
  }
  .aws-modal-title {
    font-size: 20px;
    font-weight: 800;
    color: #ffffff;
    margin: 0 0 6px 0;
  }
  .aws-modal-desc {
    font-size: 13px;
    color: #94a3b8;
    line-height: 1.5;
    margin: 0 0 18px 0;
  }
  .aws-perks-grid {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 22px;
  }
  .aws-perk-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: 12px;
    padding: 10px 14px;
    transition: border-color 0.2s ease;
  }
  .aws-perk-item:hover {
    border-color: rgba(255, 153, 0, 0.35);
  }
  .aws-perk-icon {
    font-size: 18px;
    line-height: 1;
    margin-top: 2px;
  }
  .aws-perk-title {
    font-size: 13px;
    font-weight: 700;
    color: #f8fafc;
    margin: 0 0 2px 0;
  }
  .aws-perk-detail {
    font-size: 11.5px;
    color: #94a3b8;
    line-height: 1.4;
    margin: 0;
  }

  @media (max-width: 640px) {
    .aws-hud-topbar { right: 58px; top: 10px; left: 10px; }
    .aws-hud-brand-title { font-size: 10px; }
    .aws-hud-brand-sub { display: none; }
    .aws-hud-story-card { left: 10px; bottom: 10px; width: calc(100vw - 20px); padding: 14px; }
    .aws-hud-title { font-size: 14px; }
    .aws-hud-desc { font-size: 11px; margin-bottom: 10px; }
  }
</style>

<!-- Topbar Navigation -->
<div class="aws-hud-topbar">
  <div class="aws-hud-brand">
    <div class="aws-hud-brand-logo">AWS</div>
    <div class="aws-hud-brand-text">
      <span class="aws-hud-brand-title">AWS Student Builder Group</span>
      <span class="aws-hud-brand-sub">JSSATEB CHAPTER</span>
    </div>
  </div>
  <div class="aws-hud-chapters" id="aws-chapter-nav">
    <button class="aws-chapter-pill active" data-time="7.0">01 Tower Keep</button>
    <button class="aws-chapter-pill" data-time="23.0">02 DevOps Sea</button>
    <button class="aws-chapter-pill" data-time="44.0">03 GenAI Bedrock</button>
    <button class="aws-chapter-pill" data-time="63.0">04 Metropolis</button>
    <button class="aws-chapter-pill" data-time="78.0">05 Join Journey</button>
  </div>
</div>

<!-- Story HUD Card Overlay -->
<div class="aws-hud-story-card" id="aws-story-card">
  <div class="aws-hud-chapter-badge" id="aws-hud-badge">CHAPTER 01 · FOUNDATION KEEP</div>
  <h3 class="aws-hud-title" id="aws-hud-title">AWS SBG JSSATEB · Gateway of Cloud Architects</h3>
  <div class="aws-hud-sub" id="aws-hud-sub">The Architect's Codex opens into the grand builder fortress.</div>
  <p class="aws-hud-desc" id="aws-hud-desc">
    Where students become engineers. Master core infrastructure, high availability VPC networks, and builder security from day one.
  </p>
  <div class="aws-hud-actions">
    <button class="aws-btn-primary" id="aws-hud-join-btn">
      <span>⚡ Join AWS SBG</span>
    </button>
    <button class="aws-btn-secondary" id="aws-hud-perks-btn">
      <span>🎁 What You Get</span>
    </button>
    <button class="aws-btn-secondary" id="aws-hud-restart-btn" title="Replay Tower">
      <span>↺ Tower</span>
    </button>
    <button class="aws-btn-icon" id="aws-hud-playpause-btn" title="Pause/Play">
      <span id="play-pause-icon">⏸</span>
    </button>
  </div>
</div>

<!-- Perks / What You Will Get Modal -->
<div class="aws-hud-modal-backdrop" id="aws-perks-modal">
  <div class="aws-hud-modal">
    <button class="aws-modal-close-btn" id="aws-modal-close">✕</button>
    <div class="aws-modal-badge">BUILDER PRIVILEGES</div>
    <h2 class="aws-modal-title">What You Will Get In AWS SBG</h2>
    <p class="aws-modal-desc">
      When you join AWS Student Builder Group JSSATEB, you get access to sanctioned enterprise cloud perks, certifications, and high-impact project tracks:
    </p>
    <div class="aws-perks-grid">
      <div class="aws-perk-item">
        <span class="aws-perk-icon">🏅</span>
        <div>
          <h4 class="aws-perk-title">AWS Certification Vouchers (50% - 100% Off)</h4>
          <p class="aws-perk-detail">Official exam discounts for AWS Cloud Practitioner, Solutions Architect Associate, and Machine Learning Specialty.</p>
        </div>
      </div>
      <div class="aws-perk-item">
        <span class="aws-perk-icon">☁️</span>
        <div>
          <h4 class="aws-perk-title">$100+ AWS Cloud Credits</h4>
          <p class="aws-perk-detail">Deploy real servers, Bedrock AI models, Lambda microservices, and databases without spending your personal money.</p>
        </div>
      </div>
      <div class="aws-perk-item">
        <span class="aws-perk-icon">🚀</span>
        <div>
          <h4 class="aws-perk-title">Exclusive Hackathons & Buildathons</h4>
          <p class="aws-perk-detail">Compete in internal club buildathons and global AWS competitions with funded travel and prize pools.</p>
        </div>
      </div>
      <div class="aws-perk-item">
        <span class="aws-perk-icon">👨‍💻</span>
        <div>
          <h4 class="aws-perk-title">Mentorship From Senior Cloud Engineers</h4>
          <p class="aws-perk-detail">Learn directly from alumni and AWS community builders working at top tech firms.</p>
        </div>
      </div>
      <div class="aws-perk-item">
        <span class="aws-perk-icon">🛠️</span>
        <div>
          <h4 class="aws-perk-title">GitHub Portfolio Contributions</h4>
          <p class="aws-perk-detail">Ship production open-source code under the official awsjssateb organization for verifiable resume proof.</p>
        </div>
      </div>
    </div>
    <button class="aws-btn-primary" id="aws-modal-join-btn" style="width: 100%; justify-content: center; padding: 12px;">
      <span>⚡ Join AWS Student Builder Group Now</span>
    </button>
  </div>
</div>

<button id="sound" class="" type="button" aria-label="Sound on" aria-pressed="false">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path class="spk" d="M3.5 9.2h3.3l4.7-4v13.6l-4.7-4H3.5z"/>
    <path class="mute" d="M15.6 9.4l5 5.2M20.6 9.4l-5 5.2"/>
    <path class="wave" d="M15.2 9.1a4.2 4.2 0 0 1 0 5.8"/>
    <path class="wave w2" d="M17.9 6.6a7.8 7.8 0 0 1 0 10.8"/>
  </svg>
</button>
<script>`;

content = content.substring(0, startIndex) + hudCssAndHtml + content.substring(endIndex + endToken.length);

// 2. Add HUD runtime logic into <script>
const hudScriptLogic = `
// ============================================================================
// AWS SBG JSSATEB INTERACTIVE STORYLINE CONTROLS
// ============================================================================
const CHAPTERS = [
  {
    start: 0,
    end: 22,
    badge: 'CHAPTER 01 · FOUNDATION KEEP',
    title: 'AWS SBG JSSATEB · Gateway of Cloud Architects',
    sub: 'The Architect\'s Codex opens into the grand builder fortress.',
    desc: 'Where students become engineers. Master core infrastructure, high availability VPC networks, and builder security from day one.'
  },
  {
    start: 22,
    end: 42,
    badge: 'CHAPTER 02 · HIGH AVAILABILITY VOYAGE',
    title: 'DevOps & Container Fleet in Wild Waters',
    sub: 'Sailing through CI/CD pipelines, ECS, and auto-scaling fleets.',
    desc: 'Battle-test production systems under real storm loads. Learn container orchestration, automated deployments, and resilient multi-AZ reliability.'
  },
  {
    start: 42,
    end: 60,
    badge: 'CHAPTER 03 · FOUNDATION MODELS',
    title: 'Amazon Bedrock & Generative AI Lab',
    sub: 'Awakening autonomous agent dragons and unlocking builder treasures.',
    desc: 'Tame cutting-edge LLMs, Claude, Titan, and Diffusion architectures. Build AI agents, RAG pipelines, and unlock AWS Builder credits.'
  },
  {
    start: 60,
    end: 77,
    badge: 'CHAPTER 04 · FULL-STACK METROPOLIS',
    title: 'Global Edge & CloudFront Skyscraper Skyline',
    sub: 'Connected microservices, serverless lambdas, and modern apps.',
    desc: 'Deploy planetary-scale applications with zero cold starts. CloudFront edge distribution, serverless event-driven systems, and production full-stack engines.'
  },
  {
    start: 77,
    end: 999,
    badge: 'FINALE · JOIN THE MOVEMENT',
    title: 'Build The Future With AWS SBG JSSATEB',
    sub: 'Your journey from student to shipped cloud engineer starts now.',
    desc: 'Gain exclusive AWS vouchers, credits, hackathon sponsorships, and lifetime peer network. Click below to secure your builder membership.'
  }
];

let lastActiveChapter = -1;

function updateHud(time) {
  let chIndex = CHAPTERS.findIndex(c => time >= c.start && time < c.end);
  if (chIndex === -1) chIndex = CHAPTERS.length - 1;

  if (chIndex !== lastActiveChapter) {
    lastActiveChapter = chIndex;
    const ch = CHAPTERS[chIndex];
    const bBadge = document.getElementById('aws-hud-badge');
    const bTitle = document.getElementById('aws-hud-title');
    const bSub = document.getElementById('aws-hud-sub');
    const bDesc = document.getElementById('aws-hud-desc');
    if (bBadge) bBadge.textContent = ch.badge;
    if (bTitle) bTitle.textContent = ch.title;
    if (bSub) bSub.textContent = ch.sub;
    if (bDesc) bDesc.textContent = ch.desc;

    // Update active pill
    const pills = document.querySelectorAll('.aws-chapter-pill');
    pills.forEach((p, idx) => {
      p.classList.toggle('active', idx === chIndex);
    });
  }
}

function updatePlayPauseBtn() {
  const icon = document.getElementById('play-pause-icon');
  if (icon) icon.textContent = MAIN.paused ? '▶' : '⏸';
}

function initHudControls() {
  // Chapter pills seeking
  const pills = document.querySelectorAll('.aws-chapter-pill');
  pills.forEach(p => {
    p.addEventListener('click', () => {
      const t = parseFloat(p.getAttribute('data-time'));
      MAIN.time = t;
      STORY.T = storyTime(MAIN.time);
      updateHud(STORY.T);
    });
  });

  // Join button triggers modal in parent app
  const joinBtns = [document.getElementById('aws-hud-join-btn'), document.getElementById('aws-modal-join-btn')];
  joinBtns.forEach(b => {
    if (b) {
      b.addEventListener('click', () => {
        try {
          window.parent.postMessage({ type: 'OPEN_JOIN_MODAL' }, '*');
        } catch(e) {}
      });
    }
  });

  // What you will get modal open/close
  const perksBtn = document.getElementById('aws-hud-perks-btn');
  const perksModal = document.getElementById('aws-perks-modal');
  const modalClose = document.getElementById('aws-modal-close');

  if (perksBtn && perksModal) {
    perksBtn.addEventListener('click', () => {
      perksModal.classList.add('open');
    });
  }
  if (modalClose && perksModal) {
    modalClose.addEventListener('click', () => {
      perksModal.classList.remove('open');
    });
  }
  if (perksModal) {
    perksModal.addEventListener('click', (e) => {
      if (e.target === perksModal) perksModal.classList.remove('open');
    });
  }

  // Restart Tower
  const restartBtn = document.getElementById('aws-hud-restart-btn');
  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      MAIN.time = 7.0;
      STORY.T = storyTime(MAIN.time);
      updateHud(STORY.T);
    });
  }

  // Play/Pause toggle
  const playPauseBtn = document.getElementById('aws-hud-playpause-btn');
  if (playPauseBtn) {
    playPauseBtn.addEventListener('click', () => {
      MAIN.paused = !MAIN.paused;
      updatePlayPauseBtn();
    });
  }
}
`;

// Insert hudScriptLogic right before function frame()
const frameFuncIndex = content.indexOf('function frame() {');
if (frameFuncIndex === -1) {
  console.error('function frame not found!');
  process.exit(1);
}
content = content.substring(0, frameFuncIndex) + hudScriptLogic + '\n' + content.substring(frameFuncIndex);

// Update frame() to call updateHud(STORY.T) and remove poster if any
content = content.replace(
  'function frame() {',
  'function frame() {\n  if (POSTER) { POSTER.remove(); POSTER = null; }\n  updateHud(STORY.T);'
);

// Update start block: default to t=6.8 so it blooms tower immediately
content = content.replace(
  "MAIN.offset = PARAMS.has('t') ? +PARAMS.get('t') : 0;",
  "MAIN.offset = PARAMS.has('t') ? +PARAMS.get('t') : 6.8;\nMAIN.time = MAIN.offset;\nMAIN.paused = false;\nif (POSTER) { POSTER.remove(); POSTER = null; }\ninitHudControls();\nupdateHud(storyTime(MAIN.time));"
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Successfully updated public/popup/index.html with AWS SBG HUD and default autoplay!');
