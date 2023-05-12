import { A11y }         from 'swiper';
import { EffectFade }   from 'swiper';
import { Navigation }   from 'swiper';
import { Pagination }   from 'swiper';
import   React          from "react";
import { Scrollbar }    from 'swiper';
import { Swiper }       from 'swiper/react';
import { SwiperSlide }  from 'swiper/react';
import { testimonials } from '../../database';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./TestimonialsCards.css"

const TestimonialsCards = () => {

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

          {testimonials.length && testimonials.map((testimonial) => 
            <SwiperSlide>
              <div className="h-24 w-80 max-[600px]:-ml-[130px] max-sm:w-72">
                <p className=" bg-neutral-800 p-4 pb-16 font-montserrat rounded-skill-card max-sm:w-64">
                  {testimonial.comment}
                </p>
                <div className="flex">
                  <img src={testimonial.profilePicture} alt="testimonial_picture" className=" max-h-24 rounded-middle border-solid border-4 border-neutral-600 -mt-12 ml-2 max-[500px]:max-h-18 max-[500px]:max-w-[100px]" />
                  <div className="flex flex-col">
                    <h1 className=" ml-2 mt-0 text-base">{testimonial.name}</h1>
                    <h1 className=" ml-2 mt-1 text-sm text-neutral-400">{testimonial.role}</h1>
                  </div>
                </div>
              </div> 
            </SwiperSlide>
          )}

        <div className="relative bottom-8 flex items-center justify-center mt-8">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default TestimonialsCards;
