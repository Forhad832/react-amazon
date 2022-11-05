import React from 'react'
import HeroImg from '../../assets/testimonialHero.png'
const Rated = () => {
  return (
    <div className='container px-4 py-20 mx-auto'>
         <div className="grid items-center grid-cols-1 py-20 md:grid-cols-12">
        <div className="col-span-3 mb-5 md:mb-0">
         
          <div className=''>
            <span className='block mb-5 text-4xl font-bold uppercase'>TOP RATED</span>
            <p>SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY. EXERCISE JOY MAN CHILDREN REJOICED.</p>
          </div>
        </div>



        <div className="flex items-center justify-center col-span-6 mb-5 md:mb-0">
          
              <div>
                <img className='w-96 ' src={HeroImg} alt="" />
              </div>
          
        </div>






        <div className="col-span-3 mb-5 text-left md:mb-0 md:text-right">
  
          <div className=''>
            <span className='block mb-5 text-4xl font-bold uppercase'>100k</span>
            <p>Happy Customers With Us.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rated
