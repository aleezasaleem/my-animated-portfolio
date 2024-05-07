'use client'


import React, { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
import About from './Components/About';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Work from './Components/Work';


const page = () => {
  useEffect(()=>{
    AOS.init({
      duration: 800,
          once: false,
    });
    AOS.refresh();
  }, [])
  return (
    <div>
      <Hero />
     <About />
     <Skills />
     <Work/>
     <Contact />
    </div>
  )
}

export default page