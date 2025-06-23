'use client';
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
import moonandearthauto from '../../../public/Images/moonandearthauto.png';
import inspirationscomputers from '../../../public/Images/inspirationscomputers.png';
import priceboard from '../../../public/Images/priceboard.png';

const projects = [
  { img: w, link: 'https://news-hompage-main.vercel.app', name: 'News Homepage' },
  { img: multi, link: 'https://multi-step-form-rho-sooty.vercel.app', name: 'Multi-Step Form' },
  { img: testimonial, link: 'https://tailwind-testimonial-grid-section.netlify.app', name: 'Testimonial Grid' },
  { img: tip_calc, link: 'https://tip-calculculate.netlify.app', name: 'Tip Calculator' },
  { img: snap, link: 'https://intro-sect111.netlify.app', name: 'Snap Section' },
  { img: chart, link: 'https://expenses-layout.vercel.app', name: 'Expenses Dashboard' },
  { img: Nig, link: 'https://docs.google.com/document/d/11u_-Uj3cDwK2pbQSEdVEmjkhwUibcQItdIKTe628-HQ/edit?usp=sharing', name: 'Nigerian Fintech Report' },
  { img: Elon, link: 'https://docs.google.com/document/d/1suNkfM_9dXxIfUT9kikwYeX2B72p3Y_JuG3VSDd7FtU/edit?usp=sharing', name: 'Elon Musk Report' },
  { img: Biden, link: 'https://docs.google.com/document/d/13irOaUNvuyslf_cJTQpbtSfDiufxZcXdGMQZa3YAXcE/edit?usp=sharing', name: 'Biden Analysis' },
  { img: responsive, link: 'https://ornate-kringle-6fad6d.netlify.app', name: 'Responsive Preview' }
  { img: moonandearthauto, link: 'moonandearthauto.com', name: 'Moon & Earth Auto' },
  { img: inspirationscomputers, link: 'inspirationscomputers.com', name: 'Inspirations Computers' },
  { img: priceboard, link: 'price-board-frontend.vercel.app', name: 'Price Board' },
];

export default function ProjectShowcase() {
  return (
    <section className="w-full py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-950">My Portfolio Projects</h2>
        <p className="text-gray-600 mt-2">Click to view live demos or documents</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="group rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transform hover:scale-[1.03] transition duration-300"
          >
            <div className="relative w-full h-60">
              <Image
                src={project.img}
                alt={project.name}
                fill
                className="object-cover group-hover:opacity-90 transition duration-300"
                placeholder="blur"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-950">{project.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
