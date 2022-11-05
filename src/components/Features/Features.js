import React from 'react'
import plane from '../../assets/plane.png'
import Feature from './Feature'
const Features = () => {
  return (
   <>
    <div className='container px-4 py-20 mx-auto'>
      <div className="relative flex items-center justify-center gap-5">
        <img className='w-24 -mt-10' src={plane} alt="plane" />
        <h2 className='text-4xl font-bold '>Our Feature Products</h2>
      </div>
    </div>
    <Feature />
   </>
  )
}

export default Features
