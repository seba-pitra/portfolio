import { A11y }        from 'swiper';
import { EffectFade }  from 'swiper';
import { Navigation }  from 'swiper';
import { Pagination }  from 'swiper';
import   React         from "react";
import { Scrollbar }   from 'swiper';
import { Swiper }      from 'swiper/react';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./TestimonialsCards.css"

import testimonial1 from "../../img/testimonials-1.jpg";
import testimonial2 from "../../img/testimonials-2.jpg";
import testimonial3 from "../../img/testimonials-3.jpg";
import testimonial4 from "../../img/testimonials-4.jpg";
import testimonial5 from "../../img/testimonials-5.jpg";

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
        
        <SwiperSlide>
          <div className="h-24 w-80 max-[600px]:-ml-[130px] max-sm:w-72">
            <p className=" bg-neutral-800 p-4 pb-16 font-montserrat rounded-skill-card max-sm:w-64">
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora est enim vero illo numquam eum officia, ut incidunt dolores reiciendis rem, laborum inventore nemo? Maiores quam voluptates enim amet consequuntur."
            </p>
            <div className="flex">
              <img src={testimonial1} alt="testimonial_picture" className=" max-h-24 rounded-middle border-solid border-4 border-neutral-600 -mt-12 ml-2 max-[500px]:max-h-18 max-[500px]:max-w-[100px]" />
              <h1 className=" ml-2 mt-2">Ceo & Founder at CONIN</h1>
            </div>
          </div> 
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-24 w-80 max-[600px]:-ml-[130px] max-sm:w-72">
            <p className=" bg-neutral-800 p-4 pb-16 font-montserrat rounded-skill-card max-sm:w-64">
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora est enim vero illo numquam eum officia, ut incidunt dolores reiciendis rem, laborum inventore nemo? Maiores quam voluptates enim amet consequuntur."
            </p>
            <div className="flex">
              <img src={testimonial2} alt="testimonial_picture" className=" max-h-24 rounded-middle border-solid border-4 border-neutral-600 -mt-12 ml-2 max-[500px]:max-h-18 max-[500px]:max-w-[100px]" />
              <h1 className=" ml-2 mt-2">Ceo & Founder at CONIN</h1>
            </div>
          </div> 
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-24 w-80 max-[600px]:-ml-[130px] max-sm:w-72">
            <p className=" bg-neutral-800 p-4 pb-16 font-montserrat rounded-skill-card max-sm:w-64">
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora est enim vero illo numquam eum officia, ut incidunt dolores reiciendis rem, laborum inventore nemo? Maiores quam voluptates enim amet consequuntur."
            </p>
            <div className="flex">
              <img src={testimonial4} alt="testimonial_picture" className=" max-h-24 rounded-middle border-solid border-4 border-neutral-600 -mt-12 ml-2 max-[500px]:max-h-18 max-[500px]:max-w-[100px]" />
              <h1 className=" ml-2 mt-2">Ceo & Founder at CONIN</h1>
            </div>
          </div> 
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-24 w-80 max-[600px]:-ml-[130px] max-sm:w-72">
            <p className=" bg-neutral-800 p-4 pb-16 font-montserrat rounded-skill-card max-sm:w-64">
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora est enim vero illo numquam eum officia, ut incidunt dolores reiciendis rem, laborum inventore nemo? Maiores quam voluptates enim amet consequuntur."
            </p>
            <div className="flex">
              <img src={testimonial3} alt="testimonial_picture" className=" max-h-24 rounded-middle border-solid border-4 border-neutral-600 -mt-12 ml-2 max-[500px]:max-h-18 max-[500px]:max-w-[100px]" />
              <h1 className=" ml-2 mt-2">Ceo & Founder at CONIN</h1>
            </div>
          </div> 
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-24 w-80 max-[600px]:-ml-[130px] max-sm:w-72">
            <p className=" bg-neutral-800 p-4 pb-16 font-montserrat rounded-skill-card max-sm:w-64">
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora est enim vero illo numquam eum officia, ut incidunt dolores reiciendis rem, laborum inventore nemo? Maiores quam voluptates enim amet consequuntur."
            </p>
            <div className="flex">
              <img src={testimonial5} alt="testimonial_picture" className=" max-h-24 rounded-middle border-solid border-4 border-neutral-600 -mt-12 ml-2 max-[500px]:max-h-18 max-[500px]:max-w-[100px]" />
              <h1 className=" ml-2 mt-2">Ceo & Founder at CONIN</h1>
            </div>
          </div> 
        </SwiperSlide>

        <div className="relative bottom-8 flex items-center justify-center mt-8">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default TestimonialsCards;
