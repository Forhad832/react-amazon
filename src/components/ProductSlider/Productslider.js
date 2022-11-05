import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SliderProducts } from '../../data/products';
// Import Swiper styles
import 'swiper/css';
const Productslider = () => {
  return (
    <div className='container mx-auto px-4'>
    
  <div className="py-20 ">
  <Swiper className='flex items-center justify-center'
       modules={[Pagination,Navigation]}
       loop={true}
       slidesPerView={3}
       spaceBetween={30}
       navigation={{clickable :true}}
      
    >
      <div className="w-[80%] mx-auto">
      <div className="grid grid-cols-3  items-center justify-items-center gap-10 py-20">
      
        
      {SliderProducts.map((prodcut)=>{
  const {name,detail,price,img} = prodcut
  return (

      <SwiperSlide >
  <article className='flex justify-between bg-[#fff]  rounded h-40 overflow-hidden p-4'>
          <div>
              <h2 className='font-semibold text--xl'>{name}</h2>
              <p><small>{detail}</small></p>
              <h3 className='font-bold text-3xl mb-3'>{price}$</h3>
              <button className='border border-green-600 px-3 py-1 rounded hover:bg-green-600 hover:text-white transition-all'>Shop Now</button>
          </div>
          <div>
              <img className='w-20 -rotate-12' src={img} alt={name} />
          </div>
      </article>
  
      </SwiperSlide>
  )
})}

</div>
      </div>
    </Swiper>
  </div>
     </div>
    
  )
}

export default Productslider
