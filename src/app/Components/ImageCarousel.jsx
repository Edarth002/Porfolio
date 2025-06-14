// components/CartwheelCarousel.jsx
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

const slides = [
  { img: w, link: "https://news-hompage-main.vercel.app" },
  { img: multi, link: "https://multi-step-form-rho-sooty.vercel.app" },
  { img: testimonial, link: "https://tailwind-testimonial-grid-section.netlify.app" },
  { img: tip_calc, link: "https://tip-calculculate.netlify.app" },
  { img: snap, link: "https://intro-sect111.netlify.app" },
  { img: chart, link: "https://expenses-layout.vercel.app" },
];

export default function CartwheelCarousel() {
  const [current, setCurrent] = useState(0);
  const radius = 300; // distance from center

  const rotateWheel = (dir) => {
    setCurrent((prev) => (prev + dir + slides.length) % slides.length);
  };

  return (
    <div className="w-full h-[400px] flex flex-col items-center justify-center overflow-hidden relative">
      <div className="w-full flex justify-between px-8 absolute top-1/2 -translate-y-1/2 z-10">
        <button onClick={() => rotateWheel(-1)} className="text-4xl font-bold text-blue-950 hover:scale-125 transition">&#10094;</button>
        <button onClick={() => rotateWheel(1)} className="text-4xl font-bold text-blue-950 hover:scale-125 transition">&#10095;</button>
      </div>

      <div
        className="relative w-full h-full"
        style={{
          perspective: "1000px",
        }}
      >
        <div
          className="absolute top-1/2 left-1/2"
          style={{
            transformStyle: "preserve-3d",
            transform: `translate(-50%, -50%) rotateY(-${(360 / slides.length) * current}deg)`,
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
                className="absolute w-48 h-64 overflow-hidden rounded-xl shadow-lg bg-white hover:scale-105 transition-transform duration-300"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                }}
              >
                <Image
                  src={slide.img}
                  alt={`Project ${i + 1}`}
                  className="object-cover w-full h-full"
                  placeholder="blur"
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
