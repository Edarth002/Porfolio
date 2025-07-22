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
    <div>
      <div className='bg-stone-400 rounded-b-[4rem]'>
        {/* NavBar */}
        <nav className='p-5'>
          <ul className='flex justify-between items-center'>
            <ul>
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
                <a href="mailto:arthuronyeanusi@gmail.com">
                  <button className='bg-black rounded-full px-5 duration-300 py-2 text-white hover:scale-110 md:block hidden animate-bounce'>Contact Us</button>
                </a>
              </li>
            </ul>
          </ul>
        </nav>

        {/* Hero Section */}
        <section className='flex w-full mx-auto justify-center'>
          <section className='md:p-10 p-5 mt-5 justify-center md:w-1/2'>
            <div className='relative w-full'>
              <Image src={pic} className='md:w-40 h-32 md:h-40 w-32 grayscale rounded-full border-2 border-white object-cover mx-auto' alt="Profile picture of Arthur Onyeanusi" />
              <p className='bg-white px-5 py-2 rounded-full -rotate-6 absolute top-1/2 md:ml-10 left-1/2 transform_50 cursor-pointer animate-bounce md:text-base text-xs'>Arthur Onyeanusi👋</p>
            </div>
            <h1 className='md:text-4xl text-2xl text-center my-3'>Building Scalable and Responsive Websites for Your Business to Stay On Top</h1>
            <a href="mailto:arthuronyeanusi@gmail.com">
              <button className='bg-black mx-auto justify-center flex mt-7 rounded-full px-5 duration-300 py-2 text-white hover:scale-110'>Contact Us</button>
            </a>
          </section>
        </section>
      </div>

      {/* What We Do Section */}
      <section className='md:p-10 p-5'>
        <h1 className='md:text-2xl text-xl md:mt-3 mt-5'>What Do We Do?</h1>
        <div className='md:w-20 w-10 md:hover:w-40 hover:w-20 duration-300 h-1 rounded-full cursor-pointer bg-black'></div>
        {/* Cards */}
        <section className='flex flex-1 lg:flex-row flex-col items-center lg:justify-between my-5 md:px-10'>
          <div className='p-10 lg:w-[28%] w-full border-2 h-[23rem] shadow-lg shadow-stone-200 rounded-lg bg-stone-300 lg:my-0 mb-5'>
            <Image src={uxdesign} className='w-20 h-20 justify-center mx-auto' alt="UI/UX Design" />
            <h1 className='text-lg text-center mt-2'>UI/UX Design</h1>
            <p className='text-stone-700 my-3'>Let&apos;s say you have got a developer, we can still work together. You bring in your imagination, we bring in our tools.</p>
          </div>
          <div className='p-10 lg:w-[28%] w-full border-2 h-[23rem] shadow-lg shadow-stone-200 rounded-lg bg-stone-300 lg:my-0 my-5'>
            <Image src={buildweb} className='w-20 h-20 justify-center mx-auto' alt="Web Development" />
            <h1 className='text-lg text-center mt-2'>Web Development</h1>
            <p className='text-stone-700 my-3'>While you lead, we offer our expertise. Together, we develop websites that will drive human traffic to your organization. Just name it, we build it.</p>
          </div>
          <div className='p-10 lg:w-[28%] w-full border-2 h-[23rem] shadow-lg shadow-stone-200 rounded-lg bg-stone-300 lg:my-0 my-5'>
            <Image src={content} className='w-20 h-20 justify-center mx-auto' alt="Web Content Writing" />
            <h1 className='text-lg text-center mt-2'>Web Content Writing</h1>
            <p className='text-stone-700 my-3'>Now, you&apos;ve built it! You need your website on the top three so it can generate more traffic. With optimized content, you can achieve that, and guess what, it is just a click away...</p>
          </div>
        </section>
      </section>

      {/* Featured Projects */}
      <section className='px-10 py-5'>
        <h1 className='text-2xl'>Featured?</h1>
        <div className='w-20 hover:w-40 duration-300 h-1 rounded-full cursor-pointer bg-black'></div>
        {/* Scrollable Slide */}
        <ImageCarousel />
      </section>

      {/* Call To Action Section */}
      <section className='w-full relative'>
        <Image src={formal} className='w-full h-[50vh] object-cover grayscale' alt="Formal event" />
        <div className='absolute p-10 inset-0 justify-center text-center parallax-content'>
          <p className='text-white text-3xl p-10'>Why do people come to me?</p>
          <a href="mailto:arthuronyeanusi@gmail.com">
            <button className='bg-black hover:scale-110 duration-300 cursor-pointer rounded-full px-5 py-2 text-white'>Contact Us</button>
          </a>
        </div>
      </section>

<noscript>You need to <a href="https://www.chatbot.com/help/chat-widget/enable-javascript-in-your-browser/" rel="noopener nofollow">enable JavaScript</a> in order to use the AI chatbot tool powered by <a href="https://www.chatbot.com/" rel="noopener nofollow" target="_blank">ChatBot</a></noscript>
    </div>
  );
}

export default Main;
