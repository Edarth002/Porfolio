"use client";

import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import "./globals.css";

const SKILLS = [
  "JavaScript","TypeScript","React.js","Next.js","TailwindCSS", "Node.js","Express.js","MongoDB","MySQL",
  "Git","GitHub","Vercel","REST APIs",
];

const SKILL_CATEGORIES = [
  { title: "Frontend",       items: ["JavaScript","TypeScript","React.js","Next.js","TailwindCSS"] },
  { title: "Backend",        items: ["Node.js","Express.js","REST APIs"] },
  { title: "Database",       items: ["MySQL","MongoDB"] },
  { title: "DevOps & Tools", items: ["Git","GitHub","Vercel"] },
];

const EXPERIENCE = [
  {
    period: "Dec 2024 – Jun 2025",
    company: "Enoverlab",
    role: "Frontend Web Developer",
    bullets: [
      "Built responsive web apps using React.js, Next.js, and TailwindCSS",
      "Collaborated with designers and PMs to implement features and optimize UX",
      "Conducted code reviews and improved performance and accessibility across the codebase",
    ],
  },
  {
    period: "Sep 2024 - Oct 2024",
    company: "Web3Lagos",
    role: "Frontend Web Developer",
    bullets: [
      "Designed and implemented UI for a blockchain voting platform",
      "Integrated wallet functionality and real-time blockchain data",
      "Collaborated with backend and smart contract engineers in an agile team",
    ],
  },
  {
    period: "Jan 2025 - Feb 2025",
    company: "Inspirations Computers Concept",
    role: "Web Developer",
    bullets: [
      "Independently designed, developed, and deployed the company website end-to-end",
      "Used Next.js for SSR and TailwindCSS for responsive design",
      "Implemented best practices in code quality and version control using Git & GitHub",
      "Presented the final product to stakeholders, showcasing all core functionality",
    ],
  },
  {
    period: "Jan 2026",
    company: "Moon and Earth Auto",
    role: "Web Developer",
    bullets: [
      "Independently designed, developed, and deployed the company website end-to-end",
      "Implemented best practices in code quality and version control using Git & GitHub",
      "Implemented Backend development first principles with Nextjs",
            "Presented the final product to stakeholders, showcasing all core functionality",
    ],
  },
];

const PROJECTS = [
  {
    num: "01 / Featured",
    title: "Personal Portfolio Site",
    desc: "A fully custom developer portfolio designed and built from scratch; no templates, no boilerplate. Built with Next.js, TailwindCSS for a responsive pixel-perfect layout, and deployed on Vercel with automatic CI/CD on every push. The site serves as a living showcase of my work. Scroll-triggered reveal animations, smooth anchor navigation, and deliberate typography choices make the experience feel polished end-to-end.",
    stack: ["Next.js","Vercel"],
    href: "https://arthuronyeanusi.vercel.app",
  },
  {
    num: "02 / Web3",
    title: "Web3 Lagos: Aurora",
    desc: "Aurora is an innovative application developed for the Web3Bridge Hackathon to solve transparent payout of creators on the blockchain. Our project leverages smart contracts(hardhat) and React to provide a media streaming platform that uses the blockchain to track, collect and payout donations for creators.",
    stack: ["React.js","Typescript","Etherjs",],
    href: "https://github.com/victorbuikem/aurora-frontend",
  },
  {
    num: "03 / Gig",
    title: "Inspirations Computers Website",
    desc: "Designed and built a full e-commerce-style bakery website for a food business. Implemented an image carousel, categorized menu pages, testimonials section, and Instagram feed integration. Delivered end-to-end from design to deployment on Vercel.",
    stack: ["Next.js","TailwindCSS","Git","Vercel"],
    href: "https://debsuniquebakedgoods.com",
  },
  {
    num: "04 / Enoverlab Product",
    title: "Thrive Sphere",
    desc: "Built a full-stack e-learning platform for personal and professional development. Features include course browsing, user authentication, coaching services, community pages, and a CMS-driven content backend. Frontend deployed on Vercel; backend powered by Strapi..",
    stack: ["Next.js","TailwindCSS", "Strapi", "REST APIs", "Vercel"],
    href: "https://thrive-sphere.vercel.app",
  },

  {
    num: "05 / Company Site",
    title: "Moon and Earth Auto",
    desc: " Designed and developed a full production website for a premium luxury car dealership based in Lagos, Nigeria. Built a multi-page experience covering a live database-backed vehicle inventory with category filtering, a workshop appointment booking system with time-slot selection, enquiry forms, and a Cloudinary-hosted video highlights section.",
    stack: ["Next.js","TailwindCSS", "MySQL", "REST APIs", "Vercel"],
    href: "https://moonearthauto.com",
  },
  {
    num: "06 / Team Project",
    title: "Swapyard",
    desc: "Defined business logic for swapyard, an application designed to solve the needs of individuals who want to sell off their partly used household items or those who wish to purchase fairly used household items in good condition.",
    stack: ["Next.js", "Typescript", "TailwindCSS", "MySQL", "REST APIs", "Vercel"],
    href: "https://swapyard.vercel.app",
  },
 
];

const STATS = [
  { number: "3+",    label: "Companies"       },
  { number: "CSc",  label: "Degree" },
  { number: "13+",   label: "Technologies"    },
  { number: "Full",  label: "Stack Development"   },
];

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function SectionLabel({ children }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:"0.6rem",
      color:"var(--accent)", fontSize:"0.7rem", letterSpacing:"0.2em",
      textTransform:"uppercase", marginBottom:"1rem" }}>
      <span style={{ display:"block", width:24, height:1, background:"var(--accent)" }} />
      {children}
    </div>
  );
}

function Reveal({ children, delay = 0, style = {} }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Arthur Onyeanusi — Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer building modern web apps with React, Next.js, Node.js and more." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
      </Head>

     <nav style={{
  position:"fixed", top:0, left:0, right:0, zIndex:100,
  display:"flex", alignItems:"center", justifyContent:"space-between",
  padding:"1.4rem 5vw",
  background: scrolled ? "rgba(10,10,15,0.92)" : "rgba(10,10,15,0.7)",
  backdropFilter:"blur(16px)",
  borderBottom:"1px solid var(--border)",
  transition:"background 0.3s",
}}>
  <a href="#hero" style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.1rem",
    fontWeight:800, letterSpacing:"-0.01em", color:"var(--text)", textDecoration:"none" }}>
    Arthur<span style={{ color:"var(--accent)" }}>.</span>
  </a>

  {/* NAV LINKS (hidden on mobile via CSS) */}
  <div className="nav-links-wrap" style={{ display:"flex", gap:"2.5rem", listStyle:"none" }}>
    {["about","skills","experience","projects","contact"].map(s => (
      <a key={s} href={`#${s}`} className="nav-link-item"
        style={{ color:"var(--muted)", textDecoration:"none", fontSize:"0.75rem",
          letterSpacing:"0.12em", textTransform:"uppercase" }}>
        {s}
      </a>
    ))}
  </div>

  {/* ALWAYS VISIBLE */}
  <a
    href="/resume.pdf"
    download="Arthur_Onyeanusi_Resume.pdf"
    className="nav-link-item"
    style={{
      color:"var(--accent)", textDecoration:"none", fontSize:"0.75rem",
      letterSpacing:"0.12em", textTransform:"uppercase",
      border:"1px solid var(--accent)", padding:"0.45rem 1rem", borderRadius:2,
    }}
  >
    Download CV
  </a>
</nav>

      <section id="hero" style={{
        minHeight:"100vh", display:"grid", placeItems:"center",
        padding:"8rem 5vw 4rem", position:"relative", overflow:"hidden",
      }}>
        <div style={{
          position:"absolute", inset:0,
          backgroundImage:"linear-gradient(rgba(124,255,228,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(124,255,228,0.03) 1px,transparent 1px)",
          backgroundSize:"60px 60px",
          maskImage:"radial-gradient(ellipse 80% 80% at 50% 50%,black,transparent)",
        }} />
        <div style={{
          position:"absolute", width:600, height:600,
          background:"radial-gradient(circle,rgba(124,255,228,0.07) 0%,transparent 70%)",
          top:"50%", left:"50%", transform:"translate(-50%,-50%)", pointerEvents:"none",
        }} />

        <div style={{ position:"relative", zIndex:2, maxWidth:900, width:"100%" }}>
  
          <div style={{
            display:"inline-flex", alignItems:"center", gap:"0.5rem",
            background:"rgba(124,255,228,0.08)", border:"1px solid rgba(124,255,228,0.2)",
            padding:"0.3rem 0.9rem", borderRadius:999,
            color:"var(--accent)", fontSize:"0.72rem", letterSpacing:"0.1em", textTransform:"uppercase",
            marginBottom:"2rem",
            animation:"fadeUp 0.6s ease both",
          }}>
            <span style={{ fontSize:"0.5rem", animation:"pulse 2s infinite" }}>●</span>
            Available for opportunities
          </div>


          <h1 className="hero-name-text" style={{
            fontFamily:"'Syne',sans-serif",
            fontSize:"clamp(3.5rem,9vw,8rem)",
            fontWeight:800, lineHeight:0.95, letterSpacing:"-0.03em",
            marginBottom:"1.5rem",
            animation:"heroNameIn 0.8s 0.1s ease both",
          }}>
            Arthur<br />
            <span style={{ WebkitTextStroke:"1px rgba(255,255,255,0.2)", color:"transparent" }}>
              Onyeanusi
            </span>
          </h1>

          {/* tagline */}
          <p style={{
            fontFamily:"'Instrument Serif',serif", fontStyle:"italic",
            fontSize:"clamp(1rem,2.5vw,1.4rem)", color:"var(--muted)",
            maxWidth:520, marginBottom:"3rem",
            animation:"fadeUp 0.6s 0.3s ease both",
          }}>
            Full Stack Developer crafting{" "}
            <em style={{ color:"var(--accent)", fontStyle:"normal" }}>performant</em>
            {" "}modern web experiences — from pixel-perfect frontends to scalable backends.
          </p>

          {/* CTA */}
          <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap", animation:"fadeUp 0.6s 0.4s ease both" }}>
            <a href="#projects" className="btn-pri" style={{
              display:"inline-flex", alignItems:"center", gap:"0.5rem",
              padding:"0.85rem 2rem", background:"var(--accent)", color:"var(--bg)",
              fontFamily:"'Syne',sans-serif", fontWeight:700,
              fontSize:"0.8rem", letterSpacing:"0.08em", textTransform:"uppercase",
              textDecoration:"none", borderRadius:2,
            }}>View My Work →</a>
            <a href="#contact" className="btn-sec" style={{
              display:"inline-flex", alignItems:"center", gap:"0.5rem",
              padding:"0.85rem 2rem", background:"transparent", color:"var(--text)",
              border:"1px solid var(--border)",
              fontFamily:"'Syne',sans-serif", fontWeight:600,
              fontSize:"0.8rem", letterSpacing:"0.08em", textTransform:"uppercase",
              textDecoration:"none", borderRadius:2,
            }}>Get In Touch</a>
          </div>
        </div>

        <div style={{
          position:"absolute", bottom:"2.5rem", left:"50%", transform:"translateX(-50%)",
          display:"flex", flexDirection:"column", alignItems:"center", gap:"0.5rem",
          color:"var(--muted)", fontSize:"0.65rem", letterSpacing:"0.2em", textTransform:"uppercase",
          animation:"fadeUp 0.6s 0.6s ease both",
        }}>
          <div style={{
            width:1, height:40,
            background:"linear-gradient(to bottom,var(--accent),transparent)",
            animation:"scrollLine 2s infinite",
          }} />
          Scroll
        </div>
      </section>

      <section id="about" style={{ padding:"7rem 5vw", background:"var(--surface)" }}>
        <Reveal>
          <div className="about-grid" style={{
            display:"grid", gridTemplateColumns:"1fr 1fr",
            gap:"5rem", alignItems:"center", maxWidth:1200,
          }}>
            <div>
              <SectionLabel>About Me</SectionLabel>
              <h2 style={{
                fontFamily:"'Syne',sans-serif",
                fontSize:"clamp(2rem,5vw,3.5rem)",
                fontWeight:800, letterSpacing:"-0.02em", lineHeight:1.1,
                marginBottom:"1.5rem",
              }}>Versatile. Precise.<br />Always learning.</h2>
              {[
                <>I&apos;m <strong style={{color:"var(--text)",fontWeight:500}}>Arthur Onyeanusi</strong>, a Full Stack Developer based in Nigeria, currently completing my B.Sc. in Computer Science at the <strong style={{color:"var(--text)",fontWeight:500}}>University of Nigeria, Nsukka</strong> (2021–2025).</>,
                <>I build modern web applications with clean architecture and a sharp eye for UX. Whether it&apos;s a blazing-fast React frontend, a robust Node.js API, or a blockchain-integrated interface — I bridge the gap between design and engineering.</>,
                <>I&apos;ve shipped production apps across <strong style={{color:"var(--text)",fontWeight:500}}>startup, enterprise, and Web3</strong> environments — always focused on performance, accessibility, and code quality.</>,
              ].map((p, i) => (
                <p key={i} style={{ color:"var(--muted)", lineHeight:1.9, marginBottom:"1.2rem", fontSize:"0.9rem" }}>{p}</p>
              ))}
            </div>
            <div style={{
              display:"grid", gridTemplateColumns:"1fr 1fr",
              gap:1, background:"var(--border)",
              border:"1px solid var(--border)", borderRadius:4, overflow:"hidden",
            }}>
              {STATS.map(s => (
                <div key={s.label} style={{
                  background:"var(--card)", padding:"2rem 1.5rem",
                  transition:"background 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.background="#1a1a25"}
                  onMouseLeave={e => e.currentTarget.style.background="var(--card)"}
                >
                  <div style={{
                    fontFamily:"'Syne',sans-serif", fontSize:"2.8rem", fontWeight:800,
                    color:"var(--accent)", letterSpacing:"-0.04em", lineHeight:1, marginBottom:"0.4rem",
                  }}>{s.number}</div>
                  <div style={{ color:"var(--muted)", fontSize:"0.72rem", letterSpacing:"0.1em", textTransform:"uppercase" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section id="skills" style={{ padding:"7rem 5vw" }}>

        <div style={{ overflow:"hidden", marginBottom:"1rem" }}>
          <div className="marquee-track">
            {[...SKILLS, ...SKILLS].map((s, i) => (
              <div key={i} className="chip-item" style={{
                display:"inline-flex", alignItems:"center", gap:"0.5rem",
                padding:"0.5rem 1.2rem", background:"var(--card)",
                border:"1px solid var(--border)", borderRadius:999,
                color:"var(--text)", fontSize:"0.8rem", whiteSpace:"nowrap",
              }}>
                <span style={{ width:6, height:6, borderRadius:"50%", background:"var(--accent)", opacity:0.6, display:"block" }} />
                {s}
              </div>
            ))}
          </div>
        </div>
        <div style={{ overflow:"hidden", marginBottom:"4rem" }}>
          <div className="marquee-track-reverse">
            {[...SKILLS.slice().reverse(), ...SKILLS.slice().reverse()].map((s, i) => (
              <div key={i} className="chip-item" style={{
                display:"inline-flex", alignItems:"center", gap:"0.5rem",
                padding:"0.5rem 1.2rem", background:"var(--card)",
                border:"1px solid var(--border)", borderRadius:999,
                color:"var(--text)", fontSize:"0.8rem", whiteSpace:"nowrap",
              }}>
                <span style={{ width:6, height:6, borderRadius:"50%", background:"var(--accent3)", opacity:0.6, display:"block" }} />
                {s}
              </div>
            ))}
          </div>
        </div>

        <Reveal><SectionLabel>Tech Stack</SectionLabel></Reveal>
        <Reveal delay={0.05}><h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(2rem,5vw,3.5rem)", fontWeight:800, letterSpacing:"-0.02em", lineHeight:1.1, marginBottom:"1rem" }}>What I build with</h2></Reveal>
        <Reveal delay={0.1}><p style={{ color:"var(--muted)", maxWidth:480, fontFamily:"'Instrument Serif',serif", fontStyle:"italic", fontSize:"1rem", marginBottom:"4rem" }}>Full coverage — from the UI layer down to the database.</p></Reveal>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"1.5rem", maxWidth:1200 }}>
          {SKILL_CATEGORIES.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.08}>
              <div className="skill-cat" style={{
                background:"var(--card)", border:"1px solid var(--border)",
                borderRadius:4, padding:"2rem",
              }}>
                <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"0.75rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"var(--accent)", marginBottom:"1.2rem" }}>{cat.title}</div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem" }}>
                  {cat.items.map(item => (
                    <span key={item} style={{
                      background:"rgba(124,255,228,0.08)", border:"1px solid rgba(124,255,228,0.2)",
                      color:"var(--text)", padding:"0.3rem 0.8rem", borderRadius:2, fontSize:"0.78rem",
                    }}>{item}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="experience" style={{ padding:"7rem 5vw", background:"var(--surface)" }}>
        <Reveal><SectionLabel>Career</SectionLabel></Reveal>
        <Reveal delay={0.05}><h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(2rem,5vw,3.5rem)", fontWeight:800, letterSpacing:"-0.02em", lineHeight:1.1, marginBottom:"1rem" }}>Work Experience</h2></Reveal>
        <Reveal delay={0.1}><p style={{ color:"var(--muted)", maxWidth:480, fontFamily:"'Instrument Serif',serif", fontStyle:"italic", fontSize:"1rem", marginBottom:"4rem" }}>Delivering results across web, product, and blockchain teams.</p></Reveal>

        <div style={{ maxWidth:800, position:"relative" }}>
          <div style={{ position:"absolute", left:0, top:0, bottom:0, width:1, background:"var(--border)" }} />
          {EXPERIENCE.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1}>
              <div className="tl-item" style={{ paddingLeft:"3rem", paddingBottom: i < EXPERIENCE.length-1 ? "4rem" : 0, position:"relative" }}>
                <div className="tl-dot" style={{
                  position:"absolute", left:-6, top:4,
                  width:13, height:13, borderRadius:"50%",
                  background:"var(--bg)", border:"2px solid var(--accent)",
                }} />
                <div style={{ color:"var(--accent)", fontSize:"0.7rem", letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:"0.5rem" }}>{job.period}</div>
                <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"1.4rem", letterSpacing:"-0.02em", marginBottom:"0.2rem" }}>{job.company}</div>
                <div style={{ color:"var(--muted)", fontSize:"0.82rem", marginBottom:"1.2rem", fontFamily:"'Instrument Serif',serif", fontStyle:"italic" }}>{job.role}</div>
                <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:"0.6rem" }}>
                  {job.bullets.map((b, j) => (
                    <li key={j} style={{ display:"flex", gap:"0.8rem", color:"var(--muted)", fontSize:"0.83rem", lineHeight:1.7 }}>
                      <span style={{ color:"var(--accent)", flexShrink:0, marginTop:"0.05rem" }}>→</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="projects" style={{ padding:"7rem 5vw" }}>
        <Reveal><SectionLabel>Work</SectionLabel></Reveal>
        <Reveal delay={0.05}><h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(2rem,5vw,3.5rem)", fontWeight:800, letterSpacing:"-0.02em", lineHeight:1.1, marginBottom:"1rem" }}>Featured Projects</h2></Reveal>
        <Reveal delay={0.1}><p style={{ color:"var(--muted)", maxWidth:480, fontFamily:"'Instrument Serif',serif", fontStyle:"italic", fontSize:"1rem", marginBottom:"4rem" }}>Selected builds from my time in the field.</p></Reveal>

        <div className="projects-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))", gap:"1.5rem", maxWidth:1200 }}>
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <a href={p.href} target="_blank" rel="noreferrer" style={{ textDecoration:"none", display:"block" }}>
                <div className="project-card-wrap" style={{
                  background:"var(--card)", border:"1px solid var(--border)",
                  borderRadius:4, padding:"2.5rem", position:"relative", overflow:"hidden",
                }}>
                  <div className="top-bar" style={{
                    position:"absolute", top:0, left:0, right:0, height:2,
                    background:"linear-gradient(90deg,var(--accent),var(--accent3))",
                    transform:"scaleX(0)", transformOrigin:"left",
                    transition:"transform 0.4s",
                  }} />
                  <div style={{ color:"var(--muted)", fontSize:"0.68rem", fontFamily:"'Syne',sans-serif", fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:"1.5rem" }}>{p.num}</div>
                  <span className="proj-arrow" style={{ position:"absolute", top:"2.5rem", right:"2.5rem", color:"var(--muted)", fontSize:"1.2rem", transition:"color 0.2s, transform 0.2s" }}>↗</span>
                  <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.3rem", fontWeight:700, letterSpacing:"-0.02em", marginBottom:"0.8rem", color:"var(--text)" }}>{p.title}</div>
                  <p style={{ color:"var(--muted)", fontSize:"0.83rem", lineHeight:1.8, marginBottom:"1.5rem" }}>{p.desc}</p>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"0.4rem" }}>
                    {p.stack.map(tag => (
                      <span key={tag} style={{
                        background:"rgba(200,180,255,0.07)", border:"1px solid rgba(200,180,255,0.15)",
                        color:"var(--accent3)", padding:"0.25rem 0.7rem", borderRadius:2, fontSize:"0.72rem",
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding:"7rem 5vw", background:"var(--surface)" }}>
        <Reveal style={{ maxWidth:700, margin:"0 auto", textAlign:"center" }}>
          <div style={{ display:"flex", justifyContent:"center", alignItems:"center", gap:"0.6rem", color:"var(--accent)", fontSize:"0.7rem", letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:"1rem" }}>
            Contact
          </div>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(2rem,5vw,3.5rem)", fontWeight:800, letterSpacing:"-0.02em", lineHeight:1.1, marginBottom:"1rem" }}>Let&apos;s build something great.</h2>
          <p style={{ color:"var(--muted)", fontFamily:"'Instrument Serif',serif", fontStyle:"italic", fontSize:"1rem", marginBottom:"2.5rem" }}>
            Open to full-time roles, freelance projects, and exciting collaborations.
          </p>
          <a href="mailto:arthuronyeanusi@gmail.com" style={{
            fontFamily:"'Syne',sans-serif", fontSize:"clamp(1.2rem,3vw,1.8rem)", fontWeight:700,
            letterSpacing:"-0.02em", color:"var(--accent)", textDecoration:"none",
            borderBottom:"1px solid transparent", transition:"border-color 0.2s",
            display:"inline-block", marginBottom:"2.5rem",
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor="var(--accent)"}
            onMouseLeave={e => e.currentTarget.style.borderColor="transparent"}
          >arthuronyeanusi@gmail.com</a>

          <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
            {[
              { label:"GitHub",        href:"https://github.com/Edarth002",                             icon:<GithubIcon /> },
              { label:"LinkedIn",      href:"https://www.linkedin.com/in/arthuronyeanusi-30a102247/",   icon:<LinkedinIcon /> },
              { label:"+234 702 647 6769", href:"tel:+2347026476769",                                   icon:<PhoneIcon /> },
              { label:"Portfolio",     href:"https://arthuronyeanusi.vercel.app",                       icon:<GlobeIcon /> },
            ].map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="contact-link-item" style={{
                display:"inline-flex", alignItems:"center", gap:"0.5rem",
                color:"var(--muted)", textDecoration:"none", fontSize:"0.8rem",
                letterSpacing:"0.05em", border:"1px solid var(--border)",
                borderRadius:2, padding:"0.6rem 1.2rem",
              }}>
                {l.icon}{l.label}
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        padding:"2rem 5vw", display:"flex", justifyContent:"space-between", alignItems:"center",
        borderTop:"1px solid var(--border)", color:"var(--muted)", fontSize:"0.72rem", letterSpacing:"0.05em",
      }}>
        <span style={{ color:"var(--accent)", fontFamily:"'Syne',sans-serif", fontWeight:700 }}>Arthur Onyeanusi</span>
        <span>Full Stack Developer · Nigeria · 2025</span>
      </footer>
    </>
  );
}

/* ─────────────────────────────────────────
   ICON COMPONENTS
───────────────────────────────────────── */
function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.15 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.45-.45a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
    </svg>
  );
}
