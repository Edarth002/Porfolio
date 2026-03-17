'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import pic from '../../../public/Images/profile.jpeg';
import gmail from '../../../public/Images/gmail-logo.png';
import linkedin from '../../../public/Images/linkedin.png';
import github from '../../../public/Images/github.png';
import twitter from '../../../public/Images/twitter.png';
import ImageCarousel from './ImageCarousel';

// Skill Bar
const SkillBar = ({ label, percent }) => (
  <div className="mb-4">
    <div className="flex justify-between text-sm mb-1">
      <span className="text-zinc-600 dark:text-zinc-300">{label}</span>
      <span className="text-zinc-500 dark:text-zinc-400">{percent}</span>
    </div>
    <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
      <div
        className="bg-zinc-700 dark:bg-zinc-400 h-full transition-all duration-1000 ease-out"
        style={{ width: percent }}
      />
    </div>
  </div>
);

export const Main = () => {
  const [theme, setTheme] = useState('dark');

  // Init theme
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (saved === 'dark' || (!saved && prefersDark)) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  // Toggle
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark');

    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  // Parallax
  useEffect(() => {
    const handleScroll = () => {
      const el = document.querySelector('.parallax-content');
      if (el) el.style.transform = `translateY(${window.scrollY * 0.1}px)`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white dark:bg-[#0f0f0f] text-zinc-950 dark:text-white min-h-screen font-sans overflow-x-hidden transition-colors duration-300">

      {/* Chatbot */}
      <Script
        id="chatbot"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.__be = window.__be || {};
            window.__be.id = "66c3555c86ccab0007190659";
            (function() {
              var be = document.createElement('script'); be.async = true;
              be.src = 'https://cdn.chatbot.com/widget/plugin.js';
              document.body.appendChild(be);
            })();
          `
        }}
      />

      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-40 -right-20 w-72 h-96 bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">

        {/* NAVBAR */}
        <nav className="sticky top-0 z-50 px-4 md:px-6 py-4 max-w-7xl mx-auto backdrop-blur-md bg-white/70 dark:bg-[#0f0f0f]/70">
          <div className="flex justify-between items-center">

            <a href="mailto:arthuronyeanusi@gmail.com" className="flex items-center gap-2">
              <Image src={gmail} width={24} height={24} className="grayscale hover:grayscale-0 dark:invert transition" alt="gmail"/>
              <span className="hidden sm:inline text-sm">arthuronyeanusi@gmail.com</span>
            </a>

            <div className="flex items-center gap-4 md:gap-6">

              {[ 
                { src: linkedin, link: "https://linkedin.com", label: "LinkedIn" },
                { src: github, link: "https://github.com/Edarth002", label: "GitHub" },
                { src: twitter, link: "https://x.com", label: "Twitter" }
              ].map((item, i) => (
                <a key={i} href={item.link} target="_blank" className="flex items-center gap-1 hover:text-emerald-500 transition">
                  <Image src={item.src} width={20} height={20} className="grayscale hover:grayscale-0 dark:invert" alt={item.label}/>
                  <span className="hidden md:inline">{item.label}</span>
                </a>
              ))}

              <button onClick={toggleTheme} className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800">
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>

              <a href="/resume.pdf" target="_blank" className="bg-zinc-900 text-white px-4 py-2 rounded-full text-xs md:text-sm dark:bg-white dark:text-black">
                Resume
              </a>

            </div>
          </div>
        </nav>

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-10 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6 parallax-content">
            <h1 className="text-4xl md:text-6xl font-bold">Arthur Onyeanusi</h1>
            <p className="text-zinc-500 dark:text-zinc-400 italic">Full Stack Developer</p>

            <div className="flex gap-4">
              <a href="mailto:arthuronyeanusi@gmail.com" className="bg-zinc-900 text-white px-6 py-3 rounded-xl dark:bg-white dark:text-black">
                Contact Me
              </a>
            </div>
          </div>

          <div className="mt-10 md:mt-0">
            <Image src={pic} alt="profile" className="w-64 h-80 rounded-3xl object-cover grayscale hover:grayscale-0 transition"/>
          </div>
        </section>

        {/* SKILLS */}
        <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-bold mb-6">Backend</h3>
            <SkillBar label="Node.js" percent="80%" />
            <SkillBar label="MySQL" percent="80%" />
          </div>

          <div>
            <h3 className="font-bold mb-6">Frontend</h3>
            <SkillBar label="React / Next.js" percent="90%" />
            <SkillBar label="Tailwind" percent="90%" />
          </div>
        </section>

        {/* PROJECTS */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-10">Projects</h2>
          <ImageCarousel />
        </section>

        {/* FOOTER */}
        <footer className="text-center py-10 text-sm text-zinc-500">
          © 2025 Arthur Onyeanusi
        </footer>

      </div>
    </div>
  );
};

export default Main;
