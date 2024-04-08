'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useEffect } from 'react';


const Navbar = () => {
    
    const [openNav,setOpenNav]=useState(false)
    const toggleNavbar=()=>{
        setOpenNav(!openNav)
    }
  return (
  <nav className=' sticky bg-[#121212] top-0 left-0 right-0 z-10 w-full px-4 xl:px-8  '>
    <div className='flex  flex-wrap justify-between items-center mx-auto px-4 py-4 '>
   <p className='text-xl  md:text-4xl lg:text-5xl font-bold '>Aleeza</p>
        <div className=' hidden md:block md:w-auto'>
            <ul className='space-x-8   flex text-[#ADB7BE] rounded font-semibold   mx-6 p-4 md:p-0 md:flex-row md:space-x-8 mt-0 '>
                <Link href={'/'}><li className='hover:text-white '>Home</li></Link>
                <Link href={'/About'}><li className='hover:text-white '>About</li></Link>
                <Link href={'/Skills'}><li className='hover:text-white'>Skills</li></Link>
                <Link href={'/Work'}><li className='hover:text-white'>Work</li></Link>
                <Link href={'/Contact'}><li className='hover:text-white'>Contact</li></Link>
            </ul>
        </div>
        <div  className="lg:hidden md:hidden sm:flex flex-col justify-end  text-2xl">
            <button onClick={toggleNavbar} className="py-3">{openNav ? <RxCross2 /> :<HiMenuAlt3 />}</button>
        </div>
    </div>
    {
        openNav && (
            <div   className=" sticky    left-0 z-20 bg-[#121212] h-full   w-full p-4 flex flex-col justify-start items-start px-12   md:hidden">
                <ul className='space-x-4 text-[#ADB7BE] mt-4 font-semibold '>
                <Link href={'/'}><li className='hover:text-white'>Home</li></Link>
                <Link href={'/About'}><li className='hover:text-white'>About</li></Link>
                <Link href={'/Skills'}><li className='hover:text-white'>Skills</li></Link>
                <Link href={'/Work'}><li className='hover:text-white'>Work</li></Link>
                <Link href={'/Contact'}><li className='hover:text-white'>Contact</li></Link>
            </ul>
            </div>

        )
    }
  </nav>
  )
}

export default Navbar