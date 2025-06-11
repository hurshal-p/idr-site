'use client'; 
import React from 'react';
import Navbar from '@/app/Components/Navbar/Navbar.jsx';
import Image from 'next/image';
import './page.css'; 
import '@/app/Components/Navbar/Navbar.css';
import Hero from '@/app/Components/Hero/Hero.jsx';
// import src from '/images/dentistbg.jpg';
import Paragraph from '@/app/Components/Paragraph/Paragraph.jsx';
import EmblaCarousel from '@/app/Components/EmblaCarousel/EmblaCarousel.jsx';
import Title from '@/app/Components/Title/Title';
import MVV from '@/app/Components/MVV/MVV';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="home">
      
     
        <div className='relative'><Hero src='/images/dentistbg.jpg'/></div>

        <div className="relative inset-0 z-10 flex items-center justify-center p-4">
        <h1 className="text-white  font-bold text-5xl
                       [text-shadow:_2px_2px_4px_#186466] translate-y-[-65vh] text-center">
          Transforming smiles - a new era in dental tourism
        </h1>
        </div>

        
       <div className='daetd'><div className="relative justify-center flex items-center">
  <div className="translate-y-[-55vh] text-white font-medium text-5xl [text-shadow:_2px_2px_4px_#186466] w-[60%] text-center">
    <Paragraph content="Dentists are expensive these days. So save your money, and take a trip to India. Experience the beauty of the country all while undergoing treatment by some of the world's best dentists." />
  </div>
      </div>

         <div className="contactbtn2container"> <Link href="/contactus">
    <button className="contact-btn2">Contact Us</button>
         </Link>
         </div>
   

        </div>

          <Title title='Take your pick' subtitle='Which city are you going to?' />
          <div className="mt-100"><EmblaCarousel/></div>
        <div className="mvvtext"><Title subtitle='MISSION, VISION AND VALUES' title='How we ensure quality dental service'/></div>
          <MVV/>
          
    </div>
  );
};

export default HomePage;
