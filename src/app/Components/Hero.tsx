'use client'
import Link from 'next/link';
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Hero = () => {
  
  
  const router=useRouter()
  return (
   
    <div data-aos="fade-up" className='grid grid-cols-1 sm:grid-cols-12 h-screen  bg-[#121212]'>
      <div className='col-span-7 px-12  md:px-14 text-center sm:text-left'>
        <h1 className='text-xl mt-6 md:mt-12  sm:text-2xl md:text-3xl  text-white  tracking-wider'> 👋🏻Hello, I am</h1>
        <h1 className='text-3xl  tracking-wide sm:text-3xl md:text-4xl lg:text-6xl bg-gradient-to-r from-purple-500 to-pink-600 text-transparent
        bg-clip-text font-serif font-bold   md:mt-7 lg:mt-8 mt-4 '>Aleeza Saleem</h1>
        <h1 className=' text-2xl mt-4  sm:text-3xl md:text-4xl  lg:text-5xl  text-white font-semibold md:mt-5  '>
        <TypeAnimation 
      sequence={[
        // Same substring at the start will only be typed out once, initially
         // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'Frontend Developer',
        1000,
        'UI/UX Designer',
        1000
      ]}
      wrapper="span"
      speed={50}
      
      repeat={Infinity}
    />
        </h1>
        <p data-aos="fade-up" className='text-[#ADB7BE] md:mt-4 mt-4  text-base sm:text-lg  lg:text-xl'>Hey  I am Aleeza, an experienced web developer committed
        {' '} to building responsive websites that engage and inspire</p>
       
       
         <div> 
        <a data-aos="fade-up-right" href='https://github.com/aleezasaleem' className='flex items-center justify-center mt-8 px-6 py-3 w-full sm:w-fit rounded-md mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white hover:scale-105'>Github Profile </a>
        
    </div>
        
      </div>
      <div className='col-span-5 place-self-center mb-12 lg:mt-0'>
        <div className='bg-[#181818] rounded-full w-[250px] h-[250px] lg:w-[400] lg:h-[400] relative'>
          <Image 
          src={'/hero-image.png'}
          alt='hero-image'
          className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
          width={300}
        height={300} />
        </div>

      </div>
    
    </div>
  
  )
}

export default Hero