import React from 'react'
import HeroImg from '../../assets/hero.png'
const Hero = () => {
  return (
    <div className='container mx-auto px-4'>
      <div className="grid grid-cols-1 md:grid-cols-12 py-20">
        <div className="col-span-3 flex flex-col justify-between mb-5 md:mb-0">
          <div className='w-20 py-4'>
            <span className='font-semibold text-3xl uppercase'>SKIN PROTECTION CREAM</span>
          </div>
          <div className=''>
            <span className='text-4xl mb-5 block uppercase font-bold'>Trendy Collection</span>
            <p>Seedily say has suitable disposal and boy. Exercise joy man children rejoiced.</p>
          </div>
        </div>



        <div className="col-span-6 flex items-center justify-center mb-5 md:mb-0">
          <div className="w-96 h-96 rounded-full bg-[#4649FF]">
              <div>
                <img src={HeroImg} alt="" />
              </div>
          </div>
        </div>






        <div className="col-span-3 flex flex-col justify-between text-left mb-5 md:mb-0 md:text-right  h-full">
          <div className=''>
            <span className='text-4xl mb-5 block uppercase font-bold'>1.5m</span>
            <p>Monthly Traffic</p>
          </div>
          <div className=''>
            <span className='text-4xl mb-5 block uppercase font-bold'>100k</span>
            <p>Happy Customers.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
