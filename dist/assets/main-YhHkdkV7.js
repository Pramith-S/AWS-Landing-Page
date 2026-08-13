import{c as Ho,r as Oe,j as E,g as Fl,A as Ol,X as Bl,M as zl,R as Gl,T as kl,P as Hl,a as Vl,b as oa,d as Vo,e as Wl,C as Xl,S as Na,F as bi,f as ur,L as Ia,h as ql,i as Yl,k as Kl,l as $l,m as jl,n as Zl,o as Jl,p as Ql,q as ec,s as tc,t as nc,u as ic,v as rc,w as sc,x as ac,y as oc,z as lc,B as cc,D as dc,E as Wo,G as uc,H as fc,I as hc,J as pc,K as mc,N as gc,O as _c,Q as vc,W as xc,U as Sc,V as Mc,Y as Ec,Z as bc,_ as Tc,$ as yc,a0 as Ac,a1 as Rc,a2 as Cc,a3 as wc,a4 as Pc}from"./index-BYCw-lfD.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=Ho("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=Ho("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]),Nc=({logo:n,logoAlt:e="Logo",items:t=[],activeHref:i="#about",className:r="",ease:s="power2.easeOut",baseColor:a="rgba(20, 17, 32, 0.65)",pillColor:o="#7C3AED",hoveredPillTextColor:c="#ffffff",pillTextColor:l="#94a3b8",theme:f="dark",initialLoadAnimation:m=!1})=>{const[d,h]=Oe.useState(null),v=Oe.useRef(null),M=Oe.useRef(null),g=Oe.useRef({}),u=d||i,A=()=>{const C=v.current,S=g.current[u],R=M.current;if(!C||!S||!R)return;const T=C.getBoundingClientRect(),P=S.getBoundingClientRect(),_=P.left-T.left,y=P.width;Fl.to(R,{left:`${_}px`,width:`${y}px`,duration:.35,ease:s,opacity:1})};return Oe.useEffect(()=>(A(),window.addEventListener("resize",A),()=>window.removeEventListener("resize",A)),[u,s]),E.jsxs("div",{ref:v,className:`pill-nav-container ${f} ${r}`.trim(),style:{"--base-color":a,"--pill-color":o,"--pill-text-color":l,"--hover-pill-text-color":c},children:[n&&E.jsx("a",{href:"#",className:"pill-nav-logo",children:E.jsx("img",{src:n,alt:e})}),E.jsx("div",{ref:M,className:"pill-nav-slider"}),E.jsx("div",{className:"pill-nav-items",children:t.map(C=>{const S=C.href||`#${C.label.toLowerCase()}`,R=u===S;return E.jsx("a",{ref:T=>g.current[S]=T,href:S,className:`pill-nav-item ${R?"is-active":""}`,onClick:()=>setActiveTab(S),onMouseEnter:()=>h(S),onMouseLeave:()=>h(null),children:C.label},C.label)})})]})},Ic="/images/aws_logo.png",Lc=({onOpenJoinModal:n})=>{const[e,t]=Oe.useState(!1),[i,r]=Oe.useState(!1),[s,a]=Oe.useState("#about");Oe.useEffect(()=>{const c=["about","pillars","events","domains","team","faq","contact"];let l=!1;const f=()=>{t(window.scrollY>20);const d=window.innerHeight*.4;let h="#about";for(const v of c){const M=document.getElementById(v);if(M){const g=M.getBoundingClientRect();g.top<=d&&g.bottom>=80&&(h=`#${v}`)}}a(h),l=!1},m=()=>{l||(l=!0,requestAnimationFrame(f))};return window.addEventListener("scroll",m,{passive:!0}),f(),()=>window.removeEventListener("scroll",m)},[]);const o=[{name:"About",href:"#about"},{name:"Pillars",href:"#pillars"},{name:"Events",href:"#events"},{name:"Domains",href:"#domains"},{name:"Team",href:"#team"},{name:"FAQ",href:"#faq"},{name:"Contact",href:"#contact"}];return E.jsxs("header",{className:`sbg-navbar ${e?"scrolled":""}`,children:[E.jsxs("div",{className:"container nav-container",children:[E.jsxs("a",{href:"#",className:"nav-brand",children:[E.jsx("img",{src:Ic,alt:"AWS Logo",className:"aws-brand-logo"}),E.jsxs("div",{className:"brand-text-group",children:[E.jsxs("span",{className:"brand-title",children:["AWS ",E.jsx("span",{className:"highlight",children:"Student Builder Group"})]}),E.jsxs("span",{className:"brand-subtitle",children:[E.jsx("span",{className:"full-sub-text",children:"JSS Academy of Technical Education Bengaluru"}),E.jsx("span",{className:"short-sub-text",children:"JSSATEB"})]})]})]}),E.jsx("nav",{className:"nav-desktop-links",children:E.jsx(Nc,{items:[{label:"About",href:"#about"},{label:"Pillars",href:"#pillars"},{label:"Events",href:"#events"},{label:"Team",href:"#team"},{label:"Domains",href:"#domains"},{label:"Contact",href:"#contact"},{label:"FAQ",href:"#faq"}],activeHref:s,ease:"power2.easeOut",theme:"dark",initialLoadAnimation:!1})}),E.jsxs("div",{className:"nav-actions",children:[E.jsxs("a",{href:"https://bit.ly/45162HC",target:"_blank",rel:"noreferrer",className:"nav-cta-btn",children:[E.jsx("span",{children:"Join Group"}),E.jsx(Ol,{size:16})]}),E.jsx("button",{className:"mobile-toggle-btn",onClick:()=>r(!i),"aria-label":"Toggle menu",children:i?E.jsx(Bl,{size:24}):E.jsx(zl,{size:24})})]})]}),i&&E.jsx("div",{className:"mobile-drawer",children:E.jsxs("div",{className:"mobile-links",children:[o.map(c=>E.jsx("a",{href:c.href,className:"mobile-link",onClick:()=>r(!1),children:c.name},c.name)),E.jsx("a",{href:"https://www.meetup.com/aws-sbg-at-jss-academy-of-technical-education-bengaluru/",target:"_blank",rel:"noreferrer",className:"btn-purple-primary mobile-cta-btn",onClick:()=>r(!1),children:"Join Group"})]})})]})},ki=n=>{const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return e?[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]:[1,1,1]},Ua=n=>{switch(n){case"top-left":return[1,0];case"bottom-right":return[0,1];case"bottom-left":return[1,1];default:return[0,0]}},Uc=({speed:n=2.5,rayColor1:e="#EAB308",rayColor2:t="#96c8ff",intensity:i=2,spread:r=2,origin:s="top-right",tilt:a=0,saturation:o=1.5,blend:c=.75,falloff:l=1.6,opacity:f=1,className:m=""})=>{const d=Oe.useRef(null),h=Oe.useRef(null),v=Oe.useRef(null),M=Oe.useRef(null),g=Oe.useRef(null),u=Oe.useRef(null),[A,C]=Oe.useState(!1),S=Oe.useRef(null);return Oe.useEffect(()=>{if(d.current)return S.current=new IntersectionObserver(R=>{const T=R[0];C(T.isIntersecting)},{threshold:.1}),S.current.observe(d.current),()=>{S.current&&(S.current.disconnect(),S.current=null)}},[]),Oe.useEffect(()=>!A||!d.current?void 0:(u.current&&(u.current(),u.current=null),(async()=>{if(!d.current||(await new Promise(B=>setTimeout(B,10)),!d.current))return;const T=new Gl({dpr:Math.min(window.devicePixelRatio,2),alpha:!0});v.current=T;const P=T.gl;for(P.canvas.style.width="100%",P.canvas.style.height="100%";d.current.firstChild;)d.current.removeChild(d.current.firstChild);d.current.appendChild(P.canvas);const _=`
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}`,y=`precision highp float;

uniform float iTime;
uniform vec2 iResolution;
uniform float iSpeed;
uniform vec3 iRayColor1;
uniform vec3 iRayColor2;
uniform float iIntensity;
uniform float iSpread;
uniform float iFlipX;
uniform float iFlipY;
uniform float iTilt;
uniform float iSaturation;
uniform float iBlend;
uniform float iFalloff;
uniform float iOpacity;

float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord, float seedA, float seedB, float speed) {
  vec2 sourceToCoord = coord - raySource;
  float cosAngle = dot(normalize(sourceToCoord), rayRefDirection);
  return clamp(
    (0.45 + 0.15 * sin(cosAngle * seedA + iTime * speed)) +
    (0.3 + 0.2 * cos(-cosAngle * seedB + iTime * speed)),
    0.0, 1.0) *
    clamp((iResolution.x - length(sourceToCoord)) / iResolution.x, 0.5, 1.0);
}

void main() {
  vec2 fragCoord = gl_FragCoord.xy;
  if (iFlipX > 0.5) fragCoord.x = iResolution.x - fragCoord.x;
  if (iFlipY > 0.5) fragCoord.y = iResolution.y - fragCoord.y;

  vec2 coord = vec2(fragCoord.x, iResolution.y - fragCoord.y);
  vec2 rayPos = vec2(iResolution.x * 1.1, -0.5 * iResolution.y);

  float tiltRad = iTilt * 3.14159265 / 180.0;
  float cs = cos(tiltRad);
  float sn = sin(tiltRad);
  vec2 rel = coord - rayPos;
  vec2 tiltedCoord = vec2(rel.x * cs - rel.y * sn, rel.x * sn + rel.y * cs) + rayPos;

  float halfSpread = iSpread * 0.275;
  vec2 rayRefDir1 = normalize(vec2(cos(0.785398 + halfSpread), sin(0.785398 + halfSpread)));
  vec2 rayRefDir2 = normalize(vec2(cos(0.785398 - halfSpread), sin(0.785398 - halfSpread)));

  vec4 rays1 = vec4(iRayColor1, 1.0) * rayStrength(rayPos, rayRefDir1, tiltedCoord, 36.2214, 21.11349, iSpeed);
  vec4 rays2 = vec4(iRayColor2, 1.0) * rayStrength(rayPos, rayRefDir2, tiltedCoord, 22.3991, 18.0234, iSpeed * 0.2);

  vec4 color = rays1 * (1.0 - iBlend) * 0.9 + rays2 * iBlend * 0.9;

  float distanceToLight = length(fragCoord.xy - vec2(rayPos.x, iResolution.y - rayPos.y)) / iResolution.y;
  float brightness = iIntensity * 0.4 / pow(max(distanceToLight, 0.001), iFalloff);
  color.rgb *= brightness;

  float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
  color.rgb = mix(vec3(gray), color.rgb, iSaturation);

  color.a = max(color.r, max(color.g, color.b)) * iOpacity;
  gl_FragColor = color;
}`,[I,w]=Ua(s),U={iTime:{value:0},iResolution:{value:[1,1]},iSpeed:{value:n},iRayColor1:{value:ki(e)},iRayColor2:{value:ki(t)},iIntensity:{value:i},iSpread:{value:r},iFlipX:{value:I},iFlipY:{value:w},iTilt:{value:a},iSaturation:{value:o},iBlend:{value:c},iFalloff:{value:l},iOpacity:{value:f}};h.current=U;const X=new kl(P),$=new Hl(P,{vertex:_,fragment:y,uniforms:U}),G=new Vl(P,{geometry:X,program:$});g.current=G;const Y=()=>{if(!d.current||!T)return;T.dpr=Math.min(window.devicePixelRatio,2);const{clientWidth:B,clientHeight:q}=d.current;T.setSize(B,q),U.iResolution.value=[B*T.dpr,q*T.dpr]},W=B=>{if(!(!v.current||!h.current||!g.current)){U.iTime.value=B*.001;try{T.render({scene:G}),M.current=requestAnimationFrame(W)}catch{return}}};window.addEventListener("resize",Y),Y(),M.current=requestAnimationFrame(W),u.current=()=>{if(M.current&&(cancelAnimationFrame(M.current),M.current=null),window.removeEventListener("resize",Y),T)try{const B=T.gl.getExtension("WEBGL_lose_context");B&&B.loseContext();const q=T.gl.canvas;q&&q.parentNode&&q.parentNode.removeChild(q)}catch{}v.current=null,h.current=null,g.current=null}})(),()=>{u.current&&(u.current(),u.current=null)}),[A,n,e,t,i,r,s,a,o,c,l,f]),Oe.useEffect(()=>{if(!h.current)return;const R=h.current;R.iSpeed.value=n,R.iRayColor1.value=ki(e),R.iRayColor2.value=ki(t),R.iIntensity.value=i,R.iSpread.value=r;const[T,P]=Ua(s);R.iFlipX.value=T,R.iFlipY.value=P,R.iTilt.value=a,R.iSaturation.value=o,R.iBlend.value=c,R.iFalloff.value=l,R.iOpacity.value=f},[n,e,t,i,r,s,a,o,c,l,f]),E.jsx("div",{ref:d,className:`side-rays-container ${m}`.trim()})},Fa=[{node:E.jsx(ql,{}),title:"AWS Cloud",href:"https://aws.amazon.com"},{node:E.jsx(Yl,{}),title:"React",href:"https://react.dev"},{node:E.jsx(Kl,{}),title:"Next.js",href:"https://nextjs.org"},{node:E.jsx($l,{}),title:"TypeScript",href:"https://www.typescriptlang.org"},{node:E.jsx(jl,{}),title:"Python",href:"https://python.org"},{node:E.jsx(Zl,{}),title:"Node.js",href:"https://nodejs.org"},{node:E.jsx(Jl,{}),title:"Docker",href:"https://www.docker.com"},{node:E.jsx(Ql,{}),title:"Kubernetes",href:"https://kubernetes.io"},{node:E.jsx(ec,{}),title:"Terraform",href:"https://www.terraform.io"},{node:E.jsx(tc,{}),title:"Ansible",href:"https://www.ansible.com"},{node:E.jsx(nc,{}),title:"Linux",href:"https://www.kernel.org"},{node:E.jsx(ic,{}),title:"Git",href:"https://git-scm.com"},{node:E.jsx(rc,{}),title:"GitHub Actions",href:"https://github.com/features/actions"},{node:E.jsx(sc,{}),title:"PostgreSQL",href:"https://www.postgresql.org"},{node:E.jsx(ac,{}),title:"MongoDB",href:"https://www.mongodb.com"},{node:E.jsx(oc,{}),title:"Redis",href:"https://redis.io"},{node:E.jsx(lc,{}),title:"FastAPI",href:"https://fastapi.tiangolo.com"},{node:E.jsx(cc,{}),title:"GraphQL",href:"https://graphql.org"},{node:E.jsx(dc,{}),title:"Tailwind CSS",href:"https://tailwindcss.com"}];function Fc(n,e){if(!e)return;const t=e.getContext("2d");if(!t)return;const i={width:16,height:32},r=[{from:[0,0],to:[1,0]},{from:[0,1],to:[1,1]},{from:[0,2],to:[1,2]}],s=[{from:[0,0],to:[0,1]},{from:[0,1],to:[0,2]},{from:[1,0],to:[1,1]},{from:[1,1],to:[1,2]}],a={x:[0,2],y:[0,1,2,3]},g=[a,{x:[],y:[2,3]},{x:[0,1,2],y:[1,2]},{x:[0,1,2],y:[2,3]},{x:[1],y:[0,2,3]},{x:[0,1,2],y:[0,3]},{x:[0,1,2],y:[0,1,3]},{x:[0],y:[2,3]},{x:[0,1,2],y:[0,1,2,3]},{x:[0,1,2],y:[0,2,3]}],u={is_vertical(w){return w.from[1]!==w.to[1]},diff(w,U){return w.filter(X=>!U.includes(X))}};t.clearRect(0,0,100,100);const A=g[n]||a;t.save(),t.translate(4,4);const C=r.map((w,U)=>U),S=s.map((w,U)=>U),R=A.x,T=u.diff(C,R),P=A.y,_=u.diff(S,P),y=w=>{const U=i.width/4;let X={},$={};return u.is_vertical(w)?(X.x=w.from[0]*i.width,X.y=w.from[1]*(i.height/2)+U,$.x=w.to[0]*i.width,$.y=w.to[1]*(i.height/2)-U):(X.x=w.from[0]*i.width+U,X.y=w.from[1]*(i.height/2),$.x=w.to[0]*i.width-U,$.y=w.to[1]*(i.height/2)),{from:X,to:$}},I=(w,U)=>{const X=y(w);t.save(),t.beginPath(),t.lineCap="round",t.lineWidth=4,t.strokeStyle="#FF3B30",U&&(t.globalAlpha=.15),t.moveTo(X.from.x,X.from.y),t.lineTo(X.to.x,X.to.y),t.stroke(),t.closePath(),t.restore()};T.forEach(w=>I(r[w],!0)),_.forEach(w=>I(s[w],!0)),R.forEach(w=>I(r[w],!1)),P.forEach(w=>I(s[w],!1)),t.restore()}const Oc=()=>{const[n,e]=Oe.useState(1),[t,i]=Oe.useState(1),[r,s]=Oe.useState(!1),[a,o]=Oe.useState(null),[c,l]=Oe.useState(!1),f=Oe.useRef(null),m=[{floorNumber:1,icon:oa,stat:"50+ Labs",title:"Hands-on Cloud Labs & Workshops",description:"Practical deep dives into EC2, Serverless, IAM policies, and Infrastructure as Code.",accentColor:"#8B5CF6",label:"F1 • Hands-on Labs"},{floorNumber:2,icon:Vo,stat:"AWS Certified",title:"AWS Certification Pathways & Study Groups",description:"Structured mentorship for AWS Cloud Practitioner and Solutions Architect exam success.",accentColor:"#FF9900",label:"F2 • Certifications"},{floorNumber:3,icon:Wl,stat:"25+ Apps",title:"Hackathons, Projects & Architecture Showcase",description:"Collaborative building sprints deploying scalable, resilient apps directly on AWS infrastructure.",accentColor:"#6C2BD9",label:"F3 • Hackathons"}],d=u=>{if(u===n||r||u<1||u>3)return;const A=u>n?"up":"down",C=n;s(!0),o(A),l(!0),Math.abs(u-C)===2?setTimeout(()=>{i(2)},1e3):setTimeout(()=>{i(u)},1100),setTimeout(()=>{i(u),e(u)},1700),setTimeout(()=>{s(!1),o(null),l(!1)},2e3)},h=()=>{n<3&&!r&&d(n+1)},v=()=>{n>1&&!r&&d(n-1)};Oe.useEffect(()=>{f.current&&Fc(t,f.current)},[t]);const M=m.find(u=>u.floorNumber===n)||m[0],g=M.icon;return E.jsxs("section",{id:"about",className:"section-padding about-section",children:[E.jsx("div",{className:"about-siderays-wrapper",children:E.jsx(Uc,{speed:3.5,rayColor1:"#6c008f",rayColor2:"#7C3AED",intensity:2,spread:2,origin:"top-left",tilt:0,saturation:1.5,blend:.75,falloff:1.6,opacity:1})}),E.jsx("svg",{width:"0",height:"0",style:{position:"absolute",pointerEvents:"none"},children:E.jsx("defs",{children:E.jsxs("filter",{id:"brushedMetalEffect",x:"0",y:"0",children:[E.jsxs("feComponentTransfer",{in:"SourceGraphic",result:"metal",children:[E.jsx("feFuncR",{type:"gamma",amplitude:"1.21",exponent:"0.53"}),E.jsx("feFuncG",{type:"gamma",amplitude:"1.21",exponent:"0.53"}),E.jsx("feFuncB",{type:"gamma",amplitude:"1.21",exponent:"0.5"})]}),E.jsx("feBlend",{in:"SourceGraphic",in2:"metal",mode:"overlay"})]})})}),E.jsx("div",{className:"about-glow-orb"}),E.jsx("div",{className:"container",children:E.jsxs("div",{className:"about-grid",children:[E.jsxs("div",{className:"about-content",children:[E.jsxs("div",{className:"section-badge",children:[E.jsx(Xl,{size:14}),E.jsx("span",{children:"// WHO WE ARE"})]}),E.jsxs("div",{className:"about-stroke-heading","aria-label":"Empowering Next-Gen Cloud Architects & Builders",children:[E.jsx(Na,{text:"Empowering Next-Gen",trigger:"scroll",strokeColor:"#8B5CF6",fillColor:"#F8FAFC",strokeWidth:1.5,drawDuration:1.6,fillDelay:.2,stagger:.04,fontSize:48,fontWeight:800,letterSpacing:-1.5,fillMode:"wipe"}),E.jsx(Na,{text:"Cloud Architects & Builders",trigger:"scroll",strokeColor:"#8B5CF6",fillColor:"#A78BFA",strokeWidth:1.5,drawDuration:1.8,fillDelay:.3,stagger:.04,fontSize:48,fontWeight:800,letterSpacing:-1.5,fillMode:"wipe"})]}),E.jsxs("div",{className:"narrative-body",children:[E.jsx("p",{children:E.jsx(bi,{text:"The AWS Student Builders Group (AWS SBG) at JSSATEB is an official, student-led initiative bridging the gap between academic theory and production-grade cloud engineering. We cultivate a vibrant developer ecosystem right here on campus in Bengaluru.",splitBy:"word",hinge:"top",trigger:"scroll",duration:.5,stagger:.02,fontSize:"1.025rem",fontWeight:400,color:"var(--text-secondary)"})}),E.jsx("p",{children:E.jsx(bi,{text:"From deploying serverless microservices to configuring enterprise DevSecOps pipelines, our group empowers students with industry-relevant AWS skills, hands-on architectural experience, and direct access to AWS experts and certification roadmaps.",splitBy:"word",hinge:"top",trigger:"scroll",duration:.5,stagger:.02,fontSize:"1.025rem",fontWeight:400,color:"var(--text-secondary)"})})]}),E.jsxs("div",{className:"about-checklist",children:[E.jsxs("div",{className:"check-item",children:[E.jsx(ur,{size:18,className:"check-icon"}),E.jsx("span",{children:E.jsx(bi,{text:"Production-First AWS Architecture",splitBy:"word",hinge:"top",trigger:"scroll",duration:.5,stagger:.03,fontSize:"0.95rem",fontWeight:500,color:"var(--text-primary)"})})]}),E.jsxs("div",{className:"check-item",children:[E.jsx(ur,{size:18,className:"check-icon"}),E.jsx("span",{children:E.jsx(bi,{text:"Industry Mentor & Certification Guidance",splitBy:"word",hinge:"top",trigger:"scroll",duration:.5,stagger:.03,fontSize:"0.95rem",fontWeight:500,color:"var(--text-primary)"})})]}),E.jsxs("div",{className:"check-item",children:[E.jsx(ur,{size:18,className:"check-icon"}),E.jsx("span",{children:E.jsx(bi,{text:"Open Source & Cloud Native Building",splitBy:"word",hinge:"top",trigger:"scroll",duration:.5,stagger:.03,fontSize:"0.95rem",fontWeight:500,color:"var(--text-primary)"})})]})]})]}),E.jsx("div",{className:"about-cards-grid elevator-integration-wrapper",children:E.jsxs("div",{className:"elevator-layout flex-container",children:[E.jsxs("div",{className:"elevator-frame-container",children:[E.jsxs("div",{className:"elevator-header-display",children:[E.jsx("span",{className:"elevator-header-label",children:"AWS SBG FACILITIES"}),E.jsx("span",{className:`elevator-header-floor ${r?"moving":""}`,children:r?a==="up"?"▲ MOVING UP":"▼ MOVING DOWN":`FLOOR 0${n}`})]}),E.jsxs("section",{className:`frame ${c?"doors-locked-shut":""} ${r?`transit-${a}`:""}`,children:[E.jsxs("div",{className:"doors",children:[E.jsx("div",{className:"door left-door","data-floor":t}),E.jsx("div",{className:"door right-door","data-floor":t})]}),E.jsxs("div",{className:"inside",children:[E.jsx("div",{className:"inside-ceiling-light"}),E.jsxs("div",{className:"elevator-card-content",children:[E.jsxs("div",{className:"inside-top-badge",children:[E.jsxs("span",{className:"inside-floor-tag",children:["FLOOR 0",M.floorNumber," OF 03"]}),E.jsx("span",{className:"about-stat-tag",style:{color:M.accentColor,borderColor:`${M.accentColor}40`,background:`${M.accentColor}1A`},children:M.stat})]}),E.jsx("div",{className:"about-icon-box inside-icon-box",style:{background:`rgba(${M.accentColor==="#FF9900"?"255, 153, 0":"139, 92, 246"}, 0.15)`,borderColor:`rgba(${M.accentColor==="#FF9900"?"255, 153, 0":"139, 92, 246"}, 0.35)`},children:E.jsx(g,{size:28,style:{color:M.accentColor}})}),E.jsxs("div",{className:"inside-text-group",children:[E.jsx("h3",{className:"about-card-title inside-title",children:M.title}),E.jsx("p",{className:"about-card-desc inside-desc",children:M.description})]}),E.jsx("div",{className:"inside-bottom-accent",style:{background:`linear-gradient(90deg, ${M.accentColor}, transparent)`}})]})]})]})]}),E.jsx("div",{className:"elevator-panel-container center",children:E.jsxs("div",{className:"panel",children:[E.jsx("div",{className:"panel-title",children:"CONTROL"}),E.jsx("div",{className:"num",children:E.jsx("canvas",{ref:f,width:"24",height:"40"})}),E.jsx("div",{className:"direct-floor-buttons",children:m.slice().reverse().map(u=>E.jsx("button",{className:`metal radial floor-num-btn ${n===u.floorNumber?"active-floor-btn":""} ${r?"disabled":""}`,onClick:()=>d(u.floorNumber),disabled:r,title:`Select Floor ${u.floorNumber}: ${u.title}`,children:E.jsx("span",{className:"btn-floor-num",children:u.floorNumber})},u.floorNumber))}),E.jsxs("div",{className:"buttons",children:[E.jsx("button",{className:`metal radial plus ${n>=3||r?"disabled":""}`,onClick:h,disabled:n>=3||r,title:"Elevator Up",children:"↑"}),E.jsx("button",{className:`metal radial minus ${n<=1||r?"disabled":""}`,onClick:v,disabled:n<=1||r,title:"Elevator Down",children:"↓"})]}),E.jsx("div",{className:"floor-quick-legend",children:m.map(u=>E.jsxs("div",{className:`legend-item ${u.floorNumber===n?"active":""}`,children:[E.jsxs("span",{className:"legend-num",children:["F",u.floorNumber]}),E.jsx("span",{className:"legend-label",children:u.label.split(" • ")[1]})]},u.floorNumber))})]})})]})})]})}),E.jsx("div",{className:"about-section-logo-loop-column left-loop",children:E.jsx(Ia,{logos:Fa,speed:45,direction:"up",logoHeight:42,gap:32,hoverSpeed:0,scaleOnHover:!0,fadeOut:!1,fadeOutColor:"transparent",useCustomRender:!1,ariaLabel:"Cloud technology stack partners left"})}),E.jsx("div",{className:"about-section-logo-loop-column right-loop",children:E.jsx(Ia,{logos:Fa,speed:45,direction:"down",logoHeight:42,gap:32,hoverSpeed:0,scaleOnHover:!0,fadeOut:!1,fadeOutColor:"transparent",useCustomRender:!1,ariaLabel:"Cloud technology stack partners right"})})]})},Bc=()=>{const n=[{id:1,badge:"SKILL BUILDING",icon:oa,title:"Technical Workshops & Bootcamps",description:"Hands-on, project-based intensive bootcamps focused on foundational and advanced AWS cloud primitives, cloud-native engineering, and automated DevOps.",tags:["EC2 & S3","Serverless Lambda","IAM & DevSecOps","Kubernetes (EKS)","Cloud Security"],highlight:"Weekly Hands-on Labs",channel:"CH 01"},{id:2,badge:"PRODUCTION BUILDING",icon:Wo,title:"Cloud Projects & Architecture",description:"Collaborative open-source development where students design, build, and deploy production-grade cloud architectures for real community and collegiate applications.",tags:["Microservices","Terraform / CDK","Docker Containers","CI/CD Pipelines","DynamoDB"],highlight:"Open Source Engineering",channel:"CH 02"},{id:3,badge:"CAREER ACCELERATION",icon:Vo,title:"Career & Certifications",description:"Structured pathways and peer study groups for AWS Certified Cloud Practitioner & Solutions Architect exams, plus industry mentorship and networking.",tags:["AWS Certifications","1-on-1 Mentorship","Resume Reviews","Cloud Network"],highlight:"Industry Recognized",channel:"CH 03"}],[e,t]=Oe.useState(0),[i,r]=Oe.useState(!0),[s,a]=Oe.useState(!1),o=Oe.useRef(null),c=m=>{i&&(a(!0),t(m),setTimeout(()=>{a(!1)},400))};Oe.useEffect(()=>{if(i)return o.current=setInterval(()=>{t(m=>{const d=(m+1)%n.length;return a(!0),setTimeout(()=>a(!1),400),d})},15e3),()=>{o.current&&clearInterval(o.current)}},[i,e]),Oe.useEffect(()=>{if(!i)return;let m;const d=()=>{const h=Math.floor(Math.random()*3e3)+2e3;m=setTimeout(()=>{a(!0),setTimeout(()=>a(!1),220),d()},h)};return d(),()=>{m&&clearTimeout(m)}},[i]);const l=n[e],f=l.icon;return E.jsx("section",{id:"pillars",className:"section-padding pillars-section",children:E.jsxs("div",{className:"container",children:[E.jsxs("div",{className:"pillars-header text-center",children:[E.jsx("div",{className:"section-badge",children:E.jsx("span",{children:"// CORE PILLARS"})}),E.jsxs("h2",{className:"section-title",children:[E.jsx(uc,{text:"What We Do: ",animateOn:"view",speed:35,sequential:!0,className:"decrypted",encryptedClassName:"encrypted"}),E.jsx("span",{className:"text-gradient",children:"3 Core Pillars"})]}),E.jsx("p",{className:"section-description mx-auto",children:"Explore the core pillars driving student innovation, cloud architecture, and industry career readiness at AWS SBG JSSATEB."})]}),E.jsx("div",{className:"tv-console-container",children:E.jsxs("div",{className:"tv-cabinet",children:[E.jsxs("div",{className:"tv-antenna-wrapper",children:[E.jsx("div",{className:"antenna-base"}),E.jsx("div",{className:"antenna-rod rod-left",children:E.jsx("div",{className:"antenna-tip"})}),E.jsx("div",{className:"antenna-rod rod-right",children:E.jsx("div",{className:"antenna-tip"})})]}),E.jsx("div",{className:"tv-screen-bezel",children:E.jsxs("div",{className:"tv-screen-glass",children:[E.jsx("div",{className:"tv-scanlines"}),E.jsx("div",{className:"tv-glass-glare"}),s&&E.jsx("div",{className:"tv-static-effect"}),E.jsx("div",{className:`tv-display-viewport ${i?"powered-on":"powered-off"}`,children:i?E.jsxs("div",{className:"tv-screen-content",children:[E.jsxs("div",{className:"tv-broadcast-bar",children:[E.jsxs("div",{className:"tv-broadcast-channel",children:[E.jsx("span",{className:"tv-ch-number",children:l.channel}),E.jsx("span",{className:"tv-live-indicator",children:"● BROADCASTING"})]}),E.jsxs("div",{className:"tv-auto-timer",children:[E.jsx(La,{size:13}),E.jsx("span",{children:"CORE PILLARS"})]})]}),E.jsxs("div",{className:"tv-pillar-details",children:[E.jsxs("div",{className:"tv-pillar-badge-row",children:[E.jsx("div",{className:"tv-pillar-icon-box",children:E.jsx(f,{size:22,className:"pillar-icon"})}),E.jsx("span",{className:"tv-pillar-badge",children:l.badge})]}),E.jsx("h3",{className:"tv-pillar-title",children:l.title}),E.jsx("p",{className:"tv-pillar-desc",children:l.description}),E.jsx("div",{className:"tv-pillar-tags",children:l.tags.map((m,d)=>E.jsx("span",{className:"tv-tag-item",children:m},d))}),E.jsx("div",{className:"tv-pillar-footer",children:E.jsxs("span",{className:"tv-pillar-highlight",children:["✨ ",l.highlight]})})]})]}):E.jsxs("div",{className:"tv-screen-off-state",children:[E.jsx(La,{size:48,className:"off-icon"}),E.jsx("span",{children:"TELEVISION STANDBY"}),E.jsx("small",{children:"Press Power knob to turn ON"})]})})]})}),E.jsxs("div",{className:"tv-control-panel",children:[E.jsx("div",{className:"tv-speaker-grill",children:E.jsx("div",{className:"tv-speaker-slots",children:[...Array(10)].map((m,d)=>E.jsx("div",{className:"tv-grill-slot"},d))})}),E.jsxs("div",{className:"tv-knobs-row",children:[E.jsxs("div",{className:"tv-knob-group",children:[E.jsx("input",{id:"checkbox",type:"checkbox",checked:i,onChange:()=>r(!i)}),E.jsx("label",{className:"switch",htmlFor:"checkbox",title:"Toggle TV Power",children:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"slider",children:E.jsx("path",{d:"M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"})})})]}),E.jsx("div",{className:"tv-knob-group",children:E.jsx("div",{className:"tv-rotary-knob vol-knob",title:"Volume Control",children:E.jsx("div",{className:"knob-line"})})})]}),E.jsxs("div",{className:"tv-tuning-section",children:[E.jsxs("div",{className:"tv-tuning-header",children:[E.jsx("span",{className:"tv-knob-label",children:"CHANNEL TUNING"}),E.jsx(Dc,{size:14,className:"radio-icon"})]}),E.jsxs("div",{className:"clock-input",children:[E.jsx("input",{type:"radio",id:"v1",name:"clock-radio",checked:e===0,onChange:()=>c(0)}),E.jsx("input",{type:"radio",id:"v2",name:"clock-radio",checked:e===1,onChange:()=>c(1)}),E.jsx("input",{type:"radio",id:"v3",name:"clock-radio",checked:e===2,onChange:()=>c(2)}),E.jsx("label",{htmlFor:"v1",id:"l1",onClick:()=>c(0),title:"CH 01"}),E.jsx("label",{htmlFor:"v2",id:"l2",onClick:()=>c(1),title:"CH 02"}),E.jsx("label",{htmlFor:"v3",id:"l3",onClick:()=>c(2),title:"CH 03"}),E.jsx("div",{className:"dial"})]}),E.jsx("div",{className:"tv-channel-selector",children:n.map((m,d)=>E.jsxs("button",{type:"button",className:`tv-chan-button ${e===d?"active":""}`,onClick:()=>c(d),children:["CH 0",d+1]},m.id))})]})]})]})})]})})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yr="185",zc=0,Oa=1,Gc=2,fr=1,kc=2,Di=3,Sn=0,yt=1,Gt=2,Jt=0,fi=1,Ba=2,za=3,Ga=4,Hc=5,Hn=100,Vc=101,Wc=102,Xc=103,qc=104,Yc=200,Kc=201,$c=202,jc=203,ms=204,gs=205,Zc=206,Jc=207,Qc=208,ed=209,td=210,nd=211,id=212,rd=213,sd=214,_s=0,vr=1,vs=2,mi=3,xs=4,Ss=5,Ms=6,Es=7,Xo=0,ad=1,od=2,cn=0,qo=1,Yo=2,Ko=3,$o=4,jo=5,Zo=6,Jo=7,Qo=300,qn=301,gi=302,Nr=303,Ir=304,Ar=306,bs=1e3,_n=1001,Ts=1002,Rt=1003,ld=1004,Hi=1005,mt=1006,Lr=1007,Wn=1008,Nt=1009,el=1010,tl=1011,Ii=1012,la=1013,dn=1014,jt=1015,Mn=1016,ca=1017,da=1018,_i=1020,nl=35902,il=35899,rl=1021,sl=1022,Zt=1023,En=1026,In=1027,al=1028,ua=1029,Yn=1030,fa=1031,ha=1033,hr=33776,pr=33777,mr=33778,gr=33779,ys=35840,As=35841,Rs=35842,Cs=35843,ws=36196,Ps=37492,Ds=37496,Ns=37488,Is=37489,xr=37490,Ls=37491,Us=37808,Fs=37809,Os=37810,Bs=37811,zs=37812,Gs=37813,ks=37814,Hs=37815,Vs=37816,Ws=37817,Xs=37818,qs=37819,Ys=37820,Ks=37821,$s=36492,js=36494,Zs=36495,Js=36283,Qs=36284,Sr=36285,ea=36286,Li=3200,ka=0,cd=1,on="",xt="srgb",vi="srgb-linear",Mr="linear",it="srgb",Jn=7680,Ha=519,dd=512,ud=513,fd=514,pa=515,hd=516,pd=517,ma=518,md=519,Va=35044,ta="300 es",ln=2e3,Er=2001;function gd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function br(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _d(){const n=br("canvas");return n.style.display="block",n}const Wa={};function Xa(...n){const e="THREE."+n.shift();console.log(e,...n)}function ol(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ce(...n){n=ol(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function je(...n){n=ol(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function hi(...n){const e=n.join(" ");e in Wa||(Wa[e]=!0,Ce(...n))}function vd(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const xd={[_s]:vr,[vs]:Ms,[xs]:Es,[mi]:Ss,[vr]:_s,[Ms]:vs,[Es]:xs,[Ss]:mi};class bn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ur=Math.PI/180,na=180/Math.PI;function Ui(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function Xe(n,e,t){return Math.max(e,Math.min(t,n))}function Sd(n,e){return(n%e+e)%e}function Fr(n,e,t){return(1-t)*n+t*e}function Ti(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const va=class va{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};va.prototype.isVector2=!0;let Be=va;class Si{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],f=i[r+2],m=i[r+3],d=s[a+0],h=s[a+1],v=s[a+2],M=s[a+3];if(m!==M||c!==d||l!==h||f!==v){let g=c*d+l*h+f*v+m*M;g<0&&(d=-d,h=-h,v=-v,M=-M,g=-g);let u=1-o;if(g<.9995){const A=Math.acos(g),C=Math.sin(A);u=Math.sin(u*A)/C,o=Math.sin(o*A)/C,c=c*u+d*o,l=l*u+h*o,f=f*u+v*o,m=m*u+M*o}else{c=c*u+d*o,l=l*u+h*o,f=f*u+v*o,m=m*u+M*o;const A=1/Math.sqrt(c*c+l*l+f*f+m*m);c*=A,l*=A,f*=A,m*=A}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],f=i[r+3],m=s[a],d=s[a+1],h=s[a+2],v=s[a+3];return e[t]=o*v+f*m+c*h-l*d,e[t+1]=c*v+f*d+l*m-o*h,e[t+2]=l*v+f*h+o*d-c*m,e[t+3]=f*v-o*m-c*d-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),f=o(r/2),m=o(s/2),d=c(i/2),h=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=d*f*m+l*h*v,this._y=l*h*m-d*f*v,this._z=l*f*v+d*h*m,this._w=l*f*m-d*h*v;break;case"YXZ":this._x=d*f*m+l*h*v,this._y=l*h*m-d*f*v,this._z=l*f*v-d*h*m,this._w=l*f*m+d*h*v;break;case"ZXY":this._x=d*f*m-l*h*v,this._y=l*h*m+d*f*v,this._z=l*f*v+d*h*m,this._w=l*f*m-d*h*v;break;case"ZYX":this._x=d*f*m-l*h*v,this._y=l*h*m+d*f*v,this._z=l*f*v-d*h*m,this._w=l*f*m+d*h*v;break;case"YZX":this._x=d*f*m+l*h*v,this._y=l*h*m+d*f*v,this._z=l*f*v-d*h*m,this._w=l*f*m-d*h*v;break;case"XZY":this._x=d*f*m-l*h*v,this._y=l*h*m-d*f*v,this._z=l*f*v+d*h*m,this._w=l*f*m+d*h*v;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],f=t[6],m=t[10],d=i+o+m;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(f-c)*h,this._y=(s-l)*h,this._z=(a-r)*h}else if(i>o&&i>m){const h=2*Math.sqrt(1+i-o-m);this._w=(f-c)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+l)/h}else if(o>m){const h=2*Math.sqrt(1+o-i-m);this._w=(s-l)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(c+f)/h}else{const h=2*Math.sqrt(1+m-i-o);this._w=(a-r)/h,this._x=(s+l)/h,this._y=(c+f)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,f=t._w;return this._x=i*f+a*o+r*l-s*c,this._y=r*f+a*c+s*o-i*l,this._z=s*f+a*l+i*c-r*o,this._w=a*f-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),f=Math.sin(l);c=Math.sin(c*l)/f,t=Math.sin(t*l)/f,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const xa=class xa{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),f=2*(o*t-s*r),m=2*(s*i-a*t);return this.x=t+c*l+a*m-o*f,this.y=i+c*f+o*l-s*m,this.z=r+c*m+s*f-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Or.copy(this).projectOnVector(e),this.sub(Or)}reflect(e){return this.sub(Or.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xa.prototype.isVector3=!0;let H=xa;const Or=new H,qa=new Si,Sa=class Sa{constructor(e,t,i,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=c,f[6]=i,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],f=i[4],m=i[7],d=i[2],h=i[5],v=i[8],M=r[0],g=r[3],u=r[6],A=r[1],C=r[4],S=r[7],R=r[2],T=r[5],P=r[8];return s[0]=a*M+o*A+c*R,s[3]=a*g+o*C+c*T,s[6]=a*u+o*S+c*P,s[1]=l*M+f*A+m*R,s[4]=l*g+f*C+m*T,s[7]=l*u+f*S+m*P,s[2]=d*M+h*A+v*R,s[5]=d*g+h*C+v*T,s[8]=d*u+h*S+v*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8];return t*a*f-t*o*l-i*s*f+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],m=f*a-o*l,d=o*c-f*s,h=l*s-a*c,v=t*m+i*d+r*h;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=m*M,e[1]=(r*l-f*i)*M,e[2]=(o*i-r*a)*M,e[3]=d*M,e[4]=(f*t-r*c)*M,e[5]=(r*s-o*t)*M,e[6]=h*M,e[7]=(i*c-l*t)*M,e[8]=(a*t-i*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Br.makeScale(e,t)),this}rotate(e){return hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Br.makeRotation(-e)),this}translate(e,t){return hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Br.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Sa.prototype.isMatrix3=!0;let Ne=Sa;const Br=new Ne,Ya=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ka=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Md(){const n={enabled:!0,workingColorSpace:vi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===it&&(r.r=vn(r.r),r.g=vn(r.g),r.b=vn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(r.r=pi(r.r),r.g=pi(r.g),r.b=pi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===on?Mr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return hi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return hi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[vi]:{primaries:e,whitePoint:i,transfer:Mr,toXYZ:Ya,fromXYZ:Ka,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:e,whitePoint:i,transfer:it,toXYZ:Ya,fromXYZ:Ka,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}}),n}const We=Md();function vn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function pi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Qn;class Ed{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Qn===void 0&&(Qn=br("canvas")),Qn.width=e.width,Qn.height=e.height;const r=Qn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Qn}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=br("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=vn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(vn(t[i]/255)*255):t[i]=vn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bd=0;class ga{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(zr(r[a].image)):s.push(zr(r[a]))}else s=zr(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function zr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ed.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}let Td=0;const Gr=new H;class At extends bn{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,i=_n,r=_n,s=mt,a=Wn,o=Zt,c=Nt,l=At.DEFAULT_ANISOTROPY,f=on){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Ui(),this.name="",this.source=new ga(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gr).x}get height(){return this.source.getSize(Gr).y}get depth(){return this.source.getSize(Gr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bs:e.x=e.x-Math.floor(e.x);break;case _n:e.x=e.x<0?0:1;break;case Ts:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bs:e.y=e.y-Math.floor(e.y);break;case _n:e.y=e.y<0?0:1;break;case Ts:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=Qo;At.DEFAULT_ANISOTROPY=1;const Ma=class Ma{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],f=c[4],m=c[8],d=c[1],h=c[5],v=c[9],M=c[2],g=c[6],u=c[10];if(Math.abs(f-d)<.01&&Math.abs(m-M)<.01&&Math.abs(v-g)<.01){if(Math.abs(f+d)<.1&&Math.abs(m+M)<.1&&Math.abs(v+g)<.1&&Math.abs(l+h+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(l+1)/2,S=(h+1)/2,R=(u+1)/2,T=(f+d)/4,P=(m+M)/4,_=(v+g)/4;return C>S&&C>R?C<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(C),r=T/i,s=P/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=_/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=P/s,r=_/s),this.set(i,r,s,t),this}let A=Math.sqrt((g-v)*(g-v)+(m-M)*(m-M)+(d-f)*(d-f));return Math.abs(A)<.001&&(A=1),this.x=(g-v)/A,this.y=(m-M)/A,this.z=(d-f)/A,this.w=Math.acos((l+h+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ma.prototype.isVector4=!0;let pt=Ma;class yd extends bn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new At(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:mt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ga(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lt extends yd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ll extends At{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ad extends At{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tr=class Tr{constructor(e,t,i,r,s,a,o,c,l,f,m,d,h,v,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,f,m,d,h,v,M,g)}set(e,t,i,r,s,a,o,c,l,f,m,d,h,v,M,g){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=f,u[10]=m,u[14]=d,u[3]=h,u[7]=v,u[11]=M,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tr().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/ei.setFromMatrixColumn(e,0).length(),s=1/ei.setFromMatrixColumn(e,1).length(),a=1/ei.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),f=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const d=a*f,h=a*m,v=o*f,M=o*m;t[0]=c*f,t[4]=-c*m,t[8]=l,t[1]=h+v*l,t[5]=d-M*l,t[9]=-o*c,t[2]=M-d*l,t[6]=v+h*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*f,h=c*m,v=l*f,M=l*m;t[0]=d+M*o,t[4]=v*o-h,t[8]=a*l,t[1]=a*m,t[5]=a*f,t[9]=-o,t[2]=h*o-v,t[6]=M+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*f,h=c*m,v=l*f,M=l*m;t[0]=d-M*o,t[4]=-a*m,t[8]=v+h*o,t[1]=h+v*o,t[5]=a*f,t[9]=M-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*f,h=a*m,v=o*f,M=o*m;t[0]=c*f,t[4]=v*l-h,t[8]=d*l+M,t[1]=c*m,t[5]=M*l+d,t[9]=h*l-v,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,h=a*l,v=o*c,M=o*l;t[0]=c*f,t[4]=M-d*m,t[8]=v*m+h,t[1]=m,t[5]=a*f,t[9]=-o*f,t[2]=-l*f,t[6]=h*m+v,t[10]=d-M*m}else if(e.order==="XZY"){const d=a*c,h=a*l,v=o*c,M=o*l;t[0]=c*f,t[4]=-m,t[8]=l*f,t[1]=d*m+M,t[5]=a*f,t[9]=h*m-v,t[2]=v*m-h,t[6]=o*f,t[10]=M*m+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rd,e,Cd)}lookAt(e,t,i){const r=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),Rn.crossVectors(i,Bt),Rn.lengthSq()===0&&(Math.abs(i.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),Rn.crossVectors(i,Bt)),Rn.normalize(),Vi.crossVectors(Bt,Rn),r[0]=Rn.x,r[4]=Vi.x,r[8]=Bt.x,r[1]=Rn.y,r[5]=Vi.y,r[9]=Bt.y,r[2]=Rn.z,r[6]=Vi.z,r[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],f=i[1],m=i[5],d=i[9],h=i[13],v=i[2],M=i[6],g=i[10],u=i[14],A=i[3],C=i[7],S=i[11],R=i[15],T=r[0],P=r[4],_=r[8],y=r[12],I=r[1],w=r[5],U=r[9],X=r[13],$=r[2],G=r[6],Y=r[10],W=r[14],B=r[3],q=r[7],ne=r[11],se=r[15];return s[0]=a*T+o*I+c*$+l*B,s[4]=a*P+o*w+c*G+l*q,s[8]=a*_+o*U+c*Y+l*ne,s[12]=a*y+o*X+c*W+l*se,s[1]=f*T+m*I+d*$+h*B,s[5]=f*P+m*w+d*G+h*q,s[9]=f*_+m*U+d*Y+h*ne,s[13]=f*y+m*X+d*W+h*se,s[2]=v*T+M*I+g*$+u*B,s[6]=v*P+M*w+g*G+u*q,s[10]=v*_+M*U+g*Y+u*ne,s[14]=v*y+M*X+g*W+u*se,s[3]=A*T+C*I+S*$+R*B,s[7]=A*P+C*w+S*G+R*q,s[11]=A*_+C*U+S*Y+R*ne,s[15]=A*y+C*X+S*W+R*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],f=e[2],m=e[6],d=e[10],h=e[14],v=e[3],M=e[7],g=e[11],u=e[15],A=c*h-l*d,C=o*h-l*m,S=o*d-c*m,R=a*h-l*f,T=a*d-c*f,P=a*m-o*f;return t*(M*A-g*C+u*S)-i*(v*A-g*R+u*T)+r*(v*C-M*R+u*P)-s*(v*S-M*T+g*P)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],f=e[10];return t*(a*f-o*l)-i*(s*f-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],m=e[9],d=e[10],h=e[11],v=e[12],M=e[13],g=e[14],u=e[15],A=t*o-i*a,C=t*c-r*a,S=t*l-s*a,R=i*c-r*o,T=i*l-s*o,P=r*l-s*c,_=f*M-m*v,y=f*g-d*v,I=f*u-h*v,w=m*g-d*M,U=m*u-h*M,X=d*u-h*g,$=A*X-C*U+S*w+R*I-T*y+P*_;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/$;return e[0]=(o*X-c*U+l*w)*G,e[1]=(r*U-i*X-s*w)*G,e[2]=(M*P-g*T+u*R)*G,e[3]=(d*T-m*P-h*R)*G,e[4]=(c*I-a*X-l*y)*G,e[5]=(t*X-r*I+s*y)*G,e[6]=(g*S-v*P-u*C)*G,e[7]=(f*P-d*S+h*C)*G,e[8]=(a*U-o*I+l*_)*G,e[9]=(i*I-t*U-s*_)*G,e[10]=(v*T-M*S+u*A)*G,e[11]=(m*S-f*T-h*A)*G,e[12]=(o*y-a*w-c*_)*G,e[13]=(t*w-i*y+r*_)*G,e[14]=(M*C-v*R-g*A)*G,e[15]=(f*R-m*C+d*A)*G,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,f=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,f*o+i,f*c-r*a,0,l*c-r*o,f*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,f=a+a,m=o+o,d=s*l,h=s*f,v=s*m,M=a*f,g=a*m,u=o*m,A=c*l,C=c*f,S=c*m,R=i.x,T=i.y,P=i.z;return r[0]=(1-(M+u))*R,r[1]=(h+S)*R,r[2]=(v-C)*R,r[3]=0,r[4]=(h-S)*T,r[5]=(1-(d+u))*T,r[6]=(g+A)*T,r[7]=0,r[8]=(v+C)*P,r[9]=(g-A)*P,r[10]=(1-(d+M))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=ei.set(r[0],r[1],r[2]).length();const o=ei.set(r[4],r[5],r[6]).length(),c=ei.set(r[8],r[9],r[10]).length();s<0&&(a=-a),qt.copy(this);const l=1/a,f=1/o,m=1/c;return qt.elements[0]*=l,qt.elements[1]*=l,qt.elements[2]*=l,qt.elements[4]*=f,qt.elements[5]*=f,qt.elements[6]*=f,qt.elements[8]*=m,qt.elements[9]*=m,qt.elements[10]*=m,t.setFromRotationMatrix(qt),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,r,s,a,o=ln,c=!1){const l=this.elements,f=2*s/(t-e),m=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let v,M;if(c)v=s/(a-s),M=a*s/(a-s);else if(o===ln)v=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===Er)v=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=m,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=ln,c=!1){const l=this.elements,f=2/(t-e),m=2/(i-r),d=-(t+e)/(t-e),h=-(i+r)/(i-r);let v,M;if(c)v=1/(a-s),M=a/(a-s);else if(o===ln)v=-2/(a-s),M=-(a+s)/(a-s);else if(o===Er)v=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=m,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=v,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Tr.prototype.isMatrix4=!0;let Mt=Tr;const ei=new H,qt=new Mt,Rd=new H(0,0,0),Cd=new H(1,1,1),Rn=new H,Vi=new H,Bt=new H,$a=new Mt,ja=new Si;class Kn{constructor(e=0,t=0,i=0,r=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],f=r[9],m=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-m,h),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,h),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $a.makeRotationFromQuaternion(e),this.setFromRotationMatrix($a,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ja.setFromEuler(this),this.setFromQuaternion(ja,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class cl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wd=0;const Za=new H,ti=new Si,fn=new Mt,Wi=new H,yi=new H,Pd=new H,Dd=new Si,Ja=new H(1,0,0),Qa=new H(0,1,0),eo=new H(0,0,1),to={type:"added"},Nd={type:"removed"},ni={type:"childadded",child:null},kr={type:"childremoved",child:null};class kt extends bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new H,t=new Kn,i=new Si,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Ne}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ti.setFromAxisAngle(e,t),this.quaternion.multiply(ti),this}rotateOnWorldAxis(e,t){return ti.setFromAxisAngle(e,t),this.quaternion.premultiply(ti),this}rotateX(e){return this.rotateOnAxis(Ja,e)}rotateY(e){return this.rotateOnAxis(Qa,e)}rotateZ(e){return this.rotateOnAxis(eo,e)}translateOnAxis(e,t){return Za.copy(e).applyQuaternion(this.quaternion),this.position.add(Za.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ja,e)}translateY(e){return this.translateOnAxis(Qa,e)}translateZ(e){return this.translateOnAxis(eo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wi.copy(e):Wi.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(yi,Wi,this.up):fn.lookAt(Wi,yi,this.up),this.quaternion.setFromRotationMatrix(fn),r&&(fn.extractRotation(r.matrixWorld),ti.setFromRotationMatrix(fn),this.quaternion.premultiply(ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(to),ni.child=e,this.dispatchEvent(ni),ni.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nd),kr.child=e,this.dispatchEvent(kr),kr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(to),ni.child=e,this.dispatchEvent(ni),ni.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,e,Pd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,Dd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const m=c[l];s(e.shapes,m)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),f=a(e.images),m=a(e.shapes),d=a(e.skeletons),h=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),f.length>0&&(i.images=f),m.length>0&&(i.shapes=m),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const c=[];for(const l in o){const f=o[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}kt.DEFAULT_UP=new H(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Xi extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Id={type:"move"};class Hr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const M of e.hand.values()){const g=t.getJointPose(M,i),u=this._getHandJoint(l,M);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const f=l.joints["index-finger-tip"],m=l.joints["thumb-tip"],d=f.position.distanceTo(m.position),h=.02,v=.005;l.inputState.pinching&&d>h+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=h-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Id)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Xi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const dl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},qi={h:0,s:0,l:0};function Vr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=We.workingColorSpace){return this.r=e,this.g=t,this.b=i,We.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=We.workingColorSpace){if(e=Sd(e,1),t=Xe(t,0,1),i=Xe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Vr(a,s,e+1/3),this.g=Vr(a,s,e),this.b=Vr(a,s,e-1/3)}return We.colorSpaceToWorking(this,r),this}setStyle(e,t=xt){function i(s){s!==void 0&&parseFloat(s)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){const i=dl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vn(e.r),this.g=vn(e.g),this.b=vn(e.b),this}copyLinearToSRGB(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return We.workingToColorSpace(Dt.copy(this),e),Math.round(Xe(Dt.r*255,0,255))*65536+Math.round(Xe(Dt.g*255,0,255))*256+Math.round(Xe(Dt.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(Dt.copy(this),t);const i=Dt.r,r=Dt.g,s=Dt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const f=(o+a)/2;if(o===a)c=0,l=0;else{const m=a-o;switch(l=f<=.5?m/(a+o):m/(2-a-o),a){case i:c=(r-s)/m+(r<s?6:0);break;case r:c=(s-i)/m+2;break;case s:c=(i-r)/m+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=xt){We.workingToColorSpace(Dt.copy(this),e);const t=Dt.r,i=Dt.g,r=Dt.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Cn),this.setHSL(Cn.h+e,Cn.s+t,Cn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(qi);const i=Fr(Cn.h,qi.h,t),r=Fr(Cn.s,qi.s,t),s=Fr(Cn.l,qi.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Je;Je.NAMES=dl;class ia extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Yt=new H,hn=new H,Wr=new H,pn=new H,ii=new H,ri=new H,no=new H,Xr=new H,qr=new H,Yr=new H,Kr=new pt,$r=new pt,jr=new pt;class $t{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Yt.subVectors(e,t),r.cross(Yt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Yt.subVectors(r,t),hn.subVectors(i,t),Wr.subVectors(e,t);const a=Yt.dot(Yt),o=Yt.dot(hn),c=Yt.dot(Wr),l=hn.dot(hn),f=hn.dot(Wr),m=a*l-o*o;if(m===0)return s.set(0,0,0),null;const d=1/m,h=(l*c-o*f)*d,v=(a*f-o*c)*d;return s.set(1-h-v,v,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,pn.x),c.addScaledVector(a,pn.y),c.addScaledVector(o,pn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return Kr.setScalar(0),$r.setScalar(0),jr.setScalar(0),Kr.fromBufferAttribute(e,t),$r.fromBufferAttribute(e,i),jr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Kr,s.x),a.addScaledVector($r,s.y),a.addScaledVector(jr,s.z),a}static isFrontFacing(e,t,i,r){return Yt.subVectors(i,t),hn.subVectors(e,t),Yt.cross(hn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Yt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return $t.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ii.subVectors(r,i),ri.subVectors(s,i),Xr.subVectors(e,i);const c=ii.dot(Xr),l=ri.dot(Xr);if(c<=0&&l<=0)return t.copy(i);qr.subVectors(e,r);const f=ii.dot(qr),m=ri.dot(qr);if(f>=0&&m<=f)return t.copy(r);const d=c*m-f*l;if(d<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(i).addScaledVector(ii,a);Yr.subVectors(e,s);const h=ii.dot(Yr),v=ri.dot(Yr);if(v>=0&&h<=v)return t.copy(s);const M=h*l-c*v;if(M<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(i).addScaledVector(ri,o);const g=f*v-h*m;if(g<=0&&m-f>=0&&h-v>=0)return no.subVectors(s,r),o=(m-f)/(m-f+(h-v)),t.copy(r).addScaledVector(no,o);const u=1/(g+M+d);return a=M*u,o=d*u,t.copy(i).addScaledVector(ii,a).addScaledVector(ri,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Fi{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kt):Kt.fromBufferAttribute(s,a),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yi.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yi.copy(i.boundingBox)),Yi.applyMatrix4(e.matrixWorld),this.union(Yi)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ai),Ki.subVectors(this.max,Ai),si.subVectors(e.a,Ai),ai.subVectors(e.b,Ai),oi.subVectors(e.c,Ai),wn.subVectors(ai,si),Pn.subVectors(oi,ai),On.subVectors(si,oi);let t=[0,-wn.z,wn.y,0,-Pn.z,Pn.y,0,-On.z,On.y,wn.z,0,-wn.x,Pn.z,0,-Pn.x,On.z,0,-On.x,-wn.y,wn.x,0,-Pn.y,Pn.x,0,-On.y,On.x,0];return!Zr(t,si,ai,oi,Ki)||(t=[1,0,0,0,1,0,0,0,1],!Zr(t,si,ai,oi,Ki))?!1:($i.crossVectors(wn,Pn),t=[$i.x,$i.y,$i.z],Zr(t,si,ai,oi,Ki))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mn=[new H,new H,new H,new H,new H,new H,new H,new H],Kt=new H,Yi=new Fi,si=new H,ai=new H,oi=new H,wn=new H,Pn=new H,On=new H,Ai=new H,Ki=new H,$i=new H,Bn=new H;function Zr(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Bn.fromArray(n,s);const o=r.x*Math.abs(Bn.x)+r.y*Math.abs(Bn.y)+r.z*Math.abs(Bn.z),c=e.dot(Bn),l=t.dot(Bn),f=i.dot(Bn);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}const St=new H,ji=new Be;let Ld=0;class Xt extends bn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ld++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Va,this.updateRanges=[],this.gpuType=jt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ji.fromBufferAttribute(this,t),ji.applyMatrix3(e),this.setXY(t,ji.x,ji.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),i=Ut(i,this.array),r=Ut(r,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Va&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class ul extends Xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class fl extends Xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xn extends Xt{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Ud=new Fi,Ri=new H,Jr=new H;class _a{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ud.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ri.subVectors(e,this.center);const t=Ri.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ri,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ri.copy(e.center).add(Jr)),this.expandByPoint(Ri.copy(e.center).sub(Jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Fd=0;const Vt=new Mt,Qr=new kt,li=new H,zt=new Fi,Ci=new Fi,Tt=new H;class un extends bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gd(e)?fl:ul)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ne().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,i){return Vt.makeTranslation(e,t,i),this.applyMatrix4(Vt),this}scale(e,t,i){return Vt.makeScale(e,t,i),this.applyMatrix4(Vt),this}lookAt(e){return Qr.lookAt(e),Qr.updateMatrix(),this.applyMatrix4(Qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(li).negate(),this.translate(li.x,li.y,li.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];zt.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _a);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ci.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(zt.min,Ci.min),zt.expandByPoint(Tt),Tt.addVectors(zt.max,Ci.max),zt.expandByPoint(Tt)):(zt.expandByPoint(Ci.min),zt.expandByPoint(Ci.max))}zt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Tt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)Tt.fromBufferAttribute(o,l),c&&(li.fromBufferAttribute(e,l),Tt.add(li)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Xt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let _=0;_<i.count;_++)o[_]=new H,c[_]=new H;const l=new H,f=new H,m=new H,d=new Be,h=new Be,v=new Be,M=new H,g=new H;function u(_,y,I){l.fromBufferAttribute(i,_),f.fromBufferAttribute(i,y),m.fromBufferAttribute(i,I),d.fromBufferAttribute(s,_),h.fromBufferAttribute(s,y),v.fromBufferAttribute(s,I),f.sub(l),m.sub(l),h.sub(d),v.sub(d);const w=1/(h.x*v.y-v.x*h.y);isFinite(w)&&(M.copy(f).multiplyScalar(v.y).addScaledVector(m,-h.y).multiplyScalar(w),g.copy(m).multiplyScalar(h.x).addScaledVector(f,-v.x).multiplyScalar(w),o[_].add(M),o[y].add(M),o[I].add(M),c[_].add(g),c[y].add(g),c[I].add(g))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let _=0,y=A.length;_<y;++_){const I=A[_],w=I.start,U=I.count;for(let X=w,$=w+U;X<$;X+=3)u(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const C=new H,S=new H,R=new H,T=new H;function P(_){R.fromBufferAttribute(r,_),T.copy(R);const y=o[_];C.copy(y),C.sub(R.multiplyScalar(R.dot(y))).normalize(),S.crossVectors(T,y);const w=S.dot(c[_])<0?-1:1;a.setXYZW(_,C.x,C.y,C.z,w)}for(let _=0,y=A.length;_<y;++_){const I=A[_],w=I.start,U=I.count;for(let X=w,$=w+U;X<$;X+=3)P(e.getX(X+0)),P(e.getX(X+1)),P(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new H,s=new H,a=new H,o=new H,c=new H,l=new H,f=new H,m=new H;if(e)for(let d=0,h=e.count;d<h;d+=3){const v=e.getX(d+0),M=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,g),f.subVectors(a,s),m.subVectors(r,s),f.cross(m),o.fromBufferAttribute(i,v),c.fromBufferAttribute(i,M),l.fromBufferAttribute(i,g),o.add(f),c.add(f),l.add(f),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),f.subVectors(a,s),m.subVectors(r,s),f.cross(m),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,c){const l=o.array,f=o.itemSize,m=o.normalized,d=new l.constructor(c.length*f);let h=0,v=0;for(let M=0,g=c.length;M<g;M++){o.isInterleavedBufferAttribute?h=c[M]*o.data.stride+o.offset:h=c[M]*f;for(let u=0;u<f;u++)d[v++]=l[h++]}return new Xt(d,f,m)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new un,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let f=0,m=l.length;f<m;f++){const d=l[f],h=e(d,i);c.push(h)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let m=0,d=l.length;m<d;m++){const h=l[m];f.push(h.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const f=r[l];this.setAttribute(l,f.clone(t))}const s=e.morphAttributes;for(const l in s){const f=[],m=s[l];for(let d=0,h=m.length;d<h;d++)f.push(m[d].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,f=a.length;l<f;l++){const m=a[l];this.addGroup(m.start,m.count,m.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Od=0;class Mi extends bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=fi,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ms,this.blendDst=gs,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ha,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jn,this.stencilZFail=Jn,this.stencilZPass=Jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fi&&(i.blending=this.blending),this.side!==Sn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ms&&(i.blendSrc=this.blendSrc),this.blendDst!==gs&&(i.blendDst=this.blendDst),this.blendEquation!==Hn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==mi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ha&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Jn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Jn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Be().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Be().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const gn=new H,es=new H,Zi=new H,Dn=new H,ts=new H,Ji=new H,ns=new H;class Bd{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){es.copy(e).add(t).multiplyScalar(.5),Zi.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(es);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Zi),o=Dn.dot(this.direction),c=-Dn.dot(Zi),l=Dn.lengthSq(),f=Math.abs(1-a*a);let m,d,h,v;if(f>0)if(m=a*c-o,d=a*o-c,v=s*f,m>=0)if(d>=-v)if(d<=v){const M=1/f;m*=M,d*=M,h=m*(m+a*d+2*o)+d*(a*m+d+2*c)+l}else d=s,m=Math.max(0,-(a*d+o)),h=-m*m+d*(d+2*c)+l;else d=-s,m=Math.max(0,-(a*d+o)),h=-m*m+d*(d+2*c)+l;else d<=-v?(m=Math.max(0,-(-a*s+o)),d=m>0?-s:Math.min(Math.max(-s,-c),s),h=-m*m+d*(d+2*c)+l):d<=v?(m=0,d=Math.min(Math.max(-s,-c),s),h=d*(d+2*c)+l):(m=Math.max(0,-(a*s+o)),d=m>0?s:Math.min(Math.max(-s,-c),s),h=-m*m+d*(d+2*c)+l);else d=a>0?-s:s,m=Math.max(0,-(a*d+o)),h=-m*m+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(es).addScaledVector(Zi,d),h}intersectSphere(e,t){gn.subVectors(e.center,this.origin);const i=gn.dot(this.direction),r=gn.dot(gn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,f=1/this.direction.y,m=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),f>=0?(s=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),m>=0?(o=(e.min.z-d.z)*m,c=(e.max.z-d.z)*m):(o=(e.max.z-d.z)*m,c=(e.min.z-d.z)*m),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,i,r,s){ts.subVectors(t,e),Ji.subVectors(i,e),ns.crossVectors(ts,Ji);let a=this.direction.dot(ns),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Dn.subVectors(this.origin,e);const c=o*this.direction.dot(Ji.crossVectors(Dn,Ji));if(c<0)return null;const l=o*this.direction.dot(ts.cross(Dn));if(l<0||c+l>a)return null;const f=-o*Dn.dot(ns);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hl extends Mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const io=new Mt,zn=new Bd,Qi=new _a,ro=new H,er=new H,tr=new H,nr=new H,is=new H,ir=new H,so=new H,rr=new H;class Qt extends kt{constructor(e=new un,t=new hl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ir.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const f=o[c],m=s[c];f!==0&&(is.fromBufferAttribute(m,e),a?ir.addScaledVector(is,f):ir.addScaledVector(is.sub(t),f))}t.add(ir)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qi.copy(i.boundingSphere),Qi.applyMatrix4(s),zn.copy(e.ray).recast(e.near),!(Qi.containsPoint(zn.origin)===!1&&(zn.intersectSphere(Qi,ro)===null||zn.origin.distanceToSquared(ro)>(e.far-e.near)**2))&&(io.copy(s).invert(),zn.copy(e.ray).applyMatrix4(io),!(i.boundingBox!==null&&zn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,f=s.attributes.uv1,m=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=d.length;v<M;v++){const g=d[v],u=a[g.materialIndex],A=Math.max(g.start,h.start),C=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let S=A,R=C;S<R;S+=3){const T=o.getX(S),P=o.getX(S+1),_=o.getX(S+2);r=sr(this,u,e,i,l,f,m,T,P,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,h.start),M=Math.min(o.count,h.start+h.count);for(let g=v,u=M;g<u;g+=3){const A=o.getX(g),C=o.getX(g+1),S=o.getX(g+2);r=sr(this,a,e,i,l,f,m,A,C,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,M=d.length;v<M;v++){const g=d[v],u=a[g.materialIndex],A=Math.max(g.start,h.start),C=Math.min(c.count,Math.min(g.start+g.count,h.start+h.count));for(let S=A,R=C;S<R;S+=3){const T=S,P=S+1,_=S+2;r=sr(this,u,e,i,l,f,m,T,P,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,h.start),M=Math.min(c.count,h.start+h.count);for(let g=v,u=M;g<u;g+=3){const A=g,C=g+1,S=g+2;r=sr(this,a,e,i,l,f,m,A,C,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function zd(n,e,t,i,r,s,a,o){let c;if(e.side===yt?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Sn,o),c===null)return null;rr.copy(o),rr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(rr);return l<t.near||l>t.far?null:{distance:l,point:rr.clone(),object:n}}function sr(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,er),n.getVertexPosition(c,tr),n.getVertexPosition(l,nr);const f=zd(n,e,t,i,er,tr,nr,so);if(f){const m=new H;$t.getBarycoord(so,er,tr,nr,m),r&&(f.uv=$t.getInterpolatedAttribute(r,o,c,l,m,new Be)),s&&(f.uv1=$t.getInterpolatedAttribute(s,o,c,l,m,new Be)),a&&(f.normal=$t.getInterpolatedAttribute(a,o,c,l,m,new H),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new H,materialIndex:0};$t.getNormal(er,tr,nr,d.normal),f.face=d,f.barycoord=m}return f}class Gd extends At{constructor(e=null,t=1,i=1,r,s,a,o,c,l=Rt,f=Rt,m,d){super(null,a,o,c,l,f,r,s,m,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rs=new H,kd=new H,Hd=new Ne;class kn{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=rs.subVectors(i,t).cross(kd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(rs),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Hd.getNormalMatrix(e),r=this.coplanarPoint(rs).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new _a,Vd=new Be(.5,.5),ar=new H;class pl{constructor(e=new kn,t=new kn,i=new kn,r=new kn,s=new kn,a=new kn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ln,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],f=s[4],m=s[5],d=s[6],h=s[7],v=s[8],M=s[9],g=s[10],u=s[11],A=s[12],C=s[13],S=s[14],R=s[15];if(r[0].setComponents(l-a,h-f,u-v,R-A).normalize(),r[1].setComponents(l+a,h+f,u+v,R+A).normalize(),r[2].setComponents(l+o,h+m,u+M,R+C).normalize(),r[3].setComponents(l-o,h-m,u-M,R-C).normalize(),i)r[4].setComponents(c,d,g,S).normalize(),r[5].setComponents(l-c,h-d,u-g,R-S).normalize();else if(r[4].setComponents(l-c,h-d,u-g,R-S).normalize(),t===ln)r[5].setComponents(l+c,h+d,u+g,R+S).normalize();else if(t===Er)r[5].setComponents(c,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(e){Gn.center.set(0,0,0);const t=Vd.distanceTo(e.center);return Gn.radius=.7071067811865476+t,Gn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ar.x=r.normal.x>0?e.max.x:e.min.x,ar.y=r.normal.y>0?e.max.y:e.min.y,ar.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ar)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ml extends At{constructor(e=[],t=qn,i,r,s,a,o,c,l,f){super(e,t,i,r,s,a,o,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $n extends At{constructor(e,t,i=dn,r,s,a,o=Rt,c=Rt,l,f=En,m=1){if(f!==En&&f!==In)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:m};super(d,r,s,a,o,c,f,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ga(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Wd extends $n{constructor(e,t=dn,i=qn,r,s,a=Rt,o=Rt,c,l=En){const f={width:e,height:e,depth:1},m=[f,f,f,f,f,f];super(e,e,t,i,r,s,a,o,c,l),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class gl extends At{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Oi extends un{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],f=[],m=[];let d=0,h=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new xn(l,3)),this.setAttribute("normal",new xn(f,3)),this.setAttribute("uv",new xn(m,2));function v(M,g,u,A,C,S,R,T,P,_,y){const I=S/P,w=R/_,U=S/2,X=R/2,$=T/2,G=P+1,Y=_+1;let W=0,B=0;const q=new H;for(let ne=0;ne<Y;ne++){const se=ne*w-X;for(let ge=0;ge<G;ge++){const qe=ge*I-U;q[M]=qe*A,q[g]=se*C,q[u]=$,l.push(q.x,q.y,q.z),q[M]=0,q[g]=0,q[u]=T>0?1:-1,f.push(q.x,q.y,q.z),m.push(ge/P),m.push(1-ne/_),W+=1}}for(let ne=0;ne<_;ne++)for(let se=0;se<P;se++){const ge=d+se+G*ne,qe=d+se+G*(ne+1),dt=d+(se+1)+G*(ne+1),Ye=d+(se+1)+G*ne;c.push(ge,qe,Ye),c.push(qe,dt,Ye),B+=6}o.addGroup(h,B,y),h+=B,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Bi extends un{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,f=c+1,m=e/o,d=t/c,h=[],v=[],M=[],g=[];for(let u=0;u<f;u++){const A=u*d-a;for(let C=0;C<l;C++){const S=C*m-s;v.push(S,-A,0),M.push(0,0,1),g.push(C/o),g.push(1-u/c)}}for(let u=0;u<c;u++)for(let A=0;A<o;A++){const C=A+l*u,S=A+l*(u+1),R=A+1+l*(u+1),T=A+1+l*u;h.push(C,S,T),h.push(S,R,T)}this.setIndex(h),this.setAttribute("position",new xn(v,3)),this.setAttribute("normal",new xn(M,3)),this.setAttribute("uv",new xn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bi(e.width,e.height,e.widthSegments,e.heightSegments)}}function xi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(ao(r))r.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(ao(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function It(n){const e={};for(let t=0;t<n.length;t++){const i=xi(n[t]);for(const r in i)e[r]=i[r]}return e}function ao(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Xd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function _l(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const qd={clone:xi,merge:It};var Yd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ft extends Mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yd,this.fragmentShader=Kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xi(e.uniforms),this.uniformsGroups=Xd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Je().setHex(r.value);break;case"v2":this.uniforms[i].value=new Be().fromArray(r.value);break;case"v3":this.uniforms[i].value=new H().fromArray(r.value);break;case"v4":this.uniforms[i].value=new pt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ne().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Mt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class $d extends Ft{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jd extends Mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Li,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zd extends Mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const or=new H,lr=new Si,rn=new H;class vl extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(or,lr,rn),rn.x===1&&rn.y===1&&rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(or,lr,rn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(or,lr,rn),rn.x===1&&rn.y===1&&rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(or,lr,rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Nn=new H,oo=new Be,lo=new Be;class Wt extends vl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=na*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return na*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nn.x,Nn.y).multiplyScalar(-e/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Nn.x,Nn.y).multiplyScalar(-e/Nn.z)}getViewSize(e,t){return this.getViewBounds(e,oo,lo),t.subVectors(lo,oo)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ur*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Rr extends vl{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ci=-90,di=1;class Jd extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Wt(ci,di,e,t);r.layers=this.layers,this.add(r);const s=new Wt(ci,di,e,t);s.layers=this.layers,this.add(s);const a=new Wt(ci,di,e,t);a.layers=this.layers,this.add(a);const o=new Wt(ci,di,e,t);o.layers=this.layers,this.add(o);const c=new Wt(ci,di,e,t);c.layers=this.layers,this.add(c);const l=new Wt(ci,di,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===ln)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Er)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,f]=this.children,m=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(m,d,h),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Qd extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class vt{constructor(e){this.value=e}clone(){return new vt(this.value.clone===void 0?this.value:this.value.clone())}}class eu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ce("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Ea=class Ea{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};Ea.prototype.isMatrix2=!0;let co=Ea;function uo(n,e,t,i){const r=tu(i);switch(t){case rl:return n*e;case al:return n*e/r.components*r.byteLength;case ua:return n*e/r.components*r.byteLength;case Yn:return n*e*2/r.components*r.byteLength;case fa:return n*e*2/r.components*r.byteLength;case sl:return n*e*3/r.components*r.byteLength;case Zt:return n*e*4/r.components*r.byteLength;case ha:return n*e*4/r.components*r.byteLength;case hr:case pr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case mr:case gr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case As:case Cs:return Math.max(n,16)*Math.max(e,8)/4;case ys:case Rs:return Math.max(n,8)*Math.max(e,8)/2;case ws:case Ps:case Ns:case Is:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ds:case xr:case Ls:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Us:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fs:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Os:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Bs:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case zs:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Gs:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ks:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Hs:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Vs:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ws:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xs:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case qs:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ys:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ks:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case $s:case js:case Zs:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Js:case Qs:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Sr:case ea:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tu(n){switch(n){case Nt:case el:return{byteLength:1,components:1};case Ii:case tl:case Mn:return{byteLength:2,components:1};case ca:case da:return{byteLength:2,components:4};case dn:case la:case jt:return{byteLength:4,components:1};case nl:case il:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yr}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yr);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xl(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function nu(n){const e=new WeakMap;function t(o,c){const l=o.array,f=o.usage,m=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,f),o.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:m}}function i(o,c,l){const f=c.array,m=c.updateRanges;if(n.bindBuffer(l,o),m.length===0)n.bufferSubData(l,0,f);else{m.sort((h,v)=>h.start-v.start);let d=0;for(let h=1;h<m.length;h++){const v=m[d],M=m[h];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++d,m[d]=M)}m.length=d+1;for(let h=0,v=m.length;h<v;h++){const M=m[h];n.bufferSubData(l,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var iu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ru=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,su=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,au=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ou=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,du=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,fu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_u=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Su=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Tu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Au=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ru=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,wu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Du=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Iu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Fu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ou=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ku=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ku=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,$u=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ju=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ju=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ef=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,af=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,of=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,df=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ff=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_f=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Mf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ef=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Af=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Rf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Df=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,If=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Lf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ff=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Of=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,kf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Kf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$f=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,th=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ih=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ah=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ch=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ph=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_h=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Th=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ah=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ch=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ph=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ih=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Oh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:iu,alphahash_pars_fragment:ru,alphamap_fragment:su,alphamap_pars_fragment:au,alphatest_fragment:ou,alphatest_pars_fragment:lu,aomap_fragment:cu,aomap_pars_fragment:du,batching_pars_vertex:uu,batching_vertex:fu,begin_vertex:hu,beginnormal_vertex:pu,bsdfs:mu,iridescence_fragment:gu,bumpmap_pars_fragment:_u,clipping_planes_fragment:vu,clipping_planes_pars_fragment:xu,clipping_planes_pars_vertex:Su,clipping_planes_vertex:Mu,color_fragment:Eu,color_pars_fragment:bu,color_pars_vertex:Tu,color_vertex:yu,common:Au,cube_uv_reflection_fragment:Ru,defaultnormal_vertex:Cu,displacementmap_pars_vertex:wu,displacementmap_vertex:Pu,emissivemap_fragment:Du,emissivemap_pars_fragment:Nu,colorspace_fragment:Iu,colorspace_pars_fragment:Lu,envmap_fragment:Uu,envmap_common_pars_fragment:Fu,envmap_pars_fragment:Ou,envmap_pars_vertex:Bu,envmap_physical_pars_fragment:$u,envmap_vertex:zu,fog_vertex:Gu,fog_pars_vertex:ku,fog_fragment:Hu,fog_pars_fragment:Vu,gradientmap_pars_fragment:Wu,lightmap_pars_fragment:Xu,lights_lambert_fragment:qu,lights_lambert_pars_fragment:Yu,lights_pars_begin:Ku,lights_toon_fragment:ju,lights_toon_pars_fragment:Zu,lights_phong_fragment:Ju,lights_phong_pars_fragment:Qu,lights_physical_fragment:ef,lights_physical_pars_fragment:tf,lights_fragment_begin:nf,lights_fragment_maps:rf,lights_fragment_end:sf,lightprobes_pars_fragment:af,logdepthbuf_fragment:of,logdepthbuf_pars_fragment:lf,logdepthbuf_pars_vertex:cf,logdepthbuf_vertex:df,map_fragment:uf,map_pars_fragment:ff,map_particle_fragment:hf,map_particle_pars_fragment:pf,metalnessmap_fragment:mf,metalnessmap_pars_fragment:gf,morphinstance_vertex:_f,morphcolor_vertex:vf,morphnormal_vertex:xf,morphtarget_pars_vertex:Sf,morphtarget_vertex:Mf,normal_fragment_begin:Ef,normal_fragment_maps:bf,normal_pars_fragment:Tf,normal_pars_vertex:yf,normal_vertex:Af,normalmap_pars_fragment:Rf,clearcoat_normal_fragment_begin:Cf,clearcoat_normal_fragment_maps:wf,clearcoat_pars_fragment:Pf,iridescence_pars_fragment:Df,opaque_fragment:Nf,packing:If,premultiplied_alpha_fragment:Lf,project_vertex:Uf,dithering_fragment:Ff,dithering_pars_fragment:Of,roughnessmap_fragment:Bf,roughnessmap_pars_fragment:zf,shadowmap_pars_fragment:Gf,shadowmap_pars_vertex:kf,shadowmap_vertex:Hf,shadowmask_pars_fragment:Vf,skinbase_vertex:Wf,skinning_pars_vertex:Xf,skinning_vertex:qf,skinnormal_vertex:Yf,specularmap_fragment:Kf,specularmap_pars_fragment:$f,tonemapping_fragment:jf,tonemapping_pars_fragment:Zf,transmission_fragment:Jf,transmission_pars_fragment:Qf,uv_pars_fragment:eh,uv_pars_vertex:th,uv_vertex:nh,worldpos_vertex:ih,background_vert:rh,background_frag:sh,backgroundCube_vert:ah,backgroundCube_frag:oh,cube_vert:lh,cube_frag:ch,depth_vert:dh,depth_frag:uh,distance_vert:fh,distance_frag:hh,equirect_vert:ph,equirect_frag:mh,linedashed_vert:gh,linedashed_frag:_h,meshbasic_vert:vh,meshbasic_frag:xh,meshlambert_vert:Sh,meshlambert_frag:Mh,meshmatcap_vert:Eh,meshmatcap_frag:bh,meshnormal_vert:Th,meshnormal_frag:yh,meshphong_vert:Ah,meshphong_frag:Rh,meshphysical_vert:Ch,meshphysical_frag:wh,meshtoon_vert:Ph,meshtoon_frag:Dh,points_vert:Nh,points_frag:Ih,shadow_vert:Lh,shadow_frag:Uh,sprite_vert:Fh,sprite_frag:Oh},fe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},an={basic:{uniforms:It([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:It([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:It([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:It([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:It([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Je(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:It([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:It([fe.points,fe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:It([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:It([fe.common,fe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:It([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:It([fe.sprite,fe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:It([fe.common,fe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:It([fe.lights,fe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};an.physical={uniforms:It([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const cr={r:0,b:0,g:0},Bh=new Mt,Sl=new Ne;Sl.set(-1,0,0,0,1,0,0,0,1);function zh(n,e,t,i,r,s){const a=new Je(0);let o=r===!0?0:1,c,l,f=null,m=0,d=null;function h(A){let C=A.isScene===!0?A.background:null;if(C&&C.isTexture){const S=A.backgroundBlurriness>0;C=e.get(C,S)}return C}function v(A){let C=!1;const S=h(A);S===null?g(a,o):S&&S.isColor&&(g(S,1),C=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(A,C){const S=h(C);S&&(S.isCubeTexture||S.mapping===Ar)?(l===void 0&&(l=new Qt(new Oi(1,1,1),new Ft({name:"BackgroundCubeMaterial",uniforms:xi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Bh.makeRotationFromEuler(C.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Sl),l.material.toneMapped=We.getTransfer(S.colorSpace)!==it,(f!==S||m!==S.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,f=S,m=S.version,d=n.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Qt(new Bi(2,2),new Ft({name:"BackgroundMaterial",uniforms:xi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=We.getTransfer(S.colorSpace)!==it,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||m!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,m=S.version,d=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function g(A,C){A.getRGB(cr,_l(n)),t.buffers.color.setClear(cr.r,cr.g,cr.b,C,s)}function u(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,C=1){a.set(A),o=C,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,g(a,o)},render:v,addToRenderList:M,dispose:u}}function Gh(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(w,U,X,$,G){let Y=!1;const W=m(w,$,X,U);s!==W&&(s=W,l(s.object)),Y=h(w,$,X,G),Y&&v(w,$,X,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,S(w,U,X,$),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return n.createVertexArray()}function l(w){return n.bindVertexArray(w)}function f(w){return n.deleteVertexArray(w)}function m(w,U,X,$){const G=$.wireframe===!0;let Y=i[U.id];Y===void 0&&(Y={},i[U.id]=Y);const W=w.isInstancedMesh===!0?w.id:0;let B=Y[W];B===void 0&&(B={},Y[W]=B);let q=B[X.id];q===void 0&&(q={},B[X.id]=q);let ne=q[G];return ne===void 0&&(ne=d(c()),q[G]=ne),ne}function d(w){const U=[],X=[],$=[];for(let G=0;G<t;G++)U[G]=0,X[G]=0,$[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:X,attributeDivisors:$,object:w,attributes:{},index:null}}function h(w,U,X,$){const G=s.attributes,Y=U.attributes;let W=0;const B=X.getAttributes();for(const q in B)if(B[q].location>=0){const se=G[q];let ge=Y[q];if(ge===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(ge=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(ge=w.instanceColor)),se===void 0||se.attribute!==ge||ge&&se.data!==ge.data)return!0;W++}return s.attributesNum!==W||s.index!==$}function v(w,U,X,$){const G={},Y=U.attributes;let W=0;const B=X.getAttributes();for(const q in B)if(B[q].location>=0){let se=Y[q];se===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(se=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(se=w.instanceColor));const ge={};ge.attribute=se,se&&se.data&&(ge.data=se.data),G[q]=ge,W++}s.attributes=G,s.attributesNum=W,s.index=$}function M(){const w=s.newAttributes;for(let U=0,X=w.length;U<X;U++)w[U]=0}function g(w){u(w,0)}function u(w,U){const X=s.newAttributes,$=s.enabledAttributes,G=s.attributeDivisors;X[w]=1,$[w]===0&&(n.enableVertexAttribArray(w),$[w]=1),G[w]!==U&&(n.vertexAttribDivisor(w,U),G[w]=U)}function A(){const w=s.newAttributes,U=s.enabledAttributes;for(let X=0,$=U.length;X<$;X++)U[X]!==w[X]&&(n.disableVertexAttribArray(X),U[X]=0)}function C(w,U,X,$,G,Y,W){W===!0?n.vertexAttribIPointer(w,U,X,G,Y):n.vertexAttribPointer(w,U,X,$,G,Y)}function S(w,U,X,$){M();const G=$.attributes,Y=X.getAttributes(),W=U.defaultAttributeValues;for(const B in Y){const q=Y[B];if(q.location>=0){let ne=G[B];if(ne===void 0&&(B==="instanceMatrix"&&w.instanceMatrix&&(ne=w.instanceMatrix),B==="instanceColor"&&w.instanceColor&&(ne=w.instanceColor)),ne!==void 0){const se=ne.normalized,ge=ne.itemSize,qe=e.get(ne);if(qe===void 0)continue;const dt=qe.buffer,Ye=qe.type,Z=qe.bytesPerElement,re=Ye===n.INT||Ye===n.UNSIGNED_INT||ne.gpuType===la;if(ne.isInterleavedBufferAttribute){const te=ne.data,we=te.stride,De=ne.offset;if(te.isInstancedInterleavedBuffer){for(let _e=0;_e<q.locationSize;_e++)u(q.location+_e,te.meshPerAttribute);w.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let _e=0;_e<q.locationSize;_e++)g(q.location+_e);n.bindBuffer(n.ARRAY_BUFFER,dt);for(let _e=0;_e<q.locationSize;_e++)C(q.location+_e,ge/q.locationSize,Ye,se,we*Z,(De+ge/q.locationSize*_e)*Z,re)}else{if(ne.isInstancedBufferAttribute){for(let te=0;te<q.locationSize;te++)u(q.location+te,ne.meshPerAttribute);w.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let te=0;te<q.locationSize;te++)g(q.location+te);n.bindBuffer(n.ARRAY_BUFFER,dt);for(let te=0;te<q.locationSize;te++)C(q.location+te,ge/q.locationSize,Ye,se,ge*Z,ge/q.locationSize*te*Z,re)}}else if(W!==void 0){const se=W[B];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(q.location,se);break;case 3:n.vertexAttrib3fv(q.location,se);break;case 4:n.vertexAttrib4fv(q.location,se);break;default:n.vertexAttrib1fv(q.location,se)}}}}A()}function R(){y();for(const w in i){const U=i[w];for(const X in U){const $=U[X];for(const G in $){const Y=$[G];for(const W in Y)f(Y[W].object),delete Y[W];delete $[G]}}delete i[w]}}function T(w){if(i[w.id]===void 0)return;const U=i[w.id];for(const X in U){const $=U[X];for(const G in $){const Y=$[G];for(const W in Y)f(Y[W].object),delete Y[W];delete $[G]}}delete i[w.id]}function P(w){for(const U in i){const X=i[U];for(const $ in X){const G=X[$];if(G[w.id]===void 0)continue;const Y=G[w.id];for(const W in Y)f(Y[W].object),delete Y[W];delete G[w.id]}}}function _(w){for(const U in i){const X=i[U],$=w.isInstancedMesh===!0?w.id:0,G=X[$];if(G!==void 0){for(const Y in G){const W=G[Y];for(const B in W)f(W[B].object),delete W[B];delete G[Y]}delete X[$],Object.keys(X).length===0&&delete i[U]}}}function y(){I(),a=!0,s!==r&&(s=r,l(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:y,resetDefaultState:I,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:P,initAttributes:M,enableAttribute:g,disableUnusedAttributes:A}}function kh(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,f){f!==0&&(n.drawArraysInstanced(i,c,l,f),t.update(l,i,f))}function o(c,l,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,f);let d=0;for(let h=0;h<f;h++)d+=l[h];t.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Hh(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==Zt&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const _=P===Mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Nt&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==jt&&!_)}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=c(l);f!==l&&(Ce("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const m=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:m,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:A,maxVaryings:C,maxFragmentUniforms:S,maxSamples:R,samples:T}}function Vh(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new kn,o=new Ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,d){const h=m.length!==0||d||i!==0||r;return r=d,i=m.length,h},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,d){t=f(m,d,0)},this.setState=function(m,d,h){const v=m.clippingPlanes,M=m.clipIntersection,g=m.clipShadows,u=n.get(m);if(!r||v===null||v.length===0||s&&!g)s?f(null):l();else{const A=s?0:i,C=A*4;let S=u.clippingState||null;c.value=S,S=f(v,d,C,h);for(let R=0;R!==C;++R)S[R]=t[R];u.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(m,d,h,v){const M=m!==null?m.length:0;let g=null;if(M!==0){if(g=c.value,v!==!0||g===null){const u=h+M*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(g===null||g.length<u)&&(g=new Float32Array(u));for(let C=0,S=h;C!==M;++C,S+=4)a.copy(m[C]).applyMatrix4(A,o),a.normal.toArray(g,S),g[S+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}const Ln=4,fo=[.125,.215,.35,.446,.526,.582],Vn=20,Wh=256,wi=new Rr,ho=new Je;let ss=null,as=0,os=0,ls=!1;const Xh=new H;class po{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Xh}=s;ss=this._renderer.getRenderTarget(),as=this._renderer.getActiveCubeFace(),os=this._renderer.getActiveMipmapLevel(),ls=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_o(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=go(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ss,as,os),this._renderer.xr.enabled=ls,e.scissorTest=!1,ui(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qn||e.mapping===gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ss=this._renderer.getRenderTarget(),as=this._renderer.getActiveCubeFace(),os=this._renderer.getActiveMipmapLevel(),ls=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mt,minFilter:mt,generateMipmaps:!1,type:Mn,format:Zt,colorSpace:vi,depthBuffer:!1},r=mo(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mo(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=qh(s)),this._blurMaterial=Kh(s,e,t),this._ggxMaterial=Yh(s,e,t)}return r}_compileMaterial(e){const t=new Qt(new un,e);this._renderer.compile(t,wi)}_sceneToCubeUV(e,t,i,r,s){const c=new Wt(90,1,t,i),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],m=this._renderer,d=m.autoClear,h=m.toneMapping;m.getClearColor(ho),m.toneMapping=cn,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(r),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qt(new Oi,new hl({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,g=M.material;let u=!1;const A=e.background;A?A.isColor&&(g.color.copy(A),e.background=null,u=!0):(g.color.copy(ho),u=!0);for(let C=0;C<6;C++){const S=C%3;S===0?(c.up.set(0,l[C],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+f[C],s.y,s.z)):S===1?(c.up.set(0,0,l[C]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+f[C],s.z)):(c.up.set(0,l[C],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+f[C]));const R=this._cubeSize;ui(r,S*R,C>2?R:0,R,R),m.setRenderTarget(r),u&&m.render(M,c),m.render(e,c)}m.toneMapping=h,m.autoClear=d,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===qn||e.mapping===gi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_o()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=go());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;ui(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,wi)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),m=Math.sqrt(l*l-f*f),d=0+l*1.25,h=m*d,{_lodMax:v}=this,M=this._sizeLods[i],g=3*M*(i>v-Ln?i-v+Ln:0),u=4*(this._cubeSize-M);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=v-t,ui(s,g,u,3*M,2*M),r.setRenderTarget(s),r.render(o,wi),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=v-i,ui(e,g,u,3*M,2*M),r.setRenderTarget(e),r.render(o,wi)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");const f=3,m=this._lodMeshes[r];m.material=l;const d=l.uniforms,h=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Vn-1),M=s/v,g=isFinite(s)?1+Math.floor(f*M):Vn;g>Vn&&Ce(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Vn}`);const u=[];let A=0;for(let P=0;P<Vn;++P){const _=P/M,y=Math.exp(-_*_/2);u.push(y),P===0?A+=y:P<g&&(A+=2*y)}for(let P=0;P<u.length;P++)u[P]=u[P]/A;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:C}=this;d.dTheta.value=v,d.mipInt.value=C-i;const S=this._sizeLods[r],R=3*S*(r>C-Ln?r-C+Ln:0),T=4*(this._cubeSize-S);ui(t,R,T,3*S,2*S),c.setRenderTarget(t),c.render(m,wi)}}function qh(n){const e=[],t=[],i=[];let r=n;const s=n-Ln+1+fo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-Ln?c=fo[a-n+Ln-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),f=-l,m=1+l,d=[f,f,m,f,m,m,f,f,m,m,f,m],h=6,v=6,M=3,g=2,u=1,A=new Float32Array(M*v*h),C=new Float32Array(g*v*h),S=new Float32Array(u*v*h);for(let T=0;T<h;T++){const P=T%3*2/3-1,_=T>2?0:-1,y=[P,_,0,P+2/3,_,0,P+2/3,_+1,0,P,_,0,P+2/3,_+1,0,P,_+1,0];A.set(y,M*v*T),C.set(d,g*v*T);const I=[T,T,T,T,T,T];S.set(I,u*v*T)}const R=new un;R.setAttribute("position",new Xt(A,M)),R.setAttribute("uv",new Xt(C,g)),R.setAttribute("faceIndex",new Xt(S,u)),i.push(new Qt(R,null)),r>Ln&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function mo(n,e,t){const i=new Lt(n,e,t);return i.texture.mapping=Ar,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ui(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Yh(n,e,t){return new Ft({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Wh,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Jt,depthTest:!1,depthWrite:!1})}function Kh(n,e,t){const i=new Float32Array(Vn),r=new H(0,1,0);return new Ft({name:"SphericalGaussianBlur",defines:{n:Vn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Cr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jt,depthTest:!1,depthWrite:!1})}function go(){return new Ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jt,depthTest:!1,depthWrite:!1})}function _o(){return new Ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jt,depthTest:!1,depthWrite:!1})}function Cr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ml extends Lt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ml(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Oi(5,5,5),s=new Ft({name:"CubemapFromEquirect",uniforms:xi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yt,blending:Jt});s.uniforms.tEquirect.value=t;const a=new Qt(r,s),o=t.minFilter;return t.minFilter===Wn&&(t.minFilter=mt),new Jd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function $h(n){let e=new WeakMap,t=new WeakMap,i=null;function r(d,h=!1){return d==null?null:h?a(d):s(d)}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Nr||h===Ir)if(e.has(d)){const v=e.get(d).texture;return o(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const M=new Ml(v.height);return M.fromEquirectangularTexture(n,d),e.set(d,M),d.addEventListener("dispose",l),o(M.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const h=d.mapping,v=h===Nr||h===Ir,M=h===qn||h===gi;if(v||M){let g=t.get(d);const u=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return i===null&&(i=new po(n)),g=v?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const A=d.image;return v&&A&&A.height>0||M&&A&&c(A)?(i===null&&(i=new po(n)),g=v?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",f),g.texture):null}}}return d}function o(d,h){return h===Nr?d.mapping=qn:h===Ir&&(d.mapping=gi),d}function c(d){let h=0;const v=6;for(let M=0;M<v;M++)d[M]!==void 0&&h++;return h===v}function l(d){const h=d.target;h.removeEventListener("dispose",l);const v=e.get(h);v!==void 0&&(e.delete(h),v.dispose())}function f(d){const h=d.target;h.removeEventListener("dispose",f);const v=t.get(h);v!==void 0&&(t.delete(h),v.dispose())}function m(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:m}}function jh(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&hi("WebGLRenderer: "+i+" extension not supported."),r}}}function Zh(n,e,t,i){const r={},s=new WeakMap;function a(m){const d=m.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(m,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(m){const d=m.attributes;for(const h in d)e.update(d[h],n.ARRAY_BUFFER)}function l(m){const d=[],h=m.index,v=m.attributes.position;let M=0;if(v===void 0)return;if(h!==null){const A=h.array;M=h.version;for(let C=0,S=A.length;C<S;C+=3){const R=A[C+0],T=A[C+1],P=A[C+2];d.push(R,T,T,P,P,R)}}else{const A=v.array;M=v.version;for(let C=0,S=A.length/3-1;C<S;C+=3){const R=C+0,T=C+1,P=C+2;d.push(R,T,T,P,P,R)}}const g=new(v.count>=65535?fl:ul)(d,1);g.version=M;const u=s.get(m);u&&e.remove(u),s.set(m,g)}function f(m){const d=s.get(m);if(d){const h=m.index;h!==null&&d.version<h.version&&l(m)}else l(m);return s.get(m)}return{get:o,update:c,getWireframeAttribute:f}}function Jh(n,e,t){let i;function r(m){i=m}let s,a;function o(m){s=m.type,a=m.bytesPerElement}function c(m,d){n.drawElements(i,d,s,m*a),t.update(d,i,1)}function l(m,d,h){h!==0&&(n.drawElementsInstanced(i,d,s,m*a,h),t.update(d,i,h))}function f(m,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,m,0,h);let M=0;for(let g=0;g<h;g++)M+=d[g];t.update(M,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=f}function Qh(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:je("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ep(n,e,t){const i=new WeakMap,r=new pt;function s(a,o,c){const l=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=f!==void 0?f.length:0;let d=i.get(o);if(d===void 0||d.count!==m){let y=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();const h=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let C=0;h===!0&&(C=1),v===!0&&(C=2),M===!0&&(C=3);let S=o.attributes.position.count*C,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const T=new Float32Array(S*R*4*m),P=new ll(T,S,R,m);P.type=jt,P.needsUpdate=!0;const _=C*4;for(let I=0;I<m;I++){const w=g[I],U=u[I],X=A[I],$=S*R*4*I;for(let G=0;G<w.count;G++){const Y=G*_;h===!0&&(r.fromBufferAttribute(w,G),T[$+Y+0]=r.x,T[$+Y+1]=r.y,T[$+Y+2]=r.z,T[$+Y+3]=0),v===!0&&(r.fromBufferAttribute(U,G),T[$+Y+4]=r.x,T[$+Y+5]=r.y,T[$+Y+6]=r.z,T[$+Y+7]=0),M===!0&&(r.fromBufferAttribute(X,G),T[$+Y+8]=r.x,T[$+Y+9]=r.y,T[$+Y+10]=r.z,T[$+Y+11]=X.itemSize===4?r.w:1)}}d={count:m,texture:P,size:new Be(S,R)},i.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let h=0;for(let M=0;M<l.length;M++)h+=l[M];const v=o.morphTargetsRelative?1:1-h;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function tp(n,e,t,i,r){let s=new WeakMap;function a(l){const f=r.render.frame,m=l.geometry,d=e.get(l,m);if(s.get(d)!==f&&(e.update(d),s.set(d,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==f&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,f))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==f&&(h.update(),s.set(h,f))}return d}function o(){s=new WeakMap}function c(l){const f=l.target;f.removeEventListener("dispose",c),i.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const np={[qo]:"LINEAR_TONE_MAPPING",[Yo]:"REINHARD_TONE_MAPPING",[Ko]:"CINEON_TONE_MAPPING",[$o]:"ACES_FILMIC_TONE_MAPPING",[Zo]:"AGX_TONE_MAPPING",[Jo]:"NEUTRAL_TONE_MAPPING",[jo]:"CUSTOM_TONE_MAPPING"};function ip(n,e,t,i,r,s){const a=new Lt(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new $n(e,t):void 0}),o=new Lt(e,t,{type:Mn,depthBuffer:!1,stencilBuffer:!1}),c=new un;c.setAttribute("position",new xn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new xn([0,2,0,0,2,0],2));const l=new $d({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Qt(c,l),m=new Rr(-1,1,1,-1,0,1);let d=null,h=null,v=!1,M,g=null,u=[],A=!1;this.setSize=function(C,S){a.setSize(C,S),o.setSize(C,S);for(let R=0;R<u.length;R++){const T=u[R];T.setSize&&T.setSize(C,S)}},this.setEffects=function(C){u=C,A=u.length>0&&u[0].isRenderPass===!0;const S=a.width,R=a.height;for(let T=0;T<u.length;T++){const P=u[T];P.setSize&&P.setSize(S,R)}},this.begin=function(C,S){if(v||C.toneMapping===cn&&u.length===0)return!1;if(g=S,S!==null){const R=S.width,T=S.height;(a.width!==R||a.height!==T)&&this.setSize(R,T)}return A===!1&&C.setRenderTarget(a),M=C.toneMapping,C.toneMapping=cn,!0},this.hasRenderPass=function(){return A},this.end=function(C,S){C.toneMapping=M,v=!0;let R=a,T=o;for(let P=0;P<u.length;P++){const _=u[P];if(_.enabled!==!1&&(_.render(C,T,R,S),_.needsSwap!==!1)){const y=R;R=T,T=y}}if(d!==C.outputColorSpace||h!==C.toneMapping){d=C.outputColorSpace,h=C.toneMapping,l.defines={},We.getTransfer(d)===it&&(l.defines.SRGB_TRANSFER="");const P=np[h];P&&(l.defines[P]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=R.texture,C.setRenderTarget(g),C.render(f,m),g=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}const El=new At,ra=new $n(1,1),bl=new ll,Tl=new Ad,yl=new ml,vo=[],xo=[],So=new Float32Array(16),Mo=new Float32Array(9),Eo=new Float32Array(4);function Ei(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=vo[r];if(s===void 0&&(s=new Float32Array(r),vo[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function wr(n,e){let t=xo[e];t===void 0&&(t=new Int32Array(e),xo[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function rp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function sp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),bt(t,e)}}function ap(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),bt(t,e)}}function op(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),bt(t,e)}}function lp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,i))return;Eo.set(i),n.uniformMatrix2fv(this.addr,!1,Eo),bt(t,i)}}function cp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,i))return;Mo.set(i),n.uniformMatrix3fv(this.addr,!1,Mo),bt(t,i)}}function dp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,i))return;So.set(i),n.uniformMatrix4fv(this.addr,!1,So),bt(t,i)}}function up(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function fp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),bt(t,e)}}function hp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),bt(t,e)}}function pp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),bt(t,e)}}function mp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function gp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),bt(t,e)}}function _p(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),bt(t,e)}}function vp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),bt(t,e)}}function xp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(ra.compareFunction=t.isReversedDepthBuffer()?ma:pa,s=ra):s=El,t.setTexture2D(e||s,r)}function Sp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Tl,r)}function Mp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||yl,r)}function Ep(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||bl,r)}function bp(n){switch(n){case 5126:return rp;case 35664:return sp;case 35665:return ap;case 35666:return op;case 35674:return lp;case 35675:return cp;case 35676:return dp;case 5124:case 35670:return up;case 35667:case 35671:return fp;case 35668:case 35672:return hp;case 35669:case 35673:return pp;case 5125:return mp;case 36294:return gp;case 36295:return _p;case 36296:return vp;case 35678:case 36198:case 36298:case 36306:case 35682:return xp;case 35679:case 36299:case 36307:return Sp;case 35680:case 36300:case 36308:case 36293:return Mp;case 36289:case 36303:case 36311:case 36292:return Ep}}function Tp(n,e){n.uniform1fv(this.addr,e)}function yp(n,e){const t=Ei(e,this.size,2);n.uniform2fv(this.addr,t)}function Ap(n,e){const t=Ei(e,this.size,3);n.uniform3fv(this.addr,t)}function Rp(n,e){const t=Ei(e,this.size,4);n.uniform4fv(this.addr,t)}function Cp(n,e){const t=Ei(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function wp(n,e){const t=Ei(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Pp(n,e){const t=Ei(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Dp(n,e){n.uniform1iv(this.addr,e)}function Np(n,e){n.uniform2iv(this.addr,e)}function Ip(n,e){n.uniform3iv(this.addr,e)}function Lp(n,e){n.uniform4iv(this.addr,e)}function Up(n,e){n.uniform1uiv(this.addr,e)}function Fp(n,e){n.uniform2uiv(this.addr,e)}function Op(n,e){n.uniform3uiv(this.addr,e)}function Bp(n,e){n.uniform4uiv(this.addr,e)}function zp(n,e,t){const i=this.cache,r=e.length,s=wr(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=ra:a=El;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Gp(n,e,t){const i=this.cache,r=e.length,s=wr(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Tl,s[a])}function kp(n,e,t){const i=this.cache,r=e.length,s=wr(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||yl,s[a])}function Hp(n,e,t){const i=this.cache,r=e.length,s=wr(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||bl,s[a])}function Vp(n){switch(n){case 5126:return Tp;case 35664:return yp;case 35665:return Ap;case 35666:return Rp;case 35674:return Cp;case 35675:return wp;case 35676:return Pp;case 5124:case 35670:return Dp;case 35667:case 35671:return Np;case 35668:case 35672:return Ip;case 35669:case 35673:return Lp;case 5125:return Up;case 36294:return Fp;case 36295:return Op;case 36296:return Bp;case 35678:case 36198:case 36298:case 36306:case 35682:return zp;case 35679:case 36299:case 36307:return Gp;case 35680:case 36300:case 36308:case 36293:return kp;case 36289:case 36303:case 36311:case 36292:return Hp}}class Wp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=bp(t.type)}}class Xp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vp(t.type)}}class qp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const cs=/(\w+)(\])?(\[|\.)?/g;function bo(n,e){n.seq.push(e),n.map[e.id]=e}function Yp(n,e,t){const i=n.name,r=i.length;for(cs.lastIndex=0;;){const s=cs.exec(i),a=cs.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){bo(t,l===void 0?new Wp(o,n,e):new Xp(o,n,e));break}else{let m=t.map[o];m===void 0&&(m=new qp(o),bo(t,m)),t=m}}}class _r{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Yp(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function To(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Kp=37297;let $p=0;function jp(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const yo=new Ne;function Zp(n){We._getMatrix(yo,We.workingColorSpace,n);const e=`mat3( ${yo.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(n)){case Mr:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ao(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+jp(n.getShaderSource(e),o)}else return s}function Jp(n,e){const t=Zp(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Qp={[qo]:"Linear",[Yo]:"Reinhard",[Ko]:"Cineon",[$o]:"ACESFilmic",[Zo]:"AgX",[Jo]:"Neutral",[jo]:"Custom"};function em(n,e){const t=Qp[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const dr=new H;function tm(){We.getLuminanceCoefficients(dr);const n=dr.x.toFixed(4),e=dr.y.toFixed(4),t=dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ni).join(`
`)}function im(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function rm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ni(n){return n!==""}function Ro(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Co(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sm=/^[ \t]*#include +<([\w\d./]+)>/gm;function sa(n){return n.replace(sm,om)}const am=new Map;function om(n,e){let t=ze[e];if(t===void 0){const i=am.get(e);if(i!==void 0)t=ze[i],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return sa(t)}const lm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wo(n){return n.replace(lm,cm)}function cm(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Po(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const dm={[fr]:"SHADOWMAP_TYPE_PCF",[Di]:"SHADOWMAP_TYPE_VSM"};function um(n){return dm[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const fm={[qn]:"ENVMAP_TYPE_CUBE",[gi]:"ENVMAP_TYPE_CUBE",[Ar]:"ENVMAP_TYPE_CUBE_UV"};function hm(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":fm[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const pm={[gi]:"ENVMAP_MODE_REFRACTION"};function mm(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":pm[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const gm={[Xo]:"ENVMAP_BLENDING_MULTIPLY",[ad]:"ENVMAP_BLENDING_MIX",[od]:"ENVMAP_BLENDING_ADD"};function _m(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":gm[n.combine]||"ENVMAP_BLENDING_NONE"}function vm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function xm(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=um(t),l=hm(t),f=mm(t),m=_m(t),d=vm(t),h=nm(t),v=im(s),M=r.createProgram();let g,u,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ni).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ni).join(`
`),u.length>0&&(u+=`
`)):(g=[Po(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ni).join(`
`),u=[Po(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cn?"#define TONE_MAPPING":"",t.toneMapping!==cn?ze.tonemapping_pars_fragment:"",t.toneMapping!==cn?em("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Jp("linearToOutputTexel",t.outputColorSpace),tm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ni).join(`
`)),a=sa(a),a=Ro(a,t),a=Co(a,t),o=sa(o),o=Ro(o,t),o=Co(o,t),a=wo(a),o=wo(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",t.glslVersion===ta?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ta?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const C=A+g+a,S=A+u+o,R=To(r,r.VERTEX_SHADER,C),T=To(r,r.FRAGMENT_SHADER,S);r.attachShader(M,R),r.attachShader(M,T),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function P(w){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(M)||"",X=r.getShaderInfoLog(R)||"",$=r.getShaderInfoLog(T)||"",G=U.trim(),Y=X.trim(),W=$.trim();let B=!0,q=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,M,R,T);else{const ne=Ao(r,R,"vertex"),se=Ao(r,T,"fragment");je("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+G+`
`+ne+`
`+se)}else G!==""?Ce("WebGLProgram: Program Info Log:",G):(Y===""||W==="")&&(q=!1);q&&(w.diagnostics={runnable:B,programLog:G,vertexShader:{log:Y,prefix:g},fragmentShader:{log:W,prefix:u}})}r.deleteShader(R),r.deleteShader(T),_=new _r(r,M),y=rm(r,M)}let _;this.getUniforms=function(){return _===void 0&&P(this),_};let y;this.getAttributes=function(){return y===void 0&&P(this),y};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(M,Kp)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$p++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=R,this.fragmentShader=T,this}let Sm=0;class Mm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Em(e),t.set(e,i)),i}}class Em{constructor(e){this.id=Sm++,this.code=e,this.usedTimes=0}}function bm(n){return n===Yn||n===xr||n===Sr}function Tm(n,e,t,i,r,s){const a=new cl,o=new Mm,c=new Set,l=[],f=new Map,m=i.logarithmicDepthBuffer;let d=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return c.add(_),_===0?"uv":`uv${_}`}function M(_,y,I,w,U,X){const $=w.fog,G=U.geometry,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?w.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,B=e.get(_.envMap||Y,W),q=B&&B.mapping===Ar?B.image.height:null,ne=h[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&Ce("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const se=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ge=se!==void 0?se.length:0;let qe=0;G.morphAttributes.position!==void 0&&(qe=1),G.morphAttributes.normal!==void 0&&(qe=2),G.morphAttributes.color!==void 0&&(qe=3);let dt,Ye,Z,re;if(ne){const Se=an[ne];dt=Se.vertexShader,Ye=Se.fragmentShader}else{dt=_.vertexShader,Ye=_.fragmentShader;const Se=o.getVertexShaderStage(_),ft=o.getFragmentShaderStage(_);o.update(_,Se,ft),Z=Se.id,re=ft.id}const te=n.getRenderTarget(),we=n.state.buffers.depth.getReversed(),De=U.isInstancedMesh===!0,_e=U.isBatchedMesh===!0,et=!!_.map,Ie=!!_.matcap,tt=!!B,Ke=!!_.aoMap,ke=!!_.lightMap,ct=!!_.bumpMap&&_.wireframe===!1,ut=!!_.normalMap,Pe=!!_.displacementMap,Fe=!!_.emissiveMap,He=!!_.metalnessMap,Qe=!!_.roughnessMap,D=_.anisotropy>0,Ct=_.clearcoat>0,nt=_.dispersion>0,b=_.iridescence>0,p=_.sheen>0,F=_.transmission>0,k=D&&!!_.anisotropyMap,K=Ct&&!!_.clearcoatMap,ie=Ct&&!!_.clearcoatNormalMap,oe=Ct&&!!_.clearcoatRoughnessMap,j=b&&!!_.iridescenceMap,Q=b&&!!_.iridescenceThicknessMap,le=p&&!!_.sheenColorMap,be=p&&!!_.sheenRoughnessMap,ue=!!_.specularMap,ce=!!_.specularColorMap,Ae=!!_.specularIntensityMap,Re=F&&!!_.transmissionMap,Le=F&&!!_.thicknessMap,N=!!_.gradientMap,ae=!!_.alphaMap,J=_.alphaTest>0,de=!!_.alphaHash,me=!!_.extensions;let ee=cn;_.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ee=n.toneMapping);const Ee={shaderID:ne,shaderType:_.type,shaderName:_.name,vertexShader:dt,fragmentShader:Ye,defines:_.defines,customVertexShaderID:Z,customFragmentShaderID:re,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:_e,batchingColor:_e&&U._colorsTexture!==null,instancing:De,instancingColor:De&&U.instanceColor!==null,instancingMorph:De&&U.morphTexture!==null,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:et,matcap:Ie,envMap:tt,envMapMode:tt&&B.mapping,envMapCubeUVHeight:q,aoMap:Ke,lightMap:ke,bumpMap:ct,normalMap:ut,displacementMap:Pe,emissiveMap:Fe,normalMapObjectSpace:ut&&_.normalMapType===cd,normalMapTangentSpace:ut&&_.normalMapType===ka,packedNormalMap:ut&&_.normalMapType===ka&&bm(_.normalMap.format),metalnessMap:He,roughnessMap:Qe,anisotropy:D,anisotropyMap:k,clearcoat:Ct,clearcoatMap:K,clearcoatNormalMap:ie,clearcoatRoughnessMap:oe,dispersion:nt,iridescence:b,iridescenceMap:j,iridescenceThicknessMap:Q,sheen:p,sheenColorMap:le,sheenRoughnessMap:be,specularMap:ue,specularColorMap:ce,specularIntensityMap:Ae,transmission:F,transmissionMap:Re,thicknessMap:Le,gradientMap:N,opaque:_.transparent===!1&&_.blending===fi&&_.alphaToCoverage===!1,alphaMap:ae,alphaTest:J,alphaHash:de,combine:_.combine,mapUv:et&&v(_.map.channel),aoMapUv:Ke&&v(_.aoMap.channel),lightMapUv:ke&&v(_.lightMap.channel),bumpMapUv:ct&&v(_.bumpMap.channel),normalMapUv:ut&&v(_.normalMap.channel),displacementMapUv:Pe&&v(_.displacementMap.channel),emissiveMapUv:Fe&&v(_.emissiveMap.channel),metalnessMapUv:He&&v(_.metalnessMap.channel),roughnessMapUv:Qe&&v(_.roughnessMap.channel),anisotropyMapUv:k&&v(_.anisotropyMap.channel),clearcoatMapUv:K&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:ie&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:le&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:be&&v(_.sheenRoughnessMap.channel),specularMapUv:ue&&v(_.specularMap.channel),specularColorMapUv:ce&&v(_.specularColorMap.channel),specularIntensityMapUv:Ae&&v(_.specularIntensityMap.channel),transmissionMapUv:Re&&v(_.transmissionMap.channel),thicknessMapUv:Le&&v(_.thicknessMap.channel),alphaMapUv:ae&&v(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ut||D),vertexNormals:!!G.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(et||ae),fog:!!$,useFog:_.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||G.attributes.normal===void 0&&ut===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:we,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:qe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:ee,decodeVideoTexture:et&&_.map.isVideoTexture===!0&&We.getTransfer(_.map.colorSpace)===it,decodeVideoTextureEmissive:Fe&&_.emissiveMap.isVideoTexture===!0&&We.getTransfer(_.emissiveMap.colorSpace)===it,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Gt,flipSided:_.side===yt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:me&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&_.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function g(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const I in _.defines)y.push(I),y.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(u(y,_),A(y,_),y.push(n.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function u(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function A(_,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function C(_){const y=h[_.type];let I;if(y){const w=an[y];I=qd.clone(w.uniforms)}else I=_.uniforms;return I}function S(_,y){let I=f.get(y);return I!==void 0?++I.usedTimes:(I=new xm(n,y,_,r),l.push(I),f.set(y,I)),I}function R(_){if(--_.usedTimes===0){const y=l.indexOf(_);l[y]=l[l.length-1],l.pop(),f.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function P(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:C,acquireProgram:S,releaseProgram:R,releaseShaderCache:T,programs:l,dispose:P}}function ym(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Am(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Do(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function No(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function o(d,h,v,M,g,u){let A=n[e];return A===void 0?(A={id:d.id,object:d,geometry:h,material:v,materialVariant:a(d),groupOrder:M,renderOrder:d.renderOrder,z:g,group:u},n[e]=A):(A.id=d.id,A.object=d,A.geometry=h,A.material=v,A.materialVariant=a(d),A.groupOrder=M,A.renderOrder=d.renderOrder,A.z=g,A.group=u),e++,A}function c(d,h,v,M,g,u){const A=o(d,h,v,M,g,u);v.transmission>0?i.push(A):v.transparent===!0?r.push(A):t.push(A)}function l(d,h,v,M,g,u){const A=o(d,h,v,M,g,u);v.transmission>0?i.unshift(A):v.transparent===!0?r.unshift(A):t.unshift(A)}function f(d,h,v){t.length>1&&t.sort(d||Am),i.length>1&&i.sort(h||Do),r.length>1&&r.sort(h||Do),v&&(t.reverse(),i.reverse(),r.reverse())}function m(){for(let d=e,h=n.length;d<h;d++){const v=n[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:m,sort:f}}function Rm(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new No,n.set(i,[a])):r>=s.length?(a=new No,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Cm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Je};break;case"SpotLight":t={position:new H,direction:new H,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function wm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Pm=0;function Dm(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Nm(n){const e=new Cm,t=wm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new H);const r=new H,s=new Mt,a=new Mt;function o(l){let f=0,m=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let h=0,v=0,M=0,g=0,u=0,A=0,C=0,S=0,R=0,T=0,P=0;l.sort(Dm);for(let y=0,I=l.length;y<I;y++){const w=l[y],U=w.color,X=w.intensity,$=w.distance;let G=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Yn?G=w.shadow.map.texture:G=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)f+=U.r*X,m+=U.g*X,d+=U.b*X;else if(w.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(w.sh.coefficients[Y],X);P++}else if(w.isDirectionalLight){const Y=e.get(w);if(Y.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const W=w.shadow,B=t.get(w);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,i.directionalShadow[h]=B,i.directionalShadowMap[h]=G,i.directionalShadowMatrix[h]=w.shadow.matrix,A++}i.directional[h]=Y,h++}else if(w.isSpotLight){const Y=e.get(w);Y.position.setFromMatrixPosition(w.matrixWorld),Y.color.copy(U).multiplyScalar(X),Y.distance=$,Y.coneCos=Math.cos(w.angle),Y.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),Y.decay=w.decay,i.spot[M]=Y;const W=w.shadow;if(w.map&&(i.spotLightMap[R]=w.map,R++,W.updateMatrices(w),w.castShadow&&T++),i.spotLightMatrix[M]=W.matrix,w.castShadow){const B=t.get(w);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,i.spotShadow[M]=B,i.spotShadowMap[M]=G,S++}M++}else if(w.isRectAreaLight){const Y=e.get(w);Y.color.copy(U).multiplyScalar(X),Y.halfWidth.set(w.width*.5,0,0),Y.halfHeight.set(0,w.height*.5,0),i.rectArea[g]=Y,g++}else if(w.isPointLight){const Y=e.get(w);if(Y.color.copy(w.color).multiplyScalar(w.intensity),Y.distance=w.distance,Y.decay=w.decay,w.castShadow){const W=w.shadow,B=t.get(w);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,B.shadowCameraNear=W.camera.near,B.shadowCameraFar=W.camera.far,i.pointShadow[v]=B,i.pointShadowMap[v]=G,i.pointShadowMatrix[v]=w.shadow.matrix,C++}i.point[v]=Y,v++}else if(w.isHemisphereLight){const Y=e.get(w);Y.skyColor.copy(w.color).multiplyScalar(X),Y.groundColor.copy(w.groundColor).multiplyScalar(X),i.hemi[u]=Y,u++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=d;const _=i.hash;(_.directionalLength!==h||_.pointLength!==v||_.spotLength!==M||_.rectAreaLength!==g||_.hemiLength!==u||_.numDirectionalShadows!==A||_.numPointShadows!==C||_.numSpotShadows!==S||_.numSpotMaps!==R||_.numLightProbes!==P)&&(i.directional.length=h,i.spot.length=M,i.rectArea.length=g,i.point.length=v,i.hemi.length=u,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=S+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,_.directionalLength=h,_.pointLength=v,_.spotLength=M,_.rectAreaLength=g,_.hemiLength=u,_.numDirectionalShadows=A,_.numPointShadows=C,_.numSpotShadows=S,_.numSpotMaps=R,_.numLightProbes=P,i.version=Pm++)}function c(l,f){let m=0,d=0,h=0,v=0,M=0;const g=f.matrixWorldInverse;for(let u=0,A=l.length;u<A;u++){const C=l[u];if(C.isDirectionalLight){const S=i.directional[m];S.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),m++}else if(C.isSpotLight){const S=i.spot[h];S.position.setFromMatrixPosition(C.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),h++}else if(C.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(C.matrixWorld),S.position.applyMatrix4(g),a.identity(),s.copy(C.matrixWorld),s.premultiply(g),a.extractRotation(s),S.halfWidth.set(C.width*.5,0,0),S.halfHeight.set(0,C.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(C.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(C.matrixWorld),S.position.applyMatrix4(g),d++}else if(C.isHemisphereLight){const S=i.hemi[M];S.direction.setFromMatrixPosition(C.matrixWorld),S.direction.transformDirection(g),M++}}}return{setup:o,setupView:c,state:i}}function Io(n){const e=new Nm(n),t=[],i=[],r=[];function s(d){m.camera=d,t.length=0,i.length=0,r.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function c(d){r.push(d)}function l(){e.setup(t)}function f(d){e.setupView(t,d)}const m={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:m,setupLights:l,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Im(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Io(n),e.set(r,[o])):s>=a.length?(o=new Io(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Lm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Um=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Fm=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Om=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Lo=new Mt,Pi=new H,ds=new H;function Bm(n,e,t){let i=new pl;const r=new Be,s=new Be,a=new pt,o=new jd,c=new Zd,l={},f=t.maxTextureSize,m={[Sn]:yt,[yt]:Sn,[Gt]:Gt},d=new Ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:Lm,fragmentShader:Um}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const v=new un;v.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Qt(v,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fr;let u=this.type;this.render=function(T,P,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===kc&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=fr);const y=n.getRenderTarget(),I=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Jt),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const X=u!==this.type;X&&P.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(G=>G.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,G=T.length;$<G;$++){const Y=T[$],W=Y.shadow;if(W===void 0){Ce("WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const B=W.getFrameExtents();r.multiply(B),s.copy(W.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/B.x),r.x=s.x*B.x,W.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/B.y),r.y=s.y*B.y,W.mapSize.y=s.y));const q=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=q,W.map===null||X===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Di){if(Y.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Lt(r.x,r.y,{format:Yn,type:Mn,minFilter:mt,magFilter:mt,generateMipmaps:!1}),W.map.texture.name=Y.name+".shadowMap",W.map.depthTexture=new $n(r.x,r.y,jt),W.map.depthTexture.name=Y.name+".shadowMapDepth",W.map.depthTexture.format=En,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Rt,W.map.depthTexture.magFilter=Rt}else Y.isPointLight?(W.map=new Ml(r.x),W.map.depthTexture=new Wd(r.x,dn)):(W.map=new Lt(r.x,r.y),W.map.depthTexture=new $n(r.x,r.y,dn)),W.map.depthTexture.name=Y.name+".shadowMap",W.map.depthTexture.format=En,this.type===fr?(W.map.depthTexture.compareFunction=q?ma:pa,W.map.depthTexture.minFilter=mt,W.map.depthTexture.magFilter=mt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Rt,W.map.depthTexture.magFilter=Rt);W.camera.updateProjectionMatrix()}const ne=W.map.isWebGLCubeRenderTarget?6:1;for(let se=0;se<ne;se++){if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,se),n.clear();else{se===0&&(n.setRenderTarget(W.map),n.clear());const ge=W.getViewport(se);a.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),U.viewport(a)}if(Y.isPointLight){const ge=W.camera,qe=W.matrix,dt=Y.distance||ge.far;dt!==ge.far&&(ge.far=dt,ge.updateProjectionMatrix()),Pi.setFromMatrixPosition(Y.matrixWorld),ge.position.copy(Pi),ds.copy(ge.position),ds.add(Fm[se]),ge.up.copy(Om[se]),ge.lookAt(ds),ge.updateMatrixWorld(),qe.makeTranslation(-Pi.x,-Pi.y,-Pi.z),Lo.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Lo,ge.coordinateSystem,ge.reversedDepth)}else W.updateMatrices(Y);i=W.getFrustum(),S(P,_,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Di&&A(W,_),W.needsUpdate=!1}u=this.type,g.needsUpdate=!1,n.setRenderTarget(y,I,w)};function A(T,P){const _=e.update(M);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Lt(r.x,r.y,{format:Yn,type:Mn})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(P,null,_,d,M,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(P,null,_,h,M,null)}function C(T,P,_,y){let I=null;const w=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)I=w;else if(I=_.isPointLight===!0?c:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const U=I.uuid,X=P.uuid;let $=l[U];$===void 0&&($={},l[U]=$);let G=$[X];G===void 0&&(G=I.clone(),$[X]=G,P.addEventListener("dispose",R)),I=G}if(I.visible=P.visible,I.wireframe=P.wireframe,y===Di?I.side=P.shadowSide!==null?P.shadowSide:P.side:I.side=P.shadowSide!==null?P.shadowSide:m[P.side],I.alphaMap=P.alphaMap,I.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,I.map=P.map,I.clipShadows=P.clipShadows,I.clippingPlanes=P.clippingPlanes,I.clipIntersection=P.clipIntersection,I.displacementMap=P.displacementMap,I.displacementScale=P.displacementScale,I.displacementBias=P.displacementBias,I.wireframeLinewidth=P.wireframeLinewidth,I.linewidth=P.linewidth,_.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const U=n.properties.get(I);U.light=_}return I}function S(T,P,_,y,I){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===Di)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const X=e.update(T),$=T.material;if(Array.isArray($)){const G=X.groups;for(let Y=0,W=G.length;Y<W;Y++){const B=G[Y],q=$[B.materialIndex];if(q&&q.visible){const ne=C(T,q,y,I);T.onBeforeShadow(n,T,P,_,X,ne,B),n.renderBufferDirect(_,null,X,ne,T,B),T.onAfterShadow(n,T,P,_,X,ne,B)}}}else if($.visible){const G=C(T,$,y,I);T.onBeforeShadow(n,T,P,_,X,G,null),n.renderBufferDirect(_,null,X,G,T,null),T.onAfterShadow(n,T,P,_,X,G,null)}}const U=T.children;for(let X=0,$=U.length;X<$;X++)S(U[X],P,_,y,I)}function R(T){T.target.removeEventListener("dispose",R);for(const _ in l){const y=l[_],I=T.target.uuid;I in y&&(y[I].dispose(),delete y[I])}}}function zm(n,e){function t(){let N=!1;const ae=new pt;let J=null;const de=new pt(0,0,0,0);return{setMask:function(me){J!==me&&!N&&(n.colorMask(me,me,me,me),J=me)},setLocked:function(me){N=me},setClear:function(me,ee,Ee,Se,ft){ft===!0&&(me*=Se,ee*=Se,Ee*=Se),ae.set(me,ee,Ee,Se),de.equals(ae)===!1&&(n.clearColor(me,ee,Ee,Se),de.copy(ae))},reset:function(){N=!1,J=null,de.set(-1,0,0,0)}}}function i(){let N=!1,ae=!1,J=null,de=null,me=null;return{setReversed:function(ee){if(ae!==ee){const Ee=e.get("EXT_clip_control");ee?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),ae=ee;const Se=me;me=null,this.setClear(Se)}},getReversed:function(){return ae},setTest:function(ee){ee?te(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(ee){J!==ee&&!N&&(n.depthMask(ee),J=ee)},setFunc:function(ee){if(ae&&(ee=xd[ee]),de!==ee){switch(ee){case _s:n.depthFunc(n.NEVER);break;case vr:n.depthFunc(n.ALWAYS);break;case vs:n.depthFunc(n.LESS);break;case mi:n.depthFunc(n.LEQUAL);break;case xs:n.depthFunc(n.EQUAL);break;case Ss:n.depthFunc(n.GEQUAL);break;case Ms:n.depthFunc(n.GREATER);break;case Es:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=ee}},setLocked:function(ee){N=ee},setClear:function(ee){me!==ee&&(me=ee,ae&&(ee=1-ee),n.clearDepth(ee))},reset:function(){N=!1,J=null,de=null,me=null,ae=!1}}}function r(){let N=!1,ae=null,J=null,de=null,me=null,ee=null,Ee=null,Se=null,ft=null;return{setTest:function(ot){N||(ot?te(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(ot){ae!==ot&&!N&&(n.stencilMask(ot),ae=ot)},setFunc:function(ot,en,tn){(J!==ot||de!==en||me!==tn)&&(n.stencilFunc(ot,en,tn),J=ot,de=en,me=tn)},setOp:function(ot,en,tn){(ee!==ot||Ee!==en||Se!==tn)&&(n.stencilOp(ot,en,tn),ee=ot,Ee=en,Se=tn)},setLocked:function(ot){N=ot},setClear:function(ot){ft!==ot&&(n.clearStencil(ot),ft=ot)},reset:function(){N=!1,ae=null,J=null,de=null,me=null,ee=null,Ee=null,Se=null,ft=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let f={},m={},d={},h=new WeakMap,v=[],M=null,g=!1,u=null,A=null,C=null,S=null,R=null,T=null,P=null,_=new Je(0,0,0),y=0,I=!1,w=null,U=null,X=null,$=null,G=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,B=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=B>=1):q.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=B>=2);let ne=null,se={};const ge=n.getParameter(n.SCISSOR_BOX),qe=n.getParameter(n.VIEWPORT),dt=new pt().fromArray(ge),Ye=new pt().fromArray(qe);function Z(N,ae,J,de){const me=new Uint8Array(4),ee=n.createTexture();n.bindTexture(N,ee),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ee=0;Ee<J;Ee++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(ae+Ee,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return ee}const re={};re[n.TEXTURE_2D]=Z(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=Z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=Z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=Z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(n.DEPTH_TEST),a.setFunc(mi),ct(!1),ut(Oa),te(n.CULL_FACE),Ke(Jt);function te(N){f[N]!==!0&&(n.enable(N),f[N]=!0)}function we(N){f[N]!==!1&&(n.disable(N),f[N]=!1)}function De(N,ae){return d[N]!==ae?(n.bindFramebuffer(N,ae),d[N]=ae,N===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ae),N===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function _e(N,ae){let J=v,de=!1;if(N){J=h.get(ae),J===void 0&&(J=[],h.set(ae,J));const me=N.textures;if(J.length!==me.length||J[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,Ee=me.length;ee<Ee;ee++)J[ee]=n.COLOR_ATTACHMENT0+ee;J.length=me.length,de=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,de=!0);de&&n.drawBuffers(J)}function et(N){return M!==N?(n.useProgram(N),M=N,!0):!1}const Ie={[Hn]:n.FUNC_ADD,[Vc]:n.FUNC_SUBTRACT,[Wc]:n.FUNC_REVERSE_SUBTRACT};Ie[Xc]=n.MIN,Ie[qc]=n.MAX;const tt={[Yc]:n.ZERO,[Kc]:n.ONE,[$c]:n.SRC_COLOR,[ms]:n.SRC_ALPHA,[td]:n.SRC_ALPHA_SATURATE,[Qc]:n.DST_COLOR,[Zc]:n.DST_ALPHA,[jc]:n.ONE_MINUS_SRC_COLOR,[gs]:n.ONE_MINUS_SRC_ALPHA,[ed]:n.ONE_MINUS_DST_COLOR,[Jc]:n.ONE_MINUS_DST_ALPHA,[nd]:n.CONSTANT_COLOR,[id]:n.ONE_MINUS_CONSTANT_COLOR,[rd]:n.CONSTANT_ALPHA,[sd]:n.ONE_MINUS_CONSTANT_ALPHA};function Ke(N,ae,J,de,me,ee,Ee,Se,ft,ot){if(N===Jt){g===!0&&(we(n.BLEND),g=!1);return}if(g===!1&&(te(n.BLEND),g=!0),N!==Hc){if(N!==u||ot!==I){if((A!==Hn||R!==Hn)&&(n.blendEquation(n.FUNC_ADD),A=Hn,R=Hn),ot)switch(N){case fi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ba:n.blendFunc(n.ONE,n.ONE);break;case za:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ga:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:je("WebGLState: Invalid blending: ",N);break}else switch(N){case fi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ba:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case za:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ga:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",N);break}C=null,S=null,T=null,P=null,_.set(0,0,0),y=0,u=N,I=ot}return}me=me||ae,ee=ee||J,Ee=Ee||de,(ae!==A||me!==R)&&(n.blendEquationSeparate(Ie[ae],Ie[me]),A=ae,R=me),(J!==C||de!==S||ee!==T||Ee!==P)&&(n.blendFuncSeparate(tt[J],tt[de],tt[ee],tt[Ee]),C=J,S=de,T=ee,P=Ee),(Se.equals(_)===!1||ft!==y)&&(n.blendColor(Se.r,Se.g,Se.b,ft),_.copy(Se),y=ft),u=N,I=!1}function ke(N,ae){N.side===Gt?we(n.CULL_FACE):te(n.CULL_FACE);let J=N.side===yt;ae&&(J=!J),ct(J),N.blending===fi&&N.transparent===!1?Ke(Jt):Ke(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const de=N.stencilWrite;o.setTest(de),de&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Fe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function ct(N){w!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),w=N)}function ut(N){N!==zc?(te(n.CULL_FACE),N!==U&&(N===Oa?n.cullFace(n.BACK):N===Gc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),U=N}function Pe(N){N!==X&&(W&&n.lineWidth(N),X=N)}function Fe(N,ae,J){N?(te(n.POLYGON_OFFSET_FILL),($!==ae||G!==J)&&($=ae,G=J,a.getReversed()&&(ae=-ae),n.polygonOffset(ae,J))):we(n.POLYGON_OFFSET_FILL)}function He(N){N?te(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function Qe(N){N===void 0&&(N=n.TEXTURE0+Y-1),ne!==N&&(n.activeTexture(N),ne=N)}function D(N,ae,J){J===void 0&&(ne===null?J=n.TEXTURE0+Y-1:J=ne);let de=se[J];de===void 0&&(de={type:void 0,texture:void 0},se[J]=de),(de.type!==N||de.texture!==ae)&&(ne!==J&&(n.activeTexture(J),ne=J),n.bindTexture(N,ae||re[N]),de.type=N,de.texture=ae)}function Ct(){const N=se[ne];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function nt(){try{n.compressedTexImage2D(...arguments)}catch(N){je("WebGLState:",N)}}function b(){try{n.compressedTexImage3D(...arguments)}catch(N){je("WebGLState:",N)}}function p(){try{n.texSubImage2D(...arguments)}catch(N){je("WebGLState:",N)}}function F(){try{n.texSubImage3D(...arguments)}catch(N){je("WebGLState:",N)}}function k(){try{n.compressedTexSubImage2D(...arguments)}catch(N){je("WebGLState:",N)}}function K(){try{n.compressedTexSubImage3D(...arguments)}catch(N){je("WebGLState:",N)}}function ie(){try{n.texStorage2D(...arguments)}catch(N){je("WebGLState:",N)}}function oe(){try{n.texStorage3D(...arguments)}catch(N){je("WebGLState:",N)}}function j(){try{n.texImage2D(...arguments)}catch(N){je("WebGLState:",N)}}function Q(){try{n.texImage3D(...arguments)}catch(N){je("WebGLState:",N)}}function le(N){return m[N]!==void 0?m[N]:n.getParameter(N)}function be(N,ae){m[N]!==ae&&(n.pixelStorei(N,ae),m[N]=ae)}function ue(N){dt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),dt.copy(N))}function ce(N){Ye.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Ye.copy(N))}function Ae(N,ae){let J=l.get(ae);J===void 0&&(J=new WeakMap,l.set(ae,J));let de=J.get(N);de===void 0&&(de=n.getUniformBlockIndex(ae,N.name),J.set(N,de))}function Re(N,ae){const de=l.get(ae).get(N);c.get(ae)!==de&&(n.uniformBlockBinding(ae,de,N.__bindingPointIndex),c.set(ae,de))}function Le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},m={},ne=null,se={},d={},h=new WeakMap,v=[],M=null,g=!1,u=null,A=null,C=null,S=null,R=null,T=null,P=null,_=new Je(0,0,0),y=0,I=!1,w=null,U=null,X=null,$=null,G=null,dt.set(0,0,n.canvas.width,n.canvas.height),Ye.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:we,bindFramebuffer:De,drawBuffers:_e,useProgram:et,setBlending:Ke,setMaterial:ke,setFlipSided:ct,setCullFace:ut,setLineWidth:Pe,setPolygonOffset:Fe,setScissorTest:He,activeTexture:Qe,bindTexture:D,unbindTexture:Ct,compressedTexImage2D:nt,compressedTexImage3D:b,texImage2D:j,texImage3D:Q,pixelStorei:be,getParameter:le,updateUBOMapping:Ae,uniformBlockBinding:Re,texStorage2D:ie,texStorage3D:oe,texSubImage2D:p,texSubImage3D:F,compressedTexSubImage2D:k,compressedTexSubImage3D:K,scissor:ue,viewport:ce,reset:Le}}function Gm(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Be,f=new WeakMap,m=new Set;let d;const h=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(b,p){return v?new OffscreenCanvas(b,p):br("canvas")}function g(b,p,F){let k=1;const K=nt(b);if((K.width>F||K.height>F)&&(k=F/Math.max(K.width,K.height)),k<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ie=Math.floor(k*K.width),oe=Math.floor(k*K.height);d===void 0&&(d=M(ie,oe));const j=p?M(ie,oe):d;return j.width=ie,j.height=oe,j.getContext("2d").drawImage(b,0,0,ie,oe),Ce("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ie+"x"+oe+")."),j}else return"data"in b&&Ce("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),b;return b}function u(b){return b.generateMipmaps}function A(b){n.generateMipmap(b)}function C(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(b,p,F,k,K,ie=!1){if(b!==null){if(n[b]!==void 0)return n[b];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let oe;k&&(oe=e.get("EXT_texture_norm16"),oe||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=p;if(p===n.RED&&(F===n.FLOAT&&(j=n.R32F),F===n.HALF_FLOAT&&(j=n.R16F),F===n.UNSIGNED_BYTE&&(j=n.R8),F===n.UNSIGNED_SHORT&&oe&&(j=oe.R16_EXT),F===n.SHORT&&oe&&(j=oe.R16_SNORM_EXT)),p===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.R8UI),F===n.UNSIGNED_SHORT&&(j=n.R16UI),F===n.UNSIGNED_INT&&(j=n.R32UI),F===n.BYTE&&(j=n.R8I),F===n.SHORT&&(j=n.R16I),F===n.INT&&(j=n.R32I)),p===n.RG&&(F===n.FLOAT&&(j=n.RG32F),F===n.HALF_FLOAT&&(j=n.RG16F),F===n.UNSIGNED_BYTE&&(j=n.RG8),F===n.UNSIGNED_SHORT&&oe&&(j=oe.RG16_EXT),F===n.SHORT&&oe&&(j=oe.RG16_SNORM_EXT)),p===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RG8UI),F===n.UNSIGNED_SHORT&&(j=n.RG16UI),F===n.UNSIGNED_INT&&(j=n.RG32UI),F===n.BYTE&&(j=n.RG8I),F===n.SHORT&&(j=n.RG16I),F===n.INT&&(j=n.RG32I)),p===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RGB8UI),F===n.UNSIGNED_SHORT&&(j=n.RGB16UI),F===n.UNSIGNED_INT&&(j=n.RGB32UI),F===n.BYTE&&(j=n.RGB8I),F===n.SHORT&&(j=n.RGB16I),F===n.INT&&(j=n.RGB32I)),p===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),F===n.UNSIGNED_INT&&(j=n.RGBA32UI),F===n.BYTE&&(j=n.RGBA8I),F===n.SHORT&&(j=n.RGBA16I),F===n.INT&&(j=n.RGBA32I)),p===n.RGB&&(F===n.UNSIGNED_SHORT&&oe&&(j=oe.RGB16_EXT),F===n.SHORT&&oe&&(j=oe.RGB16_SNORM_EXT),F===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),p===n.RGBA){const Q=ie?Mr:We.getTransfer(K);F===n.FLOAT&&(j=n.RGBA32F),F===n.HALF_FLOAT&&(j=n.RGBA16F),F===n.UNSIGNED_BYTE&&(j=Q===it?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT&&oe&&(j=oe.RGBA16_EXT),F===n.SHORT&&oe&&(j=oe.RGBA16_SNORM_EXT),F===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function R(b,p){let F;return b?p===null||p===dn||p===_i?F=n.DEPTH24_STENCIL8:p===jt?F=n.DEPTH32F_STENCIL8:p===Ii&&(F=n.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):p===null||p===dn||p===_i?F=n.DEPTH_COMPONENT24:p===jt?F=n.DEPTH_COMPONENT32F:p===Ii&&(F=n.DEPTH_COMPONENT16),F}function T(b,p){return u(b)===!0||b.isFramebufferTexture&&b.minFilter!==Rt&&b.minFilter!==mt?Math.log2(Math.max(p.width,p.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?p.mipmaps.length:1}function P(b){const p=b.target;p.removeEventListener("dispose",P),y(p),p.isVideoTexture&&f.delete(p),p.isHTMLTexture&&m.delete(p)}function _(b){const p=b.target;p.removeEventListener("dispose",_),w(p)}function y(b){const p=i.get(b);if(p.__webglInit===void 0)return;const F=b.source,k=h.get(F);if(k){const K=k[p.__cacheKey];K.usedTimes--,K.usedTimes===0&&I(b),Object.keys(k).length===0&&h.delete(F)}i.remove(b)}function I(b){const p=i.get(b);n.deleteTexture(p.__webglTexture);const F=b.source,k=h.get(F);delete k[p.__cacheKey],a.memory.textures--}function w(b){const p=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(p.__webglFramebuffer[k]))for(let K=0;K<p.__webglFramebuffer[k].length;K++)n.deleteFramebuffer(p.__webglFramebuffer[k][K]);else n.deleteFramebuffer(p.__webglFramebuffer[k]);p.__webglDepthbuffer&&n.deleteRenderbuffer(p.__webglDepthbuffer[k])}else{if(Array.isArray(p.__webglFramebuffer))for(let k=0;k<p.__webglFramebuffer.length;k++)n.deleteFramebuffer(p.__webglFramebuffer[k]);else n.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&n.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&n.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let k=0;k<p.__webglColorRenderbuffer.length;k++)p.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(p.__webglColorRenderbuffer[k]);p.__webglDepthRenderbuffer&&n.deleteRenderbuffer(p.__webglDepthRenderbuffer)}const F=b.textures;for(let k=0,K=F.length;k<K;k++){const ie=i.get(F[k]);ie.__webglTexture&&(n.deleteTexture(ie.__webglTexture),a.memory.textures--),i.remove(F[k])}i.remove(b)}let U=0;function X(){U=0}function $(){return U}function G(b){U=b}function Y(){const b=U;return b>=r.maxTextures&&Ce("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),U+=1,b}function W(b){const p=[];return p.push(b.wrapS),p.push(b.wrapT),p.push(b.wrapR||0),p.push(b.magFilter),p.push(b.minFilter),p.push(b.anisotropy),p.push(b.internalFormat),p.push(b.format),p.push(b.type),p.push(b.generateMipmaps),p.push(b.premultiplyAlpha),p.push(b.flipY),p.push(b.unpackAlignment),p.push(b.colorSpace),p.join()}function B(b,p){const F=i.get(b);if(b.isVideoTexture&&D(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&F.__version!==b.version){const k=b.image;if(k===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{we(F,b,p);return}}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+p)}function q(b,p){const F=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){we(F,b,p);return}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+p)}function ne(b,p){const F=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){we(F,b,p);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+p)}function se(b,p){const F=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&F.__version!==b.version){De(F,b,p);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+p)}const ge={[bs]:n.REPEAT,[_n]:n.CLAMP_TO_EDGE,[Ts]:n.MIRRORED_REPEAT},qe={[Rt]:n.NEAREST,[ld]:n.NEAREST_MIPMAP_NEAREST,[Hi]:n.NEAREST_MIPMAP_LINEAR,[mt]:n.LINEAR,[Lr]:n.LINEAR_MIPMAP_NEAREST,[Wn]:n.LINEAR_MIPMAP_LINEAR},dt={[dd]:n.NEVER,[md]:n.ALWAYS,[ud]:n.LESS,[pa]:n.LEQUAL,[fd]:n.EQUAL,[ma]:n.GEQUAL,[hd]:n.GREATER,[pd]:n.NOTEQUAL};function Ye(b,p){if(p.type===jt&&e.has("OES_texture_float_linear")===!1&&(p.magFilter===mt||p.magFilter===Lr||p.magFilter===Hi||p.magFilter===Wn||p.minFilter===mt||p.minFilter===Lr||p.minFilter===Hi||p.minFilter===Wn)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,ge[p.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,ge[p.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,ge[p.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,qe[p.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,qe[p.minFilter]),p.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,dt[p.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===Rt||p.minFilter!==Hi&&p.minFilter!==Wn||p.type===jt&&e.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||i.get(p).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,r.getMaxAnisotropy())),i.get(p).__currentAnisotropy=p.anisotropy}}}function Z(b,p){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,p.addEventListener("dispose",P));const k=p.source;let K=h.get(k);K===void 0&&(K={},h.set(k,K));const ie=W(p);if(ie!==b.__cacheKey){K[ie]===void 0&&(K[ie]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),K[ie].usedTimes++;const oe=K[b.__cacheKey];oe!==void 0&&(K[b.__cacheKey].usedTimes--,oe.usedTimes===0&&I(p)),b.__cacheKey=ie,b.__webglTexture=K[ie].texture}return F}function re(b,p,F){return Math.floor(Math.floor(b/F)/p)}function te(b,p,F,k){const ie=b.updateRanges;if(ie.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,p.width,p.height,F,k,p.data);else{ie.sort((be,ue)=>be.start-ue.start);let oe=0;for(let be=1;be<ie.length;be++){const ue=ie[oe],ce=ie[be],Ae=ue.start+ue.count,Re=re(ce.start,p.width,4),Le=re(ue.start,p.width,4);ce.start<=Ae+1&&Re===Le&&re(ce.start+ce.count-1,p.width,4)===Re?ue.count=Math.max(ue.count,ce.start+ce.count-ue.start):(++oe,ie[oe]=ce)}ie.length=oe+1;const j=t.getParameter(n.UNPACK_ROW_LENGTH),Q=t.getParameter(n.UNPACK_SKIP_PIXELS),le=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,p.width);for(let be=0,ue=ie.length;be<ue;be++){const ce=ie[be],Ae=Math.floor(ce.start/4),Re=Math.ceil(ce.count/4),Le=Ae%p.width,N=Math.floor(Ae/p.width),ae=Re,J=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Le),t.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,Le,N,ae,J,F,k,p.data)}b.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,j),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(n.UNPACK_SKIP_ROWS,le)}}function we(b,p,F){let k=n.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),p.isData3DTexture&&(k=n.TEXTURE_3D);const K=Z(b,p),ie=p.source;t.bindTexture(k,b.__webglTexture,n.TEXTURE0+F);const oe=i.get(ie);if(ie.version!==oe.__version||K===!0){if(t.activeTexture(n.TEXTURE0+F),(typeof ImageBitmap<"u"&&p.image instanceof ImageBitmap)===!1){const J=We.getPrimaries(We.workingColorSpace),de=p.colorSpace===on?null:We.getPrimaries(p.colorSpace),me=p.colorSpace===on||J===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(n.UNPACK_ALIGNMENT,p.unpackAlignment);let Q=g(p.image,!1,r.maxTextureSize);Q=Ct(p,Q);const le=s.convert(p.format,p.colorSpace),be=s.convert(p.type);let ue=S(p.internalFormat,le,be,p.normalized,p.colorSpace,p.isVideoTexture);Ye(k,p);let ce;const Ae=p.mipmaps,Re=p.isVideoTexture!==!0,Le=oe.__version===void 0||K===!0,N=ie.dataReady,ae=T(p,Q);if(p.isDepthTexture)ue=R(p.format===In,p.type),Le&&(Re?t.texStorage2D(n.TEXTURE_2D,1,ue,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,ue,Q.width,Q.height,0,le,be,null));else if(p.isDataTexture)if(Ae.length>0){Re&&Le&&t.texStorage2D(n.TEXTURE_2D,ae,ue,Ae[0].width,Ae[0].height);for(let J=0,de=Ae.length;J<de;J++)ce=Ae[J],Re?N&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ce.width,ce.height,le,be,ce.data):t.texImage2D(n.TEXTURE_2D,J,ue,ce.width,ce.height,0,le,be,ce.data);p.generateMipmaps=!1}else Re?(Le&&t.texStorage2D(n.TEXTURE_2D,ae,ue,Q.width,Q.height),N&&te(p,Q,le,be)):t.texImage2D(n.TEXTURE_2D,0,ue,Q.width,Q.height,0,le,be,Q.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){Re&&Le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,ue,Ae[0].width,Ae[0].height,Q.depth);for(let J=0,de=Ae.length;J<de;J++)if(ce=Ae[J],p.format!==Zt)if(le!==null)if(Re){if(N)if(p.layerUpdates.size>0){const me=uo(ce.width,ce.height,p.format,p.type);for(const ee of p.layerUpdates){const Ee=ce.data.subarray(ee*me/ce.data.BYTES_PER_ELEMENT,(ee+1)*me/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,ee,ce.width,ce.height,1,le,Ee)}p.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ce.width,ce.height,Q.depth,le,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,ue,ce.width,ce.height,Q.depth,0,ce.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ce.width,ce.height,Q.depth,le,be,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,ue,ce.width,ce.height,Q.depth,0,le,be,ce.data)}else{Re&&Le&&t.texStorage2D(n.TEXTURE_2D,ae,ue,Ae[0].width,Ae[0].height);for(let J=0,de=Ae.length;J<de;J++)ce=Ae[J],p.format!==Zt?le!==null?Re?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,ce.width,ce.height,le,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,J,ue,ce.width,ce.height,0,ce.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?N&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ce.width,ce.height,le,be,ce.data):t.texImage2D(n.TEXTURE_2D,J,ue,ce.width,ce.height,0,le,be,ce.data)}else if(p.isDataArrayTexture)if(Re){if(Le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,ue,Q.width,Q.height,Q.depth),N)if(p.layerUpdates.size>0){const J=uo(Q.width,Q.height,p.format,p.type);for(const de of p.layerUpdates){const me=Q.data.subarray(de*J/Q.data.BYTES_PER_ELEMENT,(de+1)*J/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,Q.width,Q.height,1,le,be,me)}p.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,le,be,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ue,Q.width,Q.height,Q.depth,0,le,be,Q.data);else if(p.isData3DTexture)Re?(Le&&t.texStorage3D(n.TEXTURE_3D,ae,ue,Q.width,Q.height,Q.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,le,be,Q.data)):t.texImage3D(n.TEXTURE_3D,0,ue,Q.width,Q.height,Q.depth,0,le,be,Q.data);else if(p.isFramebufferTexture){if(Le)if(Re)t.texStorage2D(n.TEXTURE_2D,ae,ue,Q.width,Q.height);else{let J=Q.width,de=Q.height;for(let me=0;me<ae;me++)t.texImage2D(n.TEXTURE_2D,me,ue,J,de,0,le,be,null),J>>=1,de>>=1}}else if(p.isHTMLTexture){if("texElementImage2D"in n){const J=n.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),Q.parentNode!==J){J.appendChild(Q),m.add(p),J.onpaint=de=>{const me=de.changedElements;for(const ee of m)me.includes(ee.image)&&(ee.needsUpdate=!0)},J.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{const me=n.RGBA,ee=n.RGBA,Ee=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,me,ee,Ee,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Re&&Le){const J=nt(Ae[0]);t.texStorage2D(n.TEXTURE_2D,ae,ue,J.width,J.height)}for(let J=0,de=Ae.length;J<de;J++)ce=Ae[J],Re?N&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,le,be,ce):t.texImage2D(n.TEXTURE_2D,J,ue,le,be,ce);p.generateMipmaps=!1}else if(Re){if(Le){const J=nt(Q);t.texStorage2D(n.TEXTURE_2D,ae,ue,J.width,J.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,be,Q)}else t.texImage2D(n.TEXTURE_2D,0,ue,le,be,Q);u(p)&&A(k),oe.__version=ie.version,p.onUpdate&&p.onUpdate(p)}b.__version=p.version}function De(b,p,F){if(p.image.length!==6)return;const k=Z(b,p),K=p.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+F);const ie=i.get(K);if(K.version!==ie.__version||k===!0){t.activeTexture(n.TEXTURE0+F);const oe=We.getPrimaries(We.workingColorSpace),j=p.colorSpace===on?null:We.getPrimaries(p.colorSpace),Q=p.colorSpace===on||oe===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,p.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const le=p.isCompressedTexture||p.image[0].isCompressedTexture,be=p.image[0]&&p.image[0].isDataTexture,ue=[];for(let ee=0;ee<6;ee++)!le&&!be?ue[ee]=g(p.image[ee],!0,r.maxCubemapSize):ue[ee]=be?p.image[ee].image:p.image[ee],ue[ee]=Ct(p,ue[ee]);const ce=ue[0],Ae=s.convert(p.format,p.colorSpace),Re=s.convert(p.type),Le=S(p.internalFormat,Ae,Re,p.normalized,p.colorSpace),N=p.isVideoTexture!==!0,ae=ie.__version===void 0||k===!0,J=K.dataReady;let de=T(p,ce);Ye(n.TEXTURE_CUBE_MAP,p);let me;if(le){N&&ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Le,ce.width,ce.height);for(let ee=0;ee<6;ee++){me=ue[ee].mipmaps;for(let Ee=0;Ee<me.length;Ee++){const Se=me[Ee];p.format!==Zt?Ae!==null?N?J&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee,0,0,Se.width,Se.height,Ae,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee,Le,Se.width,Se.height,0,Se.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee,0,0,Se.width,Se.height,Ae,Re,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee,Le,Se.width,Se.height,0,Ae,Re,Se.data)}}}else{if(me=p.mipmaps,N&&ae){me.length>0&&de++;const ee=nt(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Le,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(be){N?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ue[ee].width,ue[ee].height,Ae,Re,ue[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Le,ue[ee].width,ue[ee].height,0,Ae,Re,ue[ee].data);for(let Ee=0;Ee<me.length;Ee++){const ft=me[Ee].image[ee].image;N?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee+1,0,0,ft.width,ft.height,Ae,Re,ft.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee+1,Le,ft.width,ft.height,0,Ae,Re,ft.data)}}else{N?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ae,Re,ue[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Le,Ae,Re,ue[ee]);for(let Ee=0;Ee<me.length;Ee++){const Se=me[Ee];N?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee+1,0,0,Ae,Re,Se.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee+1,Le,Ae,Re,Se.image[ee])}}}u(p)&&A(n.TEXTURE_CUBE_MAP),ie.__version=K.version,p.onUpdate&&p.onUpdate(p)}b.__version=p.version}function _e(b,p,F,k,K,ie){const oe=s.convert(F.format,F.colorSpace),j=s.convert(F.type),Q=S(F.internalFormat,oe,j,F.normalized,F.colorSpace),le=i.get(p),be=i.get(F);if(be.__renderTarget=p,!le.__hasExternalTextures){const ue=Math.max(1,p.width>>ie),ce=Math.max(1,p.height>>ie);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,ie,Q,ue,ce,p.depth,0,oe,j,null):t.texImage2D(K,ie,Q,ue,ce,0,oe,j,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),Qe(p)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,K,be.__webglTexture,0,He(p)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,K,be.__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function et(b,p,F){if(n.bindRenderbuffer(n.RENDERBUFFER,b),p.depthBuffer){const k=p.depthTexture,K=k&&k.isDepthTexture?k.type:null,ie=R(p.stencilBuffer,K),oe=p.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Qe(p)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,He(p),ie,p.width,p.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,He(p),ie,p.width,p.height):n.renderbufferStorage(n.RENDERBUFFER,ie,p.width,p.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,b)}else{const k=p.textures;for(let K=0;K<k.length;K++){const ie=k[K],oe=s.convert(ie.format,ie.colorSpace),j=s.convert(ie.type),Q=S(ie.internalFormat,oe,j,ie.normalized,ie.colorSpace);Qe(p)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,He(p),Q,p.width,p.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,He(p),Q,p.width,p.height):n.renderbufferStorage(n.RENDERBUFFER,Q,p.width,p.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(b,p,F){const k=p.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=i.get(p.depthTexture);if(K.__renderTarget=p,(!K.__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),k){if(K.__webglInit===void 0&&(K.__webglInit=!0,p.depthTexture.addEventListener("dispose",P)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Ye(n.TEXTURE_CUBE_MAP,p.depthTexture);const le=s.convert(p.depthTexture.format),be=s.convert(p.depthTexture.type);let ue;p.depthTexture.format===En?ue=n.DEPTH_COMPONENT24:p.depthTexture.format===In&&(ue=n.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ue,p.width,p.height,0,le,be,null)}}else B(p.depthTexture,0);const ie=K.__webglTexture,oe=He(p),j=k?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,Q=p.depthTexture.format===In?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(p.depthTexture.format===En)Qe(p)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,j,ie,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,Q,j,ie,0);else if(p.depthTexture.format===In)Qe(p)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,j,ie,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,Q,j,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(b){const p=i.get(b),F=b.isWebGLCubeRenderTarget===!0;if(p.__boundDepthTexture!==b.depthTexture){const k=b.depthTexture;if(p.__depthDisposeCallback&&p.__depthDisposeCallback(),k){const K=()=>{delete p.__boundDepthTexture,delete p.__depthDisposeCallback,k.removeEventListener("dispose",K)};k.addEventListener("dispose",K),p.__depthDisposeCallback=K}p.__boundDepthTexture=k}if(b.depthTexture&&!p.__autoAllocateDepthBuffer)if(F)for(let k=0;k<6;k++)Ie(p.__webglFramebuffer[k],b,k);else{const k=b.texture.mipmaps;k&&k.length>0?Ie(p.__webglFramebuffer[0],b,0):Ie(p.__webglFramebuffer,b,0)}else if(F){p.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(n.FRAMEBUFFER,p.__webglFramebuffer[k]),p.__webglDepthbuffer[k]===void 0)p.__webglDepthbuffer[k]=n.createRenderbuffer(),et(p.__webglDepthbuffer[k],b,!1);else{const K=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=p.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ie)}}else{const k=b.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(n.FRAMEBUFFER,p.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer===void 0)p.__webglDepthbuffer=n.createRenderbuffer(),et(p.__webglDepthbuffer,b,!1);else{const K=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=p.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ie)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ke(b,p,F){const k=i.get(b);p!==void 0&&_e(k.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&tt(b)}function ke(b){const p=b.texture,F=i.get(b),k=i.get(p);b.addEventListener("dispose",_);const K=b.textures,ie=b.isWebGLCubeRenderTarget===!0,oe=K.length>1;if(oe||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=p.version,a.memory.textures++),ie){F.__webglFramebuffer=[];for(let j=0;j<6;j++)if(p.mipmaps&&p.mipmaps.length>0){F.__webglFramebuffer[j]=[];for(let Q=0;Q<p.mipmaps.length;Q++)F.__webglFramebuffer[j][Q]=n.createFramebuffer()}else F.__webglFramebuffer[j]=n.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){F.__webglFramebuffer=[];for(let j=0;j<p.mipmaps.length;j++)F.__webglFramebuffer[j]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(oe)for(let j=0,Q=K.length;j<Q;j++){const le=i.get(K[j]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&Qe(b)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let j=0;j<K.length;j++){const Q=K[j];F.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[j]);const le=s.convert(Q.format,Q.colorSpace),be=s.convert(Q.type),ue=S(Q.internalFormat,le,be,Q.normalized,Q.colorSpace,b.isXRRenderTarget===!0),ce=He(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,ue,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,F.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),et(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ie){t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),Ye(n.TEXTURE_CUBE_MAP,p);for(let j=0;j<6;j++)if(p.mipmaps&&p.mipmaps.length>0)for(let Q=0;Q<p.mipmaps.length;Q++)_e(F.__webglFramebuffer[j][Q],b,p,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q);else _e(F.__webglFramebuffer[j],b,p,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);u(p)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let j=0,Q=K.length;j<Q;j++){const le=K[j],be=i.get(le);let ue=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ue=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,be.__webglTexture),Ye(ue,le),_e(F.__webglFramebuffer,b,le,n.COLOR_ATTACHMENT0+j,ue,0),u(le)&&A(ue)}t.unbindTexture()}else{let j=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(j=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(j,k.__webglTexture),Ye(j,p),p.mipmaps&&p.mipmaps.length>0)for(let Q=0;Q<p.mipmaps.length;Q++)_e(F.__webglFramebuffer[Q],b,p,n.COLOR_ATTACHMENT0,j,Q);else _e(F.__webglFramebuffer,b,p,n.COLOR_ATTACHMENT0,j,0);u(p)&&A(j),t.unbindTexture()}b.depthBuffer&&tt(b)}function ct(b){const p=b.textures;for(let F=0,k=p.length;F<k;F++){const K=p[F];if(u(K)){const ie=C(b),oe=i.get(K).__webglTexture;t.bindTexture(ie,oe),A(ie),t.unbindTexture()}}}const ut=[],Pe=[];function Fe(b){if(b.samples>0){if(Qe(b)===!1){const p=b.textures,F=b.width,k=b.height;let K=n.COLOR_BUFFER_BIT;const ie=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(b),j=p.length>1;if(j)for(let le=0;le<p.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const Q=b.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let le=0;le<p.length;le++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);const be=i.get(p[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,be,0)}n.blitFramebuffer(0,0,F,k,0,0,F,k,K,n.NEAREST),c===!0&&(ut.length=0,Pe.length=0,ut.push(n.COLOR_ATTACHMENT0+le),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ut.push(ie),Pe.push(ie),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Pe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let le=0;le<p.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);const be=i.get(p[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const p=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[p])}}}function He(b){return Math.min(r.maxSamples,b.samples)}function Qe(b){const p=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function D(b){const p=a.render.frame;f.get(b)!==p&&(f.set(b,p),b.update())}function Ct(b,p){const F=b.colorSpace,k=b.format,K=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==vi&&F!==on&&(We.getTransfer(F)===it?(k!==Zt||K!==Nt)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",F)),p}function nt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=Y,this.resetTextureUnits=X,this.getTextureUnits=$,this.setTextureUnits=G,this.setTexture2D=B,this.setTexture2DArray=q,this.setTexture3D=ne,this.setTextureCube=se,this.rebindTextures=Ke,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Qe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function km(n,e){function t(i,r=on){let s;const a=We.getTransfer(r);if(i===Nt)return n.UNSIGNED_BYTE;if(i===ca)return n.UNSIGNED_SHORT_4_4_4_4;if(i===da)return n.UNSIGNED_SHORT_5_5_5_1;if(i===nl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===il)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===el)return n.BYTE;if(i===tl)return n.SHORT;if(i===Ii)return n.UNSIGNED_SHORT;if(i===la)return n.INT;if(i===dn)return n.UNSIGNED_INT;if(i===jt)return n.FLOAT;if(i===Mn)return n.HALF_FLOAT;if(i===rl)return n.ALPHA;if(i===sl)return n.RGB;if(i===Zt)return n.RGBA;if(i===En)return n.DEPTH_COMPONENT;if(i===In)return n.DEPTH_STENCIL;if(i===al)return n.RED;if(i===ua)return n.RED_INTEGER;if(i===Yn)return n.RG;if(i===fa)return n.RG_INTEGER;if(i===ha)return n.RGBA_INTEGER;if(i===hr||i===pr||i===mr||i===gr)if(a===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===hr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===hr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ys||i===As||i===Rs||i===Cs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ys)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===As)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Cs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ws||i===Ps||i===Ds||i===Ns||i===Is||i===xr||i===Ls)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ws||i===Ps)return a===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ds)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ns)return s.COMPRESSED_R11_EAC;if(i===Is)return s.COMPRESSED_SIGNED_R11_EAC;if(i===xr)return s.COMPRESSED_RG11_EAC;if(i===Ls)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Us||i===Fs||i===Os||i===Bs||i===zs||i===Gs||i===ks||i===Hs||i===Vs||i===Ws||i===Xs||i===qs||i===Ys||i===Ks)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Us)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fs)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Os)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bs)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zs)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gs)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ks)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hs)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vs)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ws)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xs)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qs)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ys)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ks)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$s||i===js||i===Zs)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===$s)return a===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===js)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zs)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Js||i===Qs||i===Sr||i===ea)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Js)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Qs)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ea)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_i?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Hm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Wm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new gl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ft({vertexShader:Hm,fragmentShader:Vm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qt(new Bi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xm extends bn{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,f=null,m=null,d=null,h=null,v=null;const M=typeof XRWebGLBinding<"u",g=new Wm,u={},A=t.getContextAttributes();let C=null,S=null;const R=[],T=[],P=new Be;let _=null;const y=new Wt;y.viewport=new pt;const I=new Wt;I.viewport=new pt;const w=[y,I],U=new Qd;let X=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let re=R[Z];return re===void 0&&(re=new Hr,R[Z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Z){let re=R[Z];return re===void 0&&(re=new Hr,R[Z]=re),re.getGripSpace()},this.getHand=function(Z){let re=R[Z];return re===void 0&&(re=new Hr,R[Z]=re),re.getHandSpace()};function G(Z){const re=T.indexOf(Z.inputSource);if(re===-1)return;const te=R[re];te!==void 0&&(te.update(Z.inputSource,Z.frame,l||a),te.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Y(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",W);for(let Z=0;Z<R.length;Z++){const re=T[Z];re!==null&&(T[Z]=null,R[Z].disconnect(re))}X=null,$=null,g.reset();for(const Z in u)delete u[Z];e.setRenderTarget(C),h=null,d=null,m=null,r=null,S=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return m===null&&M&&(m=new XRWebGLBinding(r,t)),m},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(C=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",W),A.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(P),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,we=null,De=null;A.depth&&(De=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=A.stencil?In:En,we=A.stencil?_i:dn);const _e={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:s};m=this.getBinding(),d=m.createProjectionLayer(_e),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Lt(d.textureWidth,d.textureHeight,{format:Zt,type:Nt,depthTexture:new $n(d.textureWidth,d.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const te={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new Lt(h.framebufferWidth,h.framebufferHeight,{format:Zt,type:Nt,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ye.setContext(r),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(Z){for(let re=0;re<Z.removed.length;re++){const te=Z.removed[re],we=T.indexOf(te);we>=0&&(T[we]=null,R[we].disconnect(te))}for(let re=0;re<Z.added.length;re++){const te=Z.added[re];let we=T.indexOf(te);if(we===-1){for(let _e=0;_e<R.length;_e++)if(_e>=T.length){T.push(te),we=_e;break}else if(T[_e]===null){T[_e]=te,we=_e;break}if(we===-1)break}const De=R[we];De&&De.connect(te)}}const B=new H,q=new H;function ne(Z,re,te){B.setFromMatrixPosition(re.matrixWorld),q.setFromMatrixPosition(te.matrixWorld);const we=B.distanceTo(q),De=re.projectionMatrix.elements,_e=te.projectionMatrix.elements,et=De[14]/(De[10]-1),Ie=De[14]/(De[10]+1),tt=(De[9]+1)/De[5],Ke=(De[9]-1)/De[5],ke=(De[8]-1)/De[0],ct=(_e[8]+1)/_e[0],ut=et*ke,Pe=et*ct,Fe=we/(-ke+ct),He=Fe*-ke;if(re.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(He),Z.translateZ(Fe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),De[10]===-1)Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Qe=et+Fe,D=Ie+Fe,Ct=ut-He,nt=Pe+(we-He),b=tt*Ie/D*Qe,p=Ke*Ie/D*Qe;Z.projectionMatrix.makePerspective(Ct,nt,b,p,Qe,D),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function se(Z,re){re===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(re.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let re=Z.near,te=Z.far;g.texture!==null&&(g.depthNear>0&&(re=g.depthNear),g.depthFar>0&&(te=g.depthFar)),U.near=I.near=y.near=re,U.far=I.far=y.far=te,(X!==U.near||$!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),X=U.near,$=U.far),U.layers.mask=Z.layers.mask|6,y.layers.mask=U.layers.mask&-5,I.layers.mask=U.layers.mask&-3;const we=Z.parent,De=U.cameras;se(U,we);for(let _e=0;_e<De.length;_e++)se(De[_e],we);De.length===2?ne(U,y,I):U.projectionMatrix.copy(y.projectionMatrix),ge(Z,U,we)};function ge(Z,re,te){te===null?Z.matrix.copy(re.matrixWorld):(Z.matrix.copy(te.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(re.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=na*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&h===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(Z){return u[Z]};let qe=null;function dt(Z,re){if(f=re.getViewerPose(l||a),v=re,f!==null){const te=f.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let we=!1;te.length!==U.cameras.length&&(U.cameras.length=0,we=!0);for(let Ie=0;Ie<te.length;Ie++){const tt=te[Ie];let Ke=null;if(h!==null)Ke=h.getViewport(tt);else{const ct=m.getViewSubImage(d,tt);Ke=ct.viewport,Ie===0&&(e.setRenderTargetTextures(S,ct.colorTexture,ct.depthStencilTexture),e.setRenderTarget(S))}let ke=w[Ie];ke===void 0&&(ke=new Wt,ke.layers.enable(Ie),ke.viewport=new pt,w[Ie]=ke),ke.matrix.fromArray(tt.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(tt.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Ie===0&&(U.matrix.copy(ke.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),we===!0&&U.cameras.push(ke)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){m=i.getBinding();const Ie=m.getDepthInformation(te[0]);Ie&&Ie.isValid&&Ie.texture&&g.init(Ie,r.renderState)}if(De&&De.includes("camera-access")&&M){e.state.unbindTexture(),m=i.getBinding();for(let Ie=0;Ie<te.length;Ie++){const tt=te[Ie].camera;if(tt){let Ke=u[tt];Ke||(Ke=new gl,u[tt]=Ke);const ke=m.getCameraImage(tt);Ke.sourceTexture=ke}}}}for(let te=0;te<R.length;te++){const we=T[te],De=R[te];we!==null&&De!==void 0&&De.update(we,re,l||a)}qe&&qe(Z,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),v=null}const Ye=new xl;Ye.setAnimationLoop(dt),this.setAnimationLoop=function(Z){qe=Z},this.dispose=function(){}}}const qm=new Mt,Al=new Ne;Al.set(-1,0,0,0,1,0,0,0,1);function Ym(n,e){function t(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,_l(n)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,A,C,S){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(g,u):u.isMeshLambertMaterial?(s(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(g,u),m(g,u)):u.isMeshPhongMaterial?(s(g,u),f(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(g,u),d(g,u),u.isMeshPhysicalMaterial&&h(g,u,S)):u.isMeshMatcapMaterial?(s(g,u),v(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),M(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(a(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?c(g,u,A,C):u.isSpriteMaterial?l(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,t(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===yt&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,t(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===yt&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,t(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,t(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const A=e.get(u),C=A.envMap,S=A.envMapRotation;C&&(g.envMap.value=C,g.envMapRotation.value.setFromMatrix4(qm.makeRotationFromEuler(S)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Al),g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,g.aoMapTransform))}function a(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function c(g,u,A,C){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*A,g.scale.value=C*.5,u.map&&(g.map.value=u.map,t(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function l(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function f(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function m(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function d(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function h(g,u,A){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===yt&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=A.texture,g.transmissionSamplerSize.value.set(A.width,A.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,u){u.matcap&&(g.matcap.value=u.matcap)}function M(g,u){const A=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(A.matrixWorld),g.nearDistance.value=A.shadow.camera.near,g.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Km(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,R){const T=R.program;i.uniformBlockBinding(S,T)}function l(S,R){let T=r[S.id];T===void 0&&(g(S),T=f(S),r[S.id]=T,S.addEventListener("dispose",A));const P=R.program;i.updateUBOMapping(S,P);const _=e.render.frame;s[S.id]!==_&&(d(S),s[S.id]=_)}function f(S){const R=m();S.__bindingPointIndex=R;const T=n.createBuffer(),P=S.__size,_=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,P,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,T),T}function m(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const R=r[S.id],T=S.uniforms,P=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let _=0,y=T.length;_<y;_++){const I=T[_];if(Array.isArray(I))for(let w=0,U=I.length;w<U;w++)h(I[w],_,w,P);else h(I,_,0,P)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(S,R,T,P){if(M(S,R,T,P)===!0){const _=S.__offset,y=S.value;if(Array.isArray(y)){let I=0;for(let w=0;w<y.length;w++){const U=y[w],X=u(U);v(U,S.__data,I),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(I+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(y,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,S.__data)}}function v(S,R,T){typeof S=="number"||typeof S=="boolean"?R[0]=S:S.isMatrix3?(R[0]=S.elements[0],R[1]=S.elements[1],R[2]=S.elements[2],R[3]=0,R[4]=S.elements[3],R[5]=S.elements[4],R[6]=S.elements[5],R[7]=0,R[8]=S.elements[6],R[9]=S.elements[7],R[10]=S.elements[8],R[11]=0):ArrayBuffer.isView(S)?R.set(new S.constructor(S.buffer,S.byteOffset,R.length)):S.toArray(R,T)}function M(S,R,T,P){const _=S.value,y=R+"_"+T;if(P[y]===void 0)return typeof _=="number"||typeof _=="boolean"?P[y]=_:ArrayBuffer.isView(_)?P[y]=_.slice():P[y]=_.clone(),!0;{const I=P[y];if(typeof _=="number"||typeof _=="boolean"){if(I!==_)return P[y]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(I.equals(_)===!1)return I.copy(_),!0}}return!1}function g(S){const R=S.uniforms;let T=0;const P=16;for(let y=0,I=R.length;y<I;y++){const w=Array.isArray(R[y])?R[y]:[R[y]];for(let U=0,X=w.length;U<X;U++){const $=w[U],G=Array.isArray($.value)?$.value:[$.value];for(let Y=0,W=G.length;Y<W;Y++){const B=G[Y],q=u(B),ne=T%P,se=ne%q.boundary,ge=ne+se;T+=se,ge!==0&&P-ge<q.storage&&(T+=P-ge),$.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=T,T+=q.storage}}}const _=T%P;return _>0&&(T+=P-_),S.__size=T,S.__cache={},this}function u(S){const R={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(R.boundary=4,R.storage=4):S.isVector2?(R.boundary=8,R.storage=8):S.isVector3||S.isColor?(R.boundary=16,R.storage=12):S.isVector4?(R.boundary=16,R.storage=16):S.isMatrix3?(R.boundary=48,R.storage=48):S.isMatrix4?(R.boundary=64,R.storage=64):S.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(R.boundary=16,R.storage=S.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",S),R}function A(S){const R=S.target;R.removeEventListener("dispose",A);const T=a.indexOf(R.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(r[R.id]),delete r[R.id],delete s[R.id]}function C(){for(const S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:c,update:l,dispose:C}}const $m=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let sn=null;function jm(){return sn===null&&(sn=new Gd($m,16,16,Yn,Mn),sn.name="DFG_LUT",sn.minFilter=mt,sn.magFilter=mt,sn.wrapS=_n,sn.wrapT=_n,sn.generateMipmaps=!1,sn.needsUpdate=!0),sn}class Zm{constructor(e={}){const{canvas:t=_d(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:d=!1,outputBufferType:h=Nt}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const M=h,g=new Set([ha,fa,ua]),u=new Set([Nt,dn,Ii,_i,ca,da]),A=new Uint32Array(4),C=new Int32Array(4),S=new H;let R=null,T=null;const P=[],_=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let w=!1,U=null,X=null,$=null,G=null;this._outputColorSpace=xt;let Y=0,W=0,B=null,q=-1,ne=null;const se=new pt,ge=new pt;let qe=null;const dt=new Je(0);let Ye=0,Z=t.width,re=t.height,te=1,we=null,De=null;const _e=new pt(0,0,Z,re),et=new pt(0,0,Z,re);let Ie=!1;const tt=new pl;let Ke=!1,ke=!1;const ct=new Mt,ut=new H,Pe=new pt,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function Qe(){return B===null?te:1}let D=i;function Ct(x,L){return t.getContext(x,L)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yr}`),t.addEventListener("webglcontextlost",ft,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",en,!1),D===null){const L="webgl2";if(D=Ct(L,x),D===null)throw Ct(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(x){throw je("WebGLRenderer: "+x.message),x}let nt,b,p,F,k,K,ie,oe,j,Q,le,be,ue,ce,Ae,Re,Le,N,ae,J,de,me,ee;function Ee(){nt=new jh(D),nt.init(),de=new km(D,nt),b=new Hh(D,nt,e,de),p=new zm(D,nt),b.reversedDepthBuffer&&d&&p.buffers.depth.setReversed(!0),X=D.createFramebuffer(),$=D.createFramebuffer(),G=D.createFramebuffer(),F=new Qh(D),k=new ym,K=new Gm(D,nt,p,k,b,de,F),ie=new $h(I),oe=new nu(D),me=new Gh(D,oe),j=new Zh(D,oe,F,me),Q=new tp(D,j,oe,me,F),N=new ep(D,b,K),Ae=new Vh(k),le=new Tm(I,ie,nt,b,me,Ae),be=new Ym(I,k),ue=new Rm,ce=new Im(nt),Le=new zh(I,ie,p,Q,v,c),Re=new Bm(I,Q,b),ee=new Km(D,F,b,p),ae=new kh(D,nt,F),J=new Jh(D,nt,F),F.programs=le.programs,I.capabilities=b,I.extensions=nt,I.properties=k,I.renderLists=ue,I.shadowMap=Re,I.state=p,I.info=F}Ee(),M!==Nt&&(y=new ip(M,t.width,t.height,o,r,s));const Se=new Xm(I,D);this.xr=Se,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const x=nt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=nt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(x){x!==void 0&&(te=x,this.setSize(Z,re,!1))},this.getSize=function(x){return x.set(Z,re)},this.setSize=function(x,L,V=!0){if(Se.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=x,re=L,t.width=Math.floor(x*te),t.height=Math.floor(L*te),V===!0&&(t.style.width=x+"px",t.style.height=L+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(Z*te,re*te).floor()},this.setDrawingBufferSize=function(x,L,V){Z=x,re=L,te=V,t.width=Math.floor(x*V),t.height=Math.floor(L*V),this.setViewport(0,0,x,L)},this.setEffects=function(x){if(M===Nt){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let L=0;L<x.length;L++)if(x[L].isOutputPass===!0){Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(se)},this.getViewport=function(x){return x.copy(_e)},this.setViewport=function(x,L,V,O){x.isVector4?_e.set(x.x,x.y,x.z,x.w):_e.set(x,L,V,O),p.viewport(se.copy(_e).multiplyScalar(te).round())},this.getScissor=function(x){return x.copy(et)},this.setScissor=function(x,L,V,O){x.isVector4?et.set(x.x,x.y,x.z,x.w):et.set(x,L,V,O),p.scissor(ge.copy(et).multiplyScalar(te).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(x){p.setScissorTest(Ie=x)},this.setOpaqueSort=function(x){we=x},this.setTransparentSort=function(x){De=x},this.getClearColor=function(x){return x.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(x=!0,L=!0,V=!0){let O=0;if(x){let z=!1;if(B!==null){const pe=B.texture.format;z=g.has(pe)}if(z){const pe=B.texture.type,xe=u.has(pe),he=Le.getClearColor(),Me=Le.getClearAlpha(),Te=he.r,Ue=he.g,Ge=he.b;xe?(A[0]=Te,A[1]=Ue,A[2]=Ge,A[3]=Me,D.clearBufferuiv(D.COLOR,0,A)):(C[0]=Te,C[1]=Ue,C[2]=Ge,C[3]=Me,D.clearBufferiv(D.COLOR,0,C))}else O|=D.COLOR_BUFFER_BIT}L&&(O|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(O|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&D.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),U=x},this.dispose=function(){t.removeEventListener("webglcontextlost",ft,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",en,!1),Le.dispose(),ue.dispose(),ce.dispose(),k.dispose(),ie.dispose(),Q.dispose(),me.dispose(),ee.dispose(),le.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Ta),Se.removeEventListener("sessionend",ya),Fn.stop()};function ft(x){x.preventDefault(),Xa("WebGLRenderer: Context Lost."),w=!0}function ot(){Xa("WebGLRenderer: Context Restored."),w=!1;const x=F.autoReset,L=Re.enabled,V=Re.autoUpdate,O=Re.needsUpdate,z=Re.type;Ee(),F.autoReset=x,Re.enabled=L,Re.autoUpdate=V,Re.needsUpdate=O,Re.type=z}function en(x){je("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function tn(x){const L=x.target;L.removeEventListener("dispose",tn),wl(L)}function wl(x){Pl(x),k.remove(x)}function Pl(x){const L=k.get(x).programs;L!==void 0&&(L.forEach(function(V){le.releaseProgram(V)}),x.isShaderMaterial&&le.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,V,O,z,pe){L===null&&(L=Fe);const xe=z.isMesh&&z.matrixWorld.determinantAffine()<0,he=Il(x,L,V,O,z);p.setMaterial(O,xe);let Me=V.index,Te=1;if(O.wireframe===!0){if(Me=j.getWireframeAttribute(V),Me===void 0)return;Te=2}const Ue=V.drawRange,Ge=V.attributes.position;let ye=Ue.start*Te,rt=(Ue.start+Ue.count)*Te;pe!==null&&(ye=Math.max(ye,pe.start*Te),rt=Math.min(rt,(pe.start+pe.count)*Te)),Me!==null?(ye=Math.max(ye,0),rt=Math.min(rt,Me.count)):Ge!=null&&(ye=Math.max(ye,0),rt=Math.min(rt,Ge.count));const gt=rt-ye;if(gt<0||gt===1/0)return;me.setup(z,O,he,V,Me);let ht,st=ae;if(Me!==null&&(ht=oe.get(Me),st=J,st.setIndex(ht)),z.isMesh)O.wireframe===!0?(p.setLineWidth(O.wireframeLinewidth*Qe()),st.setMode(D.LINES)):st.setMode(D.TRIANGLES);else if(z.isLine){let wt=O.linewidth;wt===void 0&&(wt=1),p.setLineWidth(wt*Qe()),z.isLineSegments?st.setMode(D.LINES):z.isLineLoop?st.setMode(D.LINE_LOOP):st.setMode(D.LINE_STRIP)}else z.isPoints?st.setMode(D.POINTS):z.isSprite&&st.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))st.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const wt=z._multiDrawStarts,ve=z._multiDrawCounts,Ot=z._multiDrawCount,$e=Me?oe.get(Me).bytesPerElement:1,Ht=k.get(O).currentProgram.getUniforms();for(let nn=0;nn<Ot;nn++)Ht.setValue(D,"_gl_DrawID",nn),st.render(wt[nn]/$e,ve[nn])}else if(z.isInstancedMesh)st.renderInstances(ye,gt,z.count);else if(V.isInstancedBufferGeometry){const wt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ve=Math.min(V.instanceCount,wt);st.renderInstances(ye,gt,ve)}else st.render(ye,gt)};function ba(x,L,V){x.transparent===!0&&x.side===Gt&&x.forceSinglePass===!1?(x.side=yt,x.needsUpdate=!0,Gi(x,L,V),x.side=Sn,x.needsUpdate=!0,Gi(x,L,V),x.side=Gt):Gi(x,L,V)}this.compile=function(x,L,V=null){V===null&&(V=x),T=ce.get(V),T.init(L),_.push(T),V.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),x!==V&&x.traverseVisible(function(z){z.isLight&&z.layers.test(L.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights();const O=new Set;return x.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const pe=z.material;if(pe)if(Array.isArray(pe))for(let xe=0;xe<pe.length;xe++){const he=pe[xe];ba(he,V,z),O.add(he)}else ba(pe,V,z),O.add(pe)}),T=_.pop(),O},this.compileAsync=function(x,L,V=null){const O=this.compile(x,L,V);return new Promise(z=>{function pe(){if(O.forEach(function(xe){k.get(xe).currentProgram.isReady()&&O.delete(xe)}),O.size===0){z(x);return}setTimeout(pe,10)}nt.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Pr=null;function Dl(x){Pr&&Pr(x)}function Ta(){Fn.stop()}function ya(){Fn.start()}const Fn=new xl;Fn.setAnimationLoop(Dl),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(x){Pr=x,Se.setAnimationLoop(x),x===null?Fn.stop():Fn.start()},Se.addEventListener("sessionstart",Ta),Se.addEventListener("sessionend",ya),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;U!==null&&U.renderStart(x,L);const V=Se.enabled===!0&&Se.isPresenting===!0,O=y!==null&&(B===null||V)&&y.begin(I,B);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(L),L=Se.getCamera()),x.isScene===!0&&x.onBeforeRender(I,x,L,B),T=ce.get(x,_.length),T.init(L),T.state.textureUnits=K.getTextureUnits(),_.push(T),ct.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),tt.setFromProjectionMatrix(ct,ln,L.reversedDepth),ke=this.localClippingEnabled,Ke=Ae.init(this.clippingPlanes,ke),R=ue.get(x,P.length),R.init(),P.push(R),Se.enabled===!0&&Se.isPresenting===!0){const xe=I.xr.getDepthSensingMesh();xe!==null&&Dr(xe,L,-1/0,I.sortObjects)}Dr(x,L,0,I.sortObjects),R.finish(),I.sortObjects===!0&&R.sort(we,De,L.reversedDepth),He=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,He&&Le.addToRenderList(R,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ke===!0&&Ae.beginShadows();const z=T.state.shadowsArray;if(Re.render(z,x,L),Ke===!0&&Ae.endShadows(),(O&&y.hasRenderPass())===!1){const xe=R.opaque,he=R.transmissive;if(T.setupLights(),L.isArrayCamera){const Me=L.cameras;if(he.length>0)for(let Te=0,Ue=Me.length;Te<Ue;Te++){const Ge=Me[Te];Ra(xe,he,x,Ge)}He&&Le.render(x);for(let Te=0,Ue=Me.length;Te<Ue;Te++){const Ge=Me[Te];Aa(R,x,Ge,Ge.viewport)}}else he.length>0&&Ra(xe,he,x,L),He&&Le.render(x),Aa(R,x,L)}B!==null&&W===0&&(K.updateMultisampleRenderTarget(B),K.updateRenderTargetMipmap(B)),O&&y.end(I),x.isScene===!0&&x.onAfterRender(I,x,L),me.resetDefaultState(),q=-1,ne=null,_.pop(),_.length>0?(T=_[_.length-1],K.setTextureUnits(T.state.textureUnits),Ke===!0&&Ae.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?R=P[P.length-1]:R=null,U!==null&&U.renderEnd()};function Dr(x,L,V,O){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)V=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLightProbeGrid)T.pushLightProbeGrid(x);else if(x.isLight)T.pushLight(x),x.castShadow&&T.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||tt.intersectsSprite(x)){O&&Pe.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ct);const xe=Q.update(x),he=x.material;he.visible&&R.push(x,xe,he,V,Pe.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||tt.intersectsObject(x))){const xe=Q.update(x),he=x.material;if(O&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Pe.copy(x.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Pe.copy(xe.boundingSphere.center)),Pe.applyMatrix4(x.matrixWorld).applyMatrix4(ct)),Array.isArray(he)){const Me=xe.groups;for(let Te=0,Ue=Me.length;Te<Ue;Te++){const Ge=Me[Te],ye=he[Ge.materialIndex];ye&&ye.visible&&R.push(x,xe,ye,V,Pe.z,Ge)}}else he.visible&&R.push(x,xe,he,V,Pe.z,null)}}const pe=x.children;for(let xe=0,he=pe.length;xe<he;xe++)Dr(pe[xe],L,V,O)}function Aa(x,L,V,O){const{opaque:z,transmissive:pe,transparent:xe}=x;T.setupLightsView(V),Ke===!0&&Ae.setGlobalState(I.clippingPlanes,V),O&&p.viewport(se.copy(O)),z.length>0&&zi(z,L,V),pe.length>0&&zi(pe,L,V),xe.length>0&&zi(xe,L,V),p.buffers.depth.setTest(!0),p.buffers.depth.setMask(!0),p.buffers.color.setMask(!0),p.setPolygonOffset(!1)}function Ra(x,L,V,O){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[O.id]===void 0){const ye=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[O.id]=new Lt(1,1,{generateMipmaps:!0,type:ye?Mn:Nt,minFilter:Wn,samples:Math.max(4,b.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace})}const pe=T.state.transmissionRenderTarget[O.id],xe=O.viewport||se;pe.setSize(xe.z*I.transmissionResolutionScale,xe.w*I.transmissionResolutionScale);const he=I.getRenderTarget(),Me=I.getActiveCubeFace(),Te=I.getActiveMipmapLevel();I.setRenderTarget(pe),I.getClearColor(dt),Ye=I.getClearAlpha(),Ye<1&&I.setClearColor(16777215,.5),I.clear(),He&&Le.render(V);const Ue=I.toneMapping;I.toneMapping=cn;const Ge=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),T.setupLightsView(O),Ke===!0&&Ae.setGlobalState(I.clippingPlanes,O),zi(x,V,O),K.updateMultisampleRenderTarget(pe),K.updateRenderTargetMipmap(pe),nt.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let rt=0,gt=L.length;rt<gt;rt++){const ht=L[rt],{object:st,geometry:wt,material:ve,group:Ot}=ht;if(ve.side===Gt&&st.layers.test(O.layers)){const $e=ve.side;ve.side=yt,ve.needsUpdate=!0,Ca(st,V,O,wt,ve,Ot),ve.side=$e,ve.needsUpdate=!0,ye=!0}}ye===!0&&(K.updateMultisampleRenderTarget(pe),K.updateRenderTargetMipmap(pe))}I.setRenderTarget(he,Me,Te),I.setClearColor(dt,Ye),Ge!==void 0&&(O.viewport=Ge),I.toneMapping=Ue}function zi(x,L,V){const O=L.isScene===!0?L.overrideMaterial:null;for(let z=0,pe=x.length;z<pe;z++){const xe=x[z],{object:he,geometry:Me,group:Te}=xe;let Ue=xe.material;Ue.allowOverride===!0&&O!==null&&(Ue=O),he.layers.test(V.layers)&&Ca(he,L,V,Me,Ue,Te)}}function Ca(x,L,V,O,z,pe){x.onBeforeRender(I,L,V,O,z,pe),x.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),z.onBeforeRender(I,L,V,O,x,pe),z.transparent===!0&&z.side===Gt&&z.forceSinglePass===!1?(z.side=yt,z.needsUpdate=!0,I.renderBufferDirect(V,L,O,z,x,pe),z.side=Sn,z.needsUpdate=!0,I.renderBufferDirect(V,L,O,z,x,pe),z.side=Gt):I.renderBufferDirect(V,L,O,z,x,pe),x.onAfterRender(I,L,V,O,z,pe)}function Gi(x,L,V){L.isScene!==!0&&(L=Fe);const O=k.get(x),z=T.state.lights,pe=T.state.shadowsArray,xe=z.state.version,he=le.getParameters(x,z.state,pe,L,V,T.state.lightProbeGridArray),Me=le.getProgramCacheKey(he);let Te=O.programs;O.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,O.fog=L.fog;const Ue=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;O.envMap=ie.get(x.envMap||O.environment,Ue),O.envMapRotation=O.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,Te===void 0&&(x.addEventListener("dispose",tn),Te=new Map,O.programs=Te);let Ge=Te.get(Me);if(Ge!==void 0){if(O.currentProgram===Ge&&O.lightsStateVersion===xe)return Pa(x,he),Ge}else he.uniforms=le.getUniforms(x),U!==null&&x.isNodeMaterial&&U.build(x,V,he),x.onBeforeCompile(he,I),Ge=le.acquireProgram(he,Me),Te.set(Me,Ge),O.uniforms=he.uniforms;const ye=O.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(ye.clippingPlanes=Ae.uniform),Pa(x,he),O.needsLights=Ul(x),O.lightsStateVersion=xe,O.needsLights&&(ye.ambientLightColor.value=z.state.ambient,ye.lightProbe.value=z.state.probe,ye.directionalLights.value=z.state.directional,ye.directionalLightShadows.value=z.state.directionalShadow,ye.spotLights.value=z.state.spot,ye.spotLightShadows.value=z.state.spotShadow,ye.rectAreaLights.value=z.state.rectArea,ye.ltc_1.value=z.state.rectAreaLTC1,ye.ltc_2.value=z.state.rectAreaLTC2,ye.pointLights.value=z.state.point,ye.pointLightShadows.value=z.state.pointShadow,ye.hemisphereLights.value=z.state.hemi,ye.directionalShadowMatrix.value=z.state.directionalShadowMatrix,ye.spotLightMatrix.value=z.state.spotLightMatrix,ye.spotLightMap.value=z.state.spotLightMap,ye.pointShadowMatrix.value=z.state.pointShadowMatrix),O.lightProbeGrid=T.state.lightProbeGridArray.length>0,O.currentProgram=Ge,O.uniformsList=null,Ge}function wa(x){if(x.uniformsList===null){const L=x.currentProgram.getUniforms();x.uniformsList=_r.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function Pa(x,L){const V=k.get(x);V.outputColorSpace=L.outputColorSpace,V.batching=L.batching,V.batchingColor=L.batchingColor,V.instancing=L.instancing,V.instancingColor=L.instancingColor,V.instancingMorph=L.instancingMorph,V.skinning=L.skinning,V.morphTargets=L.morphTargets,V.morphNormals=L.morphNormals,V.morphColors=L.morphColors,V.morphTargetsCount=L.morphTargetsCount,V.numClippingPlanes=L.numClippingPlanes,V.numIntersection=L.numClipIntersection,V.vertexAlphas=L.vertexAlphas,V.vertexTangents=L.vertexTangents,V.toneMapping=L.toneMapping}function Nl(x,L){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;S.setFromMatrixPosition(L.matrixWorld);for(let V=0,O=x.length;V<O;V++){const z=x[V];if(z.texture!==null&&z.boundingBox.containsPoint(S))return z}return null}function Il(x,L,V,O,z){L.isScene!==!0&&(L=Fe),K.resetTextureUnits();const pe=L.fog,xe=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?L.environment:null,he=B===null?I.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:We.workingColorSpace,Me=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Te=ie.get(O.envMap||xe,Me),Ue=O.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ge=!!V.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),ye=!!V.morphAttributes.position,rt=!!V.morphAttributes.normal,gt=!!V.morphAttributes.color;let ht=cn;O.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(ht=I.toneMapping);const st=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,wt=st!==void 0?st.length:0,ve=k.get(O),Ot=T.state.lights;if(Ke===!0&&(ke===!0||x!==ne)){const lt=x===ne&&O.id===q;Ae.setState(O,x,lt)}let $e=!1;O.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==Ot.state.version||ve.outputColorSpace!==he||z.isBatchedMesh&&ve.batching===!1||!z.isBatchedMesh&&ve.batching===!0||z.isBatchedMesh&&ve.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&ve.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&ve.instancing===!1||!z.isInstancedMesh&&ve.instancing===!0||z.isSkinnedMesh&&ve.skinning===!1||!z.isSkinnedMesh&&ve.skinning===!0||z.isInstancedMesh&&ve.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ve.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ve.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ve.instancingMorph===!1&&z.morphTexture!==null||ve.envMap!==Te||O.fog===!0&&ve.fog!==pe||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Ae.numPlanes||ve.numIntersection!==Ae.numIntersection)||ve.vertexAlphas!==Ue||ve.vertexTangents!==Ge||ve.morphTargets!==ye||ve.morphNormals!==rt||ve.morphColors!==gt||ve.toneMapping!==ht||ve.morphTargetsCount!==wt||!!ve.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&($e=!0):($e=!0,ve.__version=O.version);let Ht=ve.currentProgram;$e===!0&&(Ht=Gi(O,L,z),U&&O.isNodeMaterial&&U.onUpdateProgram(O,Ht,ve));let nn=!1,Tn=!1,jn=!1;const at=Ht.getUniforms(),_t=ve.uniforms;if(p.useProgram(Ht.program)&&(nn=!0,Tn=!0,jn=!0),O.id!==q&&(q=O.id,Tn=!0),ve.needsLights){const lt=Nl(T.state.lightProbeGridArray,z);ve.lightProbeGrid!==lt&&(ve.lightProbeGrid=lt,Tn=!0)}if(nn||ne!==x){p.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),at.setValue(D,"projectionMatrix",x.projectionMatrix),at.setValue(D,"viewMatrix",x.matrixWorldInverse);const An=at.map.cameraPosition;An!==void 0&&An.setValue(D,ut.setFromMatrixPosition(x.matrixWorld)),b.logarithmicDepthBuffer&&at.setValue(D,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&at.setValue(D,"isOrthographic",x.isOrthographicCamera===!0),ne!==x&&(ne=x,Tn=!0,jn=!0)}if(ve.needsLights&&(Ot.state.directionalShadowMap.length>0&&at.setValue(D,"directionalShadowMap",Ot.state.directionalShadowMap,K),Ot.state.spotShadowMap.length>0&&at.setValue(D,"spotShadowMap",Ot.state.spotShadowMap,K),Ot.state.pointShadowMap.length>0&&at.setValue(D,"pointShadowMap",Ot.state.pointShadowMap,K)),z.isSkinnedMesh){at.setOptional(D,z,"bindMatrix"),at.setOptional(D,z,"bindMatrixInverse");const lt=z.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),at.setValue(D,"boneTexture",lt.boneTexture,K))}z.isBatchedMesh&&(at.setOptional(D,z,"batchingTexture"),at.setValue(D,"batchingTexture",z._matricesTexture,K),at.setOptional(D,z,"batchingIdTexture"),at.setValue(D,"batchingIdTexture",z._indirectTexture,K),at.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&at.setValue(D,"batchingColorTexture",z._colorsTexture,K));const yn=V.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&N.update(z,V,Ht),(Tn||ve.receiveShadow!==z.receiveShadow)&&(ve.receiveShadow=z.receiveShadow,at.setValue(D,"receiveShadow",z.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&L.environment!==null&&(_t.envMapIntensity.value=L.environmentIntensity),_t.dfgLUT!==void 0&&(_t.dfgLUT.value=jm()),Tn){if(at.setValue(D,"toneMappingExposure",I.toneMappingExposure),ve.needsLights&&Ll(_t,jn),pe&&O.fog===!0&&be.refreshFogUniforms(_t,pe),be.refreshMaterialUniforms(_t,O,te,re,T.state.transmissionRenderTarget[x.id]),ve.needsLights&&ve.lightProbeGrid){const lt=ve.lightProbeGrid;_t.probesSH.value=lt.texture,_t.probesMin.value.copy(lt.boundingBox.min),_t.probesMax.value.copy(lt.boundingBox.max),_t.probesResolution.value.copy(lt.resolution)}_r.upload(D,wa(ve),_t,K)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(_r.upload(D,wa(ve),_t,K),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&at.setValue(D,"center",z.center),at.setValue(D,"modelViewMatrix",z.modelViewMatrix),at.setValue(D,"normalMatrix",z.normalMatrix),at.setValue(D,"modelMatrix",z.matrixWorld),O.uniformsGroups!==void 0){const lt=O.uniformsGroups;for(let An=0,Zn=lt.length;An<Zn;An++){const Da=lt[An];ee.update(Da,Ht),ee.bind(Da,Ht)}}return Ht}function Ll(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function Ul(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(x,L,V){const O=k.get(x);O.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),k.get(x.texture).__webglTexture=L,k.get(x.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:V,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,L){const V=k.get(x);V.__webglFramebuffer=L,V.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(x,L=0,V=0){B=x,Y=L,W=V;let O=null,z=!1,pe=!1;if(x){const he=k.get(x);if(he.__useDefaultFramebuffer!==void 0){p.bindFramebuffer(D.FRAMEBUFFER,he.__webglFramebuffer),se.copy(x.viewport),ge.copy(x.scissor),qe=x.scissorTest,p.viewport(se),p.scissor(ge),p.setScissorTest(qe),q=-1;return}else if(he.__webglFramebuffer===void 0)K.setupRenderTarget(x);else if(he.__hasExternalTextures)K.rebindTextures(x,k.get(x.texture).__webglTexture,k.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ue=x.depthTexture;if(he.__boundDepthTexture!==Ue){if(Ue!==null&&k.has(Ue)&&(x.width!==Ue.image.width||x.height!==Ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(x)}}const Me=x.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(pe=!0);const Te=k.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Te[L])?O=Te[L][V]:O=Te[L],z=!0):x.samples>0&&K.useMultisampledRTT(x)===!1?O=k.get(x).__webglMultisampledFramebuffer:Array.isArray(Te)?O=Te[V]:O=Te,se.copy(x.viewport),ge.copy(x.scissor),qe=x.scissorTest}else se.copy(_e).multiplyScalar(te).floor(),ge.copy(et).multiplyScalar(te).floor(),qe=Ie;if(V!==0&&(O=X),p.bindFramebuffer(D.FRAMEBUFFER,O)&&p.drawBuffers(x,O),p.viewport(se),p.scissor(ge),p.setScissorTest(qe),z){const he=k.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,he.__webglTexture,V)}else if(pe){const he=L;for(let Me=0;Me<x.textures.length;Me++){const Te=k.get(x.textures[Me]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Me,Te.__webglTexture,V,he)}}else if(x!==null&&V!==0){const he=k.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,he.__webglTexture,V)}q=-1},this.readRenderTargetPixels=function(x,L,V,O,z,pe,xe,he=0){if(!(x&&x.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=k.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me){p.bindFramebuffer(D.FRAMEBUFFER,Me);try{const Te=x.textures[he],Ue=Te.format,Ge=Te.type;if(x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+he),!b.textureFormatReadable(Ue)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!b.textureTypeReadable(Ge)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-O&&V>=0&&V<=x.height-z&&D.readPixels(L,V,O,z,de.convert(Ue),de.convert(Ge),pe)}finally{const Te=B!==null?k.get(B).__webglFramebuffer:null;p.bindFramebuffer(D.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(x,L,V,O,z,pe,xe,he=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=k.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me)if(L>=0&&L<=x.width-O&&V>=0&&V<=x.height-z){p.bindFramebuffer(D.FRAMEBUFFER,Me);const Te=x.textures[he],Ue=Te.format,Ge=Te.type;if(x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+he),!b.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!b.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ye),D.bufferData(D.PIXEL_PACK_BUFFER,pe.byteLength,D.STREAM_READ),D.readPixels(L,V,O,z,de.convert(Ue),de.convert(Ge),0);const rt=B!==null?k.get(B).__webglFramebuffer:null;p.bindFramebuffer(D.FRAMEBUFFER,rt);const gt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await vd(D,gt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ye),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,pe),D.deleteBuffer(ye),D.deleteSync(gt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,L=null,V=0){const O=Math.pow(2,-V),z=Math.floor(x.image.width*O),pe=Math.floor(x.image.height*O),xe=L!==null?L.x:0,he=L!==null?L.y:0;K.setTexture2D(x,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,xe,he,z,pe),p.unbindTexture()},this.copyTextureToTexture=function(x,L,V=null,O=null,z=0,pe=0){let xe,he,Me,Te,Ue,Ge,ye,rt,gt;const ht=x.isCompressedTexture?x.mipmaps[pe]:x.image;if(V!==null)xe=V.max.x-V.min.x,he=V.max.y-V.min.y,Me=V.isBox3?V.max.z-V.min.z:1,Te=V.min.x,Ue=V.min.y,Ge=V.isBox3?V.min.z:0;else{const _t=Math.pow(2,-z);xe=Math.floor(ht.width*_t),he=Math.floor(ht.height*_t),x.isDataArrayTexture?Me=ht.depth:x.isData3DTexture?Me=Math.floor(ht.depth*_t):Me=1,Te=0,Ue=0,Ge=0}O!==null?(ye=O.x,rt=O.y,gt=O.z):(ye=0,rt=0,gt=0);const st=de.convert(L.format),wt=de.convert(L.type);let ve;L.isData3DTexture?(K.setTexture3D(L,0),ve=D.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(K.setTexture2DArray(L,0),ve=D.TEXTURE_2D_ARRAY):(K.setTexture2D(L,0),ve=D.TEXTURE_2D),p.activeTexture(D.TEXTURE0),p.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),p.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),p.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);const Ot=p.getParameter(D.UNPACK_ROW_LENGTH),$e=p.getParameter(D.UNPACK_IMAGE_HEIGHT),Ht=p.getParameter(D.UNPACK_SKIP_PIXELS),nn=p.getParameter(D.UNPACK_SKIP_ROWS),Tn=p.getParameter(D.UNPACK_SKIP_IMAGES);p.pixelStorei(D.UNPACK_ROW_LENGTH,ht.width),p.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ht.height),p.pixelStorei(D.UNPACK_SKIP_PIXELS,Te),p.pixelStorei(D.UNPACK_SKIP_ROWS,Ue),p.pixelStorei(D.UNPACK_SKIP_IMAGES,Ge);const jn=x.isDataArrayTexture||x.isData3DTexture,at=L.isDataArrayTexture||L.isData3DTexture;if(x.isDepthTexture){const _t=k.get(x),yn=k.get(L),lt=k.get(_t.__renderTarget),An=k.get(yn.__renderTarget);p.bindFramebuffer(D.READ_FRAMEBUFFER,lt.__webglFramebuffer),p.bindFramebuffer(D.DRAW_FRAMEBUFFER,An.__webglFramebuffer);for(let Zn=0;Zn<Me;Zn++)jn&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,k.get(x).__webglTexture,z,Ge+Zn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,k.get(L).__webglTexture,pe,gt+Zn)),D.blitFramebuffer(Te,Ue,xe,he,ye,rt,xe,he,D.DEPTH_BUFFER_BIT,D.NEAREST);p.bindFramebuffer(D.READ_FRAMEBUFFER,null),p.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||x.isRenderTargetTexture||k.has(x)){const _t=k.get(x),yn=k.get(L);p.bindFramebuffer(D.READ_FRAMEBUFFER,$),p.bindFramebuffer(D.DRAW_FRAMEBUFFER,G);for(let lt=0;lt<Me;lt++)jn?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_t.__webglTexture,z,Ge+lt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_t.__webglTexture,z),at?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yn.__webglTexture,pe,gt+lt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,yn.__webglTexture,pe),z!==0?D.blitFramebuffer(Te,Ue,xe,he,ye,rt,xe,he,D.COLOR_BUFFER_BIT,D.NEAREST):at?D.copyTexSubImage3D(ve,pe,ye,rt,gt+lt,Te,Ue,xe,he):D.copyTexSubImage2D(ve,pe,ye,rt,Te,Ue,xe,he);p.bindFramebuffer(D.READ_FRAMEBUFFER,null),p.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else at?x.isDataTexture||x.isData3DTexture?D.texSubImage3D(ve,pe,ye,rt,gt,xe,he,Me,st,wt,ht.data):L.isCompressedArrayTexture?D.compressedTexSubImage3D(ve,pe,ye,rt,gt,xe,he,Me,st,ht.data):D.texSubImage3D(ve,pe,ye,rt,gt,xe,he,Me,st,wt,ht):x.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,pe,ye,rt,xe,he,st,wt,ht.data):x.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,pe,ye,rt,ht.width,ht.height,st,ht.data):D.texSubImage2D(D.TEXTURE_2D,pe,ye,rt,xe,he,st,wt,ht);p.pixelStorei(D.UNPACK_ROW_LENGTH,Ot),p.pixelStorei(D.UNPACK_IMAGE_HEIGHT,$e),p.pixelStorei(D.UNPACK_SKIP_PIXELS,Ht),p.pixelStorei(D.UNPACK_SKIP_ROWS,nn),p.pixelStorei(D.UNPACK_SKIP_IMAGES,Tn),pe===0&&L.generateMipmaps&&D.generateMipmap(ve),p.unbindTexture()},this.initRenderTarget=function(x){k.get(x).__webglFramebuffer===void 0&&K.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?K.setTextureCube(x,0):x.isData3DTexture?K.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?K.setTexture2DArray(x,0):K.setTexture2D(x,0),p.unbindTexture()},this.resetState=function(){Y=0,W=0,B=null,p.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}/**
 * postprocessing v6.39.4 build Mon Jul 27 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var Jm=(()=>{const n=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new un;return t.setAttribute("position",new Xt(n,3)),t.setAttribute("uv",new Xt(e,2)),t})(),Un=class aa{static get fullscreenGeometry(){return Jm}constructor(e="Pass",t=new ia,i=new Rr){this.name=e,this.renderer=null,this.scene=t,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new Qt(aa.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new ia),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=Li){}render(e,t,i,r,s){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,i){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof Lt||t instanceof Mi||t instanceof At||t instanceof aa)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},Qm=class extends Un{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(n,e,t,i,r){const s=n.state.buffers.stencil;s.setLocked(!1),s.setTest(!1)}},eg=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,tg="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",ng=class extends Ft{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new vt(null),depthBuffer:new vt(null),channelWeights:new vt(null),opacity:new vt(1)},blending:Jt,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:eg,vertexShader:tg}),this.depthFunc=vr}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(n){const e=n!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){const e=n!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(n){this.colorSpaceConversion!==n&&(n?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(n){n!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=n):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(n){this.uniforms.inputBuffer.value=n}getOpacity(n){return this.uniforms.opacity.value}setOpacity(n){this.uniforms.opacity.value=n}},ig=class extends Un{constructor(n,e=!0){super("CopyPass"),this.fullscreenMaterial=new ng,this.needsSwap=!1,this.renderTarget=n,n===void 0&&(this.renderTarget=new Lt(1,1,{minFilter:mt,magFilter:mt,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(n){this.autoResize=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(n){this.autoResize=n}render(n,e,t,i,r){this.fullscreenMaterial.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){this.autoResize&&this.renderTarget.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==Nt?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":n!==null&&n.outputColorSpace===xt&&(this.renderTarget.texture.colorSpace=xt))}},Uo=new Je,Rl=class extends Un{constructor(n=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=n,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(n,e,t){this.color=n,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(n){this.overrideClearColor=n}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(n){this.overrideClearAlpha=n}render(n,e,t,i,r){const s=this.overrideClearColor,a=this.overrideClearAlpha,o=n.getClearAlpha(),c=s!==null,l=a>=0;c?(n.getClearColor(Uo),n.setClearColor(s,l?a:o)):l&&n.setClearAlpha(a),n.setRenderTarget(this.renderToScreen?null:e),n.clear(this.color,this.depth,this.stencil),c?n.setClearColor(Uo,o):l&&n.setClearAlpha(o)}},rg=class extends Un{constructor(n,e){super("MaskPass",n,e),this.needsSwap=!1,this.clearPass=new Rl(!1,!1,!0),this.inverse=!1}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get inverted(){return this.inverse}set inverted(n){this.inverse=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(n){this.inverted=n}render(n,e,t,i,r){const s=n.getContext(),a=n.state.buffers,o=this.scene,c=this.camera,l=this.clearPass,f=this.inverted?0:1,m=1-f;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.stencil.setFunc(s.ALWAYS,f,4294967295),a.stencil.setClear(m),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?l.render(n,null):(l.render(n,e),l.render(n,t))),this.renderToScreen?(n.setRenderTarget(null),n.render(o,c)):(n.setRenderTarget(e),n.render(o,c),n.setRenderTarget(t),n.render(o,c)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(s.EQUAL,1,4294967295),a.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.stencil.setLocked(!0)}},us=1/1e3,sg=1e3,ag=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(n){typeof document<"u"&&document.hidden!==void 0&&(n?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=n)}get delta(){return this._delta*us}get fixedDelta(){return this._fixedDelta*us}set fixedDelta(n){this._fixedDelta=n*sg}get elapsed(){return this._elapsed*us}update(n){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(n!==void 0?n:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(n){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},Fo=class{constructor(n=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:i=0,frameBufferType:r}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,r,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new ig,this.depthRenderTarget=null,this.passes=[],this.timer=new ag,this.autoRenderToScreen=!0,this.setRenderer(n)}get stableDepthTexture(){return this.depthRenderTarget===null?null:this.depthRenderTarget.depthTexture}get multisampling(){return this.inputBuffer.samples}set multisampling(n){this.multisampling!==n&&(this.inputBuffer.samples=n,this.outputBuffer.samples=n,this.inputBuffer.dispose(),this.outputBuffer.dispose())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(n){if(this.renderer=n,n!==null){const e=n.getSize(new Be),t=n.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===Nt&&n.outputColorSpace===xt&&(this.inputBuffer.texture.colorSpace=xt,this.outputBuffer.texture.colorSpace=xt,this.inputBuffer.dispose(),this.outputBuffer.dispose()),n.autoClear=!1,this.setSize(e.width,e.height);for(const r of this.passes)r.initialize(n,t,i)}}replaceRenderer(n,e=!0){const t=this.renderer,i=t.domElement.parentNode;return this.setRenderer(n),e&&i!==null&&(i.removeChild(t.domElement),i.appendChild(n.domElement)),t}createDepthTexture(){const n=new $n;n.name="EffectComposer.InputDepth",this.inputBuffer.stencilBuffer?(n.format=In,n.type=_i):n.type=jt;const e=n.clone();e.name="EffectComposer.OutputDepth";const t=n.clone();t.name="EffectComposer.StableDepth",this.inputBuffer.depthTexture=n,this.outputBuffer.depthTexture=e,this.inputBuffer.dispose(),this.outputBuffer.dispose();const{width:i,height:r}=this.inputBuffer;this.depthRenderTarget=new Lt(i,r,{depthBuffer:!0,stencilBuffer:this.inputBuffer.stencilBuffer,depthTexture:t})}blitDepthBuffer(n){const e=this.renderer,t=this.depthRenderTarget,i=e.properties,r=e.getContext();e.setRenderTarget(t);const s=i.get(n).__webglFramebuffer,a=i.get(t).__webglFramebuffer,o=n.stencilBuffer?r.DEPTH_BUFFER_BIT|r.STENCIL_BUFFER_BIT:r.DEPTH_BUFFER_BIT;r.bindFramebuffer(r.READ_FRAMEBUFFER,s),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,a),r.blitFramebuffer(0,0,n.width,n.height,0,0,t.width,t.height,o,r.NEAREST),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){const n=this.stableDepthTexture;for(const e of this.passes)e.getDepthTexture()===n&&e.setDepthTexture(null);this.depthRenderTarget!==null&&(this.depthRenderTarget.dispose(),this.depthRenderTarget=null),this.inputBuffer.depthTexture!==null&&(this.inputBuffer.depthTexture.dispose(),this.inputBuffer.depthTexture=null),this.outputBuffer.depthTexture!==null&&(this.outputBuffer.depthTexture.dispose(),this.outputBuffer.depthTexture=null)}createBuffer(n,e,t,i){const r=this.renderer,s=r===null?new Be:r.getDrawingBufferSize(new Be),a=new Lt(s.width,s.height,{minFilter:mt,magFilter:mt,samples:i,stencilBuffer:e,depthBuffer:n,type:t});return t===Nt&&r!==null&&r.outputColorSpace===xt&&(a.texture.colorSpace=xt),a.texture.name="EffectComposer.Buffer",a.texture.generateMipmaps=!1,a}setMainScene(n){for(const e of this.passes)e.mainScene=n}setMainCamera(n){for(const e of this.passes)e.mainCamera=n}addPass(n,e){const t=this.passes,i=this.renderer,r=i.getDrawingBufferSize(new Be),s=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(n.renderer=i,n.setSize(r.width,r.height),n.initialize(i,s,a),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),n.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,n):t.push(n),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),n.needsDepthTexture||this.depthRenderTarget!==null)if(this.depthRenderTarget===null){this.createDepthTexture();for(const o of t)o.setDepthTexture(this.stableDepthTexture)}else n.setDepthTexture(this.stableDepthTexture)}removePass(n){const e=this.passes,t=e.indexOf(n);if(t!==-1&&e.splice(t,1).length>0){const s=this.stableDepthTexture;if(s!==null){const a=(c,l)=>c||l.needsDepthTexture;e.reduce(a,!1)||(n.getDepthTexture()===s&&n.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(n.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const n=this.passes;this.deleteDepthTexture(),n.length>0&&(this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!1),this.passes=[])}render(n){const e=this.renderer,t=this.copyPass;let i=this.inputBuffer,r=this.outputBuffer,s,a=!1;n===void 0&&(this.timer.update(),n=this.timer.getDelta());for(const o of this.passes)if(o.enabled){if(o.render(e,i,r,n,a),o.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(i),o.needsSwap){if(a){t.renderToScreen=o.renderToScreen;const c=e.getContext(),l=e.state.buffers.stencil;l.setFunc(c.NOTEQUAL,1,4294967295),t.render(e,i,r,n,a),l.setFunc(c.EQUAL,1,4294967295)}s=i,i=r,r=s}o instanceof rg?a=!0:o instanceof Qm&&(a=!1)}}setSize(n,e,t){const i=this.renderer,r=i.getSize(new Be);(n===void 0||e===void 0)&&(n=r.width,e=r.height),(r.width!==n||r.height!==e)&&i.setSize(n,e,t);const s=i.getDrawingBufferSize(new Be);this.inputBuffer.setSize(s.width,s.height),this.outputBuffer.setSize(s.width,s.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(s.width,s.height);for(const a of this.passes)a.setSize(s.width,s.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const n of this.passes)n.dispose();this.deleteDepthTexture(),this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.copyPass.dispose(),this.timer.dispose(),this.passes=[],Un.fullscreenGeometry.dispose()}},Xn={NONE:0,DEPTH:1,CONVOLUTION:2},Ze={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},og=class{constructor(){this.shaderParts=new Map([[Ze.FRAGMENT_HEAD,null],[Ze.FRAGMENT_MAIN_UV,null],[Ze.FRAGMENT_MAIN_IMAGE,null],[Ze.VERTEX_HEAD,null],[Ze.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Xn.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=vi}},fs=!1,Oo=class{constructor(n=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(n),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case Gt:t=this.materialsFlatShadedDoubleSide;break;case yt:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case Gt:t=this.materialsDoubleSide;break;case yt:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(n){if(!(n instanceof Ft))return n.clone();const e=n.uniforms,t=new Map;for(const r in e){const s=e[r].value;s.isRenderTargetTexture&&(e[r].value=null,t.set(r,s))}const i=n.clone();for(const r of t)e[r[0]].value=r[1],i.uniforms[r[0]].value=r[1];return i}setMaterial(n){if(this.disposeMaterials(),this.material=n,n!==null){const e=this.materials=[this.cloneMaterial(n),this.cloneMaterial(n),this.cloneMaterial(n)];for(const t of e)t.uniforms=Object.assign({},n.uniforms),t.side=Sn;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=yt,i}),this.materialsDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.side=Gt,i}),this.materialsFlatShaded=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=yt,i}),this.materialsFlatShadedDoubleSide=e.map(t=>{const i=this.cloneMaterial(t);return i.uniforms=Object.assign({},n.uniforms),i.flatShading=!0,i.side=Gt,i})}}render(n,e,t){const i=n.shadowMap.enabled;if(n.shadowMap.enabled=!1,fs){const r=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),n.render(e,t);for(const s of r)s[0].material=s[1];this.meshCount!==r.size&&r.clear()}else{const r=e.overrideMaterial;e.overrideMaterial=this.material,n.render(e,t),e.overrideMaterial=r}n.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const n=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of n)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return fs}static set workaroundEnabled(n){fs=n}},Ve={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},lg="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",cg="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",dg="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ug="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",fg="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",hg="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",pg="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",mg="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",gg="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",_g="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",vg="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",xg="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Sg="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Mg="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Eg="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",bg="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Tg="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",yg="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ag="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Rg="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Cg="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",wg="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Pg="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",Dg="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ng="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ig="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Lg="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ug="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Fg="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Og="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",Bg="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zg="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Gg=new Map([[Ve.ADD,lg],[Ve.ALPHA,cg],[Ve.AVERAGE,dg],[Ve.COLOR,ug],[Ve.COLOR_BURN,fg],[Ve.COLOR_DODGE,hg],[Ve.DARKEN,pg],[Ve.DIFFERENCE,mg],[Ve.DIVIDE,gg],[Ve.DST,null],[Ve.EXCLUSION,_g],[Ve.HARD_LIGHT,vg],[Ve.HARD_MIX,xg],[Ve.HUE,Sg],[Ve.INVERT,Mg],[Ve.INVERT_RGB,Eg],[Ve.LIGHTEN,bg],[Ve.LINEAR_BURN,Tg],[Ve.LINEAR_DODGE,yg],[Ve.LINEAR_LIGHT,Ag],[Ve.LUMINOSITY,Rg],[Ve.MULTIPLY,Cg],[Ve.NEGATION,wg],[Ve.NORMAL,Pg],[Ve.OVERLAY,Dg],[Ve.PIN_LIGHT,Ng],[Ve.REFLECT,Ig],[Ve.SATURATION,Lg],[Ve.SCREEN,Ug],[Ve.SOFT_LIGHT,Fg],[Ve.SRC,Og],[Ve.SUBTRACT,Bg],[Ve.VIVID_LIGHT,zg]]),kg=class extends bn{constructor(n,e=1){super(),this._blendFunction=n,this.opacity=new vt(e)}getOpacity(){return this.opacity.value}setOpacity(n){this.opacity.value=n}get blendFunction(){return this._blendFunction}set blendFunction(n){this._blendFunction=n,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(n){this.blendFunction=n}getShaderCode(){return Gg.get(this.blendFunction)}},Cl=class extends bn{constructor(n,e,{attributes:t=Xn.NONE,blendFunction:i=Ve.NORMAL,defines:r=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=n,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=r,this.uniforms=s,this.extensions=a,this.blendMode=new kg(i),this.blendMode.addEventListener("change",c=>this.setChanged()),this._inputColorSpace=vi,this._outputColorSpace=on}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(n){this._inputColorSpace=n,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n,this.setChanged()}set mainScene(n){}set mainCamera(n){}getName(){return this.name}setRenderer(n){this.renderer=n}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(n){this.attributes=n,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(n){this.fragmentShader=n,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(n){this.vertexShader=n,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(n,e=Li){}update(n,e,t){}setSize(n,e){}initialize(n,e,t){}dispose(){for(const n of Object.keys(this)){const e=this[n];(e instanceof Lt||e instanceof Mi||e instanceof At||e instanceof Un)&&this[n].dispose()}}},Bo=class extends Un{constructor(n,e,t=null){super("RenderPass",n,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new Rl,this.overrideMaterialManager=t===null?null:new Oo(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get renderToScreen(){return super.renderToScreen}set renderToScreen(n){super.renderToScreen=n,this.clearPass.renderToScreen=n}get overrideMaterial(){const n=this.overrideMaterialManager;return n!==null?n.material:null}set overrideMaterial(n){const e=this.overrideMaterialManager;n!==null?e!==null?e.setMaterial(n):this.overrideMaterialManager=new Oo(n):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(n){this.overrideMaterial=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getSelection(){return this.selection}setSelection(n){this.selection=n}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(n){this.ignoreBackground=n}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(n){this.skipShadowMapUpdate=n}getClearPass(){return this.clearPass}render(n,e,t,i,r){const s=this.scene,a=this.camera,o=this.selection,c=a.layers.mask,l=s.background,f=n.shadowMap.autoUpdate,m=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(n.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(s.background=null),this.clearPass.enabled&&this.clearPass.render(n,e),n.setRenderTarget(m),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(n,s,a):n.render(s,a),a.layers.mask=c,s.background=l,n.shadowMap.autoUpdate=f}},Hg=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,Vg="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",Wg=class extends Ft{constructor(n,e,t,i,r=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:yr.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new vt(null),depthBuffer:new vt(null),resolution:new vt(new Be),texelSize:new vt(new Be),cameraNear:new vt(.3),cameraFar:new vt(1e3),aspect:new vt(1),time:new vt(0)},blending:Jt,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:r}),n&&this.setShaderParts(n),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(i)}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){this.uniforms.depthBuffer.value=n}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=Li){this.depthBuffer=n,this.depthPacking=e}setShaderData(n){this.setShaderParts(n.shaderParts),this.setDefines(n.defines),this.setUniforms(n.uniforms),this.setExtensions(n.extensions)}setShaderParts(n){return this.fragmentShader=Hg.replace(Ze.FRAGMENT_HEAD,n.get(Ze.FRAGMENT_HEAD)||"").replace(Ze.FRAGMENT_MAIN_UV,n.get(Ze.FRAGMENT_MAIN_UV)||"").replace(Ze.FRAGMENT_MAIN_IMAGE,n.get(Ze.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=Vg.replace(Ze.VERTEX_HEAD,n.get(Ze.VERTEX_HEAD)||"").replace(Ze.VERTEX_MAIN_SUPPORT,n.get(Ze.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(n){for(const e of n.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(n){for(const e of n.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(n){this.extensions={};for(const e of n)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(n){this.encodeOutput!==n&&(n?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(n){return this.encodeOutput}setOutputEncodingEnabled(n){this.encodeOutput=n}get time(){return this.uniforms.time.value}set time(n){this.uniforms.time.value=n}setDeltaTime(n){this.uniforms.time.value+=n}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNear.value=n.near,this.uniforms.cameraFar.value=n.far,n instanceof Wt?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(n,e){const t=this.uniforms;t.resolution.value.set(n,e),t.texelSize.value.set(1/n,1/e),t.aspect.value=n/e}static get Section(){return Ze}};function zo(n,e,t){for(const i of e){const r="$1"+n+i.charAt(0).toUpperCase()+i.slice(1),s=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const a of t.entries())a[1]!==null&&t.set(a[0],a[1].replace(s,r))}}function Xg(n,e,t){let i=e.getFragmentShader(),r=e.getVertexShader();const s=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(t.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&t.attributes&Xn.CONVOLUTION)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!s&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,c=t.shaderParts;let l=c.get(Ze.FRAGMENT_HEAD)||"",f=c.get(Ze.FRAGMENT_MAIN_UV)||"",m=c.get(Ze.FRAGMENT_MAIN_IMAGE)||"",d=c.get(Ze.VERTEX_HEAD)||"",h=c.get(Ze.VERTEX_MAIN_SUPPORT)||"";const v=new Set,M=new Set;if(a&&(f+=`	${n}MainUv(UV);
`,t.uvTransformation=!0),r!==null&&/mainSupport/.test(r)){const A=/mainSupport *\([\w\s]*?uv\s*?\)/.test(r);h+=`	${n}MainSupport(`,h+=A?`vUv);
`:`);
`;for(const C of r.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const S of C[1].split(/\s*,\s*/))t.varyings.add(S),v.add(S),M.add(S);for(const C of r.matchAll(o))M.add(C[1])}for(const A of i.matchAll(o))M.add(A[1]);for(const A of e.defines.keys())M.add(A.replace(/\([\w\s,]*\)/g,""));for(const A of e.uniforms.keys())M.add(A);M.delete("while"),M.delete("for"),M.delete("if"),e.uniforms.forEach((A,C)=>t.uniforms.set(n+C.charAt(0).toUpperCase()+C.slice(1),A)),e.defines.forEach((A,C)=>t.defines.set(n+C.charAt(0).toUpperCase()+C.slice(1),A));const g=new Map([["fragment",i],["vertex",r]]);zo(n,M,t.defines),zo(n,M,g),i=g.get("fragment"),r=g.get("vertex");const u=e.blendMode;if(t.blendModes.set(u.blendFunction,u),s){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(m+=e.inputColorSpace===xt?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==on?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const A=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;m+=`${n}MainImage(color0, UV, `,t.attributes&Xn.DEPTH&&A.test(i)&&(m+="depth, ",t.readDepth=!0),m+=`color1);
	`;const C=n+"BlendOpacity";t.uniforms.set(C,u.opacity),m+=`color0 = blend${u.blendFunction}(color0, color1, ${C});

	`,l+=`uniform float ${C};

`}if(l+=i+`
`,r!==null&&(d+=r+`
`),c.set(Ze.FRAGMENT_HEAD,l),c.set(Ze.FRAGMENT_MAIN_UV,f),c.set(Ze.FRAGMENT_MAIN_IMAGE,m),c.set(Ze.VERTEX_HEAD,d),c.set(Ze.VERTEX_MAIN_SUPPORT,h),e.extensions!==null)for(const A of e.extensions)t.extensions.add(A)}}var Go=class extends Un{constructor(n,...e){super("EffectPass"),this.fullscreenMaterial=new Wg(null,null,null,n),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(n){for(const e of this.effects)e.mainScene=n}set mainCamera(n){this.fullscreenMaterial.copyCameraSettings(n);for(const e of this.effects)e.mainCamera=n}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(n){this.fullscreenMaterial.encodeOutput=n}get dithering(){return this.fullscreenMaterial.dithering}set dithering(n){const e=this.fullscreenMaterial;e.dithering=n,e.needsUpdate=!0}setEffects(n){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=n.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const n=new og;let e=0;for(const a of this.effects)if(a.blendMode.blendFunction===Ve.DST)n.attributes|=a.getAttributes()&Xn.DEPTH;else{if(n.attributes&a.getAttributes()&Xn.CONVOLUTION)throw new Error(`Convolution effects cannot be merged (${a.name})`);Xg("e"+e++,a,n)}let t=n.shaderParts.get(Ze.FRAGMENT_HEAD),i=n.shaderParts.get(Ze.FRAGMENT_MAIN_IMAGE),r=n.shaderParts.get(Ze.FRAGMENT_MAIN_UV);const s=/\bblend\b/g;for(const a of n.blendModes.values())t+=a.getShaderCode().replace(s,`blend${a.blendFunction}`)+`
`;n.attributes&Xn.DEPTH?(n.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,n.colorSpace===xt&&(i+=`color0 = sRGBToLinear(color0);
	`),n.uvTransformation?(r=`vec2 transformedUv = vUv;
`+r,n.defines.set("UV","transformedUv")):n.defines.set("UV","vUv"),n.shaderParts.set(Ze.FRAGMENT_HEAD,t),n.shaderParts.set(Ze.FRAGMENT_MAIN_IMAGE,i),n.shaderParts.set(Ze.FRAGMENT_MAIN_UV,r);for(const[a,o]of n.shaderParts)o!==null&&n.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(n)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(n,e=Li){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(n,e)}render(n,e,t,i,r){for(const s of this.effects)s.update(n,e,i);if(!this.skipRendering||this.renderToScreen){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,s.time+=i*this.timeScale,n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}}setSize(n,e){this.fullscreenMaterial.setSize(n,e);for(const t of this.effects)t.setSize(n,e)}initialize(n,e,t){this.renderer=n;for(const i of this.effects)i.initialize(n,e,t);this.updateMaterial(),t!==void 0&&t!==Nt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const n of this.effects)n.removeEventListener("change",this.listener),n.dispose()}handleEvent(n){switch(n.type){case"change":this.recompile();break}}};const qg=()=>{const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d");if(!t)throw new Error("2D context not available");t.fillStyle="black",t.fillRect(0,0,e.width,e.height);const i=new At(e);i.minFilter=mt,i.magFilter=mt,i.generateMipmaps=!1;const r=[];let s=null;const a=64;let o=.1*64;const c=1/a,l=()=>{t.fillStyle="black",t.fillRect(0,0,e.width,e.height)},f=h=>{const v={x:h.x*64,y:(1-h.y)*64};let M=1;const g=S=>Math.sin(S*Math.PI/2),u=S=>-S*(S-2);h.age<a*.3?M=g(h.age/(a*.3)):M=u(1-(h.age-a*.3)/(a*.7))||0,M*=h.force;const A=`${(h.vx+1)/2*255}, ${(h.vy+1)/2*255}, ${M*255}`,C=64*5;t.shadowOffsetX=C,t.shadowOffsetY=C,t.shadowBlur=o,t.shadowColor=`rgba(${A},${.22*M})`,t.beginPath(),t.fillStyle="rgba(255,0,0,1)",t.arc(v.x-C,v.y-C,o,0,Math.PI*2),t.fill()};return{canvas:e,texture:i,addTouch:h=>{let v=0,M=0,g=0;if(s){const u=h.x-s.x,A=h.y-s.y;if(u===0&&A===0)return;const C=u*u+A*A,S=Math.sqrt(C);M=u/(S||1),g=A/(S||1),v=Math.min(C*1e4,1)}s={x:h.x,y:h.y},r.push({x:h.x,y:h.y,age:0,force:v,vx:M,vy:g})},update:()=>{l();for(let h=r.length-1;h>=0;h--){const v=r[h],M=v.force*c*(1-v.age/a);v.x+=v.vx*M,v.y+=v.vy*M,v.age++,v.age>a&&r.splice(h,1)}for(let h=0;h<r.length;h++)f(r[h]);i.needsUpdate=!0},set radiusScale(h){o=.1*64*h},get radiusScale(){return o/(.1*64)},size:64}},Yg=(n,e)=>{const t=`
    uniform sampler2D uTexture;
    uniform float uStrength;
    uniform float uTime;
    uniform float uFreq;

    void mainUv(inout vec2 uv) {
      vec4 tex = texture2D(uTexture, uv);
      float vx = tex.r * 2.0 - 1.0;
      float vy = tex.g * 2.0 - 1.0;
      float intensity = tex.b;

      float wave = 0.5 + 0.5 * sin(uTime * uFreq + intensity * 6.2831853);

      float amt = uStrength * intensity * wave;

      uv += vec2(vx, vy) * amt;
    }
    `;return new Cl("LiquidEffect",t,{uniforms:new Map([["uTexture",new vt(n)],["uStrength",new vt((e==null?void 0:e.strength)??.025)],["uTime",new vt(0)],["uFreq",new vt((e==null?void 0:e.freq)??4.5)]])})},ko={square:0,circle:1,triangle:2,diamond:3},Kg=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,$g=`
precision highp float;

uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uPixelJitter;
uniform int   uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensity;
uniform float uEdgeFade;

uniform int   uShapeType;
const int SHAPE_SQUARE   = 0;
const int SHAPE_CIRCLE   = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND  = 3;

const int   MAX_CLICKS = 10;

uniform vec2  uClickPos  [MAX_CLICKS];
uniform float uClickTimes[MAX_CLICKS];

out vec4 fragColor;

float Bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2. + a.y * a.y * .75);
}
#define Bayer4(a) (Bayer2(.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(.5*(a))*0.25 + Bayer2(a))

#define FBM_OCTAVES     5
#define FBM_LACUNARITY  1.25
#define FBM_GAIN        1.0

float hash11(float n){ return fract(sin(n)*43758.5453); }

float vnoise(vec3 p){
  vec3 ip = floor(p);
  vec3 fp = fract(p);
  float n000 = hash11(dot(ip + vec3(0.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n100 = hash11(dot(ip + vec3(1.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n010 = hash11(dot(ip + vec3(0.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n110 = hash11(dot(ip + vec3(1.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n001 = hash11(dot(ip + vec3(0.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n101 = hash11(dot(ip + vec3(1.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n011 = hash11(dot(ip + vec3(0.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  float n111 = hash11(dot(ip + vec3(1.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  vec3 w = fp*fp*fp*(fp*(fp*6.0-15.0)+10.0);
  float x00 = mix(n000, n100, w.x);
  float x10 = mix(n010, n110, w.x);
  float x01 = mix(n001, n101, w.x);
  float x11 = mix(n011, n111, w.x);
  float y0  = mix(x00, x10, w.y);
  float y1  = mix(x01, x11, w.y);
  return mix(y0, y1, w.z) * 2.0 - 1.0;
}

float fbm2(vec2 uv, float t){
  vec3 p = vec3(uv * uScale, t);
  float amp = 1.0;
  float freq = 1.0;
  float sum = 1.0;
  for (int i = 0; i < FBM_OCTAVES; ++i){
    sum  += amp * vnoise(p * freq);
    freq *= FBM_LACUNARITY;
    amp  *= FBM_GAIN;
  }
  return sum * 0.5 + 0.5;
}

float maskCircle(vec2 p, float cov){
  float r = sqrt(cov) * .25;
  float d = length(p - 0.5) - r;
  float aa = 0.5 * fwidth(d);
  return cov * (1.0 - smoothstep(-aa, aa, d * 2.0));
}

float maskTriangle(vec2 p, vec2 id, float cov){
  bool flip = mod(id.x + id.y, 2.0) > 0.5;
  if (flip) p.x = 1.0 - p.x;
  float r = sqrt(cov);
  float d  = p.y - r*(1.0 - p.x);
  float aa = fwidth(d);
  return cov * clamp(0.5 - d/aa, 0.0, 1.0);
}

float maskDiamond(vec2 p, float cov){
  float r = sqrt(cov) * 0.564;
  return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}

void main(){
  float pixelSize = uPixelSize;
  vec2 fragCoord = gl_FragCoord.xy - uResolution * .5;
  float aspectRatio = uResolution.x / uResolution.y;

  vec2 pixelId = floor(fragCoord / pixelSize);
  vec2 pixelUV = fract(fragCoord / pixelSize);

  float cellPixelSize = 8.0 * pixelSize;
  vec2 cellId = floor(fragCoord / cellPixelSize);
  vec2 cellCoord = cellId * cellPixelSize;
  vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

  float base = fbm2(uv, uTime * 0.05);
  base = base * 0.5 - 0.65;

  float feed = base + (uDensity - 0.5) * 0.3;

  float speed     = uRippleSpeed;
  float thickness = uRippleThickness;
  const float dampT     = 1.0;
  const float dampR     = 10.0;

  if (uEnableRipples == 1) {
    for (int i = 0; i < MAX_CLICKS; ++i){
      vec2 pos = uClickPos[i];
      if (pos.x < 0.0) continue;
      float cellPixelSize = 8.0 * pixelSize;
      vec2 cuv = (((pos - uResolution * .5 - cellPixelSize * .5) / (uResolution))) * vec2(aspectRatio, 1.0);
      float t = max(uTime - uClickTimes[i], 0.0);
      float r = distance(uv, cuv);
      float waveR = speed * t;
      float ring  = exp(-pow((r - waveR) / thickness, 2.0));
      float atten = exp(-dampT * t) * exp(-dampR * r);
      feed = max(feed, ring * atten * uRippleIntensity);
    }
  }

  float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;
  float bw = step(0.5, feed + bayer);

  float h = fract(sin(dot(floor(fragCoord / uPixelSize), vec2(127.1, 311.7))) * 43758.5453);
  float jitterScale = 1.0 + (h - 0.5) * uPixelJitter;
  float coverage = bw * jitterScale;
  float M;
  if      (uShapeType == SHAPE_CIRCLE)   M = maskCircle (pixelUV, coverage);
  else if (uShapeType == SHAPE_TRIANGLE) M = maskTriangle(pixelUV, pixelId, coverage);
  else if (uShapeType == SHAPE_DIAMOND)  M = maskDiamond(pixelUV, coverage);
  else                                   M = coverage;

  if (uEdgeFade > 0.0) {
    vec2 norm = gl_FragCoord.xy / uResolution;
    float edge = min(min(norm.x, norm.y), min(1.0 - norm.x, 1.0 - norm.y));
    float fade = smoothstep(0.0, uEdgeFade, edge);
    M *= fade;
  }

  vec3 color = uColor;

  // sRGB gamma correction - convert linear to sRGB for accurate color output
  vec3 srgbColor = mix(
    color * 12.92,
    1.055 * pow(color, vec3(1.0 / 2.4)) - 0.055,
    step(0.0031308, color)
  );

  fragColor = vec4(srgbColor, M);
}
`,hs=10,jg=({variant:n="square",pixelSize:e=3,color:t="#B497CF",className:i,style:r,antialias:s=!0,patternScale:a=2,patternDensity:o=1,liquid:c=!1,liquidStrength:l=.1,liquidRadius:f=1,pixelSizeJitter:m=0,enableRipples:d=!0,rippleIntensityScale:h=1,rippleThickness:v=.1,rippleSpeed:M=.3,liquidWobbleSpeed:g=4.5,autoPauseOffscreen:u=!0,speed:A=.5,transparent:C=!0,edgeFade:S=.5,noiseAmount:R=0})=>{const T=Oe.useRef(null),P=Oe.useRef({visible:!0}),_=Oe.useRef(A),y=Oe.useRef(null),I=Oe.useRef(null);return Oe.useEffect(()=>{var G,Y,W;const w=T.current;if(!w)return;_.current=A;const U=["antialias","liquid","noiseAmount"],X={antialias:s,liquid:c,noiseAmount:R};let $=!1;if(!y.current)$=!0;else if(I.current){for(const B of U)if(I.current[B]!==X[B]){$=!0;break}}if($){if(y.current){const Pe=y.current;(G=Pe.resizeObserver)==null||G.disconnect(),cancelAnimationFrame(Pe.raf),(Y=Pe.quad)==null||Y.geometry.dispose(),Pe.material.dispose(),(W=Pe.composer)==null||W.dispose(),Pe.renderer.dispose(),Pe.renderer.forceContextLoss(),Pe.renderer.domElement.parentElement===w&&w.removeChild(Pe.renderer.domElement),y.current=null}const B=document.createElement("canvas"),q=new Zm({canvas:B,antialias:s,alpha:!0,powerPreference:"high-performance"});q.domElement.style.width="100%",q.domElement.style.height="100%",q.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),w.appendChild(q.domElement),C?q.setClearAlpha(0):q.setClearColor(0,1);const ne={uResolution:{value:new Be(0,0)},uTime:{value:0},uColor:{value:new Je(t)},uClickPos:{value:Array.from({length:hs},()=>new Be(-1,-1))},uClickTimes:{value:new Float32Array(hs)},uShapeType:{value:ko[n]??0},uPixelSize:{value:e*q.getPixelRatio()},uScale:{value:a},uDensity:{value:o},uPixelJitter:{value:m},uEnableRipples:{value:d?1:0},uRippleSpeed:{value:M},uRippleThickness:{value:v},uRippleIntensity:{value:h},uEdgeFade:{value:S}},se=new ia,ge=new Rr(-1,1,1,-1,0,1),qe=new Ft({vertexShader:Kg,fragmentShader:$g,uniforms:ne,transparent:!0,depthTest:!1,depthWrite:!1,glslVersion:ta}),dt=new Bi(2,2),Ye=new Qt(dt,qe);se.add(Ye);const Z=new eu,re=()=>{var He;const Pe=w.clientWidth||1,Fe=w.clientHeight||1;q.setSize(Pe,Fe,!1),ne.uResolution.value.set(q.domElement.width,q.domElement.height),(He=y.current)!=null&&He.composer&&y.current.composer.setSize(q.domElement.width,q.domElement.height),ne.uPixelSize.value=e*q.getPixelRatio()};re();const te=new ResizeObserver(re);te.observe(w);const De=(()=>{var Pe;if(typeof window<"u"&&((Pe=window.crypto)!=null&&Pe.getRandomValues)){const Fe=new Uint32Array(1);return window.crypto.getRandomValues(Fe),Fe[0]/4294967295}return Math.random()})()*1e3;let _e,et,Ie;if(c){et=qg(),et.radiusScale=f,_e=new Fo(q);const Pe=new Bo(se,ge);Ie=Yg(et.texture,{strength:l,freq:g});const Fe=new Go(ge,Ie);Fe.renderToScreen=!0,_e.addPass(Pe),_e.addPass(Fe)}if(R>0){_e||(_e=new Fo(q),_e.addPass(new Bo(se,ge)));const Pe=new Cl("NoiseEffect","uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ",{uniforms:new Map([["uTime",new vt(0)],["uAmount",new vt(R)]])}),Fe=new Go(ge,Pe);Fe.renderToScreen=!0,_e&&_e.passes.length>0&&_e.passes.forEach(He=>He.renderToScreen=!1),_e.addPass(Fe)}_e&&_e.setSize(q.domElement.width,q.domElement.height);const tt=Pe=>{const Fe=q.domElement.getBoundingClientRect(),He=q.domElement.width/Fe.width,Qe=q.domElement.height/Fe.height,D=(Pe.clientX-Fe.left)*He,Ct=(Fe.height-(Pe.clientY-Fe.top))*Qe;return{fx:D,fy:Ct,w:q.domElement.width,h:q.domElement.height}},Ke=Pe=>{var D;const{fx:Fe,fy:He}=tt(Pe),Qe=((D=y.current)==null?void 0:D.clickIx)??0;ne.uClickPos.value[Qe].set(Fe,He),ne.uClickTimes.value[Qe]=ne.uTime.value,y.current&&(y.current.clickIx=(Qe+1)%hs)},ke=Pe=>{if(!et)return;const{fx:Fe,fy:He,w:Qe,h:D}=tt(Pe);et.addTouch({x:Fe/Qe,y:He/D})};q.domElement.addEventListener("pointerdown",Ke,{passive:!0}),q.domElement.addEventListener("pointermove",ke,{passive:!0});let ct=0;const ut=()=>{if(u&&!P.current.visible){ct=requestAnimationFrame(ut);return}ne.uTime.value=De+Z.getElapsedTime()*_.current,Ie&&(Ie.uniforms.get("uTime").value=ne.uTime.value),_e?(et&&et.update(),_e.passes.forEach(Pe=>{const Fe=Pe.effects;Fe&&Fe.forEach(He=>{var D;const Qe=(D=He.uniforms)==null?void 0:D.get("uTime");Qe&&(Qe.value=ne.uTime.value)})}),_e.render()):q.render(se,ge),ct=requestAnimationFrame(ut)};ct=requestAnimationFrame(ut),y.current={renderer:q,scene:se,camera:ge,material:qe,clock:Z,clickIx:0,uniforms:ne,resizeObserver:te,raf:ct,quad:Ye,timeOffset:De,composer:_e,touch:et,liquidEffect:Ie}}else{const B=y.current;if(B.uniforms.uShapeType.value=ko[n]??0,B.uniforms.uPixelSize.value=e*B.renderer.getPixelRatio(),B.uniforms.uColor.value.set(t),B.uniforms.uScale.value=a,B.uniforms.uDensity.value=o,B.uniforms.uPixelJitter.value=m,B.uniforms.uEnableRipples.value=d?1:0,B.uniforms.uRippleIntensity.value=h,B.uniforms.uRippleThickness.value=v,B.uniforms.uRippleSpeed.value=M,B.uniforms.uEdgeFade.value=S,C?B.renderer.setClearAlpha(0):B.renderer.setClearColor(0,1),B.liquidEffect){const q=B.liquidEffect;q&&(q.value=l);const ne=B.liquidEffect.uniforms.get("uFreq");ne&&(ne.value=g)}B.touch&&(B.touch.radiusScale=f)}return I.current=X,()=>{var q,ne,se;if(y.current&&$||!y.current)return;const B=y.current;(q=B.resizeObserver)==null||q.disconnect(),cancelAnimationFrame(B.raf),(ne=B.quad)==null||ne.geometry.dispose(),B.material.dispose(),(se=B.composer)==null||se.dispose(),B.renderer.dispose(),B.renderer.forceContextLoss(),B.renderer.domElement.parentElement===w&&w.removeChild(B.renderer.domElement),y.current=null}},[s,c,R,e,a,o,d,h,v,M,m,S,C,l,f,g,u,n,t,A]),E.jsx("div",{ref:T,className:`pixel-blast-container ${i??""}`,style:r,"aria-label":"PixelBlast interactive background"})},ps=[{id:"tech",title:"Tech Team",badge:"Cloud & Infrastructure",icon:oa,kbps:"320kbps",gif:"/images/domains/tech.gif",description:"The powerhouse behind our cloud infrastructure, open-source projects, and technical curriculum. The Tech Team builds production-grade full-stack apps, DevOps pipelines, and leads hands-on AWS workshops.",focusPills:["AWS Architecture","Full-Stack Dev","Serverless & EKS","DevOps & CI/CD","Open Source"],deliverables:[{title:"Production Web Portals",desc:"Deploying robust cloud-native web portals and services."},{title:"AWS Workshops",desc:"Curating hands-on labs on EC2, S3, Bedrock & Lambda."},{title:"Open Source Repos",desc:"Building open-source tools & starter kits for builders."},{title:"Hackathon Tech Support",desc:"Mentoring teams in cloud deployment & APIs."}]},{id:"events",title:"Events Team",badge:"Community & Hackathons",icon:hc,kbps:"192kbps",gif:"/images/domains/events.gif",description:"Orchestrates seamless community workshops, hackathons, speaker sessions, and tech meetups. The Events Team drives student engagement, venue logistics, speaker outreach, and event execution.",focusPills:["Hackathon Planning","Workshop Execution","Speaker Outreach","Venue Operations","Community Meetups"],deliverables:[{title:"Collegiate Hackathons",desc:"Organizing 24-hour hackathons with top mentors & prizes."},{title:"Hands-on Bootcamps",desc:"Hosting weekly cloud architecture and dev bootcamps."},{title:"Industry Speakers",desc:"Inviting AWS Certified Experts & Solutions Architects."},{title:"Attendee Experience",desc:"Ensuring seamless check-ins, swags, and Q&As."}]},{id:"marketing",title:"Marketing Team",badge:"Brand & Content Strategy",icon:pc,kbps:"128kbps",gif:"/images/domains/marketing.gif",description:"Spreads the word, builds our brand identity, and grows our student builder community. The Marketing Team crafts compelling social media campaigns, visual design assets, video teasers, and content strategies.",focusPills:["Social Media Growth","Visual Graphic Design","Content Strategy","Video Promo Teasers","Brand Identity"],deliverables:[{title:"Social Campaigns",desc:"Creating viral posts and outreach campaigns."},{title:"Graphic Assets",desc:"Designing event banners, posters, badges, and swags."},{title:"Community Stories",desc:"Highlighting student project showcases & wins."},{title:"Video Reels & Recaps",desc:"Editing recap reels & promo videos for events."}]},{id:"operations",title:"Operations Team",badge:"Logistics & Partnerships",icon:mc,kbps:"FLAC.HD",gif:"/images/domains/operations.gif",description:"The backbone of our community. The Operations Team handles internal logistics, sponsorship partnerships, college administration alignments, financial budgeting, and member onboarding.",focusPills:["Logistics Management","Sponsorship Tie-ups","Admin Approvals","Budgeting & Resources","Member Onboarding"],deliverables:[{title:"Sponsorship Tie-ups",desc:"Securing industry sponsors, cloud credits, and swags."},{title:"Admin Coordination",desc:"Aligning college permissions, auditoriums, and labs."},{title:"Member Relations",desc:"Managing onboarding, certifications tracking & feedback."},{title:"Resource Allocation",desc:"Overseeing budget allocation & hardware needs."}]}],Zg=fc.div`
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
`,Jg=()=>{const[n,e]=Oe.useState("tech"),t=ps.find(i=>i.id===n)||ps[0];return E.jsxs("section",{id:"domains",className:"section-padding domains-section",children:[E.jsx(jg,{variant:"square",pixelSize:3,color:"#A855F7",patternScale:2,patternDensity:1.2,enableRipples:!0,rippleIntensityScale:1.5,liquid:!0,liquidStrength:.08}),E.jsxs("div",{className:"container",children:[E.jsxs("div",{className:"domains-header text-center",children:[E.jsxs("div",{className:"section-badge",children:[E.jsx(Wo,{size:14}),E.jsx("span",{children:"// OUR DOMAINS"})]}),E.jsxs("h2",{className:"section-title",children:["Driven by Specialized Teams, ",E.jsx("span",{className:"text-gradient-purple",children:"Building Excellence"})]}),E.jsx("p",{className:"section-subtitle mx-auto",children:"Our community is structured across 4 specialized domains to deliver world-class workshops, hackathons, and software engineering projects."})]}),E.jsx("div",{className:"unified-retro-console",children:E.jsxs("div",{className:"console-inner-layout",children:[E.jsxs("div",{className:"console-left-stack",children:[E.jsx(Zg,{children:E.jsxs("div",{className:"winamp-player-container",children:[E.jsxs("div",{className:"player-header",children:[E.jsx("div",{className:"header-bars"}),E.jsx("span",{className:"header-title",children:"PREFERENCES // DOMAIN_MODE"})]}),E.jsx("div",{className:"radio-stack",children:ps.map(i=>{const r=n===i.id;return E.jsxs("label",{className:"track-select",htmlFor:`domain-track-${i.id}`,onClick:()=>e(i.id),children:[E.jsx("input",{type:"radio",id:`domain-track-${i.id}`,name:"winamp-domain-mode",checked:r,onChange:()=>e(i.id)}),E.jsxs("div",{className:"led-indicator",children:[E.jsx("div",{className:"led-glass"}),E.jsx("div",{className:"led-light"}),E.jsx("div",{className:"led-reflection"})]}),E.jsxs("div",{className:"track-info",children:[E.jsx("span",{className:"track-title",children:i.title.toUpperCase()}),E.jsx("span",{className:"track-kbps",children:i.kbps})]}),E.jsxs("div",{className:"equalizer-mini",children:[E.jsx("div",{className:"bar"}),E.jsx("div",{className:"bar"}),E.jsx("div",{className:"bar"})]})]},i.id)})}),E.jsx("div",{className:"screen-overlay"})]})}),E.jsxs("div",{className:"gif-tv-screen-box",children:[E.jsxs("div",{className:"gif-tv-header",children:[E.jsxs("span",{className:"gif-tv-header-title",children:["VIDEO_FEED // ",t.id.toUpperCase(),"_LIVE"]}),E.jsx("span",{className:"gif-tv-header-badge",children:"60 FPS"})]}),E.jsxs("div",{className:"gif-tv-display",children:[E.jsx("div",{className:"gif-tv-scanlines"}),E.jsx("img",{src:t.gif,alt:`${t.title} GIF Feed`,className:"gif-tv-image"})]})]})]}),E.jsxs("div",{className:"tv-screen-details-card",children:[E.jsxs("div",{className:"tv-monitor-header",children:[E.jsxs("div",{className:"tv-header-left",children:[E.jsx("div",{className:"tv-power-led"}),E.jsx("span",{className:"tv-header-title",children:"CRT MONITOR // DOMAIN_DISPLAY"})]}),E.jsx("span",{className:"tv-header-status",children:"SIGNAL: 100% OK"})]}),E.jsxs("div",{className:"tv-crt-screen",children:[E.jsx("div",{className:"tv-screen-overlay"}),E.jsxs("div",{className:"tv-domain-badge",children:[E.jsx(gc,{size:12}),E.jsx("span",{children:t.badge})]}),E.jsx("h3",{className:"tv-domain-title",children:t.title}),E.jsx("p",{className:"tv-domain-desc",children:t.description}),E.jsx("div",{className:"tv-focus-heading",children:"// CORE CAPABILITIES & FOCUS"}),E.jsx("div",{className:"tv-focus-tags",children:t.focusPills.map((i,r)=>E.jsx("span",{className:"tv-focus-pill",children:i},r))}),E.jsx("div",{className:"tv-deliverables-grid",children:t.deliverables.map((i,r)=>E.jsxs("div",{className:"tv-deliverable-item",style:{animationDelay:`${.6+r*.1}s`},children:[E.jsx(ur,{size:16,className:"tv-deliverable-icon"}),E.jsxs("div",{children:[E.jsx("div",{className:"tv-deliverable-name",children:i.title}),E.jsx("div",{className:"tv-deliverable-desc",children:i.desc})]})]},r))})]})]},t.id)]})})]})]})};function Qg(){const[n,e]=Oe.useState(!1),t=()=>e(!0),i=()=>e(!1),r=["WITH OPEN SOURCE","WITH DEVOPS","WITH CLOUD & AI","ON THE AWS CLOUD","WITH FULL-STACK"];return E.jsxs("div",{className:"app-wrapper",children:[E.jsx(Lc,{onOpenJoinModal:t}),E.jsxs("section",{id:"hero",className:"hero-layout",children:[E.jsx("div",{className:"hero-shapegrid-wrapper",children:E.jsx(_c,{speed:.5,squareSize:40,direction:"diagonal",borderColor:"#2F293A",hoverFillColor:"#222",shape:"square",hoverTrailAmount:0,hoverColor:"#A855F7",size:80})}),E.jsxs("div",{className:"hero-grid-container",children:[E.jsx("div",{className:"hero-left-col",children:E.jsx(vc,{})}),E.jsxs("div",{className:"hero-right-col",children:[E.jsx("h1",{className:"hero-heading-static",children:"BUILD THE FUTURE"}),E.jsx("h1",{className:"hero-heading-rotate",children:E.jsx(xc,{words:r,duration:2500,delay:1,className:"word-rotate-text"})}),E.jsx("p",{className:"hero-subtext",children:"This is JSS Academy of Technical Education Bengaluru's student community powered by AWS. We build real projects across Cloud, AI, Full Stack, DevOps and Open Source turning students into engineers who ship, not larp."}),E.jsxs("div",{className:"hero-btn-group",children:[E.jsx(Sc,{onClick:t}),E.jsx(Mc,{href:"https://github.com/awsjssateb"})]})]})]}),E.jsx("div",{className:"hero-bottom-fade-overlay"})]}),E.jsx(Oc,{}),E.jsx(Bc,{onOpenJoinModal:t}),E.jsx(Ec,{onOpenJoinModal:t}),E.jsx(bc,{}),E.jsx(Tc,{}),E.jsx(Jg,{}),E.jsx(yc,{}),E.jsx(Ac,{}),E.jsx(Rc,{}),E.jsx(Cc,{isOpen:n,onClose:i})]})}wc.createRoot(document.getElementById("root")).render(E.jsx(Pc.StrictMode,{children:E.jsx(Qg,{})}));
