import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import logos from './common/Logos.js';
import Mailto from './common/Mailto.jsx';
import clsx from 'clsx';
import useIsMobile from '../hooks/useIsMobile.js'
import CardCarousel from './common/cardCarousel.jsx';

const companyImages = [
  { name: "Capital One", src: "/photos/SponsorImages/CapitalOne.jpg", url: "https://www.capitalone.com/" },
  { name: "JPMorgan Chase", src: "/photos/SponsorImages/jpmorgan.jpg", url: "https://www.chase.com/" },
  { name: "Emerson", src: "/photos/SponsorImages/emerson.jpg", url: "https://www.emerson.com/en-us" },
  { name: "GEICO", src: "/photos/SponsorImages/geico.jpg", url: "https://www.geico.com/" },
  { name: "Microsoft", src: "/photos/SponsorImages/microsoft.jpg", url: "https://www.microsoft.com/en-us/" },
  { name: "Qorvo", src: "/photos/SponsorImages/qorvo.jpg", url: "https://www.qorvo.com/" },
  { name: "Texas Instruments", src: "/photos/SponsorImages/ti.jpg", url: "https://www.ti.com/" },
  { name: "Goldman Sachs", src: "/photos/SponsorImages/goldmansachs.jpg", url: "https://www.goldmansachs.com/" },
];

const SponsorCard = ({ name, src, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      className="block hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative overflow-hidden rounded-2xl shadow-sm border border-gray-200 group h-[250px] w-auto bg-white">
        <img
          src={src}
          alt={name}
          className="object-cover w-full h-full transform transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white font-semibold text-lg">{name}</p>
        </div>
      </div>
    </a>
  );
};

const SponsorGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    {companyImages.map((sponsor, index) => (
      <SponsorCard
        key={index}
        name={sponsor.name}
        src={sponsor.src}
        url={sponsor.url}
      />
    ))}
  </div>
);

const Sponsor = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gray-50 font-interTight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Corporate <span className="">Partners</span>
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            The SHPE UTD Chapter deeply appreciates the generosity and support of our corporate partners.
            Your contributions help us grow as an organization, empower future Hispanic leaders in STEM,
            and promote a more inclusive and innovative community.
          </p>
        </div>

        {/* Sponsor Grid Section */}
        <div className="mb-20">
          <SponsorGrid />
        </div>

        {/* Partnership Information Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-300 p-10 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Partner With Us</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Interested in partnering with us? We'd love to hear from you and explore how we can work together
              to support Hispanic students in STEM fields.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Email our Corporate Liaison at{' '}
              <Mailto
                email="utdshpe@gmail.com"
                subject=""
                body=""
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                utdshpe@gmail.com
              </Mailto>
            </p>
            <p className="text-gray-500 text-base">
              SHPE is a non-profit 501(c)3 organization. Contributions to SHPE are tax deductible.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-300 p-10 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-center items-center text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sponsorship Information</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-8">
              Download our comprehensive sponsorship packet to learn more about partnership opportunities
              and the benefits of supporting SHPE at UTD.
            </p>
            <a
              href="/files/SponsorshipPacket.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              View Corporate Packet
            </a>
          </div>
        </div>

        {/* Sponsorship Tiers Section */}
        <div className="mb-16">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Sponsor
              <span className="bg-gradient-to-r from-shpe-red to-shpe-blue bg-clip-text text-transparent">SHPE </span>
               Tiers
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12">
            <CardCarousel />
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-2xl p-12 text-white shadow-xl">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Ready to Partner?</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Join our mission to empower Hispanic students in STEM and create lasting impact in our community.
          </p>
          <Mailto
            email="utdshpe@gmail.com"
            subject="Partnership Inquiry"
            body="Hello, I'm interested in learning more about partnership opportunities with SHPE at UTD."
            className="inline-block bg-white text-blue-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Get In Touch
          </Mailto>
        </div>
      </div>
    </div>
  );
}

export default Sponsor