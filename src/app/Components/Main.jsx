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

// Reusable SkillBar with dark/light support
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
      ></div>
    </div>
  </div>
);

export const Main = () => {
  const [theme, setTheme] = useState('dark');          // ← Fixed: removed TS generic (this was the crash)
  const [menuOpen, setMenuOpen] = useState(false);

  // Theme initialization (system preference + localStorage) – safe for SSR
  useEffect(() => {
    if (typeof window === 'undefined') return;        // ← Prevents any server-side execution

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Toggle theme with persistence
  const toggleTheme = () => {
    if (theme === 'dark') {
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
      const content = document.querySelector('.parallax-content');
      if (content) {
        const scrollY = window.scrollY;
        content.style.transform = `translateY(${scrollY * 0.1}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white dark:bg-[#0f0f0f] text-zinc-950 dark:text-white min-h-screen font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      {/* Chatbot Script */}
      <Script
        id="chatbot-plugin"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.__be = window.__be || {};
            window.__be.id = "66c3555c86ccab0007190659";
            (function() {
              var be = document.createElement('script'); be.type = 'text/javascript'; be.async = true;
              be.src = 'https://cdn.chatbot.com/widget/plugin.js';
              var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(be, s);
            })();
          `,
        }}
      />

      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 dark:bg-green-900/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] rounded-full bg-purple-500/10 dark:bg-purple-900/10 blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* NAVIGATION */}
        <nav className="px-4 md:px-6 py-4 max-w-7xl mx-auto">
  <div className="flex justify-between items-center">

    {/* Email */}
    <a href="mailto:arthuronyeanusi@gmail.com" className="flex items-center gap-2">
      <Image
        src={gmail}
        width={24}
        height={24}
        className="grayscale hover:grayscale-0 transition"
        alt="Gmail"
      />
      <span className="hidden sm:inline text-sm font-medium">
        arthuronyeanusi@gmail.com
      </span>
    </a>

    {/* Right Side */}
    <div className="flex items-center gap-4 md:gap-6 text-sm font-medium">

      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/arthur-onyeanusi-30a102247/" target="_blank" className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition">
        <Image src={linkedin} width={20} height={20} className="grayscale hover:grayscale-0" alt="LinkedIn" />
        <span className="hidden md:inline">LinkedIn</span>
      </a>

      {/* GitHub */}
      <a href="https://github.com/Edarth002" target="_blank" className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition">
        <Image src={github} width={20} height={20} className="grayscale hover:grayscale-0" alt="GitHub" />
        <span className="hidden md:inline">GitHub</span>
      </a>

      {/* Twitter */}
      <a href="https://x.com/Edarth123" target="_blank" className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition">
        <Image src={twitter} width={20} height={20} className="grayscale hover:grayscale-0" alt="Twitter" />
        <span className="hidden md:inline">Twitter</span>
      </a>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
      >
        {theme === 'dark' ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>

      {/* Resume */}
      <a
        href="/resume.pdf"
        target="_blank"
        className="bg-zinc-900 text-white px-4 py-2 rounded-full text-xs md:text-sm font-semibold hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 transition"
      >
        Resume
      </a>

    </div>
  </div>
</nav>
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-10 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6 parallax-content">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Arthur Onyeanusi</h1>
            <p className="text-xl font-medium text-zinc-500 dark:text-zinc-400 italic">Full Stack Developer</p>
            <ul className="grid grid-cols-2 gap-4 text-sm text-zinc-600 dark:text-zinc-300 border-l border-zinc-200 dark:border-zinc-800 pl-4">
              <li>• Birthday: <span className="text-zinc-950 dark:text-white">24 May</span></li>
              <li>• Degree: <span className="text-zinc-950 dark:text-white">BSc Computer Science</span></li>
              <li>• City: <span className="text-zinc-950 dark:text-white">Lagos</span></li>
              <li>• Status: <span className="text-zinc-950 dark:text-white">Freelance Available</span></li>
            </ul>
            <div className="flex gap-4 pt-4">
              <a
                href="mailto:arthuronyeanusi@gmail.com"
                className="bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 px-8 py-3 rounded-2xl transition font-bold"
              >
                Contact me
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
            <div className="relative group">
              <div className="absolute -inset-4 border border-zinc-200 dark:border-zinc-800 rounded-[3.5rem] rotate-6 group-hover:rotate-0 transition duration-500" />
              <Image
                src={pic}
                alt="Arthur Onyeanusi Profile"
                className="w-64 h-80 object-cover rounded-[3rem] grayscale hover:grayscale-0 transition duration-500 shadow-2xl relative z-10"
              />
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
          <div className="bg-zinc-50 dark:bg-zinc-900/30 p-8 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm hover:border-emerald-200 dark:hover:border-zinc-700 transition">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
              <span className="p-2 bg-zinc-200 dark:bg-zinc-800 rounded-xl">🛠️</span> Backend Skills
            </h3>
            <SkillBar label="Node.js & Express" percent="80%" />
            <SkillBar label="MySQL" percent="80%" />
            <SkillBar label="MongoDB" percent="80%" />
            <SkillBar label="JavaScript/TypeScript" percent="80%" />
            <SkillBar label="Python" percent="20%" />
            <SkillBar label="PHP" percent="20%" />
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-900/30 p-8 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm hover:border-emerald-200 dark:hover:border-zinc-700 transition">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
              <span className="p-2 bg-zinc-200 dark:bg-zinc-800 rounded-xl">🎨</span> Frontend Skills
            </h3>
            <SkillBar label="React.js & Next.js" percent="90%" />
            <SkillBar label="TailwindCSS" percent="90%" />
            <SkillBar label="HTML/CSS" percent="90%" />
            <SkillBar label="Responsive Design" percent="90%" />
          </div>
        </section>

        {/* CERTIFICATIONS – Your TechCrush cert */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-16 tracking-tight">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 p-8 rounded-[2.5rem] hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition group flex flex-col items-center text-center">
              <div className="text-5xl mb-6 group-hover:scale-110 transition duration-300">📜</div>
              <h3 className="text-xl font-bold mb-3">Backend Developer Bootcamp</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-2">TechCrush</p>
              <p className="text-zinc-500 dark:text-zinc-500 text-xs mb-4">
                Node.js • Express • RESTful APIs • MySQL • Modern Backend Development
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <a
                  href="https://www.linkedin.com/posts/arthur-onyeanusi-30a102247_just-earned-my-backend-development-certificate-activity-7347232405176410112-lZrn?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAAD0PyzoBkuteYf9_0wn3HfA32oaoGdZ0548&utm_campaign=share_via"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full font-medium transition text-sm"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-16 tracking-tight">Experience &amp; Education</h2>
          <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-4 md:ml-0 md:left-1/2">
            {/* Experience 1 */}
            <div className="mb-16 flex flex-col md:flex-row items-center w-full relative">
              <div className="absolute -left-[10.5px] md:left-[-10px] w-5 h-5 bg-emerald-500 rounded-full border-4 border-white dark:border-[#0f0f0f]" />
              <div className="md:w-1/2 md:pr-12 md:text-right pl-10 md:pl-0">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase">Dec 2024 - June 2025</span>
                <h3 className="text-lg font-bold mt-1">Frontend Developer @ Enoverlab</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-2 leading-relaxed">Built responsive web apps using Next.js with TailwindCSS.</p>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="mb-16 flex flex-col md:flex-row items-center w-full relative">
              <div className="absolute -left-[10.5px] md:left-[-10px] w-5 h-5 bg-zinc-400 dark:bg-zinc-700 rounded-full border-4 border-white dark:border-[#0f0f0f]" />
              <div className="md:w-1/2 md:ml-auto md:pl-12 pl-10">
                <span className="text-xs font-bold text-zinc-500 uppercase">Jan 2024</span>
                <h3 className="text-lg font-bold mt-1">Web Developer @ Inspirations Computers</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-2 leading-relaxed">Independently deployed company website using Next.js</p>
              </div>
            </div>

            {/* Education */}
            <div className="mb-16 flex flex-col md:flex-row items-center w-full relative">
              <div className="absolute -left-[10.5px] md:left-[-10px] w-5 h-5 bg-blue-500 rounded-full border-4 border-white dark:border-[#0f0f0f]" />
              <div className="md:w-1/2 md:pr-12 md:text-right pl-10 md:pl-0">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase">2021 - 2025</span>
                <h3 className="text-lg font-bold mt-1">B.Sc Computer Science</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-2 leading-relaxed">University of Nigeria, Nsukka.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-16">Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Full-Stack Solutions", desc: "End-to-end apps with React and Node.js.", icon: "💻" },
              { title: "Database Management", desc: "Scalable data with MySQL and MongoDB.", icon: "🗄️" },
              { title: "API Development", desc: "Secure RESTful APIs using Express.js.", icon: "⚙️" }
            ].map((service, i) => (
              <div
                key={i}
                className="bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 p-8 rounded-[2.5rem] hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition group text-center"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition duration-300">{service.icon}</div>
                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-zinc-200 dark:border-zinc-900">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold">Featured Projects</h2>
              <div className="w-20 h-1 bg-emerald-500 rounded-full mt-2" />
            </div>
          </div>
          <ImageCarousel />
        </section>

        {/* FOOTER */}
        <footer className="py-10 text-center border-t border-zinc-200 dark:border-zinc-900">
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">© 2025 Arthur Onyeanusi. Built with Next.js &amp; TailwindCSS.</p>
        </footer>
      </div>
    </div>
  );
};

export default Main;
