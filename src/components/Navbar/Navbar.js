import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import Logo from '../../assets/logo.png';
const Navbar = () => {
    const [nav,setNav] = useState(false);
  return (
    <nav className='py-4 '>
        <div className="container px-4 mx-auto">
        <div className="relative flex items-center justify-between">
        <div className="flex items-center"><img className='w-12 pr-4' src={Logo} alt="Logo" /> <span className='font-bold '>amazon</span>
        </div>
        <div className="hidden gap-8 md:flex">
        <li className='list-none'><a className='font-semibold' href="collections">Collection</a></li>
            <li className='list-none'><a className='font-semibold' href="brands">Brands</a></li>
            <li className='list-none'><a className='font-semibold' href="new">New</a></li>
            <li className='list-none'><a className='font-semibold' href="sales">Sales</a></li>
            <li className='list-none'><a className='font-semibold' href="eng">ENG</a></li>
            <li className='list-none'><input className='w-32 px-2 py-1 rounded outline-none' type="search" placeholder='search' /></li>
        </div>
        {nav &&  <div className="flex items-center justify-center flex-col w-full absolute top-16   md:hidden gap-8 py-3 text-white overflow-x-hidden bg-[#003434]">
            <li className='list-none'><a className='font-semibold' href="collections">Collection</a></li>
            <li className='list-none'><a className='font-semibold' href="brands">Brands</a></li>
            <li className='list-none'><a className='font-semibold' href="new">New</a></li>
            <li className='list-none'><a className='font-semibold' href="sales">Sales</a></li>
            <li className='list-none'><a className='font-semibold' href="eng">ENG</a></li>
            <li className='list-none'><input className='w-full px-2 py-1 rounded outline-none' type="search" placeholder='search' /></li>
        </div>}
        <div onClick={()=>setNav(!nav)} className="block cursor-pointer md:hidden">
           {nav ? <MdClose size={30} />  : <FaBars  size={30}/>}
        </div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar
