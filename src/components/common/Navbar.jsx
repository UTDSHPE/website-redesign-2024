import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/team", label: "Team" },
    { to: "/sponsor", label: "Sponsorship" },
    { to: "/contact", label: "Contact Us" }
  ];

  return (
    <>
      <div className='w-full flex flex-row justify-between items-center mx-auto py-4 px-4 md:px-12 gap-8'>
        <Link to="/">
          <img
            src="/logos/chapter-logos-horizontal-pngs/SHPE_logo_horiz_University of Texas Dallas_DKBG.png"
            alt="SHPE UTD Logo"
            className='w-[400px]'
          />
        </Link>
        <ul className='hidden md:flex flex-row max-w-[1000px] gap-12 items-center text-xl'>
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className='hover:border-b-2	'>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className='md:hidden'>
          <button
            onClick={toggleMenu}
            className='z-50 relative'
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <>x</> : <>=</>}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className='inset-0 z-40 md:hidden'>
          <ul className='flex flex-col items-center justify-start h-full space-y-8 text-2xl'>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={toggleMenu}
                  className='hover:border-b-2	'
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

    </>
  )
}

export default Navbar