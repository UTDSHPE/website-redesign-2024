import React, { useEffect, useRef, useState } from "react";
import Calendar from "./Calendar";
import { InstagramEmbed } from "react-social-media-embed";

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

      <div className="text-xl mt-24">
        <h1 className="text-shpe-red font-inter">
          Media & Updates
        </h1>
        <div className="h-1 w-[60%] my-6 mx-auto
        bg-gradient-to-r from-shpe-blue via-shpe-orange to-shpe-red rounded-full">
        </div>
      </div>
      {/* Instagram Section */}
      <div className="flex flex-wrap justify-center gap-4 my-8 ">
        <InstagramEmbed url="https://www.instagram.com/p/DJSP62MS_9z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={600} />
        <InstagramEmbed url="https://www.instagram.com/p/DAJYVOLRMUO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={600} />
        <InstagramEmbed url="https://www.instagram.com/p/DCM93xHxF3t/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={600} />
      </div>

      {/* Calendar Section */}
      <div className="px-4 mb-12">
        <Calendar />
      </div>
    </div>
  );
}
