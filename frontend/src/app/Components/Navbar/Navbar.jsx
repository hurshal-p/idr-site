'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react'; 
import './Navbar.css';
import Link from 'next/link';
import { useTheme } from '../../../contexts/ThemeContext'; 

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme(); 
  
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${sticky ? 'navbar-scrolled' : ''} ${isDarkMode ? 'dark-mode-navbar' : ''} `}>
      <Link href='/' scroll={true}>
        <Image 
          src='/images/idr-logo.png' 
          alt='IDR' 
          className='cornerlogo' 
          width={120} 
          height={75}
        />
      </Link>
      <ul className="">
        <li className="hover:scale-105 transition-all duration-200">
          <Link href='/howitworks' scroll={true}>How it works</Link>
        </li>
        <li className="hover:scale-105 transition-all duration-200">
          <Link href='/treatmentsandclinics' scroll={true}>Treatment & Clinics</Link>
        </li>
        <li className="hover:scale-105 transition-all duration-200">
          <Link href='/testimonials' scroll={true}>Testimonials</Link>
        </li>
        <li className="hover:scale-105 transition-all duration-200">
          <Link href="/contactus" scroll={true}>
            <button className="contact-btn">Contact Us</button>
          </Link>
        </li>
        <li>
          <button 
            onClick={toggleDarkMode} 
            className="dark-mode-toggle-btn"
            aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;