'use client';

import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import './TestimonialSlider.css';

export default function TestimonialSlider({ testimonials }) {
  const swiperRef = useRef(null);
  const [maxVisibleSlides, setMaxVisibleSlides] = useState(3);

  const breakpoints = {
    320: 1,
    640: 2,
    1024: 3,
    1440: 4,
    1920: 5,
  };

  useEffect(() => {
    function updateMaxVisible() {
      const width = window.innerWidth;
      let slides = 1;
      const sorted = Object.keys(breakpoints).map(Number).sort((a, b) => a - b);
      for (const bp of sorted) {
        if (width >= bp) slides = breakpoints[bp];
      }
      setMaxVisibleSlides(slides);
    }
    updateMaxVisible();
    window.addEventListener('resize', updateMaxVisible);
    return () => window.removeEventListener('resize', updateMaxVisible);
  }, []);

  if (!testimonials || testimonials.length === 0) {
    return <p className="text-center">No testimonials yet.</p>;
  }

  const shouldCenter = testimonials.length < maxVisibleSlides;

  return (
    <div className="w-full max-w-full px-8 md:px-16 lg:px-24 mx-auto relative">
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-transparent transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white hover:text-black transition-colors duration-300 ease-in-out"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-transparent transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white hover:text-black transition-colors duration-300 ease-in-out"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView="auto"       // use auto so fixed slide width is respected
        spaceBetween={40}
        pagination={{ clickable: true }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        centeredSlides={shouldCenter}
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id} style={{ marginBottom: '3rem', width: 400 /* fixed width for slide */ }}>
            <div className="testimonial-card padding: 2rem">
              <p id='testimonialstext'className="text-xl leading-relaxed">"{t.message}"</p>
              <p id='testimonialstext' className="mt-6 font-semibold text-2xl">- {t.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
