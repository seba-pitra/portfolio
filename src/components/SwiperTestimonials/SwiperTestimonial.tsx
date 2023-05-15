import { A11y }         from 'swiper';
import { EffectFade }   from 'swiper';
import { Navigation }   from 'swiper';
import { Pagination }   from 'swiper';
import   React          from "react";
import { Scrollbar }    from 'swiper';
import { Swiper }       from 'swiper/react';
import { SwiperSlide }  from 'swiper/react';
import { testimonials } from '../../database';
import TestimonialCard from '../TestimonialsCard/TestimonialCard';
import { ITestimonial } from '../../types/databaseTypes';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./SwiperTestimonials.css"

const SwiperTestimonials: React.FC = () => {

  return (
    <div>
      <h2
        className="text-lg font-medium p-0 m-0 tracking-wide
      uppercase text-gray-400 after:w-32 after:h-line-title after:inline-block after:bg-blue-400 
      after:mt-1 after:mb-1 after:ml-1 after:mr-1"
      >
        Testimonials
      </h2>

      <Swiper
        modules={[Navigation, EffectFade, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={"auto"}
        scrollbar={{ draggable: true }}
        effect={'coverflow'}
        grabCursor={true}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: "none",
          prevEl: 'none',
        }} 
        className=' w-4/5 mt-0 mb-0 ml-auto mr-auto '>

          {testimonials.length && testimonials.map((testimonial: ITestimonial) => 
            <SwiperSlide>
              <TestimonialCard 
              name={testimonial.name}
              comment={testimonial.comment}
              profilePicture={testimonial.profilePicture}
              role={testimonial.role} />
            </SwiperSlide>
          )}

        <div className="relative bottom-8 flex items-center justify-center mt-8">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperTestimonials;