import { useState, useEffect } from 'react';
import Image from 'next/image';
import w from '../../../public/Images/W.png';
import multi from '../../../public/Images/multistep-form.png';
import testimonial from '../../../public/Images/testimonial.png';
import tip_calc from '../../../public/Images/tip-calc.png';
import snap from '../../../public/Images/snap.png';
import chart from '../../../public/Images/Chart.png';
import Nig from '../../../public/Images/NigerianFintech.jpg';
import Elon from '../../../public/Images/ElonMusk.jpg';
import Biden from '../../../public/Images/Biden.jpg';
import responsive from '../../../public/Images/Responsive.png';
import ecommerce from '../../../public/Images/Ecommerce.png';

// Define links for each image
const imageLinks = [
  'https://news-hompage-main.vercel.app',
  'https://multi-step-form-rho-sooty.vercel.app',
  'https://tailwind-testimonial-grid-section.netlify.app',
  'https://tip-calculculate.netlify.app',
  'https://intro-sect111.netlify.app',
  'https://expenses-layout.vercel.app',
  'https://docs.google.com/document/d/11u_-Uj3cDwK2pbQSEdVEmjkhwUibcQItdIKTe628-HQ/edit?usp=sharing',
  'https://docs.google.com/document/d/1suNkfM_9dXxIfUT9kikwYeX2B72p3Y_JuG3VSDd7FtU/edit?usp=sharing',
  'https://docs.google.com/document/d/13irOaUNvuyslf_cJTQpbtSfDiufxZcXdGMQZa3YAXcE/edit?usp=sharing',
  'https://ornate-kringle-6fad6d.netlify.app',
];

const images = [w, multi, testimonial, tip_calc, snap, chart, Nig, Elon, Biden, responsive, ecommerce, moonandearthauto, inspirationscomputers];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const updateSlidesToShow = () => {
      setSlidesToShow(window.innerWidth < 768 ? 1 : 3);
    };

    // Initial setup
    updateSlidesToShow();

    // Update slidesToShow on window resize
    window.addEventListener('resize', updateSlidesToShow);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden w-full my-5">
      <div className={`flex transition-transform duration-1000 ease-in-out`} style={{ transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)` }}>
        {images.map((img, index) => (
          <a 
            key={index} 
            href={imageLinks[index]} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="min-w-full md:mx-5 sm:min-w-[33.333%] bg-gray-100 block hover:scale-110 cursor-pointer"
          >
            <Image 
              src={img} 
              alt={`Slide ${index + 1} - Image`} 
              layout="responsive" 
              width={800} 
              height={500} 
              objectFit="cover" 
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Slider;
