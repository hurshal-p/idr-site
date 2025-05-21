'use client';  // This marks the file as a client component

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Link from 'next/link';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      console.log('Scroll Y:', window.scrollY);
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${sticky ? 'dark-nav' : ''} `}>
      <Link href='/' scroll={true}>
        <Image 
          src='/images/idr-logo.png' 
          alt='IDR' 
          className='cornerlogo' 
          width={120} 
          height={75}
        />
      </Link>
      <ul className="space-x-8">
        <li className="text-white hover:text-black hover:scale-105 transition-all duration-200">
          <Link href='/howitworks' scroll={true}>How it works</Link>
        </li>
        <li className="text-white hover:text-black hover:scale-105 transition-all duration-200">
          <Link href='/treatmentsandclinics' scroll={true}>Treatment & Clinics</Link>
        </li>
        <li className="text-white hover:text-black hover:scale-105 transition-all duration-200">
          <Link href='/testimonials' scroll={true}>Testimonials</Link>
        </li>
        <li className="text-white hover:text-black hover:scale-105 transition-all duration-200">
          <Link href="/contactus" scroll={true}>
    <button className="contact-btn">Contact Us</button>
         </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;