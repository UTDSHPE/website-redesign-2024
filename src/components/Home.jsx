import React, { useEffect, useRef, useState } from "react";
import Calendar from "./Calendar";
import { InstagramEmbed } from "react-social-media-embed";
import './fullcalendar.css';
import InfiniteCarousel from './common/InfiniteCarousel.jsx'


export default function Home() {
  const imageRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const hero = imageRef.current;
    if (!hero) return;

    const { offsetTop, offsetHeight } = hero;

    function handleScroll() {
      const scrollY = window.scrollY;
      let progress = (scrollY - offsetTop) / (offsetHeight*.8);
      progress = Math.min(Math.max(progress, 0), 1); // Clamp between 0 and 1
      setScrollProgress(progress);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial run

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-full bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[100vh] overflow-hidden" ref={imageRef}>
        <img
          src="/photos/gala-officers.jpeg"
          className="w-full h-full object-cover transition-opacity duration-300"
          alt="Gala Officers"
          style={{ opacity: 1 - scrollProgress }}
        />

        {/* Centered Logo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            src="/logos/chapter-logos-horizontal-pngs/SHPE_logo_horiz_University of Texas Dallas_KO.png"
            alt="SHPE Logo"
          />
        </div>
      </div>

      <div className="text-md mt-24">
        <h1 className="text-shpe-red font-inter">
          Media & Updates
        </h1>
        <div className="h-1 w-[60%] my-2 mx-auto
        bg-gradient-to-r from-shpe-blue via-shpe-orange to-shpe-red rounded-full">
        </div>
      </div>
      {/* Instagram Section */}
      <div className=" flex flex-wrap items-center justify-center gap-4 my-8">
        <InstagramEmbed url="https://www.instagram.com/p/DJSP62MS_9z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={400} />
        <InstagramEmbed url="https://www.instagram.com/p/DAJYVOLRMUO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={400} />
        <InstagramEmbed url="https://www.instagram.com/p/DCM93xHxF3t/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={400} />
      </div>

      {/*Sponsors Section */}
      <div className="text-xs mt-24 max-w-[65%] mx-auto flex flex-wrap items-center">
        <h1 className="text-shpe-red font-inter text-left flex-1">
          Our Sponsors
        </h1>
        <div className="w-full sm:w-auto sm:ml-auto mt-6 sm:mt-0">
          <a href="/Sponsor" className="text-white text-sm py-3 px-4 bg-shpe-blue rounded-md">
            Become a Sponsor
          </a>
        </div>
      </div>


      <div className=" mt-4 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full"></div>
      <section className="flex items-center justify-center mt-1 max-w-[90%] mx-auto ">
        <InfiniteCarousel />
      </section> 
      <div className=" mt-1 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full"></div>


      {/* Calendar Section */}
      <div className="text-md mt-24">
        <h1 className="text-shpe-red font-inter">
          Calendar
        </h1>
      </div>

      <div className="px-4 pb-4 max-w-[70%] mx-auto border-2 rounded-lg my-6 border-gray-400">
        <Calendar />
      </div>

      
      


    </div>
  );
}
