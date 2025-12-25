'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import pic from '../../../public/Images/profile.jpeg';
import buildweb from '../../../public/Images/build.png';
import content from '../../../public/Images/content.png';
import uxdesign from '../../../public/Images/ux-design.png';
import formal from '../../../public/Images/Formal.jpg';
import gmail from '../../../public/Images/gmail-logo.png';
import linkedin from '../../../public/Images/linkedin.png';
import github from '../../../public/Images/github.png';
import twitter from '../../../public/Images/twitter.png';
import ImageCarousel from './ImageCarousel';

const SkillBar = ({ label, percent }) => (
  <div className="mb-4">
    <div className="flex justify-between text-sm mb-1">
      <span>{label}</span>
      <span>{percent}</span>
    </div>
    <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
      <div className="bg-zinc-400 h-full transition-all duration-1000" style={{ width: percent }}></div>
    </div>
  </div>
);

export const Main = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxBackground = document.querySelector('.parallax-background');
      if (parallaxBackground) {
        const scrollY = window.scrollY;
        parallaxBackground.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.__be = window.__be || {};
    window.__be.id = "66c3555c86ccab0007190659";

    const be = document.createElement('script');
    be.type = 'text/javascript';
    be.async = true;
    be.src = 'https://cdn.chatbot.com/widget/plugin.js';
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(be, s);
  }, []);

  

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans selection:bg-green-500/30">
  {/* The Background Glows */}
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-green-900/20 blur-[120px]" />
    <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] rounded-full bg-purple-900/10 blur-[120px]" />
  </div>

      <div className="relative z-10">
        {/* NavBar */}
        <nav className='p-5'>
          <ul className='flex justify-between items-center'>
            
              <li>
                <a href="mailto:arthuronyeanusi@gmail.com">
                  <button className='bg-black rounded-full px-5 duration-300 py-2 text-white hover:scale-110 md:block hidden'>arthuronyeanusi@gmail.com</button>
                  <Image src={gmail} width={30} height={30} className='block md:hidden grayscale' alt="Gmail logo" />
                </a>
              </li>
            </ul>
            <ul className='flex md:space-x-10 space-x-3 items-center'>
              <li className='hover:scale-110 duration-300 cursor-pointer'>
                <a href="https://ng.linkedin.com/in/arthur-onyeanusi-30a102247">
                  <p className='md:block hidden'>LinkedIn</p>
                  <Image src={linkedin} width={30} height={30} className='block md:hidden grayscale' alt="LinkedIn logo" />
                </a>
              </li>
              <li className='hover:scale-110 duration-300 cursor-pointer'>
                <a href="https://github.com/Edarth002">
                  <p className='md:block hidden'>Github</p>
                  <Image src={github} width={30} height={30} className='block md:hidden grayscale' alt="GitHub logo" />
                </a>
              </li>
              <li className='hover:scale-110 duration-300 cursor-pointer'>
                <a href="https://x.com/Edarth123">
                  <p className='md:block hidden'>Twitter</p>
                  <Image src={twitter} width={30} height={30} className='block md:hidden grayscale' alt="Twitter logo" />
                </a>
              </li>
              <li className='hover:scale-110 duration-300 cursor-pointer'>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className='bg-black rounded-full px-5 duration-300 py-2 text-white hover:scale-110 md:block hidden animate-bounce'>
                  Download Resume
                </a>
              </li>
            </ul>
          
        </nav>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-10 flex flex-col md:flex-row items-center justify-between">
  <div className="md:w-1/2 space-y-6">
    <h2 className="text-xl font-medium text-gray-400">Onyeanusi Arthur | full-stack developer</h2>
    <ul className="grid grid-cols-2 gap-4 text-sm text-gray-300">
      <li>• Birthday: <span className="text-white">24 May</span></li>
      <li>• Age: <span className="text-white">20</span></li>
      <li>• Degree: <span className="text-white">BSc</span></li>
      <li>• City: <span className="text-white">Lagos</span></li>
    </ul>
    <div className="flex gap-4 pt-4">
      <a href='#contact' className="bg-zinc-800 hover:bg-zinc-700 px-8 py-3 rounded-xl border border-zinc-700 transition">Contact me</a>
      <a href='#work' className="bg-zinc-100 text-black hover:bg-white px-8 py-3 rounded-xl transition">View my work</a>
    </div>
  </div>

  <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
    <div className="relative group">
      {/* The abstract border shape from the design */}
      <div className="absolute -inset-4 border border-zinc-700 rounded-[3rem] rotate-3 group-hover:rotate-0 transition duration-500"></div>
      <Image 
        src={pic} 
        alt="Arthur" 
        className="w-64 h-80 object-cover rounded-[2.5rem] grayscale hover:grayscale-0 transition duration-500 shadow-2xl"
      />
    </div>
  </div>
</section>
   

      <section className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">
  <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 backdrop-blur-sm">
    <h3 className="text-xl mb-6 flex items-center gap-2">
      <span className="p-2 bg-zinc-800 rounded-lg">🛠️</span> Backend developer
    </h3>
    <SkillBar label="MySQL" percent="89%" />
    <SkillBar label="PHP" percent="20%" />
    <SkillBar label="Nodejs" percent="80%" />
    <SkillBar label="MongoDB" percent="80%" />
    <SkillBar label="Python" percent="20%" />
  </div>

          <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 backdrop-blur-sm">
    <h3 className="text-xl mb-6 flex items-center gap-2">
      <span className="p-2 bg-zinc-800 rounded-lg">🛠️</span> Frontend developer
    </h3>
    <SkillBar label="HTML" percent="80%" />
    <SkillBar label="CSS" percent="80%" />
    <SkillBar label="TailwindCSS" percent="80%" />
    <SkillBar label="Reactjs" percent="80%" />
    <SkillBar label="Nextjs" percent="80%" />
  </div>
  
</section>

<section className="max-w-4xl mx-auto px-6 py-20 bg-[#0f0f0f]">
  <h2 className="text-3xl font-bold text-center mb-16 text-white">Experience & Education</h2>
  <div className="relative border-l-2 border-zinc-800 ml-4 md:ml-0 md:left-1/2">
    {/* Experience 1: Enoverlab */}
    <div className="mb-12 flex flex-col md:flex-row items-center w-full relative">
      <div className="absolute -left-[11px] md:left-[-11px] w-5 h-5 bg-green-500 rounded-full border-4 border-[#0f0f0f]"></div>
      <div className="md:w-1/2 md:pr-12 md:text-right pl-8 md:pl-0">
        <span className="text-xs font-bold text-green-500 uppercase tracking-widest">DEC 2024 - JUNE 2025</span> [cite: 31]
        <h3 className="text-lg font-bold text-white">Frontend Web Developer @ Enoverlab</h3> [cite: 29, 30]
        <p className="text-zinc-500 text-sm mt-2">Built responsive web apps using React.js, Next.js, and TailwindCSS. [cite: 32]</p>
      </div>
    </div>

    {/* Experience 2: Inspirations Computers */}
    <div className="mb-12 flex flex-col md:flex-row items-center w-full relative">
      <div className="absolute -left-[11px] md:left-[-11px] w-5 h-5 bg-zinc-600 rounded-full border-4 border-[#0f0f0f]"></div>
      <div className="md:w-1/2 md:ml-auto md:pl-12 pl-8">
        <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">JAN 2024</span> [cite: 38]
        <h3 className="text-lg font-bold text-white">Web Developer @ Inspirations Computers</h3> [cite: 34, 35]
        <p className="text-zinc-500 text-sm mt-2">Designed and deployed company website independently using Next.js. [cite: 39, 41]</p>
      </div>
    </div>
  </div>
</section>

      {/* Featured Projects */}
      <section className='px-10 py-5'>
        <h1 className='text-2xl'>Featured?</h1>
        <div className='w-20 hover:w-40 duration-300 h-1 rounded-full cursor-pointer bg-black'></div>
        {/* Scrollable Slide */}
        <ImageCarousel />
      </section>



        <section className="max-w-7xl mx-auto px-6 py-20 bg-[#0f0f0f]">
  <h2 className="text-3xl font-bold text-center mb-12 text-white">Services</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      { title: "Full-Stack Solutions", desc: "Building modern web apps with React, Next.js, and Node.js.", icon: "💻" }, [cite: 13, 14, 17]
      { title: "Database Management", desc: "Expertise in MySQL and MongoDB for scalable data.", icon: "🗄️" }, [cite: 19, 20]
      { title: "UI/UX Development", desc: "Crafting responsive designs with TailwindCSS.", icon: "🎨" }, 
      { title: "API Development", desc: "Robust backend logic using Express.js.", icon: "⚙️" } [cite: 18]
    ].map((service, i) => (
      <div key={i} className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 p-8 rounded-[2rem] hover:bg-zinc-800 transition">
        <div className="text-3xl mb-4">{service.icon}</div>
        <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
        <p className="text-zinc-500 text-sm">{service.desc}</p>
      </div>
    ))}
  </div>
</section>

<noscript>You need to <a href="https://www.chatbot.com/help/chat-widget/enable-javascript-in-your-browser/" rel="noopener nofollow">enable JavaScript</a> in order to use the AI chatbot tool powered by <a href="https://www.chatbot.com/" rel="noopener nofollow" target="_blank">ChatBot</a></noscript>
      </div>
      </div>
  );
}

export default Main;
