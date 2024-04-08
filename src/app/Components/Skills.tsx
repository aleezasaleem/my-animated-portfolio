import React from 'react'

import { FaCss3Alt, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { FiGithub } from 'react-icons/fi';
import { GiTBrick } from 'react-icons/gi';
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { SiSanity } from "react-icons/si";


const Skills = () => {
 

  return (
    <div data-aos="fade-up" className="bg-[#121212] py-8 px-4  sm:py-16 xl:px-14  ">
      <div data-aos="fade-up" className='text-center text-4xl lg:text-5xl ' >
        <h1 data-aos="fade-up" className='font-bold'>Skills And</h1>
        <span data-aos="fade-up" className='bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text
        font-bold'>Experience</span>
      </div>
      <div data-aos="fade-up" className='md:grid   md:grid-cols-2  gap-8 py-8 px-4 sm:py-16 xl:px-16 items-center'>
        <div>
        <p data-aos="fade-up" className='font-bold'>Nov 2023 - Present</p>
        <p data-aos="fade-up">Freelance</p>
        <h1 data-aos="fade-up" className='font-bold text-2xl'>Frontend Developer</h1>
        <p>Developed Frontend applications using the latest technologies</p>
        <ul >
          <li data-aos="fade-up-right">Front-end development with React.js and Next.js.</li>
          <li data-aos="fade-up-right">Styling expertise with Tailwind CSS, MUI, Chakra UI, Shadcn UI, and Custom CSS</li>
          <li data-aos="fade-up-right">Content management through Contentful and Sanity (Headless CMS).</li>
          <li data-aos="fade-up-right">Back-end development using Node.js, Express.js, and Next.js API routes.
       MongoDB and PostgreSQL for Database</li>
          <li data-aos="fade-up-right">Responsive design is an approach to web design that ensures web pages render well</li>
        </ul>
        </div>
        {/* skills */}
     <div  className='flex flex-wrap space-x-3 sm:space-x-0 justify-center '>
     <div> 
        <a data-aos="fade-up-right" className='flex transition-all duration-300 hover:bg-neutral-800 border border-neutral-700 cursor-pointer items-center justify-center mt-8 px-4 py-2 w-full sm:w-fit rounded-md mr-4  text-white'>HTML <FaHtml5 className='text-orange-800 ml-1 text-xl' />  </a>   
    </div>
    <div> 
        <a data-aos="fade-up-right" className=' transition-all duration-300 hover:bg-neutral-800 flex border border-neutral-700 cursor-pointer items-center justify-center mt-8 px-6 py-2 w-full sm:w-fit rounded-md mr-4  text-white'>CSS <FaCss3Alt className='text-indigo-900 ml-1 text-xl' />  </a>   
    </div>
    <div> 
        <a data-aos="fade-up-right" className=' transition-all duration-300 hover:bg-neutral-800 flex border border-neutral-700 cursor-pointer items-center justify-center mt-8 px-4 py-2 w-full sm:w-fit rounded-md mr-4  text-white'>Javascript <FaHtml5 className='text-yellow-600 ml-1 text-xl' />  </a>   
    </div>
    <div> 
        <a data-aos="fade-up-right" className='transition-all duration-300 hover:bg-neutral-800 flex border border-neutral-700 cursor-pointer items-center justify-center mt-8 px-4 py-2 w-full sm:w-fit rounded-md mr-4  text-white'>Typescript <SiTypescript className='text-blue-600 ml-1 text-xl' />  </a>   
    </div>
    <div> 
        <a data-aos="fade-up-right" className='transition-all duration-300 hover:bg-neutral-800 flex border border-neutral-700 cursor-pointer items-center justify-center mt-8 px-4 py-2 w-full sm:w-fit rounded-md mr-4  text-white'>React Js <FaReact className='text-sky-600 ml-1 text-xl' />  </a>   
    </div>
    <div> 
        <a data-aos="fade-up-right" className=' transition-all duration-300 hover:bg-neutral-800 flex border border-neutral-700 cursor-pointer items-center justify-center mt-8 px-4 py-2 w-full sm:w-fit rounded-md mr-4  text-white'>Next Js <SiNextdotjs className='text-purple-800 ml-1 text-xl' />  </a>   
    </div>
   
    <div> 
        <a data-aos="fade-up-right" className='transition-all duration-300 hover:bg-neutral-800 flex border border-neutral-700 cursor-pointer items-center justify-center mt-8 px-4 py-2 w-full sm:w-fit rounded-md mr-4  text-white'>GitHub <FiGithub className='text-neutral-800 ml-1 text-xl' />  </a>   
    </div>
    <div> 
        <a data-aos="fade-up-right" className='transition-all duration-300 hover:bg-neutral-800 flex border border-neutral-700 cursor-pointer items-center justify-center mt-8 px-4 py-2 w-full sm:w-fit rounded-md mr-4  text-white'>Node Js <FaNodeJs className='text-green-700 ml-1 text-xl' />  </a>   
    </div>
    <div> 
        <a data-aos="fade-up-right" className=' transition-all duration-300 hover:bg-neutral-800 flex border border-neutral-700 cursor-pointer items-center justify-center mt-8 px-4 py-2 w-full sm:w-fit rounded-md mr-4  text-white'>Sanity <SiSanity className='text-red-700 ml-1 text-xl' />  </a>   
    </div>
    <div> 
        <a data-aos="fade-up-right" className=' transition-all duration-300 hover:bg-neutral-800 flex border border-neutral-700 cursor-pointer items-center justify-center mt-8 px-6 py-2 w-full sm:w-fit rounded-md mr-4  text-white'>Git <GiTBrick className='text-red-700 ml-1 text-xl' />  </a>   
    </div>
    <div> 
        <a data-aos="fade-up-right" className='transition-all duration-300 hover:bg-neutral-800 flex border border-neutral-700 cursor-pointer items-center justify-center mt-8 px-4 py-2 w-full sm:w-fit rounded-md mr-4  text-white'>CSS Tailwind <SiTailwindcss className='text-sky-500 ml-1 text-xl' />  </a>   
    </div>
     </div>
       
    
      
      </div>
    </div>
  )
}

export default Skills