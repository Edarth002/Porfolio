'use client'
import { useState } from "react";
import Image from "next/image";

// Import your images
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

// Slides
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

export default function CartwheelCarousel() {
  const [current, setCurrent] = useState(0);
  const radius = 650;

  const rotateWheel = (dir) => {
    setCurrent((prev) => (prev + dir + slides.length) % slides.length);
  };

  return (
    <section className="w-full h-screen flex items-center justify-center relative bg-white overflow-hidden">
      {/* Arrows */}
      <button
        onClick={() => rotateWheel(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-4xl text-blue-950 hover:scale-125 transition"
      >
        &#10094;
      </button>
      <button
        onClick={() => rotateWheel(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-4xl text-blue-950 hover:scale-125 transition"
      >
        &#10095;
      </button>

      {/* Carousel Container */}
      <div
        className="relative w-full h-full"
        style={{ perspective: "1500px" }}
      >
        <div
          className="absolute top-1/2 left-1/2"
          style={{
            transform: `translate(-50%, -50%) rotateY(-${(360 / slides.length) * current}deg)`,
            transformStyle: "preserve-3d",
            transition: "transform 1s ease",
          }}
        >
          {slides.map((slide, i) => {
            const angle = (360 / slides.length) * i;

            return (
              <a
                key={i}
                href={slide.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute w-64 h-80 bg-white border shadow-xl rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                }}
              >
                <Image
                  src={slide.img}
                  alt={`Project ${i + 1}`}
                  className="w-full h-full object-cover"
                  placeholder="blur"
                  priority
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
