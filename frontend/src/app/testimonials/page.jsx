'use client';

import { useEffect, useState } from 'react';
import Hero from "@/app/Components/Hero/Hero";
import TestimonialSlider from '@/app/Components/TestimonialSlider/TestimonialSlider';
import TestimonialForm from '@/app/Components/TestimonialForm/TestimonialForm';
import './page.css';

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const res = await fetch('http://localhost:8000/api/testimonials/');
        if (res.ok) {
          const data = await res.json();
          setTestimonials(data);
        } else {
          console.error('Error fetching testimonials:', res.status);
        }
      } catch (err) {
        console.error('Failed to fetch testimonials:', err);
      }
    }
    fetchTestimonials();
  }, []);

  return (
    <div className="bg-[#f0f9fa] min-h-screen">
      <Hero src='/images/testimonialshero.jpg' />

      <div className="flex flex-col text-center px-6 md:px-16 -mt-64 relative z-50">
        <h1
          id='whatourpatientssay'
          className="text-7xl font-bold text-shadow-[2px_2px_4px_#186466] text-white mb-12"
        >
          What Our Patients Say
        </h1>

        <div className="w-full max-w-full px-4 md:px-8 lg:px-12 mx-auto overflow-hidden mb-16">
          <TestimonialSlider testimonials={testimonials} />
        </div>

      </div>

        <div className="w-full max-w-2xl mx-auto">
          <TestimonialForm setTestimonials={setTestimonials} />
        </div>
     
    </div>
  );
}
