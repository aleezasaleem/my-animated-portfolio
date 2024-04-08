import Image from 'next/image'
import React from 'react'


const About = () => {
  return (
    <div data-aos="fade-up" className='md:grid   md:grid-cols-2  gap-8 py-8 px-4 sm:py-16 xl:px-16 items-center '>
        <div className=''>
            <Image data-aos="fade-up-right" src='/about-image.png' alt='about' width={500} height={500} /> 
        </div>
        <div className='mb-8'>
            <h1 data-aos="fade-up" className='font-bold text-5xl mt-4  text-white mb-6'>About Me</h1>
            <p data-aos="fade-up" className='text-base lg:text-lg'>I am frontend web developer, I am proficient in  front-end  technology, capable of building complete web applications from start to finish. My skill set likely includes languages and frameworks like HTML, CSS, JavaScript,Typescript (and popular libraries like React and Next), as well as server-side language like Node.js.I thrive on bringing ideas to life through clean, efficient code</p>
            <div className='py-4'>
            <span className='border-b-2 text-xl border-purple-700 text-[#ADB7BE] font-semibold'>Skills</span>
            <ul data-aos="fade-up" className='mt-4 space-y-1'>
                <li>Node Js</li>
                <li>React Js</li>
                <li>Angular Js</li>
                <li>Next js</li>
            </ul>
        </div>
        </div>
       
    </div>
  )
}

export default About