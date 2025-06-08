import React from 'react'
import Mailto from './Mailto'
import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import clsx from 'clsx'
import useIsMobile from '../../hooks/useIsMobile.js'

const SocialIcon = ({ icon: Icon, url, size, className }) => (
  <a href={url} target="_blank" rel="noopener noreferrer"
    className={clsx("p-2 hover:gray-300 transition", className)}>
    <Icon size={size} />
  </a>
);

const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <div className={clsx(
      "flex flex-row justify-between flex-nowrap text-white",
      isMobile ? 'gap-x-5 px-2 pt-8 pb-5 items-center' : 'gap-x-6 px-8 pt-16 pb-10 items-start'
    )}>

      {/* Column 1: Mailing Address - Hidden on mobile */}
      {!isMobile && (
        <div className="flex flex-col font-interTight text-left max-w-xs">
          <h1 className="text-lg">Mailing Address</h1>
          <p className="text-normal text-gray-300 mt-1 leading-normal">
            800 W Campbell Rd<br />Richardson, TX 75080
          </p>
        </div>
      )}

      {/* Column 2: Logo and Socials */}
      <div className={clsx("flex flex-col items-center text-center", isMobile ? 'max-w-64 mx-auto ' : 'max-w-lg')}>
        <a href="/" className="flex">
          <img
            src="/logos/chapter-logos-horizontal-pngs/SHPE_logo_horiz_University of Texas Dallas_KO.png"
            alt="SHPE Logo"
          />
        </a>
        <div className="h-1 bg-gradient-to-r from-transparent via-white to-white w-full mt-4" />
        <div className={clsx("flex flex-row gap-x-2 justify-center", isMobile ? 'mt-1' : 'mt-2')}>
          <SocialIcon icon={FaDiscord} url="https://discord.gg/kAu8JpeUGB" size={isMobile ? 16 : 24} />
          <SocialIcon icon={FaInstagram} url="https://www.instagram.com/shpeutd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" size={isMobile ? 16 : 24} />
          <SocialIcon icon={FaLinkedin} url="https://www.linkedin.com/company/shpe-utd/" size={isMobile ? 16 : 24} />
          <SocialIcon icon={FaSquareXTwitter} url="https://x.com/shpeUTD" size={isMobile ? 16 : 24} />
        </div>
      </div>

      {/* Column 3: Email - Hidden on mobile */}
      {!isMobile && (
        <div className="flex flex-col font-interTight font-normal text-left max-w-xs">
          <h1 className="text-lg">Email:</h1>
          <Mailto
            email="utdshpe@gmail.com"
            subject=""
            body=""
            className="text-blue-500 font-normal hover:text-blue-300 transition-colors text-normal leading-snug"
          >
            utdshpe@gmail.com
          </Mailto>
        </div>
      )}

    </div>
  );
};

export default Footer;
