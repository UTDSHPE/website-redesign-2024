import React, { useEffect, useRef, useState } from "react";
import Calendar from "./Calendar";
import { InstagramEmbed } from "react-social-media-embed";
import './fullcalendar.css';
import InfiniteCarousel from './common/InfiniteCarousel.jsx'

export default function Home() {
  const imageRef = useRef(null);
  const [maskHeight, setMaskHeight] = useState(0);
  const containerRef =useRef(null);
  const [isVisible,setIsVisible] = useState(false);

  const callbackFunction = 
  useEffect(() => {
    const hero = imageRef.current;
    if (!hero) return;

    const { offsetTop, offsetHeight } = hero;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;//Y scroll position in pixels
          let progress = (scrollY - offsetTop) / (offsetHeight *1.5);//scrollY is scroll-start of hero image(navbar above)
          //offsetHeight is height of image, so decimal multiplier controls how much and hence how fast it fades on scroll
          progress = Math.min(Math.max(progress, 0), 1);//keeps progess positive with the max, keeps progress under 1 with the min
          setMaskHeight((1-progress) * 100);//set mask height as scrollprogress
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-full bg-white pb-20 ">
      {/* Hero Section */}
      <div className="relative w-full h-[100vh] overflow-hidden" ref={imageRef}>
        <img
          src="/photos/gala-officers.jpeg"
          className="w-full h-full object-cover"
          alt="Gala Officers"
        />

        {/* Gradient Mask Overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) ${maskHeight}%)`,
            transition: 'background 0.1s ease-out',
          }}
        ></div>

        {/* Centered Logo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            src="/logos/chapter-logos-horizontal-pngs/SHPE_logo_horiz_University of Texas Dallas_KO.png"
            alt="SHPE Logo"
            className="max-w-[60vw] md:max-w-[40vw]"
          />
        </div>
      </div>

      {/* Media & Updates title */}
      <div className="text-xs">
        <h1 className="text-shpe-red font-interTight font-semibold ">
          Media & Updates
          <div className="h-1 w-auto my-2 mx-auto bg-gradient-to-r from-shpe-blue via-shpe-orange to-shpe-red rounded-full"></div>
        </h1>
       
      </div>

      {/* Instagram Section */}
      <div className="flex flex-wrap justify-center gap-4 my-8 w-full">
        <div className="flex-[1_1_300px] max-w-[350px] min-w-[250px]">
          <InstagramEmbed url="https://www.instagram.com/p/DJSP62MS_9z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
        </div>
        <div className="flex-[1_1_300px] max-w-[350px] min-w-[250px]">
          <InstagramEmbed url="https://www.instagram.com/p/DAJYVOLRMUO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
        </div>
        <div className="flex-[1_1_300px] max-w-[350px] min-w-[250px]">
          <InstagramEmbed url="https://www.instagram.com/p/DCM93xHxF3t/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="text-xs mt-24 max-w-[65%] mx-auto flex flex-wrap items-center">
        <h1 className="text-shpe-red font-interTight font-bold text-left flex-1">
          Our Sponsors
        </h1>
        <div className="w-full sm:w-auto sm:ml-auto mt-6 sm:mt-0 hover:scale-105 transition-all ">
          <a href="/Sponsor" className="text-white text-sm py-3 px-4 bg-shpe-blue rounded-md font-interTight font-semibold">
            Become a Sponsor
          </a>
        </div>
      </div>

      <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full"></div>
      <section className="flex items-center justify-center mt-1 max-w-[90%] mx-auto">
        <InfiniteCarousel />
      </section>
      <div className="mt-1 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full"></div>

      {/* Calendar Section */}
      <div className="text-xs mt-12">
        <h1 className="text-shpe-red font-interTight font-bold">
          Calendar
        </h1>
      </div>

      <div className="px-4 pb-4 max-w-[70%] mx-auto border-2 rounded-lg my-4 border-gray-400">
        <Calendar />
      </div>
    
    
    </div >
  );
}
