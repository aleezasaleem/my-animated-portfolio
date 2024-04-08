'use client'
import React from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Work from './Components/Work/Work'

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
      <Work />
      <Contact />
    </div>
  )
}

export default page