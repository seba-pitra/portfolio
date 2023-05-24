

import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import SwiperTestimonials from '../SwiperTestimonials/SwiperTestimonial'

export const AboutTestimonials = () => {

  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  const handleScroll = () => {
    const testimonialsElement: HTMLDivElement = testimonialsRef.current as HTMLDivElement;

    if (testimonialsElement && testimonialsElement.getBoundingClientRect().top < window.innerHeight) {
      testimonialsElement.className = "transition-opacity opacity-100 duration-[1.5s] ease-in-out" ;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={testimonialsRef} className="translate-y-2 opacity-0">
      <SwiperTestimonials />
    </div>
  )
}
