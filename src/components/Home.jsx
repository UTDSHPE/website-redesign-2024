import React, { useEffect, useRef, useState } from "react";
import Calendar from "./Calendar";
import { InstagramEmbed } from "react-social-media-embed";
import './fullcalendar.css';
import logos from './common/Logos.js';
import InfiniteCarousel from './common/InfiniteCarousel.jsx'
import useIsMobile from '../hooks/useIsMobile.js'

export default function Home() {
  const isMobile = useIsMobile();
  const imageRef = useRef(null);
  const [maskHeight, setMaskHeight] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const hero = imageRef.current;
    if (!hero) return;

    const { offsetTop, offsetHeight } = hero;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          let progress = (scrollY - offsetTop) / (offsetHeight * 1.5);
          progress = Math.min(Math.max(progress, 0), 1);
          setMaskHeight((1 - progress) * 100);
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
    <div className="w-full h-full bg-gray-50 font-interTight pb-20">
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
            background: `linear-gradient(to bottom, rgba(249,250,251,0) 0%, rgba(249,250,251,1) ${maskHeight}%)`,
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
      <div className="text-center mb-12 mt-16">
        <h2 className={`${isMobile ? 'text-3xl' : 'text-5xl'} font-bold text-gray-900 mb-4 tracking-tight`}>
          Media & Updates
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
      </div>

      {/* Instagram Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-center gap-8 my-8 w-full">

          <div className="flex justify-center bg-white rounded-2xl shadow-sm border border-gray-200 p-4 hover:shadow-lg transition-shadow duration-300">
            <InstagramEmbed
              url="https://www.instagram.com/p/DJSP62MS_9z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              style={{ maxWidth: 350}}
            />
          </div>

          <div className="flex justify-center bg-white rounded-2xl shadow-sm border border-gray-200 p-4 hover:shadow-lg transition-shadow duration-300">
            <InstagramEmbed
              url="https://www.instagram.com/p/DAJYVOLRMUO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              style={{ maxWidth: 350, width: "100%" }}
            />
          </div>

          <div className="flex justify-center bg-white rounded-2xl shadow-sm border border-gray-200 p-4 hover:shadow-lg transition-shadow duration-300">
            <InstagramEmbed
              url="https://www.instagram.com/p/DCM93xHxF3t/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              style={{ maxWidth: 350, width: "100%" }}
            />
          </div>

        </div>
      </div>



      {/* Sponsors Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h2 className={`${isMobile ? 'text-3xl' : 'text-5xl'} font-bold text-gray-900 tracking-tight`}>
              Our Sponsors
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto sm:mx-0 mt-4"></div>
          </div>
          <a href="/Sponsor" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            Become a Sponsor
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 py-8">
          <InfiniteCarousel logos={logos} />
        </div>
      </div>

      {/* Calendar Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className={`${isMobile ? 'text-3xl' : 'text-5xl'} font-bold text-gray-900 mb-4 tracking-tight`}>
            Upcoming Events
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <Calendar />
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-2xl p-12 text-white shadow-xl">
          <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl'} font-bold mb-6 tracking-tight`}>
            Connect With Us
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Follow our journey and stay updated with the latest news, events, and opportunities from UTD SHPE.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://linktr.ee/SHPEUTD?fbclid=PAZXh0bgNhZW0CMTEAAad5LkTxdzhGd5avaYl0CG8sVL1zCbGiOvNu8s2MjawbxLzgFXcfPbbxLJPueg_aem_Omljavwg-uPiIyxA7XzKeA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              LinkTree
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScNSkWcBB6opW8gAc_o1UDilWk-7-natRsv6SOw9trSCN5f1A/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Join SHPE
            </a>
          </div>
        </div>
      </div>

    {/*End page*/}</div>
  );
}