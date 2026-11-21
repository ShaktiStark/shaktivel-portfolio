'use client';
import React, { useEffect, useState } from "react";

import BlurText from "./BlurText";
import Waves from "./Waves";


const pdf = "Shaktivel_Thevar_Resume.pdf";
const github = "https://github.com/ShaktiStark";
const mail = "mailto:shaktithevar87@gmail.com";
const projects = [
  {title:"AlzCare", domain:"Healthcare", year:"2025", theme:"care", description:"A patient workspace that brings records and assessment workflows together.", detail:"I connected responsive React screens to REST APIs, optimized PostgreSQL queries, and used Firebase Authentication to manage sign-in and access.", tools:["React","Express","PostgreSQL","Firebase"]},
  {title:"LawGPT", domain:"Legal research", year:"2024", theme:"law", description:"A search interface for finding legal cases and exploring their records.", detail:"I designed the PostgreSQL schema for case records, wrote retrieval endpoints in Express and Node.js, and built a responsive React interface for exploring results.", tools:["React","Node.js","Express","PostgreSQL"]}
];
const skills = [
  ["Interface", "React.js, Next.js, Tailwind CSS, Material UI, responsive design"],
  ["Languages", "JavaScript, TypeScript, SQL, HTML5, CSS3"],
  ["Backend & data", "Node.js, Express.js, REST APIs, JWT, middleware, PostgreSQL, Firebase"],
  ["Developer tools", "Git, GitHub, Postman, VS Code, npm, Vite, AWS Cloud Foundations, Vercel, Netlify"]
];
function Brand() {
  return <a className="brand" href="#top" aria-label="Shaktivel Thevar, back to top"><b aria-hidden="true">st</b><span>Shaktivel Thevar</span></a>;
}
function Sculpture(){
  return <div className="scene" aria-hidden="true"><div className="shadow"/><div className="object">{[0,1,2,3,4].map(n=><div className={'plate plate-'+n} key={n}><span className="etch"/></div>)}</div></div>;
}
function ProjectVisual({theme}){
  if(theme==="law") return <div className="visual legal" aria-hidden="true"><div className="legal-paper back"/><div className="legal-paper front"><small>CASE ARCHIVE</small><b>LawGPT</b><hr/><span>Search case records</span><i/><i/><i/></div></div>;
  return <div className="visual medical" aria-hidden="true"><div className="care-panel"><div className="mini-head"><b>✳ AlzCare</b><span>Workspace</span></div><small>ASSESSMENTS</small><div className="chart">{[30,47,34,56,45,65,52,73,60,82,74,90].map((n,i)=><i key={i} style={{height:n+'%'}}/>)}</div><div className="mini-rule"/></div></div>;
}
function Project({project:p}){
  return <article className="project"><ProjectVisual theme={p.theme}/><div className="project-body"><div className="meta"><span>{p.domain}</span><span>{p.year}</span></div><h3>{p.title}</h3><p>{p.description}</p><details><summary>Inside the build</summary><p>{p.detail}</p><div className="tags">{p.tools.map(t=><span key={t}>{t}</span>)}</div></details></div></article>;
}
export default function Portfolio(){
  const [quiet,setQuiet]=useState(true);
  useEffect(()=>{
    const media=matchMedia("(prefers-reduced-motion: reduce)");
    const change=()=>setQuiet(media.matches);
    change(); media.addEventListener("change",change);
    return ()=>media.removeEventListener("change",change);
  },[]);
  return <div id="top" className={quiet?"quiet":""}>
    <a className="skip" href="#main">Skip to content</a>
    <header><div className="wrap navrow"><Brand/><nav aria-label="Main menu"><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#contact">Contact</a></nav><a className="pill outline" href={pdf} download>Get résumé</a></div></header>
    <main id="main">
      <section className="hero"><div className="aura"/><div className="wave-field" aria-hidden="true"><Waves lineColor="#7a72df" accentColor="#aea7ff" rotation={62} spacing={11} amplitude={46} speed={.34} opacity={.39} paused={quiet} intro={!quiet} mouseInteraction={!quiet} clickRipple={!quiet}/></div>
        <div className="wrap stage"><div className="intro"><div className="role"><i/>Full-stack developer</div><h1 aria-label="Shaktivel Thevar">{quiet?<><span>Shaktivel</span><span>Thevar.</span></>:<><BlurText className="name" text="Shaktivel" animateBy="letters" delay={32} trigger="load" direction="bottom" distance={22}/><BlurText className="name surname" text="Thevar." animateBy="letters" delay={55} trigger="load" direction="bottom" distance={25}/></>}</h1><p>I build the interface you see and the APIs and databases that make it work.</p><div className="actions"><a className="pill primary" href="#projects">Explore projects</a><a className="pill light" href={mail}>Email me</a></div></div>
        <Sculpture/></div><div className="wrap herofoot"><span>Mumbai, India</span><button type="button" aria-pressed={!quiet} onClick={()=>setQuiet(!quiet)}><i aria-hidden="true">{quiet?"▶":"Ⅱ"}</i> Motion {quiet?"off":"on"}</button></div>
      </section>
      <section className="wrap work" id="projects"><div className="section-title"><h2>Selected projects<span>.</span></h2><span className="year">2024 — 2025</span></div><div className="grid">{projects.map(p=><Project key={p.title} project={p}/>)}</div></section>
      <section className="experience" id="experience"><div className="wrap split"><h2>Experience<span>.</span></h2><div className="employment"><div className="meta"><span>Ptex Solutions</span><span>Dec 2025 – present</span></div><h3>Junior Developer</h3><p>In Mumbai, I build React features for internal dashboards and workflow tools. I design Express endpoints and PostgreSQL schemas, then test and refine the features with the teams who use them.</p></div></div></section>
      <section className="wrap split toolbox"><h2>Toolkit<span>.</span></h2><dl>{skills.map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></section>
      <section className="wrap split education"><h2>Education<span>.</span></h2><div><div className="meta"><span>2021 – 2025</span><span>CGPA 8.17</span></div><h3>Computer Engineering</h3><p>Bachelor of Engineering · SIES Graduate School of Technology, Mumbai University</p><details><summary>Education &amp; certifications</summary><ul><li>B.K. Birla College · Higher Secondary Certificate · 2019–2020 · 90.17%</li><li>St. Thomas High School · Secondary School Certificate · 2018–2019 · 84.80%</li><li>AWS Academy Graduate — Cloud Foundations</li><li>The Complete 2024 Web Development Bootcamp · Udemy</li></ul></details></div></section>
    </main><footer id="contact"><div className="wrap"><h2>Get in touch<span>.</span></h2><a className="email" href={mail}>shaktithevar87@gmail.com</a><div className="footrow"><Brand/><div><a href={github}>GitHub</a><a href="https://linkedin.com/in/shaktivel-thevar-s7">LinkedIn</a><a href={pdf} download>Résumé PDF</a></div></div></div></footer>
  </div>;
}


