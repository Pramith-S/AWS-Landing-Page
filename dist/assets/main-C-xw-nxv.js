import{c as $,r as d,j as e,g as q,A as G,X as J,M as U,T as W,L as H,a as V,D as Y,R as X,b as _,C as K,d as Q,B as Z,S as ee,e as se,f as ae,h as te,i as ie,W as ne,J as re,k as le,l as oe,E as ce,P as de,m as he,n as pe,F as me,o as ue,p as ge,q as ve,s as xe}from"./index-BlH2tXw5.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=$("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]),be=({logo:g,logoAlt:h="Logo",items:t=[],activeHref:i="#about",className:p="",ease:v="power2.easeOut",baseColor:o="rgba(20, 17, 32, 0.65)",pillColor:s="#7C3AED",hoveredPillTextColor:n="#ffffff",pillTextColor:r="#94a3b8",theme:b="dark",initialLoadAnimation:m=!1})=>{const[u,f]=d.useState(null),y=d.useRef(null),A=d.useRef(null),S=d.useRef({}),j=u||i,E=()=>{const N=y.current,k=S.current[j],C=A.current;if(!N||!k||!C)return;const w=N.getBoundingClientRect(),T=k.getBoundingClientRect(),O=T.left-w.left,c=T.width;q.to(C,{left:`${O}px`,width:`${c}px`,duration:.35,ease:v,opacity:1})};return d.useEffect(()=>(E(),window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)),[j,v]),e.jsxs("div",{ref:y,className:`pill-nav-container ${b} ${p}`.trim(),style:{"--base-color":o,"--pill-color":s,"--pill-text-color":r,"--hover-pill-text-color":n},children:[g&&e.jsx("a",{href:"#",className:"pill-nav-logo",children:e.jsx("img",{src:g,alt:h})}),e.jsx("div",{ref:A,className:"pill-nav-slider"}),e.jsx("div",{className:"pill-nav-items",children:t.map(N=>{const k=N.href||`#${N.label.toLowerCase()}`,C=j===k;return e.jsx("a",{ref:w=>S.current[k]=w,href:k,className:`pill-nav-item ${C?"is-active":""}`,onClick:()=>f(null),onMouseEnter:()=>f(k),onMouseLeave:()=>f(null),children:N.label},N.label)})})]})},fe="/images/aws_logo.png",je=({onOpenJoinModal:g})=>{const[h,t]=d.useState(!1),[i,p]=d.useState(!1),[v,o]=d.useState("#about");d.useEffect(()=>{const n=["about","pillars","events","domains","core-team","contact","faq"];let r=!1;const b=()=>{t(window.scrollY>20);const u=window.innerHeight*.4;let f="#about";for(const y of n){const A=document.getElementById(y);if(A){const S=A.getBoundingClientRect();S.top<=u&&S.bottom>=80&&(f=`#${y}`)}}o(f),r=!1},m=()=>{r||(r=!0,requestAnimationFrame(b))};return window.addEventListener("scroll",m,{passive:!0}),b(),()=>window.removeEventListener("scroll",m)},[]);const s=[{name:"About",href:"#about"},{name:"Pillars",href:"#pillars"},{name:"Events",href:"#events"},{name:"Domains",href:"#domains"},{name:"Core Team",href:"#core-team"},{name:"Contact",href:"#contact"},{name:"FAQ",href:"#faq"}];return e.jsxs("header",{className:`sbg-navbar ${h?"scrolled":""}`,children:[e.jsxs("div",{className:"container nav-container",children:[e.jsxs("a",{href:"#",className:"nav-brand",children:[e.jsx("img",{src:fe,alt:"AWS Logo",className:"aws-brand-logo"}),e.jsxs("div",{className:"brand-text-group",children:[e.jsxs("span",{className:"brand-title",children:["AWS ",e.jsx("span",{className:"highlight",children:"Student Builder Group"})]}),e.jsxs("span",{className:"brand-subtitle",children:[e.jsx("span",{className:"full-sub-text",children:"JSS Academy of Technical Education Bengaluru"}),e.jsx("span",{className:"short-sub-text",children:"JSSATEB"})]})]})]}),e.jsx("nav",{className:"nav-desktop-links",children:e.jsx(be,{items:[{label:"About",href:"#about"},{label:"Pillars",href:"#pillars"},{label:"Events",href:"#events"},{label:"Domains",href:"#domains"},{label:"Core Team",href:"#core-team"},{label:"Contact",href:"#contact"},{label:"FAQ",href:"#faq"}],activeHref:v,ease:"power2.easeOut",theme:"dark",initialLoadAnimation:!1})}),e.jsxs("div",{className:"nav-actions",children:[e.jsxs("a",{href:"https://bit.ly/45162HC",target:"_blank",rel:"noreferrer",className:"nav-cta-btn",children:[e.jsx("span",{children:"Join Group"}),e.jsx(G,{size:16})]}),e.jsx("button",{className:"mobile-toggle-btn",onClick:()=>p(!i),"aria-label":"Toggle menu",children:i?e.jsx(J,{size:24}):e.jsx(U,{size:24})})]})]}),i&&e.jsx("div",{className:"mobile-drawer",children:e.jsxs("div",{className:"mobile-links",children:[s.map(n=>e.jsx("a",{href:n.href,className:"mobile-link",onClick:()=>p(!1),children:n.name},n.name)),e.jsx("a",{href:"https://www.meetup.com/aws-sbg-at-jss-academy-of-technical-education-bengaluru/",target:"_blank",rel:"noreferrer",className:"btn-purple-primary mobile-cta-btn",onClick:()=>p(!1),children:"Join Group"})]})})]})},Ne=()=>{const g=[{id:1,badge:"SKILL BUILDING",icon:W,title:"Technical Workshops & Bootcamps",description:"Hands-on, project-based intensive bootcamps focused on foundational and advanced AWS cloud primitives, cloud-native engineering, and automated DevOps.",tags:["EC2 & S3","Serverless Lambda","IAM & DevSecOps","Kubernetes (EKS)","Cloud Security"],highlight:"Weekly Hands-on Labs",channel:"CH 01"},{id:2,badge:"PRODUCTION BUILDING",icon:H,title:"Cloud Projects & Architecture",description:"Collaborative open-source development where students design, build, and deploy production-grade cloud architectures for real community and collegiate applications.",tags:["Microservices","Terraform / CDK","Docker Containers","CI/CD Pipelines","DynamoDB"],highlight:"Open Source Engineering",channel:"CH 02"},{id:3,badge:"CAREER ACCELERATION",icon:V,title:"Career & Certifications",description:"Structured pathways and peer study groups for AWS Certified Cloud Practitioner & Solutions Architect exams, plus industry mentorship and networking.",tags:["AWS Certifications","1-on-1 Mentorship","Resume Reviews","Cloud Network"],highlight:"Industry Recognized",channel:"CH 03"}],[h,t]=d.useState(0),[i,p]=d.useState(!0),[v,o]=d.useState(!1),s=d.useRef(null),n=m=>{i&&(o(!0),t(m),setTimeout(()=>{o(!1)},400))};d.useEffect(()=>{if(i)return s.current=setInterval(()=>{t(m=>{const u=(m+1)%g.length;return o(!0),setTimeout(()=>o(!1),400),u})},15e3),()=>{s.current&&clearInterval(s.current)}},[i,h]),d.useEffect(()=>{if(!i)return;let m;const u=()=>{const f=Math.floor(Math.random()*3e3)+2e3;m=setTimeout(()=>{o(!0),setTimeout(()=>o(!1),220),u()},f)};return u(),()=>{m&&clearTimeout(m)}},[i]);const r=g[h],b=r.icon;return e.jsxs("section",{id:"pillars",className:"section-padding pillars-section",children:[e.jsx("div",{className:"pillars-bg-overlay"}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"pillars-header text-center",children:[e.jsx("div",{className:"section-badge",children:e.jsx("span",{children:"// CORE PILLARS"})}),e.jsxs("h2",{className:"section-title",children:[e.jsx(Y,{text:"What We Do: ",animateOn:"view",speed:35,sequential:!0,className:"decrypted",encryptedClassName:"encrypted"}),e.jsx("span",{className:"text-gradient-purple",children:"3 Core Pillars"})]}),e.jsx("p",{className:"section-description mx-auto",children:"Explore the core pillars driving student innovation, cloud architecture, and industry career readiness at AWS SBG JSSATEB."})]}),e.jsx("div",{className:"tv-console-container",children:e.jsxs("div",{className:"tv-cabinet",children:[e.jsxs("div",{className:"tv-antenna-wrapper",children:[e.jsx("div",{className:"antenna-base"}),e.jsx("div",{className:"antenna-rod rod-left",children:e.jsx("div",{className:"antenna-tip"})}),e.jsx("div",{className:"antenna-rod rod-right",children:e.jsx("div",{className:"antenna-tip"})})]}),e.jsx("div",{className:"tv-screen-bezel",children:e.jsxs("div",{className:"tv-screen-glass",children:[e.jsx("div",{className:"tv-scanlines"}),e.jsx("div",{className:"tv-glass-glare"}),v&&e.jsx("div",{className:"tv-static-effect"}),e.jsx("div",{className:`tv-display-viewport ${i?"powered-on":"powered-off"}`,children:i?e.jsxs("div",{className:"tv-screen-content",children:[e.jsxs("div",{className:"tv-broadcast-bar",children:[e.jsxs("div",{className:"tv-broadcast-channel",children:[e.jsx("span",{className:"tv-ch-number",children:r.channel}),e.jsx("span",{className:"tv-live-indicator",children:"● BROADCASTING"})]}),e.jsxs("div",{className:"tv-auto-timer",children:[e.jsx(B,{size:13}),e.jsx("span",{children:"CORE PILLARS"})]})]}),e.jsxs("div",{className:"tv-pillar-details",children:[e.jsxs("div",{className:"tv-pillar-badge-row",children:[e.jsx("div",{className:"tv-pillar-icon-box",children:e.jsx(b,{size:22,className:"pillar-icon"})}),e.jsx("span",{className:"tv-pillar-badge",children:r.badge})]}),e.jsx("h3",{className:"tv-pillar-title",children:r.title}),e.jsx("p",{className:"tv-pillar-desc",children:r.description}),e.jsx("div",{className:"tv-pillar-tags",children:r.tags.map((m,u)=>e.jsx("span",{className:"tv-tag-item",children:m},u))}),e.jsx("div",{className:"tv-pillar-footer",children:e.jsxs("span",{className:"tv-pillar-highlight",children:["✨ ",r.highlight]})})]})]}):e.jsxs("div",{className:"tv-screen-off-state",children:[e.jsx(B,{size:48,className:"off-icon"}),e.jsx("span",{children:"TELEVISION STANDBY"}),e.jsx("small",{children:"Press Power knob to turn ON"})]})})]})}),e.jsxs("div",{className:"tv-control-panel",children:[e.jsx("div",{className:"tv-speaker-grill",children:e.jsx("div",{className:"tv-speaker-slots",children:[...Array(10)].map((m,u)=>e.jsx("div",{className:"tv-grill-slot"},u))})}),e.jsxs("div",{className:"tv-knobs-row",children:[e.jsxs("div",{className:"tv-knob-group",children:[e.jsx("input",{id:"checkbox",type:"checkbox",checked:i,onChange:()=>p(!i)}),e.jsx("label",{className:"switch",htmlFor:"checkbox",title:"Toggle TV Power",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"slider",children:e.jsx("path",{d:"M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"})})})]}),e.jsx("div",{className:"tv-knob-group",children:e.jsx("div",{className:"tv-rotary-knob vol-knob",title:"Volume Control",children:e.jsx("div",{className:"knob-line"})})})]}),e.jsxs("div",{className:"tv-tuning-section",children:[e.jsxs("div",{className:"tv-tuning-header",children:[e.jsx("span",{className:"tv-knob-label",children:"CHANNEL TUNING"}),e.jsx(X,{size:14,className:"radio-icon"})]}),e.jsxs("div",{className:"clock-input",children:[e.jsx("input",{type:"radio",id:"v1",name:"clock-radio",checked:h===0,onChange:()=>n(0)}),e.jsx("input",{type:"radio",id:"v2",name:"clock-radio",checked:h===1,onChange:()=>n(1)}),e.jsx("input",{type:"radio",id:"v3",name:"clock-radio",checked:h===2,onChange:()=>n(2)}),e.jsx("label",{htmlFor:"v1",id:"l1",onClick:()=>n(0),title:"CH 01"}),e.jsx("label",{htmlFor:"v2",id:"l2",onClick:()=>n(1),title:"CH 02"}),e.jsx("label",{htmlFor:"v3",id:"l3",onClick:()=>n(2),title:"CH 03"}),e.jsx("div",{className:"dial"})]}),e.jsx("div",{className:"tv-channel-selector",children:g.map((m,u)=>e.jsxs("button",{type:"button",className:`tv-chan-button ${h===u?"active":""}`,onClick:()=>n(u),children:["CH 0",u+1]},m.id))})]})]})]})})]})]})},ke=()=>{const g=d.useRef(null),h=d.useRef(null),t=d.useRef({x:-1e3,y:-1e3,targetX:-1e3,targetY:-1e3,active:!1}),i=d.useRef(null),p=d.useRef(!0);return d.useEffect(()=>{const v=h.current,o=g.current;if(!v||!o)return;const s=v.getContext("2d",{alpha:!1});if(!s)return;let n=0,r=0,b=1;const m=()=>{const c=o.getBoundingClientRect();n=Math.max(c.width,300),r=Math.max(c.height,300),b=Math.min(window.devicePixelRatio||1,2),v.width=Math.round(n*b),v.height=Math.round(r*b),v.style.width=`${n}px`,v.style.height=`${r}px`,s.setTransform(b,0,0,b,0,0)};m();const u=new ResizeObserver(m);u.observe(o);const f=["0","1","//",">","{","}",";","0x"],y=["rgba(168, 85, 247, ","rgba(139, 92, 246, ","rgba(34, 197, 94, ","rgba(255, 153, 0, "],S=Array.from({length:45},()=>{const c=Math.random()>.65;return{x:Math.random()*n,y:Math.random()*r,vx:(Math.random()-.5)*.35,vy:-.35-Math.random()*.65,size:c?11:Math.random()*2.5+1.2,isSymbol:c,char:f[Math.floor(Math.random()*f.length)],baseColor:y[Math.floor(Math.random()*y.length)],baseAlpha:Math.random()*.35+.15,pulseOffset:Math.random()*Math.PI*2,pulseSpeed:.02+Math.random()*.03}}),j=[],E=(c,x)=>{j.length>5&&j.shift(),j.push({x:c,y:x,radius:5,maxRadius:180,alpha:.35})},N=c=>{const x=o.getBoundingClientRect(),I=c.clientX-x.left,L=c.clientY-x.top;t.current.targetX=I,t.current.targetY=L,t.current.active=!0},k=()=>{t.current.active=!1,t.current.targetX=-1e3,t.current.targetY=-1e3},C=c=>{const x=o.getBoundingClientRect();E(c.clientX-x.left,c.clientY-x.top)};o.addEventListener("pointermove",N,{passive:!0}),o.addEventListener("pointerleave",k,{passive:!0}),o.addEventListener("click",C,{passive:!0});let w=0;const T=()=>{if(!p.current){i.current=null;return}w+=.016,t.current.x+=(t.current.targetX-t.current.x)*.1,t.current.y+=(t.current.targetY-t.current.y)*.1,s.fillStyle="#0B0B0E",s.fillRect(0,0,n,r);const c=s.createRadialGradient(n*.5,r*.45,40,n*.5,r*.45,Math.max(n,r)*.65);if(c.addColorStop(0,"rgba(108, 43, 217, 0.14)"),c.addColorStop(.5,"rgba(24, 18, 38, 0.25)"),c.addColorStop(1,"rgba(11, 11, 14, 0)"),s.fillStyle=c,s.fillRect(0,0,n,r),t.current.active&&t.current.x>0){const l=s.createRadialGradient(t.current.x,t.current.y,0,t.current.x,t.current.y,220);l.addColorStop(0,"rgba(168, 85, 247, 0.18)"),l.addColorStop(.5,"rgba(124, 58, 237, 0.06)"),l.addColorStop(1,"rgba(11, 11, 14, 0)"),s.fillStyle=l,s.fillRect(0,0,n,r)}s.save();const x=r*.32,I=55,L=w*28%45,D=n*.5,F=x,z=Math.ceil(n/I)+12;s.lineWidth=1;for(let l=-z/2;l<=z/2;l++){const a=D+l*(I*1.6),M=Math.max(0,.12-Math.abs(l)*.005);s.strokeStyle=`rgba(139, 92, 246, ${M})`,s.beginPath(),s.moveTo(D,F),s.lineTo(a,r),s.stroke()}for(let l=L;l<r-x;l+=38){const a=l/(r-x),M=x+Math.pow(a,1.6)*(r-x),R=Math.sin(a*Math.PI)*.16;s.strokeStyle=`rgba(168, 85, 247, ${R})`,s.beginPath(),s.moveTo(0,M),s.lineTo(n,M),s.stroke()}s.restore();for(let l=j.length-1;l>=0;l--){const a=j[l];if(a.radius+=3,a.alpha*=.95,a.alpha<.01||a.radius>a.maxRadius){j.splice(l,1);continue}s.save(),s.beginPath(),s.arc(a.x,a.y,a.radius,0,Math.PI*2),s.strokeStyle=`rgba(168, 85, 247, ${a.alpha})`,s.lineWidth=1.5,s.stroke(),s.restore()}s.save(),s.font='10px "JetBrains Mono", monospace',s.textAlign="center",s.textBaseline="middle";for(let l=0;l<S.length;l++){const a=S[l];a.x+=a.vx,a.y+=a.vy,a.y<-20&&(a.y=r+10,a.x=Math.random()*n),a.x<-20&&(a.x=n+10),a.x>n+20&&(a.x=-10);const M=Math.sin(w*2+a.pulseOffset)*.15,R=Math.max(.05,Math.min(.65,a.baseAlpha+M));a.isSymbol?(s.fillStyle=`${a.baseColor}${R})`,s.fillText(a.char,a.x,a.y)):(s.beginPath(),s.arc(a.x,a.y,a.size,0,Math.PI*2),s.fillStyle=`${a.baseColor}${R})`,s.fill(),a.size>2&&(s.beginPath(),s.arc(a.x,a.y,a.size*2.4,0,Math.PI*2),s.fillStyle=`${a.baseColor}${R*.25})`,s.fill()))}s.restore(),s.fillStyle="rgba(0, 0, 0, 0.04)";for(let l=0;l<r;l+=4)s.fillRect(0,l,n,1.5);i.current=requestAnimationFrame(T)},O=new IntersectionObserver(([c])=>{p.current=c.isIntersecting,c.isIntersecting&&!i.current&&(i.current=requestAnimationFrame(T))},{threshold:.05});return O.observe(o),i.current=requestAnimationFrame(T),()=>{O.disconnect(),u.disconnect(),i.current&&cancelAnimationFrame(i.current),o.removeEventListener("pointermove",N),o.removeEventListener("pointerleave",k),o.removeEventListener("click",C)}},[]),e.jsxs("div",{ref:g,className:"retro-cyber-bg-container","aria-hidden":"true",children:[e.jsx("canvas",{ref:h,className:"retro-cyber-bg-canvas"}),e.jsx("div",{className:"retro-cyber-vignette"})]})},P=[{id:"tech",title:"Tech Team",badge:"Cloud & Infrastructure",icon:W,kbps:"320kbps",gif:"/images/domains/tech.gif",description:"The powerhouse behind our cloud infrastructure, open-source projects, and technical curriculum. The Tech Team builds production-grade full-stack apps, DevOps pipelines, and leads hands-on AWS workshops.",focusPills:["AWS Architecture","Full-Stack Dev","Serverless & EKS","DevOps & CI/CD","Open Source"],deliverables:[{title:"Production Web Portals",desc:"Deploying robust cloud-native web portals and services."},{title:"AWS Workshops",desc:"Curating hands-on labs on EC2, S3, Bedrock & Lambda."},{title:"Open Source Repos",desc:"Building open-source tools & starter kits for builders."},{title:"Hackathon Tech Support",desc:"Mentoring teams in cloud deployment & APIs."}]},{id:"events",title:"Events Team",badge:"Community & Hackathons",icon:K,kbps:"192kbps",gif:"/images/domains/events.gif",description:"Orchestrates seamless community workshops, hackathons, speaker sessions, and tech meetups. The Events Team drives student engagement, venue logistics, speaker outreach, and event execution.",focusPills:["Hackathon Planning","Workshop Execution","Speaker Outreach","Venue Operations","Community Meetups"],deliverables:[{title:"Collegiate Hackathons",desc:"Organizing 24-hour hackathons with top mentors & prizes."},{title:"Hands-on Bootcamps",desc:"Hosting weekly cloud architecture and dev bootcamps."},{title:"Industry Speakers",desc:"Inviting AWS Certified Experts & Solutions Architects."},{title:"Attendee Experience",desc:"Ensuring seamless check-ins, swags, and Q&As."}]},{id:"marketing",title:"Marketing Team",badge:"Brand & Content Strategy",icon:Q,kbps:"128kbps",gif:"/images/domains/marketing.gif",description:"Spreads the word, builds our brand identity, and grows our student builder community. The Marketing Team crafts compelling social media campaigns, visual design assets, video teasers, and content strategies.",focusPills:["Social Media Growth","Visual Graphic Design","Content Strategy","Video Promo Teasers","Brand Identity"],deliverables:[{title:"Social Campaigns",desc:"Creating viral posts and outreach campaigns."},{title:"Graphic Assets",desc:"Designing event banners, posters, badges, and swags."},{title:"Community Stories",desc:"Highlighting student project showcases & wins."},{title:"Video Reels & Recaps",desc:"Editing recap reels & promo videos for events."}]},{id:"operations",title:"Operations Team",badge:"Logistics & Partnerships",icon:Z,kbps:"FLAC.HD",gif:"/images/domains/operations.gif",description:"The backbone of our community. The Operations Team handles internal logistics, sponsorship partnerships, college administration alignments, financial budgeting, and member onboarding.",focusPills:["Logistics Management","Sponsorship Tie-ups","Admin Approvals","Budgeting & Resources","Member Onboarding"],deliverables:[{title:"Sponsorship Tie-ups",desc:"Securing industry sponsors, cloud credits, and swags."},{title:"Admin Coordination",desc:"Aligning college permissions, auditoriums, and labs."},{title:"Member Relations",desc:"Managing onboarding, certifications tracking & feedback."},{title:"Resource Allocation",desc:"Overseeing budget allocation & hardware needs."}]}],ye=_.div`
  /* Component Scoped Variables & Base */
  .winamp-player-container {
    --base-metal: #2a2a2e;
    --base-dark: #1a1a1d;
    --accent-gold: #ffb700;
    --neon-green: #00ff00;
    --neon-green-dim: #004d00;
    --glass-reflection: rgba(255, 255, 255, 0.15);
    --font-main: "Courier New", monospace;

    position: relative;
    width: 100%;
    background-color: var(--base-metal);
    background-image: linear-gradient(
        90deg,
        transparent 50%,
        rgba(0, 0, 0, 0.2) 50%
      ),
      linear-gradient(0deg, #333 0%, #222 100%);
    background-size:
      4px 4px,
      100% 100%;
    border: 2px solid #555;
    border-bottom: 2px solid #111;
    border-right: 2px solid #111;
    border-radius: 6px;
    padding: 6px;
    box-shadow:
      inset 1px 1px 0 rgba(255, 255, 255, 0.2),
      0 10px 20px rgba(0, 0, 0, 0.5);
    font-family: var(--font-main);
    overflow: hidden;
    user-select: none;
  }

  /* Header Section */
  .player-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #000;
    padding: 4px 8px;
    margin-bottom: 6px;
    border-radius: 2px;
    border: 1px solid #444;
  }

  .header-bars {
    width: 12px;
    height: 8px;
    background: repeating-linear-gradient(
      90deg,
      #666 0,
      #666 2px,
      transparent 2px,
      transparent 4px
    );
  }

  .header-title {
    font-size: 10px;
    color: #888;
    letter-spacing: 1px;
    font-weight: bold;
  }

  /* Radio Stack Layout */
  .radio-stack {
    display: flex;
    flex-direction: column;
    gap: 4px;
    background: #111;
    padding: 4px;
    border-radius: 2px;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8);
  }

  /* Individual Track (Label) */
  .track-select {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 10px;
    cursor: pointer;
    background: linear-gradient(180deg, #222 0%, #1a1a1a 100%);
    border: 1px solid #333;
    transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .track-select:hover {
    background: linear-gradient(180deg, #2a2a2a 0%, #202020 100%);
    border-color: #555;
  }

  .track-select:active {
    transform: translateY(1px);
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.5);
    border-top-color: #111;
  }

  /* Hidden Input */
  .track-select input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* LED Indicator Design */
  .led-indicator {
    position: relative;
    width: 16px;
    height: 16px;
    background: #000;
    border-radius: 50%;
    box-shadow:
      inset 0 1px 3px rgba(0, 0, 0, 1),
      0 1px 0 rgba(255, 255, 255, 0.1);
    border: 1px solid #333;
  }

  .led-light {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background-color: var(--neon-green-dim);
    border-radius: 50%;
    transition: all 0.3s ease;
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
  }

  .led-glass {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background: radial-gradient(
      circle at 30% 30%,
      rgba(255, 255, 255, 0.2),
      transparent 60%
    );
    z-index: 2;
  }

  /* Checked State for LED */
  .track-select input:checked ~ .led-indicator .led-light {
    background-color: var(--neon-green);
    box-shadow:
      0 0 5px var(--neon-green),
      0 0 10px var(--neon-green),
      inset 0 0 2px rgba(255, 255, 255, 0.5);
    animation: led-flicker 0.4s ease-out forwards;
  }

  /* Track Info Typography */
  .track-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    line-height: 1.2;
  }

  .track-title {
    color: #666;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-shadow: 1px 1px 0 #000;
    transition: color 0.3s;
  }

  .track-kbps {
    font-size: 9px;
    color: #444;
  }

  /* Checked State for Text */
  .track-select input:checked ~ .track-info .track-title {
    color: var(--neon-green);
    text-shadow: 0 0 8px rgba(0, 255, 0, 0.4);
  }

  .track-select input:checked ~ .track-info .track-title::after {
    content: "_";
    display: inline-block;
    animation: cursor-blink 1s step-end infinite;
  }

  .track-select input:checked ~ .track-info .track-kbps {
    color: var(--accent-gold);
  }

  /* Mini Equalizer Animation */
  .equalizer-mini {
    display: flex;
    gap: 2px;
    align-items: flex-end;
    height: 12px;
    opacity: 0.2;
    transition: opacity 0.3s;
  }

  .bar {
    width: 3px;
    background: var(--neon-green);
    height: 20%;
  }

  .track-select input:checked ~ .equalizer-mini {
    opacity: 1;
  }

  .track-select input:checked ~ .equalizer-mini .bar:nth-child(1) {
    animation: eq-bounce 0.8s infinite ease-in-out;
  }
  .track-select input:checked ~ .equalizer-mini .bar:nth-child(2) {
    animation: eq-bounce 1.1s infinite ease-in-out 0.2s;
  }
  .track-select input:checked ~ .equalizer-mini .bar:nth-child(3) {
    animation: eq-bounce 0.9s infinite ease-in-out 0.4s;
  }

  /* Overlay Effects */
  .screen-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%);
    background-size: 100% 4px;
    z-index: 50;
    opacity: 0.6;
  }

  /* Keyframe Animations */
  @keyframes cursor-blink {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }

  @keyframes led-flicker {
    0% { opacity: 0.5; transform: translate(-50%, -50%) scale(0.8); }
    20% { opacity: 1; }
    40% { opacity: 0.2; }
    60% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
    100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  }

  @keyframes eq-bounce {
    0%, 100% { height: 20%; }
    50% { height: 100%; background: var(--accent-gold); }
  }
`,Se=()=>{const[g,h]=d.useState("tech"),t=P.find(i=>i.id===g)||P[0];return e.jsxs("section",{id:"domains",className:"section-padding domains-section",children:[e.jsx(ke,{}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"domains-header text-center",children:[e.jsxs("div",{className:"section-badge",children:[e.jsx(H,{size:14}),e.jsx("span",{children:"// OUR DOMAINS"})]}),e.jsxs("h2",{className:"section-title",children:["Driven by Specialized Teams, ",e.jsx("span",{className:"text-gradient-purple",children:"Building Excellence"})]}),e.jsx("p",{className:"section-subtitle mx-auto",children:"Our community is structured across 4 specialized domains to deliver world-class workshops, hackathons, and software engineering projects."})]}),e.jsx("div",{className:"unified-retro-console",children:e.jsxs("div",{className:"console-inner-layout",children:[e.jsxs("div",{className:"console-left-stack",children:[e.jsx(ye,{children:e.jsxs("div",{className:"winamp-player-container",children:[e.jsxs("div",{className:"player-header",children:[e.jsx("div",{className:"header-bars"}),e.jsx("span",{className:"header-title",children:"PREFERENCES // DOMAIN_MODE"})]}),e.jsx("div",{className:"radio-stack",children:P.map(i=>{const p=g===i.id;return e.jsxs("label",{className:"track-select",htmlFor:`domain-track-${i.id}`,onClick:()=>h(i.id),children:[e.jsx("input",{type:"radio",id:`domain-track-${i.id}`,name:"winamp-domain-mode",checked:p,onChange:()=>h(i.id)}),e.jsxs("div",{className:"led-indicator",children:[e.jsx("div",{className:"led-glass"}),e.jsx("div",{className:"led-light"}),e.jsx("div",{className:"led-reflection"})]}),e.jsxs("div",{className:"track-info",children:[e.jsx("span",{className:"track-title",children:i.title.toUpperCase()}),e.jsx("span",{className:"track-kbps",children:i.kbps})]}),e.jsxs("div",{className:"equalizer-mini",children:[e.jsx("div",{className:"bar"}),e.jsx("div",{className:"bar"}),e.jsx("div",{className:"bar"})]})]},i.id)})}),e.jsx("div",{className:"screen-overlay"})]})}),e.jsxs("div",{className:"gif-tv-screen-box",children:[e.jsxs("div",{className:"gif-tv-header",children:[e.jsxs("span",{className:"gif-tv-header-title",children:["VIDEO_FEED // ",t.id.toUpperCase(),"_LIVE"]}),e.jsx("span",{className:"gif-tv-header-badge",children:"60 FPS"})]}),e.jsxs("div",{className:"gif-tv-display",children:[e.jsx("div",{className:"gif-tv-scanlines"}),e.jsx("img",{src:t.gif,alt:`${t.title} GIF Feed`,className:"gif-tv-image"})]})]})]}),e.jsxs("div",{className:"tv-screen-details-card",children:[e.jsxs("div",{className:"tv-monitor-header",children:[e.jsxs("div",{className:"tv-header-left",children:[e.jsx("div",{className:"tv-power-led"}),e.jsx("span",{className:"tv-header-title",children:"CRT MONITOR // DOMAIN_DISPLAY"})]}),e.jsx("span",{className:"tv-header-status",children:"SIGNAL: 100% OK"})]}),e.jsxs("div",{className:"tv-crt-screen",children:[e.jsx("div",{className:"tv-screen-overlay"}),e.jsxs("div",{className:"tv-domain-badge",children:[e.jsx(ee,{size:12}),e.jsx("span",{children:t.badge})]}),e.jsx("h3",{className:"tv-domain-title",children:t.title}),e.jsx("p",{className:"tv-domain-desc",children:t.description}),e.jsx("div",{className:"tv-focus-heading",children:"// CORE CAPABILITIES & FOCUS"}),e.jsx("div",{className:"tv-focus-tags",children:t.focusPills.map((i,p)=>e.jsx("span",{className:"tv-focus-pill",children:i},p))}),e.jsx("div",{className:"tv-deliverables-grid",children:t.deliverables.map((i,p)=>e.jsxs("div",{className:"tv-deliverable-item",style:{animationDelay:`${.6+p*.1}s`},children:[e.jsx(se,{size:16,className:"tv-deliverable-icon"}),e.jsxs("div",{children:[e.jsx("div",{className:"tv-deliverable-name",children:i.title}),e.jsx("div",{className:"tv-deliverable-desc",children:i.desc})]})]},p))})]})]},t.id)]})})]})]})};function Ce(){const[g,h]=d.useState(!1),t=()=>h(!0),i=()=>h(!1),p=["WITH OPEN SOURCE","WITH DEVOPS","WITH CLOUD & AI","ON THE AWS CLOUD","WITH FULL-STACK"];return e.jsxs("div",{className:"app-wrapper",children:[e.jsx(ae,{}),e.jsx(je,{onOpenJoinModal:t}),e.jsxs("section",{id:"hero",className:"hero-layout",children:[e.jsx("div",{className:"hero-shapegrid-wrapper",children:e.jsx(te,{speed:.5,squareSize:40,direction:"diagonal",borderColor:"#2F293A",hoverFillColor:"#222",shape:"square",hoverTrailAmount:0,hoverColor:"#A855F7",size:80})}),e.jsxs("div",{className:"hero-grid-container",children:[e.jsx("div",{className:"hero-left-col",children:e.jsx(ie,{})}),e.jsxs("div",{className:"hero-right-col",children:[e.jsx("h1",{className:"hero-heading-static",children:"BUILD THE FUTURE"}),e.jsx("h1",{className:"hero-heading-rotate",children:e.jsx(ne,{words:p,duration:2500,delay:1,className:"word-rotate-text"})}),e.jsx("p",{className:"hero-subtext",children:"This is JSS Academy of Technical Education Bengaluru's student community powered by AWS. We build real projects across Cloud, AI, Full Stack, DevOps and Open Source turning students into engineers who ship, not larp."}),e.jsxs("div",{className:"hero-btn-group",children:[e.jsx(re,{onClick:t}),e.jsx(le,{href:"https://github.com/awsjssateb"})]})]})]}),e.jsx("div",{className:"hero-bottom-fade-overlay"})]}),e.jsx(oe,{}),e.jsx(Ne,{onOpenJoinModal:t}),e.jsx(ce,{onOpenJoinModal:t}),e.jsx(de,{onOpenJoinModal:t}),e.jsx(Se,{}),e.jsx(he,{}),e.jsx(pe,{}),e.jsx(me,{}),e.jsx(ue,{}),e.jsx(ge,{isOpen:g,onClose:i})]})}ve.createRoot(document.getElementById("root")).render(e.jsx(xe.StrictMode,{children:e.jsx(Ce,{})}));
