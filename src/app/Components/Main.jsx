'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Script from 'next/script'; // Optimized script loading
import pic from '../../../public/Images/profile.jpeg';
import gmail from '../../../public/Images/gmail-logo.png';
import linkedin from '../../../public/Images/linkedin.png';
import github from '../../../public/Images/github.png';
import twitter from '../../../public/Images/twitter.png';
import ImageCarousel from './ImageCarousel';

// Reusable SkillBar Component
const SkillBar = ({ label, percent }) => (
  <div className="mb-4">
    <div className="flex justify-between text-sm mb-1">
      <span className="text-zinc-300">{label}</span>
      <span className="text-zinc-400">{percent}</span>
    </div>
    <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
      <div 
        className="bg-zinc-400 h-full transition-all duration-1000 ease-out" 
        style={{ width: percent }}
      ></div>
    </div>
  </div>
);

export const Main = () => {
  // Parallax Effect
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
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans selection:bg-green-500/30 overflow-x-hidden font-sans">
      {/* Chatbot Script Integration */}
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
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-green-900/10 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] rounded-full bg-purple-900/10 blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* NavBar */}
        <nav className="p-6 max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <a href="mailto:arthuronyeanusi@gmail.com" className="group">
              <button className="bg-zinc-900 border border-zinc-800 rounded-full px-6 py-2 text-white hover:bg-white hover:text-black transition duration-300 hidden md:block">
                arthuronyeanusi@gmail.com
              </button>
              <Image src={gmail} width={30} height={30} className="md:hidden grayscale hover:grayscale-0" alt="Gmail" />
            </a>

            <ul className="flex space-x-6 md:space-x-10 items-center">
              <li>
                <a href="https://www.linkedin.com/in/arthur-onyeanusi-30a102247/" className="hover:text-zinc-400 transition" target="_blank">
                  <span className="hidden md:block">LinkedIn</span>
                  <Image src={linkedin} width={24} height={24} className="md:hidden grayscale" alt="LinkedIn" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Edarth002" className="hover:text-zinc-400 transition" target="_blank">
                  <span className="hidden md:block">Github</span>
                  <Image src={github} width={24} height={24} className="md:hidden grayscale" alt="GitHub" />
                </a>
              </li>
              <li>
                <a href="https://x.com/Edarth123" className="hover:text-zinc-400 transition" target="_blank">
                  <span className="hidden md:block">Twitter</span>
                  <Image src={twitter} width={24} height={24} className="md:hidden grayscale" alt="Twitter" />
                </a>
              </li>
              <li>
                <a href="/resume.pdf" target="_blank" className="bg-white text-black rounded-full px-6 py-2 font-bold hover:scale-105 transition hidden md:block">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-10 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6 parallax-content">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Arthur Onyeanusi</h1>
            <p className="text-xl font-medium text-zinc-400 italic">Full Stack Developer</p>
            <ul className="grid grid-cols-2 gap-4 text-sm text-zinc-300 border-l border-zinc-800 pl-4">
              <li>• Birthday: <span className="text-white">24 May</span></li>
              <li>• Degree: <span className="text-white">BSc Computer Science</span></li>
              <li>• City: <span className="text-white">Lagos</span></li>
              <li>• Status: <span className="text-white">Freelance Available</span></li>
            </ul>
            <div className="flex gap-4 pt-4">
              <a href="mailto:arthuronyeanusi@gmail.com" className="bg-zinc-800 hover:bg-zinc-700 px-8 py-3 rounded-2xl border border-zinc-700 transition">Contact me</a>
              <button className="bg-zinc-100 text-black hover:bg-white px-8 py-3 rounded-2xl transition font-bold">View my work</button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
            <div className="relative group">
              <div className="absolute -inset-4 border border-zinc-800 rounded-[3.5rem] rotate-6 group-hover:rotate-0 transition duration-500"></div>
              <Image 
                src={pic} 
                alt="Arthur Onyeanusi Profile" 
                className="w-64 h-80 object-cover rounded-[3rem] grayscale hover:grayscale-0 transition duration-500 shadow-2xl relative z-10"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
          <div className="bg-zinc-900/30 p-8 rounded-[2.5rem] border border-zinc-800 backdrop-blur-sm hover:border-zinc-700 transition">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-white">
              <span className="p-2 bg-zinc-800 rounded-xl">🛠️</span> Backend Skills
            </h3>
            <SkillBar label="Node.js & Express" percent="80%" />
            <SkillBar label="MySQL" percent="80%" />
            <SkillBar label="MongoDB" percent="80%" />
            <SkillBar label="JavaScript/TypeScript" percent="80%" />
             <SkillBar label="Python" percent="20%" />
             <SkillBar label="PHP" percent="20%" />
          </div>

          <div className="bg-zinc-900/30 p-8 rounded-[2.5rem] border border-zinc-800 backdrop-blur-sm hover:border-zinc-700 transition">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-white">
              <span className="p-2 bg-zinc-800 rounded-xl">🎨</span> Frontend Skills 
            </h3>
            <SkillBar label="React.js & Next.js" percent="90%" />
            <SkillBar label="TailwindCSS" percent="90%" />
            <SkillBar label="HTML/CSS" percent="90%" />
            <SkillBar label="Responsive Design" percent="90%" />
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mx-auto px-6 py-20 bg-transparent">
          <h2 className="text-3xl font-bold text-center mb-16 text-white tracking-tight">Experience & Education</h2>
          <div className="relative border-l border-zinc-800 ml-4 md:ml-0 md:left-1/2">
            {/* Experience 1 */}
            <div className="mb-16 flex flex-col md:flex-row items-center w-full relative">
              <div className="absolute -left-[10.5px] md:left-[-10px] w-5 h-5 bg-green-500 rounded-full border-4 border-[#0f0f0f]"></div>
              <div className="md:w-1/2 md:pr-12 md:text-right pl-10 md:pl-0">
                <span className="text-xs font-bold text-green-500 uppercase">Dec 2024 - June 2025</span>
                <h3 className="text-lg font-bold text-white mt-1">Frontend Developer @ Enoverlab</h3>
                <p className="text-zinc-500 text-sm mt-2 leading-relaxed">Built responsive web apps using React.js, Next.js, and TailwindCSS.</p>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="mb-16 flex flex-col md:flex-row items-center w-full relative">
              <div className="absolute -left-[10.5px] md:left-[-10px] w-5 h-5 bg-zinc-700 rounded-full border-4 border-[#0f0f0f]"></div>
              <div className="md:w-1/2 md:ml-auto md:pl-12 pl-10">
                <span className="text-xs font-bold text-zinc-500 uppercase">Jan 2024</span>
                <h3 className="text-lg font-bold text-white mt-1">Web Developer @ Inspirations Computers </h3>
                <p className="text-zinc-500 text-sm mt-2 leading-relaxed">Independently deployed company website using Next.js SSR.</p>
              </div>
            </div>

            {/* Education */}
            <div className="mb-16 flex flex-col md:flex-row items-center w-full relative">
              <div className="absolute -left-[10.5px] md:left-[-10px] w-5 h-5 bg-blue-500 rounded-full border-4 border-[#0f0f0f]"></div>
              <div className="md:w-1/2 md:pr-12 md:text-right pl-10 md:pl-0">
                <span className="text-xs font-bold text-blue-500 uppercase">2021 - 2025</span>
                <h3 className="text-lg font-bold text-white mt-1">B.Sc Computer Science</h3>
                <p className="text-zinc-500 text-sm mt-2 leading-relaxed">University of Nigeria, Nsukka.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Full-Stack Solutions", desc: "End-to-end apps with React and Node.js.", icon: "💻" },
              { title: "Database Management", desc: "Scalable data with MySQL and MongoDB.", icon: "🗄️" },
              { title: "UI/UX Development", desc: "Pixel-perfect responsive design with Tailwind.", icon: "🎨" },
              { title: "API Development", desc: "Secure RESTful APIs using Express.js.", icon: "⚙️" }
            ].map((service, i) => (
              <div key={i} className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-[2.5rem] hover:bg-zinc-800/60 transition group text-center">
                <div className="text-4xl mb-6 group-hover:scale-110 transition duration-300">{service.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Preview */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-zinc-900">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
              <div className="w-20 h-1 bg-green-500 rounded-full mt-2"></div>
            </div>
          </div>
          <ImageCarousel />
        </section>

        {/* Footer */}
        <footer className="py-10 text-center border-t border-zinc-900">
          <p className="text-zinc-600 text-sm">© 2025 Arthur Onyeanusi. Built with Next.js & TailwindCSS.</p>
        </footer>
      </div>
    </div>
  );
};

export default Main;
