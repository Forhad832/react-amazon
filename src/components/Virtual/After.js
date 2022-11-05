import React from 'react';
import ReactCompareImage from 'react-compare-image';
import After from '../../assets/after.png';
import Before from '../../assets/before.png';
import Shade from '../../assets/shade.png';
const AfterBefore = () => {
  return (
    <div className='container mx-auto px4'>
      <div className="grid grid-cols-2">
        <div className='w-96'>
          <h3 className='mb-5 text-4xl font-bold upperCase'>Vitual-Try-On</h3>
          <p className='mb-5 text-3xl uppercase'>NEVER BUY THE WRONG SHADE AGAIN!</p>
          <img className='w-32 mb-5' src={Shade} alt="shade" />
          <h3 className='mb-5 text-4xl font-bold upperCase'>Try Now!</h3>

        </div>
        <div className='w-full ml-auto'> 
          <ReactCompareImage leftImage={Before} rightImage={After} />
        </div>
      </div>
    </div>
  )
}

export default AfterBefore
