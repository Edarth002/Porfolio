import { useState, useEffect } from "react";
import Image from "next/image";

// Import images
import w from "../../../public/Images/W.png";
import multi from "../../../public/Images/multistep-form.png";
import testimonial from "../../../public/Images/testimonial.png";
import tip_calc from "../../../public/Images/tip-calc.png";
import snap from "../../../public/Images/snap.png";
import chart from "../../../public/Images/Chart.png";
import Nig from "../../../public/Images/NigerianFintech.jpg";
import Elon from "../../../public/Images/ElonMusk.jpg";
import Biden from "../../../public/Images/Biden.jpg";
import responsive from "../../../public/Images/Responsive.png";
import ecommerce from "../../../public/Images/Ecommerce.png";
import moonandearthauto from "../../../public/Images/moonandearthauto.png";
import inspirationscomputers from "../../../public/Images/inspirationscomputers.png";
import priceboard from "../../../public/Images/priceboard.png";

// Combine images and links properly
const slides = [
  { img: w, link: "https://news-hompage-main.vercel.app" },
  { img: multi, link: "https://multi-step-form-rho-sooty.vercel.app" },
  { img: testimonial, link: "https://tailwind-testimonial-grid-section.netlify.app" },
  { img: tip_calc, link: "https://tip-calculculate.netlify.app" },
  { img: snap, link: "https://intro-sect111.netlify.app" },
  { img: chart, link: "https://expenses-layout.vercel.app" },
  { img: Nig, link: "https://docs.google.com/document/d/11u_-Uj3cDwK2pbQSEdVEmjkhwUibcQItdIKTe628-HQ/edit?usp=sharing" },
  { img: Elon, link: "https://docs.google.com/document/d/1suNkfM_9dXxIfUT9kikwYeX2B72p3Y_JuG3VSDd7FtU/edit?usp=sharing" },
  { img: Biden, link: "https://docs.google.com/document/d/13irOaUNvuyslf_cJTQpbtSfDiufxZcXdGMQZa3YAXcE/edit?usp=sharing" },
  { img: responsive, link: "https://ornate-kringle-6fad6d.netlify.app" },
  { img: ecommerce, link: "#" },
  { img: moonandearthauto, link: "#" },
  { img: inspirationscomputers, link: "#" },
  { img: priceboard, link: "#" },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  const validSlides = slides.filter((slide) => slide.link !== "#");

  useEffect(() => {
    const updateSlidesToShow = () => {
      setSlidesToShow(window.innerWidth < 768 ? 1 : 3);
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % validSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [validSlides.length, isPaused]);

  return (
    <div
      className="relative overflow-hidden w-full py-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          width: `${(validSlides.length / slidesToShow) * 100}%`,
          transform: `translateX(-${(currentIndex * 100) / validSlides.length}%)`,
        }}
      >
        {validSlides.map((slide, index) => (
          <a
            key={index}
            href={slide.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-1/2 md:w-1/3 px-2 shrink-0"
          >
            <div className="bg-white shadow-md hover:scale-105 transition-transform duration-300 rounded-xl overflow-hidden">
              <Image
                src={slide.img}
                alt={`Slide ${index + 1}`}
                className="w-full h-60 object-cover"
                placeholder="blur"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
