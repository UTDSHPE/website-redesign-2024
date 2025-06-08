import React, { useRef, useState} from 'react'
import {Link} from 'react-router-dom';
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
      className="block" //makes anchor a block level wrapper
    >
      <div className="relative overflow-hidden rounded-lg group h-[250px] w-auto">
        {/* Image */}
        <img
          src={src}
          alt={name}
          className="object-cover w-full h-full transform transition-transform duration-1000 ease-in-out group-hover:scale-110"
        />

        {/* Company Name */}
        <div className="absolute bottom-0 left-0 p-2 text-white text-sm font-semibold bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-md">
          {name}
        </div>
      </div>
    </a>
  );
};

const SponsorGrid = () => (
  <div className="flex flex-wrap justify-center gap-6">
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


//main
const Sponsor = () => {
  const isMobile=useIsMobile();
  return (
    <div>


        <section className = " bg-white min-h-screen w-full mx-auto pb-24">

        <div className="py-8 bg-gray-900">
          <h1 className={clsx("font-medium text-white",isMobile?"text-4xl":"text-5xl")}>
              Corporate Partners
            </h1>
          </div>
        <div className="h-1 w-full bg-gradient-to-r from-shpe-blue via-shpe-orange to-shpe-red rounded-full " />
          <div className='mx-6 my-4'>
            <SponsorGrid/>
          </div>

        <div className="flex flex-col md:flex-row flex-wrap justify-center items-start gap-8 bg-white my-12 px-6">
          {/* Left section */}
          <div className="flex-1 min-w-[300px] max-w-[600px] text-left">
            <h2 className={clsx("text-black font-interTight font-normal leading-relaxed", isMobile ? "text-lg" : "text-2xl")}>
              The SHPE UTD Chapter deeply appreciates the generosity and support of our corporate partners. Your contributions help us grow as an organization, empower future Hispanic leaders in STEM, and promote a more inclusive and innovative community.
            </h2>
          </div>

          {/* Right section */}
          <div className="flex-1 min-w-[300px] max-w-[500px] flex flex-col gap-4 text-left">
            <div>
              <p className={clsx("text-black", isMobile ? "text-normal" : "text-lg")}>
                Interested in partnering with us? Email our Corporate Liaison at{' '}
                <Mailto email="utdshpe@gmail.com" subject="" body="" className="underline text-blue-600">
                  utdshpe@gmail.com
                </Mailto>.
              </p>
              <p className={clsx("text-gray-500 my-1 max-w-[80%]", isMobile ? "text-sm" : "text-base")}>
                SHPE is a non-profit 501(c)3 organization. Contributions to SHPE are tax deductible.
              </p>
            </div>

            {/*Button*/}
            <a href="/files/SponsorshipPacket.pdf" target="_blank"
              rel="noopener noreferrer"
              className={clsx(" rounded-full bg-shpe-blue text-white text-center flex items-center mx-auto font-semibold shadow-lg hover:bg-shpe-blue2 transition-colors",
                isMobile ? "w-32 h-32 text-sm" :"w-40 h-40 text-lg")}>
              View Corporate Packet
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center w-max mx-auto">
          <h1 className={clsx("mt-10 font-interTight font-medium text-black w-max", isMobile ? "text-4xl" : "text-5xl")}>
            Sponsorship Tiers
          </h1>
          <div className="mt-2 w-[150%] h-0.5 bg-gradient-to-r from-transparent via-black to-transparent" />
        </div>


        <div className='max-w h-1 '></div>
        <CardCarousel/>
        <h3 className="">

        </h3>




        </section>{/*White section */}
    </div>
  );
}


export default Sponsor