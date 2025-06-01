'use client';
import React, { useEffect } from 'react';
// ...other imports...

const Main = () => {
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
      {/* ...your JSX code remains unchanged... */}
    </div>
  );
};

export default Main;
