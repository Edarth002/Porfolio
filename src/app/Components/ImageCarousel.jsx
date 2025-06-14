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
    <section className="w-full min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden py-16">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-12 tracking-tight animate-pulse">
        Explore My Projects
      </h2>

      {/* Arrows */}
      <button
        onClick={() => rotateWheel(-1)}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 text-5xl text-blue-950 hover:text-blue-700 hover:scale-125 transition-all duration-300 bg-white/80 rounded-full p-3 shadow-lg"
      >
        ❮
      </button>
      <button
        onClick={() => rotateWheel(1)}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 text-5xl text-blue-950 hover:text-blue-700 hover:scale-125 transition-all duration-300 bg-white/80 rounded-full p-3 shadow-lg"
      >
        ❯
      </button>

      {/* Carousel Container */}
      <div
        className="relative w-full h-[600px] md:h-[700px]"
        style={{ perspective: "1500px" }}
      >
        <div
          className="absolute top-1/2 left-1/2"
          style={{
            transform: `translate(-50%, -50%) rotateY(-${(360 / slides.length) * current}deg)`,
            transformStyle: "preserve-3d",
            transition: "transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
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
                className="absolute w-72 h-96 bg-white border border-gray-200 shadow-2xl rounded-2xl overflow-hidden hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-500 ease-out"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                }}
              >
                <Image
                  src={slide.img}
                  alt={`Project ${i + 1}`}
                  className="w-full h-full object-cover rounded-2xl"
                  placeholder="blur"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white text-lg font-semibold p-4">Project {i + 1}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>
    </section>
  );
}
