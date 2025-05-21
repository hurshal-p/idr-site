'use client'; // Required if using App Router

import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import './EmblaCarousel.css';

// import bangalore from '/images/bangalore-front.png'; 
// import delhi from '/images/delhi-front.png';
// import dubai from '/images/dubai-front.png';
// import kochi from '/images/kochi-front.png';
// import mumbai from '/images/mumbai-front.png';

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    speed: 4,
    axis: 'x',
  });

  const [canNext, setCanNext] = useState(false);
  const [canPrev, setCanPrev] = useState(false);

  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        setCanPrev(emblaApi.canScrollPrev());
        setCanNext(emblaApi.canScrollNext());
      };
      emblaApi.on('select', onSelect);
      onSelect();
      return () => emblaApi.off('select', onSelect);
    }
  }, [emblaApi]);

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <Image src={'/images/mumbai-front.png'} alt="Mumbai" width={1500} height={100}/>
          </div>
          <div className="embla__slide">
            <Image src={'/images/kochi-front.png'} alt="Kochi" width={1500}  height={100}/>
          </div>
          <div className="embla__slide">
            <Image src={'/images/bangalore-front.png'} alt="Bangalore"width={1500} height={100} />
          </div>
          <div className="embla__slide">
            <Image src={'/images/delhi-front.png'} alt="Delhi" width={1500} height={100}  />
          </div>
          <div className="embla__slide">
            <Image src={'/images/dubai-front.png'} alt="Dubai" width={1500} height={100} />
          </div>
        </div>
      </div>
      <button
        className={`embla__prev ${canPrev ? '' : 'is-disabled'}`}
        onClick={scrollPrev}
        disabled={!canPrev}
        aria-label="Previous Slide"
      >
        ‹
      </button>
      <button
        className={`embla__next ${canNext ? '' : 'is-disabled'}`}
        onClick={scrollNext}
        disabled={!canNext}
        aria-label="Next Slide"
      >
        ›
      </button>
    </div>
  );
}


