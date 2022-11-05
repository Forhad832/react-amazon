import React from 'react';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TestimonialsData } from '../../data/testimonials';
const Testimonial = () => {
  return (
    <div className='container px-4 py-20 mx-auto'>
        <Swiper className='grid grid-cols-1 gap-5 md:grid-cols-3'
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {TestimonialsData.map((item)=>{
                const {image,comment,name} = item;

           return (
         <SwiperSlide className='w-full'>
               <article className=' mt-16 flex flex-col gap-3 mb-10 bg-[#fff] rounded text-center'>
            <img className='w-20 mx-auto -mt-10 ' src={image} alt={name} />
            <p>{comment}</p>
            <hr />
            <h2 className='mb-3 font-semibold'>{name}</h2>
        </article>
         </SwiperSlide>
           )    
            })} 
      </div>
        </Swiper>
      
    </div>
  )
}

export default Testimonial
