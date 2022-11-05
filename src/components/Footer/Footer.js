import React from 'react'
import { BsFillEnvelopeFill, BsTelephone } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { GoSignIn } from 'react-icons/go'
import { HiUsers } from 'react-icons/hi'
import Logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div>
      <div className="border border-white"></div>
      <div className="container px-4 pt-5 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5">
                <div className='flex gap-3'>
                    <img className='w-12 h-12' src={Logo} alt="" />
                    <h3 className='font-semibold'>amazon</h3>
                </div>
                <div className='my-5 md:my-0'>
                    <h3 className='mb-5 text-xl font-semibold'>Contact Us</h3>
                    <div className="mt-2">
                       <div className="flex gap-3 mb-4" ><CiLocationOn size={20} className='text-gray-700' /><a className='text-sm italic' href="location">111Rangpur, Bl 32801</a></div>
                      <div className="flex gap-3 mb-4"> <BsTelephone size={20} className='text-gray-700'/><a className='text-sm italic' href="location">01797911253</a></div>
                       <div className="flex gap-3 mb-4"><BsFillEnvelopeFill size={20} className='text-gray-700'/><a className='text-sm italic' href="location">forhadhossain0619@gmail.com</a></div>
                    </div>
                </div>
                <div>
                    <h3 className='mb-5 text-xl font-semibold'>Account</h3>
                    <div className="flex gap-3 mb-4">
                        <GoSignIn size={20} className='text-gray-700' /><a  href="sign" className='text-sm italic'>singnin</a>
                    </div>
                </div>
                <div>
                    <h3 className='mb-5 text-xl font-semibold'>Company</h3>
                    <div className="flex gap-3">
                        <HiUsers size={20} className='text-gray-700' /><a className='text-sm italic' href="about us">About us</a>
                    </div>
                </div>
                <div>
                    <h3 className='mb-5 text-xl font-semibold'>Resources</h3>
                    <a href="safe" className='text-sm italic'>Safety Privacy &amp; Terms</a>
                </div>
               
            </div>
            <p className='my-5 text-center'><small>Copyright ©2022 by Forhad,
All rights reserved.</small></p>
      </div>
    </div>
  )
}

export default Footer
